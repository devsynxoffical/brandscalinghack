// Blog batch 6: questions to ask a Meta ads agency, Meta ad account restricted.
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
  // 1. Questions to ask a Meta ads agency
  {
    slug: 'questions-to-ask-meta-ads-agency',
    title: 'Questions to Ask a Meta Ads Agency Before You Hire One',
    titleTag: 'Questions to Ask a Meta Ads Agency | Brand Scaling',
    metaDescription: '19 questions to ask a Meta ads agency before you hire, grouped by proof, creative, access, reporting, pricing and onboarding, with the red flags to watch for.',
    primaryKeyword: 'questions to ask a meta ads agency',
    secondaryKeywords: ['how to choose a meta ads agency for ecommerce', 'meta ads agency red flags', 'facebook ads agency questions', 'hiring a facebook ads agency', 'meta ads agency pricing models'],
    publishDate: '2026-11-11',
    updatedDate: '2026-11-11',
    readTime: '9 min read',
    category: 'Meta Ads',
    relatedLinks: [
      { href: '/meta-ads-agency', title: 'Meta Ads Agency for Ecommerce', text: 'See how we run Meta ads for DTC brands, and put these questions to us.' },
      { href: '/meta-ads-audit', title: 'Meta Ads Audit', text: 'A fixed-scope review of your account before you commit to any agency.' },
      { href: '/blog/how-much-does-a-dtc-agency-cost', title: 'How Much Does a DTC Agency Cost?', text: 'Pricing models and how to judge value against your margins.' },
      { href: '/compare/agency-vs-in-house-media-buyer', title: 'Agency vs In-House Media Buyer', text: 'When hiring your own media buyer makes more sense than an agency.' },
      { href: '/blog/choose-google-ads-agency-dtc', title: 'How to Choose a Google Ads Agency for DTC', text: 'The same vetting approach, applied to Google Ads.' }
    ],
    author,
    directAnswer: 'Before you hire a Meta ads agency, ask questions in six areas: proof that they have run accounts like yours, how they make and test creative, who owns the ad account and data, what they measure and report, how they charge and what the contract locks you into, and what happens in the first 30 days. Good agencies answer with specifics and show you their work. Vague answers, guaranteed results and any plan to run ads in an account they own are red flags.',
    tableOfContents: [
      { id: 'how-to-use-these-questions', text: 'How to use these questions' },
      { id: 'proof-and-fit', text: 'Proof and fit' },
      { id: 'creative', text: 'Creative' },
      { id: 'account-ownership', text: 'Account ownership and access' },
      { id: 'measurement-reporting', text: 'Measurement and reporting' },
      { id: 'pricing-contract', text: 'Pricing and contract' },
      { id: 'how-pricing-models-work', text: 'How Meta ads agency pricing models work' },
      { id: 'onboarding', text: 'Onboarding and the first 30 days' },
      { id: 'scorecard', text: 'A simple agency scorecard' },
      { id: 'faq-section', text: 'Frequently asked questions' }
    ],
    sections: [
      {
        id: 'how-to-use-these-questions',
        h2: 'How to use these questions',
        content: `Use these questions on a sales call with every agency on your shortlist, write down the answers, and score them the same way so you compare like with like. The goal is not to catch anyone out. It is to find out how the agency actually works before you hand over your ad account and budget.

Pay as much attention to how an agency answers as to what it says. A team that knows its process will answer quickly and with examples. A team that is selling a promise will change the subject, talk about "proprietary systems" without explaining them, or tell you what results to expect before it has seen your numbers.

Send the account ownership and pricing questions in writing before the call, so the call itself can focus on proof, creative and measurement.`
      },
      {
        id: 'proof-and-fit',
        h2: 'Proof and fit',
        content: `The first thing to find out is whether the agency has run Meta ads for brands like yours, at a similar spend, and can show it. An agency that is great at lead generation for local businesses may not know how to scale a Shopify store with a $50 product. Ask:`,
        list: [
          '1. Which ecommerce brands at our stage and price point have you run Meta ads for, and can we speak to one of them?',
          '2. Can you walk us through a real account, with the client\'s permission, rather than showing screenshots of ROAS?',
          '3. Who will run our account day to day, what is their experience, and how many other accounts do they manage?'
        ],
        subsections: [
          {
            h3: 'Good answer vs red flag',
            content: `A good answer names relevant brands or categories, offers a reference call, and is clear about who does the work. Many agencies cannot share client accounts openly, and that is fine, but they should be able to show results in context: spend, time period, what changed and what the margin looked like.

Red flags: only screenshots of a single great day, results with no spend or time frame attached, a senior person on the sales call who disappears after signing, or a vague answer about how many accounts each media buyer looks after.`
          }
        ]
      },
      {
        id: 'creative',
        h2: 'Creative',
        content: `Ask how the agency makes and tests ads, because creative is now the main lever in most Meta accounts. Targeting is now broad and largely automated, so the ads do most of the work of finding buyers. Ask:`,
        list: [
          '4. Who makes the ads: your team, freelancers, creators or us? How many new concepts will you test each month?',
          '5. How do you decide what to test, and how do you decide whether a test won or lost?',
          '6. Who owns the creative, the raw footage and the creator usage rights when we stop working together?'
        ],
        subsections: [
          {
            h3: 'Good answer vs red flag',
            content: `A good answer describes a testing rhythm, how new concepts differ from small variations of the same ad, and the metrics used to judge a test, such as cost per purchase and thumb-stop rate, over a set amount of spend. It should also be clear on who pays for creators and that you keep the files and usage rights you paid for.

Red flags: "we will use your existing ads", no answer on volume, testing judged on likes or clicks, or creative that stays with the agency when you leave. If the agency does not make creative, that can still work, but ask who will, how fast, and who writes the creative strategy behind the briefs.`
          }
        ]
      },
      {
        id: 'account-ownership',
        h2: 'Account ownership and access',
        content: `Your ad account, pixel, catalogue and business portfolio should always belong to you, with the agency added as a partner. Getting this wrong can cost you your ad history and data if the relationship ends. Ask:`,
        list: [
          '7. Will the ad account, pixel or dataset, catalogue and Page all stay in our business portfolio?',
          '8. What access level do you need, and how do we remove it if we part ways?',
          '9. Whose payment method will be on the ad account, and who pays Meta directly?'
        ],
        subsections: [
          {
            h3: 'Good answer vs red flag',
            content: `A good answer is simple: everything lives in your business portfolio, the agency requests partner access to the assets it needs, and your card or invoicing pays Meta directly. Removing a partner should take you a few clicks.

Red flags: running your ads from an ad account the agency owns, asking for your personal Facebook login, asking to be the only admin, or paying Meta on your behalf without a clear reason in the contract. If an agency insists on its own account, you lose the history and data when you leave, and a policy problem on its side can affect your ads too.`
          }
        ]
      },
      {
        id: 'measurement-reporting',
        h2: 'Measurement and reporting',
        content: `Ask what number the agency will manage your account to, because an agency that optimizes to Meta-reported ROAS alone can look good while your bank balance does not. The target should come from your margins and be checked against your store data, not only against Ads Manager. Ask:`,
        list: [
          '10. What is the main number you manage to, and how will you set the target from our margins?',
          '11. How do you handle the gap between what Meta reports and what Shopify shows?',
          '12. Will you check our pixel and Conversions API setup, including event deduplication, before spending more?',
          '13. What goes in a weekly report, and who walks us through it?'
        ],
        subsections: [
          {
            h3: 'Good answer vs red flag',
            content: `A good answer talks about break-even ROAS or a target cost per acquisition built from your product cost, shipping and fees, and about checking results at a total business level, such as revenue against total ad spend, alongside platform numbers. The agency should plan to audit tracking first, because every decision after that depends on it. Reports should explain what changed, why, and what happens next.

Red flags: promising a specific ROAS before seeing your account, reporting only Meta's numbers, no interest in your margins, or reports that are a dashboard link with no commentary.`
          }
        ]
      },
      {
        id: 'pricing-contract',
        h2: 'Pricing and contract',
        content: `Ask exactly how the agency gets paid, what the fee covers and how long you are committed for, and get the answers in writing. Ask:`,
        list: [
          '14. How do you charge, and what exactly does the fee include?',
          '15. What is the minimum term, the notice period, and what happens to our assets when it ends?',
          '16. Is creative production included, or is it a separate cost? Are there setup fees?'
        ],
        subsections: [
          {
            h3: 'Good answer vs red flag',
            content: `A good answer gives a clear fee structure, a written scope, and a notice period you can live with. Longer commitments are not automatically bad, since Meta accounts take time to test properly, but there should be a sensible exit if the work is not delivered.

Red flags: pricing that changes once you ask for detail, long lock-ins with no performance review points, hidden creative or "tech" fees, and guaranteed results. No agency controls Meta's auction, your product or your margins, so a guarantee usually means fine print you will not like.`
          }
        ]
      },
      {
        id: 'how-pricing-models-work',
        h2: 'How Meta ads agency pricing models work',
        content: `Meta ads agencies usually charge in one of three ways, or a mix of them: a percentage of ad spend, a flat monthly retainer, or a performance fee. Each model rewards the agency for something different, so the right one depends on your stage and what you want the agency to focus on. The table compares them without market prices, because rates vary widely by scope, spend and what is included.`,
        table: {
          headers: ['Model', 'How it works', 'What it rewards', 'Watch out for'],
          rows: [
            ['Percentage of ad spend', 'The fee is a share of what you spend on Meta each month, often with a minimum fee.', 'Managing and growing spend.', 'The agency earns more when spend rises, whether or not that spend is profitable.'],
            ['Flat retainer', 'A fixed monthly fee for an agreed scope of work.', 'Predictable work and planning.', 'Scope creep, and no direct link between the fee and results.'],
            ['Performance fee', 'Part or all of the fee is tied to an outcome, such as revenue or profit above a baseline.', 'Hitting the agreed outcome.', 'How the outcome is measured. Revenue-based fees can reward discounting and attributed sales that would have happened anyway.'],
            ['Hybrid', 'A base retainer plus a performance or spend-based element.', 'A balance of stable work and growth.', 'Complex terms that are hard to check. Make sure you can audit the numbers.']
          ]
        },
        list: [
          'If you choose a performance model, agree in writing what data the fee is based on, such as Shopify revenue or contribution margin, and what the baseline is.',
          'Whatever the model, compare total cost, including creative, against the contribution margin the agency needs to add to pay for itself.',
          'Ask how the fee changes as you scale, so you know what you will pay at double your current spend.'
        ],
        subsections: [
          {
            h3: 'Agency, freelancer or in-house?',
            content: `An agency is not always the right answer. If you spend enough to keep one person busy full time and you can manage them, an in-house media buyer can work well. Our comparison of agency and in-house options covers the trade-offs, and our guide to DTC agency cost goes deeper on judging value.`
          }
        ]
      },
      {
        id: 'onboarding',
        h2: 'Onboarding and the first 30 days',
        content: `Ask what the agency will do in the first 30 days, because a good onboarding plan tells you more about how it works than any pitch deck. The first month should be about understanding the business, fixing tracking and setting up a testing plan, not about doubling your budget. Ask:`,
        list: [
          '17. What will you do in the first 30 days, week by week?',
          '18. What do you need from us, such as margins, product data, past ads, access and approvals?',
          '19. When, and on what numbers, should we judge whether this is working?'
        ],
        subsections: [
          {
            h3: 'Good answer vs red flag',
            content: `A good answer covers an account and tracking review, a look at your margins and offers, a creative and testing plan, and a clear first round of launches. It sets a realistic review point and admits that not every early test will work.

Red flags: rebuilding the whole account on day one with no review, no questions about your margins or customers, and no agreed point at which you will judge progress. If you want an independent view before you commit, a fixed-scope Meta ads audit is a lower-risk first step than a long contract.`
          }
        ]
      },
      {
        id: 'scorecard',
        h2: 'A simple agency scorecard',
        content: `Score each agency from 0 to 2 in each area after the call: 0 for a red flag or no answer, 1 for a reasonable but vague answer, and 2 for a specific answer backed by evidence. An agency that scores 0 on account ownership should be ruled out whatever its total, because that risk is hard to undo.`,
        table: {
          headers: ['Area', 'Scores 2 when the agency', 'Scores 0 when the agency', 'Score (0 to 2)'],
          rows: [
            ['Proof and fit', 'Shows relevant work in context and offers a reference', 'Shows only screenshots or results with no context', ''],
            ['Creative', 'Explains volume, testing method and ownership', 'Has no plan for new creative', ''],
            ['Account ownership', 'Works as a partner in your business portfolio', 'Wants to run ads from its own account', ''],
            ['Measurement', 'Sets targets from your margins and audits tracking', 'Promises a ROAS before seeing the account', ''],
            ['Pricing and contract', 'Gives a clear written scope and exit terms', 'Guarantees results or hides fees', ''],
            ['Onboarding', 'Has a week-by-week first month and review point', 'Plans to scale spend straight away', '']
          ]
        },
        subsections: [
          {
            h3: 'Ask us the same questions',
            content: `We are a Meta ads agency, so we are on the other side of these calls too. Put every one of these questions to us. If you would like a starting point before any agency conversation, our Brand Growth Audit reviews your account, tracking, creative and margins and gives you the plan whether or not you hire us.`
          }
        ]
      }
    ],
    faqs: [
      { question: 'What questions should I ask a Meta ads agency?', answer: 'Ask about six areas: proof that they have run accounts like yours, how they make and test creative, who owns the ad account and data, what they measure and report, how they charge and what the contract commits you to, and what they will do in the first 30 days.' },
      { question: 'What are the red flags when hiring a Meta ads agency?', answer: 'The biggest red flags are running your ads from an account the agency owns, asking for your personal Facebook login, guaranteeing a ROAS or revenue figure, reporting only Meta\'s numbers, hiding creative or setup fees, and long lock-ins with no review point.' },
      { question: 'How do I choose a Meta ads agency for ecommerce?', answer: 'Shortlist agencies that have run Meta ads for ecommerce brands at your stage, ask each the same questions, score the answers on proof, creative, ownership, measurement, pricing and onboarding, and speak to a reference client before you sign.' },
      { question: 'Should the agency own my Facebook ad account?', answer: 'No. The ad account, pixel or dataset, catalogue and Page should stay in your business portfolio, with the agency given partner access. That way you keep your data and history if you change agencies, and you can remove their access yourself.' },
      { question: 'How do Meta ads agencies charge?', answer: 'Most charge a percentage of ad spend, a flat monthly retainer, a performance fee tied to revenue or profit, or a hybrid of these. Rates vary widely by scope and spend, so compare total cost, including creative, against the margin the agency needs to add.' }
    ]
  },
  // 2. Meta ad account restricted
  {
    slug: 'meta-ad-account-restricted',
    title: 'Meta Ad Account Restricted or Disabled: What It Means and How to Get It Back',
    titleTag: 'Meta Ad Account Restricted? How to Fix It | Brand Scaling',
    metaDescription: 'Meta ad account restricted or disabled? Learn the four types of restriction, where to check status, how to request a review and how DTC brands prevent it.',
    primaryKeyword: 'meta ad account restricted',
    secondaryKeywords: ['facebook ad account disabled', 'how to get facebook ad account back', 'advertising access restricted', 'business portfolio restricted', 'meta account quality', 'facebook ad account request review'],
    publishDate: '2026-11-11',
    updatedDate: '2026-11-11',
    readTime: '8 min read',
    category: 'Meta Ads',
    relatedLinks: [
      { href: '/meta-ads-agency', title: 'Meta Ads Agency for Ecommerce', text: 'Account setup and compliant creative run by a team that manages Meta ads every day.' },
      { href: '/meta-ads-audit', title: 'Meta Ads Audit', text: 'A review of account structure, tracking and creative, including policy risk.' },
      { href: '/for/health-wellness', title: 'Wellness Brand Marketing', text: 'Meta ads for health and wellness brands, where policy risk is highest.' },
      { href: '/for/supplements', title: 'Supplement Brand Marketing', text: 'Compliant creative and offers for supplement brands on Meta.' },
      { href: '/blog/facebook-ads-for-shopify', title: 'Facebook Ads for Shopify', text: 'Set up your business portfolio, pixel and ad account the right way from the start.' }
    ],
    author,
    directAnswer: 'A restricted or disabled Meta ad account means Meta has stopped that account, your profile or your whole business portfolio from running ads, usually because its systems flagged a policy issue, a payment problem or suspicious activity. Check the status in Account Quality, read the reason Meta gives, fix what you can, and request a review there. Do not open new accounts to keep advertising, because Meta treats that as circumvention.',
    definitionBox: {
      term: 'Meta ad account restriction',
      definition: 'A limit Meta places on an ad account, a person\'s ability to advertise, or a business portfolio when it believes Meta\'s Advertising Standards, Community Standards or payment terms have been broken. Restricted assets cannot run ads until the issue is resolved or a review succeeds.'
    },
    tableOfContents: [
      { id: 'four-types', text: 'Disabled, restricted, portfolio restricted or ad rejected?' },
      { id: 'where-to-check', text: 'Where to check your status' },
      { id: 'request-review', text: 'How to request a review' },
      { id: 'common-causes', text: 'Common causes for DTC brands' },
      { id: 'payment-restrictions', text: 'Payment failures and unpaid balances' },
      { id: 'what-not-to-do', text: 'What not to do' },
      { id: 'prevention-checklist', text: 'Prevention checklist' },
      { id: 'faq-section', text: 'Frequently asked questions' }
    ],
    sections: [
      {
        id: 'four-types',
        h2: 'Disabled, restricted, portfolio restricted or ad rejected?',
        content: `There are four different problems that people describe as "my ad account got banned", and each one is fixed differently. Work out which one you have before you do anything else.`,
        table: {
          headers: ['What you see', 'What is affected', 'What it usually means'],
          rows: [
            ['Ad account disabled', 'One ad account. Its ads stop and you cannot create new ones in it.', 'Meta flagged activity in that account, such as policy violations, a payment problem or suspicious behaviour.'],
            ['Advertising access restricted on a profile', 'A person\'s Facebook profile. They cannot create or manage ads on any account, even ones they admin.', 'Meta has concerns about that person\'s activity, identity or links to other restricted assets.'],
            ['Business portfolio restricted', 'The whole business portfolio (formerly Business Manager) and often every ad account inside it.', 'Meta flagged the business itself, its admins or the assets connected to it.'],
            ['Ad rejected', 'One ad. Other ads keep running.', 'That ad, its landing page or its targeting did not meet Meta\'s Advertising Standards.']
          ]
        },
        list: [
          'An ad rejection is the mildest. You can edit the ad or request a review of that ad on its own.',
          'Repeated rejections matter, though. A pattern of rejected ads can lead to wider restrictions on the account or the people running it.',
          'A profile restriction follows the person, not the brand. If your media buyer\'s profile is restricted, adding a different admin may let the brand keep advertising while that person appeals.'
        ]
      },
      {
        id: 'where-to-check',
        h2: 'Where to check your status',
        content: `Check your status in Account Quality, Meta's page for the restrictions on your profile, ad accounts, Pages and business portfolio. Meta has previously called this area Business Support Home, and you may still see that name in older guides.

You can usually reach Account Quality from Meta Business Suite, from the menu in Ads Manager, or from the notice Meta shows when an asset is restricted. It lists each restricted asset, the reason Meta gives, and whether you can request a review. Meta also sends notices by email and in the Business Suite notifications, so check those too.

Read the stated reason closely. "Unacceptable business practices", "circumventing systems", "unpaid balance" and a specific ad policy all point to different fixes. If the reason is unclear, open the Meta Business Help Center for the latest guidance on that reason, because Meta updates the wording, menus and options regularly.`
      },
      {
        id: 'request-review',
        h2: 'How to request a review',
        content: `If you believe the restriction is a mistake, or you have fixed the cause, request a review from Account Quality. Select the restricted asset, choose the option to request a review, and follow the steps Meta shows. The steps vary by restriction type and region, and Meta may ask you to confirm your identity, for example with an ID document or a short video selfie, or to secure your account first.

Before you submit, do the groundwork:`,
        list: [
          'Fix what caused it. Edit or remove ads that break policy, clean up landing pages and settle any unpaid balance.',
          'Secure every profile involved. Turn on two-factor authentication and remove any admins or partners you do not recognise.',
          'Keep your explanation short and factual if Meta gives you a space to write one. Explain what the business sells and what you changed.',
          'Request one review per asset and wait. The number of reviews you can request may be limited, and some decisions are final.',
          'Keep a record of dates, screenshots and the reasons shown, in case you need to contact Meta support or your rep later.'
        ],
        subsections: [
          {
            h3: 'How long does a review take?',
            content: `Meta does not commit to a fixed review time, and it varies by case. Some reviews come back quickly and others take much longer. Account Quality shows when a review is in progress and the outcome when it is done. If you have a Meta marketing rep through an agency or your own spend, they may be able to help you find the right support route, but they cannot overrule a policy decision.`
          }
        ]
      },
      {
        id: 'common-causes',
        h2: 'Common causes for DTC brands',
        content: `Most restrictions on DTC brands come from ad copy and claims, payment problems, unusual account behaviour or a poor buyer experience. Meta's systems are largely automated, so it is the pattern of signals that matters, not intent. These are the causes we see most often.`,
        list: [
          'Health and before-and-after claims. Supplements, skincare and weight management ads that promise outcomes or show dramatic before-and-after images often break Meta\'s policies on health and personal health claims.',
          'Personal attributes wording. Meta does not allow ads that assert or imply someone\'s personal attributes, such as a health condition or financial situation. "Struggling with acne?" or "Tired of your belly fat?" can be enough.',
          'Payment failures. A declined card or an unpaid balance can disable an ad account until the balance is settled.',
          'Sudden spend spikes on new accounts. A brand-new ad account that jumps straight to a large daily budget can look like a compromised or fraudulent account.',
          'Circumvention signals. Links to previously disabled accounts or profiles, landing pages that show reviewers something different from users, or using someone else\'s account to keep advertising.',
          'Low customer feedback. Meta collects feedback from people who bought after seeing your ads. A low feedback score, often from slow shipping or products that do not match the ad, can reduce delivery and in some cases lead to restrictions.',
          'Compromised accounts. A hacked admin profile that runs unfamiliar ads, often in another currency or market, can get the whole portfolio restricted.'
        ],
        subsections: [
          {
            h3: 'Higher-risk categories',
            content: `Supplements, health and wellness, skincare, weight management and anything that touches medical claims draw the most scrutiny. If you sell in these categories, write ads that describe the product and the experience of using it rather than promising a result, and make sure the landing page follows the same rules. Our health and wellness and supplement pages cover how we approach compliant creative for these brands.`
          }
        ]
      },
      {
        id: 'payment-restrictions',
        h2: 'Payment failures and unpaid balances',
        content: `A payment restriction is usually the quickest to fix: pay the outstanding balance and the account can often return to normal. Go to Billing and payments for the ad account, check the failed charge, and either retry it or add a working payment method and pay the balance.

To stop it happening again, keep a backup payment method on the account, make sure your card limit can cover your daily spend, and tell your bank to expect regular charges from Meta. Give each ad account its own payment method where you can, so one failed card does not affect every account in the portfolio. If the account stays disabled after the balance is paid, request a review from Account Quality.`
      },
      {
        id: 'what-not-to-do',
        h2: 'What not to do',
        content: `Do not open new ad accounts, profiles or business portfolios to keep advertising while you are restricted. Meta treats this as circumvention, and it is one of the surest ways to turn a fixable restriction into a permanent one across every asset you own.

Avoid these as well:`,
        list: [
          'Buying, renting or borrowing ad accounts or profiles from other people.',
          'Paying "unban" services that ask for your login details. They often cannot do what they promise, and sharing logins puts your assets at further risk.',
          'Resubmitting the same rejected ad again and again without changing it.',
          'Using landing pages or redirects that show Meta\'s reviewers something different from what customers see.',
          'Deleting the assets or admins involved and starting over. Meta can link new assets to old ones.'
        ]
      },
      {
        id: 'prevention-checklist',
        h2: 'Prevention checklist',
        content: `The best defence against a restricted Meta ad account is a well-set-up business portfolio, a gradual spend ramp and ads and pages that follow policy from the start. Work through this list once, then review it whenever you add a new ad account or team member. A Meta ads audit should include the same checks.`,
        list: [
          'Verify your business in the business portfolio settings, using your registered business details.',
          'Turn on two-factor authentication for every person with access, and require it in the portfolio settings.',
          'Have at least two trusted admins, so one restricted or locked-out profile does not lock the brand out.',
          'Give agencies and freelancers partner access through their own business portfolio rather than sharing logins.',
          'Ramp spend gradually on new ad accounts instead of starting at full budget.',
          'Keep landing pages compliant: clear business details, contact information, shipping and returns policies, and claims that match the ads.',
          'Use separate payment methods for each ad account, plus a backup card.',
          'Check your ads against Meta\'s Advertising Standards before launch, especially health, personal attributes and before-and-after content.',
          'Watch your customer feedback score and fix shipping or product issues that drive complaints.',
          'Check Account Quality every week, so you catch warnings and rejected ads before they build up.'
        ],
        subsections: [
          {
            h3: 'If you are restricted right now',
            content: `Confirm which of the four problems you have, read the reason in Account Quality, fix the cause, secure your accounts and request a review. Check the Meta Business Help Center for the current steps, since the process changes. Then use the waiting time to fix the setup issues on this list, so the next account you run is harder to restrict. If you want a second pair of eyes on the setup, our team can review it as part of a Brand Growth Audit.`
          }
        ]
      }
    ],
    faqs: [
      { question: 'Why was my Meta ad account restricted?', answer: 'Meta restricts ad accounts when its systems flag policy violations, payment problems or suspicious activity. For DTC brands the common causes are health or before-and-after claims, personal attributes wording, failed payments, sudden spend spikes on new accounts and signs of circumvention. Account Quality shows the reason Meta gives.' },
      { question: 'How do I get my Facebook ad account back?', answer: 'Open Account Quality, find the disabled account, read the reason, fix the cause and request a review. Meta may ask you to verify your identity or secure your account first. If the cause is an unpaid balance, paying it often restores the account.' },
      { question: 'What is the difference between a disabled ad account and restricted advertising access?', answer: 'A disabled ad account affects one ad account. Restricted advertising access affects a person\'s profile, so they cannot run or manage ads on any account. A business portfolio restriction can affect every ad account inside the portfolio.' },
      { question: 'How long does a Meta ad account review take?', answer: 'Meta does not publish a fixed time, and it varies by case. Account Quality shows when a review is in progress and the outcome when it is complete. Check the Meta Business Help Center for current guidance.' },
      { question: 'Can I just create a new ad account if mine is disabled?', answer: 'No. Opening new ad accounts, profiles or business portfolios to keep advertising while restricted is treated by Meta as circumventing its systems, and it can lead to permanent restrictions on everything linked to you. Request a review instead.' }
    ]
  }
];
