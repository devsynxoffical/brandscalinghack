// Blog batch 5: Meta ads learning phase, TikTok Shop vs Shopify.
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
  // 1. Meta ads learning phase
  {
    slug: 'meta-ads-learning-phase',
    title: 'Meta Ads Learning Phase: What It Is, Learning Limited and How to Exit It',
    titleTag: 'Meta Ads Learning Phase: How to Exit It | Brand Scaling',
    metaDescription: 'The Meta ads learning phase explained: the 50 conversions per week rule, what Learning Limited means, what resets learning and how to budget your way out.',
    primaryKeyword: 'meta ads learning phase',
    secondaryKeywords: ['learning limited', 'how long is the facebook learning phase', '50 conversions per week', 'exit learning phase', 'facebook ads learning phase', 'what resets the learning phase'],
    publishDate: '2026-11-10',
    updatedDate: '2026-11-10',
    readTime: '9 min read',
    category: 'Meta Ads',
    relatedLinks: [
      { href: '/tools/meta-ads-budget-calculator', title: 'Meta Ads Budget Calculator', text: 'Work out the daily budget your target CPA needs to reach enough purchases each week.' },
      { href: '/blog/how-to-scale-facebook-ads', title: 'How to Scale Facebook Ads', text: 'Budget steps and structure once an ad set is out of learning and profitable.' },
      { href: '/blog/meta-advantage-plus-guide', title: 'Meta Advantage+ Guide', text: 'When a consolidated Advantage+ campaign beats many small ad sets.' },
      { href: '/meta-ads-agency', title: 'Meta Ads Agency for Ecommerce', text: 'Have us restructure the account so ad sets can exit learning.' }
    ],
    author,
    directAnswer: 'The Meta ads learning phase is the period after you launch or significantly edit an ad set when Meta is still working out who to show it to. Meta says an ad set generally needs about 50 optimization events within 7 days of its last significant edit to exit learning. If it is not on track to get there, Meta labels it Learning Limited.',
    definitionBox: {
      term: 'Meta ads learning phase',
      definition: 'The period when Meta\'s delivery system is exploring the best people, placements and times to show a new or significantly edited ad set. Performance is less stable and cost per result is usually higher until the ad set collects enough optimization events, which Meta puts at roughly 50 in 7 days.'
    },
    tableOfContents: [
      { id: 'what-is-the-learning-phase', text: 'What is the Meta ads learning phase?' },
      { id: 'fifty-conversions-rule', text: 'The 50 conversions per week rule' },
      { id: 'how-long-is-learning', text: 'How long is the Facebook learning phase?' },
      { id: 'learning-limited', text: 'What Learning Limited means' },
      { id: 'what-resets-learning', text: 'What resets the learning phase' },
      { id: 'budget-for-learning', text: 'How to size a budget that can exit learning' },
      { id: 'how-to-exit-learning', text: 'How DTC brands get out of the learning phase' },
      { id: 'scale-without-resets', text: 'How to scale budgets without resetting learning' },
      { id: 'when-learning-is-not-the-problem', text: 'When learning is not the real problem' },
      { id: 'faq-section', text: 'Frequently asked questions' }
    ],
    sections: [
      {
        id: 'what-is-the-learning-phase',
        h2: 'What is the Meta ads learning phase?',
        content: `The Meta ads learning phase is the stretch of time after an ad set launches, or after a significant edit, when Meta's delivery system is still testing who to show your ads to. You will see "Learning" in the Delivery column of Ads Manager while it happens.

During this period Meta spends part of your budget exploring different people, placements and times of day, and uses the results to predict who is most likely to take the action you optimize for, such as a purchase. Until it has enough results, delivery is less stable and cost per result is usually higher and more volatile.

Learning happens at the ad set level. Each ad set learns on its own, even when several sit inside the same campaign. That detail matters for DTC brands, because the most common reason an account never leaves learning is a budget split across too many ad sets for any one of them to collect enough data.`
      },
      {
        id: 'fifty-conversions-rule',
        h2: 'The 50 conversions per week rule',
        content: `Meta's documented guideline is that an ad set generally needs about 50 optimization events within 7 days of its last significant edit to exit the learning phase. An optimization event is whatever conversion the ad set is set to optimize for. For most ecommerce ad sets that is a purchase, so in practice the rule reads as roughly 50 purchases per ad set per week.

Two parts of that rule are easy to miss. First, it counts events for the ad set, not the campaign or the account. Ten ad sets with 10 purchases each add up to 100 purchases a week, but none of them is close to exiting learning. Second, the 7-day window restarts after every significant edit, so an ad set that keeps getting changed keeps starting over. Meta describes 50 as a guide rather than a hard switch, so treat it as the planning target and check the Meta Business Help Center if your account shows something different.`
      },
      {
        id: 'how-long-is-learning',
        h2: 'How long is the Facebook learning phase?',
        content: `The Facebook learning phase lasts until the ad set collects about 50 optimization events, and Meta gives it a 7-day window from the last significant edit to get there. With a large enough budget, an ad set can leave learning in two or three days. With a small budget, it may never leave.

So the honest answer to "how long" is that it depends on your budget and your cost per result, not on the calendar. An ad set spending enough to buy 15 purchases a day will usually exit learning within about four days. An ad set buying three purchases a day will collect about 21 in a week and stay stuck. Plan for this before launch: if your budget cannot buy about 50 events a week, change the structure or the optimization event first.`
      },
      {
        id: 'learning-limited',
        h2: 'What Learning Limited means',
        content: `Learning Limited means Meta expects the ad set will not get enough optimization events to exit the learning phase. It is a status, not a penalty. Your ads keep delivering, but Meta is telling you that the ad set is unlikely to reach stable performance with its current setup.

When you hover over the status in Ads Manager, Meta usually suggests a cause. The common ones are:`,
        list: [
          'Budget too low for the cost of the optimization event.',
          'Audience too small, often from stacked interests, tight age or location limits or heavy exclusions.',
          'A cost cap, bid cap or ROAS goal set so tight that Meta cannot win enough auctions.',
          'Too many ad sets in the account competing for similar people, so each gets a thin slice of the results.',
          'An optimization event that is too rare, such as purchases on a product that sells only a few times a week.'
        ],
        subsections: [
          {
            h3: 'Is Learning Limited always bad?',
            content: `Not always. A small retargeting ad set or a test ad set with a deliberate budget can sit in Learning Limited and still be profitable. The status only says the ad set is not getting enough events for Meta's system to optimize fully. If the ad set hits your target CPA consistently, you do not have to fix it. If it is your main prospecting ad set and results swing from day to day, you should.`
          }
        ]
      },
      {
        id: 'what-resets-learning',
        h2: 'What resets the learning phase',
        content: `A significant edit resets the learning phase and restarts the 7-day window. Meta treats the following as significant edits:`,
        list: [
          'Changing targeting, including audiences, locations, age ranges and Advantage+ audience settings.',
          'Changing creative, or adding a new ad to the ad set.',
          'Changing the optimization event, for example from purchase to add to cart.',
          'Changing the bid strategy or making a large change to a bid, cost cap or ROAS goal.',
          'Making a large budget change on the ad set, or on the campaign when you use Advantage campaign budget.',
          'Pausing the ad set for 7 days or longer and then turning it back on.'
        ],
        subsections: [
          {
            h3: 'What Meta does not publish',
            content: `Meta does not publish an exact percentage at which a budget change becomes significant. Advice such as "raise budgets by no more than 20 percent" is a rule of thumb from practitioners, not Meta's rule. Small, spaced changes are less likely to reset learning than one large jump, which is why gradual increases are the safe default. Small edits such as fixing a typo in ad copy may or may not count, so batch your edits and make them together rather than one at a time over several days.`
          }
        ]
      },
      {
        id: 'budget-for-learning',
        h2: 'How to size a budget that can exit learning',
        content: `Set the daily budget of each ad set to at least your expected cost per optimization event, times 50, divided by 7. That is the spend needed to buy about 50 events in a week. If your ad set's budget is below that number, it is unlikely to exit learning.

Daily budget needed = expected CPA x 50 / 7.

Worked example: a DTC brand sells a $60 product and expects a cost per purchase of about $30 from prospecting. $30 times 50 is $1,500 a week, and $1,500 divided by 7 is about $214 a day, so round up to $215. The table shows how different structures with the same CPA compare. These are illustrative numbers, not benchmarks.`,
        table: {
          headers: ['Setup (example)', 'Daily budget per ad set', 'Weekly spend per ad set', 'Events per ad set per week', 'Enough to exit learning?'],
          rows: [
            ['One ad set optimizing for purchase, $30 CPA', '$90', '$630', '21 purchases', 'No'],
            ['Four ad sets at $60 a day each, $30 CPA', '$60', '$420', '14 purchases', 'No, in any of them'],
            ['The same $240 a day in one ad set, $30 CPA', '$240', '$1,680', '56 purchases', 'Yes'],
            ['Budget from the formula, $30 CPA', '$215', '$1,505', '50 purchases', 'Just, with no buffer'],
            ['One ad set optimizing for add to cart, $9 per add to cart', '$65', '$455', '50 add to carts', 'Yes, for that event']
          ]
        },
        list: [
          'The four-ad-set account spends $240 a day and buys about 56 purchases a week in total, but each ad set only sees about 14, so all four stay in learning.',
          'Moving the same $240 into one ad set gets that ad set past 50 without spending a dollar more.',
          'CPA during learning is usually higher than the stable CPA, so budget 20 to 30 percent above the formula if you can. In this example that is roughly $260 to $280 a day.'
        ],
        subsections: [
          {
            h3: 'Check the budget against your margin',
            content: `The formula tells you what learning needs. It does not tell you whether that CPA is profitable. Before raising budget to hit 50 a week, check that your expected CPA sits below your break-even CPA. Our break-even ROAS calculator turns your price and costs into that limit, and the Meta ads budget calculator works out the daily budget for a target number of purchases.`
          }
        ]
      },
      {
        id: 'how-to-exit-learning',
        h2: 'How DTC brands get out of the learning phase',
        content: `To exit the learning phase, give each ad set more optimization events per week: fewer ad sets, broader audiences, enough budget and fewer edits. If even that cannot reach 50 a week, temporarily optimize for a more frequent event. These are the moves that work most often in DTC accounts.`,
        subsections: [
          {
            h3: 'Consolidate ad sets',
            content: `Merge ad sets that target similar people or test small variations. Put several creatives in one ad set instead of one creative per ad set, and let Meta spread delivery across them. Consolidation is the fastest fix because it raises events per ad set without raising total spend, as the worked example shows.`
          },
          {
            h3: 'Use broader audiences',
            content: `Narrow interest stacks and tight lookalikes limit how many people Meta can reach at a reasonable cost. Broad targeting or Advantage+ audience gives the system more room to find buyers, which usually brings more events for the same budget. Keep exclusions for recent purchasers, but avoid stacking so many conditions that the audience shrinks to a few hundred thousand people.`
          },
          {
            h3: 'Optimize for a higher-funnel event for a while',
            content: `If your budget cannot buy 50 purchases a week, optimize for an event that happens more often, such as add to cart or initiate checkout, until purchase volume grows. In the example, 50 add to carts a week need about $65 a day instead of $215. The trade-off is that Meta then finds people who add to cart, not necessarily people who buy, so watch cost per purchase closely and switch back to purchase optimization once you can afford it. Remember that switching the event is itself a significant edit.`
          },
          {
            h3: 'Stop editing during learning',
            content: `Every significant edit restarts the clock. Decide what you will change before launch, then leave the ad set alone for at least three to five days unless it is clearly losing money. Judge results on the full week, not on the first day, when learning makes costs noisy.`
          },
          {
            h3: 'Fix tracking first',
            content: `If purchases are not reaching Meta reliably, the ad set learns from fewer events than you actually sold. Check that the Meta pixel and the Conversions API are both sending purchase events and that event match quality is healthy before you blame the budget.`
          }
        ]
      },
      {
        id: 'scale-without-resets',
        h2: 'How to scale budgets without resetting learning',
        content: `The safest way to scale without resetting learning is to raise budgets in small, spaced steps on ad sets that are already out of learning and profitable. When you need a bigger jump than that, duplicate or move spend into a consolidated campaign instead of making one large edit to a winner.`,
        subsections: [
          {
            h3: 'Gradual budget increases',
            content: `Raise the budget of a stable ad set by a modest amount, many teams use about 20 to 30 percent, then wait two or three days before the next step. This is a rule of thumb rather than a Meta threshold, but it keeps each change small enough that delivery usually stays stable. If CPA rises above target after a step, hold the budget there until it settles.`
          },
          {
            h3: 'Duplicating an ad set',
            content: `Duplicating a winning ad set at a higher budget leaves the original untouched, so its learning is not reset. The copy starts its own learning phase, though, and it competes in the same auctions as the original, which can raise costs for both. Use duplication for one clear step up, not as a habit that fills the account with near-identical ad sets.`
          },
          {
            h3: 'Advantage campaign budget and Advantage+ sales campaigns',
            content: `With Advantage campaign budget, previously called campaign budget optimization or CBO, you set one budget at campaign level and Meta shifts spend between ad sets. That makes it easier for the strongest ad set to collect enough events. Advantage+ sales campaigns, previously Advantage+ shopping campaigns, go further by consolidating targeting and placements into one unit, which suits brands that want fewer, bigger ad sets. A large change to the campaign budget can still count as a significant edit, so the same rule of gradual steps applies. Our Meta Advantage+ guide covers when this structure fits.`
          }
        ]
      },
      {
        id: 'when-learning-is-not-the-problem',
        h2: 'When learning is not the real problem',
        content: `Sometimes an ad set exits learning and still loses money, or stays in learning because nobody wants the offer. Learning is about how stable delivery is, not about whether the product, price or creative can sell.

If you have consolidated, broadened and funded an ad set properly and CPA is still above break-even, look at the creative, the offer and the landing page before touching structure again. More events will not fix a weak hook or an unclear product page. Our guide to Meta ads creative testing explains how to find new winners without breaking learning on the ads that already work, and our guide to what ROAS is covers how to set the target your ads need to hit.

If you want a second pair of eyes on an account that never seems to leave learning, our Meta ads agency team can review the structure, tracking and budgets and show you where the events are being split.`
      }
    ],
    faqs: [
      { question: 'What is the learning phase in Meta ads?', answer: 'It is the period after an ad set launches or is significantly edited when Meta is still testing who to show the ads to. Performance is less stable and cost per result is usually higher. The ad set exits learning once it collects about 50 optimization events within 7 days of its last significant edit.' },
      { question: 'How many conversions do you need to exit the learning phase?', answer: 'Meta\'s guideline is about 50 optimization events per ad set within 7 days of the last significant edit. For an ad set optimizing for purchases, that means roughly 50 purchases a week in that one ad set. Events in other ad sets in the same campaign do not count toward it.' },
      { question: 'How long is the Facebook learning phase?', answer: 'It lasts until the ad set reaches about 50 optimization events, with a 7-day window from the last significant edit. A well-funded ad set can exit in two or three days. An ad set whose budget buys only a few events a day may never exit and will be labelled Learning Limited.' },
      { question: 'How do I fix Learning Limited?', answer: 'Give the ad set more events per week. Consolidate similar ad sets, broaden the audience, loosen any cost cap or bid cap that is too tight and set the daily budget to at least your expected CPA times 50 divided by 7. If that is not affordable, optimize for a more frequent event such as add to cart for a while.' },
      { question: 'Does changing the budget reset the learning phase?', answer: 'A large budget change can, on the ad set or on the campaign when you use Advantage campaign budget. Meta does not publish an exact threshold. Many advertisers raise budgets by about 20 to 30 percent at a time and wait a few days between steps, which usually keeps delivery stable.' },
      { question: 'Should I duplicate an ad set to scale it?', answer: 'It can be useful for one clear step up, because the original ad set keeps its learning. The duplicate starts learning from scratch and competes with the original in the same auctions. For ongoing scaling, gradual budget increases on the winner or a consolidated Advantage campaign budget setup are usually cleaner.' }
    ]
  },

  // 2. TikTok Shop vs Shopify
  {
    slug: 'tiktok-shop-vs-shopify',
    title: 'TikTok Shop vs Shopify: Which Should a DTC Brand Sell On?',
    titleTag: 'TikTok Shop vs Shopify for DTC Brands | Brand Scaling',
    metaDescription: 'TikTok Shop vs Shopify compared on checkout, traffic, fees, customer data, creators and fulfilment, and when a DTC brand should run both together.',
    primaryKeyword: 'tiktok shop vs shopify',
    secondaryKeywords: ['should i sell on tiktok shop or shopify', 'tiktok shop fees', 'tiktok shop or shopify', 'tiktok shopify integration', 'tiktok shop for shopify brands', 'is tiktok shop worth it'],
    publishDate: '2026-11-10',
    updatedDate: '2026-11-10',
    readTime: '9 min read',
    category: 'Growth Channels',
    relatedLinks: [
      { href: '/blog/tiktok-shop-strategy', title: 'TikTok Shop Strategy for DTC Brands', text: 'Listings, pricing, affiliate creators, LIVE and GMV Max once you decide to sell there.' },
      { href: '/tiktok-shop-agency', title: 'TikTok Shop Agency', text: 'Have your shop setup, creators and ads run on your real margins.' },
      { href: '/shopify-agency', title: 'Shopify Growth Agency', text: 'Keep your Shopify store converting as the hub for every channel.' },
      { href: '/tools/break-even-roas-calculator', title: 'Break-Even ROAS Calculator', text: 'Check what each channel can afford to spend per order.' }
    ],
    author,
    directAnswer: 'TikTok Shop and Shopify are not really either-or. Shopify is your own store: you own the checkout and the customer relationship, but you have to bring the traffic. TikTok Shop is a marketplace inside TikTok: it brings shoppers and creators, but takes a fee per order and controls the customer data. Most DTC brands are best served using Shopify as the hub and TikTok Shop as a sales channel.',
    definitionBox: {
      term: 'TikTok Shop vs Shopify',
      definition: 'A comparison between selling inside TikTok, where shoppers buy without leaving the app and TikTok runs the checkout, and selling on your own Shopify store, where you run the checkout, set the experience and keep the customer relationship but must drive the traffic yourself.'
    },
    tableOfContents: [
      { id: 'short-answer', text: 'TikTok Shop vs Shopify: the short answer' },
      { id: 'what-each-is', text: 'What TikTok Shop and Shopify actually are' },
      { id: 'checkout', text: 'Checkout: in the app vs on your own store' },
      { id: 'traffic', text: 'Where the traffic comes from' },
      { id: 'fees', text: 'TikTok Shop fees vs Shopify fees' },
      { id: 'customer-data', text: 'Who owns the customer data' },
      { id: 'creators', text: 'Affiliates and creators' },
      { id: 'fulfilment', text: 'Fulfilment and shipping' },
      { id: 'using-both', text: 'Using both: Shopify as the hub, TikTok Shop as a channel' },
      { id: 'decision-guide', text: 'Decision guide: which should you sell on?' },
      { id: 'faq-section', text: 'Frequently asked questions' }
    ],
    sections: [
      {
        id: 'short-answer',
        h2: 'TikTok Shop vs Shopify: the short answer',
        content: `If you can only pick one, pick Shopify when you want to own the brand, the customer list and the margin, and pick TikTok Shop when your product sells on impulse from short videos and you need demand more than control. For most DTC brands that already have a store, the better question is not which one but how to run TikTok Shop as a channel without hurting the store.

The two do different jobs. Shopify is infrastructure: a store, a checkout and a back office that you control. TikTok Shop is a marketplace with its own audience, its own checkout and its own rules. Comparing them is closer to comparing your own website with Amazon than comparing two website builders.`
      },
      {
        id: 'what-each-is',
        h2: 'What TikTok Shop and Shopify actually are',
        content: `TikTok Shop is an ecommerce marketplace built into the TikTok app, and Shopify is a platform for running your own online store. That difference sits under every point in this comparison.

On TikTok Shop, you list products in TikTok's Seller Center. Shoppers find them in videos, LIVE streams, the Shop tab and search, and pay inside TikTok, which sets the rules on listings, checkout, shipping, returns and customer contact. It is only available in some countries, so check that your market is supported.

On Shopify, you pay for the software and build a store on your own domain. You choose the theme, the checkout settings, the apps and the payment options, and you decide how to talk to customers after they buy. Shopify does not send you shoppers. Traffic comes from your ads, search, email, social and word of mouth.`
      },
      {
        id: 'checkout',
        h2: 'Checkout: in the app vs on your own store',
        content: `TikTok Shop checkout happens inside TikTok, while Shopify checkout happens on your store. That is the biggest practical difference for conversion.

A TikTok shopper can watch a video, tap the product and pay without opening a browser. Saved payment and address details make it fast, which suits impulse purchases at lower price points. The downside is that you cannot customize the checkout, add your own upsells in the same way or show your full brand story at the moment of purchase.

A Shopify checkout sends the shopper from the ad or post to your site. That extra step loses some people, especially on mobile and in-app browsers. In return, you control the product page, bundles, post-purchase offers and subscription options, and you can test and improve every step. Brands with higher prices, longer consideration or a strong bundle and subscription model usually do better with that control.`
      },
      {
        id: 'traffic',
        h2: 'Where the traffic comes from',
        content: `TikTok Shop can bring you shoppers through TikTok's own feed, search and creators, while a Shopify store gets only the traffic you send it. That is TikTok Shop's main advantage.

On TikTok Shop, a product can get sales from organic videos, from affiliate creators who post about it and from the Shop tab and search inside the app. Paid campaigns, including GMV Max and Spark Ads, can add more. None of that is guaranteed, and organic reach rises and falls with the algorithm, but the potential audience is already in the app and already shopping.

On Shopify, every visitor has a cost or an effort behind it: Meta ads, TikTok ads, Google, SEO, email, influencers. The upside is that traffic you build, such as an email list or search rankings, keeps working regardless of one platform's policy changes. A brand that relies only on TikTok Shop is exposed if the algorithm, the fee structure or the rules change.`
      },
      {
        id: 'fees',
        h2: 'TikTok Shop fees vs Shopify fees',
        content: `TikTok Shop mainly charges a referral fee on each sale, a percentage of the order that varies by category and region, while Shopify mainly charges a monthly plan fee plus payment processing. Both change over time, so check TikTok's current seller fee page for your market and Shopify's pricing page before you model margins. We do not quote exact rates here because they differ by country, category and date.

The bigger cost difference is usually not the platform fee itself. On TikTok Shop, creator commission and seller-funded promotions often cost more per order than the referral fee. On Shopify, paying for traffic usually costs more than the subscription and processing combined.`,
        table: {
          headers: ['Cost type', 'TikTok Shop', 'Shopify'],
          rows: [
            ['Platform fee per sale', 'Referral fee as a percentage of the order, by category and region. Check TikTok\'s seller fee page.', 'No sales commission when you use Shopify Payments. An extra transaction fee applies if you use a third-party payment provider.'],
            ['Subscription', 'Check your region\'s seller terms.', 'Monthly plan fee that depends on the plan you choose.'],
            ['Payment processing', 'Check whether it is included in the referral fee or charged separately in your region.', 'Card processing rate per order, set by your plan and region.'],
            ['Creator and affiliate commission', 'Set by you per product, paid on sales creators drive.', 'Only if you run your own affiliate or influencer program.'],
            ['Promotions', 'Seller-funded discounts and campaign participation.', 'Discounts you choose to run.'],
            ['Traffic', 'Optional ads such as GMV Max and Spark Ads.', 'You pay for or earn all traffic: ads, SEO, email, social.'],
            ['Apps and tools', 'Seller Center tools are included.', 'Many brands pay monthly for apps on top of the plan.']
          ]
        },
        subsections: [
          {
            h3: 'Compare margin per order, not fee rates',
            content: `To compare the two fairly, work out contribution margin per order on each channel. For TikTok Shop, subtract product cost, shipping, the referral fee, creator commission and any discount. For Shopify, subtract product cost, shipping, processing and the ad cost it takes to win the order. Our break-even ROAS calculator helps with the Shopify side, and our TikTok Shop strategy guide has a worked example of TikTok Shop margin with assumed rates.`
          }
        ]
      },
      {
        id: 'customer-data',
        h2: 'Who owns the customer data',
        content: `On Shopify you own the customer relationship, while on TikTok Shop the buyer is TikTok's customer first. For a DTC brand that plans to grow through repeat purchases, this is often the deciding factor.

A Shopify order gives you the customer's email, and if they opt in, their phone number for SMS. You can add them to post-purchase flows, ask for reviews, offer a subscription and bring them back with a timed second-purchase offer. That repeat revenue costs very little in ads, which is where much of a DTC brand's lifetime value comes from.

A TikTok Shop order gives you what you need to ship it, but TikTok limits how you can contact or market to that buyer off the platform. Check TikTok's current seller data policy for the details in your region. You can still build a relationship inside TikTok through your account, LIVE streams and follow-up products in your shop, but you cannot simply move every buyer into your email and SMS flows the way you would from Shopify.`
      },
      {
        id: 'creators',
        h2: 'Affiliates and creators',
        content: `TikTok Shop has a built-in affiliate system that makes it much easier to get creators selling your product, while Shopify needs a separate program and tooling. This is the second big reason brands add TikTok Shop.

On TikTok Shop, you set a commission rate on each product and creators can request samples, add the product to their showcase and earn on the sales they drive. Tracking, payment and attribution all happen inside TikTok. A good product with a fair commission can attract dozens or hundreds of creators without separate contracts.

On Shopify, you can run an affiliate program through an app, send discount codes to influencers or pay creators for UGC to use in your own ads. That works, but you handle recruitment, tracking and payment yourself, and the creator's audience still has to leave the app to buy. Our guide to building a DTC affiliate program covers that side, and many brands run both: TikTok Shop affiliates for in-app sales and paid UGC for ads that send traffic to Shopify.`
      },
      {
        id: 'fulfilment',
        h2: 'Fulfilment and shipping',
        content: `TikTok Shop sets strict shipping and service rules that affect your shop's standing, while Shopify lets you set your own shipping promises. You need to be ready for TikTok's rules before you turn the channel on.

On TikTok Shop, you can usually ship orders yourself or through your 3PL, and in some markets you can use Fulfilled by TikTok. Either way, TikTok tracks metrics such as late dispatch, cancellations and returns, and poor performance can lead to warnings or limits on the shop. Viral moments also create sudden spikes in orders, so stock and fulfilment capacity matter more than on a steady paid traffic channel.

On Shopify, you choose your shipping times, carriers and return policy. Customers still expect speed, and slow shipping hurts reviews and repeat purchases, but there is no platform scoring your account. If you already ship well from Shopify, the main TikTok Shop work is meeting its dispatch deadlines and keeping inventory in sync so you do not oversell.`
      },
      {
        id: 'using-both',
        h2: 'Using both: Shopify as the hub, TikTok Shop as a channel',
        content: `Most DTC brands should run Shopify as the hub for products, inventory and orders, and connect TikTok Shop to it as a sales channel. That gives you TikTok's reach without splitting your operations in two.

Shopify's TikTok app can connect your store to TikTok Shop in supported markets. Depending on your region and the current version, it can sync your product catalogue and inventory and bring TikTok Shop orders into Shopify for fulfilment. Check what the app supports in your market before you rely on it. The point is to manage stock and orders in one place, so a viral video on TikTok does not oversell items your Shopify store is also selling.

A sensible setup looks like this:`,
        list: [
          'List a small number of hero products on TikTok Shop first, the ones that are easy to show on camera and can carry creator commission.',
          'Keep prices consistent across channels where you can, or have a clear reason when they differ, such as a TikTok-only bundle.',
          'Use TikTok Shop for discovery and impulse sales, and use Shopify for bundles, subscriptions, higher price points and repeat purchases.',
          'Measure each channel on contribution margin per order, not on revenue alone.',
          'Watch for overlap. Some TikTok Shop buyers would have bought on Shopify anyway, so check whether total sales grow or just move between channels.'
        ]
      },
      {
        id: 'decision-guide',
        h2: 'Decision guide: which should you sell on?',
        content: `Use Shopify if control, margin and repeat customers drive your business, use TikTok Shop if impulse demand and creators drive it, and use both if you have the operations to support two channels. The table below matches common situations to a starting point.`,
        table: {
          headers: ['Your situation', 'Start with', 'Why'],
          rows: [
            ['New brand, low-priced product that demonstrates well on video', 'TikTok Shop, with a basic Shopify store', 'TikTok brings shoppers and creators without paid traffic; Shopify gives you a home base.'],
            ['Established Shopify brand with steady Meta ads', 'Shopify, then add TikTok Shop as a channel', 'Keep what works and test TikTok Shop on hero products.'],
            ['Higher price, longer consideration or subscription model', 'Shopify', 'You need the product page, checkout control and customer data.'],
            ['Brand relies on email, SMS and repeat purchases', 'Shopify as the hub', 'You keep the customer contact that drives lifetime value.'],
            ['Thin margins that cannot carry creator commission and fees', 'Shopify, until margins improve', 'TikTok Shop costs per order may leave nothing after the sale.'],
            ['Market where TikTok Shop is not available', 'Shopify', 'You can still use TikTok ads to send traffic to your store.'],
            ['Strong product and capacity for creators and LIVE selling', 'Both, connected', 'Shopify runs operations; TikTok Shop adds reach and creator sales.']
          ]
        },
        subsections: [
          {
            h3: 'If you decide to add TikTok Shop',
            content: `Start small, with a few hero products, a commission rate your margin can carry and a plan for creator samples. Our TikTok Shop strategy guide covers listings, pricing and LIVE selling in detail. If you would rather have it run for you, our TikTok Shop agency team handles setup, creators and GMV Max, and our Shopify agency keeps the store converting as the hub for every channel.`
          }
        ]
      }
    ],
    faqs: [
      { question: 'Should I sell on TikTok Shop or Shopify?', answer: 'If you can only choose one, choose Shopify when you want control of the brand, checkout and customer data, and TikTok Shop when your product sells on impulse from short videos and you need demand. Most DTC brands do best with Shopify as the hub and TikTok Shop added as a sales channel.' },
      { question: 'What are the TikTok Shop fees?', answer: 'TikTok Shop mainly charges a referral fee on each order, a percentage that varies by product category and country, and the rates have changed over time. You also pay any creator commission you set and any discounts you fund. Check TikTok\'s current seller fee page for your market before modelling margins.' },
      { question: 'Can I connect TikTok Shop to my Shopify store?', answer: 'Yes, in supported markets. Shopify\'s TikTok app can connect your store to TikTok Shop and, depending on your region and the app version, sync products and inventory and bring TikTok Shop orders into Shopify for fulfilment. Check what it supports in your country before you launch.' },
      { question: 'Do I get customer emails from TikTok Shop orders?', answer: 'Not in the way you do on Shopify. TikTok Shop gives you the details needed to fulfil the order but limits how you can contact or market to buyers off the platform. Check TikTok\'s current seller data policy. If email and SMS retention matter to your business, keep Shopify as your main store.' },
      { question: 'Is TikTok Shop cheaper than Shopify?', answer: 'It depends on what you count. Shopify charges a plan fee and processing but you pay for all traffic. TikTok Shop charges a fee per order and often creator commission, but can bring shoppers without ad spend. Compare contribution margin per order on each channel, including ads, fees and commission, rather than the headline fees.' }
    ]
  }
];
