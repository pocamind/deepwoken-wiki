// Denoise MediaWiki action=parse JSON into markdown
// usage: node translate.mjs <parse.json> [outdir]
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname, posix } from "node:path";
import { pathToFileURL } from "node:url";
import * as cheerio from "cheerio";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";

const WIKI_BASE = "https://deepwoken.fandom.com/wiki/";

// title -> repo path. one rule, used for both filenames and rewritten links.
// slashes in titles nest as folders (route /wiki/A/B -> A/B.md); characters
// invalid in Windows filenames are percent-encoded per segment, as is the
// first letter of reserved DOS device names (Con -> %43on) and a trailing dot.
export function slug(title) {
    return title
        .split("/")
        .map((seg) =>
            seg
                .replace(/ /g, "_")
                .replace(/[<>:"\\|?*]/g, (c) => "%" + c.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0"))
                .replace(/^(con|prn|aux|nul|com[0-9]|lpt[0-9])$/i, (m) => "%" + m.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0") + m.slice(1))
                .replace(/\.$/, "%2E")
        )
        .join("/") + ".md";
}

// markdown link destination, <>-wrapped when it contains characters that break ()-syntax
function linkDest(dest) {
    return /[()\s'"]/.test(dest) ? `<${dest}>` : dest;
}

function yamlEscape(s) {
    return /[:#\[\]{}&*!|>'"%@`,\n-]/.test(s) ? JSON.stringify(s) : s;
}

// text of a node with list items / line breaks joined by ", "
function listAwareText($, el) {
    const $el = $(el).clone();
    $el.find("li, br").each((_, e) => $(e).before(", "));
    return $el.text().replace(/\s+/g, " ").replace(/(, )+/g, ", ").replace(/^, |, $/g, "").trim();
}

export function translate(parse) {
    const html = parse.text.replace(/<!--[\s\S]*?-->/g, ""); // volatile NewPP/cache reports
    const $ = cheerio.load(html);
    const selfDir = posix.dirname(slug(parse.title));

    // ---- infobox -> a markdown table at the top of the body (it is page content,
    // not file metadata)
    const infoboxes = [];
    $("aside.portable-infobox").each((_, aside) => {
        const $a = $(aside);
        const box = { title: $a.find(".pi-title").first().text().trim(), rows: [] };
        $a.find("[data-source]").each((_, el) => {
            const $el = $(el);
            const key = $el.attr("data-source");
            if (!key || $el.hasClass("pi-data-label")) return;
            const valueEl = $el.hasClass("pi-data-value") ? el : $el.find(".pi-data-value").first()[0];
            if (!valueEl) return;
            const value = listAwareText($, valueEl);
            if (value) box.rows.push([key, value]);
        });
        if (box.title || box.rows.length) infoboxes.push(box);
        $a.remove();
    });

    // ---- status banners ({{Stub}}, {{CutContent}}, ...) -> frontmatter notices.
    // the flag itself is signal (cut/event/dev-exclusive content reads very
    // differently), but the banner table is noise.
    const notices = [];
    $("div.StatusTitle").each((_, el) => {
        const $el = $(el);
        const $box = $el.closest("table");
        const title = $el.text().replace(/\s+/g, " ").trim();
        const body = $box.find(".StatusBody").text().replace(/\s+/g, " ").trim();
        const note = [title, body].filter(Boolean).join(" ");
        if (note && !notices.includes(note)) notices.push(note);
        ($box.length ? $box : $el).remove();
    });

    // ---- tab UIs ({{Tabber}}) -> "**Label:**" blocks pairing each tab with its
    // panel; innermost first so nesting flattens cleanly. also kills the volatile
    // per-parse ids tabber markup carries.
    const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
    let $tabbers;
    while (($tabbers = $("div.wds-tabber").filter((_, t) => $(t).find(".wds-tabber").length === 0)).length) {
        $tabbers.each((_, t) => {
            const $t = $(t);
            const labels = $t.find(".wds-tabs__tab-label").toArray().map((l) => $(l).text().trim());
            const parts = $t.children(".wds-tab__content").toArray().map((p, i) =>
                `<p><strong>${esc(labels[i] ?? "Tab " + (i + 1))}:</strong></p>${$(p).html()}`);
            $t.replaceWith(parts.join(""));
        });
    }

    // ---- variant nav buttons ({{Topbuttons}}) -> a plain "Variants:" line
    $(".dw-topbuttons").each((_, div) => {
        const $div = $(div);
        const others = $div.find("a[href]").toArray()
            .map((a) => `<a href="${$(a).attr("href")}">${$(a).text().trim()}</a>`)
            .join(" · ");
        $div.replaceWith(others ? `<p>Variants: ${others}</p>` : "");
    });

    // ---- strip noise. noscript matters: cheerio parses its content as text so the
    // img pass never sees the lazy-load fallback imgs inside, but turndown's parser
    // treats them as elements and would emit markdown images.
    $(".navbox, .wikia-gallery, .gallery, style, script, noscript, audio, video, .mw-editsection, .toc, .mw-collapsible-toggle").remove();

    // ---- normalize lazy-loaded images, then reduce images to alt text or drop
    $("img").each((_, img) => {
        const $img = $(img);
        const src = $img.attr("data-src") || $img.attr("src") || "";
        const alt = ($img.attr("alt") || "").trim();
        if (src.startsWith("data:")) { $img.remove(); return; }
        // inline icons read as noise in prose; keep only meaningful alt text
        // (filename-ish alts like "Notes2" or "KnowledgeSprite" are icons)
        if (alt && !/\.(png|jpg|jpeg|gif|webp)$/i.test(alt) && !/(icon|sprite)$/i.test(alt) && !/^[a-z]+\d+$/i.test(alt)) $img.replaceWith(alt);
        else $img.remove();
    });

    // ---- links (anchors emptied by image removal go first — they survive inside kept-HTML tables)
    $("a").each((_, a) => {
        const $a = $(a);
        if (!$a.text().trim() && $a.children().length === 0) { $a.remove(); return; }
        const href = $a.attr("href") || "";
        // image-file links: the text is a filename-derived caption, not content
        if (href.includes("static.wikia.nocookie.net")) { $a.remove(); return; }
        const isRed = $a.hasClass("new") || href.includes("redlink=1");
        if (isRed || !href || href === "#") { $a.replaceWith($a.text()); return; }
        if (href.startsWith("#")) {
            $a.attr("href", "#" + href.slice(1).toLowerCase().replace(/[^\w\- ]/g, "").replace(/[ _]/g, "-"));
            return;
        }
        if (href.startsWith("/wiki/")) {
            const target = decodeURIComponent(href.slice("/wiki/".length));
            const [page, section] = target.split("#");
            if (/^(File|Category|Special|Template|Help|User.*):/.test(page)) {
                $a.replaceWith($a.text());
                return;
            }
            const anchor = section ? "#" + section.toLowerCase().replace(/[^\w\- ]/g, "").replace(/[ _]/g, "-") : "";
            // literal % in a slug must be double-encoded so URL-decoding renderers resolve the file
            $a.attr("href", page ? posix.relative(selfDir, slug(page.replace(/_/g, " "))).replace(/%/g, "%25") + anchor : anchor);
        }
        // external links keep their absolute href
    });

    // ---- tables: GFM can't express rowspan/colspan, nesting, or block content in
    // cells — those stay as HTML (ours via keep-html, the rest via the gfm plugin's
    // own fallback). strip every table down to the structure that carries meaning:
    // rowspan/colspan (non-default) and link hrefs. classes, styles and wrapper
    // spans are wiki chrome; converted-to-GFM tables lose attributes anyway.
    $("table").each((_, t) => {
        const $t = $(t);
        $t.find("*").addBack().each((_, el) => {
            for (const [name, val] of Object.entries(el.attribs ?? {})) {
                const structural = (name === "rowspan" || name === "colspan") && val !== "1";
                if (!structural && !(name === "href" && el.tagName === "a")) $(el).removeAttr(name);
            }
        });
        let $spans;
        while (($spans = $t.find("span")).length) {
            const $s = $spans.first();
            $s.replaceWith($s.html() ?? "");
        }
        if ($t.find("[rowspan], [colspan], table").length > 0) $t.addClass("keep-html");
    });

    const td = new TurndownService({
        headingStyle: "atx",
        codeBlockStyle: "fenced",
        bulletListMarker: "-",
    });
    td.use(gfm);
    td.keep((node) => node.nodeName === "TABLE" && /\bkeep-html\b/.test(node.getAttribute("class") || ""));
    td.addRule("linkDest", {
        filter: (node) => node.nodeName === "A" && node.getAttribute("href"),
        replacement: (content, node) => content.trim() ? `[${content}](${linkDest(node.getAttribute("href"))})` : "",
    });

    let body = td
        .turndown($("div.mw-parser-output").html() ?? $.html())
        .replace(/\n{3,}/g, "\n\n")
        .trim();

    // nested tabbers survive as literal wikitext (TabberNeue re-parses them
    // client-side only) -> same "**Label:**" form. also drop broken [[File:]] remnants.
    body = body
        .replace(/\{\{#tag:tabber\|([\s\S]*?)\}\}/g, (_, inner) =>
            inner.split("|-|").map((tab) => {
                const eq = tab.indexOf("=");
                return eq === -1 ? tab.trim() : `**${tab.slice(0, eq).trim()}:** ${tab.slice(eq + 1).trim()}`;
            }).join("\n\n"))
        .replace(/(\\?\[){2}File:[\s\S]*?(\\?\]){1,2}/g, "")
        .replace(/ ([.,])(?=\s|$)/g, "$1") // dropped inline icons leave " ." behind
        .replace(/<table class="keep-html">/g, "<table>"); // internal marker

    body = pruneEmptySections(body);

    const categories = (parse.categories ?? [])
        .filter((c) => !c.hidden)
        .map((c) => (c.category ?? c["*"] ?? "").replace(/_/g, " "))
        .filter(Boolean);

    const fm = [
        "---",
        `title: ${yamlEscape(parse.title)}`,
        `revid: ${parse.revid}`,
        `source: ${WIKI_BASE}${encodeURIComponent(parse.title.replace(/ /g, "_")).replace(/%2F/g, "/")}`,
        "license: CC BY-SA 3.0 (content derived from the Deepwoken Wiki)",
        ...(categories.length ? [`categories: [${categories.map(yamlEscape).join(", ")}]`] : []),
        ...(notices.length ? ["notices:", ...notices.map((n) => `  - ${yamlEscape(n)}`)] : []),
        "---",
        "",
    ].join("\n");

    const cell = (s) => s.replace(/\|/g, "\\|");
    const infoboxMd = infoboxes
        .map((box) =>
            [
                `| ${cell(box.title || "Infobox")} | |`,
                "|---|---|",
                ...box.rows.map(([k, v]) => `| ${cell(k)} | ${cell(v)} |`),
            ].join("\n") + "\n\n")
        .join("");

    return { markdown: fm + "\n# " + parse.title + "\n\n" + infoboxMd + body + "\n", filename: slug(parse.title) };
}

// drop headings whose section (until the next heading of same or higher level) is empty,
// repeating so a parent emptied by a removed child goes too (e.g. Gallery > Enchantments)
function pruneEmptySections(md) {
    let prev;
    do {
        prev = md;
        const lines = md.split("\n");
        const out = [];
        for (let i = 0; i < lines.length; i++) {
            const m = lines[i].match(/^(#{1,6}) /);
            if (!m) { out.push(lines[i]); continue; }
            const level = m[1].length;
            let j = i + 1;
            let hasContent = false;
            for (; j < lines.length; j++) {
                const n = lines[j].match(/^(#{1,6}) /);
                if (n && n[1].length <= level) break;
                if (!n && lines[j].trim()) hasContent = true;
            }
            if (hasContent) out.push(lines[i]);
        }
        md = out.join("\n").replace(/\n{3,}/g, "\n\n").trim();
    } while (md !== prev);
    return md;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href && process.argv[2]) {
    const { parse } = JSON.parse(readFileSync(process.argv[2], "utf8"));
    const outdir = process.argv[3] ?? ".";
    const { markdown, filename } = translate(parse);
    mkdirSync(join(outdir, dirname(filename)), { recursive: true });
    writeFileSync(join(outdir, filename), markdown);
    console.log(`wrote ${join(outdir, filename)} (${markdown.length} bytes from ${parse.text.length} bytes of HTML)`);
}
