// Blog batch 8: TikTok Shop affiliate commission.
// Plain text only. Paragraphs separated by blank lines inside template strings.

const author = {
  name: 'Gaurav Kapoor',
  title: 'Founder, Brand Scaling',
  avatar: '/team/gaurav.webp',
  credentials: '12+ years in ecommerce, $50M+ in Meta ad spend managed, 150+ published case studies',
  profileUrl: '/about',
  youtubeUrl: 'https://www.youtube.com/@gauravecom',
  instagramUrl: 'https://www.instagram.com/gauravecomm/',
  linkedinUrl: 'https://www.linkedin.com/in/gauravecom/'
};

export default [
  // 1. TikTok Shop affiliate commission
  {
    slug: 'tiktok-shop-affiliate-commission',
    title: 'TikTok Shop Affiliate Commission: How to Set Your Rate From Your Margins',
    titleTag: 'TikTok Shop Affiliate Commission Rate Guide | Brand Scaling',
    metaDescription: 'What commission to offer TikTok Shop affiliates: open vs targeted plans, Shop Ads rates, samples, and a method to set your rate from your real margins.',
    primaryKeyword: 'tiktok shop affiliate commission rate',
    secondaryKeywords: ['what commission should I offer tiktok shop affiliates', 'tiktok shop open plan vs targeted plan', 'tiktok shop open collaboration', 'tiktok shop targeted collaboration', 'tiktok shop ads commission rate', 'tiktok shop affiliate samples'],
    publishDate: '2026-11-16',
    updatedDate: '2026-11-16',
    readTime: '9 min read',
    category: 'Growth Channels',
    relatedLinks: [
      { href: '/tiktok-shop-agency', title: 'TikTok Shop Agency', text: 'Have your affiliate plans, samples, GMV Max and LIVE run on your real margins.' },
      { href: '/tools/tiktok-shop-break-even-roas-calculator', title: 'TikTok Shop Break-Even ROAS Calculator', text: 'Enter your price, costs, referral fee and commission to see profit per order.' },
      { href: '/blog/tiktok-gmv-max', title: 'TikTok GMV Max Guide', text: 'How affiliate videos feed GMV Max and how to set its ROI target.' },
      { href: '/blog/dtc-affiliate-program', title: 'How to Build a DTC Affiliate Program', text: 'Commission structures, recruiting and tracking beyond TikTok Shop.' },
      { href: '/dtc-affiliate-program-management', title: 'Affiliate Program Management', text: 'Done-for-you creator recruiting, commissions, payouts and fraud checks.' }
    ],
    author,
    directAnswer: 'There is no single right TikTok Shop affiliate commission rate. Set it from your unit economics: take your price, subtract product cost, shipping and the TikTok referral fee, and divide what is left by the price. That percentage minus the margin you want to keep is the most commission you can afford. Run a lower open plan rate for any creator, a higher targeted rate for proven creators, and a separate Shop Ads rate for affiliate videos TikTok uses in ads.',
    definitionBox: {
      term: 'TikTok Shop affiliate commission',
      definition: 'The percentage of an order\'s value that a seller pays a creator who sells the product through a TikTok video, LIVE or showcase. The seller sets the rate in Seller Center, TikTok tracks the sale, and the commission comes out of the seller\'s order settlement.'
    },
    tableOfContents: [
      { id: 'what-rate', text: 'What commission should you offer TikTok Shop affiliates?' },
      { id: 'how-calculated', text: 'How TikTok Shop affiliate commission is calculated and paid' },
      { id: 'open-vs-targeted', text: 'Open plan vs targeted plan' },
      { id: 'shop-ads-commission', text: 'Shop Ads commission for affiliate videos in ads' },
      { id: 'set-from-margins', text: 'How to set your rate from unit economics' },
      { id: 'samples', text: 'Sample and seeding costs' },
      { id: 'tiering', text: 'Tiering commission by creator performance' },
      { id: 'when-to-raise', text: 'When to raise your commission rate' },
      { id: 'faq-section', text: 'Frequently asked questions' }
    ],
    sections: [
      {
        id: 'what-rate',
        h2: 'What commission should you offer TikTok Shop affiliates?',
        content: `Offer the highest rate your margins can carry after the TikTok referral fee and the profit you need to keep, and no higher. That number is different for every product, which is why published "typical rates" disagree so much.

As of November 2026, TikTok's Seller Center help says sellers can set an affiliate commission between 1% and 80% of each order. Third-party guides disagree on what is normal. Hamster Garage, a TikTok Shop agency, reports a US average of about 13% and a typical range of 5% to 30%, with top targeted deals reaching 50%. Other guides put open rates at 10% to 15% and targeted rates at 15% to 25%. None of these figures come from TikTok and they do not agree, so treat them as context, not a target. The useful question is what your product can afford.`
      },
      {
        id: 'how-calculated',
        h2: 'How TikTok Shop affiliate commission is calculated and paid',
        content: `Commission is a percentage of what the buyer actually paid for the product, minus refunds. TikTok Shop's US Seller University gives the formula as commission equals revenue minus refunds, multiplied by the commission rate. TikTok's settlement guidance describes the base as the product price excluding tax and minus seller discounts, so shipping and tax are not part of it.`,
        list: [
          'Cancelled and refunded orders: according to TikTok, a cancelled or fully refunded order pays no commission, and a partial refund reduces it.',
          'When it is paid: TikTok\'s US help pages say commission is finalized after delivery and the after-sales period, and is typically released around 15 days after delivery. TikTok notes it can take up to 31 days when settlement, disputes or returns cause a delay.',
          'Who pays: it comes out of your order settlement.',
          'Rate changes: TikTok says creators already promoting a product keep their rate for 30 days after you cut it, while an increase applies straight away. Plan cuts a month ahead.'
        ],
        subsections: [
          {
            h3: 'How commission stacks with the referral fee',
            content: `The referral fee is TikTok's own platform fee and the affiliate commission is what you pay the creator. They are separate, both are percentages of the sale, and both come out of the same order. So a creator order costs you both, on top of product cost and shipping. TikTok's US fee table listed a 6% referral fee for most categories from April 2024, and some 2026 seller guides report a rise to 8% that we could not confirm on an official page. Use the rate Seller Center shows for your category.`
          }
        ]
      },
      {
        id: 'open-vs-targeted',
        h2: 'Open plan vs targeted plan',
        content: `An open plan (TikTok now calls it an open collaboration) is a public rate any eligible creator can pick up. A targeted plan (target collaboration) is a private offer you send to specific creators, usually at a higher rate. TikTok's help center says that when a creator qualifies for both on the same product, the target collaboration rate takes priority, which is why TikTok advises setting it higher.`,
        table: {
          headers: ['', 'Open collaboration', 'Target collaboration'],
          rows: [
            ['Who sees it', 'Any eligible creator browsing the marketplace', 'Only the creators you invite'],
            ['Typical use', 'Your base rate for broad reach and discovery', 'Higher rate for proven or strategic creators'],
            ['Rate setting', 'One rate per product for everyone', 'Set per offer, can differ by creator'],
            ['Priority', 'Used when no targeted offer applies', 'Overrides the open rate for that creator'],
          ]
        },
        subsections: [
          {
            h3: 'A sensible starting split',
            content: `Set the open rate at a level you are happy to pay on every creator sale and keep headroom above it. If your maximum affordable rate is 30%, an open rate of 15% leaves room to offer 20% to 25% to creators who prove they can sell.`
          }
        ]
      },
      {
        id: 'shop-ads-commission',
        h2: 'Shop Ads commission for affiliate videos in ads',
        content: `TikTok lets you set a separate, usually lower, commission for orders that come from ads using a creator's video. TikTok's help center describes it as a Shop Ads commission rate you switch on inside an open collaboration. If you do not set one, the standard rate applies to ad orders too. Orders from ads that do not use affiliate posts pay no affiliate commission.

This matters because GMV Max automatically uses authorized affiliate videos. Without a Shop Ads rate, you pay full commission on sales you also paid ad spend to win.

TikTok's help center has said the Shop Ads rate in an open collaboration cannot go below 30% of the standard rate (so a 10% standard rate means at least 3%), in all regions except Mexico and Brazil. That article is more than a year old and some third-party guides quote a one-third minimum, so check the current floor in Seller Center.`
      },
      {
        id: 'set-from-margins',
        h2: 'How to set your rate from unit economics',
        content: `Use one formula: maximum commission % = (profit before ads and commission / price) minus your target margin. Profit before ads and commission is the price minus product cost, shipping and the referral fee. Target margin is the share of the price you want to keep before any ad spend.

Worked example, using the defaults in our TikTok Shop break-even ROAS calculator: a $35 price, $8 product cost, $6 shipping and an 8% example referral fee. The referral fee is $2.80, so profit before ads and commission is $35 minus $8, $6 and $2.80, which is $18.20, or 52% of the price.

If you want to keep at least 20% of the price as profit before ads, the most you can offer is 52% minus 20%, which is 32%. If you want to keep 25%, the ceiling is 27%. For simplicity the example assumes commission is paid on the full $35 with no discounts.

The table shows what each rate leaves you per creator order, and the break-even ROAS for any ads layered on top, which is the price divided by profit per order.`,
        table: {
          headers: ['Commission rate', 'Commission per order', 'Profit per order before ads', 'Margin before ads', 'Break-even ROAS for ads'],
          rows: [
            ['0% (no affiliate)', '$0.00', '$18.20', '52.0%', '1.92x'],
            ['10%', '$3.50', '$14.70', '42.0%', '2.38x'],
            ['15%', '$5.25', '$12.95', '37.0%', '2.70x'],
            ['20%', '$7.00', '$11.20', '32.0%', '3.13x'],
            ['25%', '$8.75', '$9.45', '27.0%', '3.70x'],
            ['30%', '$10.50', '$7.70', '22.0%', '4.55x']
          ]
        },
        subsections: [
          {
            h3: 'Read the break-even column carefully',
            content: `An organic creator order at 30% still makes $7.70. But when that same video runs in GMV Max at the full 30%, ads have to return at least 4.55x just to break even. That is the case for a lower Shop Ads rate: at 10% on ad orders, the break-even falls to 2.38x. Run your own numbers in the calculator with your real referral fee.`
          }
        ]
      },
      {
        id: 'samples',
        h2: 'Sample and seeding costs',
        content: `Samples are part of your commission budget, not a separate marketing line. TikTok's Seller University says that for free samples the seller pays for the product, shipping and tax, and creators are expected to post within 14 days of receiving it. TikTok also offers refundable samples, where the creator buys the product and is refunded once their content drives a set number of sales.

In the example above, one free sample costs about $14 in product and shipping, roughly the profit from one creator order at a 15% rate. Illustrative maths: 20 samples cost $280, and the few creators whose videos sell have to cover all of it.`,
        list: [
          'Approve free samples for creators whose past sales and content fit your product, not every request.',
          'Use refundable samples for unproven creators so the sample pays for itself only when it sells.'
        ]
      },
      {
        id: 'tiering',
        h2: 'Tiering commission by creator performance',
        content: `Tie higher rates to results, not follower counts. Tiers keep costs predictable and give creators a reason to keep posting.`,
        list: [
          'Base tier: your open collaboration rate, available to everyone, set well below your maximum.',
          'Proven tier: a targeted rate a few points higher for creators who have driven sales of your product, reviewed every month.',
          'Top tier: your highest targeted rate, close to your ceiling, for the small group that drives most of your affiliate revenue.',
          'Ad tier: a Shop Ads rate below the standard rate, so videos that GMV Max scales do not carry full commission on top of ad spend.'
        ],
        subsections: [
          {
            h3: 'Avoid creeping toward the ceiling',
            content: `Every tier must sit under your maximum affordable rate. If top creators want more, offer early access, exclusive bundles or flat fees for specific videos instead.`
          }
        ]
      },
      {
        id: 'when-to-raise',
        h2: 'When to raise your commission rate',
        content: `Raise your rate when the issue is creator interest and your margins have room, not when the product itself is not selling. A higher rate can attract creators but cannot fix a weak listing, price or content.`,
        list: [
          'Raise it when few creators request samples or add the product, and your rate is well below your ceiling.',
          'Raise it for a launch, knowing a later cut takes 30 days to apply.',
          'Do not raise it if creators are posting but videos do not convert. Fix the offer, the listing or the creator brief first.',
          'Do not raise it if ads are already running on affiliate videos at the standard rate. Set a Shop Ads rate first.'
        ],
        subsections: [
          {
            h3: 'Honest caveats',
            content: `No rate guarantees creator interest. TikTok's rules and fees change often and differ by country, so check Seller Center before each change. Our TikTok Shop agency team can set and run your affiliate plans, starting with a Brand Growth Audit.`
          }
        ]
      }
    ],
    faqs: [
      { question: 'What commission should I offer TikTok Shop affiliates?', answer: 'Work it out from your margins. Take price minus product cost, shipping and the referral fee, divide by price, then subtract the margin you want to keep. On a $35 product with $8 cost, $6 shipping and an 8% referral fee, that is 52% minus your target margin, so 32% at a 20% target.' },
      { question: 'What is the difference between an open plan and a targeted plan on TikTok Shop?', answer: 'An open plan, or open collaboration, is a public rate any eligible creator can use. A targeted plan, or target collaboration, is a private offer to chosen creators. TikTok says the target rate takes priority when a creator qualifies for both, so set it higher than your open rate.' },
      { question: 'How is TikTok Shop affiliate commission calculated?', answer: 'According to TikTok\'s Seller University, commission equals revenue minus refunds, multiplied by the rate. The base is the price the buyer paid excluding tax and after seller discounts. Cancelled or fully refunded orders pay no commission.' },
      { question: 'When are TikTok Shop affiliate commissions paid?', answer: 'TikTok\'s US help pages say commission is finalized after delivery and the after-sales period, typically released around 15 days after delivery, and can take up to 31 days if settlement, disputes or returns cause delays. It is deducted from the seller\'s order settlement.' },
      { question: 'What is the Shop Ads commission rate on TikTok Shop?', answer: 'It is a separate commission for orders from ads that use a creator\'s video, including GMV Max. If you do not set one, the standard rate applies. TikTok\'s help center has said it cannot be below 30% of the standard rate in most regions, so check Seller Center for the current minimum.' }
    ]
  }
];
