// 10 Nov 2026 additions to /blog/dtc-affiliate-program, for the queries Search Console shows
// the site is found for: "affiliate roas benchmark", "ecommerce brands affiliate marketing
// scaling challenges" and "dtc affiliate program scaling". Inserted after the tracking section.
// Every number is arithmetic from the stated commission rates, not an industry statistic.
const roasSection = {
  id: 'affiliate-roas',
  h2: 'How to measure affiliate ROAS',
  content: `Affiliate ROAS is the revenue affiliates drive divided by everything the program costs: commissions, the discount on affiliate codes, free product sent to creators, platform fees and any paid ads that boost affiliate content. Commission alone sets a ceiling, not a benchmark. At a 15% commission, commission-only ROAS is always 6.67x (100 / 15), and at 20% it is 5x, so a number like that says nothing about whether the program works.

The useful benchmark is your own break-even ROAS. Add every program cost, divide affiliate revenue by it, and compare the result with the break-even ROAS you use for paid ads. Then check the share of affiliate orders from new customers. A program that mostly pays commission on orders from existing customers can show a high ROAS while adding very little revenue the brand would not have made anyway.`,
  table: {
    headers: ['Commission rate', 'Commission-only ROAS', 'What to add before judging it'],
    rows: [
      ['10%', '10x', 'Discount on the code, product seeding, platform fees'],
      ['15%', '6.67x', 'Same, plus any Spark Ads or partnership ads spend'],
      ['20%', '5x', 'Same, and check the new-customer share closely'],
      ['30%', '3.33x', 'Usually only works with high gross margins']
    ]
  }
};

const challengesSection = {
  id: 'scaling-challenges',
  h2: 'Affiliate marketing scaling challenges for ecommerce brands',
  content: `Most ecommerce brands hit the same problems when they try to grow an affiliate program past its first few dozen partners.`,
  list: [
    'Coupon sites take the credit: code-sharing and deal sites claim sales from shoppers who were already at checkout. Pay those partners a lower rate or exclude them.',
    'Few active affiliates: a large share of sign-ups never post. Judge recruiting on active affiliates per month, not total sign-ups.',
    'Content that does not sell: creators make lifestyle posts instead of product demos. Send a short brief with hooks and the main product benefit.',
    'Attribution conflicts: the same order is claimed by an affiliate link, a Meta ad and an email. Decide which source gets paid and use blended MER for the overall picture.',
    'Margin leaks: a high commission stacked on a large discount code can turn a sale into a loss. Model the full cost per order before you raise rates.',
    'Slow payouts: late or confusing payments make the best creators stop posting. Pay on a fixed schedule after the refund window.'
  ]
};

export default (post) => {
  const sections = [...post.sections];
  const at = sections.findIndex((s) => s.id === 'tracking-and-metrics') + 1;
  sections.splice(at, 0, roasSection, challengesSection);
  const toc = [...post.tableOfContents];
  const tAt = toc.findIndex((t) => t.id === 'tracking-and-metrics') + 1;
  toc.splice(tAt, 0, { id: roasSection.id, text: 'How to measure affiliate ROAS' }, { id: challengesSection.id, text: 'Affiliate scaling challenges' });
  return {
    sections,
    tableOfContents: toc,
    updatedDate: '2026-11-10',
    secondaryKeywords: [...(post.secondaryKeywords || []), 'affiliate roas benchmark', 'affiliate marketing scaling challenges']
  };
};
