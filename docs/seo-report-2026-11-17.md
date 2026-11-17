# SEO, AEO and GEO report: 17 November 2026

Site: https://www.brandscalinghacks.com. Commits authored as DEVSYNX.

**Sources:** Search Console API (performance and URL Inspection, pulled 17 Nov), the codebase and the production build.

Every number below was measured. Nothing is estimated. No keyword volumes are given, because no keyword tool credits were available.

## 1. Baseline vs this week

| KPI | Baseline (9 to 15 Nov) | This week (10 to 16 Nov) | Change |
|---|---|---|---|
| Impressions | 303 | 360 | +19% |
| Clicks | 0 | 1 | +1 |
| Average position | 50.5 | 44.9 | 5.6 better |
| Queries | 90 | 105 | +15 |
| Queries in top 10 | 6 | 8 | +2 |
| Share of query impressions in top 20 | 5.7% | 9.3% | +3.6 pts |
| Pages with impressions | 33 | 37 | +4 |
| Non-brand clicks from US, UK, CA, AU | 0 | 0 | none |
| Sitemap URLs | 153 | 160 | +7 cases made indexable on 16 Nov |
| URLs crawled at least once | 53 | 56 | +3 |
| URLs indexed | 53 | 54 | +1 |

Notes on the numbers:
- **The 16 Nov figures may still be partial.** Search Console usually lags about 2 days.
- **The week windows overlap by 6 days.** Treat this as an early trend, not a result.
- **28 days (20 Oct to 16 Nov):** 1,022 impressions, 9 clicks, 169 queries.

## 2. Why rankings are still poor (re-checked today)

The 16 Nov diagnosis still holds:

1. **Google crawls very little.**
   - Only 3 URLs were crawled since 15 Nov: /shopify-agency, /blog/performance-marketing-agency and /blog/tiktok-shop-affiliate-commission.
   - 104 of 160 sitemap URLs have never been crawled. Of those, 66 are unknown to Google and 38 are "Discovered, not indexed".
   - Not one crawled page was rejected.
2. **There is no link authority.**
   - Every query with more than 10 impressions ranks at position 51 to 93. Examples: "roas formula" at 92.9, "tiktok shop scaling services" at 67.5, "dtc shopify agency" at 67.9.
   - At those positions, title or snippet work cannot raise CTR. Positions have to rise first.
3. **Cannibalisation comes from uncrawled target pages, not from duplicate content.**
   - 23 of 169 queries show 2 or more of our pages. For example, "tiktok shop break even roas calculator" lands on /roas-calculator (65) and /tools (43). The dedicated /tools/tiktok-shop-break-even-roas-calculator has never been crawled.
   - "roas calculator ecommerce" is split between /tools (26) and /roas-calculator (36).
   - Merging or redirecting pages would not fix this. The target pages need to be crawled.

### High-impression, low-CTR queries

None are fixable through the snippet. All queries with 10 or more impressions sit beyond position 50.

### Queries at positions 5 to 30 (28 days)

| Query | Page | Position | Impressions | Action today |
|---|---|---|---|---|
| ecommerce growth agencies specialized in scaling dtc brands | /blog/performance-marketing-agency | 25.3 | 10 | Answered on 10 Nov; no change (avoid churn) |
| roas calculator ecommerce | /tools | 26.5 | 8 | Hub already points to /roas-calculator (12 Nov) |
| video ad creative scaling | /viral-creatives | 18.8 | 4 | **3 new FAQs** (below) |
| bfcm ads | /blog/bfcm-meta-ads-playbook | 29.5 | 4 | Retitled 10 Nov; seasonal, no change |
| advertising to sales ratio calculator | /tools | 15.3 | 3 | Section added to the MER calculator on 16 Nov; page not crawled yet |
| how do i scale meta ads for an 8 figure dtc brand? | / | 13.0 | 1 | **New FAQ** |
| andromeda ad experts in the united states | /blog/meta-andromeda | 6.0 | 2 | **Sources added** |
| which agency creates instagram reels and tiktok videos for brands? pricing | /growth | 1 | 1 | **New FAQ** |

## 3. What was implemented today

### AEO: direct answers to questions the site already ranks for

Each answer is visible on the page, included in the crawler HTML, and marked up as FAQPage.

| Page | New question | Evidence (Search Console) |
|---|---|---|
| / | How do you scale Meta ads for an 8-figure DTC brand? | Query at position 13 |
| /growth | Which agency creates Instagram Reels and TikTok videos for brands, and what does it cost? | Query at position 1 |
| /viral-creatives | How do you scale video ad creative without fatigue? | "video ad creative scaling" at 18.8 |
| /viral-creatives | Who makes the UGC and video ads, and how is creative priced? | Same page |
| /viral-creatives | Which metrics show a video creative is ready to scale? | Same page |

What the answers do and do not say:
- **Pricing:** quoted after the audit, with the existing "$10,000 to $20,000+ a month ad spend" statement already used on the site. No prices were invented.
- **Overlap:** one draft FAQ overlapped the existing "What are direct response video ads?" answer, so it was dropped.

### GEO: credible references

These guides previously cited no external source. They now have a visible **Sources** list (rel nofollow), the same list in the crawler HTML, and schema.org `citation` on the BlogPosting.

| Guide | Sources |
|---|---|
| /blog/tiktok-gmv-max | 6 TikTok for Business Help Center articles: Product GMV Max, LIVE GMV Max, attribution, ROI protection, best practices, migration |
| /blog/tiktok-shop-affiliate-commission | 3 TikTok Help Center articles (open collaborations, target collaborations, Shop Ads commission) and the TikTok Shop Seller University referral-fee page |
| /blog/meta-andromeda | Engineering at Meta, "Meta Andromeda…" (2 Dec 2024) |

Caveats:
- **Meta Help Center articles were not cited** for /blog/meta-ads-learning-phase and /blog/meta-ad-account-restricted. Today's searches returned only third-party copies, not Meta's own URLs, and unverified links were not added.
- **These URLs could not be opened from this environment** (the network blocks the hosts). They come from the earlier research on which those guides were written.

### Technical

- `scripts/seo-kpis.py --inspect` is now multi-threaded and has a token timeout. It finishes in about 2.5 minutes; the sequential version hung for over 15 minutes today. The weekly snapshot is saved in `audit/kpi-2026-11-16.json`.
- **Build checks:** `seo:audit` 0 problems, structured data 0 errors, oxlint clean.
- **Browser check (Playwright):** /, /growth, /viral-creatives and /blog/tiktok-gmv-max, on desktop and iPhone 13: 1 H1, the new sections render, no JavaScript errors, no horizontal scroll.

### Deliberately not changed

- **Metadata:** the 16 Nov audit found 0 duplicate titles or descriptions and 0 truncations. No new evidence today.
- **New pages:** the recovery plan says no new pages until about 100 URLs are crawled. 56 are crawled now.
- **URLs and redirects:** no changes.

## 4. Indexing status (URL Inspection, 17 Nov, all 160 sitemap URLs)

| State | 16 Nov | 17 Nov |
|---|---|---|
| Indexed | 53 | 54 (new: /blog/tiktok-shop-affiliate-commission) |
| Discovered, not indexed | 39 | 38 |
| Unknown to Google | 61 | 66 (includes 5 cases added to the sitemap on 16 Nov) |
| Excluded by noindex | 0 | 2 (see below) |
| Dropped out of the index | | 0 |

- **The two "Excluded by noindex" pages are stale.** /cases/21k-day-4month-old-dropshipping-store-here-did-it and /cases/winning-product-can-change-everything-here-made-product-5-figure were crawled on 11 Nov, while they were still noindex. They were made indexable on 16 Nov, and the build serves `index, follow`. They need a recrawl.
- **Indexing cannot be requested from here.** The Indexing API does not get these pages crawled (shown on 16 Nov), so it was not used. Request indexing manually in Search Console (URL Inspection → Request indexing) for these priority URLs; none has been crawled yet:

| URL | Status 17 Nov |
|---|---|
| /book | Unknown to Google |
| /tools/break-even-roas-calculator | Unknown |
| /meta-ads-audit | Unknown |
| /google-shopping-ads-agency | Unknown |
| /dtc-affiliate-program-management | Unknown |
| /blog/good-roas-for-ecommerce | Discovered, not indexed |
| /blog/how-much-does-a-dtc-agency-cost | Discovered, not indexed |
| /tools/mer-calculator | Discovered, not indexed |
| /blog/questions-to-ask-meta-ads-agency | Discovered, not indexed |
| /blog/meta-ads-learning-phase | Discovered, not indexed |
| /tools/tiktok-shop-break-even-roas-calculator | Unknown (the query already lands on /roas-calculator) |
| The 2 case URLs above | Excluded by noindex (stale) |

## 5. AI crawler access

AI crawlers were verified on 16 Nov:
- 13 user agents, including GPTBot, ClaudeBot, PerplexityBot and Google-Extended, get identical prerendered HTML with status 200.
- llms.txt and llms-full.txt are live.

Today's changes are included in the crawler HTML and in llms-full.txt, because both are generated from the same data. The live site could not be fetched from this environment today, so live AI access was not re-tested.

## 6. Remaining opportunities and next cycle

| Priority | Action | Owner |
|---|---|---|
| 1 | Manual Request indexing for the URLs in section 4, about 10 a day | Owner |
| 2 | Earn 10 to 20 external links and listings using docs/backlink-plan-2026-11-16.pdf. Bing still reports 0 linking domains, and no ranking gain on head terms is likely without links. | Owner |
| 3 | Check Search Console → Links, and add the old non-www or Domain property if one exists | Owner |
| 4 | Next Monday: run `scripts/seo-kpis.py --inspect` and compare with this report. Success means more than 60 URLs crawled and more than 10 queries in the top 10. | Daily routine |
| 5 | When /tools/tiktok-shop-break-even-roas-calculator and /tools/mer-calculator are crawled, check whether the split calculator queries move to them | Daily routine |
| 6 | Add Meta Help Center citations to the learning-phase and restricted-account guides once the official URLs are verified in a browser | Next session |
| 7 | Home page mobile speed (Lighthouse 42 to 44): decision on font families and the video wall | Owner |
| 8 | Rotate the Google service account key and the Bing API key (both were pasted in chat); give GA4 read access | Owner |
