// 9 Nov 2026 additions to /blog/performance-marketing-agency, for the queries Search Console shows
// it is found for: "dtc performance marketing", "dtc brand performance marketing" and
// "ecommerce roas improvement agency". Inserted after the opening section; nothing else changes.
const dtcSection = {
  id: 'what-is-dtc-performance-marketing',
  h2: 'What is DTC performance marketing?',
  content: `DTC performance marketing is paid advertising for direct-to-consumer brands that is judged only on what it sells. Every campaign on Meta, TikTok or Google is measured on orders, revenue, cost per new customer and profit after ad spend, not on reach or awareness.

It differs from performance marketing for lead generation or apps in three ways. The product is bought on the spot, often from a single video, so creative carries most of the work. The store is part of the funnel, so product page speed, the offer and checkout decide how much of the paid traffic converts. And margins are thin enough that the same ROAS can be profitable for one brand and a loss for another, so targets start from unit economics rather than benchmarks.`
};

const roasSection = {
  id: 'roas-improvement-agency',
  h2: 'What an ecommerce ROAS improvement agency actually changes',
  content: `When an agency promises to improve ROAS, ask what it will change, because ROAS only moves for a few reasons: more revenue from the same spend, or the same revenue for less spend. In practice the work falls into four areas.`,
  list: [
    'Creative: new hooks and angles every week, so spend moves to fresh winners instead of fatigued ads.',
    'Account structure: fewer, broader campaigns with clear budget and bid rules, so the platform optimises on enough purchases.',
    'Store and offer: product page, bundles and post-purchase upsells, so each click is worth more.',
    'Measurement: Conversions API and blended MER, so you can see whether a higher platform ROAS is real or only a shift in attribution.'
  ]
};

export default (post) => {
  const sections = [...post.sections];
  const at = sections.findIndex((s) => s.id === 'what-is-performance-marketing') + 1;
  sections.splice(at, 0, dtcSection, roasSection);
  const toc = [...post.tableOfContents];
  const tAt = toc.findIndex((t) => t.id === 'what-is-performance-marketing') + 1;
  toc.splice(tAt, 0, { id: dtcSection.id, text: 'What is DTC performance marketing?' }, { id: roasSection.id, text: 'What a ROAS improvement agency changes' });
  return { sections, tableOfContents: toc, updatedDate: '2026-11-09' };
};
