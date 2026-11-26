// Fourth batch of hand-written editorial write-ups for case studies, in the same shape as
// CASE_EDITORIAL_EXTRA_3 in caseEditorialExtra3.js: summary, challenge, approach, whatWeDid and
// result (challenge, approach and whatWeDid are null when the original post does not give
// enough detail). Every number and claim comes from the original caption or is arithmetic
// directly implied by it; card template figures that the caption does not support are not used.
export const CASE_EDITORIAL_EXTRA_4 = {
  '376000-25-days-dtc-client-meta-ads': {
    summary: 'A DTC client made $376,000 in 25 days from Meta Ads during Q4. The Ads Manager view in the video covers 1 to 25 October 2026 and totals $376,256.68 in purchase conversion value from 2,508 purchases, an average of about $150 per purchase and roughly $15,000 a day. The top ad set alone brought 661 purchases worth $99,206.68, and the next one 553 purchases worth $82,950. The post does not give ad spend or ROAS. The method, finding winning creatives, testing them and scaling the winners, is covered in a full live breakdown on YouTube.',
    challenge: null,
    approach: 'Find winning creatives, test them against each other, then move budget into the winners and scale them through Q4.',
    whatWeDid: [
      'Searched for winning creative angles before spending at scale.',
      'Tested the creatives and kept only the ones that proved themselves.',
      'Scaled the winning ad sets: the top two brought 1,214 of the 2,508 purchases.',
      'Recorded the full process as a live breakdown on YouTube.'
    ],
    result: '$376,256.68 in Meta purchase value from 2,508 purchases between 1 and 25 October 2026 (ad spend and ROAS not stated).'
  },

  '307950-revenue-fitness-brand-2053-units-30-days': {
    summary: 'A DTC fitness brand made $307,950 in revenue from 2,053 units sold over the last 30 days, shown in the Meta Ads Manager view in the video. That is an average of exactly $150 per purchase ($307,950 divided by 2,053) and about $10,265 a day. One ad set carried most of the volume: 1,198 purchases worth $179,700, about 58% of the total. The post frames the result as Q4 preparation for fitness brands. It does not give ad spend or ROAS.',
    challenge: null,
    approach: 'Put most of the budget behind the ad set that proves itself, while smaller ad sets keep testing, ahead of Q4.',
    whatWeDid: null,
    result: '$307,950 in revenue and 2,053 units sold in 30 days for a DTC fitness brand on Meta Ads (ad spend and ROAS not stated).'
  },

  'dropshipping-case-study-21k-in-one-day': {
    summary: 'A four-month-old dropshipping store run for a done-for-you client made $21,000 in a single day. The post says the store had already brought in multiple six figures over the previous month. Scaling ran on high-budget manual bids, CBO campaigns and a slow-cooked "Micro Scaler" campaign, with profit margins averaging 30% and moving between 25% and 40% from day to day. At the 30% average, a $21,000 day leaves roughly $6,300 in profit. The next steps were better customer support, stronger product pages and deeper retargeting videos for hesitant buyers.',
    challenge: null,
    approach: 'Scale with manual bids and CBOs while a slower Micro Scaler campaign builds, then make the infrastructure solid before pushing for bigger days. Retargeting should go deeper into product benefits, culture and why the buyer needs the product, instead of showing the same ad again. The post names $100,000 in a single day as the next goal, not a result.',
    whatWeDid: [
      'Ran high-budget manual bid campaigns alongside CBO campaigns.',
      'Kept a slow-cooked Micro Scaler campaign running as part of the scaling structure.',
      'Held profit margins at an average of 30%, with daily swings between 25% and 40%.',
      'Planned the next phase: stronger customer support, optimized product pages and in-depth retargeting videos for hesitant buyers.'
    ],
    result: '$21,000 in one day from a four-month-old dropshipping store, at an average profit margin of 30% (25% to 40% day to day).'
  },

  'high-ticket-case-study-100k-in-23-days': {
    summary: 'A store selling a high-ticket product crossed $100,000 in sales in 23 days, an average of about $4,350 a day ($100,000 divided by 23). In that window the team tested almost 23 products and found 7 winners, a hit rate of roughly 30%. The post credits the result to how the landing pages were structured. The rest of the caption offers a free SOP on finding products with $100,000-a-month potential, plus the list of the 7 winners, in exchange for a comment. It gives no ad spend, ROAS or price point.',
    challenge: null,
    approach: 'Test many products quickly, keep only the ones that prove themselves, and rely on landing page structure to convert buyers of a high-ticket product.',
    whatWeDid: [
      'Tested almost 23 products within the 23 days.',
      'Kept the 7 products that proved to be winners.',
      'Structured the landing pages, which the post names as the main reason for the result.'
    ],
    result: '$100,000+ in sales in 23 days with a high-ticket product, from 7 winners out of almost 23 products tested.'
  },

  'dropshipping-case-study-10809-in-24-hours': {
    summary: 'A dropshipping client turned one product into a 5-figure day: $10,809 in sales in 24 hours on $2,882 of ad spend, a 3.75 ROAS. That leaves $7,927 of revenue above ad spend ($10,809 minus $2,882). The post argues that most dropshippers stay stuck testing dozens of products, when one high-demand, conversion-optimized product is enough to move a store from struggling to scaling. It credits execution rather than luck, and says the ad creatives, copy and landing page structure behind the product are documented separately, not in the caption.',
    challenge: 'The post describes the common trap: dropshippers testing dozens of products and hoping for a winner instead of building one product properly.',
    approach: 'Put the spend behind a single high-demand product and execute the creative, copy and landing page around it, instead of spreading the budget across many tests.',
    whatWeDid: null,
    result: '$10,809 in sales in 24 hours on $2,882 of ad spend (3.75 ROAS) from a single product, dropshipping client.'
  },

  'dtc-case-study-16k-in-one-day': {
    summary: 'An ecom brand made $16,000 in a single day at a 2.06 ROAS, with 111 units sold and a $150 average order value. A 2.06 ROAS on $16,000 implies roughly $7,770 of ad spend ($16,000 divided by 2.06), and the post says the real revenue is higher because iOS tracking underreports it. The team says it did not find a winning ad. With the same product and the same ad account, it fixed the offer for cold traffic, the creatives and a funnel built to raise order value.',
    challenge: 'The post says most brands rely on incomplete Ads Manager data, test creatives with no real angle and try to scale before they are actually profitable, and then stay stuck.',
    approach: 'Fix the system that drives growth rather than hunt for one winning ad: same product, same ad account, different offer, creatives and funnel.',
    whatWeDid: [
      'Built an offer that converts on cold traffic.',
      'Made creatives designed to stop attention.',
      'Set up a funnel that pushes average order value up, to a $150 AOV on this day.'
    ],
    result: '$16,000 in one day at a 2.06 ROAS (underreported because of iOS), 111 units sold, $150 AOV.'
  },

  'dtc-case-study-53387-in-one-day': {
    summary: 'By 9:11 PM on a single Q4 day, a store had crossed $53,387.33 in sales on $12,943.33 of ad spend, a 4.12 ROAS. That leaves about $40,444 of revenue above ad spend ($53,387.33 minus $12,943.33), and the day was not over when the post went up, so the final total could be higher. The caption is a thank-you note to the community rather than a breakdown. It offers a detailed case study on the ad strategy, targeting and offer if enough readers comment, so no method is described here.',
    challenge: null,
    approach: null,
    whatWeDid: null,
    result: '$53,387.33 in sales on $12,943.33 of ad spend (4.12 ROAS) by 9:11 PM on one day in Q4.'
  },

  'dtc-case-study-68510-in-one-day': {
    summary: 'After 8 months of optimizing, testing and refining strategies, a client hit $68,510 in sales in one day on $17,764 of ad spend. That works out to a ROAS of about 3.86 ($68,510 divided by $17,764) and $50,746 of revenue above ad spend. The post frames the day as the payoff of long, patient work rather than a quick win, posted as Black Friday approached and many clients were positioned for it. Beyond that, the caption is a Q4 offer of 5 personal spots, so it gives no campaign detail.',
    challenge: null,
    approach: 'Spend months optimizing, testing and refining before Q4, so the account is ready to scale into the most profitable season of the year.',
    whatWeDid: null,
    result: '$68,510 in one day on $17,764 of ad spend (about 3.86 ROAS), after 8 months of optimization.'
  }
};
