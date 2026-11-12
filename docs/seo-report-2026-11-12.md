# SEO Report: 12 November 2026

Site: https://www.brandscalinghacks.com. Deployed to main: `95adfa4` (daily session), `6e6a52f` (growth run).

## 1. Performance (Google Search Console)

| Metric | 29 Oct to 4 Nov | 5 to 11 Nov |
|---|---|---|
| Impressions | 147 | 230 |
| Clicks | 1 | 2 |
| Average position | 65.7 | 59.6 |
| Queries | 42 | 83 |
| Pages with impressions | 9 | 20 |

Positions 5 to 30: conversion rate calculator (6), ecommerce roas calculator (7), health and wellness telehealth query (17), online conversion rates (19), ecommerce performance marketing agency (23), ecommerce growth agencies specialized in scaling dtc brands (26), roas calculator ecommerce (26.5).

Bing: 91 pages in index (last crawl report), all 6 sitemaps and feed read on 11 Nov, 0 crawl issues, 0 impressions so far. All 151 sitemap URLs submitted.

## 2. Keyword opportunities and cannibalisation

| Query | Pages competing | Action |
|---|---|---|
| roas calculator ecommerce | /tools 26.5, /roas-calculator 35.5 | /tools hub now leads with the ROAS calculator card |
| tiktok shop break even roas calculator | /tools 42, /roas-calculator 78 | New dedicated calculator page |
| tiktok shop scaling services | /growth 73, / 65, /tiktok-shop-agency 64 | Target page updated 9 Nov; waiting for recrawl |
| roas benchmarks, benchmark roas, roas benchmarks by industry | /blog, /benchmarks, /blog/what-is-roas | /benchmarks/ecommerce-roas retitled; it is not indexed yet |
| ecommerce performance marketing agency | /blog/performance-marketing-agency 23 | Meta description and opening updated |

Pattern: hub pages rank for queries whose target page is not indexed yet. The fix is indexing (authority), not more content.

## 3. Published and new pages

- /tools/tiktok-shop-break-even-roas-calculator (new, 10th calculator).
- /blog/tiktok-gmv-max (new guide; facts from TikTok help-center articles).

## 4. Optimised URLs

- /tools: ROAS calculator card first; meta mentions ROAS and TikTok Shop profit.
- /benchmarks/ecommerce-roas: title "Average Ecommerce ROAS Benchmarks by Niche".
- /blog/performance-marketing-agency: meta and opening for "ecommerce performance marketing agency".
- /meta-ads-agency, /tiktok-ads-agency, /shopify-agency, /services: guide blocks link the newest guides.
- /blog/tiktok-shop-strategy: links the GMV Max guide.

## 5. Technical

- Images: team photos PNG to WebP (1.8 MB to 60 KB); 64 oversized thumbnails and posters resized to 720 px (12.6 MB to 2.7 MB); video posters load only near the viewport.
- Home page on load (Lighthouse mobile, local build): images 110 (5.8 MB) to 28 (584 KB); total transfer about 11 MB to 4.4 MB; LCP 5.6 s. Score varies 43 to 52 between runs because total blocking time swings with machine load here.
- Live crawl (OpenSEO, 50 pages, free cap): 0 issues. Single H1, alt text, canonicals, titles and descriptions all clean; response 30 to 250 ms.
- JavaScript rendering: every route ships prerendered HTML with title, canonical, schema and content, so non-JS crawlers see the full page (confirmed by the live crawl, which does not render JS).

## 6. Indexing results (URL Inspection, all 152 sitemap URLs, 12 Nov)

| State | URLs |
|---|---|
| Submitted and indexed | 51 (was 48) |
| Discovered, not indexed | 21 |
| Unknown to Google | 80 (includes this week's new pages) |
| Errors, crawled-not-indexed, excluded, canonical conflicts | 0 |

Submitted today: Google Indexing API 108 (all accepted), Bing 66, IndexNow 14.

## 7. Recommendations

1. Authority is the blocker. Get listed on 1800dtc.com/get-listed, Clutch, DesignRush; pitch "best agencies" lists (influencermarketinghub.com, webtonic.io, mobiloud.com, shipfusion.com, newengen.com).
2. Give GA4 read access so organic sessions and leads can be measured.
3. Next content: TikTok Shop affiliate commission guide, AppLovin readiness post for DTC brands.
4. Regenerate the Bing API key (it was pasted in chat).
