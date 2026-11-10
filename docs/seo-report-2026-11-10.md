# SEO Report: 10 November 2026

Site: https://www.brandscalinghacks.com (DTC ecommerce performance marketing agency, New York)
Commit deployed to main: `8b4a6f9`

## 1. Starting point

**Who the site serves:** DTC and Shopify brands that are looking for Meta, TikTok and Google ads management, CRO and creative.

**Structure:** 239 prerendered pages:
- 16 core pages
- 66 content pages (services, industries, locations, tools, glossary, comparisons, benchmarks)
- 26 blog posts
- 126 case studies, 92 of them noindex

**Inspection on 10 Nov (131 sitemap URLs):**

| Status | Pages |
|---|---|
| Indexed | 42 |
| Discovered, not yet crawled | 23 |
| Unknown to Google | 66 |
| Crawled but not indexed | 0 |

None were "crawled but not indexed", so Google is not rejecting the content. It simply hasn't reached most pages yet, because the domain has almost no external links.

**Search Console:**
- Week of 3–9 Nov compared with the week before: core pages 121 impressions (from 54), blog 87, tools 47 (from 6), locations 15 (from 0).
- Most queries still rank between position 45 and 95, which is typical for a new domain without backlinks.

**Work done before today** (not repeated): service, industry, location, tool, glossary and benchmark pages; sitemap index; schema; Explore-more internal links; the /book page; and earlier rewrites of indexed pages.

## 2. Keywords targeted today (from real Search Console impressions)

| Query | Where it showed | Avg position | Action |
|---|---|---|---|
| dtc ecommerce cro agency / dtc ecommerce cro | /, /shopify-agency | 85–94 | /cro-agency title, H1, description |
| gross roas | /blog/what-is-roas | 88 | New section: Gross ROAS vs net ROAS |
| ecommerce roas tracking tool | /blog | 81 | ROAS tracking tools list in the same section |
| affiliate roas benchmark | /blog, /blog/what-is-roas | 67–78 | New section: How to measure affiliate ROAS |
| ecommerce brands affiliate marketing scaling challenges | /blog, /case-studies | 70–90 | New section: affiliate scaling challenges |
| scale affiliate program dtc / dtc affiliate program scaling | /, /shopify-agency | 46–97 | Same post, upgraded |
| meta ads learning phase, learning limited | new | n/a | New guide |
| tiktok shop vs shopify, tiktok shop fees | new | n/a | New guide, which supports /tiktok-shop-agency |

## 3. Updated metadata

| Page | Before | After |
|---|---|---|
| /cro-agency (title) | Ecommerce CRO Agency for Shopify Brands \| Brand Scaling | DTC Ecommerce CRO Agency for Shopify Brands \| Brand Scaling |
| /cro-agency (H1) | Ecommerce CRO Agency for Shopify Stores Running Paid Traffic | DTC Ecommerce CRO Agency for Shopify Stores Running Paid Traffic |
| /cases/structure-campaigns-50000-day-profits | DTC Ecommerce Case Study: $50,000 | DTC Ecommerce Case Study: $66,168 in 1 Day |
| /cases/journey-client-behind-touching-way-100000-month-mark | Supplement Case Study: $100,000 in One Month | DTC Ecommerce Case Study: $64,000 in 24 Days |

**The two case corrections:**
- **$50,000:** this was the post's goal ("$50K+/day profits"). The caption reports $66,168 made from $19,118 of spend.
- **$100,000 in one month:** the brand was heading towards that mark. The reported result is $64,000 in 24 days, and "supplementary products" in the caption are upsells, not the brand's niche.

Both pages now show only the facts stated in the caption.

## 4. Published blogs

| URL | Title tag | Length |
|---|---|---|
| /blog/meta-ads-learning-phase | Meta Ads Learning Phase: How to Exit It \| Brand Scaling | about 2,100 words + 6 FAQs |
| /blog/tiktok-shop-vs-shopify | TikTok Shop vs Shopify for DTC Brands \| Brand Scaling | about 2,000 words + 5 FAQs |

**What both posts include:**
- Answer-first H2s and BlogPosting + FAQ schema.
- OG images, plus entries in the feed, the sitemap and llms.txt.
- Links to /meta-ads-agency, /tiktok-shop-agency, /shopify-agency and the budget and break-even calculators.

**Accuracy:**
- TikTok fees name the fee types only and point readers to the official fee pages, because rates change by region.
- Every number is labelled as illustrative arithmetic.

## 5. Case studies (8 promoted to indexable, 29 indexable in total)

Each now has a write-up (summary, challenge, approach, what we did, result) built only from facts in the original post:
- Sneaker brand, $79,859 in one day at 4.41x ROAS
- $128K in 14 days
- $491,798 in a month at a 34% margin
- $66,168 from $19,118 in one day (campaign structure breakdown)
- From under $20K a month to $64,000 in 24 days
- $61,960 in one day at 3.80x ROAS
- $20K Black Friday day at a 39% margin
- $105,000 in 23 days

Where the post gave no method, those fields are left empty rather than invented.

## 6. Existing pages improved

- **/blog/what-is-roas:** new "Gross ROAS vs net ROAS" section with a worked example (4x gross becomes 3.4x net) and a list of ROAS tracking tools (Ads Manager, Shopify analytics, Conversions API, attribution tools).
- **/blog/dtc-affiliate-program:** new sections on affiliate ROAS (a table of commission rates against the ROAS that commission alone implies, plus a method to judge the program against break-even ROAS) and on six scaling challenges.
- **/cro-agency:** metadata, as listed above.

## 7. Technical improvements

**Core Web Vitals and data use: hero video**
- The 1080p file is re-encoded from 19.4MB to 16.4MB. Quality is effectively unchanged (similarity score 0.996 out of 1).
- A new 720p file (8.5MB) is served to screens up to 900px wide.
- In a browser test, iPhone loaded the 720p file and desktop loaded the 1080p file.
- Mobile visitors now download 56% less video.

**Checks run before deploy:**

| Check | Result |
|---|---|
| Build | 239 pages |
| SEO audit | 0 problems |
| Structured data | 0 errors |
| Lint | Passed |

**Browser check (desktop and iPhone):** 6 changed pages tested, no horizontal overflow, no console errors.

**Sitemaps:** regenerated with real lastmod dates (2026-11-10 for changed pages); all 6 resubmitted to Search Console.

## 8. Indexing actions

- **Google Indexing API:** 60 URLs submitted, all 60 accepted. That covers today's 15 new or changed pages and 45 important pages that were "discovered" or "unknown".
- **IndexNow (Bing, Yandex and others):** 16 URLs submitted.
- **Next step:** a re-inspection is scheduled for 11 Nov 08:10 UTC to measure how many pages became indexed.

## 9. Backlink and authority opportunities (manual, need the owner)

The domain's main ranking limit is having no external links. In order of impact:

1. **Clutch:** free profile at clutch.co/get-listed (about 20 minutes). Verified status needs three client reviews, so ask three past clients to review.
2. **Shopify Partner Directory:** listing is by invitation once you meet the eligibility rules (help.shopify.com/en/partners/directory/join). Register as a Shopify Partner and keep collaborator access on client stores so the work is recorded.
3. **Google Business Profile** for the New York office. This brings local trust signals and a link.
4. **DesignRush, GoodFirms, Sortlist, UpCity:** free agency profiles, using the same description and case links each time.
5. **Podcasts:** DTC POD (has a guest application), eCommerce Marketing Podcast (says it is booking guests; check it is still active), The DTC Podcast and EcommerceFuel. Pitch with one real case, such as $66,168 from $19,118 in a day.
6. **Journalist requests:** Qwoted (free for experts; some opportunities charge a fee) and Featured.com. Answer ecommerce and paid social questions, with links to the guides.
7. **YouTube and Instagram:** link the channel descriptions and pinned posts to the guides and case pages. Those accounts already have the audience.

## 10. Remaining opportunities

- Fix the template card values in allCaseStudies.js (for example 4.2x ROAS shown on cards). They don't appear on case pages, but they shouldn't exist in the data.
- Watch how /cro-agency and /blog/what-is-roas move over the next 7–14 days. If the "gross roas" query enters the top 30, expand the section.
- Next content candidates, if the data supports them: Meta ads cost per purchase by niche (from case data) and a TikTok Shop fees guide once current rates are verified.
- Resubmit any URLs that are still "unknown" after 72 hours. The Indexing API quota is 200 a day and is shared with the owner's other sites.
