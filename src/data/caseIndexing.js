// Case study pages that stay out of the index (noindex,follow; excluded from the
// sitemap, the hub list and ItemList schema). These are Instagram posts whose caption
// contains no revenue, spend or ROAS figure, so the page would be thin and the
// headline numbers shown on the card are templated rather than quoted from the post.
// Remove a slug from this list once the page has a written, verifiable breakdown.
export const NON_INDEXABLE_CASE_SLUGS = new Set([
  "six-figure-dropshipping-client-wins-books",
  "dtc-client-finally-went-beyond-six-figure-mark",
  "ecom-brands-or-lead-gen-businesses-what-do-you-need",
  "today-am-beyond-excited-show-you-guys-have-been-scaling",
  "work-harder-than-you-think-you-did-yesterday-yes-have-been-doing",
  "positivity-motivation-come-from-hard-work-why-always-say-find",
  "first-day-scaling-momentum-already-building",
  "grind-grind-grind-woke-up-today-some-value-bombs-mind",
  "are-scaling-brands-from-scratch-absolutely-killing-game",
  "truth-hurts-dropshipping-isn-dead-you-are-doing-it-wrong",
  "most-people-jumping-into-something-new-they-ve-never-done-seems",
  "biggest-achievement-month",
  "biggest-achievement-month-cfbtjb",
  "when-you-have-dream-you-ve-got-grab-it-never-let-go",
  "day-office-success-stories-like-these-have-become-norm-around",
  "vision-without-execution-delusion",
  "find-winning-shopify-dropshipping-products-formula-leaked",
  "new-store-pixel-huge-potential-after-1-5-months-grinding-from",
  "anyone-can-do-it-yes-even-you-can-do-dropshipping-successfully",
  "have-such-rich-fulfilling-life-your-awake-better-than-your",
  "planning-host-2hr-commerce-profit-accelerator-bootcamp-you-guys",
  "last-chance-must-read",
  "does-dropshipping-still-work-2023-let-find-out",
  "success-story-books",
  "once-you-see-powerful-results-running-your-own-online-business",
  "six-figures-fitness-brand-books-3-game-changing-tactics",
  "scale-meta-aggressively-profitably-especially-when-your",
  "happy-monday-everyone-get-ready-some-incredible-dropshipping",
  "planning-host-2hr-commerce-profit-accelerator-bootcamp-you-guys-c9y8op",
  "massive-win-commerce-agency-clients",
  "6-am-rain-about-hit-sitting-balcony-park-front",
  "from-good-great-following-your-agency-rules-leads-success"
]);

export const isIndexableCase = (cs) => !NON_INDEXABLE_CASE_SLUGS.has(cs.slug || cs.id);
