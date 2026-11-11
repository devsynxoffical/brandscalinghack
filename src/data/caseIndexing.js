// Which case study pages go into Google's index, decided by rule rather than by hand.
//
// Every case keeps its own page. Duplicates (same headline posted twice on Instagram) carry a
// canonical pointing at the first copy. Only the cases in BEST_CASE_SLUGS are indexable and in
// the sitemap; the rest stay live with noindex,follow.
import { allCaseStudies } from './allCaseStudies.js';
import { cleanSeoText } from './seoText.js';

const keyOf = (cs) => cleanSeoText(cs.title).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim().slice(0, 60);

const firstByKey = new Map();
const DUPLICATE_OF = new Map(); // slug -> slug of the original
for (const cs of allCaseStudies) {
  const k = keyOf(cs);
  if (firstByKey.has(k)) DUPLICATE_OF.set(cs.slug, firstByKey.get(k).slug);
  else firstByKey.set(k, cs);
}

// SEO page plan (5 Nov 2026): Google indexed only 3 of 121 case pages, so the library is
// consolidated. The strongest write-ups (largest verified results, one or more per niche)
// stay indexable and in the sitemap; every other unique case stays live as noindex,follow,
// is still listed on its category hub, and links back to the category and the best cases.
export const BEST_CASE_SLUGS = new Set([
  'new-dtc-client-results-last-16-days-132832-ad-spend-374103',
  'finally-built-million-dollar-brand-2022-ending-2-3',
  'finally-client-touched-1-6m-year-mark-insane-roas',
  'finally-scale-client-almost-1m-sales-6-months',
  '449221-last-49-days-newer-client-dropshipping-brands-starting',
  '185936-21-days-56-profit-margin-scaled-dropshipping-store-beyond',
  'meet-com-clients-sasha-whom-have-been-helping-four',
  '148k-day-best-day-whole-career-ending-up-phenomenal',
  'finally-have-closed-117k-month-client',
  'q4-shaping-up-be-incredible-while-many-slow-down-weekend-ve',
  '26271-spent-115416-generated-4-39-roas-skincare-brand-crushed-it',
  '118k-first-month-scaling-uk-skincare-brand',
  'it-safe-say-figured-out-make-supplement-brand-print-money',
  'rule-thumb-scaling-facebook-ads-hit-3-77-roas-body-contouring',
  'q4-here-it-biggest-money-making-season-year',
  'record-breaking-month-generating-137620-25-revenue-roas-3',
  'it-12-57-am-here-have-successfully-scaled-brand-early-bfcm',
  'these-5days-has-been-fire-spent-26594-generated-99576-profit',
  '16630-spent-59241-generated-3-56-roas-even-chaos-bfcm-women',
  'drove-54k-7-days-using-manual-bidding-campaigns-jewelry',
  'day-inside-dtc-fitness-brands-80k-clocked-24-hours-862-orders',
  'if-you-re-brand-owner-or-media-buyer-looking-viral-strategy-make',
  'finally-have-taken-brand-128k-14days-insane-profits',
  'dropshipping-isn-get-rich-quick-scheme-it-path-building',
  'structure-campaigns-50000-day-profits',
  'journey-client-behind-touching-way-100000-month-mark',
  'generated-61960-3-80-roas-single-day-what-you-can-learn-from-it',
  'brand-exploding-black-friday-20k-day-39-healthy-margins',
  '5-crucial-things-learned-while-scaling-brand-105000-23-days',
  'massive-win-books-98k-23-days',
  'why-do-fitness-brands-struggle-scale-hint-it-not-about-ads',
  'bombshell-update-100k-hit-month',
  'pov-curious-pulled-off-40669-sales-7-days-134-high-ticket',
  'happy-monday-everyone-let-kick-off-week-some-serious-momentum',
  'ecom-world-split-into-two-groups',
  'massive-success-once-again-didn-expected-dfy-program',
  '1st-day-november-seems-very-great-42k-day'
]);

const reasons = new Map();
for (const cs of allCaseStudies) {
  if (DUPLICATE_OF.has(cs.slug)) { reasons.set(cs.slug, 'duplicate'); continue; }
  if (!BEST_CASE_SLUGS.has(cs.slug)) reasons.set(cs.slug, 'consolidated');
}

export const NON_INDEXABLE_CASE_SLUGS = new Set(reasons.keys());
export const nonIndexableReason = (cs) => reasons.get(cs.slug || cs.id) || null;
export const isIndexableCase = (cs) => !NON_INDEXABLE_CASE_SLUGS.has(cs.slug || cs.id);
/** Thin pages carry noindex. A duplicate relies on its canonical alone while the original is
 *  indexable; when the original is noindex, the duplicate is noindex too, so it never says
 *  "index me" while pointing at a page that says "don't". */
export const isNoindexCase = (cs) => {
  const slug = cs.slug || cs.id;
  const reason = reasons.get(slug);
  if (reason === 'consolidated') return true;
  return reason === 'duplicate' && !BEST_CASE_SLUGS.has(DUPLICATE_OF.get(slug));
};
/** Unique (non-duplicate) cases: listed on hubs for visitors even when noindex. */
export const isListedCase = (cs) => reasons.get(cs.slug || cs.id) !== 'duplicate';

/** Canonical path for a case page: duplicates point at the original post's page. */
export const canonicalCasePath = (cs) => `/cases/${DUPLICATE_OF.get(cs.slug) || cs.slug || cs.id}`;
