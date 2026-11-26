# SEO / AEO / GEO work log

Running record of daily execution on www.brandscalinghacks.com. Newest first.
Every "done" item was deployed to main and checked (build, seo:audit, lint, browser) unless marked otherwise.

## Baseline (Search Console, 19 Oct to 10 Nov 2026)

| Metric | Value |
|---|---|
| Impressions | 430 |
| Clicks | 8 (5 from Pakistan, likely internal) |
| CTR | 1.9% |
| Avg position | about 60 |
| Pages with impressions | 43 |
| Queries | 105 (6 in top 20, 8 in 21 to 50, 91 beyond 50) |
| Indexed pages | 42 of 131 inspected (23 discovered, 66 unknown, 0 rejected) |
| Weekly impressions | 50, 129, 208 (weeks of 19 Oct, 26 Oct, 2 Nov) |

## Daily sessions

### 20 Nov 2026 (owner: implement the SEO Recovery Plan keyword strategy)
Source: Gaurav_Sir_SEO_Recovery_Plan_20-Nov-2026.pdf and Gaurav_Sir_Keyword_Map_20-Nov-2026.csv (section 5, brandscalinghacks.com). Change log rows 8 to 11.
- Saved the 17 brandscalinghacks keywords to docs/keyword-plan-2026-11-20.csv; the 12-hour tracker now reports each one.
- Home retargeted (dtc marketing agency, ecommerce growth agency, ecommerce marketing agency); /growth moved to "growth engine" to avoid cannibalisation; "performance marketing" dropped from home title.
- New pages: /shopify-marketing-agency, /ecommerce-advertising, /ecommerce-email-marketing. New guides: /blog/facebook-ads-for-dropshipping, /blog/how-to-find-winning-products.
- Retitles: Facebook Ad Library guide, ad creative testing guide, ROAS calculator (plus WhatsApp results capture), /viral-creatives away from UGC.
- Verified: homepage raw HTML carries the title, H1 and about 4,100 words of text without JavaScript.
- Not done here (other sites or owner accounts): disavow spam links (Semrush plus Search Console disavow tool), Google Business Profile changes, removing case studies duplicated on sister sites, directory and community links. UGC guides kept live (plan says stop targeting, not remove); noindexing them is an owner decision.

### 19 Nov 2026 (20:37 UTC tracking run)
- Google data unchanged (latest day 18 Nov); late data raised 12 to 18 Nov to 484 impressions. Bing: 95 indexed (92 this morning), 0 crawl issues, 0 links. No Indexing API requests (owner rule: none before 22 Nov). No site changes.

### 19 Nov 2026 (owner: Indexing API limit)
- Owner rule: no Indexing API requests before 22 Nov; from then at most 20 URLs per 24 hours, only uncrawled money pages. The 20 Nov retry of 99 URLs was cancelled; the 12-hour routine now sends at most 20 a day, in the 08:37 run only.
- Check 19 Nov 10:20 UTC: /book and /bfcm-ads-management (both submitted today) still "unknown to Google". Pages indexed through the API today: 0 verified.

### 19 Nov 2026 (owner: index all pages with the service-account key)
- Owner confirmed the service account (google-indexer@contractorleads-502510) is an owner in Search Console. Submitted all 161 sitemap URLs to the Indexing API: 93 accepted, the rest hit the project quota of 200 requests a day (shared with other sites on the same Google Cloud project).
- Retry of the remaining 99 URLs (money pages first) scheduled for 20 Nov 08:10 UTC, after the quota reset.
- "Accepted" means received, not crawled (16 Nov: 48 of 52 URLs submitted 3+ times stayed uncrawled). Real check: URL Inspection on 22 and 26 Nov vs 19 Nov (64 crawled, 62 indexed).

### 19 Nov 2026 (owner: 30 top services, rank for them)
- src/data/serviceCatalog.js: 30 services the site offers, grouped by channel, each mapped to its target page and a Search Console query pattern.
- /services: "All 30 ecommerce marketing services" directory (React and prerendered HTML).
- scripts/seo-track.py: per-service ranking table each run (impressions, best position, target page position).
- Baseline (12 to 18 Nov): 15 of 30 services with any impressions; only 8 target pages rank for their own service.

### 19 Nov 2026 (08:37 UTC tracking run)
- Google data to 18 Nov: 12 to 18 Nov 462 impressions (256 the week before), 1 click, 13 keywords in the top 10. "dtc performance marketing agency" 21 to 12.7.
- URL Inspection (161 URLs): crawled 56 to 64, indexed 54 to 62. Google crawled 8 case pages on 18 Nov at 10:40, about 4 hours after the case cards became real links (timing consistent; Assumption that it caused it). Home recrawled 18 Nov 12:47. All 13 priority money pages still uncrawled.
- GA4 12 to 18 Nov: 43 sessions (36 direct, 5 organic social, 1 organic search); no key events (generate_lead not marked as key event by owner). Bing: 92 indexed, 0 issues, 0 links.
- No change: 6 changes went live earlier today; change-log checks are due 26 Nov and 3 Dec.

### 19 Nov 2026 (owner: new pages, proper UI/UX, leads)
- Template redesign for 67 SEO pages (hero with verified result image, feature cards, case cards, process steps, growth plan form). See change log rows 4 to 6.
- New page /roas-improvement-agency for "ecommerce roas improvement agency" (19 impressions, no dedicated page).
- Growth plan form on home and content pages; WhatsApp message carries the answers; GA4 quiz events.
- Case highlights (43 verified cases) generated at build into src/data/caseHighlights.js; case links and steps also in the prerendered HTML.

### 19 Nov 2026 (owner: honest investigation before changes)
See docs/seo-investigation-2026-11-19.md and docs/seo-change-log.md.
- No 28-day or 3-month comparison is possible: Google data starts 19 Oct (previous 28 days: 2 impressions).
- Findings: no authority or third-party proof (0 links); informational keywords were the wrong first target (328 impressions at position 76, 0 clicks); 111 pages in 4 weeks, about 25 crawled, glossary 0 impressions; 9 money pages never crawled; lead tracking broken; own FAQs cannibalised the TikTok Shop and CRO pages.
- Changes (3): booking buttons now tracked; GA4 only on the live domain; 3 competing FAQ questions reworded.
- Strategy change: no new informational, glossary, industry or location pages; work only on commercial pages ranking 20 to 70, plus off-site proof.

### 18 Nov 2026 (20:37 UTC tracking run)
- Google data unchanged (latest day 17 Nov); late data raised 11 to 17 Nov impressions to 420 (from 401). Bing: 92 indexed, 0 crawl issues, 0 links.
- Striking-distance keywords were already handled today (home 8-figure FAQ, /tools table, Andromeda sources). New ones ("dropshipping roas calculator" /tools 20, "dtc affiliate program scaling" / 18) have 1 to 2 impressions; no change.

### 18 Nov 2026 (owner: monitor every 12 hours)
- New scripts/seo-track.py: every run saves audit/tracking/<time>.json and rewrites docs/seo-tracking.md (pages, keywords, top 10, positions 4 to 20, no-click keywords, movers vs previous snapshot).
- Routine changed to every 12 hours (08:37 and 20:37 UTC); URL Inspection once a day.
- First snapshot (11 to 17 Nov vs 4 to 10 Nov): 401 vs 246 impressions, 12 vs 2 keywords in the top 10, 1 vs 3 clicks.
- /cases/DBTXySHSrJa (position 5.9) is an old ID URL that already 301-redirects to its slug page; Google has not consolidated it yet. No action.

### 18 Nov 2026 (scheduled run)
- No site changes: today's evidence-led changes were made in the earlier sessions (entries below). Bing re-checked.

### 18 Nov 2026 (owner: "site is stuck, make it workable")
- Checked: Search Console daily impressions rose from about 22 (4 Nov) to 50 to 101 (13 to 17 Nov); sitemaps read with 0 errors. Not stuck, but clicks stay near 0 because rankings are 40 to 90 (no links, low crawl).
- Home page mobile speed (Lighthouse, local build, simulated slow 4G): 25 before, median 54 after (3 runs: 53, 54, 57). Main-thread blocking 3,800 ms to 470-670 ms; page weight 5.2 MB to 3.5 MB.
  - Portrait phones get a 576x720 centre crop of the hero video (2.6 MB, was 8.5 MB); same visible area. Landscape and desktop unchanged. Data saver or 2G/3G: poster only.
  - Home blog teaser reads a generated 4-post file (src/data/blogTeaser.js) instead of all 30 posts.
  - 32 px host avatar: 1.5 KB image instead of the 111 KB 2048 px photo.
- Tried and reverted: hero image in the first-load screen (did not count as LCP in Chrome).
- Remaining: LCP about 5.8 s is render delay (React must load before the hero paints); CLS 0.109 from fonts swapping in the hero.

### 18 Nov 2026 (owner request: new YouTube video on home)
- Added "How We Scaled a DTC Brand to $376K in 25 Days With Meta Ads (Live Breakdown)" (youtube.com/watch?v=UjUTcbDwe24, @brandscalinghacks, published 30 Oct 2026, 31:35) as the featured first video in the home page "Live Sessions & Breakdowns" section, with its YouTube thumbnail (WebP).
- /blog/meta-ads-library already embedded this video but its uploadDate was empty, so no VideoObject was output; set to 2026-10-30, so VideoObject with 22 chapter clips is now in the page.
- Organization sameAs: added the @brandscalinghacks YouTube channel.
- Mobile fix (existing bug): playlist cards in that section overflowed the column on phones (grid 342px, cards 417px); the column now fits and the host/date line wraps cleanly.

### 18 Nov 2026 (advanced SEO/AEO/GEO run)
See docs/seo-report-2026-11-18.md.
- Case cards: title and "View Breakdown" are now real links (rendered /case-studies: 38 to 54 internal links).
- /tools: "Which calculator answers your question?" table for queries ranking 7 to 16 on the hub (advertising to sales ratio, ecommerce and Facebook ROAS calculators).
- Meta Help Center sources on the learning phase (3) and restricted account (4) guides; Account Quality / Business Support Home naming corrected.
- Full build audit: 0 metadata, H1, alt, OG, schema or sitemap problems; 13 bots get identical HTML.
- KPIs 11 to 17 Nov: 398 impressions, 1 click, position 44.0, 12 queries in top 10. Inspection: 56 crawled, 54 indexed, none crawled since 16 Nov. Bing: 0 linking domains.

### 17 Nov 2026 (case study speed fix, owner report)
- Owner reported slow case pages with a black screen first. Measured (iPhone 13, slow 4G, 4x CPU): spinner, then a blank black placeholder while the case page code loaded.
- The loading placeholder is now the branded spinner (no blank screen). Home, the hub and niche hubs preload the case page code when idle; case pages preload the hub. Hub → case click: 983 ms before, 445 ms after.
- /case-studies had no H1 after React rendered (hero title was an h2); it is now the H1.
- Not done yet: allCaseStudies.js (361 KB, 85 KB gzipped) loads on every case page; splitting it per case would cut the first load further.

### 17 Nov 2026 (scheduled run)
- No site changes: today's evidence-led changes were already made in the earlier session (see the entry below); nothing new met the bar.
- Bing (verified): 91 pages indexed (89 on 15 Nov), 0 crawl issues, 0 inbound links, 1 impression in the last 3 days.
- GA4 now readable through OpenSEO (10 to 15 Nov: 15 sessions, 1 from organic search, 0 key events).

### 17 Nov 2026 (advanced SEO/AEO/GEO run)
See docs/seo-report-2026-11-17.md.
- AEO: direct-answer FAQs (with FAQPage schema) for AI-style queries the site already ranks for: home "how do I scale Meta ads for an 8-figure DTC brand" (#13), /growth "which agency creates Instagram Reels and TikTok videos for brands, pricing" (#1), /viral-creatives "video ad creative scaling" (18.8; 3 FAQs).
- GEO: visible "Sources" lists plus schema `citation` on /blog/tiktok-gmv-max (6 TikTok help articles), /blog/tiktok-shop-affiliate-commission (4) and /blog/meta-andromeda (Engineering at Meta, Dec 2024).
- scripts/seo-kpis.py: inspection now threaded (2.5 min, was hanging). Week 10 to 16 Nov: 360 impressions, 1 click, position 44.9, 8 queries in top 10, 56 of 160 sitemap URLs crawled, 54 indexed.
- Found: 2 newly indexable cases still "Excluded by noindex" from an 11 Nov crawl; added to the owner's manual request list.

### 16 Nov 2026 (scheduled run, after the diagnosis)
No site change: the diagnosis earlier today already ran the Monday inspection (53 of 153 crawled, 53 indexed) and set the KPI baseline; Search Console has no newer data yet. Bing (13 Nov): 89 indexed, 0 crawl errors, first impression (1), 0 inbound links.

### 16 Nov 2026 (deep diagnosis)
Report: docs/seo-diagnosis-2026-11-16.md. Verified: GSC data starts 19 Oct 2026 (no previous-quarter data); Google crawled 53 of 153 sitemap URLs (all indexed, 0 crawled-not-indexed); 88% of query impressions at positions 51 to 100; Bing shows 0 inbound links; Indexing API did not get pages crawled (48 of 52 URLs submitted 3+ times uncrawled). Ruled out: metadata, duplicates, rendering, canonicals, internal links, crawl waste. Added scripts/seo-kpis.py and audit/kpi-baseline-2026-11-16.json; daily session switched to the recovery plan (no new pages until 100 URLs crawled, manual Request Indexing list, weekly KPI snapshot).

### 16 Nov 2026 (growth strategy run + metadata audit)
Full report: docs/seo-report-2026-11-16.md. Google 9 to 15 Nov: 296 impressions (208), avg position 50.8 (65.1), 0 clicks. Indexing (all 153): 53 indexed, 39 discovered, 61 unknown, 0 errors.
Done: metadata audit of every indexable page; 39 truncated case descriptions rebuilt from whole sentences (no ellipsis, 119 to 157 chars, unique); privacy and terms descriptions unified; React vs crawler metadata identical on 28 pages; new guide /blog/tiktok-shop-affiliate-commission; 6 more cases indexable (43); booking buttons earlier on template landing pages (iPhone 13 CTA 922 px to 626 px).

### 15 Nov 2026
Data: Google 8 to 14 Nov vs 1 to 7 Nov: impressions 286 vs 189, clicks 1 vs 2, avg position 54.7 vs 66.1, queries 92 vs 64, pages 24 vs 15. New top positions: "what makes a top performance marketing and media agency for scaling?" #2 (/blog/performance-marketing-agency), "meta ads agency for ecommerce brands" #2, "advertising to sales ratio calculator" #8 (/tools). Indexing re-check (88 of 101 non-indexed URLs): 0 newly indexed, discovered 21 to 39, unknown 80 to 49. Bing: 88 indexed (11 Nov), 2 crawl errors, 0 impressions.
Done:
- /tools/mer-calculator: output renamed "Advertising-to-sales ratio", new answer-first section "MER and the advertising-to-sales ratio" with worked example, FAQ (FAQPage schema), meta description mentions the ratio.
- Commits now authored as DEVSYNX, no Claude attribution (owner's request 14 Nov).

### 14 Nov 2026
Data: Google 7 to 13 Nov vs 31 Oct to 6 Nov: impressions 271 vs 170, clicks 1 vs 2, avg position 55.6 vs 67.2, queries 93 vs 53, pages 26 vs 12. Movers: "bfcm ads" 40 to 20; a case ranks 18.5 for "dropshipping case study review"; home 18 for "dtc affiliate program scaling"; /shopify-agency most-shown page (44 impressions, "dtc shopify agency" 69.8, "shopify agency for scaling brands" 61.6). Bing: 92 indexed, 5 crawl errors on 9 Nov (no issue detail in API), 0 impressions.
Done:
- /blog/bfcm-meta-ads-playbook: new dated section "BFCM ads in the last two weeks (14 to 26 Nov)"; updated 14 Nov.
- Home Most Searched (React and crawler HTML) now links /dtc-affiliate-program-management, the page that should rank instead of the home page.

### 13 Nov 2026 (session 2: master SEO/AEO/GEO prompt)
Full write-up: SEO_FIX_REPORT.md. Done: audit script with per-bot checks (13 agents x 20 URLs, all 200 and identical), brandFacts.js single source (3 mismatches to 0), home crawler content 1,003 to 1,443 words from visible sections, llms-full.txt 1.45 MB to 497 KB (51 key pages), sister-site links 9 pages to 1 nofollow, 132 redirects 308 to 301, IndexNow script, bylines and updated dates on comparison/benchmark/tool/glossary/case pages, speakable on 5 more service pages, GA4 events (click_whatsapp, click_email, click_phone, book_click, scroll_75, tool_used), content-visibility on home sections (style/layout 2.8 s to 1.8 s), geo_prompts.md, programmatic_decisions.csv. Lighthouse mobile: /meta-ads-agency 81, blog 79, case 76, home 42 to 44 (blocker: 7 font families, video wall).

### 13 Nov 2026
Data: Google 6 to 12 Nov vs 30 Oct to 5 Nov: impressions 237 vs 157, clicks 1 vs 2, avg position 57.6 vs 65.1, queries 82 vs 45, pages 24 vs 9. New: /meta-ads-agency ranks #2 for "meta ads agency for ecommerce brands" (first time); /blog/meta-ads-library avg position 4.4 with 7 impressions and 0 clicks; /tools/discount-break-even-calculator at 15.3; home page average position 21.8. Bing: 92 pages indexed, 0 crawl issues, 0 impressions.
Done:
- /blog/meta-ads-library: title "Meta Ads Library: How to Use It to Find Winning Ads" and a how-to meta description (the old title led with the case study; searchers want how to use the tool). CTR fix for a position-4 page with no clicks.
- /tools/discount-break-even-calculator: new answer-first table "How many extra orders each discount needs" (10% to 40%, computed from the calculator defaults) for BFCM-season searches; page 2 to page 1 push.
- Sitemap dates: /meta-ads-agency, /tiktok-ads-agency, /services set to 12 Nov (guide blocks changed); / and /blog now follow the newest post date automatically; cases promoted 10 and 11 Nov carry those dates (were 3 Nov); a hard-coded override that pinned two tools to 9 Nov now respects later updates.

### 12 Nov 2026 (session 2: growth strategy run)
Done:
- New guide /blog/tiktok-gmv-max (Product vs LIVE GMV Max, Target ROI vs Max delivery vs Growth autopilot, ROI from unit economics, under-spending, attribution); facts from TikTok help-center articles (summaries via search; host blocked here). Link rule "GMV Max", linked from /tiktok-ads-agency guides and /blog/tiktok-shop-strategy.
- Cannibalisation: "roas calculator ecommerce" split /tools (26.5) vs /roas-calculator (35.5). /tools hub now leads with the ROAS calculator card ("ROAS calculator for ecommerce"). Hubs (/blog, /, /growth, /benchmarks) rank for queries whose target pages are not indexed yet; fix is indexing, not content.
- /benchmarks/ecommerce-roas title now "Average Ecommerce ROAS Benchmarks by Niche" (queries: roas benchmarks, benchmark roas, roas benchmarks by industry).
- Images: team photos PNG to WebP (1.8 MB to 60 KB); 64 oversized thumbnails and video posters resized to 720 px (12.6 MB to 2.7 MB); LazyVideo posters load only near the viewport. Home on load: images 110 (5.8 MB) to 28 (584 KB), total transfer about 11 MB to 4.4 MB; LCP 5.6 s.
- Live verification (OpenSEO crawl of 50 live pages, free plan cap): 0 issues; every page 1 H1, no missing alt, new cases live with corrected titles; response 30 to 250 ms.
- Indexing audit (URL Inspection, all 152 sitemap URLs): 51 indexed (was 48), 21 discovered, 80 unknown (incl. this week's new pages); 0 errors, 0 crawled-not-indexed, 0 excluded, 0 Google-chosen canonical conflicts.

### 12 Nov 2026
Data: Google 5 to 11 Nov vs 29 Oct to 4 Nov: impressions 230 vs 147, clicks 2 vs 1, avg position 59.6 vs 65.7, queries 83 vs 42, pages 20 vs 9. Top-20 positions: conversion rate calculator 6, ecommerce roas calculator 7, health-wellness telehealth query 17. New: "roas calculator ecommerce" (8 impr, /tools 26.5 and /roas-calculator 35.5), "tiktok shop break even roas calculator" (/tools 42), "ecommerce performance marketing agency" (23). Bing: all 6 sitemaps + feed read 11 Nov; 0 crawl issues; still 0 impressions.
Done:
- New tool /tools/tiktok-shop-break-even-roas-calculator (10th calculator): price, COGS, shipping, referral fee (labelled example 8%; TikTok's official 2024 table says 6%, 2026 seller guides report 8%, page states both), affiliate commission, other fee; outputs break-even ROAS, profit before ads, break-even CPA, fees, margin. Linked from /tiktok-shop-agency, /tools hub, llms.txt, link rule.
- /blog/performance-marketing-agency: meta description and opening target "ecommerce performance marketing agency".
- Service pages' guide blocks now link the newest guides: /meta-ads-agency (questions to ask, learning phase, account restricted), /tiktok-ads-agency and /shopify-agency (TikTok Shop vs Shopify), /services (questions to ask).
- Bing: submitted the remaining 51 sitemap URLs (all 151 now submitted).
Checked, no change needed: agency pricing models already covered in how-much-does-a-dtc-agency-cost; /about (pos 2.6) queries are anonymised.

### 11 Nov 2026 (session 2: growth strategy run)
Done:
- 8 more verified case studies made indexable with caption-only write-ups (37 indexable): $98K in 23 days (fashion), $19,167 in a day at 3.61x (fitness), $100K month (skincare), $40,669 in 7 days (high-ticket), $43,970 in a day at 4.36x, $80,227 in 7 days at 3.97x, $153,163 month, $42K day. 3 headline corrections via FACT_OVERRIDES. Skipped the "$63K in 14 days" post (figure not backed by its caption).
- New posts: /blog/questions-to-ask-meta-ads-agency, /blog/meta-ad-account-restricted (competitor gap research: buyer-guide posts rank for Meta agency queries; no account-restriction content on the site).
- Fixed mixed signals: duplicate case URLs said "index" while their canonical pointed at a noindex original; duplicates now follow the original's status.
- Mobile speed (Lighthouse, home): performance 42 to 62-63, LCP 16.5 s to 5.8 s, CLS 0.19 to 0.11. Case-study videos lazy-load near the viewport; hero video starts after page load; poster 163 KB to 98 KB.
- Indexing audit: non-indexed pages are not short of internal links (blog posts 237 inlinks, industry pages 15-25); titles, canonicals, robots and sitemap consistent. Remaining blocker is authority.
Bing Webmaster (API connected):
- Status before: 91 pages in Bing's index (3 Nov), 0 crawl issues listed, 0 blocked URLs, 0 Bing impressions/clicks in the last 12 days, two stale non-www sitemaps from June registered.
- Removed the stale https://brandscalinghacks.com/sitemap.xml and .xml.gz feeds; submitted sitemap.xml, the 5 child sitemaps and feed.xml.
- Submitted 100 URLs via SubmitUrlBatch (daily quota 100; 51 remaining for tomorrow).
- Fixed site-wide Bing SEO-report issues on all 153 indexable pages: two H1 tags (noscript copy now a paragraph) and an image without alt (Meta Pixel noscript image, alt=""). seo-audit now enforces exactly one H1.
Research (competitors): page 1 for core queries is mostly "best X agencies" listicles; pitch list and 7 content gaps recorded below.

### 11 Nov 2026
Data (Search Console, week 4 to 10 Nov vs 28 Oct to 3 Nov): impressions 230 vs 145 (+59%), clicks 3 vs 1, pages with impressions 20 vs 10, queries 85 vs 40, average position 64. Indexing: 48 indexed (42 + 6 newly indexed: /meta-ads-agency, /blog/meta-ads-library, /blog/meta-andromeda, /case-studies/dropshipping-dtc, 1 case, /privacy-policy); 23 discovered, 60 unknown.
Done:
- /shopify-agency: title "DTC Shopify Growth Agency: Stores & CRO", description, and a new answer-first section "What a DTC Shopify agency does" (queries: dtc shopify agency 62, website design agency 90, cro 87, d2c shopify growth agency 99).
- /roas-calculator: new section on using it as a Meta, Facebook, TikTok or dropshipping ROAS calculator (those queries land on /tools at 79 to 85; "ecommerce roas calculator" is at 7).
- /tools: meta description and ROAS calculator card now name "ROAS" and the Meta, Facebook, TikTok and dropshipping uses.
- /tools/conversion-rate-calculator: explicit "revenue = sessions x conversion rate x AOV" formula (new query "ecommerce revenue formula sessions conversion rate aov").
- Sitemap dates corrected for /growth, /shopify-agency, /roas-calculator, /tools.
- Submitted 70 URLs to the Indexing API (70 accepted: today's and yesterday's changed pages plus every non-case page not yet indexed) and 4 to IndexNow.

### 10 Nov 2026 (session 2)
Done:
- GA4 installed (G-4NHL9F0B3C) on every page, loaded after render; lead clicks (WhatsApp, /book and calendar links, email, phone) sent as generate_lead with a method parameter.
- /blog/performance-marketing-agency: new answer-first section "How to find an ecommerce growth agency that specializes in scaling DTC brands" (query at position 26) and 2 FAQs incl. "Which Google Ads agencies are best for scaling DTC ecommerce brands?" (position 38), with FAQPage schema.
- /blog/bfcm-meta-ads-playbook: title tag now "BFCM 2026 Ad Strategy: Meta Ads Playbook" (page average position 21; "bfcm ad strategy", "bfcm ads").
- /growth: new section on channels with a "TikTok Shop scaling services" link to /tiktok-shop-agency (the query lands on /growth at 73).

### 10 Nov 2026 (session 1)
See docs/seo-report-2026-11-10.md: 2 new guides, 8 indexable cases, /cro-agency retitle, gross vs net ROAS, affiliate ROAS sections, lighter hero video, blog thumbnails, 60 URLs to the Indexing API.

## Outstanding

Needs the owner (no access from here):
- GA4: read access done 17 Nov (OpenSEO bound to property 563592875, stream G-4NHL9F0B3C verified). Owner still to mark generate_lead as a key event (only close_convert_lead, qualify_lead and purchase are key events) and link Search Console in GA4.
- Approve AI visibility tracking (OpenSEO, about $1.16/month weekly for 5 prompts on 4 engines), or decline.
- Backlinks and profiles that need your identity: Clutch, Google Business Profile, Shopify Partner Directory, DesignRush, GoodFirms, Sortlist, UpCity, podcast pitches, Qwoted.

Queue (next sessions, highest impact first):
- Content gaps from competitor research: TikTok Shop affiliate commission rates (calculator done 12 Nov), AppLovin for DTC readiness post, KlientBoost alternatives compare page.
- Listicle outreach (owner): influencermarketinghub.com, shipfusion.com, webtonic.io, mobiloud.com, 99minds.io, knowlify.com, stryde.com, newengen.com; directories 1800dtc.com/get-listed, DesignRush, Clutch, Foreplay agencies.
- Bing: recheck GetCrawlStats / GetRankAndTrafficStats daily; submit new and changed URLs.
- Resubmit pages still unknown (60) in batches as the shared Indexing API quota allows.
- Photo thumbnails for the other 22 blog posts (needs owner OK: uses Higgsfield credits).
- Fix template card figures in allCaseStudies.js that contradict captions.
- Competitor SERP check for "meta ads agency for ecommerce", "tiktok shop agency", "ecommerce growth agency" and close content gaps.
- CTR work on any page that reaches positions 1 to 15 with 0 clicks (currently /about at 5.4).
- Next content if supported by data: Meta ads cost per purchase by niche (case data).

## 20 Nov 2026, 08:37 UTC run

- Google Search Console (Verified): data to 19 Nov, same as the previous snapshot. 7 days to 19 Nov: 526 impressions (previous 7 days 264), 1 click, 15 keywords in the top 10.
- URL Inspection of all 168 sitemap URLs (Verified): 65 crawled, 63 indexed (19 Nov: 64 and 62 of 161). New: /roas-improvement-agency, crawled 19 Nov and indexed. The 5 pages added 20 Nov and 14 other priority pages are still "URL is unknown to Google".
- Bing (Verified): 95 in index, 0 inbound links, 0 crawl issues.
- GA4, 13 to 19 Nov (Verified): 37 sessions (Direct 31, Organic Social 5, Organic Search 1), 0 key events. Booking and quiz events are not key events yet, so they are not counted here.
- Indexing API: no requests sent (owner rule: none before 22 Nov).
- Change-log checks: none due yet (first due 26 Nov).
- Changes: none from tracking, because the Google data is unchanged and there is no new evidence. Separate owner request, the same day: 2 new case studies (change-log row 12).

## 20 Nov 2026, 20:37 UTC run

- Google Search Console (Verified): no new day of data; the tracker reports SAME DATA, still to 19 Nov. Google revised the counts slightly: 7 days to 19 Nov, 545 impressions, 1 click, 15 keywords in the top 10.
- Bing (Verified): 95 in index, 0 inbound links, 0 crawl issues.
- Indexing API: no requests (owner rule: none before 22 Nov, and never in the 20:37 run).
- Change-log checks: none due (first due 26 Nov).
- Changes: none, because there is no new evidence. The hostinger branch needs no refresh: the site did not change this run.

## 21 Nov 2026, 08:37 UTC run

- Google Search Console (Verified): new data to 20 Nov. 7 days: 610 impressions (previous 7 days 276), 1 click, 13 keywords in the top 10. Up: dtc performance agency 37.5 to 28.2, meta ads agency for ecommerce 74.5 to 65.9, ecommerce meta ads agency 79.2 to 71.2, dtc ecommerce cro agency 56.7 to 50. Down: dtc performance marketing 10 to 21, dtc marketing agency 51.3 to 56.1, dtc growth agency 38.6 to 42.3.
- URL Inspection, 168 sitemap URLs (Verified): 72 crawled and 69 indexed (20 Nov: 65 and 63; 19 Nov: 64 and 62). Newly crawled and indexed on 20 Nov: /shopify-marketing-agency, /ecommerce-advertising, /ecommerce-email-marketing, /blog/facebook-ads-for-dropshipping, /blog/how-to-find-winning-products and the 2 new case pages. Dropped from the index: /cases/pov-curious-pulled-off-40669-sales-7-days-134-high-ticket, now "Crawled - currently not indexed", last crawled 12 Nov (a consolidated case page). Still unknown to Google: /meta-ads-audit, /google-shopping-ads-agency, /contact, /book and others.
- Bing (Verified): 98 in index (was 95), 0 inbound links, 0 crawl issues.
- GA4, 14 to 20 Nov (Verified): 42 sessions (Direct 37, Organic Social 3, Organic Search 1, Unassigned 1), 0 key events.
- Indexing API: no requests (owner rule: none before 22 Nov).
- Change-log checks: none due (first due 26 Nov).
- Changes: none. Every candidate is waiting for Google to see a change already made. "dtc marketing agency" (36 impressions) still ranks /blog/performance-marketing-agency at 56.1, but Google last crawled the home page on 19 Nov 19:44, before the 20 Nov retarget (change-log row 8). "roas calculator" ranks /tools at 11 while /roas-calculator sits at 38, but /roas-calculator was last crawled on 9 Nov, before the 20 Nov retitle (row 11). Changing these again before Google recrawls would make the results impossible to measure.

## 21 Nov 2026, 20:37 UTC run

- Google Search Console (Verified): no new day of data (SAME DATA, still to 20 Nov). Google revised the 7-day totals slightly: 627 impressions, 1 click, 14 keywords in the top 10.
- Bing (Verified): 98 in index, 0 inbound links, 0 crawl issues.
- Indexing API: no requests (none before 22 Nov, and never in the 20:37 run).
- Change-log checks: none due (first due 26 Nov).
- Changes: none from tracking, because there is no new data. Earlier today, on the owner's request: the preferred source button (row 13) and the lead form to info@ (row 14).

## 22 Nov 2026, 08:37 UTC run

- Google Search Console (Verified): new data to 21 Nov. 7 days: 640 impressions (previous 7 days 294), 1 click, 12 keywords in the top 10. Up: dtc shopify agency 51.2 to 46.6, dtc shopify cro 62.2 to 53.2, best shopify agencies for scaling dtc brands 55 to 38, roas to acos calculator 35.3 to 24.8, ecommerce roas improvement agency 70.2 to 63. Down: retargeting solution for dtc brands 63 to 67.7.
- URL Inspection, 168 sitemap URLs (Verified): 72 crawled and 70 indexed (21 Nov: 72 and 69). No newly crawled pages.
- Indexing API: 16 URLs submitted, all 16 accepted (HTTP 200). These are all the never-crawled pages on the priority list plus the uncrawled tool and benchmark pages: /meta-ads-audit, /google-shopping-ads-agency, /dtc-affiliate-program-management, /klaviyo-email-sms-agency, /creative-strategy-agency, /influencer-marketing-agency, /contact, /tools/break-even-roas-calculator, /book, /bfcm-ads-management, /tools/cac-calculator, /tools/ltv-calculator, /tools/mer-calculator, /tools/meta-ads-budget-calculator, /tools/tiktok-shop-break-even-roas-calculator, /benchmarks/ecommerce-roas. Accepted means Google received the request, not that the page is crawled.
- Bing (Verified): 100 in index (was 98), 0 inbound links, 0 crawl issues.
- GA4, 15 to 21 Nov (Verified): 48 sessions (Direct 41, Organic Social 3, Referral 3, Organic Search 1), 0 key events.
- Change-log checks: none due (first due 26 Nov).
- Changes: none in this run. The week-1 page changes in docs/seo-growth-plan-2026-11-22.md (BFCM refresh, internal links, /shopify-agency fix) wait for the owner's go-ahead.

## 22 Nov 2026, 20:37 UTC run

- Google Search Console (Verified): no new day of data (SAME DATA, still to 21 Nov). 7 days: 640 impressions, 1 click, 12 keywords in the top 10.
- Bing (Verified): 100 in index, 0 inbound links, 0 crawl issues.
- Indexing API: none in this run (20:37 run). Today's 08:37 run submitted 16 URLs.
- Change-log checks: none due (first due 26 Nov).
- Changes: none in this run. Week-1 plan changes (rows 15 to 17) were deployed earlier today and are waiting for Google to recrawl.

## 23 Nov 2026, 08:37 UTC run (Monday)

- Google Search Console (Verified): new data to 22 Nov. 7 days: 632 impressions (previous 7 days 324), 0 clicks (previous 1), 10 keywords in the top 10. Up: dtc shopify agency 46.6 to 38.6, dtc shopify cro 53.2 to 44.6, dtc shopify ecommerce agency 54.7 to 41.8, dtc shopify website design agency 55.3 to 41.6, dtc ecommerce agency 72.7 to 66.8. Down: ecommerce roas improvement agency 63 to 69.5, dtc performance marketing agency 13.5 to 19.2.
- Weekly KPIs (audit/kpi-2026-11-21.json vs baseline 16 Nov): impressions 655 vs 303, clicks 1 vs 0, average position 36.9 vs 50.5, queries in top 10 12 vs 6, pages with impressions 41 vs 33, sitemap URLs crawled 72 vs 53, indexed 70 vs 53.
- URL Inspection, 168 sitemap URLs (Verified): 72 crawled, 70 indexed, unchanged from 22 Nov. None of the 16 URLs submitted to the Indexing API on 22 Nov have been crawled yet.
- Indexing API: 0 submitted today. The only eligible URLs (never-crawled priority, service and tool pages) are the same 16 submitted yesterday. Repeating identical requests a day later adds nothing, so today's allowance was not used.
- Bing (Verified): 103 in index (was 100), 0 inbound links. Crawl stats for 22 Nov show 8 4xx responses and 11 crawl errors (previous days 0). GetCrawlIssues returns no detail, and the live crawl on 23 Nov found 0 broken internal links, so the URLs are not identified. Owner: check Bing Webmaster Tools, Crawl information.
- GA4, 16 to 22 Nov (Verified): 52 sessions (Direct 44, Organic Social 4, Referral 3, Organic Search 1), 0 key events.
- Change-log checks: none due (first due 26 Nov).
- Changes: none. The week-1 changes (rows 15 to 17, deployed 22 Nov) are not reflected in data yet. The Shopify keyword gains above came before that change could have been recrawled.

## 23 Nov 2026, 20:37 UTC run

- Google Search Console (Verified): no new day of data (SAME DATA, still to 22 Nov). Google revised the 7-day totals to 674 impressions, 1 click, 11 keywords in the top 10.
- Bing (Verified): 103 in index, 0 inbound links. 22 Nov crawl stats still show 8 4xx and 11 crawl errors; GetCrawlIssues gives no detail.
- Indexing API: not used (owner rule, 23 Nov).
- Change-log checks: none due (first due 26 Nov).
- Changes: none in this run. Today's owner task file and content file changes (rows 18 to 26) are live and waiting for Google to recrawl.

## 24 Nov 2026, 08:37 UTC run

- Google Search Console (Verified): new data to 23 Nov. 7 days: 662 impressions (previous 7 days 388), 1 click, 7 keywords in the top 10 (down from 11). Up: dtc shopify cro 44.6 to 36.6, dtc shopify seo 57 to 47.8, dtc performance agency 27 to 21.3, meta andromeda 80.6 to 76.7, ecommerce meta ads agency 68.4 to 63.9. Down: dtc brand accelerator 30 to 47.7, dtc performance marketing agency 19.2 to 22.8, dtc performance marketing 21 to 25.3.
- URL Inspection, 168 sitemap URLs (Verified): 72 crawled, 70 indexed (unchanged). Recrawled since 22 Nov: /blog (24 Nov), /viral-creatives, /terms and one case page (22 Nov). The pages changed on 22 and 23 Nov have not been recrawled yet.
- Bing (Verified): 111 in index (was 103), 0 inbound links, 1 crawl error (was 11).
- GA4, 17 to 23 Nov (Verified): 42 sessions (Direct 32, Organic Social 6, Referral 3, AI Assistant 1, Organic Search 1), 0 key events. First recorded session from an AI assistant.
- Indexing API: not used (owner rule).
- Change-log checks: none due (first due 26 Nov).
- Changes: none. The keyword drops are on pages changed 22 and 23 Nov that Google has not recrawled, so there is no evidence yet to act on.

## 24 Nov 2026, 20:37 UTC run

- Google Search Console (Verified): no new day of data (SAME DATA, still to 23 Nov). Revised 7-day totals: 678 impressions, 1 click, 7 keywords in the top 10.
- Bing (Verified): 111 in index, 0 inbound links, 1 crawl error.
- Indexing API: not used (owner rule).
- Change-log checks: none due (first due 26 Nov).
- Changes: none. The AEO/GEO week 1 work (row 27) went live today; week 2 structural work is scheduled for 1 Dec.

## 25 Nov 2026, 08:37 UTC run

- Google Search Console (Verified): new data to 24 Nov. 7 days: 690 impressions (previous 7 days 420), 1 click, 10 keywords in the top 10. Up: roas 66 to 58.7, tools to scale direct to consumer brands 62.2 to 57.6. Down: dropshipping roas calculator 20 to 69 and bands off ads roas calculator 20 to 60 (expected after /roas-calculator stopped targeting "roas calculator", owner decision 23 Nov), tiktok shop scaling services 64 to 69.5, dtc agency 52 to 55.
- URL Inspection, 170 sitemap URLs (Verified): 71 crawled, 69 indexed (24 Nov: 72 and 70 of 168; /locations/san-francisco left the sitemap after its 301). Recrawled since 23 Nov: /blog/bfcm-meta-ads-playbook (25 Nov), /blog and /glossary/contribution-margin (24 Nov). New Austin, Dallas and Shopify Plus pages not yet known to Google.
- Bing (Verified): 115 in index (was 111), 0 inbound links, 2 crawl errors.
- GA4, 18 to 24 Nov (Verified): 36 sessions (Direct 27, Referral 4, Organic Social 3, AI Assistant 1, Organic Search 1), 0 key events.
- Indexing API: not used (owner rule).
- Change-log checks: none due yet (first due 26 Nov).
- Changes: none in this run. The city page work (row 28) was deployed earlier today.

## 25 Nov 2026, 20:37 UTC run

- Google Search Console (Verified): no new day of data (SAME DATA, still to 24 Nov). Revised 7-day totals: 702 impressions, 1 click, 10 keywords in the top 10.
- Bing (Verified): 115 in index, 0 inbound links, 2 crawl errors.
- Indexing API: not used (owner rule).
- Change-log checks: none due (first due 26 Nov).
- Changes: none in this run. The city pages and the Shopify Plus page (row 28) went live today.

## 26 Nov 2026: two-day SEO, AEO and GEO work (day 1)

- Metadata audit of all 253 built pages (172 indexable): titles all at 60 characters or fewer and unique; fixed 4 descriptions over 155 characters and 2 ending in an ellipsis.
- Slugs: 41 indexable case studies renamed to keyword-led slugs with 301s; 2 duplicate case pages 301 to their originals; 174 redirects tested, 0 failures, 0 chains.
- Technical: layout shift fixed (home CLS 0.166 to 0.021 in throttled lab tests; other pages 0 to 0.001).
- GEO: Organization knowsAbout and a services OfferCatalog in the sitewide schema.
- AEO: confirmed every content page and blog post opens with a direct answer (0 missing).
- Day 2 items done the same day: 4 industry pages retargeted to buyer keywords from the owner plan (fashion, jewelry, supplement, food and beverage marketing agency), CPG scope FAQ, 5 keywords added to tracking.

## 26 Nov 2026, 08:37 UTC run

- Google Search Console (Verified): new data to 25 Nov. 7 days: 705 impressions (previous 7 days 484), 1 click, 9 keywords in the top 10. Up: tiktok shop scaling services 69.5 to 51. Down: dtc performance marketing 28.2 to 34.3, dtc growth agency 47.7 to 50.9, dtc woocommerce agency 68.2 to 75.3.
- URL Inspection, 170 sitemap URLs (Verified): 59 crawled, 59 indexed (25 Nov: 71 and 69). The drop is the 41 renamed case URLs (26 Nov): their new URLs are not known to Google yet, and the old URLs now 301. Non-case pages: 57 crawled and indexed. New on 25 Nov: /locations/austin, /locations/dallas and /shopify-plus-agency crawled and indexed (Verified).
- Bing (Verified): 137 in index (was 115), 0 inbound links, 0 crawl errors.
- GA4, 19 to 25 Nov (Verified): 41 sessions (Direct 29, Organic Social 5, Referral 4, Organic Search 2, AI Assistant 1), 0 key events.
- Change-log checks due 26 Nov (rows 1, 2, 6): not measurable with the connected tools; details in the change log.
- Indexing API: not used (owner rule).
- Changes: none in this run beyond the owner-requested day 1 and day 2 work logged as rows 29 to 32.
