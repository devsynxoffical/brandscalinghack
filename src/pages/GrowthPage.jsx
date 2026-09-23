import React from 'react';
import { 
  ShoppingBag, 
  Video, 
  Target, 
  Search, 
  BarChart3, 
  Rocket, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  TrendingUp,
  Zap,
  Clock,
  Layers
} from 'lucide-react';
import { InstagramIcon } from '../components/Icons';

export default function GrowthPage({ onOpenBooking }) {
  const services = [
    {
      icon: <ShoppingBag size={28} />,
      title: 'High-Speed CRO & Shopify Architecture',
      subtitle: 'Average Store Conversion Rate: 4.2%+',
      items: [
        'Bespoke lightweight Shopify theme build (<1.8s mobile load time)',
        'Product page friction elimination and psychological layout redesign',
        'Dynamic tier bundle builders and 1-click Express checkouts',
        'Mobile UX ergonomics overhaul boosting average CVR by 35-70%'
      ]
    },
    {
      icon: <Video size={28} />,
      title: 'Direct-Response UGC & Ad Creative Studio',
      subtitle: '20-40 Custom Angles / Month',
      items: [
        'Competitor gap analysis & customer psychology research',
        '20-40 high-converting UGC concepts produced monthly on fixed cadence',
        'TikTok-native motion graphics, dynamic captions & hook testing matrix',
        'Rapid iteration scaling winning hooks into multiple aspect ratios'
      ]
    },
    {
      icon: <Target size={28} />,
      title: 'Meta & TikTok Paid Media Acquisition',
      subtitle: '$50M+ In Ad Spend Deployed',
      items: [
        'Simplified broad-targeting account structure built for Meta Advantage+',
        'Direct-response TikTok Spark Ads and creator whitelisting',
        'Server-side CAPI tracking setup eliminating tracking blind spots',
        'Aggressive capital deployment strategies maintaining target CAC'
      ]
    },
    {
      icon: <Search size={28} />,
      title: 'Google Search & Performance Max (P-Max)',
      subtitle: 'Capturing High-Intent Buyers',
      items: [
        'Capture high-intent shopping queries from buyers ready to purchase',
        'Full Google Merchant Center optimization and feed enrichment',
        'Branded search defense and high-ROAS competitor conquesting',
        'YouTube Shorts & Display retargeting for complete full-funnel coverage'
      ]
    },
    {
      icon: <Mail size={28} />,
      title: 'Klaviyo Email & SMS Lifecycle Retention',
      subtitle: '+28-35% Total Store Revenue from Email',
      items: [
        'Automated abandoned checkout, browse abandonment & welcome flows',
        'VIP customer segmentation boosting 90-day repeat purchase rate',
        'Post-purchase cross-sell sequences lifting overall customer Lifetime Value (LTV)',
        'High-converting promotional campaigns for peak holidays & product drops'
      ]
    },
    {
      icon: <Rocket size={28} />,
      title: '8 & 9-Figure Strategic Growth Advisory',
      subtitle: 'Direct 1-on-1 Access to Gaurav Kapoor',
      items: [
        'Weekly executive growth syncs with Gaurav Kapoor',
        'Unit economics, contribution margin & cashflow forecasting audits',
        'Supply chain & private label transition blueprint',
        'Brand equity positioning for private equity / strategic acquisition'
      ]
    }
  ];

  const roadmapPhases = [
    {
      phase: 'Phase 01 (Days 1–14)',
      title: 'Diagnostic Audit & Creative Foundation',
      deliverables: [
        'Full historical ad account & tracking audit (Meta, Google, TikTok).',
        'Shopify speed & checkout friction teardown.',
        'Initial 15 UGC creative scripts delivered for creator production.',
        'Klaviyo retention core flows audit & initial fix.'
      ]
    },
    {
      phase: 'Phase 02 (Days 15–45)',
      title: 'The Advantage+ Testing Machine',
      deliverables: [
        'Launch Advantage+ and broad-targeting scaling campaigns.',
        'Weekly testing cadences of 5-10 distinct hook angles.',
        'Conversion-optimized custom landing page deployment.',
        'Live tracking and daily CAC / contribution margin reporting.'
      ]
    },
    {
      phase: 'Phase 03 (Days 45–90+)',
      title: 'Aggressive Scale & International Expansion',
      deliverables: [
        'Duplicate winner ad sets into high-budget horizontal scaling campaigns.',
        'Expand into UK, CA, AU, and EU localized markets.',
        '1-click post-purchase upsells and subscription retention loops.',
        'Weekly executive review with Gaurav Kapoor to scale to $100k-$1M+/mo.'
      ]
    }
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#080a0f', color: '#ffffff' }}>
      {/* Header */}
      <section className="section-padding" style={{ paddingBottom: '40px', textAlign: 'center' }}>
        <div className="container">
          <span className="badge badge-orange" style={{ marginBottom: '16px' }}>
            FULL SERVICE GROWTH ENGINE
          </span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', color: '#fff', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '-0.02em', fontWeight: 900 }}>
            The Complete Infrastructure Behind <br /><span className="text-gradient-orange">8 & 9-Figure eCommerce Brands.</span>
          </h1>
          <p style={{ maxWidth: '820px', margin: '0 auto 30px auto', fontSize: '1.15rem', color: '#94a3b8', lineHeight: 1.6 }}>
            We don't sell piecemeal services. We partner with ambitious brand founders to build, optimize, and scale every single component of their revenue generation engine.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={onOpenBooking} style={{ padding: '16px 36px' }}>
              <span>SCHEDULE BRAND GROWTH AUDIT</span>
              <ArrowRight size={18} />
            </button>
            <a
              href="https://www.instagram.com/gauravecomm/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 26px' }}
            >
              <InstagramIcon size={18} color="#ff5722" />
              <span>Follow @gauravecomm</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Breakdown Grid */}
      <section className="container" style={{ paddingBottom: '80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#ff7043', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
            [ COMPREHENSIVE DELIVERABLES ]
          </div>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)', color: '#fff', fontWeight: 900, textTransform: 'uppercase' }}>
            The 6 Pillars of Predictable Scale
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '28px' }}>
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
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 112, 67, 0.4)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
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

                <div style={{ fontSize: '0.78rem', color: '#ffb300', fontWeight: 800, textTransform: 'uppercase', marginBottom: '6px' }}>
                  {srv.subtitle}
                </div>

                <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '18px', lineHeight: 1.3, fontWeight: 800 }}>
                  {srv.title}
                </h3>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, margin: 0 }}>
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

      {/* Transparent Scaling Roadmap (Phases 1-3) */}
      <section style={{ background: '#0a0e16', padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px auto' }}>
            <span className="badge badge-orange" style={{ marginBottom: '14px' }}>
              SCALING ROADMAP
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)', color: '#fff', fontWeight: 900, textTransform: 'uppercase', marginBottom: '16px' }}>
              The 90-Day Scaling Blueprint
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.6 }}>
              From initial audit to predictable multi-channel scale, here is the exact 90-day trajectory we execute for partner brands.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '26px' }}>
            {roadmapPhases.map((phase, idx) => (
              <div
                key={idx}
                style={{
                  background: '#0f141f',
                  border: '1.5px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '22px',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#ffb300', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase' }}>
                  <Clock size={16} />
                  <span>{phase.phase}</span>
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.35 }}>
                  {phase.title}
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0 }}>
                  {phase.deliverables.map((d, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.5 }}>
                      <CheckCircle2 size={16} color="#22c55e" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Action Section */}
      <section className="container" style={{ padding: '80px 20px' }}>
        <div
          style={{
            background: 'linear-gradient(145deg, #111723 0%, #090d14 100%)',
            border: '1.5px solid rgba(255, 112, 67, 0.35)',
            borderRadius: '28px',
            padding: '48px 36px',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)'
          }}
        >
          <span style={{ fontSize: '0.82rem', color: '#ffb300', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            READY TO SCALE?
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)', color: '#ffffff', fontWeight: 900, textTransform: 'uppercase', margin: '12px 0 18px 0' }}>
            Put $50M+ In Ad Spend Experience To Work
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto 32px auto' }}>
            Schedule a free 1-on-1 strategy call with Gaurav Kapoor and our growth team. We’ll audit your creative, ad accounts, and unit economics to map out your scale path.
          </p>

          <button className="btn-primary" onClick={onOpenBooking} style={{ padding: '16px 40px', fontSize: '1rem' }}>
            <span>CLAIM YOUR GROWTH AUDIT CALL</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
