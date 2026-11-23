# Technical SEO audit: www.brandscalinghacks.com (23 Nov 2026)

Scope: brandscalinghacks.com only.

Sources (all checked directly, nothing assumed):
- Live site crawl from the home page, following only HTML links, as Googlebot.
- Live robots.txt and sitemaps.
- Search Console URL Inspection API for all 168 sitemap URLs (22 Nov), plus the sitemaps report.
- Search Console performance, 25 Oct to 21 Nov.
- Headless Chrome rendering of all 168 sitemap pages on a mobile screen.

## Summary

| # | Check | Result | Status |
|---|---|---|---|
| 1 | Google indexing | 70 of 168 sitemap URLs indexed; 46 "Discovered, not indexed"; 50 unknown to Google; 2 show an old noindex | **Main problem** |
| 2 | Canonical tags | 246 of 246 live pages have a correct self-referencing canonical; Google agrees on every indexed URL | OK |
| 3 | Robots and noindex | robots.txt allows everything except /404 and tracking parameters; 0 sitemap URLs carry noindex; noindex is only on 78 consolidated case pages (intended) | OK |
| 4 | Sitemap | 168 URLs, all 200, all self-canonical, all indexable; no indexable page left out; Google read all 6 sitemaps (0 errors) | OK (1 old feed error) |
| 5 | Internal links | All 168 sitemap URLs reachable through normal HTML links; maximum 2 clicks from the home page; every page has 3+ internal links | OK |
| 6 | Rendering | All 168 pages render 1 visible H1 and their full content on mobile, with 0 JavaScript errors; content is also in the raw HTML before JavaScript | OK |
| 7 | Duplicate content | No near-duplicate indexable pages, except privacy vs terms and some overlap between case-study hub pages; 4 old case URLs (Instagram codes) still indexed by Google although they redirect | Minor |
| 8 | Page quality | No thin indexable pages (lowest: privacy and terms); median about 1,430 unique words per page; case pages 390 to 500 unique words | OK, case pages lightest |
| 9 | Mobile and speed | 0 horizontal-scroll or tap-target problems on 168 pages; inner pages LCP 0.7 to 1.5 s, CLS 0; **home page CLS 0.15 and LCP 2.2 to 4.3 s** | Home page needs a fix |
| 10 | Search performance | 28 days: 1,253 impressions, 9 clicks, CTR 0.7%, average position about 47; desktop 86% of impressions | Positions too low |

## 1. Google indexing (URL Inspection, 22 Nov)

| Page type | Indexed | Discovered, not crawled | Unknown to Google | Other |
|---|---|---|---|---|
| Core and service pages (27) | 18 | 0 | 9 | |
| Blog posts (33) | 10 | 20 | 3 | |
| Case pages (45 in sitemap) | 15 | 15 | 13 | 2 with old noindex |
| Industry pages (16) | 6 | 9 | 1 | |
| Glossary (16) | 1 | 0 | 15 | |
| Calculators (11) | 5 | 1 | 5 | |
| Case hubs (6) | 3 | 0 | 3 | |
| Locations (8) | 8 | 0 | 0 | |
| Comparisons and benchmarks (6) | 4 | 1 | 1 | |

- "Discovered, currently not indexed" (46): Google knows these URLs but has not spent crawl time on them. On a 4-week-old site with 0 links from other sites, this is the expected pattern. Google allots crawl time by site authority and demand.
- "Crawled, currently not indexed": none. No page was crawled and rejected for quality.
- "Duplicate, Google chose a different canonical": none.
- Old noindex (2): /cases/21k-day-4month-old-dropshipping-store-here-did-it and /cases/winning-product-can-change-everything-here-made-product-5-figure. Both were crawled on 11 Nov, when they were still noindex. They were made indexable on 16 Nov and the live pages now say "index, follow". They clear when Google recrawls them.

## 2 to 5. Canonicals, robots, sitemap, links (live crawl)

- 246 pages reached from the home page by HTML links. All return 200 and all have a self-referencing canonical.
- Redirects work: http to https, a trailing slash to no slash, and old case URLs to their new slugs, all with one 301 each. Unknown URLs return a real 404.
- The sitemap index lists 5 sitemaps with 168 URLs. All are 200, canonical and indexable. No indexable, self-canonical page is missing from them.
- Search Console has 7 submitted sitemaps, all downloaded between 19 and 22 Nov with 0 errors, except feed.xml with 1 error from its 19 Nov download. The feed is valid today: 32 items, all links 200. Check the error detail in Search Console, then resubmit the feed.
- Click depth: home 0, 89 pages at 1 click, 78 at 2 clicks.

## 6. Rendering

- Raw HTML (before JavaScript) holds each page's full text. The lowest is 576 words (privacy policy); the median is 1,857.
- Rendered with a mobile Googlebot user agent, all 168 pages show 1 visible H1, 300+ words of visible text and no JavaScript errors.

## 7. Duplicate content

- Pairs of indexable pages with 35% or more shared text, after removing the header, footer and other shared blocks:
  - privacy vs terms (52%)
  - /case-studies vs /case-studies/dropshipping-dtc (46%)
  - the fitness, supplements and apparel case hubs (35 to 36%)

  None is a real duplicate. The case hubs share list items because some cases appear in more than one niche.
- Old Instagram-code case URLs still indexed in Google, all redirecting since 30 Oct:
  - /cases/DBTXySHSrJa (41 impressions, position 7.2, crawled 11 Nov)
  - /cases/C-FI5E4SYBZ
  - /cases/CkaJ5hCju2s
  - several more with 1 to 4 impressions

  Google keeps showing the old URL until it recrawls and follows the 301. No change is needed on the site.

## 9. Mobile and speed

- Inner pages (lab, mobile): LCP 0.7 to 1.5 s, CLS 0 to 0.001. /about has LCP 2.4 s.
- Home page: CLS 0.147 (Google's "good" limit is 0.1) and LCP 2.2 to 4.3 s (the hero video poster image). Two layout shifts:
  1. The footer is briefly inside the first screen before the home content loads, then jumps down (about 0.09).
  2. The hero text blocks move about 40 px when the hero section finishes loading (about 0.06).
- /case-studies transfers about 2.4 MB (case images and video posters). It works, but it is the heaviest page.

## 10. Search performance (25 Oct to 21 Nov)

- 1,253 impressions, 9 clicks (CTR 0.7%).
  - Desktop: 1,077 impressions, 6 clicks, position 46.
  - Mobile: 167 impressions, 3 clicks, position 49.
- Pages with clicks:

  | Page | Clicks | Impressions | Position |
  |---|---|---|---|
  | / | 4 | 173 | 37.7 |
  | /blog/bfcm-meta-ads-playbook | 2 | 53 | 19 |
  | /blog/performance-marketing-agency | 2 | 181 | 41 |
  | /terms | 1 | 25 | 4.3 |

- High impressions, poor position: /blog/what-is-roas (158 impressions, 79.5), /blog/blog index (86, 44.8), /blog/meta-andromeda (72, 67).
- In the top 10 with no clicks: /about (43 impressions, 5.1), /cases/DBTXySHSrJa (41, 7.2, old URL), /blog/tiktok-gmv-max (6, 8.2).

## Conclusion

The technical setup is sound. Crawl access, canonicals, robots, sitemaps, internal links, rendering and mobile layout pass on every page. Nothing technical stops Google from indexing the site.

The main problems:
1. **Crawl demand.** 96 sitemap pages are not yet crawled. This comes from site age and authority (0 links from other sites), not from a technical block. The fix is links from other sites, plus the internal links and indexing requests already in progress.
2. **Low positions.** The average position of about 47 limits clicks.
3. **Home page layout shift and load speed.** This is the one technical fix worth making: reserve the first screen's height so the footer and hero text do not jump. It needs no content change.

## Recommended technical actions

| Priority | Action | Who |
|---|---|---|
| 1 | Fix the home page layout shift (reserve the first screen's height before content loads; fix the hero text offset) and recheck CLS and LCP | Claude |
| 2 | Search Console: open Sitemaps, then feed.xml, read the 1 error, and resubmit the feed | Owner (2 min) |
| 3 | Search Console: request indexing for /cases/21k-day-4month-old-dropshipping-store-here-did-it and /cases/winning-product-can-change-everything-here-made-product-5-figure (old noindex) | Owner |
| 4 | Keep the daily Indexing API submissions (max 20) and request indexing by hand for the uncrawled money pages | Claude and owner |
| 5 | Links from other sites (directories, partners, PR): the only fix for "Discovered, not indexed" at this scale | Owner |
