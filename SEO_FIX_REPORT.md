# SEO / AEO / GEO fix report: www.brandscalinghacks.com

Run: 13 November 2026, following CLAUDE_CODE_SEO_AEO_GEO_PROMPT.md. Stack: Vite + React SPA with per-route prerendered HTML, hosted on Vercel.
Audit tool: `scripts/seo-audit-full.mjs` (outputs in `audit/`). Baseline = commit `519f2fb` (before this run), after = commit `b224482`.

## CONFIG used (from the codebase; confirm the two open items)

| Field | Value |
|---|---|
| Domain | https://www.brandscalinghacks.com (www is canonical) |
| Brand / legal entity | Brand Scaling / Brand Scaling Hacks LLC |
| Address | 27 W 24th Street, Suite 702, New York, NY 10010, United States |
| Founder | Gaurav Kapoor (LinkedIn, YouTube, Instagram, X, Facebook in `src/data/brandFacts.js`) |
| Primary conversion | /book (Google Calendar appointment booking) and WhatsApp |
| Sister sites | SevenFigureStudio, FunnelsThatPrint |
| Founding year | **Not confirmed.** The site says "since 2014" for the founder's career, not the company. Left out of schema. |
| Price range | **Not confirmed.** The site states a minimum of $10,000 to $20,000 a month in ad spend; no fee range. Left out of schema. |

## 1. Before / after

| Check | Before | After |
|---|---|---|
| Search and AI bots (13 user agents x top 20 URLs): HTTP 200 and same main content as Chrome | 0 problems | 0 problems |
| Titles outside 30 to 60 chars / descriptions outside 70 to 160 | 0 / 0 | 0 / 0 |
| Duplicate titles | 0 | 0 |
| Pages without exactly one H1 | 0 | 0 |
| Pages with JSON-LD errors | 0 | 0 |
| Images without alt | 0 | 0 |
| Pages missing OG or Twitter card | 0 | 0 |
| Brand fact mismatches (legal name, street, postcode, email) | 3 | 0 |
| Indexable URLs = sitemap URLs | 153 = 153 | 153 = 153 |
| Sections with average near-duplicate score above 0.35 | 0 | 0 |
| Page pairs above 0.35 | 1 | 1 (kept, see section 5) |
| Home page main content seen by non-JS crawlers | 1,003 words | 1,443 words |
| llms-full.txt | 1.45 MB, every page | 497 KB, 51 key pages |
| Sister-site links (followed) | 9 pages | 1 page, rel="nofollow" |
| Redirect status | 308 (Vercel "permanent") | 301, single hop |
| Lighthouse mobile (local build): home | 40 to 52 | 42 to 44 (see blocker) |
| Lighthouse mobile: /meta-ads-agency | not run | 81 |
| Lighthouse mobile: blog post (/blog/what-is-roas) | not run | 79 |
| Lighthouse mobile: case study | not run | 76 |
| TTFB (local) | about 20 ms | about 20 ms |

Live check: OpenSEO crawled 50 live pages on 12 Nov with 0 issues and 30 to 250 ms response times. The live domain is not reachable from this build environment, so bot checks ran against the identical prerendered build.

## 2. Changes by phase (commits)

**Phase 0** (`235eb51`): `scripts/seo-audit-full.mjs` records status, titles, descriptions, canonicals, robots, H1/H2, word counts, JSON-LD types and errors, alt text, internal links in and out, OG/Twitter, near-duplicate scores per section, orphans, thin pages, brand-fact consistency and per-bot responses. Outputs `audit/baseline.*` and `audit/after.*`.

**Phases 1 and 2** (`b224482`): all 132 redirects now return 301 instead of 308. robots.txt already allows every listed search and AI bot. Sitemaps were already split by section; their lastmod dates were corrected on 13 Nov (`0702e81`). New `scripts/indexnow-submit.mjs` submits all sitemap URLs or a list. Tested: IndexNow returned HTTP 202.

**Phases 3 and 4** (`b224482`, `235eb51`):
- Home sections below the hero use `content-visibility: auto`. Style and layout time fell from 2.8 s to 1.8 s and blocking time from 920 ms to 760 to 840 ms.
- Sister-site auto-links were removed. The one remaining link (SevenFigureStudio on /viral-creatives) is `rel="nofollow noopener"`. FunnelsThatPrint is now named as text only.
- Titles, descriptions, alt text and OG tags were already clean.

**Phases 5 and 6** (`235eb51`):
- **Home crawler content:** the home page's crawler HTML now carries its visible sections (growth engine, build-test-optimize-scale, creatives, milestones, most searched), not a short summary.
- **Brand facts:** `src/data/brandFacts.js` is the single source for brand facts. The footer, About, Contact and Privacy pages read from it, and the audit checks index.html, llms.txt and the About and Contact pages against it.
- **Address:** the address was normalised to "27 W 24th Street" (it was written two ways).
- **Bylines and dates:** visible "By Gaurav Kapoor · Updated <date>" lines were added to comparison, benchmark, tool and glossary pages, and "Write-up by" lines to case studies, in both the React pages and the crawler HTML.

**Phases 7 to 9** (`b224482`, `235eb51`):
- **Speakable schema:** added to /growth, /shopify-agency, /viral-creatives, /services and /roas-calculator, and pointed at the visible `.quick-answer` block on all service pages.
- **llms.txt:** the contact email was added.
- **llms-full.txt:** trimmed to the 51 pages AI assistants should cite, with link-only list lines removed.
- **GEO prompts:** `audit/geo_prompts.md` lists 30 buyer prompts mapped to the page that should be cited.

**Phase 10** (`b224482`): GA4 now sends `click_whatsapp`, `click_email`, `click_phone`, `book_click`, `scroll_75` (once per page view) and `tool_used` (first calculator input per page view), plus `generate_lead` for WhatsApp and booking clicks. All six were verified firing in a browser test. Booking confirmation cannot be tracked with Google Calendar appointment pages (see manual actions).

## 3. Already in place before this run (verified, not redone)

- Prerendered HTML on every route, with title, canonical, JSON-LD and content in the initial HTML.
- One canonical host, with a non-www 301 to www.
- An IndexNow key file at the site root.
- GSC and Bing verified, with sitemaps submitted.
- Organization, Person, Service, BlogPosting, Article, FAQPage, BreadcrumbList and WebApplication schema; `npm run seo:audit` fails on invalid JSON-LD.
- A direct answer and visible FAQ on every money page.
- llms.txt.
- The GA4 tag (G-4NHL9F0B3C).

## 4. Manual actions for the owner

1. **GA4:**
   - Link Search Console (Admin → Product links).
   - Mark `generate_lead` and `book_click` as key events once they appear (Admin → Events).
   - Give read access (OpenSEO integration, or Viewer for google-indexer@contractorleads-502510.iam.gserviceaccount.com).
2. **Booking confirmation (`book_call`):** Google Calendar appointment pages do not report a confirmed booking to the site. To track confirmed calls, either:
   - switch to Calendly or Cal.com, which send a browser event on booking (it can be wired to `book_call`), or
   - set the booking confirmation to redirect to a /thank-you page.
3. **Microsoft Clarity:** create a project and send the project ID to add it.
4. **Performance blocker on the home page (score 42 to 44):** the remaining cost is design-level. Choose one or both:
   - cut the 7 web font families to 2 or 3 (self-hosted, preloaded), which removes the 0.11 hero layout shift;
   - show a lighter video wall on mobile (about 160 video tiles today).
5. **Bing API key:** regenerate it (it was shared in chat).
6. **Off-site:** see section 7.

## 5. Decisions on programmatic pages

All industry, location, tool, glossary, comparison and benchmark pages are kept. Near-duplicate scores per section average under 0.03 and peak at 0.07, well under 0.35. The full table is in `audit/programmatic_decisions.csv`.

The one pair over 0.35, /case-studies vs /case-studies/dropshipping-dtc (0.45), is kept on purpose: most published cases are dropshipping, so the listings overlap. The pages target different searches, and both are indexed.

Thin pages (under 600 words of main content): 42. These are mostly case studies whose original posts are short (270 to 590 words of verified content each), plus /book, /contact, /privacy-policy and /terms. Padding the cases would mean inventing detail, so they stay as they are. No money page except /book (475 words, a booking page) is thin.

## 6. Unverified claims (need evidence or rewording)

| Claim on site | Where | Status |
|---|---|---|
| "150+ verified case studies" | About, /book, llms.txt, schema description | The data file holds 126 case posts (incl. 2 duplicates); 37 have full write-ups. Either publish the rest or say "120+". |
| "$50M+ in Meta ad spend managed" | Sitewide | No source on the site. Add an evidence page (for example, a screenshot of the ad accounts' lifetime spend) or keep it as the founder's stated figure. |
| "12+ years in ecommerce" | Sitewide | Consistent with "since 2014". Founder's own claim. |
| "Trusted by 100+ scaling ecommerce founders", "100+ brands" | Home | No list on the site. |
| Brand names in the home hero (Juice Beauty, Vedge Nutrition, Dr Naomi Skin, Water Jewelers, Little & Lively, Veil Cosmetics, ionBottles, Ghost Democracy, Swamp Kitten Jewelry) | Home | Confirm written permission to show each as a client. |
| "30+ niches" | Home, llms.txt | No list beyond the 16 industry pages. |
| "9+ years" | Inside one old Instagram caption shown as the original post | Historic caption; not a site claim. |

## 7. Off-site plan (owner)

- No toxic or paid link sources were found to disavow (the domain has very few links at all).
- Build 10 to 20 real mentions:
  - Directories: Clutch (free profile plus 3 client reviews), Google Business Profile for the New York office, DesignRush, GoodFirms, Sortlist, UpCity, 1800dtc.com/get-listed.
  - "Best agencies" lists to pitch: influencermarketinghub.com, webtonic.io, mobiloud.com, shipfusion.com, newengen.com.
  - Podcasts: DTC POD, eCommerce Marketing Podcast.
  - Expert quotes: Qwoted.
- YouTube: link each video description to the matching guide, and keep the channel in sameAs.

## 8. Next 30 / 60 / 90 days

- **30 days:**
  - Clutch and directory profiles live.
  - GA4 key events confirmed.
  - Booking tracking decision made.
  - Font reduction on the home page.
- **60 days:**
  - Publish the remaining case write-ups only where captions support them.
  - Run the geo_prompts.md list monthly.
  - Write 2 to 4 guides from Search Console demand.
- **90 days:**
  - Have 10 or more real mentions.
  - Re-run `node scripts/seo-audit-full.mjs` and Lighthouse, and compare with this report.

## Acceptance criteria

| Criterion | Status |
|---|---|
| Bots get 200 and identical main content on top 20 URLs | Pass (13 agents x 20 URLs, prerendered build) |
| One canonical host, single-hop 301s, canonicals and sitemap consistent | Pass |
| 0 JSON-LD errors; Organization, Person, Service, Article, FAQ, Breadcrumb present | Pass |
| 0 meaningful images without alt | Pass |
| No section with average near-duplicate above 0.35 | Pass |
| Money pages: direct answer, question-led H2, visible FAQ, CTA | Pass |
| llms.txt and llms-full.txt live, consistent with brand facts | Pass after deploy |
| GA4 key events fire | `generate_lead`, `book_click` and the other events verified in a browser test; DebugView check and `book_call` need owner steps above |
| Lighthouse mobile at least 80 on home and main service page | Main service page 81: pass. Home 42 to 44: blocker documented (fonts and video wall) |
