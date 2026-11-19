import { CASE_HIGHLIGHTS } from './caseHighlights.js';

// Industry and topic words in a page path -> case niche (src/data/caseNiches.js slugs)
const NICHE_BY_WORD = [
  [/skincare|beauty|cosmetic/, 'skincare-beauty'],
  [/supplement|nutrition|wellness|health/, 'supplements-nutrition'],
  [/fitness|gym|sport/, 'fitness-health'],
  [/fashion|apparel|jewel|luxury|clothing/, 'apparel-fashion'],
  [/dropship/, 'dropshipping-dtc']
];

/** Up to `count` verified cases for a page: its own proof links first, then its niche, then the biggest results. */
export function casesForPage(page, count = 3) {
  const picked = [];
  const add = (c) => { if (c && !picked.includes(c) && picked.length < count) picked.push(c); };
  for (const p of page.proof || []) if (p.href && p.href.startsWith('/cases/')) add(CASE_HIGHLIGHTS.find((c) => c.path === p.href));
  const hit = NICHE_BY_WORD.find(([re]) => re.test(page.path));
  if (hit) CASE_HIGHLIGHTS.filter((c) => c.niche === hit[1]).forEach(add);
  CASE_HIGHLIGHTS.filter((c) => c.roas).forEach(add);
  CASE_HIGHLIGHTS.forEach(add);
  return picked;
}
