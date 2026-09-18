import React from 'react';
import { ShoppingBag, Video, Target, Search, BarChart3, Rocket, Mail, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function GrowthPage({ onOpenBooking }) {
  const services = [
    {
      icon: <ShoppingBag size={30} />,
      title: 'Conversion Rate Optimization (CRO) & Shopify',
      items: [
        'Custom Shopify Theme speed optimization (<2s load time)',
        'Product page friction elimination and psychological layout redesign',
        'In-cart dynamic bundle builders and 1-click Express checkouts',
        'Mobile UX ergonomics overhaul boosting average CVR by 35-70%'
      ]
    },
    {
      icon: <Video size={30} />,
      title: 'Full-Service UGC & Performance Ad Creative',
      items: [
        'Competitor gap analysis & customer psychology research',
        '20-40 high-converting UGC concepts produced monthly on fixed cadence',
        'TikTok-native motion graphics, dynamic captions & hook testing matrix',
        'Iterative scaling of winning angles across all vertical/square formats'
      ]
    },
    {
      icon: <Target size={30} />,
      title: 'Meta & TikTok Paid Media Acquisition',
      items: [
        'Simplified broad-targeting account structure built for Meta Advantage+',
        'Direct-response TikTok Spark Ads and creator whitelisting',
        'Server-side CAPI tracking setup eliminating tracking blind spots',
        'Aggressive capital deployment strategies maintaining target CAC'
      ]
    },
    {
      icon: <Search size={30} />,
      title: 'Google Search & Performance Max (P-Max)',
      items: [
        'Capture high-intent shopping queries from buyers ready to purchase',
        'Full Google Merchant Center optimization and feed enrichment',
        'Branded search defense and high-ROAS competitor conquesting',
        'YouTube Shorts & Display retargeting for complete full-funnel coverage'
      ]
    },
    {
      icon: <Mail size={30} />,
      title: 'Klaviyo Email & SMS Lifecycle Retention',
      items: [
        'Automated abandoned checkout, browse abandonment & welcome flows',
        'VIP customer segmentation boosting 90-day repeat purchase rate',
        'Post-purchase cross-sell sequences lifting overall customer Lifetime Value (LTV)',
        'High-converting promotional campaigns for peak holidays & product drops'
      ]
    },
    {
      icon: <Rocket size={30} />,
      title: '8 & 9-Figure Strategic Growth Advisory',
      items: [
        'Weekly executive growth syncs with Gaurav Kapoor',
        'Unit economics, contribution margin & cashflow forecasting audits',
        'Supply chain & private label transition blueprint',
        'Brand equity positioning for private equity / strategic acquisition'
      ]
    }
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#080a0f' }}>
      {/* Header */}
      <section className="section-padding" style={{ paddingBottom: '40px', textAlign: 'center' }}>
        <div className="container">
          <span className="badge badge-orange" style={{ marginBottom: '16px' }}>
            FULL SERVICE GROWTH ENGINE
          </span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', color: '#fff', marginBottom: '18px' }}>
            The Complete Infrastructure Behind <br /><span style={{ color: '#ff5722' }}>8 & 9-Figure eCommerce Brands.</span>
          </h1>
          <p style={{ maxWidth: '820px', margin: '0 auto 30px auto', fontSize: '1.15rem', color: '#94a3b8', lineHeight: 1.6 }}>
            We don't sell piecemeal services. We partner with ambitious brand founders to build, optimize, and scale every single component of their revenue generation engine.
          </p>

          <button className="btn-primary" onClick={onOpenBooking} style={{ padding: '16px 36px' }}>
            <span>SCHEDULE BRAND GROWTH AUDIT</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Services Breakdown Grid */}
      <section className="container" style={{ paddingBottom: '80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '28px' }}>
          {services.map((srv, idx) => (
            <div
              key={idx}
              style={{
                background: '#0f131a',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
                padding: '36px',
                boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
            >
              <div>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: 'rgba(255,87,34,0.12)',
                    border: '1px solid rgba(255,87,34,0.3)',
                    color: '#ff7043',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}
                >
                  {srv.icon}
                </div>

                <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '18px', lineHeight: 1.3 }}>
                  {srv.title}
                </h3>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {srv.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: '#cbd5e1' }}>
                      <CheckCircle2 size={16} color="#ff5722" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guarantee & Call to Action */}
      <section className="container" style={{ paddingBottom: '100px' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #151a24 0%, #0d1017 100%)',
            border: '2px solid rgba(255,87,34,0.4)',
            borderRadius: '28px',
            padding: '48px',
            textAlign: 'center',
            maxWidth: '960px',
            margin: '0 auto'
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#4ade80', fontWeight: 800, marginBottom: '12px' }}>
            <ShieldCheck size={20} />
            <span>EXECUTIVE COMMITMENT</span>
          </div>
          <h2 style={{ fontSize: '2.4rem', color: '#fff', marginBottom: '16px' }}>
            Ready To Turn Attention Into Predictable Revenue?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto 30px auto', lineHeight: 1.6 }}>
            We only take on a limited number of partner brands each quarter to ensure maximum bandwidth, senior creative direction, and hands-on scaling execution.
          </p>
          <button className="btn-primary" onClick={onOpenBooking} style={{ fontSize: '1.05rem', padding: '16px 36px' }}>
            <span>APPLY FOR BRAND PARTNERSHIP</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
