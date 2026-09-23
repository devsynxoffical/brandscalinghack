import React, { useState } from 'react';
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
  Layers,
  Calculator,
  ChevronDown,
  XCircle,
  HelpCircle,
  DollarSign
} from 'lucide-react';
import { InstagramIcon } from '../components/Icons';

export default function GrowthPage({ onOpenBooking }) {
  // Calculator state
  const [currentMonthlyRev, setCurrentMonthlyRev] = useState(35000);
  const [currentRoas, setCurrentRoas] = useState(2.2);
  const [targetCvr, setTargetCvr] = useState(3.8);
  const [openFaq, setOpenFaq] = useState(null);

  // Projected metrics with MDF™ System
  const projectedRevIncrease = Math.round(currentMonthlyRev * (targetCvr / 2.0) * 1.35);
  const projectedMonthlyRev = currentMonthlyRev + projectedRevIncrease;
  const annualScalingPotential = projectedMonthlyRev * 12;

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

  const comparisonData = [
    {
      feature: 'Creative Volume & Iteration',
      typicalAgency: '2-4 basic static/image ads per month',
      inHouse: 'Slow, expensive freelancers with high turnover',
      brandScaling: '20-40 custom direct-response UGC videos & hooks / mo'
    },
    {
      feature: 'Leadership & Direct Guidance',
      typicalAgency: 'Junior account manager with 10+ other accounts',
      inHouse: 'No seasoned $50M+ strategist in the loop',
      brandScaling: 'Direct 1-on-1 access & weekly syncs with Gaurav Kapoor'
    },
    {
      feature: 'Conversion Rate Optimization (CRO)',
      typicalAgency: 'Generic advice; cannot code or redesign landers',
      inHouse: 'Expensive $10k+ agency or slow custom developer',
      brandScaling: 'Full custom high-speed Shopify page & bundle builds included'
    },
    {
      feature: 'Account Architecture',
      typicalAgency: 'Outdated interest-stacking with rapid ad fatigue',
      inHouse: 'Random testing with no disciplined rules',
      brandScaling: 'Advantage+ & broad-audience scaling built for algorithm efficiency'
    },
    {
      feature: 'Reporting & Transparency',
      typicalAgency: 'Confusing monthly PDF reports with vanity clicks',
      inHouse: 'Fragmented spreadsheets without attribution',
      brandScaling: 'Live real-time dashboards tracking Net Contribution Margin'
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

  const faqs = [
    {
      q: 'What minimum ad budget is recommended to partner with Brand Scaling Hacks?',
      a: 'We typically partner with eCommerce brands spending at least $5,000–$10,000/month on paid advertising (or well-capitalized brands ready to scale aggressively). This gives the algorithm sufficient conversion data to validate creative hooks rapidly and scale spend efficiently.'
    },
    {
      q: 'How fast do we get new direct-response creatives produced?',
      a: 'Our creative studio operates on a rapid 7-10 day turnaround from script approval to creator filming and final dynamic motion edits. You will receive 20-40 fresh high-converting concepts every single month.'
    },
    {
      q: 'Do you manage both paid ads and our Shopify store optimization?',
      a: 'Yes. Media buying without conversion rate optimization is pouring water into a leaky bucket. We redesign and optimize your Shopify product pages, build custom high-speed landing pages, and implement 1-click upsells to maximize your average order value (AOV) and conversion rate (CVR).'
    },
    {
      q: 'Will I work directly with Gaurav Kapoor?',
      a: 'Yes. Unlike traditional agencies that hand your brand off to junior interns, Gaurav Kapoor leads the growth strategy, reviews all creative testing matrices, and hosts regular strategic growth syncs with our partner founders.'
    },
    {
      q: 'How do you prevent ad fatigue when scaling ad spend to $1k–$10k+/day?',
      a: 'We eliminate ad fatigue through our Rapid Iteration Matrix. When a specific hook or angle wins, we instantly produce 6-12 variations—swapping opening 3-second visual hooks, testing alternative creators, modifying sound design, and testing different CTA angles.'
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

      {/* Interactive Scaling Potential Calculator */}
      <section className="container" style={{ marginBottom: '80px' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #151a24 0%, #0d1017 100%)',
            border: '2px solid rgba(255,87,34,0.3)',
            borderRadius: '28px',
            padding: '40px',
            maxWidth: '1000px',
            margin: '0 auto',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(255,87,34,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Calculator size={22} color="#ff5722" />
            </div>
            <div>
              <h2 style={{ fontSize: '1.6rem', color: '#fff', margin: 0, fontWeight: 800 }}>
                Calculate Your 90-Day Scaling Potential
              </h2>
            </div>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '30px' }}>
            See how fixing your creative testing cadence and lifting your store conversion rate transforms your monthly and annual revenue:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {/* Input Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1', fontSize: '0.88rem', fontWeight: 700, marginBottom: '8px' }}>
                  <span>CURRENT MONTHLY REVENUE</span>
                  <span style={{ color: '#ff5722', fontSize: '1.1rem' }}>${currentMonthlyRev.toLocaleString()} / mo</span>
                </label>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="5000"
                  value={currentMonthlyRev}
                  onChange={(e) => setCurrentMonthlyRev(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#ff5722' }}
                />
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1', fontSize: '0.88rem', fontWeight: 700, marginBottom: '8px' }}>
                  <span>TARGET CONVERSION RATE (CVR)</span>
                  <span style={{ color: '#ffb300', fontSize: '1.1rem' }}>{targetCvr}%</span>
                </label>
                <input
                  type="range"
                  min="2.0"
                  max="6.0"
                  step="0.1"
                  value={targetCvr}
                  onChange={(e) => setTargetCvr(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#ffb300' }}
                />
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1', fontSize: '0.88rem', fontWeight: 700, marginBottom: '8px' }}>
                  <span>TARGET BLENDED ROAS</span>
                  <span style={{ color: '#38bdf8', fontSize: '1.1rem' }}>{currentRoas}x</span>
                </label>
                <input
                  type="range"
                  min="1.8"
                  max="6.0"
                  step="0.1"
                  value={currentRoas}
                  onChange={(e) => setCurrentRoas(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#38bdf8' }}
                />
              </div>
            </div>

            {/* Calculated Output Scorecard */}
            <div
              style={{
                background: '#0b0e14',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>
                  ESTIMATED 90-DAY PROJECTED RUN-RATE
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 950, color: '#4ade80' }}>
                  ${projectedMonthlyRev.toLocaleString()} <span style={{ fontSize: '1rem', color: '#94a3b8' }}>/ mo</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginTop: '20px' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>MONTHLY REVENUE GAIN</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#ffb300' }}>+${projectedRevIncrease.toLocaleString()}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>ANNUAL RUN RATE</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#38bdf8' }}>${(annualScalingPotential / 1000000).toFixed(2)}M / yr</div>
                  </div>
                </div>
              </div>

              <button className="btn-primary" onClick={onOpenBooking} style={{ width: '100%', marginTop: '20px', padding: '12px' }}>
                <span>Build Your 90-Day Roadmap</span>
                <ArrowRight size={16} />
              </button>
            </div>
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

      {/* Comparison Matrix: Us vs Traditional Agency vs In-House */}
      <section style={{ background: '#0a0e16', padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px auto' }}>
            <span className="badge badge-gold" style={{ marginBottom: '14px' }}>
              HOW WE COMPARE
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)', color: '#fff', fontWeight: 900, textTransform: 'uppercase', marginBottom: '16px' }}>
              Why Brands Switch To Brand Scaling Hacks
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Compare our dedicated growth partnership model against bloated agencies and fragmented in-house hiring.
            </p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 10px', minWidth: '700px' }}>
              <thead>
                <tr style={{ color: '#94a3b8', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  <th style={{ padding: '14px 20px', textAlign: 'left' }}>Growth Dimension</th>
                  <th style={{ padding: '14px 20px', textAlign: 'left' }}>Traditional Agency</th>
                  <th style={{ padding: '14px 20px', textAlign: 'left' }}>In-House Freelancers</th>
                  <th style={{ padding: '14px 20px', textAlign: 'left', background: 'rgba(255,87,34,0.1)', color: '#ff7043', borderRadius: '12px 12px 0 0' }}>Brand Scaling Hacks</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} style={{ background: '#0f141f', borderRadius: '12px' }}>
                    <td style={{ padding: '20px', fontWeight: 800, color: '#ffffff', borderTopLeftRadius: '14px', borderBottomLeftRadius: '14px' }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: '20px', color: '#94a3b8', fontSize: '0.9rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <XCircle size={16} color="#ef4444" style={{ flexShrink: 0 }} />
                        <span>{row.typicalAgency}</span>
                      </div>
                    </td>
                    <td style={{ padding: '20px', color: '#94a3b8', fontSize: '0.9rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <XCircle size={16} color="#ef4444" style={{ flexShrink: 0 }} />
                        <span>{row.inHouse}</span>
                      </div>
                    </td>
                    <td style={{ padding: '20px', background: 'rgba(255,87,34,0.08)', borderLeft: '2px solid #ff5722', color: '#ffffff', fontWeight: 700, fontSize: '0.92rem', borderTopRightRadius: '14px', borderBottomRightRadius: '14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle2 size={18} color="#22c55e" style={{ flexShrink: 0 }} />
                        <span>{row.brandScaling}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Transparent Scaling Roadmap (Phases 1-3) */}
      <section className="container" style={{ padding: '80px 20px' }}>
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
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section style={{ background: '#0a0e16', padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '12px' }}>
              FAQ
            </span>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', color: '#fff', fontWeight: 900, textTransform: 'uppercase' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: '#0f141f',
                  border: openFaq === idx ? '1px solid #ff7043' : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease'
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    color="#ff7043"
                    style={{
                      transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0,
                      marginLeft: '16px'
                    }}
                  />
                </button>
                {openFaq === idx && (
                  <div style={{ padding: '0 24px 22px 24px', color: '#94a3b8', fontSize: '0.94rem', lineHeight: 1.6 }}>
                    {faq.a}
                  </div>
                )}
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
