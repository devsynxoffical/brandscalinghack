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
- Re-inspect indexing (scheduled 11 Nov 08:10 UTC); resubmit pages still unknown.
- Photo thumbnails for the other 22 blog posts.
- Fix template card figures in allCaseStudies.js that contradict captions.
- Competitor SERP check for "meta ads agency for ecommerce", "tiktok shop agency", "ecommerce growth agency" and close content gaps.
- CTR work on any page that reaches positions 1 to 15 with 0 clicks (currently /about at 5.4).
- Next content if supported by data: Meta ads cost per purchase by niche (case data).
