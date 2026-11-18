# SEO, AEO and GEO report: 18 November 2026

Site: https://www.brandscalinghacks.com. Commits authored as DEVSYNX.

**Sources:**
- Search Console API (performance data and URL Inspection, 18 Nov)
- Bing Webmaster API
- A full audit of the production build (`audit/audit-2026-11-18.json`)
- Browser checks with Playwright
- A crawl of the live site with OpenSEO

No keyword volumes or competitor metrics appear in this report. No keyword tool credits were available, and nothing was estimated.

## 1. Baseline and current performance

**28 or 90 days:** Search Console holds data only from **19 October 2026**, 30 days in total, so there is no 90-day history. All 30 days: 866 impressions, 9 clicks. Last 28 days: 612 impressions, 184 queries.

| KPI | Baseline (9 to 15 Nov) | 11 to 17 Nov |
|---|---|---|
| Impressions | 303 | 398 |
| Clicks | 0 | 1 |
| Average position | 50.5 | 44.0 |
| Queries | 90 | 117 |
| Queries in top 10 | 6 | 12 |
| Share of query impressions in top 20 | 5.7% | 9.6% |
| Non-brand clicks from US, UK, CA, AU | 0 | 0 |
| Sitemap URLs crawled / indexed | 53 / 53 of 153 | 56 / 54 of 160 |
| Linking domains (Bing) | 0 | 0 |

Visibility is rising week on week. Clicks are not, because every query with real volume still ranks beyond position 50.

## 2. Why rankings are weak (re-verified today)

1. **Google has crawled very little of the site.**
   - No sitemap URL was crawled between 16 and 18 Nov.
   - 104 of 160 sitemap URLs have never been crawled. Their status flips between "Discovered" and "Unknown" from one day to the next, so both are counted as not crawled.
   - All 56 crawled URLs are indexed, apart from 2 case pages whose noindex status is stale (they were made indexable on 16 Nov).
2. **The site has no links from other sites.** Bing reports 0 linking domains. Queries with 10 or more impressions sit at positions 50 to 93, for example "roas formula" at 92.9, "tiktok shop scaling services" at 67.5 and "dtc shopify agency" at 66.3.
3. **High-impression, low-CTR queries are a ranking problem, not a snippet problem.** All 17 queries with 8 or more impressions rank at position 25 or worse, so rewriting titles cannot lift their CTR yet.
4. **Cannibalisation:** 25 queries show 2 or more of our pages. The usual cause is that the best-matching page has not been crawled, so a hub ranks in its place. For example, "tiktok shop break even roas calculator" lands on /tools (43) and /roas-calculator (65), while the dedicated calculator is uncrawled. Merging or redirecting pages would not fix this.
5. **Declining pages (4 to 10 Nov compared with 11 to 17 Nov):** /blog/what-is-roas (57 to 29 impressions, position about 80), /roas-calculator (24 to 7) and /tools/conversion-rate-calculator (21 to 0). These are single-digit or low-double-digit numbers at positions 40 to 80, which fluctuate normally. Total impressions rose over the same weeks.

## 3. Queries at positions 4 to 20 and how they are mapped

| Query | Page (position) | Action |
|---|---|---|
| advertising to sales ratio calculator | /tools (15.3) | **New "Which calculator" table on /tools** points it to the MER calculator |
| ecommerce roas calculator | /tools (7) | Table row points to /roas-calculator |
| facebook roas calculator | /tools (16) | Table row points to /roas-calculator |
| conversion rate calculator, online conversion rates | /tools/conversion-rate-calculator (6, 19) | Table row; no page change |
| how do i scale meta ads for an 8 figure dtc brand? | / (13) | FAQ added 17 Nov |
| andromeda ad experts in the united states | /blog/meta-andromeda (6) | Sources added 17 Nov |
| dropshipping case study review | a case page (18.5) | Case cards are now crawlable links (below) |
| brand scaling agency | /locations/toronto (4) | Branded query; no change |

## 4. Implemented today

### Technical: case studies are crawlable after rendering

- **Finding (verified in a browser):**
  - Once React rendered /case-studies, the page kept only 38 internal links, against 197 in the prerendered HTML.
  - The case cards were click handlers with no href. Google's rendered view therefore had no links to those cases, and phones could not long-press a card to open it in a new tab.
- **Fix:**
  - Each card's title and its "View Breakdown" button are now real `<a href="/cases/…">` links to the canonical case URL.
  - A normal click still opens the case inside the app, with no page reload, and Ctrl or Cmd-click opens a new tab.
  - The design is unchanged.
- **Result:** /case-studies now has 54 links after rendering. The extra cases behind "load more" are still linked from the prerendered HTML and from the niche hub pages.

### AEO: /tools now names the calculations people search for

A new table, "Which calculator answers your question?", maps 8 questions to the tool that answers each one. Examples: "advertising to sales ratio (A/S ratio)" to the MER calculator, and "Facebook and Meta ROAS with real profit" to the ROAS calculator. Every row was checked against the tool's actual inputs and outputs.

### GEO: official sources and one factual correction

- **/blog/meta-ads-learning-phase:** now cites 3 Meta Business Help Center articles: About the learning phase, Last significant edit, and Delivery status in Ads Manager.
- **/blog/meta-ad-account-restricted:** now cites 4 Meta sources: Request a review, Troubleshoot a disabled ad account, Enforcement of advertising policies, and the Ads review policy.
- Both pages show a visible Sources list, and their structured data includes `citation`. The URLs come from today's web search, with every result restricted to facebook.com. The live site cannot be opened from this environment, so the links were not click-tested.
- **Correction:** the restricted-account guide called "Business Support Home" an old name. Meta's current ads review policy page still sends people there, so the guide now explains that Meta uses both names. Its updated date is 18 Nov.

### Full technical audit of the production build

Checked across 243 pages (160 indexable):

| Check | Result |
|---|---|
| Titles or descriptions out of range | 0 |
| Duplicate titles | 0 |
| Pages without exactly one H1 | 0 |
| Images without alt text | 0 |
| Missing Open Graph or Twitter tags | 0 |
| Structured data errors | 0 |
| Indexable pages missing from the sitemap | 0 |
| Sitemap URLs that are not indexable | 0 |
| Brand fact mismatches | 0 |
| Orphans | 2 (privacy, terms; linked from the footer in the app) |

Under 600 words: 48 pages, mostly short, verified case write-ups and niche hubs. They were not padded, because adding text would make them thinner in substance.

**Near-duplicates:** 1 pair, /case-studies and /case-studies/dropshipping-dtc (score 0.45). This is expected, because most published cases are dropshipping stores.

**Bots and AI crawlers:** the top 20 URLs were requested as 13 user agents, including Googlebot, Bingbot, GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User and PerplexityBot. All returned 200 with the same main content as Chrome. robots.txt, llms.txt (15.7 KB), llms-full.txt (502 KB) and 5 child sitemaps are present.

**Build checks:** `seo:audit` 0 problems, structured data 0 errors, oxlint clean.

**Browser checks (Playwright, desktop and iPhone 13):** /, /tools, /case-studies and both Meta guides each had 1 H1, no JavaScript errors and no horizontal scroll. Case title links, card clicks and the back button all work.

### Deployment

- Commit 0d9a242 pushed to main.
- The 4 changed URLs were submitted to IndexNow (200) and Bing (200).
- The live check is in section 7.

### Deliberately not done

- **Metadata rewrites:** no evidence that metadata limits rankings, since the audit found 0 issues.
- **New pages:** only 56 URLs are crawled, against a target of 100 before adding pages, and the queries do not show demand for new pages.
- **Splitting the case data per page:** about 30 KB compressed to gain, but every case's facts are built from the full captions, so it is high risk for little benefit.

## 5. Indexing (URL Inspection, all 160 sitemap URLs, 18 Nov)

| State | 17 Nov | 18 Nov |
|---|---|---|
| Indexed | 54 | 54 |
| Crawled at least once | 56 | 56 |
| Not crawled ("Discovered" or "Unknown") | 104 | 104 |
| Excluded by noindex (stale) | 2 | 2 |
| Dropped out of the index | 0 | 0 |

Indexing cannot be requested from here; the Indexing API was shown not to work for these pages. The owner should request indexing in Search Console for:

- /book
- /tools/break-even-roas-calculator
- /meta-ads-audit
- /google-shopping-ads-agency
- /dtc-affiliate-program-management
- /blog/good-roas-for-ecommerce
- /blog/how-much-does-a-dtc-agency-cost
- /tools/mer-calculator
- /blog/questions-to-ask-meta-ads-agency
- /blog/meta-ads-learning-phase
- /tools/tiktok-shop-break-even-roas-calculator
- The 2 stale noindex cases:
  - /cases/21k-day-4month-old-dropshipping-store-here-did-it
  - /cases/winning-product-can-change-everything-here-made-product-5-figure

## 6. Backlink and authority opportunities

The plan is in `docs/backlink-plan-2026-11-16.pdf`, with 36 links. Highest value first:

1. Directory profiles that link to a money page: Clutch, DesignRush, GoodFirms, Sortlist, UpCity, 1800dtc.com, the Shopify Partner Directory and Google Business Profile.
2. Pitches to "best DTC agencies" lists: influencermarketinghub.com, webtonic.io, mobiloud.com, shipfusion.com and newengen.com.
3. Data-led PR from the original benchmark: median ROAS of 3.97x across 25 published cases (/benchmarks). It is the site's most citable original asset, for both journalists and AI answers.

None of these can be done from here. Each needs the owner's identity or accounts.

## 7. Live verification

This environment's network blocks the live host, so the live site was checked with the OpenSEO crawler. The crawler is plain HTTP and does not run JavaScript.

- **Crawl coverage:** 50 live pages: home, core and service pages, the blog, /tools and all calculators.
- **Results:** every page returned 200, had 1 H1, a title and a description matching the build, no images missing alt text, was indexable and was listed in the sitemap. Response times were 14 to 225 ms.
- **New content is live:** live /tools counts 1,392 words, against 1,414 in the new build. Unchanged pages read 12 to 45 words lower live than locally (for example /book: 959 live, 971 local) because the two tools count words differently. The new table adds 212 words, so without it /tools would read about 1,190 live. This confirms deployment indirectly; the table text itself could not be fetched.
- **Not checked live:** the JavaScript behaviour (case card links). It was checked in the production build with Playwright on desktop and iPhone 13.

## 8. Next priorities

| # | Action | Who |
|---|---|---|
| 1 | Request indexing by hand for the URLs in section 5, about 10 a day | Owner |
| 2 | First 10 directory listings or list pitches from the backlink plan | Owner |
| 3 | Mark `generate_lead` as a GA4 key event | Owner |
| 4 | Monday 23 Nov: run `scripts/seo-kpis.py --inspect` against this baseline. Target: more than 60 URLs crawled and 12 or more queries in the top 10. | Daily routine |
| 5 | Once the calculator pages are crawled, check whether "advertising to sales ratio calculator" and "facebook roas calculator" move from /tools to the tool pages | Daily routine |
| 6 | Rotate the Google and Bing keys | Owner |
