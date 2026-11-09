// Blog batch 4: Black Friday discount strategy, ecommerce profit margin.
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
  // 1. Black Friday discount strategy
  {
    slug: 'black-friday-discount-strategy',
    title: 'Black Friday Discount Strategy: How Deep Can a DTC Brand Afford to Go?',
    titleTag: 'Black Friday Discount Strategy for DTC | Brand Scaling',
    metaDescription: 'A Black Friday discount strategy built on contribution margin: how deep you can go, break-even ROAS after the offer and better options than 40% off.',
    primaryKeyword: 'black friday discount strategy',
    secondaryKeywords: ['how much to discount for black friday', 'black friday discount margin', 'break-even roas after discount', 'bfcm offer ideas', 'black friday bundles', 'cyber monday discount strategy'],
    publishDate: '2026-11-09',
    updatedDate: '2026-11-09',
    readTime: '9 min read',
    category: 'Strategy & Scaling',
    relatedLinks: [
      { href: '/tools/discount-break-even-calculator', title: 'Discount Break-Even Calculator', text: 'Enter your price, costs and discount to see margin and break-even ROAS.' },
      { href: '/blog/bfcm-meta-ads-playbook', title: 'BFCM Meta Ads Playbook', text: 'Campaign structure, timeline and budget split for the peak week.' },
      { href: '/bfcm-ads-management', title: 'BFCM Ads Management', text: 'Have us plan the offer, creative and Meta campaigns for Q4.' },
      { href: '/blog/q4-ecommerce-ads-strategy', title: 'Q4 Ecommerce Ads Strategy', text: 'How to prepare the whole quarter around the peak weekend.' }
    ],
    author,
    directAnswer: 'A Black Friday discount strategy should start from contribution margin, not from what competitors are offering. Work out profit per order before and after the discount, then how many extra orders and what ROAS you need to stay ahead. Often a moderate discount, a bundle or a gift with purchase earns more than a deep percentage off.',
    definitionBox: {
      term: 'Black Friday discount strategy',
      definition: 'The plan for which offer a brand runs over Black Friday and Cyber Monday, how deep it goes, who sees it first and when it ends, set so that the extra orders more than replace the margin the discount gives away.'
    },
    tableOfContents: [
      { id: 'start-with-margin', text: 'Why your discount starts with margin' },
      { id: 'discount-margin-math', text: 'The contribution margin math behind a discount' },
      { id: 'worked-example', text: 'Worked example: 0 to 40 percent off an $80 order' },
      { id: 'how-deep-to-discount', text: 'How deep a discount you can actually afford' },
      { id: 'alternatives-to-deep-discounts', text: 'Alternatives to deep percentage discounts' },
      { id: 'meta-cpa-roas-targets', text: 'How the discount changes CPA and ROAS targets on Meta' },
      { id: 'email-sms-first', text: 'Send the offer to email and SMS first' },
      { id: 'after-cyber-monday', text: 'What to do after Cyber Monday' },
      { id: 'faq-section', text: 'Frequently asked questions' }
    ],
    sections: [
      {
        id: 'start-with-margin',
        h2: 'Why your Black Friday discount strategy starts with margin',
        content: `Most founders pick a Black Friday discount strategy by looking at what everyone else is doing. A competitor runs 30 percent off, so 30 percent feels like the minimum, and 40 percent feels like the way to win. The problem is that a discount does not come out of revenue in a neat proportion. It comes straight out of the money left after product, shipping and fees, which is a much smaller number. A 25 percent discount can remove close to half of the profit on an order.

That is why the right question is not "what discount will people respond to?" but "how much margin do I have, and how many extra orders do I need to replace what the discount removes?" Once you can answer that for your own products, the choice between 15, 25 and 40 percent stops being a guess.

This guide covers the offer itself: the math, the alternatives and how the offer changes your ad targets. For campaign structure, launch timing and the creative checklist for the peak week, use our BFCM Meta ads playbook. In 2026, Black Friday falls on November 27 and Cyber Monday on November 30, so there is still time to run these numbers before the offer is locked.`
      },
      {
        id: 'discount-margin-math',
        h2: 'The contribution margin math behind a discount',
        content: `Contribution margin per order is what is left from an order after the costs that only exist because the order happened: the product, getting it to the customer and the payment fee. Ad cost is left out here on purpose, because the point is to find out how much you can afford to pay for each order. Five formulas cover everything you need.`,
        list: [
          'Margin before discount = price minus COGS minus shipping minus (price times the payment fee rate).',
          'Discounted price = price times (1 minus the discount rate).',
          'Margin after discount = discounted price minus COGS minus shipping minus (discounted price times the payment fee rate).',
          'Orders needed for the same profit = margin before discount divided by margin after discount.',
          'Break-even ROAS after discount = discounted price divided by margin after discount.'
        ],
        subsections: [
          {
            h3: 'Why the fee moves but COGS does not',
            content: `Payment processing fees are a percentage of what the customer pays, so they shrink a little when the price drops. COGS and shipping do not. You still buy the same product and send the same parcel whether the customer paid full price or 40 percent less. That fixed chunk of cost is why margin falls much faster than price as the discount gets deeper.`
          }
        ]
      },
      {
        id: 'worked-example',
        h2: 'Worked example: 0 to 40 percent off an $80 order',
        content: `This is an example, not a benchmark. It uses an $80 order with $24 COGS, $9 shipping and fulfilment and a 3 percent payment fee. At full price, the fee is $2.40, so the contribution margin is $44.60 per order. Here is what happens at three common discount levels.`,
        table: {
          headers: ['Discount (example)', 'Price paid', 'Contribution margin per order', 'Break-even ROAS', 'Orders needed for same profit'],
          rows: [
            ['0 percent', '$80.00', '$44.60', '1.79x', '1.00'],
            ['15 percent', '$68.00', '$32.96', '2.06x', '1.35'],
            ['25 percent', '$60.00', '$25.20', '2.38x', '1.77'],
            ['40 percent', '$48.00', '$13.56', '3.54x', '3.29']
          ]
        },
        list: [
          'At 15 percent off, the price falls by 15 percent but margin per order falls by about 26 percent, so you need 1.35 orders for every one you would have sold at full price.',
          'At 25 percent off, you need 1.77 times the orders to make the same contribution profit, before any ad cost.',
          'At 40 percent off, you need 3.29 times the orders, and the ROAS needed just to break even rises from 1.79x to 3.54x.'
        ]
      },
      {
        id: 'how-deep-to-discount',
        h2: 'How deep a discount you can actually afford',
        content: `Read the last column of the table as a demand test. A 40 percent discount only pays off if the offer more than triples order volume compared with what the same traffic would buy at full price. Some brands do see that kind of lift on hero products with strong pent-up demand, but most should not plan around it. A 15 to 25 percent offer needs a far smaller lift to work, which is a much safer bet when ad costs are also rising.

Run the numbers per product, not per store. A product with high COGS and heavy shipping can lose money at a discount that is comfortable on a lighter, higher-margin product. Many brands end up with a mix: a strong offer on the products where margin can carry it and a smaller offer, or a bundle, on the rest.

Also count the orders you would have had anyway. Customers who were going to buy in late November at full price will happily take the discount, and that lost margin is real even though no report shows it. The deeper the offer, the more of those orders you pay away. If you want to check your own numbers quickly, our discount break-even calculator runs the same formulas for any price, cost and discount.`
      },
      {
        id: 'alternatives-to-deep-discounts',
        h2: 'Alternatives to deep percentage discounts',
        content: `A strong Black Friday offer does not have to be a big number off everything. These options often feel just as generous to the customer while protecting more margin, because they raise order value or use costs you control.`,
        subsections: [
          {
            h3: 'Bundles',
            content: `Bundle two or three products that are often bought together at a price below buying them separately. The customer gets a clear saving, while your shipping and fee cost is spread across a bigger order, so margin per order often ends up higher than a straight percentage off a single item.`
          },
          {
            h3: 'Gift with purchase',
            content: `A free item added to the order costs you its COGS, not its retail price. A sample size, accessory or slow-moving product can carry a high perceived value at a low real cost. Make the gift visible in the creative and on the product page, not just at checkout.`
          },
          {
            h3: 'Tiered spend thresholds',
            content: `Offers such as a smaller saving above one spend level and a bigger saving above a higher one push customers to add items. Set the tiers just above your current average order value so the discount is earned by a bigger basket.`
          },
          {
            h3: 'Free shipping thresholds',
            content: `If shipping is a large cost line, a free shipping threshold set above your normal order value both removes a common checkout objection and lifts basket size. It can stack with a modest percentage offer.`
          },
          {
            h3: 'Early access for subscribers',
            content: `Give email and SMS subscribers the offer a day or two before it goes public. It rewards the list, grows sign-ups in the weeks before and moves orders to your cheapest channel. One of our published results, $112,866 in 13 days on $28,391 of spend, came from a brand that launched early BFCM offers.`
          }
        ]
      },
      {
        id: 'meta-cpa-roas-targets',
        h2: 'How the discount changes CPA and ROAS targets on Meta',
        content: `Your contribution margin per order is the most you can pay to acquire that order and break even. In the example, that is $44.60 at full price but only $25.20 at 25 percent off. If your normal cost per purchase on Meta is $30, it is comfortably profitable at full price and loses money during the sale unless the offer lowers it.

That can happen, because a good offer usually lifts conversion rate. In this example, getting a $30 CPA down to $25.20 at the same cost per click needs a conversion rate about 19 percent higher just to break even. Ad costs also tend to rise in late November as more brands compete for the same placements, so that lift has to cover both the thinner margin and pricier traffic.

So before the sale starts, reset every target in the account to the discounted numbers. Update cost caps and bid caps to the new break-even CPA minus the profit you want per order. Change the ROAS you judge campaigns against, because 2.0x might be profitable at full price in this example and unprofitable at 25 percent off. Our guides to what ROAS is and what a good ROAS for ecommerce looks like explain how to set those targets. The budget split and campaign structure for the week itself are in the BFCM Meta ads playbook.`
      },
      {
        id: 'email-sms-first',
        h2: 'Send the offer to email and SMS first',
        content: `The cheapest Black Friday orders come from people who already know you. Email and SMS reach them without paying for the impression, which matters most in the one week when paid traffic is most expensive. Plan the owned channel sequence before you plan the ads.

A typical sequence starts with a teaser and a sign-up push in the weeks before, then early access for subscribers, the public launch, reminders over the weekend, a Cyber Monday message and a clear last call. Segment it: past buyers can get cross-sell bundles rather than the acquisition offer on what they already own, and engaged non-buyers get the main offer with the strongest proof.

Run paid ads mostly to new customers and to warm visitors who never gave you an email or phone number. Exclude recent purchasers from discount ads where you can, so you are not paying to show a discount to people who would open the email anyway.`
      },
      {
        id: 'after-cyber-monday',
        h2: 'What to do after Cyber Monday',
        content: `End the offer when you said it would end. Extending a sale again and again teaches customers that the deadline is not real, which weakens every future promotion. If you want a softer landing, move to a smaller offer such as a gift with purchase for the shipping cutoff period rather than keeping the full discount live.

Then reset the ad account. Return cost caps, bid caps and ROAS targets to full-price margins, swap discount creative for evergreen and gifting creative, and expect conversion rate to drop for a few days as shoppers pause. The new customers you acquired are the real return on the sale, so move them into a post-purchase flow with product education, a review request and a timed second-purchase offer that is smaller than the Black Friday one.

Finally, write down the real numbers while they are fresh: orders, AOV, contribution margin after the discount, ad spend and how many buyers were new. That record makes next year's discount decision a calculation instead of a guess. If you would like us to plan the offer and run the campaigns, see our BFCM ads management service.`
      }
    ],
    faqs: [
      { question: 'How much should a DTC brand discount for Black Friday?', answer: 'Work it out from your contribution margin. Calculate profit per order at full price and at each discount you are considering, then how many extra orders each one needs to earn the same profit. In our $80 example, 25 percent off needs 1.77 times the orders and 40 percent off needs 3.29 times. Choose the deepest offer your realistic demand can carry.' },
      { question: 'Is 40 percent off ever worth it for Black Friday?', answer: 'It can be when margins are very high or when the goal is clearing stock or acquiring customers with strong repeat purchase rates. For most products with meaningful COGS and shipping, a 40 percent discount needs several times the normal order volume just to match full-price profit, and the break-even ROAS rises sharply. Test the math first.' },
      { question: 'How do I calculate break-even ROAS after a discount?', answer: 'Divide the discounted price by the contribution margin after the discount. Contribution margin is the discounted price minus COGS, shipping and the payment fee on the discounted price. In the example in this guide, an $80 order at 25 percent off sells for $60, leaves $25.20 of margin and needs a 2.38x ROAS to break even.' },
      { question: 'What are good Black Friday offers besides a percentage discount?', answer: 'Bundles, a gift with purchase, tiered savings based on spend, a free shipping threshold above your average order value and early access for email and SMS subscribers. These often feel generous to customers while protecting more margin, because they raise order value or cost you the product cost of a gift rather than a cut in price.' },
      { question: 'Should I change my Meta cost caps during Black Friday?', answer: 'Yes. A discount lowers the most you can pay for an order, so cost caps, bid caps and ROAS targets set for full-price margins will let campaigns overspend during the sale. Reset them to the discounted break-even numbers before launch, then set them back to full-price targets as soon as the offer ends after Cyber Monday.' },
      { question: 'When should a Black Friday sale end?', answer: 'On the date you announced, usually the end of Cyber Monday, which is November 30 in 2026. Repeated extensions train customers to ignore deadlines. If you want to keep some momentum into December, switch to a smaller offer such as a gift with purchase and focus messaging on gifting and shipping cutoffs.' }
    ]
  },

  // 2. Ecommerce profit margin
  {
    slug: 'ecommerce-profit-margin',
    title: 'Ecommerce Profit Margin: Gross, Contribution and Net Margin per Order',
    titleTag: 'Ecommerce Profit Margin per Order | Brand Scaling',
    metaDescription: 'Ecommerce profit margin explained per order: gross, contribution and net margin, every cost line, a worked example and how margin sets break-even ROAS.',
    primaryKeyword: 'ecommerce profit margin',
    secondaryKeywords: ['dtc profit margin', 'contribution margin per order', 'gross margin vs net margin', 'ecommerce net margin', 'how to increase ecommerce profit margin', 'profit per order'],
    publishDate: '2026-11-09',
    updatedDate: '2026-11-09',
    readTime: '9 min read',
    category: 'Metrics & Unit Economics',
    relatedLinks: [
      { href: '/tools/profit-margin-calculator', title: 'Profit Margin Calculator', text: 'Enter price and costs to see gross, contribution and net margin per order.' },
      { href: '/glossary/contribution-margin', title: 'What Is Contribution Margin?', text: 'The margin that tells you what each order can afford to spend on ads.' },
      { href: '/tools/break-even-roas-calculator', title: 'Break-Even ROAS Calculator', text: 'Turn your margin into the ROAS your ads need to make money.' },
      { href: '/cases/185936-21-days-56-profit-margin-scaled-dropshipping-store-beyond', title: '$185,936 in 21 Days at 56% Margin', text: 'A store scaled while keeping profit margin in view.' }
    ],
    author,
    directAnswer: 'Ecommerce profit margin is the share of each order you keep after costs. Gross margin subtracts only product cost, contribution margin also subtracts shipping, fulfilment and payment fees, and net margin per order then subtracts ad cost, returns and discounts. Contribution margin is the one that sets your break-even CPA and ROAS.',
    definitionBox: {
      term: 'Ecommerce profit margin',
      definition: 'The percentage of revenue a store keeps as profit. For a DTC brand it is most useful per order, measured at three levels: gross margin (after product cost), contribution margin (after all variable costs of fulfilling the order) and net margin (after ad cost, returns and discounts too).'
    },
    tableOfContents: [
      { id: 'why-margin-per-order', text: 'Why measure ecommerce profit margin per order' },
      { id: 'gross-contribution-net', text: 'Gross vs contribution vs net margin' },
      { id: 'cost-lines', text: 'The cost lines that eat your margin' },
      { id: 'worked-example', text: 'Worked example: margin on a $70 order' },
      { id: 'margin-and-break-even-roas', text: 'How margin sets your break-even ROAS' },
      { id: 'how-to-raise-margin', text: 'How to raise your margin' },
      { id: 'margins-in-our-cases', text: 'Profit margins in our published cases' },
      { id: 'track-margin-weekly', text: 'Track margin weekly, not yearly' },
      { id: 'faq-section', text: 'Frequently asked questions' }
    ],
    sections: [
      {
        id: 'why-margin-per-order',
        h2: 'Why measure ecommerce profit margin per order',
        content: `Ecommerce profit margin is usually discussed as one number on a yearly profit and loss statement. That is useful for your accountant and nearly useless for running ads. By the time the annual figure tells you something went wrong, you have spent months buying orders that lost money.

For a DTC brand, the more useful view is margin per order. Every order carries the same set of costs: the product, getting it to the customer, the payment fee, the ad spend it took to win it and a share of returns and discounts. If you know those numbers for a typical order, you know what you can afford to pay for a customer, which campaigns are really profitable and which levers will move profit the most.

This guide breaks margin into three levels, walks through each cost line, works through a full example and shows how margin turns into the break-even ROAS your ads have to beat. It does not quote industry averages, because margins vary so much by product, price and channel that an average tells you very little about your own store.`
      },
      {
        id: 'gross-contribution-net',
        h2: 'Gross vs contribution vs net margin',
        content: `The three margins answer different questions. Gross margin tells you whether the product is priced well against what it costs to make. Contribution margin tells you how much each order leaves to pay for marketing and overhead. Net margin per order tells you what you actually keep once marketing, returns and discounts are paid.`,
        table: {
          headers: ['Margin', 'Formula per order', 'What it tells you'],
          rows: [
            ['Gross margin', '(Price minus COGS) divided by price', 'Whether pricing covers product cost with room to spare'],
            ['Contribution margin (before ads)', 'Price minus COGS, shipping and fulfilment, and payment fees', 'The most you can spend to acquire the order and break even'],
            ['Net margin per order', 'Contribution margin minus ad cost per order, returns and discounts, divided by price', 'What each order really earns before fixed overhead']
          ]
        },
        list: [
          'Fixed overhead such as salaries, software and rent sits below all three. It is paid from the total net profit of all orders, not from any single one.',
          'Some teams call the figure after ad cost "contribution margin after marketing". The label matters less than using the same definition every week.'
        ]
      },
      {
        id: 'cost-lines',
        h2: 'The cost lines that eat your margin',
        content: `Most margin mistakes come from leaving a cost out, not from bad arithmetic. List every line below for your top products, using real invoices and platform reports rather than estimates.`,
        list: [
          'COGS: the landed cost of the product, including manufacturing, packaging, inbound freight and duties.',
          'Shipping and fulfilment: postage, pick and pack fees, packaging materials and any free shipping you absorb.',
          'Payment fees: the percentage and fixed fee your payment processor and any buy now, pay later provider charges per order.',
          'Ad cost per order: total ad spend divided by orders, which is your blended cost per acquisition.',
          'Returns: refunded revenue, return shipping and any stock you cannot resell, spread across all orders.',
          'Discounts: every code, sale price and automatic offer, which come straight off the price before any cost is covered.'
        ]
      },
      {
        id: 'worked-example',
        h2: 'Worked example: margin on a $70 order',
        content: `This is an example, not a benchmark. It uses a $70 order with $21 COGS, $8 shipping and fulfilment, a 3 percent payment fee, a $25 ad cost per order and a 6 percent return rate. To keep it simple, returns are treated as full refunds, so the expected return cost per order is 6 percent of $70, or $4.20. There is no discount in this example.`,
        table: {
          headers: ['Line (example)', 'Per order', 'Running total'],
          rows: [
            ['Price', '$70.00', '$70.00'],
            ['COGS', 'minus $21.00', '$49.00 (gross margin 70.0%)'],
            ['Shipping and fulfilment', 'minus $8.00', '$41.00'],
            ['Payment fee (3% of $70)', 'minus $2.10', '$38.90 contribution before ads'],
            ['Ad cost per order (CPA)', 'minus $25.00', '$13.90'],
            ['Returns (6% of $70)', 'minus $4.20', '$9.70 net profit per order'],
            ['Net margin', '$9.70 divided by $70', '13.9%']
          ]
        },
        subsections: [
          {
            h3: 'What the example shows',
            content: `A 70 percent gross margin looks healthy, yet the order keeps only $9.70, a 13.9 percent net margin. Ad cost is by far the largest line after COGS. That is typical of paid-acquisition DTC brands and is why the ad cost per order deserves as much attention as product cost.`
          }
        ]
      },
      {
        id: 'margin-and-break-even-roas',
        h2: 'How margin sets your break-even ROAS',
        content: `Your contribution margin is the most you can pay in ads for an order before it loses money. Divide price by that margin and you get break-even ROAS: the return on ad spend at which ads exactly pay for themselves.

In the example, contribution before ads is $38.90, so break-even ROAS is $70 divided by $38.90, or 1.80x. If you also take the $4.20 expected return cost out first, the margin available for ads is $34.70 and break-even ROAS rises to 2.02x. The actual ROAS at a $25 CPA is $70 divided by $25, or 2.80x, which is why the order is profitable.

The lower your margin, the higher the ROAS your ads must reach. This is why two brands can run the same ROAS and get very different results: one is profitable and the other loses money on every order. Our break-even ROAS calculator does this for your own numbers, and our guides to what ROAS is and what a good ROAS for ecommerce looks like explain how to set a target above break-even.`
      },
      {
        id: 'how-to-raise-margin',
        h2: 'How to raise your margin',
        content: `There are only a few ways to make each order more profitable: earn more per order, spend less to deliver it, spend less to acquire it or earn more from the customer later. These are the levers we work on most often with partner brands.`,
        subsections: [
          {
            h3: 'Raise average order value',
            content: `Shipping, fulfilment and a large part of acquisition cost are roughly fixed per order, so a bigger basket spreads them further. Post-purchase upsells, cart add-ons and tiered offers all lift AOV without raising your cost to acquire the order.`
          },
          {
            h3: 'Use bundles',
            content: `Bundles of products that are often bought together raise order value and let you offer a clear saving without discounting single items. They also give you a better offer for paid traffic than a percentage code.`
          },
          {
            h3: 'Fix shipping costs',
            content: `In the example, $8 of shipping is 11.4 percent of a $70 order. On a $100 order with the same shipping cost, it would be 8 percent. Set a free shipping threshold above your current AOV, renegotiate carrier rates and check packaging size and weight.`
          },
          {
            h3: 'Improve conversion rate',
            content: `CRO lowers ad cost per order without touching the budget. If the same traffic converts better, every order costs less to acquire. Faster pages, clearer product pages and a simpler checkout are usually where the gains are.`
          },
          {
            h3: 'Build retention',
            content: `A repeat order through email or SMS carries almost no ad cost, so its net margin is close to its contribution margin. Klaviyo flows for replenishment, cross-sell and win-back raise lifetime margin even when first-order margin is thin.`
          }
        ]
      },
      {
        id: 'margins-in-our-cases',
        h2: 'Profit margins in our published cases',
        content: `Instead of quoting averages, here are three real results from our published case studies where the brand reported its profit margin. Each is a single account and a specific period, and each brand defines margin its own way, so treat them as examples of what is possible, not as targets.

A dropshipping store generated $185,936 in 21 days at a 56 percent profit margin, covered in our case study on scaling that store. Another brand did $148K in one day and a $294K month while ending at a 37 percent net margin, in our case study on its best day. A third spent $26,594 to generate $99,576 in 5 days at a 67 percent profit margin, in our five-day case study.

What these share is that margin was tracked during the scale, not checked afterwards. Spend went up on products and offers where the numbers held, which is the habit this guide is built around. You can find all three on our case studies page.`
      },
      {
        id: 'track-margin-weekly',
        h2: 'Track margin weekly, not yearly',
        content: `Build a simple weekly sheet with revenue, orders, COGS, shipping, fees, ad spend, refunds and discounts. Work out contribution margin per order and net profit per order each week, alongside blended ROAS or MER. When net profit per order falls, the sheet shows you which line moved.

Review it per product as well as per store, because a bestseller with thin margins can hide behind a healthy store average. Recheck COGS and shipping whenever a supplier or carrier changes prices, and recheck ad cost per order whenever you raise budget. Our profit margin calculator gives you the per-order figures, and the contribution margin glossary entry explains the definition in more detail.`
      }
    ],
    faqs: [
      { question: 'What is a good ecommerce profit margin?', answer: 'There is no single good number, because margin depends on product, price, channel and how much you spend on ads. A better test is whether your contribution margin leaves enough room to acquire customers at your current cost per order and still keep a net profit. Work out your own figures per order instead of comparing with averages.' },
      { question: 'What is the difference between gross margin and contribution margin?', answer: 'Gross margin subtracts only the cost of goods from the price. Contribution margin also subtracts the other variable costs of each order, such as shipping, fulfilment and payment fees. Contribution margin is more useful for ads because it shows the most you can spend to acquire an order before it loses money.' },
      { question: 'How do I calculate net profit margin per order?', answer: 'Start with price, subtract COGS, shipping and fulfilment and payment fees to get contribution margin, then subtract ad cost per order, returns and discounts. Divide what is left by the price. In the $70 example in this guide, net profit is $9.70 per order, a 13.9 percent net margin before fixed overhead.' },
      { question: 'Should returns be included in profit margin?', answer: 'Yes. Returns cost you refunded revenue, return shipping and sometimes stock you cannot resell. Spread the expected cost across all orders using your return rate. A simple method treats returns as full refunds, so a 6 percent return rate on a $70 order adds $4.20 of cost to every order.' },
      { question: 'How does profit margin affect break-even ROAS?', answer: 'Break-even ROAS equals price divided by contribution margin. A lower margin means each order can afford less ad spend, so ads must return more revenue per dollar to break even. In the example in this guide, a $38.90 contribution margin on a $70 order gives a 1.80x break-even ROAS.' },
      { question: 'What is the fastest way to improve ecommerce margin?', answer: 'It depends on which cost line is largest. For most paid-acquisition DTC brands, ad cost per order is the biggest lever, so improving conversion rate and creative often moves margin fastest. Raising AOV with bundles and upsells, setting a smarter free shipping threshold and building repeat purchases through email and SMS follow close behind.' }
    ]
  }
];
