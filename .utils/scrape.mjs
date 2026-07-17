// crawl every content page of the Deepwoken wiki into index/.
// usage: node .utils/scrape.mjs [--limit N] [--page "Title"] [--concurrency N] [--force] [--retranslate]
//
// Enumerates ns 0 non-redirect pages via generator=allpages (~6 requests), then
// fetches each page serially through action=parse at ~1 req/sec with jitter.
// We also skip identical revisions by committing the revision map
import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { translate, slug } from "./translate.mjs";

const API = "https://deepwoken.fandom.com/api.php";
const UA = "deepwoken-wiki-archive/1.0 (https://github.com/pocamind/deepwoken-wiki; contact via repo issues) node-fetch";
const UTILS = dirname(fileURLToPath(import.meta.url));
const ROOT = join(UTILS, "..", "index");
const STATE_FILE = join(UTILS, "state", "pages.json");
// raw parse JSON per pageid, so translator changes can re-run without re-fetching
const CACHE = join(UTILS, "cache");
const MAX_RETRIES = 5;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const throttle = () => sleep(1000 + Math.random() * 300);

// one API round-trip with maxlag, Retry-After, and backoff handling.
// maxlag/ratelimited arrive as HTTP 200 with an error body — check the JSON.
async function api(params) {
    const url = API + "?" + new URLSearchParams({ ...params, format: "json", formatversion: "2", maxlag: "5" });
    for (let attempt = 0; ; attempt++) {
        const res = await fetch(url, { headers: { "User-Agent": UA } });
        if (res.status === 403) throw new Error("HTTP 403 — Cloudflare has flagged this client; stop and slow down");
        const retriable = res.status === 429 || res.status === 503;
        const json = retriable ? null : await res.json().catch(() => null);
        const softError = json?.error?.code === "maxlag" || json?.error?.code === "ratelimited";
        if (retriable || softError) {
            if (attempt >= MAX_RETRIES) throw new Error(`${softError ? json.error.code : "HTTP " + res.status} after ${attempt} retries`);
            const retryAfter = Number(res.headers.get("retry-after"));
            const wait = retryAfter > 0 ? retryAfter * 1000 : 2 ** attempt * 1000 + Math.random() * 1000;
            console.warn(`${softError ? json.error.code : "HTTP " + res.status}, waiting ${Math.round(wait / 1000)}s`);
            await sleep(wait);
            continue;
        }
        if (!res.ok || !json) throw new Error(`HTTP ${res.status} for ${url}`);
        if (json.error) throw new Error(`API error ${json.error.code}: ${json.error.info}`);
        return json;
    }
}

async function enumeratePages() {
    const pages = [];
    let cont = {};
    while (cont) {
        const json = await api({
            action: "query",
            generator: "allpages",
            gapnamespace: "0",
            gapfilterredir: "nonredirects",
            gaplimit: "500",
            prop: "info",
            ...cont,
        });
        pages.push(...(json.query?.pages ?? []));
        cont = json.continue ?? null;
        if (cont) await throttle();
    }
    return pages;
}

async function fetchParse(title) {
    const json = await api({
        action: "parse",
        page: title,
        prop: "text|revid|displaytitle|categories",
        disableeditsection: "true",
        disabletoc: "true",
        disablelimitreport: "1",
        redirects: "1",
    });
    mkdirSync(CACHE, { recursive: true });
    writeFileSync(join(CACHE, json.parse.pageid + ".json"), JSON.stringify(json.parse));
    return json.parse;
}

const state = existsSync(STATE_FILE) ? JSON.parse(readFileSync(STATE_FILE, "utf8")) : {};

function saveState() {
    mkdirSync(dirname(STATE_FILE), { recursive: true });
    writeFileSync(STATE_FILE, JSON.stringify(state, null, 2) + "\n");
}

function writePage(parse) {
    const prev = state[parse.pageid];
    if (prev && prev.title !== parse.title) rmSync(join(ROOT, slug(prev.title)), { force: true });
    const { markdown, filename } = translate(parse);
    const outPath = join(ROOT, filename);
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, markdown);
    state[parse.pageid] = { title: parse.title, lastrevid: parse.revid };
    return filename;
}

const args = process.argv.slice(2);
const limitIdx = args.indexOf("--limit");
const limit = limitIdx >= 0 ? Number(args[limitIdx + 1]) : Infinity;
const pageIdx = args.indexOf("--page");
const concIdx = args.indexOf("--concurrency");
// capped at 2 in flight: Cloudflare is the only rate gate and a 403 flag stalls everything
const concurrency = Math.min(concIdx >= 0 ? Number(args[concIdx + 1]) || 1 : 1, 2);
// --force re-fetches unchanged pages, e.g. to apply a translator change corpus-wide
const force = args.includes("--force");

if (args.includes("--retranslate")) {
    const files = readdirSync(CACHE).filter((f) => f.endsWith(".json"));
    let n = 0;
    for (const f of files) {
        writePage(JSON.parse(readFileSync(join(CACHE, f), "utf8")));
        if (++n % 250 === 0) console.log(`${n}/${files.length}`);
    }
    saveState();
    console.log(`retranslated ${n} pages from cache`);
    process.exit(0);
}

if (pageIdx >= 0) {
    const parse = await fetchParse(args[pageIdx + 1]);
    const filename = writePage(parse);
    saveState();
    console.log(`wrote ${filename} (revid ${parse.revid})`);
    process.exit(0);
}

console.log("enumerating pages...");
const all = await enumeratePages();
console.log(`${all.length} content pages`);

// pages deleted (or redirected) on the wiki since the last run: enumeration is
// complete, so anything in state but not in it is gone — remove its file too
const live = new Set(all.map((p) => String(p.pageid)));
for (const [pageid, entry] of Object.entries(state)) {
    if (live.has(pageid)) continue;
    rmSync(join(ROOT, slug(entry.title)), { force: true });
    rmSync(join(CACHE, pageid + ".json"), { force: true });
    delete state[pageid];
    console.log(`pruned ${entry.title} (gone from wiki)`);
}

let written = 0, skipped = 0, failed = 0, next = 0, aborted = null;
async function worker() {
    while (next < all.length && written < limit && !aborted) {
        const page = all[next++];
        if (!force && state[page.pageid]?.lastrevid === page.lastrevid && existsSync(join(ROOT, slug(state[page.pageid].title)))) {
            skipped++;
            continue;
        }
        await throttle();
        try {
            const filename = writePage(await fetchParse(page.title));
            written++;
            if (written % 25 === 0) {
                saveState();
                console.log(`${written + skipped}/${all.length} (${filename})`);
            }
        } catch (err) {
            failed++;
            console.error(`FAILED ${page.title}: ${err.message}`);
            if (err.message.startsWith("HTTP 403")) aborted = err;
        }
    }
}
await Promise.all(Array.from({ length: concurrency }, worker));
saveState();
if (aborted) throw aborted;
console.log(`done: ${written} written, ${skipped} unchanged, ${failed} failed`);
