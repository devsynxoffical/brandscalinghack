// Registry for the data-driven content pages (services, industries, tools, glossary,
// comparisons, benchmarks) and their hubs. One object per URL drives the React page
// (src/pages/ContentPage.jsx), the prerendered HTML, the JSON-LD and the sitemap.
import services1 from './pages/services-1.js';
import services2 from './pages/services-2.js';
import industry1 from './pages/industry-1.js';
import industry2 from './pages/industry-2.js';
import glossary from './pages/glossary.js';
import compareBenchmarks from './pages/compare-benchmarks.js';
import tools from './pages/tools.js';
import tools2 from './pages/tools-2.js';
import locationsUs from './pages/locations-us.js';
import locationsIntl from './pages/locations-intl.js';

// Date each group of pages was published / last substantively updated (sitemap lastmod, schema dates)
export const CONTENT_PUBLISHED = '2026-11-05';

// Where each kind sits in the site: hub path and breadcrumb label
export const KIND_HUB = {
  service: { path: '/services', name: 'Services' },
  industry: { path: '/for', name: 'Industries' },
  tool: { path: '/tools', name: 'Free Tools' },
  glossary: { path: '/glossary', name: 'Glossary' },
  benchmark: { path: '/benchmarks', name: 'Benchmarks' },
  comparison: { path: '/services', name: 'Services' },
  location: { path: '/locations', name: 'Locations' }
};

const LEAF_PAGES = [...services1, ...services2, ...industry1, ...industry2, ...glossary, ...compareBenchmarks, ...tools, ...tools2]
  .map((p) => ({ ...p, published: p.published || CONTENT_PUBLISHED, updated: p.updated || CONTENT_PUBLISHED }))
  .map((p) => (p.path === '/tools/discount-break-even-calculator' || p.path === '/tools/profit-margin-calculator' ? { ...p, published: '2026-11-09', updated: '2026-11-09' } : p))
  .concat([...locationsUs, ...locationsIntl].map((p) => ({ ...p, published: p.published || '2026-11-06', updated: p.updated || '2026-11-06' })));

const byKind = (kind) => LEAF_PAGES.filter((p) => p.kind === kind);
const card = (p) => ({ href: p.path, title: p.term ? `${p.term.name}${p.term.alternateName && p.term.alternateName !== p.term.name ? ` (${p.term.alternateName})` : ''}` : p.h1, text: p.term ? p.term.shortDefinition : p.quickAnswer.answer.split(/(?<=\.)\s/)[0] });

/* -------------------------------------------------------------------------- */
/* Hubs                                                                        */
/* -------------------------------------------------------------------------- */

const HUBS = [
  {
    path: '/for',
    kind: 'hub',
    childKind: 'industry',
    primaryKeyword: 'ecommerce marketing agency by industry',
    titleTag: 'Ecommerce Marketing Agency by Industry | Brand Scaling',
    metaDescription: 'Ecommerce marketing agency by industry: how we run Meta, TikTok and Shopify growth for skincare, supplements, fashion, fitness and 11 more niches.',
    h1: 'Ecommerce Marketing Agency by Industry',
    eyebrow: 'Industries we scale',
    quickAnswer: {
      question: 'Does the industry change how an ecommerce brand should advertise?',
      answer: 'Yes. The channels stay similar, but the angles, proof, compliance rules, margins and buying cycle change by category. A supplement brand fights ad policy and repeat purchase economics, a fashion brand fights returns and sizing, a luxury brand fights trust. Each industry page below explains the playbook we run for that category.'
    },
    intro: `Brand Scaling works as an ecommerce marketing agency by industry: we run accounts across 30+ niches, and the way we run Meta ads, TikTok, creative and the Shopify store changes with the category. These industry pages explain what is different for each one: the angles that sell, the compliance traps, the unit economics and the proof we can show.\n\nWhere we have published case studies for a niche, the page links to them. Where we do not, the page says so and uses agency-wide numbers instead, so you always know what is a verified result and what is our process.`,
    sections: [],
    faqs: [
      { question: 'Which industries does Brand Scaling work with?', answer: 'We work with DTC ecommerce brands across 30+ niches. Our published case studies are strongest in dropshipping and general DTC, skincare and beauty, supplements, fashion and apparel, fitness and jewelry. We also run accounts in categories such as home, pet and wellness, and each industry page states clearly which results are published for that niche.' },
      { question: 'Do you need experience in my exact niche to scale my brand?', answer: 'It helps with angles and compliance, but the bigger drivers are creative volume, tracking and unit economics, which carry across categories. In the Brand Growth Audit we look at your margins, offer and current ads first, then tell you honestly whether our experience fits your category before you commit to anything.' },
      { question: 'What size of brand is a good fit?', answer: 'Most partner brands do about $20K to $2M+ a month in revenue, already have product-market fit and spend at least $10K to $20K a month on paid ads, or are ready to. Below that, the free calculators and guides on this site are usually a better first step than an agency retainer.' },
      { question: 'How do I start?', answer: 'Book a Brand Growth Audit. It is a 1-on-1 review of your ad account, creative, store and unit economics with Gaurav Kapoor. You leave with the three biggest bottlenecks and a 90-day plan for your category, whether or not you decide to work with us afterwards.' }
    ],
    related: ['/case-studies', '/services', '/meta-ads-agency', '/tools'],
    cta: { heading: 'Get a plan for your category', text: 'Book a Brand Growth Audit and we will map the angles, offer and budget steps that fit your niche and margins.' }
  },
  {
    path: '/tools',
    kind: 'hub',
    childKind: 'tool',
    primaryKeyword: 'free ecommerce calculators',
    titleTag: 'Free Ecommerce Calculators for DTC Brands | Brand Scaling',
    metaDescription: 'Free ecommerce calculators for DTC brands: ROAS and break-even ROAS, MER, CAC, LTV, AOV, Meta ads budget and conversion rate. No signup, instant results.',
    h1: 'Free Ecommerce Calculators for DTC Brands',
    eyebrow: 'Free tools',
    quickAnswer: {
      question: 'Which ecommerce numbers should a DTC brand calculate first?',
      answer: 'Start with break-even ROAS, because it tells you the lowest return your ads can run at without losing money on each order. Then track MER for the whole business, CAC against first-order profit, and LTV to see how much a customer is worth over time. These free ecommerce calculators do each of these in seconds.'
    },
    intro: `These free ecommerce calculators are the same numbers we check in every Brand Growth Audit before we scale a single ad account. Each one runs in your browser, needs no signup and explains the formula, a worked example and what to do with the result.\n\nFor a full profit model with price, product cost, fees and CAC together, use the original ROAS calculator; the tools below each answer one specific question.`,
    sections: [],
    extraLinks: [{ href: '/roas-calculator', title: 'Ecommerce ROAS calculator with profit model', text: 'For Meta, Facebook, TikTok and dropshipping stores: price, product cost, fees and CAC in one model, giving break-even ROAS, profit per order and monthly profit.' }],
    faqs: [
      { question: 'Are these ecommerce calculators free?', answer: 'Yes. Every calculator on this page is free, runs in your browser and does not ask for an email. Nothing you type is stored or sent anywhere. They are built from the same formulas we use when we audit an ad account, and each page explains the maths so you can rebuild it in a spreadsheet.' },
      { question: 'Which calculator should I use before scaling Meta ads?', answer: 'Use the break-even ROAS calculator first, then the Meta ads budget calculator. Break-even ROAS tells you the floor your campaigns must stay above, and the budget calculator turns a revenue goal into the daily spend, target CPA and weekly purchases you need. Together they show whether a scaling plan is realistic.' },
      { question: 'What is the difference between ROAS and MER?', answer: 'ROAS measures revenue attributed to one channel or campaign divided by that channel\'s ad spend. MER divides total store revenue by total marketing spend across every channel, so it does not depend on attribution. We manage campaigns on ROAS and judge the business on MER, because platform attribution often over or under counts.' },
      { question: 'How accurate are the results?', answer: 'The maths is exact, but the result is only as good as the inputs. Use real numbers from Shopify and your ad accounts for the last 30 to 90 days, include shipping, fees and returns in your costs, and re-run the calculators whenever prices, margins or your channel mix change.' }
    ],
    related: ['/roas-calculator', '/glossary', '/blog/what-is-roas', '/meta-ads-agency'],
    cta: { heading: 'Want us to check your numbers?', text: 'Book a Brand Growth Audit and we will build your break-even ROAS, CAC and budget plan from your real ad account and Shopify data.' }
  },
  {
    path: '/glossary',
    kind: 'hub',
    childKind: 'glossary',
    primaryKeyword: 'ecommerce marketing glossary',
    titleTag: 'Ecommerce Marketing Glossary: DTC Terms | Brand Scaling',
    metaDescription: 'Ecommerce marketing glossary for DTC founders: MER, CAC, LTV, AOV, CPM, Advantage+, Conversions API and more, each with a plain definition and formula.',
    h1: 'Ecommerce Marketing Glossary for DTC Brands',
    eyebrow: 'Glossary',
    quickAnswer: {
      question: 'What ecommerce marketing terms should a DTC founder know?',
      answer: 'The core set is MER, ROAS, CAC, LTV, AOV, contribution margin and conversion rate for the economics, plus CPM, CPC and CTR for ad delivery, and Advantage+, Conversions API, attribution windows and creative fatigue for how Meta works today. Each term below has a plain definition, the formula where one exists and an example.'
    },
    intro: `This ecommerce marketing glossary explains the terms we use every day when we run ads and stores for DTC brands. Each entry gives a one-line definition, the formula where there is one, a worked example and the decision the number should drive.\n\nThe terms link to the free calculators where you can work out your own numbers, and to the guides that go deeper.`,
    sections: [],
    extraLinks: [{ href: '/blog/what-is-roas', title: 'ROAS (Return on Ad Spend)', text: 'Revenue from ads divided by ad spend. The full guide covers the formula, benchmarks and break-even ROAS.' }],
    faqs: [
      { question: 'What is the most important metric for a DTC brand?', answer: 'There is no single metric, but contribution margin after ad spend comes closest, because it shows whether growth makes money. MER, CAC and break-even ROAS all feed into it. A brand can show a high ROAS and still lose money if product cost, shipping, fees and returns are not counted first.' },
      { question: 'What is the difference between CAC and CPA?', answer: 'CPA is the cost per acquisition a platform reports for a conversion event, usually a purchase, and it includes returning customers. CAC is what it costs to win a brand new customer, ideally including all marketing costs. CAC is the number to compare with first-order profit and LTV.' },
      { question: 'Why do Meta and Shopify show different numbers?', answer: 'They measure differently. Meta credits purchases within its attribution window after a click or view, models some conversions it cannot observe, and can count a sale another channel also claims. Shopify records actual orders. That is why we track MER from Shopify alongside platform ROAS and check the Conversions API setup.' },
      { question: 'Where can I calculate these metrics?', answer: 'Use the free tools hub. There are calculators for break-even ROAS, MER, CAC, LTV, AOV, Meta ads budget and conversion rate, plus the original ROAS calculator with a full profit model. Each one explains the formula and how to act on the result.' }
    ],
    related: ['/tools', '/blog/what-is-roas', '/roas-calculator', '/blog'],
    cta: { heading: 'Turn the metrics into a plan', text: 'In a Brand Growth Audit we calculate your real MER, CAC and break-even ROAS and show which lever moves profit fastest.' }
  },
  {
    path: '/benchmarks',
    kind: 'hub',
    childKind: 'benchmark',
    primaryKeyword: 'ecommerce benchmarks',
    titleTag: 'Ecommerce Benchmarks from Real Ad Accounts | Brand Scaling',
    metaDescription: 'Ecommerce benchmarks built from our own published case studies, starting with ROAS by niche: median, middle half and range, with every source linked.',
    h1: 'Ecommerce Benchmarks from Real Ad Accounts',
    eyebrow: 'Benchmarks',
    quickAnswer: {
      question: 'Where do these ecommerce benchmarks come from?',
      answer: 'Every number here comes from Brand Scaling\'s own published case studies, which show screenshots from real ad accounts and Shopify stores. Across the 25 case studies that state a ROAS, the median is 3.97x and the middle half sits between 3.61x and 4.39x. We do not repeat third-party survey statistics we cannot verify.'
    },
    intro: `Most ecommerce benchmarks online come from surveys or platform averages you cannot check. These ecommerce benchmarks are different: they are calculated from our own published case studies, and every figure links back to the case it came from.\n\nThe first report covers ROAS by niche. We will add CPM, conversion rate and CAC reports once we have enough consistently measured accounts to publish them honestly.`,
    sections: [
      {
        id: 'roas-by-niche',
        h2: 'Ecommerce ROAS benchmarks by niche',
        content: `ROAS from Brand Scaling case studies that publish one, grouped by niche. Ranges show the lowest and highest published figure in each group; every number links back to a case in the case study library. Across all 25 cases the median is 3.97x and the middle half sits between 3.61x and 4.39x.`,
        table: {
          headers: ['Niche', 'Published ROAS range', 'Where to see the cases'],
          rows: [
            ['Supplements', '3.89x to 4.51x', 'Supplement case studies'],
            ['Fashion and apparel', '3.56x to 5.49x', 'Fashion and jewelry case studies'],
            ['Jewelry', '4.43x (one case)', 'Fashion and jewelry case studies'],
            ['Fitness', '3.61x to 4.37x', 'Fitness and health case studies'],
            ['Skincare', '3.64x to 4.39x', 'Skincare and beauty case studies'],
            ['Dropshipping', '2.53x to 11.6x', 'Dropshipping and DTC store case studies'],
            ['General DTC', '2.06x to 3.8x', 'All case studies']
          ]
        }
      },
      {
        id: 'uk-roas',
        h2: 'What about average ROAS for UK ecommerce?',
        content: `We have one published UK result, a skincare brand that reached EUR 118,000 in its first month, and that post does not state a ROAS, so we do not publish a UK average. UK brands price with 20 percent VAT included, so calculate ROAS and break-even on revenue excluding VAT, or the number will look about a fifth better than it is. How we work with UK brands is on the London page.`
      },
      {
        id: 'method',
        h2: 'How the benchmarks are built',
        content: `We only use figures that appear in a published case study with a screenshot of the ad account or store. Where a case shows revenue and spend, we calculate ROAS from those two numbers. Cases without both numbers are left out rather than estimated.\n\nThe sample is our own client work, so it reflects brands that chose to scale with an agency and accounts that went well enough to publish. Treat the numbers as what good looks like for brands like these, not as an industry average.`,
        list: [
          '25 case studies with a stated ROAS',
          'Median ROAS 3.97x, middle half 3.61x to 4.39x',
          'Full range 2.06x to 11.6x',
          'Every figure links to its source case study'
        ]
      }
    ],
    faqs: [
      { question: 'What is a good ROAS for an ecommerce brand?', answer: 'It depends on your margin. A good ROAS is one comfortably above your break-even ROAS, which is 1 divided by your contribution margin before ads. In our published case studies the median is 3.97x, but a brand with 70% margins can be very profitable at 2x while a 30% margin brand loses money below 3.3x.' },
      { question: 'Why not use industry-wide benchmark reports?', answer: 'Many reports mix brands of every size, margin and attribution setup, and some cannot be checked at all. We prefer a smaller set of numbers we can prove with screenshots. When you compare yourself with any benchmark, compare against your own break-even ROAS and MER trend first.' },
      { question: 'Will you publish CPM, conversion rate and CAC benchmarks?', answer: 'Yes, once we have enough accounts measured the same way to publish them honestly. Until then, use the free conversion rate, CAC and Meta ads budget calculators to work from your own data, which is more useful for decisions than any average.' }
    ],
    related: ['/case-studies', '/blog/what-is-roas', '/tools/break-even-roas-calculator', '/glossary/blended-roas'],
    cta: { heading: 'See how your account compares', text: 'Book a Brand Growth Audit and we will compare your ROAS, MER and CAC with your own break-even point and with what we see across client accounts.' }
  },
  {
    path: '/locations',
    kind: 'hub',
    childKind: 'location',
    primaryKeyword: 'ecommerce marketing agency locations',
    titleTag: 'Ecommerce Marketing Agency Locations | Brand Scaling',
    metaDescription: 'Ecommerce marketing agency locations: our New York office plus remote work for DTC brands in San Francisco, LA, Miami, London, Toronto and Sydney.',
    h1: 'Ecommerce Marketing Agency Locations',
    eyebrow: 'Where we work',
    quickAnswer: {
      question: 'Where is Brand Scaling based, and which markets do you serve?',
      answer: 'Brand Scaling has one office, in New York at 27 W 24th Street, Suite 702. We run ads, creative and Shopify growth remotely for DTC brands across the United States, the United Kingdom, Canada and Australia. Each page below explains how we work with brands in that market, including time zones, currency, tax and privacy rules.'
    },
    intro: `These are the ecommerce marketing agency locations we serve. Our only office is in New York, and every other market is run remotely from there, with reporting and calls scheduled around your time zone.\n\nEach city page covers what actually changes for a DTC brand in that market: pricing with sales tax or VAT, consent rules that affect tracking, shipping expectations and the local sales calendar.`,
    sections: [],
    faqs: [
      { question: 'Do you only work with brands in these cities?', answer: 'No. These pages cover the markets we are asked about most. We work with DTC brands anywhere in the United States, the United Kingdom, Canada and Australia, all managed from our New York office. What matters more than the city is your margin, your offer and whether you are ready to spend at least $10K to $20K a month on ads.' },
      { question: 'Can I meet the team in person?', answer: 'Yes, in New York. Brand Growth Audits can be held at our office at 27 W 24th Street, Suite 702 by appointment. For every other market the audit and the ongoing work run over video calls, shared dashboards and written weekly reports, which is how most of our client relationships work anyway.' },
      { question: 'How do you handle time zones?', answer: 'We schedule a fixed weekly call in a slot that suits both sides and send written reports so nothing waits on a meeting. New York, Toronto and Miami share Eastern time, London overlaps with New York mornings, the US West Coast is three hours behind, and Sydney gets a report waiting each morning plus an early or late call.' }
    ],
    related: ['/contact', '/about', '/services', '/for'],
    cta: { heading: 'Book an audit from anywhere', text: 'Book a Brand Growth Audit at our New York office or on a video call, and get a 90-day plan for your market.' }
  }
];

const HUB_UPDATED = { '/benchmarks': '2026-11-09', '/tools': '2026-11-11' };

const hubWithChildren = (h) => {
  const children = byKind(h.childKind);
  const items = [...children.map(card), ...(h.extraLinks || [])];
  return {
    ...h,
    published: CONTENT_PUBLISHED,
    updated: HUB_UPDATED[h.path] || CONTENT_PUBLISHED,
    children: items,
    // children are prepended as the first section so the hub always leads with its links
    sections: [{ id: 'all', h2: h.childKind === 'tool' ? 'All calculators' : h.childKind === 'glossary' ? 'All terms' : h.childKind === 'benchmark' ? 'Benchmark reports' : h.childKind === 'location' ? 'Markets we serve' : 'Industries', cards: items }, ...h.sections]
  };
};

export const CONTENT_PAGES = [...LEAF_PAGES, ...HUBS.map(hubWithChildren)];

const MAP = new Map(CONTENT_PAGES.map((p) => [p.path, p]));
export const contentPageByPath = (p) => MAP.get(p) || null;
export const contentPagesOfKind = (kind) => CONTENT_PAGES.filter((p) => p.kind === kind);

/** Short label for a link to any content page (used in related links). */
export const contentLabel = (p) => (p.term ? `${p.term.name}: ${p.term.alternateName || 'definition'}` : p.h1);
