# Brand Scaling — SEO Audit, Meta Tag Plan and Landing Page Roadmap
**Date:** October 28, 2026
**Website:** https://www.brandscalinghacks.com
**Branch:** `claude/brave-faraday-9xzcl3`

This document has three parts: (1) what was audited and what was fixed today, (2) the per-page meta tag inventory with exact copy to use, and (3) the week-by-week plan for the remaining SEO work.

---

## 1. Audit findings and what was shipped today

### 1.1 What was already good
- Every core route is prerendered with its own title, description, canonical, Open Graph and Twitter tags.
- Organization, Person, WebSite, Service, FAQPage, BreadcrumbList and Article schema are in place on the main pages.
- `robots.txt`, `sitemap.xml`, `llms.txt` and IndexNow key exist. Canonical domain is consistently `www`.
- Every `<img>` in `src/` has an `alt` attribute (5 empty alts are decorative duplicates and correctly marked `aria-hidden`).

### 1.2 Problems found and fixed in this commit

| # | Problem | Impact | Fix |
|---|---------|--------|-----|
| 1 | `/blog/<unknown-slug>` rendered the BFCM post (fallback to `blogPosts[0]`) under a different canonical. `llms.txt` and the prerendered `/blog` page linked to 8 posts that do not exist yet (`/blog/meta-ads-library`, `/blog/meta-andromeda`, `/blog/meta-ads`, …). | Duplicate content on 8 URLs, confused crawlers and AI engines. | Unknown slugs now render the 404 page. Dead links removed from `llms.txt` and the prerendered blog index. |
| 2 | 404 page returned `index, follow` and a canonical, and Vercel's catch-all rewrite returned HTTP 200 for every unknown URL. | Soft-404s, wasted crawl budget. | 404 page now carries `noindex, follow` (client and prerendered). Catch-all rewrite removed; Vercel serves `404.html` with a real 404 status. Legacy aliases (`/case/:id`, `/cases`, `/viral-products`, `/facebook-ads-agency`) are 301 redirects. |
| 3 | 123 case study URLs in the sitemap were **not** prerendered, so each served the home shell (home title, home canonical). | 123 pages looked like duplicates of the home page. | Prerender now generates one HTML file per case study with its own title, description, canonical, `og:image` and crawlable text (metrics, growth points, caption). |
| 4 | Case titles and descriptions were raw Instagram captions with emoji and "mathematical bold" Unicode (`𝗙𝗶𝗻𝗮𝗹𝗹𝘆`). | Broken snippets, no keyword matching. | New `src/data/seoText.js` normalises text (NFKC fold, emoji stripped, title de-duplicated, 155-char limit). Used by both the prerender and the client-side meta updater. |
| 5 | `sitemap.xml` was hand-edited (126 cases in data, 123 in sitemap, static lastmod bumps). | Drift between what is served and what is submitted. | New `scripts/generate-sitemap.cjs` builds the sitemap from the real route data on every build (`npm run build`). |
| 6 | `/viral-creatives` title was 69 characters. | Truncated in SERPs. | Shortened to "Direct-Response Video Creatives & UGC Ads \| Brand Scaling" (57). |
| 7 | No dedicated commercial page for the agency's core offer (Meta ads). The Meta keyword cluster in the plan only pointed at `/growth`. | The strongest proof ($50M+ Meta spend) had no money page. | New landing page `/meta-ads-agency` (see section 3). |

### 1.3 Problems found, not fixed yet (in the roadmap below)
- Main JS bundle is 993 KB (267 KB gzip) because `three`, `gsap` and `lottie-web` ship on every page. Hurts LCP/INP on mobile.
- Case study data has dirty fields (e.g. `roas: "56% Profit Marginx ROAS"`), shortcode URLs (`/cases/Cft79TLpxyk`) instead of descriptive slugs, and no `VideoObject`/`Article` schema on case pages.
- Open Graph image is the same hero poster for every non-case page; no 1200×630 per-page social images.
- Home page and About page have the H1 inside sub-components; fine for crawlers, but About has two competing H1 candidates in `GauravAboutHero` and should be checked.
- OpenSEO connector has 4 credits left and no project for brandscalinghacks.com, so Search Console and live keyword data could not be pulled in this session. Keyword numbers below come from the 22 Oct 2026 plan (US, Google) and the 27 Oct Search Console export.

---

## 2. Meta tag inventory (what every page should carry)

Rules used: title 50–60 characters with the primary keyword first and `| Brand Scaling` last; description 140–155 characters, one benefit, one proof number, one call to action; one H1 per page containing the primary keyword; canonical always `https://www.brandscalinghacks.com<path>` without trailing slash.

| URL | Primary keyword | Title (chars) | Description (chars) | Status |
|-----|-----------------|---------------|---------------------|--------|
| `/` | performance marketing agency (2,900/mo) | Performance Marketing Agency for Ecommerce \| Brand Scaling (58) | …$50M+ ad spend managed. Book a growth audit. (146) | Live |
| `/meta-ads-agency` | meta ads agency, facebook ads agency for ecommerce | Meta Ads Agency for Ecommerce Brands \| Brand Scaling (52) | Meta ads agency for DTC ecommerce: $50M+ Facebook and Instagram ad spend managed, creative testing, Advantage+ scaling and CAPI tracking. Book an audit. (152) | **New today** |
| `/growth` | ecommerce growth agency (110/mo, CPC $60) | Ecommerce Growth Agency: Meta, TikTok, CRO \| Brand Scaling (58) | (147) | Live |
| `/shopify-agency` | shopify agency (1,600/mo), shopify plus agency | Shopify Agency for Scaling DTC Brands \| Brand Scaling (53) | (143) | Live |
| `/viral-creatives` | direct response video ads, ugc ads agency | Direct-Response Video Creatives & UGC Ads \| Brand Scaling (57) | (154) | Shortened today |
| `/case-studies` | ecommerce case studies meta ads | Ecommerce Case Studies: Meta Ads Results \| Brand Scaling (56) | (144) | Live |
| `/cases/<id>` ×123 | brand/result long-tail | `<cleaned headline, 52 chars>… \| Brand Scaling` | Cleaned caption, 155 chars | **Generated today** |
| `/roas-calculator` | roas calculator | Free ROAS Calculator for Ecommerce \| Brand Scaling (50) | (145) | Live |
| `/about` | gaurav kapoor, brand scaling | About Brand Scaling and Founder Gaurav Kapoor \| Brand Scaling (61) | (119) | Trim title to ≤60, extend description to ~150 |
| `/blog` | ecommerce scaling playbooks | Ecommerce Scaling Playbooks & Growth Research \| Brand Scaling (61) | (140) | Trim title to ≤60 |
| `/blog/performance-marketing-agency` | what is a performance marketing agency | Performance Marketing Agency for Ecommerce \| Brand Scaling | | **Cannibalises the home page title.** Rename to "What Is a Performance Marketing Agency? DTC Guide \| Brand Scaling" |
| `/blog/what-is-roas` | what is roas (3,600/mo) | What Is ROAS? Formula, Benchmarks & Calculator \| Brand Scaling (62) | | Trim to ≤60 |
| `/blog/bfcm-meta-ads-playbook` | bfcm meta ads | BFCM 2026: Meta Ads Playbook for Shopify \| Brand Scaling (56) | | Live |
| `/404` | — | Page Not Found (404) \| Brand Scaling | | `noindex` today |

Open Graph / Twitter: every page inherits `og:type=website`, `og:site_name`, `og:locale`, `twitter:card=summary_large_image`, and now `twitter:url` per page. Case pages use their own proof image as `og:image`. Remaining task: 1200×630 branded social images per service page (section 3, week 2).

---

## 3. The new landing page: `/meta-ads-agency`

**Why this page:** Meta media buying is the offer behind the site's strongest proof ($50M+ spend, 11.6x and 11.98x ROAS accounts), yet no page targeted the buyer terms "meta ads agency", "facebook ads agency for ecommerce" or "meta ads agency for shopify". The plan's Meta cluster (meta ads library, meta ads, meta andromeda) had only `/growth` as its money page.

**Built with the same UI/UX as `/shopify-agency`:** dark `#070709` canvas, orange `#ff5722` accent, pill badge, 56px H1, definition call-out box, 3 pillar cards, proof strip, results grid, 4-phase process, comparison table, fit/no-fit cards, related resources, FAQ accordion, final CTA. All numbers on the page already appear elsewhere on the site.

**On-page SEO on the page:** one H1, 9 H2s containing the keyword variants, Service + OfferCatalog + BreadcrumbList + FAQPage schema (7 questions, including the Search Console striking-distance query "scaling dtc brands with retargeting"), internal links to `/growth`, `/viral-creatives`, `/shopify-agency`, `/roas-calculator`, `/case-studies` and two blog posts. Linked from the header ("Meta Ads"), mobile drawer and footer. Added to the sitemap (priority 0.9) and `llms.txt`. `/facebook-ads-agency` 301s to it.

**After deploy:** Search Console > URL Inspection > Request indexing; submit via IndexNow; add the URL to the rank tracker for "meta ads agency", "facebook ads agency ecommerce", "meta ads agency shopify".

---

## 4. Roadmap (next 6 weeks)

### Week 1 (Oct 29 – Nov 4): deploy and verify
1. Merge this branch and deploy. Confirm `curl -I https://www.brandscalinghacks.com/random-xyz` returns **404**, `/cases/Cft79TLpxyk` returns its own title in view-source, `/facebook-ads-agency` 301s.
2. Search Console: resubmit sitemap (now 137 URLs), request indexing for `/meta-ads-agency` and 5 top case pages.
3. Fix the title cannibalisation: rename `/blog/performance-marketing-agency` title (table above) in `src/data/blogPosts.js` and `scripts/prerender.cjs`.
4. Trim `/about`, `/blog`, `/blog/what-is-roas` titles to ≤60 characters.
5. Create an OpenSEO project for `brandscalinghacks.com` (US) and connect Search Console so weekly striking-distance mining can run from the connector.

### Week 2 (Nov 5 – Nov 11): social images and schema depth
1. Design 1200×630 OG images for `/`, `/meta-ads-agency`, `/growth`, `/shopify-agency`, `/viral-creatives`, `/roas-calculator`, `/blog`. Add an `ogImage` field per route in `scripts/prerender.cjs` (the hook already exists) and in the App.jsx meta switch.
2. Case pages: add `Article` + `VideoObject` schema (name, description, thumbnailUrl, uploadDate, contentUrl) in `CaseStudyDetailPage.jsx`. Video rich results are the fastest win for 123 URLs.
3. Clean case data: fix malformed `roas`/`revenue` strings, add a 1-sentence `seoSummary` field for the 20 highest-revenue cases.
4. Add `Speakable` schema and a `dateModified` on the home FAQ block.

### Week 3 (Nov 12 – Nov 18): performance (Core Web Vitals)
1. Lazy-load `three`, `gsap` and `lottie-web` with dynamic `import()` only on the sections that use them (hero WebGL, glass marquee). Target: main chunk under 300 KB.
2. Add `fetchpriority="high"` and explicit `width/height` to the hero poster; `loading="lazy"` on below-fold images and videos (`preload="none"`).
3. Self-host the 7 Google font families or cut to 3 (`Plus Jakarta Sans`, `Anton`, `Cormorant Garamond`), `font-display: swap` is already set.
4. Measure with PageSpeed Insights before and after; log LCP, INP, CLS per template in the tracker.

### Week 4 (Nov 19 – Nov 25): content from the plan calendar
1. Publish the two highest-volume posts from the PDF plan as real `blogPosts.js` entries: **Meta Ads Library** (90,500/mo) and **Meta Andromeda** (1,300/mo). Only then re-add them to `llms.txt` and the footer.
2. Each post links to `/meta-ads-agency` as its service page (the plan said `/growth`; the new page is the better match).
3. Add the BFCM countdown banner on `/meta-ads-agency` and `/` for the 26–30 Nov peak.

### Week 5 – 6 (Nov 26 – Dec 9): case library and descriptive slugs
1. Generate descriptive slugs for the top 30 cases (`/cases/skincare-brand-146k-27-days-3-6x-roas`) with 301s from the shortcode URL. Keep the shortcode as `id` so nothing else breaks.
2. Rewrite those 30 case pages to 300+ words (what was sold, spend, structure, creative angle, result). `noindex, follow` the thin remainder until they are rewritten.
3. Second landing page using the same template: `/tiktok-ads-agency` (Search Console already shows "tiktok shop scaling services" at position 69). Third: `/ecommerce-email-marketing-agency` (320/mo, CPC $50) if Klaviyo work is a real offer.

### Every Monday (ongoing)
- Search Console > Performance, last 28 days, position 8–20, ≥20 impressions → add as H2 or FAQ on the matching page, log the date, re-check after 28 days.
- Check Indexing > Pages for new "Crawled, currently not indexed" case URLs; rewrite or noindex.
- Rank check: performance marketing agency, meta ads agency, shopify agency, ecommerce growth agency, what is roas, bfcm meta ads.

---

## 4b. Day 2 (Oct 29, 2026): SEO, AEO and GEO pass — what shipped

**Structured data now server-side (AEO/GEO).** Every page's JSON-LD was previously injected only by React, so crawlers that do not run JavaScript (GPTBot, ClaudeBot, PerplexityBot, Bytespider, CCBot) saw none of it. A new single source of truth, `src/data/pageSchemas.js`, feeds both the React pages and the prerender, which now writes a `#route-schema` block into the `<head>` of all 141 prerendered pages (validated: 135 graphs, 0 JSON errors). Added on top of the old graphs:
- `WebPage` / `CollectionPage` / `AboutPage` entity on every core page with `primaryImageOfPage`, `inLanguage` and `speakable` selectors (home, Meta Ads, About, blog posts).
- `ItemList` of the first 20 case studies on `/case-studies` and of all posts on `/blog`.
- Case studies: `Article` + `BreadcrumbList` + `VideoObject` (name, thumbnail, contentUrl, uploadDate) on all 126 pages, client and prerendered.
- Blog posts: `image`, `keywords`, `inLanguage`, `speakable`, `mainEntityOfPage` and a stable author `@id` linking to the founder entity.
- `WebApplication` on the ROAS calculator now carries `url`, `publisher` and `browserRequirements`.

**AI-engine files.**
- `robots.txt` explicitly allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, Claude-SearchBot, PerplexityBot, Google-Extended, Applebot, Amazonbot, DuckAssistBot, meta-externalagent, Bytespider and CCBot, and blocks UTM/fbclid parameter URLs and `/404`.
- New `/llms-full.txt` (about 90 KB) generated at build: every core page plus the first 40 case studies as Markdown with URL and summary, for assistants that fetch one file instead of crawling.
- New RSS feed `/feed.xml` generated from the blog data, linked from `<head>` with `rel="alternate"`.

**Social previews.** Ten branded 1200×630 Open Graph images generated with `scripts/generate-og-images.cjs` into `public/og/`. Every core page now has its own `og:image`, blog posts share the blog card, case studies use their proof image, and `twitter:image:alt` was added.

**Titles and descriptions.**
- Fixed the title cannibalisation: the blog post is now "What Is a Performance Marketing Agency? \| Brand Scaling" (55), the home page keeps "Performance Marketing Agency for Ecommerce \| Brand Scaling".
- `/about` → "About Brand Scaling & Founder Gaurav Kapoor \| Brand Scaling" (59) with a 150-character description; `/blog` → 54 characters; `/blog/what-is-roas` → 60 characters.
- Case study titles shortened to 44 characters plus brand (61 total) so they stop truncating in SERPs.

**Performance (Core Web Vitals).**
- `three`, `gsap` and `lottie-web` are now in a lazy chunk loaded only on `/about` (verified in the browser: the 133 KB `AboutJourney` chunk is not requested on any other page).
- The hero serif headline referenced a font that was never loaded (Playfair Display); it now uses the already-loaded Cormorant Garamond, removing a fallback flash.
- Remaining weight is data: `allCaseStudies.js` (357 KB source) and Instagram metadata ship in the main bundle. Next step: move case captions to a lazy JSON fetch on the detail page (week 3).

**Security and delivery headers** in `vercel.json`: HSTS, nosniff, frame-options, referrer-policy, permissions-policy, correct content types for `llms-full.txt` and `feed.xml`, 7-day cache on OG images.

**Verification done:** build passes with 0 lint errors; browser checks on `/`, `/about`, `/meta-ads-agency`, a case page, a blog post and the calculator show one H1 each, the right title and OG image, and the client-side schema replacing the prerendered block after hydration with no console errors.

---

## 5. Files changed in this commit

| File | Change |
|------|--------|
| `src/pages/MetaAdsAgencyPage.jsx` | New landing page with Service/OfferCatalog/Breadcrumb/FAQ schema |
| `src/App.jsx` | Route + meta for `/meta-ads-agency`; unknown blog slugs → 404; `robots` meta per page (noindex on 404); cleaned case titles/descriptions |
| `src/components/Navbar.jsx`, `src/components/Footer.jsx` | "Meta Ads" link in header, mobile drawer and footer |
| `src/data/seoText.js` | New text normaliser for Instagram-sourced titles and descriptions |
| `scripts/prerender.cjs` | New route; prerenders all 126 case studies; per-route `og:image`; noindex 404; `$`-safe replacements; dead blog links removed |
| `scripts/generate-sitemap.cjs` | New: builds `public/sitemap.xml` from route data (137 URLs); wired into `npm run build` |
| `vercel.json` | Real 404s (catch-all rewrite removed), 301 redirects for legacy aliases, content-type headers for sitemap and llms.txt, immutable cache for hashed assets |
| `public/llms.txt` | Added `/meta-ads-agency`; removed 8 links to unpublished posts |
| `src/pages/ViralCreativesPage.jsx` | Shortened schema name to match the new title |
