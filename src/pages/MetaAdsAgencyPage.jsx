import React, { useEffect, useState } from 'react';
import { Megaphone, ArrowRight, ChevronDown, ChevronUp, FlaskConical, Layers, Activity, CheckCircle2, XCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What does a Meta ads agency do for an ecommerce brand?',
    answer: 'A Meta ads agency plans, builds and runs Facebook and Instagram campaigns that are measured on revenue, cost per acquisition and ROAS. Brand Scaling also produces the direct-response video creative, validates Conversions API tracking and ties the ads to the Shopify store, because media buying alone cannot fix a weak offer or a slow product page.'
  },
  {
    question: 'How much does a Meta ads agency cost?',
    answer: 'Most ecommerce Meta ads agencies charge a monthly retainer, a percentage of ad spend, or a mix of both. Brand Scaling works with brands spending at least $10,000 to $20,000 per month on paid ads, and every engagement starts with a Brand Growth Audit so you see the plan and the numbers before any fee is agreed.'
  },
  {
    question: 'What is a good ROAS for Meta ads?',
    answer: 'A good ROAS depends on gross margin. A store with 60% margin breaks even at 1.67x ROAS, a store with 40% margin needs 2.5x just to break even. Our client accounts typically run between 3x and 6x on scale, with top accounts such as $2.3M in sales at 11.6x ROAS on $200K spend. Use the free ROAS calculator to find your own break-even number.'
  },
  {
    question: 'Meta ads agency vs an in-house media buyer: which is better?',
    answer: 'An in-house buyer gives you one person and one skill set. An agency gives you media buying, creative production, CRO and tracking in one team, plus benchmarks from dozens of accounts in your niche. For brands under about $2M a month in revenue, an agency usually reaches profitable scale faster and costs less than hiring a full team.'
  },
  {
    question: 'How do you scale DTC brands with retargeting after iOS 14?',
    answer: 'We keep retargeting small and let Advantage+ shopping campaigns and catalog ads do most of the work. Retargeting budgets run at roughly 10% to 15% of spend, use dynamic product ads for site visitors and cart abandoners, and are measured against blended MER rather than platform-reported ROAS, so the account does not double count the same customers.'
  },
  {
    question: 'How long until a new Meta ads account shows results?',
    answer: 'The first 7 to 14 days are foundation work: tracking, offer, product page and the first creative batch. Most accounts see a clear winning angle inside the first 30 days and reach a stable scaling budget by day 60 to 90, depending on margin and creative volume.'
  },
  {
    question: 'Do you only work with Shopify stores?',
    answer: 'Shopify is the platform most of our clients use and the one our CRO team builds on, but the media buying and creative systems work for any DTC store with a tracked checkout. The requirement is product-market fit and enough margin to scale, not a specific platform.'
  }
];

const proofStats = [
  { value: '$50M+', label: 'Meta ad spend managed', note: 'Across 30+ ecommerce niches' },
  { value: '150+', label: 'Verified case studies', note: 'Real ad account and Shopify proofs' },
  { value: '11.6x', label: 'Top account ROAS', note: '$2.3M in sales on $200K spend' },
  { value: '12+', label: 'Years in ecommerce', note: 'Founder-led by Gaurav Kapoor' }
];

const results = [
  { value: '$2.3M', title: 'Sales at 11.6x ROAS', note: '$200K ad spend, broad Advantage+ structure' },
  { value: '$1.6M', title: 'On $140K ad spend', note: '11.98x ROAS with weekly creative refresh' },
  { value: '$146,184', title: 'In 27 days for a skincare brand', note: '$40.1K spend at 3.64x ROAS' },
  { value: '€118,000', title: 'First month for a UK skincare brand', note: 'New account, UGC-led launch' }
];

const pillars = [
  {
    icon: FlaskConical,
    title: 'Creative Testing Engine',
    text: 'Creative is the targeting on Meta now. We write and produce 30 to 50+ fresh direct-response angles a month, test them on a 45+ hook and angle matrix, and kill losers inside 72 hours so spend only sits on winners.'
  },
  {
    icon: Layers,
    title: 'Advantage+ Account Structure',
    text: 'Consolidated campaigns, broad targeting and cost controls instead of 40 micro-audiences fighting each other. Fewer ad sets exit the learning phase faster and scale budgets without the CPA spike.'
  },
  {
    icon: Activity,
    title: 'Tracking and Unit Economics',
    text: 'Conversions API validated against Shopify orders, blended MER and new-customer CAC reported weekly, and a break-even ROAS set from your real margin before the first dollar scales.'
  }
];

const phases = [
  { step: '01', title: 'Foundation (days 1 to 14)', text: 'Tracking audit and CAPI fix, offer and margin review, product page friction removed, first creative batch briefed.' },
  { step: '02', title: 'Test (days 15 to 45)', text: 'Weekly UGC and founder-led ad drops, hook and angle matrix, Advantage+ audience tests, winners identified on cost per purchase.' },
  { step: '03', title: 'Optimize (days 45 to 90)', text: 'Conversion rate, AOV and ROAS tuned together: bundles, quantity breaks and post-purchase upsells so the account can afford a higher CAC.' },
  { step: '04', title: 'Scale (day 90 onward)', text: 'Budget steps of 20% to 30%, cost caps on proven ads, 40+ new assets a month and expansion into new markets and TikTok.' }
];

export default function MetaAdsAgencyPage({ onNavigate, onOpenBooking }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const schemaId = 'meta-ads-agency-schema';
    let script = document.getElementById(schemaId);
    if (!script) {
      script = document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': 'https://www.brandscalinghacks.com/meta-ads-agency#service',
          name: 'Meta Ads Management for Ecommerce Brands',
          serviceType: 'Meta Ads Agency (Facebook and Instagram Ads Management)',
          provider: { '@id': 'https://www.brandscalinghacks.com/#organization' },
          areaServed: ['US', 'GB', 'CA', 'AU'],
          audience: { '@type': 'BusinessAudience', audienceType: 'DTC ecommerce and Shopify brands' },
          description: 'Meta ads agency for DTC ecommerce brands: Facebook and Instagram media buying, direct-response creative testing, Advantage+ scaling and Conversions API tracking, with $50M+ in managed ad spend.',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Meta Ads Services',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Meta Ads Account Audit and Restructure' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Direct-Response Creative Testing and UGC Production' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Advantage+ Shopping Campaign Scaling' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Conversions API and Tracking Setup' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Retargeting and Catalog Ads' } }
            ]
          }
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.brandscalinghacks.com/' },
            { '@type': 'ListItem', position: 2, name: 'Meta Ads Agency', item: 'https://www.brandscalinghacks.com/meta-ads-agency' }
          ]
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://www.brandscalinghacks.com/meta-ads-agency#faq',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer }
          }))
        }
      ]
    };

    script.textContent = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById(schemaId);
      if (el) el.remove();
    };
  }, []);

  const go = (page) => (e) => {
    e.preventDefault();
    onNavigate && onNavigate(page);
  };

  const linkStyle = { color: '#ff7043', textDecoration: 'underline', textUnderlineOffset: '3px' };
  const h2Style = { fontSize: '26px', fontWeight: 800, color: '#ffffff', marginBottom: '14px', textAlign: 'center' };
  const cardStyle = { background: '#111116', border: '1px solid #20202a', borderRadius: '16px', padding: '28px' };

  return (
    <div className="meta-ads-agency-wrapper" style={{ minHeight: '100vh', backgroundColor: '#070709', color: '#e2e8f0', paddingTop: '120px', paddingBottom: '90px' }}>
      <div className="container" style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 24px' }}>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 87, 34, 0.1)', border: '1px solid rgba(255, 87, 34, 0.25)', padding: '6px 16px', borderRadius: '999px', color: '#ff5722', fontSize: '13px', fontWeight: 700, marginBottom: '18px' }}>
            <Megaphone size={15} /> Meta Ads Agency for Ecommerce
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '20px' }}>
            Meta Ads Agency for Ecommerce Brands That Need Profitable Scale
          </h1>

          <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '780px', margin: '0 auto 30px', lineHeight: 1.6 }}>
            Facebook and Instagram ads run as one system with the creative, the tracking and the Shopify store. <strong>$50M+ in Meta ad spend managed</strong> across 30+ niches, with 150+ verified case studies from real ad accounts.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenBooking && onOpenBooking()}
              style={{ background: '#ff5722', color: '#ffffff', border: 'none', padding: '14px 30px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              Book a Meta Ads Audit <ArrowRight size={16} />
            </button>
            <a
              href="/case-studies"
              onClick={go('case-studies')}
              style={{ background: '#111116', color: '#e2e8f0', border: '1px solid #282836', padding: '14px 26px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, textDecoration: 'none' }}
            >
              See 150+ Case Studies
            </a>
          </div>
        </div>

        {/* Proof strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', margin: '40px 0 50px' }}>
          {proofStats.map((s) => (
            <div key={s.label} style={{ background: '#0e0e13', border: '1px solid #1f1f2a', borderRadius: '14px', padding: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '32px', fontWeight: 900, color: '#ff5722', lineHeight: 1.1, marginBottom: '6px' }}>{s.value}</div>
              <p style={{ margin: '0 0 4px', color: '#ffffff', fontWeight: 700, fontSize: '14px' }}>{s.label}</p>
              <p style={{ margin: 0, color: '#94a3b8', fontSize: '12px' }}>{s.note}</p>
            </div>
          ))}
        </div>

        {/* Definition box */}
        <div style={{ background: 'rgba(255, 87, 34, 0.06)', borderLeft: '4px solid #ff5722', borderTop: '1px solid rgba(255,87,34,0.2)', borderRight: '1px solid rgba(255,87,34,0.2)', borderBottom: '1px solid rgba(255,87,34,0.2)', borderRadius: '0 12px 12px 0', padding: '24px 28px', margin: '0 0 50px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', margin: '0 0 8px' }}>
            What a Meta Ads Agency Does for an Ecommerce Brand
          </h2>
          <p style={{ margin: 0, fontSize: '15px', color: '#cbd5e1', lineHeight: 1.65 }}>
            A Meta ads agency plans, builds and runs Facebook and Instagram campaigns that are judged on revenue, cost per acquisition and ROAS, not impressions. Brand Scaling goes further than media buying: we produce the direct-response creative, validate Conversions API tracking against Shopify orders and fix the product page the ads land on, so the account can scale without the usual CPA blow-up.
          </p>
        </div>

        {/* 3 pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', margin: '0 0 70px' }}>
          {pillars.map(({ icon: Icon, title, text }) => (
            <div key={title} style={cardStyle}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(255,87,34,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff5722', marginBottom: '18px' }}>
                <Icon size={22} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>{title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>

        {/* Results */}
        <div style={{ margin: '0 0 70px', background: '#0e0e13', border: '1px solid #1f1f2a', borderRadius: '18px', padding: '36px' }}>
          <h2 style={h2Style}>Meta Ads Results From Real Client Accounts</h2>
          <p style={{ color: '#94a3b8', textAlign: 'center', maxWidth: '620px', margin: '0 auto 30px', fontSize: '15px' }}>
            Every number below comes from an ad account or Shopify dashboard we manage. Screen recordings for each are in the{' '}
            <a href="/case-studies" onClick={go('case-studies')} style={linkStyle}>case study library</a>.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {results.map((r) => (
              <div key={r.value} style={{ background: '#14141c', border: '1px solid #252533', borderRadius: '12px', padding: '22px', textAlign: 'center' }}>
                <div style={{ fontSize: '34px', fontWeight: 900, color: '#ff5722', marginBottom: '6px' }}>{r.value}</div>
                <p style={{ margin: '0 0 6px', color: '#ffffff', fontWeight: 700 }}>{r.title}</p>
                <p style={{ margin: 0, color: '#94a3b8', fontSize: '13px' }}>{r.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div style={{ margin: '0 0 70px' }}>
          <h2 style={h2Style}>How We Scale a Meta Ads Account in 90 Days</h2>
          <p style={{ color: '#94a3b8', textAlign: 'center', maxWidth: '620px', margin: '0 auto 30px', fontSize: '15px' }}>
            The same four-phase engine behind our{' '}
            <a href="/growth" onClick={go('growth')} style={linkStyle}>ecommerce growth agency</a> service, applied to Facebook and Instagram.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
            {phases.map((p) => (
              <div key={p.step} style={{ ...cardStyle, padding: '24px' }}>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#ff5722', letterSpacing: '0.12em', marginBottom: '10px' }}>PHASE {p.step}</div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>{p.title}</h3>
                <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <div style={{ margin: '0 0 70px' }}>
          <h2 style={{ ...h2Style, marginBottom: '20px' }}>Meta Ads Agency vs. Freelance Media Buyer vs. In-House Hire</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', background: '#0e0e13', border: '1px solid #22222d', borderRadius: '8px' }}>
              <thead>
                <tr style={{ background: '#171720', borderBottom: '2px solid #2a2a38' }}>
                  <th style={{ padding: '14px 18px', color: '#ffffff', fontWeight: 700, textAlign: 'left' }}>Capability</th>
                  <th style={{ padding: '14px 18px', color: '#ff5722', fontWeight: 700, textAlign: 'left' }}>Brand Scaling</th>
                  <th style={{ padding: '14px 18px', color: '#94a3b8', fontWeight: 600, textAlign: 'left' }}>Freelance Media Buyer</th>
                  <th style={{ padding: '14px 18px', color: '#94a3b8', fontWeight: 600, textAlign: 'left' }}>In-House Hire</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Creative production', '30 to 50+ direct-response angles a month, in-house', 'Usually none, you supply the ads', 'Needs a separate creative team'],
                  ['Tracking and CAPI', 'Validated against Shopify orders every week', 'Basic pixel check', 'Depends on the hire'],
                  ['Store and offer (CRO)', 'Product page, bundles and upsells built with the ads', 'Out of scope', 'Separate developer needed'],
                  ['Benchmarks', '150+ accounts across 30+ niches', 'A handful of accounts', 'Your account only'],
                  ['Reporting', 'Blended MER, new-customer CAC, contribution margin', 'Platform ROAS', 'Varies'],
                  ['Time to first deployment', '7 to 14 days', 'Varies with availability', '2 to 3 months to hire and onboard']
                ].map((row) => (
                  <tr key={row[0]} style={{ borderBottom: '1px solid #1c1c26' }}>
                    <td style={{ padding: '14px 18px', fontWeight: 600, color: '#ffffff' }}>{row[0]}</td>
                    <td style={{ padding: '14px 18px', color: '#ff5722', fontWeight: 700 }}>{row[1]}</td>
                    <td style={{ padding: '14px 18px', color: '#cbd5e1' }}>{row[2]}</td>
                    <td style={{ padding: '14px 18px', color: '#cbd5e1' }}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Fit */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', margin: '0 0 70px' }}>
          <div style={cardStyle}>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>A good fit if you</h2>
            {[
              'Run a DTC or Shopify brand doing about $20K to $2M+ a month',
              'Spend, or are ready to spend, $10K+ a month on Meta ads',
              'Have product-market fit and at least 50% gross margin',
              'Want creative, media buying and CRO handled by one team'
            ].map((t) => (
              <p key={t} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', color: '#cbd5e1', fontSize: '14px', lineHeight: 1.6, margin: '0 0 10px' }}>
                <CheckCircle2 size={18} color="#22c55e" style={{ flexShrink: 0, marginTop: '2px' }} /> {t}
              </p>
            ))}
          </div>
          <div style={cardStyle}>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>Not a fit if you</h2>
            {[
              'Are pre-launch with no sales data yet',
              'Need a media buyer only and already have creative and CRO solved',
              'Sell a product with under 30% gross margin',
              'Want to test with under $5K a month in ad spend'
            ].map((t) => (
              <p key={t} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', color: '#cbd5e1', fontSize: '14px', lineHeight: 1.6, margin: '0 0 10px' }}>
                <XCircle size={18} color="#94a3b8" style={{ flexShrink: 0, marginTop: '2px' }} /> {t}
              </p>
            ))}
          </div>
        </div>

        {/* Related resources */}
        <div style={{ margin: '0 0 70px' }}>
          <h2 style={h2Style}>Go Deeper on Meta Ads</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {[
              { href: '/blog/bfcm-meta-ads-playbook', page: 'blog-bfcm-meta-ads-playbook', title: 'BFCM 2026 Meta Ads Playbook', text: 'Dates, budget plan, offers and creative that hit 3.98x ROAS.' },
              { href: '/blog/what-is-roas', page: 'blog-what-is-roas', title: 'What Is ROAS?', text: 'Formula, break-even thresholds and benchmarks by industry.' },
              { href: '/viral-creatives', page: 'viral-creatives', title: 'Direct-Response Creatives', text: '58+ live video hooks across 13 verticals.' },
              { href: '/roas-calculator', page: 'roas-calculator', title: 'Free ROAS Calculator', text: 'Find your break-even ROAS before you scale spend.' }
            ].map((r) => (
              <a key={r.href} href={r.href} onClick={go(r.page)} style={{ ...cardStyle, padding: '20px', textDecoration: 'none', display: 'block' }}>
                <p style={{ margin: '0 0 6px', color: '#ffffff', fontWeight: 700, fontSize: '15px' }}>{r.title}</p>
                <p style={{ margin: 0, color: '#94a3b8', fontSize: '13px', lineHeight: 1.5 }}>{r.text}</p>
              </a>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div style={{ margin: '0 0 70px' }}>
          <h2 style={{ ...h2Style, marginBottom: '20px' }}>Meta Ads Agency FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => (
              <div key={faq.question} style={{ background: '#111116', border: '1px solid #1f1f28', borderRadius: '12px', overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  aria-expanded={openFaqIndex === idx}
                  style={{ width: '100%', background: 'none', border: 'none', padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#ffffff', fontSize: '15px', fontWeight: 700, textAlign: 'left', cursor: 'pointer', gap: '12px' }}
                >
                  <span>{faq.question}</span>
                  {openFaqIndex === idx ? <ChevronUp size={18} color="#ff5722" /> : <ChevronDown size={18} color="#94a3b8" />}
                </button>
                {openFaqIndex === idx && (
                  <div style={{ padding: '14px 20px 20px', color: '#cbd5e1', fontSize: '14px', lineHeight: 1.6, borderTop: '1px solid #191922' }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div style={{ background: '#111116', border: '1px solid #2b2b3b', borderRadius: '18px', padding: '40px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
            Ready to see what your Meta account can do?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '15px', maxWidth: '580px', margin: '0 auto 26px', lineHeight: 1.6 }}>
            Book a Brand Growth Audit with Gaurav Kapoor. We review your ad account, creative, tracking and margins and show you the plan before any engagement.
          </p>
          <button
            onClick={() => onOpenBooking && onOpenBooking()}
            style={{ background: '#ff5722', color: '#ffffff', border: 'none', padding: '14px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, cursor: 'pointer' }}
          >
            Book Your Brand Growth Audit
          </button>
        </div>

      </div>
    </div>
  );
}
