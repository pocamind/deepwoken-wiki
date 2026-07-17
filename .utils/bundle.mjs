// bundle the index/ corpus into .dist/wiki.json, a flat filesystem-like map of
// nodes keyed by wiki title. Deterministic
// usage: node .utils/bundle.mjs
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { join, dirname, posix } from "node:path";
import { fileURLToPath } from "node:url";
import { pathToFileURL } from "node:url";

const UTILS = dirname(fileURLToPath(import.meta.url));
const INDEX = join(UTILS, "..", "index");
const OUT = join(UTILS, "..", ".dist", "wiki.json");

const unquote = (s) => (s.startsWith('"') ? JSON.parse(s) : s);

// the frontmatter is our own generator's output: flat keys, JSON-quoted when
// risky, flow seqs for categories, a block seq for notices.
function parseFrontmatter(md) {
    const lines = md.split("\n");
    const fm = {};
    let i = 1;
    let seq = null;
    for (; i < lines.length && lines[i] !== "---"; i++) {
        if (lines[i].startsWith("  - ")) { fm[seq].push(unquote(lines[i].slice(4))); continue; }
        const m = lines[i].match(/^([\w]+): ?(.*)$/);
        if (!m) continue;
        const [, key, val] = m;
        if (val === "") { fm[key] = []; seq = key; }
        else if (val.startsWith("[")) {
            fm[key] = (val.slice(1, -1).match(/"(?:[^"\\]|\\.)*"|[^,]+/g) ?? [])
                .map((t) => t.trim()).filter(Boolean).map(unquote);
        } else fm[key] = unquote(val);
    }
    return { fm, body: lines.slice(i + 1).join("\n").replace(/^\n+/, "") };
}

function* walk(dir, rel = "") {
    for (const e of readdirSync(dir, { withFileTypes: true }).sort((a, b) => (a.name < b.name ? -1 : 1))) {
        const r = rel ? rel + "/" + e.name : e.name;
        if (e.isDirectory()) yield* walk(join(dir, e.name), r);
        else if (e.name.endsWith(".md")) yield r;
    }
}

// the repo keeps GitHub-navigable relative .md links; bundle content rewrites
// them to the node paths agents pass to wiki_read. markdown links and hrefs
// inside kept-HTML tables both count. unresolvable targets are left untouched.
const MD_LINK = /\]\(<?([^)<>#\s][^)<>#]*\.md)(#[^)>]*)?>?\)/g;
const HTML_HREF = /href="([^"#]+\.md)(#[^"]*)?"/g;

function rewriteLinks(body, dir, fileToTitle) {
    const resolve = (dest) => {
        if (/^[a-z]+:/i.test(dest)) return null;
        try {
            const rel = posix.normalize(posix.join(dir === "." ? "" : dir, decodeURIComponent(dest)));
            return fileToTitle.get(rel) ?? null;
        } catch {
            return null;
        }
    };
    return body
        .replace(MD_LINK, (m, dest, frag = "") => {
            const title = resolve(dest);
            if (title === null) return m;
            const path = title + frag;
            return /[()\s'"]/.test(path) ? `](<${path}>)` : `](${path})`;
        })
        .replace(HTML_HREF, (m, dest, frag = "") => {
            const title = resolve(dest);
            return title === null ? m : `href="${title.replace(/"/g, "&quot;")}${frag}"`;
        });
}

export function buildBundle() {
    const nodes = {};
    const node = (key) => (nodes[key] ??= {});

    const docs = [];
    const fileToTitle = new Map();
    for (const rel of walk(INDEX)) {
        const { fm, body } = parseFrontmatter(readFileSync(join(INDEX, rel), "utf8"));
        docs.push({ rel, fm, body });
        fileToTitle.set(rel, fm.title);
    }

    for (const { rel, fm, body } of docs) {
        const title = fm.title;
        Object.assign(node(title), {
            title,
            revid: Number(fm.revid),
            source: fm.source,
            file: "index/" + rel,
            ...(fm.categories?.length ? { categories: fm.categories } : {}),
            ...(fm.notices?.length ? { notices: fm.notices } : {}),
            content: rewriteLinks(body, posix.dirname(rel), fileToTitle),
        });

        // register the title in its ancestor folders, creating them as needed
        const segs = title.split("/");
        let cur = "";
        for (const seg of segs) {
            const f = node(cur);
            (f.children ??= []).includes(seg) || f.children.push(seg);
            cur = cur ? cur + "/" + seg : seg;
        }
    }
    const pages = docs.length;

    for (const n of Object.values(nodes)) n.children?.sort();
    const sorted = Object.fromEntries(Object.keys(nodes).sort().map((k) => [k, nodes[k]]));

    const bundle = {
        meta: {
            source: "https://deepwoken.fandom.com",
            license: "CC BY-SA 3.0 (content derived from the Deepwoken Wiki)",
            pages,
        },
        nodes: sorted,
    };
    mkdirSync(dirname(OUT), { recursive: true });
    writeFileSync(OUT, JSON.stringify(bundle, null, 2) + "\n");
    return pages;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
    console.log(`bundled ${buildBundle()} pages -> .dist/wiki.json`);
}
