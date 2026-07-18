# Deepwoken Wiki Archive

A markdown mirror of the [Deepwoken Wiki](https://deepwoken.fandom.com). Every route/wiki page is stored as one file per under `index/`, nested by route. All hyperlinks to other wiki pages reference files in this repo.

We do not archive images and image links.

## Attribution and license

All page content is derived from the [Deepwoken Wiki](https://deepwoken.fandom.com),
available under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)
(see [LICENSE](LICENSE)), and has been modified from the original: pages are
converted from HTML to MD, with images, navigation, and some
formatting removed.

Attribution is provided per page in each file's frontmatter, containing its `source`
URL (original article) and the `revid` of the wiki revision it was
generated from. For any page, the full list of authors is available through its
source link's history (`<source>?action=history`), per the attribution
conventions for CC BY-SA wiki content.

Use of the MediaWiki API in such a manner is permitted, see below.

## Data collection and API use

Pages are collected through the MediaWiki API (`api.php`), which is
permitted on two levels:

**Fandom's `robots.txt` allows it.**
[deepwoken.fandom.com/robots.txt](https://deepwoken.fandom.com/robots.txt) grants API access to the generic UA, along with the endpoints we use:

```
User-agent: *
Allow: /api.php?
Allow: /api.php?action=
Allow: /api.php?*&action=
```

**We follow MediaWiki's [API Etiquette](https://www.mediawiki.org/wiki/API:Etiquette).**
   - Every request is read-only
   - There is no explicit rate-limit ("no hard speed limit on read requests.")
   - Every request has a descriptive `User-Agent` with contact info

Content redistribution is separately covered by CC BY-SA 3.0 with per-page
attribution, as described above.

