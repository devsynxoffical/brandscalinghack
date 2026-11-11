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

### 11 Nov 2026 (session 2: growth strategy run)
Done:
- 8 more verified case studies made indexable with caption-only write-ups (37 indexable): $98K in 23 days (fashion), $19,167 in a day at 3.61x (fitness), $100K month (skincare), $40,669 in 7 days (high-ticket), $43,970 in a day at 4.36x, $80,227 in 7 days at 3.97x, $153,163 month, $42K day. 3 headline corrections via FACT_OVERRIDES. Skipped the "$63K in 14 days" post (figure not backed by its caption).
- New posts: /blog/questions-to-ask-meta-ads-agency, /blog/meta-ad-account-restricted (competitor gap research: buyer-guide posts rank for Meta agency queries; no account-restriction content on the site).
- Fixed mixed signals: duplicate case URLs said "index" while their canonical pointed at a noindex original; duplicates now follow the original's status.
- Mobile speed (Lighthouse, home): performance 42 to 62-63, LCP 16.5 s to 5.8 s, CLS 0.19 to 0.11. Case-study videos lazy-load near the viewport; hero video starts after page load; poster 163 KB to 98 KB.
- Indexing audit: non-indexed pages are not short of internal links (blog posts 237 inlinks, industry pages 15-25); titles, canonicals, robots and sitemap consistent. Remaining blocker is authority.
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
- GA4: tag is live. Owner still to (1) link Search Console in GA4, (2) mark generate_lead as a key event, (3) give read access (OpenSEO Integrations, or Viewer for the service account).
- Approve AI visibility tracking (OpenSEO, about $1.16/month weekly for 5 prompts on 4 engines), or decline.
- Backlinks and profiles that need your identity: Clutch, Google Business Profile, Shopify Partner Directory, DesignRush, GoodFirms, Sortlist, UpCity, podcast pitches, Qwoted.

Queue (next sessions, highest impact first):
- Content gaps from competitor research: TikTok GMV Max guide, TikTok Shop affiliate commission rates (or a TikTok Shop profit calculator), AppLovin for DTC readiness post, KlientBoost alternatives compare page, agency pricing models section in how-much-does-a-dtc-agency-cost.
- Listicle outreach (owner): influencermarketinghub.com, shipfusion.com, webtonic.io, mobiloud.com, 99minds.io, knowlify.com, stryde.com, newengen.com; directories 1800dtc.com/get-listed, DesignRush, Clutch, Foreplay agencies.
- Bing Webmaster: API host blocked by this environment's network policy; needs ssl.bing.com allowed.
- Resubmit pages still unknown (60) in batches as the shared Indexing API quota allows.
- Photo thumbnails for the other 22 blog posts (needs owner OK: uses Higgsfield credits).
- Fix template card figures in allCaseStudies.js that contradict captions.
- Competitor SERP check for "meta ads agency for ecommerce", "tiktok shop agency", "ecommerce growth agency" and close content gaps.
- CTR work on any page that reaches positions 1 to 15 with 0 clicks (currently /about at 5.4).
- Next content if supported by data: Meta ads cost per purchase by niche (case data).
