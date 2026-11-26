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
  'dtc-case-study-374103-in-16-days',
  'dtc-case-study-2-3m-sales-at-11-6x-roas',
  'skincare-case-study-1-6m-in-one-year',
  'dtc-case-study-1m-in-6-months',
  'dropshipping-case-study-449221-in-49-days',
  'dropshipping-case-study-185936-in-21-days',
  'dtc-case-study-165k-in-22-days',
  'dropshipping-case-study-148k-in-one-day',
  'dropshipping-case-study-117k-in-one-month',
  'dropshipping-case-study-133420-in-7-days',
  'skincare-case-study-115416-in-20-days',
  '118k-first-month-scaling-uk-skincare-brand',
  'supplement-case-study-52000-in-17-days',
  'fitness-case-study-19977-in-one-day',
  'skincare-case-study-146184-in-27-days',
  'supplement-case-study-137620-in-one-month',
  'dropshipping-case-study-112866-in-13-days',
  'dropshipping-case-study-99576-in-5-days',
  'fashion-case-study-59241-bfcm-at-3-56x-roas',
  'drove-54k-7-days-using-manual-bidding-campaigns-jewelry',
  'fitness-case-study-80k-in-24-hours',
  'fashion-case-study-79859-in-one-day',
  'dtc-case-study-128k-in-14-days',
  'dropshipping-case-study-491798-in-one-month',
  'dtc-case-study-66168-in-one-day',
  'dtc-case-study-64000-in-24-days',
  'dtc-case-study-61960-in-one-day',
  'dropshipping-case-study-20k-black-friday-day',
  'dropshipping-case-study-105000-in-23-days',
  'fashion-case-study-98k-in-23-days',
  'fitness-case-study-19167-in-one-day',
  'skincare-case-study-100k-in-one-month',
  'high-ticket-case-study-40669-in-7-days',
  'dtc-case-study-43970-in-one-day',
  'dropshipping-case-study-80227-in-7-days',
  'dtc-case-study-153163-in-one-month',
  'dtc-case-study-42k-in-one-day',
  'dropshipping-case-study-21k-in-one-day',
  'high-ticket-case-study-100k-in-23-days',
  'dropshipping-case-study-10809-in-24-hours',
  'dtc-case-study-16k-in-one-day',
  'dtc-case-study-53387-in-one-day',
  'dtc-case-study-68510-in-one-day',
  // added 20 Nov 2026: new Instagram posts, figures read from the Ads Manager screen in each video
  '376000-25-days-dtc-client-meta-ads',
  '307950-revenue-fitness-brand-2053-units-30-days'
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
