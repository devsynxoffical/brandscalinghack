# Site Growth Playbook: brandscalinghacks.com

Applied 9 November 2026. This file is the deliverable for the Site Growth Playbook prompt: inputs, audit, page plan, templates, related-links rules, sitemap / robots / llms.txt, rollout and measurement. Everything marked **done** is live on `main`. Anything marked **[fill in]** is a fact only the business can supply (see section 8).

## Inputs (filled from the site and Search Console)

| Input | Value |
|---|---|
| Business name | Brand Scaling (legal entity: Brand Scaling Hacks LLC) |
| Domain | https://www.brandscalinghacks.com (non-www 301s to www) |
| Business type | Agency (DTC ecommerce performance marketing) |
| What it sells | Paid growth for DTC ecommerce brands: Meta, TikTok and Google ads, direct-response creative, Shopify CRO and retention, run as one system |
| Main buyer | Founders and growth leads of DTC brands doing about $20K to $2M+ a month, spending at least $10K to $20K a month on ads |
| Countries | United States, United Kingdom, Canada, Australia |
| Core services | Meta ads, TikTok ads, TikTok Shop, Google Shopping and Performance Max, Shopify CRO, Klaviyo email and SMS, retention, creative strategy and UGC, influencer and affiliate programs, BFCM ads management, Meta ads audit |
| Industries served | Skincare and beauty, supplements, apparel and fashion, fitness, jewelry, dropshipping, health and wellness, luxury, pet, home goods, food and beverage, baby, outdoor, electronics, subscription boxes |
| Regions | New York (**real office**: 27 W 24th Street, Suite 702, New York, NY 10010). Served remotely: San Francisco Bay Area, Los Angeles, Miami, London, Toronto, Sydney |
| Proof | 150+ published Instagram case posts (21 full write-ups indexed), $50M+ Meta ad spend managed, 12+ years, ROAS figures from 25 published cases |
| Free tools | 9 calculators plus the ROAS calculator |
| Tech stack | Vite + React SPA, prerendered static HTML per route, hosted on Vercel |
| Sitemap | https://www.brandscalinghacks.com/sitemap.xml (index of 5 sitemaps) |
| Search Console | Yes (URL-prefix property for www, service account has owner access) |

## How the architecture maps to this site

| Playbook type | This site | URL pattern used | Count | Note |
|---|---|---|---|---|
| Location pages | /locations/[city] | as playbook | 7 + hub | Only real markets. One real office (New York); the other six say plainly they are served remotely |
| Industry pages | /for/[industry] | `/for/` instead of `/[service]-for-[industry]/` | 15 + hub | Kept: the URLs are live and partly indexed; changing them would need 15 redirects and reset their signals |
| Core service pages | /[service] | as playbook | 15 + /services hub | |
| Free tools | /tools/[tool] and /roas-calculator | as playbook | 10 + hub | |
| Blog posts | /blog/[topic] | as playbook | 22 + hub | |
| Supporting (not in playbook) | /glossary, /compare, /benchmarks | | 15 + 4 + 1, 2 hubs | Answer-engine pages: one definition or comparison each |
| Proof (not in playbook) | /case-studies/[niche], /cases/[slug] | | 5 hubs + 21 indexable | 100 thin case posts are live but noindex |

The industry hub is `/for` rather than `/industries/`; it is already indexed, so it stays.

## 1. Audit (129 sitemap URLs, 9 Nov 2026)

Checked against every STEP 1 rule on the built HTML. Results: titles over 60: 0. Meta descriptions over 155: 10 found, all fixed. More than one H1: 0. Canonical pointing elsewhere: 0 (5 duplicate case posts canonicalise on purpose and are not in the sitemap). Pages needing JavaScript for their text: 0 (every route is prerendered). Duplicate primary keywords: 0. Pages under 300 words: 9 (2 legal, contact, 3 case-study category hubs, 3 short case posts; /about was 125 words and now carries the company facts, service pillars and FAQs). Pages with fewer than 5 contextual inbound links: 31 found, 3 left after the explore-more block. Maximum click depth from home: 2.

Inbound links = links from other pages' body text and explore-more blocks (site navigation excluded). Google status from the URL Inspection API on 8 Nov.

| URL | Page type | Primary keyword | Words | Inbound links | Google status (8 Nov) | Problems left | Action |
|---|---|---|---|---|---|---|---|
| / | hub/home | performance marketing agency for ecommerce | 986 | 67 | indexed | none | keep |
| /meta-ads-agency | core service | meta ads agency | 1222 | 93 | discovered | none | keep |
| /tiktok-ads-agency | core service | tiktok ads agency | 1114 | 40 | indexed | none | keep |
| /services | hub/home | ecommerce marketing services | 1724 | 20 | indexed | none | keep |
| /book | company/legal | book brand growth audit | 475 | 74 | discovered | none | keep |
| /contact | company/legal | contact brand scaling | 188 | 6 | discovered | thin 188w | keep (company page) |
| /growth | core service | ecommerce growth agency | 884 | 54 | indexed | none | keep |
| /shopify-agency | core service | shopify growth agency | 1139 | 40 | indexed | none | keep |
| /viral-creatives | core service | ugc ads / direct-response creatives | 969 | 56 | indexed | none | keep |
| /about | company/legal | gaurav kapoor brand scaling | 647 | 10 | indexed | none | keep |
| /blog | hub/home | ecommerce scaling playbooks | 815 | 24 | indexed | none | keep |
| /privacy-policy | company/legal | - | 48 | 0 | discovered | thin 48w, inbound 0<5 | keep (legal; footer links) |
| /terms | company/legal | - | 48 | 0 | indexed | thin 48w, inbound 0<5 | keep (legal; footer links) |
| /tiktok-shop-agency | core service | tiktok shop agency | 1744 | 28 | indexed | none | keep |
| /google-shopping-ads-agency | core service | google shopping ads agency | 1612 | 39 | discovered | none | keep |
| /cro-agency | core service | ecommerce cro agency | 1617 | 31 | indexed | none | keep |
| /klaviyo-email-sms-agency | core service | klaviyo agency | 1549 | 47 | discovered | none | keep |
| /dtc-affiliate-program-management | core service | dtc affiliate program management | 1548 | 19 | unknown | none | keep |
| /influencer-marketing-agency | core service | ecommerce influencer marketing agency | 1722 | 23 | discovered | none | keep |
| /creative-strategy-agency | core service | ecommerce creative strategy | 1637 | 28 | discovered | none | keep |
| /meta-ads-audit | core service | meta ads audit | 1669 | 27 | discovered | none | keep |
| /retention-marketing-agency | core service | ecommerce retention marketing | 1600 | 26 | indexed | none | keep |
| /bfcm-ads-management | core service | bfcm ads management | 1586 | 24 | discovered | none | keep |
| /for/skincare-beauty | industry | skincare brand marketing agency | 1782 | 25 | discovered | none | keep |
| /for/supplements | industry | supplement brand marketing agency | 1551 | 21 | indexed | none | keep |
| /for/apparel-fashion | industry | fashion brand ads agency | 1475 | 23 | indexed | none | keep |
| /for/fitness | industry | fitness brand marketing | 1475 | 24 | discovered | none | keep |
| /for/jewelry | industry | jewelry brand ads | 1503 | 19 | indexed | none | keep |
| /for/dropshipping | industry | dropshipping ads agency | 1566 | 18 | discovered | none | keep |
| /for/health-wellness | industry | wellness brand marketing | 1486 | 20 | indexed | none | keep |
| /for/luxury | industry | luxury brand performance marketing | 1457 | 16 | discovered | none | keep |
| /for/pet-brands | industry | pet brand marketing agency | 1713 | 19 | discovered | none | keep |
| /for/home-goods | industry | home goods ecommerce marketing | 1534 | 22 | discovered | none | keep |
| /for/food-beverage | industry | food and beverage dtc marketing | 1549 | 16 | discovered | none | keep |
| /for/baby-products | industry | baby product marketing | 1513 | 16 | discovered | none | keep |
| /for/outdoor | industry | outdoor brand marketing | 1526 | 19 | discovered | none | keep |
| /for/electronics | industry | consumer electronics ads | 1514 | 16 | indexed | none | keep |
| /for/subscription-boxes | industry | subscription box marketing | 1543 | 15 | discovered | none | keep |
| /for | industry | ecommerce marketing agency by industry | 914 | 16 | indexed | none | keep |
| /locations/new-york | location | ecommerce marketing agency new york | 1296 | 28 | indexed | none | keep |
| /locations/san-francisco | location | ecommerce marketing agency san francisco | 1287 | 25 | indexed | none | keep |
| /locations/los-angeles | location | ecommerce marketing agency los angeles | 1296 | 25 | indexed | none | keep |
| /locations/miami | location | ecommerce marketing agency miami | 1311 | 25 | indexed | none | keep |
| /locations/london | location | ecommerce marketing agency london | 1420 | 23 | indexed | none | keep |
| /locations/toronto | location | ecommerce marketing agency toronto | 1363 | 23 | indexed | none | keep |
| /locations/sydney | location | ecommerce marketing agency sydney | 1376 | 23 | indexed | none | keep |
| /locations | location | ecommerce marketing agency locations | 562 | 10 | indexed | none | keep |
| /roas-calculator | tool | roas calculator | 901 | 70 | indexed | none | keep |
| /glossary/mer | supporting content | what is mer | 1341 | 44 | discovered | none | keep |
| /glossary/cac | supporting content | what is cac | 1289 | 17 | discovered | none | keep |
| /glossary/ltv | supporting content | what is ltv | 1238 | 20 | discovered | none | keep |
| /glossary/aov | supporting content | what is aov | 1222 | 31 | discovered | none | keep |
| /glossary/cpm | supporting content | what is cpm | 1232 | 10 | discovered | none | keep |
| /glossary/cpc | supporting content | what is cpc | 1264 | 10 | discovered | none | keep |
| /glossary/ctr | supporting content | what is ctr | 1265 | 14 | discovered | none | keep |
| /glossary/conversion-rate | supporting content | ecommerce conversion rate | 1274 | 9 | discovered | none | keep |
| /glossary/advantage-plus | supporting content | advantage plus shopping | 1267 | 16 | discovered | none | keep |
| /glossary/conversions-api | supporting content | conversions api | 1264 | 44 | discovered | none | keep |
| /glossary/attribution-window | supporting content | attribution window | 1299 | 16 | discovered | none | keep |
| /glossary/creative-fatigue | supporting content | creative fatigue | 1230 | 17 | discovered | none | keep |
| /glossary/ugc | supporting content | what is ugc | 1279 | 10 | discovered | none | keep |
| /glossary/contribution-margin | supporting content | contribution margin | 1279 | 49 | indexed | none | keep |
| /glossary/blended-roas | supporting content | blended roas | 1301 | 19 | discovered | none | keep |
| /compare/agency-vs-in-house-media-buyer | supporting content | ecommerce agency vs in house | 1678 | 13 | indexed | none | keep |
| /compare/meta-ads-vs-tiktok-ads | supporting content | meta ads vs tiktok ads for ecommerce | 1565 | 15 | indexed | none | keep |
| /compare/meta-ads-vs-google-ads | supporting content | facebook ads vs google ads for ecommerce | 1575 | 14 | indexed | none | keep |
| /compare/brand-scaling-hacks-alternatives | supporting content | dtc agency alternatives | 1498 | 11 | discovered | none | keep |
| /benchmarks/ecommerce-roas | supporting content | average ecommerce roas | 1582 | 11 | discovered | none | keep |
| /tools/break-even-roas-calculator | tool | break even roas calculator | 1333 | 45 | discovered | none | keep |
| /tools/mer-calculator | tool | mer calculator | 1264 | 27 | discovered | none | keep |
| /tools/cac-calculator | tool | ecommerce cac calculator | 1279 | 24 | discovered | none | keep |
| /tools/ltv-calculator | tool | customer ltv calculator | 1288 | 21 | unknown | none | keep |
| /tools/aov-calculator | tool | average order value calculator | 1267 | 23 | indexed | none | keep |
| /tools/meta-ads-budget-calculator | tool | facebook ads budget calculator | 1267 | 19 | discovered | none | keep |
| /tools/conversion-rate-calculator | tool | conversion rate calculator | 1275 | 19 | indexed | none | keep |
| /tools/discount-break-even-calculator | tool | discount break even calculator | 1420 | 14 | new (9 Nov) | none | keep |
| /tools/profit-margin-calculator | tool | ecommerce profit margin calculator | 1328 | 13 | new (9 Nov) | none | keep |
| /tools | tool | free ecommerce calculators | 672 | 12 | indexed | none | keep |
| /glossary | supporting content | ecommerce marketing glossary | 866 | 16 | discovered | none | keep |
| /benchmarks | supporting content | ecommerce benchmarks | 533 | 8 | indexed | none | keep |
| /blog/bfcm-meta-ads-playbook | blog | bfcm | 2592 | 32 | indexed | none | keep |
| /blog/what-is-roas | blog | what is roas | 1589 | 32 | indexed | none | keep |
| /blog/performance-marketing-agency | blog | performance marketing agency | 1663 | 20 | indexed | none | keep |
| /blog/meta-ads-library | blog | meta ads library | 3065 | 45 | discovered | none | keep |
| /blog/meta-andromeda | blog | meta andromeda | 2121 | 14 | discovered | none | keep |
| /blog/facebook-ads-for-shopify | blog | facebook ads for shopify | 1990 | 24 | discovered | none | keep |
| /blog/dtc-affiliate-program | blog | scale affiliate program dtc | 1475 | 14 | discovered | none | keep |
| /blog/scale-ugc-production | blog | how can dtc brands scale ugc production | 1621 | 24 | discovered | none | keep |
| /blog/how-much-does-a-dtc-agency-cost | blog | ecommerce marketing agency cost | 1832 | 12 | discovered | none | keep |
| /blog/how-to-scale-facebook-ads | blog | how to scale facebook ads | 1802 | 16 | discovered | none | keep |
| /blog/tiktok-shop-strategy | blog | tiktok shop strategy | 1769 | 11 | discovered | none | keep |
| /blog/good-roas-for-ecommerce | blog | what is a good roas | 1794 | 12 | discovered | none | keep |
| /blog/meta-ads-creative-testing | blog | meta ads creative testing | 1752 | 9 | discovered | none | keep |
| /blog/shopify-conversion-rate-optimization | blog | shopify cro tips | 1769 | 10 | discovered | none | keep |
| /blog/ecommerce-email-flows | blog | ecommerce email flows | 1880 | 10 | discovered | none | keep |
| /blog/q4-ecommerce-ads-strategy | blog | q4 ad strategy | 1754 | 9 | discovered | none | keep |
| /blog/how-to-lower-cac | blog | how to lower cac | 1760 | 10 | discovered | none | keep |
| /blog/ugc-ads-for-dtc | blog | ugc ads for dtc | 1851 | 9 | discovered | none | keep |
| /blog/meta-advantage-plus-guide | blog | advantage plus shopping campaigns | 1795 | 11 | discovered | none | keep |
| /blog/retargeting-for-dtc-brands | blog | retargeting for dtc brands | 2097 | 28 | discovered | none | keep |
| /blog/how-to-scale-a-dtc-brand | blog | how to scale a dtc brand | 2060 | 9 | discovered | none | keep |
| /blog/choose-google-ads-agency-dtc | blog | google ads agency for dtc brands | 1987 | 7 | discovered | none | keep |
| /case-studies | proof (case study) | ecommerce case studies | 1379 | 76 | indexed | none | keep |
| /case-studies/skincare-beauty | proof (case study) | - | 302 | 18 | discovered | none | keep |
| /case-studies/fitness-health | proof (case study) | - | 234 | 11 | discovered | thin 234w | improve (add write-up when client data allows) |
| /case-studies/apparel-fashion | proof (case study) | - | 269 | 15 | indexed | thin 269w | improve (add write-up when client data allows) |
| /case-studies/supplements-nutrition | proof (case study) | - | 233 | 14 | discovered | thin 233w | improve (add write-up when client data allows) |
| /case-studies/dropshipping-dtc | proof (case study) | - | 1024 | 23 | discovered | none | keep |
| /cases/finally-scale-client-almost-1m-sales-6-months | proof (case study) | - | 330 | 6 | discovered | none | keep |
| /cases/449221-last-49-days-newer-client-dropshipping-brands-starting | proof (case study) | - | 409 | 8 | unknown | none | keep |
| /cases/148k-day-best-day-whole-career-ending-up-phenomenal | proof (case study) | - | 575 | 9 | discovered | none | keep |
| /cases/new-dtc-client-results-last-16-days-132832-ad-spend-374103 | proof (case study) | - | 375 | 11 | discovered | none | keep |
| /cases/finally-built-million-dollar-brand-2022-ending-2-3 | proof (case study) | - | 444 | 21 | discovered | none | keep |
| /cases/185936-21-days-56-profit-margin-scaled-dropshipping-store-beyond | proof (case study) | - | 455 | 9 | unknown | none | keep |
| /cases/meet-com-clients-sasha-whom-have-been-helping-four | proof (case study) | - | 360 | 4 | discovered | inbound 4<5 | keep |
| /cases/26271-spent-115416-generated-4-39-roas-skincare-brand-crushed-it | proof (case study) | - | 644 | 12 | discovered | none | keep |
| /cases/finally-client-touched-1-6m-year-mark-insane-roas | proof (case study) | - | 552 | 15 | unknown | none | keep |
| /cases/finally-have-closed-117k-month-client | proof (case study) | - | 256 | 7 | discovered | thin 256w | improve (add write-up when client data allows) |
| /cases/drove-54k-7-days-using-manual-bidding-campaigns-jewelry | proof (case study) | - | 577 | 8 | discovered | none | keep |
| /cases/it-safe-say-figured-out-make-supplement-brand-print-money | proof (case study) | - | 510 | 11 | discovered | none | keep |
| /cases/day-inside-dtc-fitness-brands-80k-clocked-24-hours-862-orders | proof (case study) | - | 270 | 10 | discovered | thin 270w | improve (add write-up when client data allows) |
| /cases/rule-thumb-scaling-facebook-ads-hit-3-77-roas-body-contouring | proof (case study) | - | 515 | 5 | discovered | none | keep |
| /cases/16630-spent-59241-generated-3-56-roas-even-chaos-bfcm-women | proof (case study) | - | 573 | 9 | discovered | none | keep |
| /cases/it-12-57-am-here-have-successfully-scaled-brand-early-bfcm | proof (case study) | - | 371 | 8 | discovered | none | keep |
| /cases/q4-shaping-up-be-incredible-while-many-slow-down-weekend-ve | proof (case study) | - | 439 | 12 | discovered | none | keep |
| /cases/these-5days-has-been-fire-spent-26594-generated-99576-profit | proof (case study) | - | 520 | 6 | unknown | none | keep |
| /cases/record-breaking-month-generating-137620-25-revenue-roas-3 | proof (case study) | - | 249 | 10 | discovered | thin 249w | improve (add write-up when client data allows) |
| /cases/118k-first-month-scaling-uk-skincare-brand | proof (case study) | - | 337 | 9 | discovered | none | keep |
| /cases/q4-here-it-biggest-money-making-season-year | proof (case study) | - | 435 | 13 | discovered | none | keep |

## 2. Page plan

### 2a. Existing pages (129 URLs in the sitemap)

Every existing page already has a unique primary keyword (checked by script: no two pages share one), a title of 60 characters or less with the keyword first and the brand last, a meta description of 155 characters or less, one H1, a self-referencing canonical, a quick answer, FAQs and a hub. The full list with keywords is the audit table above.

### 2b. New pages, in build order

The expansion rule (STEP 7) decides what gets built: last week tools grew fastest (impressions up 5x, from 9 to 45) and blog posts had the most impressions per page (31). So the next batches are tools and supporting blog posts. Location and industry pages are **not** expanded until their impressions per page beat the site average: today they are 4 and 2.2, the lowest of all types.

| Build week | URL | Type | H1 | Title tag | Primary keyword | Secondary keywords | Hub | Status |
|---|---|---|---|---|---|---|---|---|
| 1 (9 Nov) | /tools/discount-break-even-calculator | Tool | Discount Break Even Calculator | Discount Break-Even Calculator for Sales and BFCM \| Brand Scaling | discount break even calculator | bfcm discount calculator, how much discount can I afford, break even roas after discount | /tools | **done** |
| 1 (9 Nov) | /tools/profit-margin-calculator | Tool | Ecommerce Profit Margin Calculator | Ecommerce Profit Margin Calculator \| Brand Scaling | ecommerce profit margin calculator | net profit per order, shopify profit margin, contribution margin calculator | /tools | **done** |
| 2 | /blog/black-friday-discount-strategy | Blog | How Deep Should Your Black Friday Discount Be? | Black Friday Discount Strategy for DTC Brands \| Brand Scaling | black friday discount strategy | bfcm discount, how much discount for black friday, bundle vs percentage off | /blog | planned; supports the discount tool, /bfcm-ads-management |
| 2 | /blog/ecommerce-profit-margin | Blog | Ecommerce Profit Margin: What to Track per Order | Ecommerce Profit Margin per Order, Explained \| Brand Scaling | ecommerce profit margin | contribution margin per order, shopify profit after ads | /blog | planned; supports the profit margin tool, /cro-agency |
| 3 | /tools/creative-testing-budget-calculator | Tool | Creative Testing Budget Calculator | Creative Testing Budget Calculator for Meta Ads \| Brand Scaling | creative testing budget calculator | how much to spend testing ads, ad test budget | /tools | planned **[check demand]**; supports /creative-strategy-agency |
| 3 | /blog/meta-ads-learning-phase | Blog | How to Get Meta Ads Out of the Learning Phase | Meta Ads Learning Phase: How to Exit It \| Brand Scaling | meta ads learning phase | learning limited, 50 conversions per week | /blog | planned; supports /meta-ads-agency, budget calculator |
| 4 | /blog/tiktok-shop-vs-shopify | Blog | TikTok Shop vs Shopify: Where Should DTC Brands Sell? | TikTok Shop vs Shopify for DTC Brands \| Brand Scaling | tiktok shop vs shopify | tiktok shop fees, sell on tiktok shop | /blog | planned; supports /tiktok-shop-agency |
| 4 | /blog/klaviyo-flows-for-shopify | Blog | The Klaviyo Flows Every Shopify Store Needs | Klaviyo Flows for Shopify Stores \| Brand Scaling | klaviyo flows for shopify | welcome flow, abandoned cart flow | /blog | planned; supports /klaviyo-email-sms-agency (check overlap with /blog/ecommerce-email-flows first) |

New location or industry pages are added only when (a) the business genuinely serves that market or category and (b) STEP 7 shows the type winning. Candidates if that happens: industry pages for categories with real client results first; location pages only for markets the business actively sells into.

## 3. Page templates (implemented in code)

All non-blog types render through one component, `src/pages/ContentPage.jsx`, fed by data files in `src/data/pages/`. Each data file is a list of page objects with: `path, kind, primaryKeyword, titleTag, metaDescription, h1, eyebrow, quickAnswer {question, answer}, intro, sections[{h2, content, list, table, subsections}], proof[], faqs[], related[], cta`, plus `location`, `term` or `tool` where relevant. The prerender script turns the same object into static HTML, so every page shows its full text without JavaScript.

| Type | Section order (as built) | Words | Schema | Complete example page |
|---|---|---|---|---|
| Location | H1 "Ecommerce Marketing Agency [City]", quick answer, intro naming the brand and stating office or remote, market-specific sections (time zone, currency, tax or VAT, privacy and tracking rules, shipping, sales calendar), how we work, pricing models, proof (labelled agency-wide unless local), 5 FAQs incl. "Do you have an office in [city]?", CTA, explore-more block | 600 to 1,000 | Service (areaServed City), FAQPage, BreadcrumbList. No LocalBusiness except the real New York office (Organization schema) | /locations/london |
| Industry | H1 "[Industry] marketing agency", problem-led intro, angles and creative, offers and funnel, channel mix, how we work with [industry], mistakes, pricing models, proof (labelled when from another niche), 5 to 6 FAQs, CTA, explore-more | 800 to 1,200 | Service (audience = industry), FAQPage, BreadcrumbList | /for/skincare-beauty |
| Core service | H1 with keyword, quick answer, what's included, how it works (4 phases), who it's for, pricing models (no published prices: **[fill in]**), proof, 5 to 6 FAQs, CTA, explore-more | 900 to 1,300 | Service, FAQPage, BreadcrumbList. No AggregateRating (no real reviews yet) | /cro-agency |
| Tool | H1, quick answer, working calculator first (no signup), how to use, formula with worked example, what the result means, what to do next (links to service), common mistakes, 5 to 6 FAQs, CTA, explore-more | 650 to 1,000 below the tool | WebApplication (offers price 0), FAQPage, BreadcrumbList | /tools/discount-break-even-calculator |
| Blog | H1 question or topic, 40 to 60 word direct answer first, definition box, table of contents, 6 to 9 H2s, 5 to 6 FAQs, author box (Gaurav Kapoor), published and updated dates, 4 related links, explore-more | 1,200 to 2,000 | BlogPosting, FAQPage, BreadcrumbList, author Person | /blog/how-to-scale-a-dtc-brand |

Uniqueness: the 81 content pages and posts were compared pairwise on 5-word phrases; the most similar pair shares 3.7%, far above the 40% unique-content floor.

## 4. Related-links block (done)

`src/data/relatedBlock.js` builds an "Explore more" block above the footer on every service, industry, location, tool, glossary, comparison and benchmark page and every blog post (React: `RelatedLinksBlock.jsx`; static HTML: `scripts/prerender.cjs`). Sibling picks rotate by position so links spread evenly. Anchors are descriptive ("Ecommerce marketing in London and the UK", "Marketing for supplements and nutrition").

| On this page type | Shows |
|---|---|
| Location | 6 other markets, 4 industries, 3 services, 2 guides |
| Industry | 6 related industries, 4 markets, 3 services, 2 guides |
| Core service | 6 related services, 4 industries, 4 markets, 2 free tools, 2 comparisons or research pages |
| Tool | All other calculators, 2 services, 2 guides |
| Blog post | 3 more playbooks, 3 services, 2 industries, 1 comparison or research page (plus the post's own 4 supporting links) |
| Glossary term | 6 related terms, 2 tools, 2 services |
| Comparison / benchmark | 4 services, 2 tools, 2 guides |

Result: pages with fewer than 5 contextual inbound links went from 31 to 3 (privacy, terms, one case page; the legal pages are linked from every footer). Every page is within 2 clicks of the home page.

## 5. Sitemap, robots.txt, llms.txt (done)

**Sitemap** (`scripts/generate-sitemap.cjs`, runs on every build):

| File | Holds | URLs |
|---|---|---|
| /sitemap.xml | Sitemap index pointing to the five files below | 5 |
| /sitemap-core.xml | Home, services, company, hub pages | 23 |
| /sitemap-industries.xml | /for and every /for/ page | 16 |
| /sitemap-locations.xml | /locations and every location page | 8 |
| /sitemap-content.xml | Blog, tools, glossary, comparisons, benchmarks | 55 |
| /sitemap-cases.xml | Case study hubs and the 21 indexable case pages | 27 |

Grouping is automatic by URL prefix. Each URL's lastmod is the date its content last changed (set per page in data, never the build date); each child sitemap's lastmod is its newest page. Only indexable, self-canonical, 200 pages are listed: the 100 noindex case posts and 5 duplicates are excluded.

**robots.txt** (`public/robots.txt`): allows all crawlers including Googlebot, Bingbot, GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended; blocks only /404 and tracking-parameter URLs; does not block assets or .txt files; points to /sitemap.xml.

**llms.txt** (`public/llms.txt`): plain text, 1,337 words, business description, who it serves, every service, location, industry, tool, glossary term and guide with URLs, contact and booking. A full-text version (`/llms-full.txt`) is generated on every build.

## 6. Rollout

| Week | Build | Status |
|---|---|---|
| 1 (9 to 13 Nov) | Audit fixes (meta descriptions, About page facts and FAQs, near-win titles), explore-more block on all pages, sitemap split, 2 new tools, measurement script | **done 9 Nov** |
| 2 (16 to 20 Nov) | 2 blog posts supporting the new tools (section 2b); request indexing for new and still-unindexed hub and service pages; first weekly report | planned |
| 3 (23 to 27 Nov) | 1 tool and 1 blog post (section 2b); act on positions 8 to 20 queries | planned |
| 4 (30 Nov to 4 Dec) | 2 blog posts; expansion decision from 3 weeks of per-type data | planned |
| 5 onward | 2 to 3 tools a month, 2 posts a week, plus expansion of whichever type wins | ongoing |

Daily routine on publishing days: publish; view source to confirm the text is in the HTML; submit new URLs to the Google Indexing API (daily quota, see section 8) and IndexNow; confirm the new page appears in the hub and explore-more blocks (automatic); log the URL.

## 7. Weekly measurement

Run every Monday:

```
GSC_KEY_FILE=/path/to/service-account.json python3 scripts/gsc-weekly-report.py 7
```

It prints impressions, clicks, average position and impressions per page for each page type against the previous week, names the winning type for the next batch, and lists queries in positions 8 to 20.

Checklist:
1. Record per-type impressions, clicks and position from the report.
2. Search Console, Indexing > Sitemaps: indexed vs submitted for each of the five sitemaps. If more than 20% of a group is "Crawled - currently not indexed", stop adding that type and add unique content first.
3. Expansion rule: the type with the highest impressions per page gets the next batch.
4. Every query in positions 8 to 20 becomes an H2 or FAQ on the page that ranks (done 9 Nov for "online conversion rates").
5. Re-run the URL inspection script to track indexed count (39 indexed on 7 Nov, 40 on 8 Nov).

First report (2 to 8 Nov vs 26 Oct to 1 Nov): core 119 impressions (was 53), blog 94 (74), tools 45 (9), case studies 30 (17), industry 11 (0, average position 19.1), benchmark 9, location 4, comparison 3.

## 8. Facts the business still has to provide ([fill in])

1. Real client reviews or testimonials (needed before any review schema; none exist today).
2. Published price ranges or packages, if you want pricing sections to show numbers (pages currently describe pricing models only).
3. Client results in the industries with no published case study: pet, home goods, food and beverage, baby, outdoor, electronics, subscription boxes, luxury, health and wellness.
4. Client results from markets other than the UK (US cities, Canada, Australia), to replace agency-wide proof on location pages.
5. Account data you are willing to publish for CPM, conversion rate and CAC benchmark pages.
6. Google Business Profile for the New York office (URL once live, for the Organization schema `sameAs`).
7. Clutch, Shopify Partners or other directory profile URLs.
8. A business phone number for schema and the contact page, if you want one other than the WhatsApp number.
9. Team members and short bios, if more people than Gaurav should appear as authors.
10. The YouTube upload date for the $376K video on /blog/meta-ads-library.
11. A separate Google Cloud project and service account key for this site: the Indexing API quota (200 a day) is shared with your other sites and was exhausted on 6 and 7 Nov before this site's submissions ran. Rotate the key that was shared in chat.
12. Confirmation that you deliver Google Shopping and influencer marketing (both service pages are live).
