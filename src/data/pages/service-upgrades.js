// Additional copy for the seven original service pages. Each entry adds a quick answer,
// 2 to 4 new sections that do not repeat what the page already says, and (only where the
// page had fewer than 5 FAQs) up to 2 new FAQs. Plain text only; paragraphs separated by
// blank lines. Optional `links` on a section are internal pages the section points to.
export default {
  '/services': {
    quickAnswer: {
      question: 'What are DTC performance marketing services?',
      answer: 'DTC performance marketing services are the paid acquisition, creative, store and retention work a direct-to-consumer brand buys to grow revenue at a profitable cost per customer. At Brand Scaling that means Meta, TikTok and Google ads, direct-response creative, Shopify CRO and Klaviyo retention, all reported on blended MER and new-customer CAC.'
    },
    sections: [
      {
        id: 'who-these-services-are-for',
        h2: 'Who our DTC performance marketing services are for',
        content: `Our DTC performance marketing services are built for brands that already sell. Most partners do somewhere between $20K and $2M+ a month in revenue, have product-market fit, and spend at least $10K to $20K a month on paid ads or are ready to. We work with brands in the US, the UK, Canada and Australia, mostly on Shopify.

Below that level the problem is usually finding a product or an offer that sells, and an agency retainer is rarely the best use of the money. Above it, the problem shifts to keeping efficiency as spend grows: more creative, a store that converts colder traffic, and retention that lifts lifetime value so the ad account can pay more for each new customer. That second problem is the one these services are designed for.`,
        table: {
          headers: ['Where the brand is', 'What usually comes first'],
          rows: [
            ['$20K to $100K a month, one main channel', 'Tracking and Conversions API, offer and product page, a steady creative pipeline on Meta'],
            ['$100K to $500K a month, efficiency slipping as spend rises', 'Creative volume on the hook and angle matrix, CRO, AOV through bundles and post-purchase upsells'],
            ['$500K+ a month, channel concentration risk', 'TikTok and Google added to Meta, retention flows, new markets, blended MER reporting']
          ]
        }
      },
      {
        id: 'specialist-services',
        h2: 'Specialist services for specific problems',
        content: `The six services above cover the core growth system. Some brands come to us with one specific problem instead, so we also run focused engagements for it. Each one has its own page with the scope, the process and what it needs from you.

These are not separate products bolted on. They use the same team, the same creative engine and the same reporting, which is why a brand can start with one and add others later without changing agencies.`,
        list: [
          'TikTok Shop management: listings, creator affiliates, samples and GMV Max.',
          'Google Shopping and Performance Max: feed, campaign structure and search intent capture.',
          'Conversion rate optimisation: a testing program for product pages, offers and checkout.',
          'Klaviyo email and SMS: welcome, abandoned cart, post-purchase and win-back flows.',
          'Retention marketing: repeat purchase rate and lifetime value as a planned program.',
          'Creative strategy: research, angles and briefs for brands that produce in-house.',
          'Meta ads audit: a one-off review of structure, tracking, creative and margins.',
          'BFCM ads management: Q4 offers, creative and budget pacing for the peak weeks.',
          'Affiliate and influencer programs: creator recruitment, commissions and paid amplification.'
        ],
        links: [
          { href: '/tiktok-shop-agency', text: 'TikTok Shop agency' },
          { href: '/google-shopping-ads-agency', text: 'Google Shopping ads agency' },
          { href: '/cro-agency', text: 'Ecommerce CRO agency' },
          { href: '/klaviyo-email-sms-agency', text: 'Klaviyo email and SMS agency' },
          { href: '/retention-marketing-agency', text: 'Retention marketing agency' },
          { href: '/creative-strategy-agency', text: 'Creative strategy agency' },
          { href: '/meta-ads-audit', text: 'Meta ads audit' },
          { href: '/bfcm-ads-management', text: 'BFCM ads management' },
          { href: '/dtc-affiliate-program-management', text: 'DTC affiliate program management' },
          { href: '/influencer-marketing-agency', text: 'Influencer marketing agency' }
        ]
      },
      {
        id: 'how-an-engagement-runs',
        h2: 'How an engagement runs, from audit to scale',
        content: `Every engagement starts with a Brand Growth Audit: a 1-on-1 review with Gaurav Kapoor of your ad account, creative, store and unit economics. The output is a plan that names the two or three constraints holding growth back and the order to fix them in. You see it before any fee is agreed.

From there the work follows four phases. The timings are typical, not fixed: a brand with clean tracking and a strong offer moves through Foundation faster, and a brand with thin margins may spend longer in Optimize before budget goes up.`,
        table: {
          headers: ['Phase', 'Typical timing', 'Main work'],
          rows: [
            ['Foundation', 'Days 1 to 14', 'Tracking and Conversions API, offer, margins, product page'],
            ['Test', 'Days 15 to 45', 'Weekly creative on the hook and angle matrix'],
            ['Optimize', 'Days 45 to 90', 'Conversion rate, AOV and ROAS worked on together'],
            ['Scale', 'Day 90 onward', '20% to 30% budget steps, cost caps, 40+ assets a month, new markets and TikTok']
          ]
        }
      },
      {
        id: 'how-services-are-priced',
        h2: 'How DTC performance marketing services are priced',
        content: `Agencies in this space usually charge in one of four ways: a fixed monthly retainer, a percentage of ad spend, a performance fee tied to revenue or profit, or a mix of a base fee and a performance component. Each has a trade-off. A retainer is predictable but does not move with results. A percentage of spend rewards spending more, which is not always what the brand needs. A pure performance fee aligns incentives but depends on both sides agreeing what counts as performance.

Brand Scaling quotes after the audit, because the right scope depends on which services the brand needs and how much creative it will take. When you compare quotes from any agency, check three things: what creative volume is included, who owns the ad accounts and the store code, and which number the agency reports on. An agency judged on platform ROAS alone can look good while blended profit falls.`
      }
    ],
    faqs: [
      {
        question: 'Which service should a DTC brand start with?',
        answer: 'Start where the biggest constraint is. If tracking is broken, every other decision is built on bad data, so that comes first. If the ads work but stop working after a few weeks, the constraint is creative volume. If clicks are cheap but sales are not, it is the store or the offer. The Brand Growth Audit is how we find which one applies.'
      },
      {
        question: 'Can I hire Brand Scaling for one channel only?',
        answer: 'Yes. Some brands start with Meta ads or a Shopify rebuild alone. We will tell you during the audit if another part of the system is likely to cap results, for example a product page that cannot convert more traffic, but the scope is your decision. Many partners add services once the first channel is working and the next constraint shows up.'
      }
    ]
  },

  '/meta-ads-agency': {
    quickAnswer: {
      question: 'Why hire a Meta ads agency for ecommerce instead of running ads yourself?',
      answer: 'A Meta ads agency for ecommerce brings creative volume, tested account structures and benchmarks from many stores, which a founder running ads alone rarely has time to build. It makes sense once you spend $10K+ a month and efficiency drops as budget rises. Below that, learning the basics yourself is often cheaper.'
    },
    sections: [
      {
        id: 'bid-strategies',
        h2: 'Which bid strategy we use, and when',
        content: `New tests start on lowest cost bidding while we learn what works. Once cost per purchase is stable, cost controls come in. Bid caps and cost caps held a skincare account at 4.39x ROAS and a women's fashion account at 3.56x through BFCM, and a jewelry brand drove $54K in 7 days on manual bid caps.`,
        table: {
          headers: ['Bid strategy', 'When we use it', 'Watch out for'],
          rows: [
            ['Lowest cost', 'New tests, new products, limited data', 'Cost per purchase drifts up as budget grows'],
            ['Cost cap', 'Proven ads where volume near a target cost matters', 'Delivery stops if the cap is set too low'],
            ['Bid cap', 'Peak periods and tight margins', 'Needs daily adjustment or spend stalls']
          ]
        },
        links: [
          { href: '/cases/26271-spent-115416-generated-4-39-roas-skincare-brand-crushed-it', text: '$115,416 at 4.39x ROAS, skincare' },
          { href: '/cases/16630-spent-59241-generated-3-56-roas-even-chaos-bfcm-women', text: '$59,241 at 3.56x ROAS in BFCM, women\'s fashion' },
          { href: '/cases/drove-54k-7-days-using-manual-bidding-campaigns-jewelry', text: '$54K in 7 days with manual bidding, jewelry' }
        ]
      },
      {
        id: 'before-you-hire',
        h2: 'What to have ready before you hire a Meta agency',
        content: `Have three things ready on day one: admin access to the Business Manager, ad account, pixel and Shopify store; real product, shipping and fee costs so break-even ROAS can be set; and past creative with its results, failures included. Not ready to hand over the account? A one-off Meta ads audit is a smaller first step.`,
        links: [
          { href: '/meta-ads-audit', text: 'Meta ads audit' },
          { href: '/tools/break-even-roas-calculator', text: 'Break-even ROAS calculator' }
        ]
      }
    ],
    faqs: []
  },

  '/tiktok-ads-agency': {
    quickAnswer: {
      question: 'When should an ecommerce brand hire a TikTok ads agency?',
      answer: 'Hire a TikTok ads agency once Meta is stable and you can supply native creator video every week. TikTok rewards volume and authenticity more than polish, so the agency\'s job is mostly creative: briefing creators, testing hooks and turning organic winners into Spark Ads that sell to your Shopify store.'
    },
    sections: [
      {
        id: 'tiktok-ads-vs-tiktok-shop',
        h2: 'TikTok ads or TikTok Shop: which one you need',
        content: `This page is about TikTok advertising: in-feed and Spark Ads that send people to your own store. TikTok Shop is a different model. The sale happens inside the app, affiliate creators earn a commission on each order, and the work is listings, samples and creator management as much as ads. It now has its own page.

The two can run together, but the decision is separate. TikTok ads suit brands that want customers and data on their own Shopify store, with email and SMS follow-up afterwards. TikTok Shop suits impulse-friendly products with healthy margins after commission, and brands willing to manage fulfilment and creator relationships inside TikTok.`,
        links: [
          { href: '/tiktok-shop-agency', text: 'TikTok Shop agency' },
          { href: '/blog/tiktok-shop-strategy', text: 'TikTok Shop strategy guide' }
        ]
      },
      {
        id: 'tiktok-creative-brief',
        h2: 'How a TikTok brief differs from a Meta brief',
        content: `A Meta ad can open on a product shot. On TikTok an ad that looks like an ad is skipped, so we brief creators on the first two seconds, give them talking points instead of a script, and let them film in their own setting.`,
        list: [
          'Open on a person, a reaction or a problem, not a logo or a packshot.',
          'Use native text overlays and the creator\'s own voice rather than polished voiceover.',
          'Show the product in use within the first few seconds.',
          'Ask for three or four hook variations from every creator.',
          'Get Spark Ads authorisation codes at the brief stage, not after a post performs.'
        ]
      },
      {
        id: 'reading-tiktok-results',
        h2: 'How to judge TikTok results fairly',
        content: `TikTok buyers often see an ad, leave, and buy later through search, Instagram or a direct visit, so TikTok's own dashboard and Shopify rarely agree. We judge the channel on three numbers together: the platform-reported cost per purchase, new-customer CAC in Shopify for the period, and blended MER before and after TikTok spend started. If MER holds or improves as TikTok spend grows, the channel is adding customers, even when its in-platform ROAS looks lower than Meta's.`,
        links: [
          { href: '/compare/meta-ads-vs-tiktok-ads', text: 'Meta ads vs TikTok ads' },
          { href: '/glossary/mer', text: 'What is MER?' }
        ]
      }
    ],
    faqs: []
  },

  '/shopify-agency': {
    quickAnswer: {
      question: 'When does a DTC brand need a Shopify growth agency?',
      answer: 'A DTC brand needs a Shopify growth agency when paid traffic is growing but revenue per visitor is not. A Shopify growth agency rebuilds the store around the ads sending traffic: offer, product page, bundles, upsells and speed, so each visitor is worth more and the ad account can afford to scale.'
    },
    sections: [
      {
        id: 'choose-shopify-agency',
        h2: 'How to choose a Shopify agency for scaling a DTC brand',
        content: `Shopify agencies fall into two groups, and DTC brands often hire the wrong one. Design and development studios build beautiful stores and hand them over. Growth agencies treat the store as part of the ad funnel and keep changing it after launch, because the product page that converts cold paid traffic is rarely the one that looks best in a portfolio.

If your traffic comes mainly from Meta and TikTok ads, choose an agency that will commit to numbers after launch, not only to a launch date. Ask these questions on the first call.`,
        list: [
          'Will you change the store after launch, and how often do you test product pages, offers and bundles?',
          'Do you plan the page around the ads that send traffic to it (the same angle, offer and proof)?',
          'Which numbers do you report: conversion rate, revenue per session and AOV by traffic source, or only page speed scores?',
          'Who owns the theme, apps and code if we stop working together?',
          'Can you show a store you rebuilt and what happened to its conversion rate? Ours: a clinical skincare store reached a 5.25 percent conversion rate in a $61,000 month.'
        ]
      },
      {
        id: 'what-a-paid-traffic-store-needs',
        h2: 'What a store built for paid traffic needs',
        content: `A store built for organic and returning visitors can look good and still lose money on cold paid traffic. Someone arriving from a 15-second video knows almost nothing about the brand, so the page has to finish the job the ad started. When we build or rebuild a Shopify store for a growth engagement, these are the parts we work on first.`,
        list: [
          'A landing page or product page that repeats the ad\'s promise above the fold.',
          'Reviews, before-and-after proof or demonstrations near the add to cart button, not at the bottom of the page.',
          'An offer that is easy to understand in a few seconds: one price, one bundle choice, one reason to buy now.',
          'A sticky add to cart on mobile and a cart drawer instead of a separate cart page.',
          'Post-purchase upsells shown after payment, so they add order value without slowing checkout.',
          'Fewer apps, compressed images and lighter scripts so the page loads fast on a phone connection.'
        ]
      },
      {
        id: 'shopify-growth-vs-cro',
        h2: 'Shopify growth work and CRO: how they split',
        content: `This page covers the Shopify growth side: store builds and rebuilds, offers, bundles, upsells, speed and the connection between the store and the ads. Conversion rate optimisation as an ongoing testing program, with hypotheses, A/B tests and a monthly test roadmap, now has its own page.

Most brands need both, in order. The rebuild fixes the obvious problems quickly. The CRO program then finds the smaller gains that only show up in testing, such as which headline, bundle layout or guarantee wording converts better for your traffic.`,
        links: [
          { href: '/cro-agency', text: 'Ecommerce CRO agency' },
          { href: '/blog/shopify-conversion-rate-optimization', text: 'Shopify conversion rate optimisation guide' }
        ]
      },
      {
        id: 'shopify-numbers-we-track',
        h2: 'The Shopify numbers we track every week',
        content: `Conversion rate on its own can mislead. A discount can raise it while profit falls, and a higher-priced bundle can lower it while revenue per visitor rises. We read the store numbers together, and always next to the ad account, because a change in traffic quality shows up in the store before it shows up in ROAS.`,
        table: {
          headers: ['Metric', 'What it tells you'],
          rows: [
            ['Revenue per session', 'The single best summary of store performance for paid traffic'],
            ['Conversion rate', 'Whether visitors who arrive go on to buy'],
            ['Average order value', 'Whether bundles, quantity breaks and upsells are working'],
            ['Add to cart rate', 'Whether the product page and offer persuade'],
            ['Checkout completion rate', 'Whether shipping costs, payment options or surprises lose buyers late'],
            ['Mobile load time', 'Whether slow pages are wasting paid clicks']
          ]
        },
        links: [
          { href: '/tools/conversion-rate-calculator', text: 'Conversion rate calculator' },
          { href: '/tools/aov-calculator', text: 'AOV calculator' }
        ]
      },
      {
        id: 'after-the-first-order',
        h2: 'After the first order: connecting the store to retention',
        content: `A Shopify store also collects the email addresses, phone numbers and purchase history that retention runs on. During a rebuild we set up sign-up capture, post-purchase pages and the customer data that Klaviyo needs, so welcome, abandoned cart and repeat purchase flows can start as soon as traffic arrives. Repeat orders are what let the ads pay more for the first one.`,
        links: [
          { href: '/klaviyo-email-sms-agency', text: 'Klaviyo email and SMS agency' }
        ]
      }
    ],
    faqs: []
  },

  '/growth': {
    quickAnswer: {
      question: 'How do you choose an ecommerce growth agency?',
      answer: 'Choose an ecommerce growth agency that can show real results in your price range and niche, produces creative in-house, and reports on blended MER and contribution margin rather than platform ROAS alone. Ask who owns your ad accounts and store, how many new creatives you get each month, and what happens in the first 90 days.'
    },
    sections: [
      {
        id: 'growth-agency-pricing',
        h2: 'How ecommerce growth agencies are priced',
        content: `Growth agencies usually charge a monthly retainer, a percentage of ad spend, a performance fee, or a combination. Because a growth engagement covers more than media buying, check what the fee includes: creative production, Shopify development and retention work are sometimes billed on top. Brand Scaling quotes after the Brand Growth Audit, once the scope is clear, and does not publish fixed prices because two brands at the same revenue can need very different work.`,
        links: [
          { href: '/blog/how-much-does-a-dtc-agency-cost', text: 'How much does a DTC agency cost?' },
          { href: '/compare/agency-vs-in-house-media-buyer', text: 'Agency vs in-house media buyer' }
        ]
      },
      {
        id: 'growth-engine-proof',
        h2: 'Published results from the growth engine',
        content: `A few of the published results, across different niches and stages. Each links to the full case study.`,
        table: {
          headers: ['Niche', 'Result'],
          rows: [
            ['DTC brand, full year', '$2.3M in sales at 11.6x ROAS on $200K Meta spend'],
            ['Skincare, Q4 run-up', '$146,184 in 27 days at 3.64x ROAS, 957 orders'],
            ['Supplements, first 17 days', '$52,000 at 4.51x ROAS on $11,586 spend'],
            ['Clinical skincare store', '5.25% store conversion rate in a $61,000 month']
          ]
        },
        links: [
          { href: '/cases/finally-built-million-dollar-brand-2022-ending-2-3', text: '$2.3M at 11.6x ROAS' },
          { href: '/cases/q4-here-it-biggest-money-making-season-year', text: '$146,184 in 27 days, skincare' },
          { href: '/cases/it-safe-say-figured-out-make-supplement-brand-print-money', text: '$52,000 in 17 days, supplements' },
          { href: '/shopify-agency', text: '5.25% store conversion rate' }
        ]
      },
      {
        id: 'growth-channels',
        h2: 'Which channels the growth engine scales',
        content: `The growth engine is channel-led by where your customers already buy. Most DTC brands start on Meta, add TikTok ads once creative output is steady, and add Google Shopping to capture the demand those ads create. Brands that sell impulse-friendly products can also run TikTok Shop scaling services alongside, where the sale happens inside the TikTok app through creator affiliates and GMV Max.`,
        links: [
          { href: '/meta-ads-agency', text: 'Meta ads agency' },
          { href: '/tiktok-ads-agency', text: 'TikTok ads agency' },
          { href: '/tiktok-shop-agency', text: 'TikTok Shop scaling services' },
          { href: '/google-shopping-ads-agency', text: 'Google Shopping ads' }
        ]
      }
    ],
    faqs: []
  },

  '/viral-creatives': {
    quickAnswer: {
      question: 'What are direct response video ads?',
      answer: 'Direct response video ads are short paid videos built to make a viewer act now: click, add to cart or buy. Unlike brand videos, they are judged on cost per purchase and ROAS. They open with a hook, show a problem and the product solving it, add proof and an offer, and are replaced often.'
    },
    sections: [
      {
        id: 'direct-response-vs-brand-video',
        h2: 'Direct response video ads vs brand video',
        content: `A brand video is made to be remembered. A direct response video ad is made to be acted on, and it is judged by numbers you can see within days: thumb-stop rate, click-through rate, cost per purchase and ROAS. That changes how it is made. Brand video is usually one polished piece with a long life. Direct response creative is many rougher variations, each testing a different hook or angle, with most of them retired within weeks.

The library on this page shows that approach across ecommerce and lead generation. Our core work is for DTC ecommerce brands, where the video's job is to sell a product to someone who had never heard of it a few seconds earlier.`
      },
      {
        id: 'anatomy-of-a-direct-response-video',
        h2: 'Anatomy of a direct response video ad',
        content: `Most of our ecommerce video ads follow the same five-part structure, whatever the format. The timings below are a guide for a 20 to 40 second ad; the hook is the part that matters most, because a viewer who scrolls past never sees the rest.`,
        table: {
          headers: ['Part', 'Typical timing', 'Job'],
          rows: [
            ['Hook', 'First 1 to 3 seconds', 'Stop the scroll with a problem, a claim, a reaction or an unexpected visual'],
            ['Problem', 'Next 3 to 8 seconds', 'Make the viewer feel the pain point the product solves'],
            ['Product and demo', 'Middle section', 'Show the product working, ideally in real use'],
            ['Proof', 'Middle to late', 'Reviews, results, before and after, or numbers'],
            ['Offer and call to action', 'Last 3 to 5 seconds', 'Give the reason to buy now and the next step']
          ]
        }
      },
      {
        id: 'hook-and-angle-matrix',
        h2: 'How the hook and angle matrix produces 45+ ads',
        content: `We do not brief one video at a time. Each product gets a matrix: 5 angles, 3 hook styles and 3 formats, which gives 45+ distinct ads to test from a single round of research. An angle is the reason someone would buy, such as saving time, looking better, or fixing a specific problem. A hook style is how the first seconds open. A format is how the video is made.

Testing the matrix shows which angle wins first, then which hook and format sell that angle best. The winners are recut and re-hooked every week, which is how partner brands get 30 to 50+ new creatives a month without starting from a blank page each time.`,
        list: [
          'Example angles: problem and solution, social proof, comparison with the alternative, founder story, offer-led.',
          'Example hook styles: a bold claim, a question to the viewer, a visual pattern interrupt.',
          'Example formats: UGC talking head, product demo, split-screen or before and after.'
        ]
      },
      {
        id: 'production-and-iteration',
        h2: 'From brief to weekly winners',
        content: `Briefs come from data, not taste: winning comments and reviews, competitor ads in the Meta Ads Library, and what the ad account already shows about which angles convert. Creators film to the brief, editors cut several hooks for each body, and new ads go into testing every week. UGC video production is handled with our sister studio, SevenFigureStudio, so volume does not depend on one freelancer's availability.

Every week the numbers decide what happens next. Ads that hold attention but do not sell get a new offer or call to action. Ads that sell but lose attention early get a new hook. Ads that do neither are switched off. Winners are given new hooks and formats so they last longer before fatigue.`,
        links: [
          { href: 'https://sevenfigurestudio.us/ugc-video-ads', text: 'SevenFigureStudio UGC video ads' },
          { href: '/blog/scale-ugc-production', text: 'How DTC brands scale UGC production' },
          { href: '/blog/meta-ads-library', text: 'Meta Ads Library research' },
          { href: '/creative-strategy-agency', text: 'Creative strategy agency' }
        ]
      }
    ],
    faqs: [
      {
        question: 'How many video ads does a DTC brand need each month?',
        answer: 'Enough to replace ads before they fatigue and to keep testing new angles. For brands spending $10K to $20K+ a month on Meta or TikTok, that usually means at least several new ads a week. Brand Scaling partners receive 30 to 50+ new creatives and angles a month, with the volume rising as spend scales.'
      },
      {
        question: 'Do direct response video ads need real creators or customers?',
        answer: 'Not always, but people on camera usually help on Meta and TikTok because the ad looks like content rather than an advert. We use paid UGC creators, founders and real customer footage where available, alongside demos and motion graphics. The format is chosen by testing, not by preference, and the matrix includes more than one format for each angle.'
      }
    ]
  },

  '/roas-calculator': {
    quickAnswer: {
      question: 'How do you use a ROAS calculator?',
      answer: 'Enter your selling price, your full cost per unit and the cost per purchase you pay or expect to pay. The ROAS calculator returns the ROAS your ads must report to hit that cost, the profit left on each order and a monthly profit estimate. Compare the required ROAS with what your account actually delivers.'
    },
    sections: [
      {
        id: 'worked-example',
        h2: 'Worked example: reading the default numbers',
        content: `The calculator opens with an example product: a $69 retail price, a $14 product cost, a $22 cost per purchase and 30 orders a day. Here is how to read what it returns. These are example numbers, not a benchmark.

Required ROAS is 3.14x, which is $69 divided by $22. It is the ROAS your ad account has to report for a $22 cost per purchase to hold, assuming one unit per order. If Meta or TikTok shows 3.14x or more, you are at or below that cost. Net profit per order is $33: $69 minus $14 minus $22. Monthly figures assume 30 days, so 30 orders a day becomes 900 orders, $62,100 in revenue and $29,700 in net profit, a 47.8% net margin.

Required ROAS is not the same as break-even ROAS. Break-even is the point where profit per order is zero: here $69 divided by the $55 left after product cost, about 1.25x. The gap between 1.25x and 3.14x is your room to spend more per customer before an order stops being profitable.`
      },
      {
        id: 'reading-each-result',
        h2: 'What each result means and what to do with it',
        content: `Each output answers a different question. Use them together rather than chasing one number.`,
        table: {
          headers: ['Result', 'What it answers', 'If it looks wrong'],
          rows: [
            ['Required ROAS', 'What ROAS must your ads show for this cost per purchase?', 'If your account reports less, the real cost per purchase is higher than you entered'],
            ['Net profit per order', 'How much is left after product and ad cost?', 'If it is negative, cut cost per purchase or raise order value with bundles'],
            ['Net profit margin', 'What share of revenue is profit before overheads?', 'If it is thin, a small rise in ad costs will wipe it out'],
            ['Monthly revenue and net profit', 'What does this volume add up to over 30 days?', 'Check it covers fixed costs: salaries, apps, agency fees, software']
          ]
        }
      },
      {
        id: 'real-roas',
        h2: 'Why this is a real ROAS calculator, not just revenue divided by spend',
        content: `A basic ROAS calculator only divides revenue by ad spend, which tells you nothing about profit. A real ROAS calculator for ecommerce starts from what each order costs you: product, shipping, payment fees and the ad cost per purchase. From those it works out your break-even ROAS (the lowest ROAS where an order still pays for itself) and the profit or loss each order leaves at your current cost per purchase.

That is the difference between a dashboard number and a decision. A 3x ROAS can be excellent for a store with a 1.6x break-even and loss-making for a store with a 3.5x break-even. If you only need the break-even point from your margin, the break-even ROAS calculator does that in one step; to plan budget for a revenue goal, use the Facebook ads budget calculator.`
      },
      {
        id: 'acos-to-roas',
        h2: 'ACoS to ROAS: converting Amazon numbers',
        content: `Amazon reports ACoS (advertising cost of sale) instead of ROAS. ACoS is ad spend divided by ad revenue, so it is simply the inverse of ROAS. To convert, divide 1 by ACoS as a decimal; to go back, divide 1 by ROAS.`,
        table: {
          headers: ['ACoS', 'Equivalent ROAS'],
          rows: [['50%', '2.0x'], ['40%', '2.5x'], ['33%', '3.0x'], ['25%', '4.0x'], ['20%', '5.0x']]
        }
      },
      {
        id: 'common-mistakes',
        h2: 'Mistakes that make the result look better than it is',
        content: `The calculator is only as accurate as the inputs. These are the gaps we see most often when founders model their numbers.`,
        list: [
          'Entering only the supplier price as product cost. Add shipping to the customer, packaging, payment processing fees and an allowance for returns.',
          'Using list price when most orders carry a discount code. Enter the average price customers actually pay.',
          'Using platform ROAS as the truth. Ad platforms can over-credit themselves, so check against blended MER from Shopify revenue and total ad spend.',
          'Treating net profit per order as take-home profit. It is before fixed overheads, so the monthly figure still has to cover the rest of the business.',
          'Ignoring repeat purchases. If customers reorder, a first order near break-even can still be worth buying. Model lifetime value separately.'
        ],
        links: [
          { href: '/tools/break-even-roas-calculator', text: 'Break-even ROAS calculator' },
          { href: '/tools/mer-calculator', text: 'MER calculator' },
          { href: '/tools/ltv-calculator', text: 'LTV calculator' },
          { href: '/blog/good-roas-for-ecommerce', text: 'What is a good ROAS for ecommerce?' }
        ]
      }
    ],
    faqs: []
  }
};
