# SEO Report: 16 November 2026

Site: https://www.brandscalinghacks.com. All commits authored as DEVSYNX.

## 1. Performance (Google Search Console)

| Metric | 2 to 8 Nov | 9 to 15 Nov |
|---|---|---|
| Impressions | 208 | 296 |
| Clicks | 3 | 0 |
| Average position | 65.1 | 50.8 |
| Queries | 77 | 89 |

Top positions this week:

| Query | Page | Position |
|---|---|---|
| which agency creates instagram reels and tiktok videos for brands | /growth | 1 |
| meta ads agency for ecommerce brands | /meta-ads-agency | 2 |
| what makes a top performance marketing and media agency for scaling? | /blog/performance-marketing-agency | 2.5 |
| brand scaling agency | /locations/toronto | 4 |
| advertising to sales ratio calculator | /tools | 8 |
| andromeda ad experts in the united states | /blog/meta-andromeda | 11 |
| dropshipping case study review | a case page | 18.5 |
| bfcm ads | /blog/bfcm-meta-ads-playbook | 20 |

Impressions and position keep improving; clicks are still near zero because almost every query ranks beyond page 3.

## 2. Metadata audit (every indexable page)

**Before:**
- 155 indexable pages.
- 0 duplicate titles and 0 duplicate descriptions.
- 0 near-duplicate descriptions (word 3-gram overlap above 0.5).
- Open Graph and Twitter title and description match the page title and description everywhere.
- Canonicals are self-referencing everywhere, except 2 intentional duplicate case URLs.
- Problems found:
  - **39 case descriptions cut off mid-sentence with "…".**
  - **Privacy (78 characters) and Terms (83 characters) descriptions too short**, with different text in the crawler HTML and the React app.

**Fixed:**
- **Case descriptions:**
  - Built from whole sentences of the verified write-up, or from the verified figures when the first sentence is too long.
  - Then one line naming what the write-up covers (only sections that exist).
  - Then a varied call to action, with no repeated wording.
  - Result: 43 indexable case pages at 119 to 157 characters, no ellipsis, all unique. The live site was checked on 16 Nov through a crawl of 21 case pages.
- **Privacy and Terms:** one accurate 155-character description each, used in the crawler HTML, the React app and the schema.
- **Crawler HTML vs browser:** on 28 representative pages (core, services, tools, industries, locations, comparisons, guides, cases, hubs), the HTML title and description equal what the browser shows after JavaScript runs.
- **Primary keyword in title:** present in every content page and post. The one partial match is /blog/scale-ugc-production, which only misses the word "can".

**After:**
- 162 indexable pages.
- 0 duplicate titles and 0 duplicate descriptions.
- 1 description at 119 characters.
- The 2 duplicate case URLs canonicalise to their originals and are not in the sitemap.

## 3. Published content

| URL | Type | Target |
|---|---|---|
| /blog/tiktok-shop-affiliate-commission | Guide (about 1,900 words, 5 FAQs) | tiktok shop affiliate commission rate; open vs targeted plan. Facts from TikTok Seller University and TikTok Ads help pages; third-party ranges attributed by name. |
| /cases/21k-day-4month-old-dropshipping-store-here-did-it | Case | Dropshipping, $21K in one day |
| /cases/hit-100k-month | Case | High-ticket, $100K+ in 23 days |
| /cases/winning-product-can-change-everything-here-made-product-5-figure | Case | $10,809 in 24 hours at 3.75 ROAS |
| /cases/if-you-re-ecom-brand-owner-read-carefully-16k-single-day-2-06 | Case | $16K in a day, 2.06 ROAS, 111 units |
| /cases/massive-alert-guys-it-9-11-pm-ve-already-crossed-53387-33 | Case | $53,387 on $12,943 spend in one day |
| /cases/after-8-months-optimizing-testing-refining-strategies-helped | Case | $68,510 on $17,764 spend in one day |

43 cases are now indexable, up from 37. Three headline corrections were made through fact overrides (timeframe, missing revenue, niche label). Twelve candidates were skipped because their figures were goals, promotions or unverifiable.

## 4. Conversion

The service, industry, location and comparison template pages now show the booking buttons right after the first intro paragraph.
- iPhone 13: the button moved from about 922 px down to about 626 px, inside the first screen.
- iPhone SE: about 750 px.
- Desktop: unchanged at about 480 px.

## 5. Indexing (URL Inspection, all 153 sitemap URLs, 16 Nov)

| State | URLs |
|---|---|
| Indexed | 53 (51 on 12 Nov) |
| Discovered, not indexed | 39 |
| Unknown to Google | 61 |
| Errors, excluded, canonical conflicts | 0 |

Newly indexed: /blog/tiktok-gmv-max and the $40,669 high-ticket case. Nothing dropped out. Bing: 88 pages indexed and 2 crawl errors on 11 Nov (no detail in the API).

## 6. Remaining opportunities

1. **Links from other sites** remain the limiting factor. Pitch "best agencies" lists (influencermarketinghub.com, webtonic.io, mobiloud.com, shipfusion.com, newengen.com) and get listed on Clutch, 1800dtc.com and DesignRush.
2. **"roas calculator ecommerce":** /tools (26.5) and /roas-calculator (35.5) still split this query. The /tools card now leads to /roas-calculator; watch for consolidation.
3. **"meta andromeda"** (93, 8 impressions) and **"andromeda ad experts"** (11): consider refreshing /blog/meta-andromeda.
4. **Home page mobile speed** (42 to 44): needs the owner's decision on fonts and the video wall.
5. **Owner actions:** rotate the Google and Bing keys, give GA4 read access and mark key events, and decide on booking confirmation tracking.
