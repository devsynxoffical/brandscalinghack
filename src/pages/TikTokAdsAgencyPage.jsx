import React, { useEffect, useState } from 'react';
import { Megaphone, ArrowRight, ChevronDown, ChevronUp, FlaskConical, Layers, Activity, CheckCircle2, XCircle } from 'lucide-react';
import { getRouteSchema, toJsonLd, tiktokFaqs as faqs } from '../data/pageSchemas';

const proofStats = [
  { value: '$50M+', label: 'Paid social spend managed', note: 'Across 30+ ecommerce niches' },
  { value: '30-50+', label: 'New creatives a month', note: 'Native, creator-led video' },
  { value: '150+', label: 'Verified case studies', note: 'Real ad account and Shopify proofs' },
  { value: '12+', label: 'Years in ecommerce', note: 'Founder-led by Gaurav Kapoor' }
];

const results = [
  { value: '$2.3M', title: 'Sales at 11.6x ROAS', note: 'Same creative engine, run on Meta' },
  { value: '$146,184', title: 'In 27 days for a skincare brand', note: '3.64x ROAS on $40.1K spend' },
  { value: '$80K', title: 'In 24 hours, 862 orders', note: 'Fitness brand flash sale' },
  { value: '€118,000', title: 'First month for a UK skincare brand', note: 'UGC-led launch' }
];

const pillars = [
  {
    icon: FlaskConical,
    title: 'Native Creator Content',
    text: 'TikTok punishes ads that look like ads. We brief creators on a 45+ hook and angle matrix, shoot native vertical video, and run the best organic-style posts as Spark Ads so social proof carries over to paid.'
  },
  {
    icon: Layers,
    title: 'TikTok Shop & Affiliates',
    text: 'TikTok Shop listings, creator affiliate recruitment and commission structure, sample seeding and GMV Max campaigns, connected to the same offer and margin model as your Shopify store.'
  },
  {
    icon: Activity,
    title: 'Tracking and Unit Economics',
    text: 'TikTok Pixel and Events API validated against Shopify orders, blended MER across TikTok and Meta, and a break-even ROAS set from your real margin before budget scales.'
  }
];

const phases = [
  { step: '01', title: 'Foundation (days 1 to 14)', text: 'Pixel and Events API audit, TikTok Shop or catalog setup, offer and margin review, first creator brief sent.' },
  { step: '02', title: 'Test (days 15 to 45)', text: 'Weekly creator and UGC drops, hook testing in one campaign, Spark Ads on organic winners, affiliates seeded with samples.' },
  { step: '03', title: 'Optimize (days 45 to 90)', text: 'Landing page and Shop listing conversion, bundles and AOV, cost caps on proven ads, affiliate commission tuning.' },
  { step: '04', title: 'Scale (day 90 onward)', text: 'Budget steps of 20% to 30%, GMV Max on TikTok Shop, 40+ new videos a month and the winners recut for Meta Reels.' }
];

export default function TikTokAdsAgencyPage({ onNavigate, onOpenBooking }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const schemaId = 'tiktok-ads-agency-schema';
    let script = document.getElementById(schemaId);
    if (!script) {
      script = document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = toJsonLd(getRouteSchema('/tiktok-ads-agency'));

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
            <Megaphone size={15} /> TikTok Ads Agency for Ecommerce
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '20px' }}>
            TikTok Ads Agency for Ecommerce Brands: Creator Ads, Spark Ads & TikTok Shop
          </h1>

          <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '780px', margin: '0 auto 30px', lineHeight: 1.6 }}>
            TikTok ads, Spark Ads, creator affiliates and TikTok Shop run as one system with the creative, the tracking and the Shopify store. Built by the team behind <strong>$50M+ in paid social spend</strong> and 150+ verified case studies.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenBooking && onOpenBooking()}
              style={{ background: '#ff5722', color: '#ffffff', border: 'none', padding: '14px 30px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              Book a TikTok Ads Audit <ArrowRight size={16} />
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
            What a TikTok Ads Agency Does for an Ecommerce Brand
          </h2>
          <p style={{ margin: 0, fontSize: '15px', color: '#cbd5e1', lineHeight: 1.65 }}>
            A TikTok ads agency plans, produces and runs TikTok campaigns judged on revenue, cost per acquisition and ROAS. For ecommerce that means three things working together: a steady supply of native creator videos, Spark Ads and in-feed campaigns that scale the winners, and TikTok Shop with affiliates where the product fits. Brand Scaling runs all three alongside Meta, so a winning hook on one platform is recut for the other.
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
          <h2 style={h2Style}>Results From the Same Creative Engine</h2>
          <p style={{ color: '#94a3b8', textAlign: 'center', maxWidth: '620px', margin: '0 auto 30px', fontSize: '15px' }}>
            We publish proof only from accounts we can show. These results come from client accounts run on the same creative and offer engine we use on TikTok; screen recordings are in the{' '}
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
          <h2 style={h2Style}>How We Scale a TikTok Ads Account in 90 Days</h2>
          <p style={{ color: '#94a3b8', textAlign: 'center', maxWidth: '620px', margin: '0 auto 30px', fontSize: '15px' }}>
            The same four-phase engine behind our{' '}
            <a href="/growth" onClick={go('growth')} style={linkStyle}>ecommerce growth agency</a> service, applied to TikTok ads and TikTok Shop.
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
          <h2 style={{ ...h2Style, marginBottom: '20px' }}>TikTok Ads Agency vs. Freelancer vs. In-House Hire</h2>
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
                  ['Tracking and Events API', 'Validated against Shopify orders every week', 'Basic pixel check', 'Depends on the hire'],
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
              'Spend, or are ready to spend, $10K+ a month on paid social',
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
          <h2 style={h2Style}>Go Deeper</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {[
              { href: '/meta-ads-agency', page: 'meta-ads-agency', title: 'Meta Ads Agency', text: 'Facebook and Instagram ads, $50M+ managed.' },
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
          <h2 style={{ ...h2Style, marginBottom: '20px' }}>TikTok Ads Agency FAQ</h2>
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
            Ready to add TikTok as a profitable channel?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '15px', maxWidth: '580px', margin: '0 auto 26px', lineHeight: 1.6 }}>
            Book a Brand Growth Audit with Gaurav Kapoor. We review your creative, tracking, offer and margins and show you whether TikTok, Meta or both should carry your next stage of growth.
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
