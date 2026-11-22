# SEO growth plan: impressions, clicks and positions

Written 22 Nov 2026. Figures are from Search Console (7 days to 20 Nov), URL Inspection (21 Nov) and Bing (21 Nov). Anything marked **Target** is a goal, not a forecast.

## Where we stand (verified)

| Metric | 7 days to 13 Nov | 7 days to 20 Nov |
|---|---|---|
| Impressions | 276 | 627 |
| Clicks | 1 | 1 |
| Keywords in the top 10 | 3 | 14 |
| Pages crawled / indexed (of 168) | 64 / 62 (19 Nov) | 72 / 69 (21 Nov) |
| Links from other sites (Bing) | 0 | 0 |

What holds back clicks:
1. **Positions.** Most impressions sit on page 3 or deeper: home 29.7, /shopify-agency 53.9, /meta-ads-agency 38.7, /blog/performance-marketing-agency 35.1. Pages beyond about position 10 almost never get clicks.
2. **No authority.** 0 links from other sites, plus spam links that need disavowing. This is the main reason the agency pages rank between 40 and 60.
3. **Crawling.** 96 of 168 sitemap pages have never been crawled, including /meta-ads-audit, /contact, /book and /google-shopping-ads-agency.
4. **Wrong page ranking.** /shopify-agency collects "dtc growth agency", "dtc ecommerce cro agency" and "dtc shopify cro" searches at 46 to 64. Those searches belong to the home page and /cro-agency.

## The plan

### Week 1 (22 to 29 Nov): get pages crawled, win the clicks we can already get

| # | Action | Who | Pages | Why (data) | How we measure |
|---|---|---|---|---|---|
| 1 | Indexing API: 20 never-crawled priority pages a day, in the 08:37 run (owner rule) | Claude (routine) | /meta-ads-audit, /google-shopping-ads-agency, /dtc-affiliate-program-management, /klaviyo-email-sms-agency, /creative-strategy-agency, /influencer-marketing-agency, /contact, /tools/break-even-roas-calculator, /book, /bfcm-ads-management, then the other uncrawled service and tool pages | 96 of 168 pages never crawled | URL Inspection every morning: crawled count |
| 2 | Request indexing by hand in Search Console, plus the 2 recently changed pages (/ and /roas-calculator, last crawled before the 20 Nov changes) | Owner (5 min) | /, /roas-calculator, /meta-ads-audit, /contact, /book, /google-shopping-ads-agency | Home last crawled 19 Nov, /roas-calculator 9 Nov | Last crawl date in URL Inspection |
| 3 | BFCM refresh: Black Friday is 27 Nov, so /blog/bfcm-meta-ads-playbook gets a "last-minute BFCM checklist" section and a "Cyber Monday and post-BFCM" section; the title states the dates | Claude | /blog/bfcm-meta-ads-playbook, /bfcm-ads-management | Page at 14.8 (17 impressions); "bfcm ads" at 19. Searches peak this week | Position and clicks for "bfcm" searches |
| 4 | Internal links from crawled pages that get impressions to uncrawled money pages (Google finds pages through links) | Claude | From /blog/performance-marketing-agency (111 impressions), /blog, /tools, /case-studies to /meta-ads-audit, /google-shopping-ads-agency, /cro-agency, /tiktok-shop-agency | Uncrawled money pages have few links from crawled pages | Crawl dates of the linked pages |
| 5 | Fix the wrong page ranking: /shopify-agency gets a short "Not a Shopify build? See our CRO agency and growth agency pages" block, and its CRO wording points to /cro-agency | Claude | /shopify-agency, /cro-agency, / | 13 "dtc ... agency" and CRO searches land on /shopify-agency at 46 to 64 | Which page ranks for those searches |

### Weeks 2 and 3 (30 Nov to 13 Dec): move page-2 and page-3 pages up

| # | Action | Who | Pages | Why (data) |
|---|---|---|---|---|
| 6 | Answer-first top sections: the first 2 sentences answer the main search directly, with figures from our cases; add FAQ questions that match the real searches | Claude | / (29.7), /tools (25.6), /growth (21.4), /roas-calculator (28.7), /meta-ads-agency (38.7) | Pages ranking 20 to 40 with 12 to 81 impressions each |
| 7 | /tools: a short break-even ROAS calculator in the page plus links to each calculator with the search names people use ("facebook roas calculator", "dropshipping roas calculator", "advertising to sales ratio calculator") | Claude | /tools, /roas-calculator | /tools ranks 11 to 20 for those calculator searches |
| 8 | CTR check on pages in the top 10 (titles and descriptions), when a page has 8+ impressions and 0 clicks | Claude (routine) | /case-studies (7.4), /about (6.1), /cases/q4-shaping-up… (7.3, 35 impressions, shown under the old URL /cases/DBTXySHSrJa) | 0 clicks at positions 6 to 8 |
| 9 | Results for plan keywords: watch the new pages (indexed 20 Nov) for their first impressions; strengthen whichever appears first | Claude (routine) | /shopify-marketing-agency, /ecommerce-advertising, /ecommerce-email-marketing, the dropshipping guides | Keyword plan table every 12 hours |

### Ongoing: authority (the biggest lever; owner actions)

Without links from other sites, the agency pages stay at positions 40 to 60, whatever we change on the pages.

| # | Action | Effort | Notes |
|---|---|---|---|
| 10 | Disavow the spam backlinks (Semrush export, then the Search Console disavow tool) | 30 min | Keeps them from counting against the site |
| 11 | Agency directory profiles with a link to the site: Clutch, DesignRush, GoodFirms, Sortlist, Agency Spotter, Shopify Partners directory, Meta Business Partners if eligible | 2 to 3 hours | Use the same name, address and info@ everywhere |
| 12 | Link the site from every channel you already own: YouTube descriptions (each video links to its matching guide), Instagram and LinkedIn bios, Facebook group, LinkedIn articles by Gaurav | 1 hour, then each new post | Easy links, and they send real visitors |
| 13 | Client and partner links: ask 5 to 10 happy clients or partners to mention you, for example in a testimonial or "our agency" note on their site | Ongoing | The strongest links an agency can get |
| 14 | Expert quotes: answer journalist requests (Qwoted, Featured, Help a B2B Writer) on Meta ads, BFCM and DTC scaling | 20 min a day | Links from media sites |
| 15 | Promote the free ROAS calculator in Shopify and DTC communities (Reddit r/shopify and r/PPC where allowed, Facebook groups, Indie Hackers) | 1 hour a week | Tools are the easiest pages to earn links to |

### Leads from the traffic we get

| # | Action | Who |
|---|---|---|
| 16 | Activate the lead form (one test from /contact, then click Activate in FormSubmit's email to info@) | Owner |
| 17 | Mark `generate_lead` as a key event in GA4, so form, booking and quiz leads are counted | Owner |

## Targets (goals, not forecasts)

| Metric (7 days) | Now (to 20 Nov) | Target by 6 Dec | Target by 31 Dec |
|---|---|---|---|
| Impressions | 627 | 1,000+ | 2,000+ |
| Clicks | 1 | 5+ | 20+ |
| Keywords in the top 10 | 14 | 20+ | 40+ |
| Pages crawled (of 168) | 72 | 100+ | 130+ |
| Links from other sites | 0 | 5+ | 15+ |

Targets for clicks and top-10 keywords depend mostly on the authority work (actions 10 to 15). The on-page work (actions 3 to 9) can move pages that are already close (positions 5 to 30). It cannot lift agency pages from position 50 into the top 10 on its own.

## How we track it

- Every 12 hours: docs/seo-tracking.md (totals, pages, keywords, keyword plan, services).
- Every morning: URL Inspection crawl and index counts, and up to 20 Indexing API submissions.
- Every change: a row in docs/seo-change-log.md with before figures and a check date (results due 26 Nov, 3 Dec and 4 Dec).
- Mondays: a weekly summary against the targets above.
