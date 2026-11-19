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
