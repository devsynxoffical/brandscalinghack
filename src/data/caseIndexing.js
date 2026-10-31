// Which case study pages go into Google's index, decided by rule rather than by hand.
//
// Every case keeps its own page. A page is indexable when:
//   1. it is not a duplicate of an earlier post (same headline posted twice on Instagram:
//      the duplicate gets a canonical pointing at the first copy), and
//   2. the post states a verifiable result (revenue, ROAS or ad spend quoted in the post), or
//      it is a substantive lesson: 120+ words of caption with at least two concrete takeaways.
// Everything else (short motivational posts, event announcements) stays live as a page with
// noindex,follow so it passes link equity without diluting site quality.
import { allCaseStudies } from './allCaseStudies.js';
import { caseSeo } from './caseFacts.js';
import { cleanSeoText } from './seoText.js';

const keyOf = (cs) => cleanSeoText(cs.title).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim().slice(0, 60);

const firstByKey = new Map();
const DUPLICATE_OF = new Map(); // slug -> slug of the original
for (const cs of allCaseStudies) {
  const k = keyOf(cs);
  if (firstByKey.has(k)) DUPLICATE_OF.set(cs.slug, firstByKey.get(k).slug);
  else firstByKey.set(k, cs);
}

const INDEX_SHORT_POSTS = true;

const reasons = new Map();
for (const cs of allCaseStudies) {
  if (DUPLICATE_OF.has(cs.slug)) { reasons.set(cs.slug, 'duplicate'); continue; }
  // Owner decision (31 Oct 2026): index every unique case page, including short posts.
  // Set INDEX_SHORT_POSTS to false to return short posts without a result or lesson to noindex.
  if (INDEX_SHORT_POSTS) continue;
  const seo = caseSeo(cs);
  if (seo.verified) continue;
  if (seo.wordCount >= 120 && seo.takeaways.length >= 2) continue;
  if (seo.wordCount >= 80 && seo.takeaways.length >= 3) continue;
  reasons.set(cs.slug, 'thin');
}

export const NON_INDEXABLE_CASE_SLUGS = new Set(reasons.keys());
export const nonIndexableReason = (cs) => reasons.get(cs.slug || cs.id) || null;
export const isIndexableCase = (cs) => !NON_INDEXABLE_CASE_SLUGS.has(cs.slug || cs.id);
/** Only thin pages carry noindex; duplicates rely on the canonical alone (no mixed signals). */
export const isNoindexCase = (cs) => reasons.get(cs.slug || cs.id) === 'thin';

/** Canonical path for a case page: duplicates point at the original post's page. */
export const canonicalCasePath = (cs) => `/cases/${DUPLICATE_OF.get(cs.slug) || cs.slug || cs.id}`;
