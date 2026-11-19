# SEO change log (before and after)

Every change since 19 Nov 2026 is recorded here with:
- the reason,
- the affected URLs,
- how to validate it,
- the measured "before" figures, and
- a dated "after" check.

The "after" column is filled in only from measured data.

| # | Date | Change | Reason (evidence) | Affected URLs | Validation method | Before (measured) | After (check date and result) |
|---|---|---|---|---|---|---|---|
| 1 | 19 Nov 2026 | Booking buttons now fire GA4 `book_click` and `generate_lead` (`method: book_call`, `link_url: button`) | 42 booking `<button>`s in 29 files sent no event, because the tracker only saw `<a>` links (browser test, 19 Nov) | All pages with a booking button, including / (hero), /growth, /viral-creatives, service pages and /case-studies | Browser test on the build served as www.brandscalinghacks.com; GA4 events report: `book_click` with `link_url = button` | Hero button click: 0 events. GA4 key events, 10 to 17 Nov: 0 | 19 Nov browser test: `book_click` and `generate_lead` fire on desktop and iPhone. **GA4 check due 26 Nov**: count of `book_click` (button) |
| 2 | 19 Nov 2026 | GA4 loads only on www.brandscalinghacks.com | GA4 page report showed `localhost` page views (development tests) mixed with real visits | Every page (index.html) | gtag.js requested on the live domain only; GA4 hostname report | localhost rows in GA4, 10 to 17 Nov: /blog 6 views, / 1, /about 1 | 19 Nov browser test: gtag.js loads on the live domain and not on localhost. **GA4 check due 26 Nov**: no localhost hostname after 19 Nov |
| 3 | 19 Nov 2026 | Reworded 3 FAQ questions that exactly matched searches owned by dedicated pages: /growth "Is TikTok Shop part of the growth engine?", /tiktok-ads-agency "Do you also run TikTok Shop?", /shopify-agency "Is conversion work part of your Shopify service?". Answers point to the TikTok Shop and CRO pages. | Search Console, 19 Oct to 17 Nov: "tiktok shop scaling services" shown on /growth and / instead of /tiktok-shop-agency; "dtc ecommerce cro agency" shown on / and /shopify-agency instead of /cro-agency | /growth, /tiktok-ads-agency, /shopify-agency (targets: /tiktok-shop-agency, /cro-agency) | Search Console query and page report for those 2 searches; check 3 Dec and 17 Dec | "tiktok shop scaling services": /growth 26 impressions at 70.4, / 11 at 67.5, /tiktok-shop-agency 1 at 64. "dtc ecommerce cro agency": / 8 at 80.6, /shopify-agency 7 at 72.3, /cro-agency 0. /cro-agency page: 1 impression at 91. /tiktok-shop-agency page: 3 at 46.7 | **Due 3 Dec**: page and position per search |
