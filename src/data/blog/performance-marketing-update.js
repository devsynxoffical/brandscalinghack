// 9 Nov 2026 additions to /blog/performance-marketing-agency, for the queries Search Console shows
// it is found for: "dtc performance marketing", "dtc brand performance marketing" and
// "ecommerce roas improvement agency". Inserted after the opening section; nothing else changes.
const dtcSection = {
  id: 'what-is-dtc-performance-marketing',
  h2: 'What is DTC performance marketing?',
  content: `DTC performance marketing is paid advertising for direct-to-consumer brands that is judged only on what it sells. An ecommerce performance marketing agency is the team that runs it for you, paid to grow orders and profit rather than reach. Every campaign on Meta, TikTok or Google is measured on orders, revenue, cost per new customer and profit after ad spend, not on reach or awareness.

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

// 10 Nov 2026: the page ranks around position 26 for "ecommerce growth agencies specialized in
// scaling dtc brands" and 38 for "which google ads agencies are best for scaling dtc ecommerce
// brands?". Answer-first section and FAQs for those questions.
const specialistSection = {
  id: 'choose-dtc-growth-agency',
  h2: 'How to find an ecommerce growth agency that specializes in scaling DTC brands',
  content: `An ecommerce growth agency that specializes in DTC brands works only, or mostly, with brands that sell their own products online, and it can show published results from stores like yours. Generalist agencies that also serve SaaS, local businesses or lead generation tend to optimize for leads and clicks, not for orders and contribution margin.

Use five checks before you sign. They apply whether you are hiring for Meta, TikTok or a Google Ads agency.`,
  list: [
    'Proof in your range: case studies with spend, revenue and ROAS from brands at your monthly revenue, not only logos.',
    'Creative in-house: DTC scaling depends on new ads every week, so ask who writes, films and edits them.',
    'Profit-based targets: they should ask for your margins and set a break-even ROAS before setting any target.',
    'Store work included: product page, offer and checkout changes, because paid traffic converts on your Shopify store.',
    'You own everything: ad accounts, pixel, data and creative stay in your name, and reporting shows blended MER, not platform ROAS alone.'
  ]
};

const extraFaqs = [
  {
    question: 'Which Google Ads agencies are best for scaling DTC ecommerce brands?',
    answer: 'The best Google Ads agencies for DTC brands run Shopping and Performance Max from a clean product feed, split branded from non-branded search, and judge results on new-customer revenue and blended MER rather than Google-reported ROAS. Ask for DTC case studies with spend and revenue at your size before choosing one.'
  },
  {
    question: 'What does an ecommerce growth agency that specializes in DTC do differently?',
    answer: 'It plans around orders and margin instead of leads: creative testing every week, account structures that give the algorithm enough purchases, store and offer changes that raise conversion rate and order value, and reporting on contribution margin and new-customer CAC.'
  }
];

export default (post) => {
  const sections = [...post.sections];
  const at = sections.findIndex((s) => s.id === 'what-is-performance-marketing') + 1;
  sections.splice(at, 0, dtcSection, roasSection, specialistSection);
  const toc = [...post.tableOfContents];
  const tAt = toc.findIndex((t) => t.id === 'what-is-performance-marketing') + 1;
  toc.splice(tAt, 0, { id: dtcSection.id, text: 'What is DTC performance marketing?' }, { id: roasSection.id, text: 'What a ROAS improvement agency changes' }, { id: specialistSection.id, text: 'Finding an agency that specializes in DTC' });
  return {
    sections,
    tableOfContents: toc,
    faqs: [...(post.faqs || []), ...extraFaqs],
    // 12 Nov: the post now appears at position 23 for "ecommerce performance marketing agency"
    metaDescription: 'What does an ecommerce performance marketing agency do? How DTC agencies scale Shopify brands with Meta and TikTok ads, CRO, creative testing and profit ROAS.',
    secondaryKeywords: [...(post.secondaryKeywords || []), 'ecommerce performance marketing agency', 'dtc performance marketing agency'],
    updatedDate: '2026-11-12'
  };
};
