# SEO performance diagnosis: www.brandscalinghacks.com

16 November 2026. Every finding is marked **[Verified]** (from Search Console, URL Inspection, Bing Webmaster or the codebase, with the source named) or **[Assumption]** (reasoned, not measured). No Search Console or backlink figure in this report is estimated.

## 0. Can the last 3 months be compared with the previous 3 months?

**[Verified, Search Console API]** No. The only property this account can read is `https://www.brandscalinghacks.com/`. Its data starts on **19 October 2026**: 28 days in total, with 690 impressions and 8 clicks. The previous 3 months (18 May to 16 Aug) hold no data at all.

**[Verified, Bing Webmaster]** An older version of the site existed. Bing still listed a non-www sitemap (22 URLs) last read in June 2026. Its Google history, if any, would sit in a non-www or Domain property this account cannot see.

Instead of quarters, this report compares weeks:

| Week starting | Impressions | Clicks | Avg position |
|---|---|---|---|
| 19 Oct | 50 | 0 | 48.1 |
| 26 Oct | 129 | 5 | 57.9 |
| 2 Nov | 208 | 3 | 65.1 |
| 9 Nov | 303 | 0 | 50.5 |

## 1. What the data says (symptoms)

| Symptom | Evidence |
|---|---|
| Almost no clicks | **[Verified, GSC]** 8 clicks in 28 days. 5 came from Pakistan (likely the team); the US has 405 impressions and 1 click. |
| Rankings too low to earn clicks | **[Verified, GSC]** Of 150 queries, 120 sit at positions 51 to 100 and carry 88% of query impressions (444 of 506). Only 10 queries rank in the top 10, with 1 or 2 impressions each. |
| Few pages visible | **[Verified, GSC]** 51 of 162 indexable pages had any impression. |
| Brand demand is almost nil | **[Verified, GSC]** 3 branded queries, 3 impressions. |
| Hub pages rank instead of target pages | **[Verified, GSC]** 23 of 150 queries show 2 or more of our pages. 193 of 555 impressions land on hubs (/, /blog, /tools, /growth, /locations). |
| Two thirds of the site is not indexed | **[Verified, URL Inspection 16 Nov]** 53 indexed, 39 "Discovered, not indexed", 61 "unknown to Google". |

## 2. Root causes, ranked by impact

### RC1. Google crawls almost nothing: crawl demand, not page quality (highest impact)

- **[Verified, URL Inspection]** Google has crawled 53 of the 153 sitemap URLs, ever. All 53 are indexed.
  - Not one URL is "Crawled, not indexed". Google is not rejecting content after reading it; it has not read most of it.
- **[Verified]** The pages that were crawled were fetched on 15 different days between 27 Oct and 16 Nov, 1 to 9 URLs per day.
- **[Verified]** The pages never crawled include money pages:
  - **Core:** /book, /contact, /meta-ads-audit.
  - **Services:** /google-shopping-ads-agency, /klaviyo-email-sms-agency, /dtc-affiliate-program-management, /creative-strategy-agency.
  - **Calculators:** /tools/break-even-roas-calculator, /tools/mer-calculator.
  - **Guides:** 19 blog posts, including /blog/good-roas-for-ecommerce and /blog/how-much-does-a-dtc-agency-cost.
- **Ruled out [Verified]:**
  - *Discovery.* Sitemaps are downloaded the day they are submitted, with 0 errors. The pages are linked in crawler HTML: /blog/what-is-roas links to 9 of the 10 uncrawled money pages checked.
  - *Crawl waste.* Only 1 of 26 noindex case pages and 3 of 24 old redirecting URLs were ever crawled.
  - *Rendering.* 13 bot user agents receive identical prerendered HTML.
  - *Robots and canonicals.* There are 0 Google-chosen canonical conflicts.
- **Why crawl demand is low:**
  - **[Verified, Bing]** Bing Webmaster reports **0 inbound links** to the domain.
  - **[Assumption]** Google sees a similarly bare link profile. Google's links report is not exposed through the API, so the owner should check Search Console → Links.
  - **[Assumption]** The site is new to Google: data begins 19 Oct. A new domain with no links gets a small crawl allowance, which grows with links and demand.

### RC2. No authority, against entrenched competitors (high impact)

- **[Verified, live searches 16 Nov]** Who ranks for our core queries:

| Query | Who ranks |
|---|---|
| "roas formula" | Shopify, Triple Whale, Unity, Corporate Finance Institute, WebFX |
| "meta ads agency for ecommerce brands" | "Best agencies" lists (insidea, stryde, knowlify, flighted), plus Top Growth Marketing, Common Thread Collective and Demand Curve |
| "roas calculator ecommerce" | Shopify, Triple Whale and dozens of calculator sites |
| "dtc shopify agency" | Agency pages, Upwork, GoodFirms and press releases; a weaker results page |

- **[Assumption]** These sites have years of links. With 0 known links (RC1), our pages rank 51 to 100 however good the content is. That matches the measured position distribution.
- **[Verified]** Backlink and authority metrics for competitors could not be pulled: OpenSEO has 2 credits left, and WebFetch is blocked for competitor hosts. No competitor backlink numbers appear in this report for that reason.

### RC3. Effort spent where it cannot pay back yet (high impact, fully in our control)

- **[Verified, git log]** About 240 pages were published or substantially rewritten in under 4 weeks. Google crawls a few URLs a day (RC1), so new pages queue behind uncrawled ones and spread crawl thinner.
- **[Verified, URL Inspection vs submission logs]** The Google Indexing API is not working for these pages:
  - Of 52 URLs submitted 3 or more times between 10 and 15 Nov, **48 are still not crawled**. Examples: /contact and /dtc-affiliate-program-management (5 times each), /book and /meta-ads-audit (4 times each).
  - Google documents this API for job postings and livestream pages only. "Accepted" in earlier reports meant the request was received, not that the page was crawled.
- **[Verified]** IndexNow does not reach Google; it serves Bing and Yandex.

### RC4. Queries the site attracts are very long-tail (medium impact)

- **[Verified, GSC]** Many queries look like AI-tool or research phrasing:
  - "what makes a top performance marketing and media agency for scaling?"
  - "agencies with scaling framework for ecommerce ads"
  - "intitle:(brand acquisition …)"
- **[Assumption]** These have tiny volume. We rank #1 to #3 on some and still get no clicks.
- **[Assumption]** Search volumes for target keywords are not measured. The keyword tool has no credits, and no volume figures are used in this report.

### Ruled out as causes [Verified]

| Area | Evidence |
|---|---|
| Metadata | 162 indexable pages: 0 duplicate titles or descriptions, 0 truncated descriptions on canonical pages, HTML equals rendered metadata on 28 sampled pages |
| Duplicate or thin content | Near-duplicate score per section averages under 0.03 (5-word shingles); 0 pages "crawled, not indexed" |
| Rendering and JavaScript | Prerendered HTML identical for Googlebot, Bingbot and 11 AI bots |
| Redirects and canonicals | 301 single hop, self-canonicals, 0 Google-chosen canonical conflicts |
| Internal linking | Uncrawled money pages are linked from indexed pages in crawler HTML |

Core Web Vitals:
- **[Verified, Lighthouse lab]** The home page scores 42 to 44 on mobile; service pages score 76 to 81.
- **[Assumption]** This is not the cause of rankings at 51 to 100. Too little traffic exists for field data, and page speed is a minor factor next to RC1 and RC2.

## 3. Underperforming pages and why

| URL | Evidence (GSC, 28 days) | Why it is not ranking | Action |
|---|---|---|---|
| /shopify-agency | 49 impressions/week, avg position 77; "dtc shopify agency" 70, "shopify agency for scaling brands" 60 | RC2: commercial query, authority-bound | Off-site: listings and mentions that link here |
| /blog/what-is-roas | 37 impressions/week, position 82; "roas formula" 94 | RC2: results page owned by Shopify, Triple Whale and CFI | Do not rewrite again; focus on links |
| /tools and /roas-calculator | "roas calculator ecommerce" 26.5 and 35.5 | Split signals, plus RC2 | Done 12 Nov: hub leads to /roas-calculator. Measure. |
| /meta-ads-agency | #2 "meta ads agency for ecommerce brands" (1 impression), 68 to 85 for broader variants | Page is fine; RC2 on head terms | Links from listings and directories |
| /tools/break-even-roas-calculator, /tools/mer-calculator, /tools/tiktok-shop-break-even-roas-calculator | Not crawled | RC1 | Owner: Request Indexing in GSC |
| /book, /contact, /meta-ads-audit, /google-shopping-ads-agency, /dtc-affiliate-program-management | Not crawled | RC1 | Owner: Request Indexing in GSC |

## 4. Recovery strategy (prioritised)

| # | Action | Who | Fixes | Expected effect |
|---|---|---|---|---|
| 1 | Get 10 to 20 real external links and mentions in 30 days: Clutch, DesignRush, GoodFirms, Sortlist, UpCity, 1800dtc.com, Google Business Profile, Shopify Partner Directory; pitch "best agencies" lists (influencermarketinghub.com, webtonic.io, mobiloud.com, shipfusion.com, newengen.com); 2 podcast guest spots; Qwoted answers. Each profile links to one money page, not only the home page. | Owner | RC1, RC2 | More crawl demand and authority |
| 2 | Request Indexing by hand in Search Console (URL Inspection → Request indexing, about 10 a day): /book, /tools/break-even-roas-calculator, /meta-ads-audit, /google-shopping-ads-agency, /blog/good-roas-for-ecommerce, /blog/how-much-does-a-dtc-agency-cost, /tools/mer-calculator, /dtc-affiliate-program-management, /blog/questions-to-ask-meta-ads-agency, /blog/meta-ads-learning-phase | Owner | RC1 | Unlike the API, this is Google's supported way to queue a normal page |
| 3 | Pause new pages until crawled pages reach about 100. Improve only pages that already have impressions, using GSC evidence. | Us | RC3 | Crawl goes to pages that can rank |
| 4 | Stop counting Indexing API "accepted" as progress. Track URLs crawled and indexed weekly instead. | Us (done today) | RC3 | Honest measurement |
| 5 | Check Search Console → Links (top linking sites), and add the old non-www or Domain property if it exists, so earlier history is visible | Owner | Data gap | Verifies RC1 and RC2 on Google's side |
| 6 | Home page mobile speed: fewer font families, lighter video wall on mobile | Owner decision | Minor | UX, small ranking effect |

### KPIs (baseline in `audit/kpi-baseline-2026-11-16.json`)

| KPI | Baseline (verified) | Target by 16 Dec 2026 | Target by 16 Feb 2027 |
|---|---|---|---|
| URLs crawled at least once (of sitemap) | 53 / 153 | 100 | 140 |
| URLs indexed | 53 | 90 | 130 |
| Weekly impressions | 303 (9 to 15 Nov) | 600 | 1,500 |
| Share of weekly query impressions at positions 1 to 20 | 5.7% (9 to 15 Nov; 3% over 28 days) | 12% | 25% |
| Weekly queries in top 10 | 6 (9 to 15 Nov; 10 over 28 days) | 15 | 40 |
| Pages with impressions per week | 33 | 60 | 100 |
| Weekly non-branded clicks from US, UK, CA, AU | 0 | 5 | 30 |
| External linking domains (GSC Links; Bing shows 0) | 0 (Bing) | 10 | 25 |

The targets are planning assumptions, not forecasts. Review them monthly against the baseline.

## 5. What was implemented today (after diagnosis)

- `scripts/seo-kpis.py` and `audit/kpi-baseline-2026-11-16.json`: a repeatable weekly KPI snapshot from Search Console and URL Inspection, the baseline for all future comparisons.
- The daily session was changed to the recovery plan:
  - no new pages while fewer than 100 URLs are crawled;
  - no claims of indexing progress from Indexing API acceptance;
  - weekly KPI snapshot;
  - work only on pages with GSC impressions.

No metadata or content was changed today: the diagnosis found no evidence that metadata or content is what holds rankings back.
