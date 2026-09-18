import React from 'react';
import { 
  ShoppingBag, 
  Video, 
  Target, 
  Search, 
  BarChart3, 
  Rocket, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Zap
} from 'lucide-react';

export default function WhatWeBuildSection({ onOpenBooking, onNavigate }) {
  const pillars = [
    {
      num: '01',
      icon: <ShoppingBag size={24} />,
      title: 'SHOPIFY',
      subtitle: 'Conversion-Focused Infrastructure',
      description: 'Custom, high-speed stores engineered to maximize conversion rates, optimize mobile checkouts, and lift average order value.',
      features: ['Sub-1s Page Speeds', 'High-Converting Mobile UX', 'Dynamic 1-Click Upsells'],
      accent: '#06b6d4',
      badge: 'SPEED & UX'
    },
    {
      num: '02',
      icon: <Video size={24} />,
      title: 'CREATIVE',
      subtitle: 'High-Converting UGC & Motion Ads',
      description: 'High-performing concepts, hooks, creator UGC, and dynamic motion ads designed for aggressive testing and rapid iteration.',
      features: ['3-Second Hook Frameworks', 'Direct-Response UGC', 'Rapid Iteration Engine'],
      accent: '#a855f7',
      badge: 'VIRAL HOOKS'
    },
    {
      num: '03',
      icon: <Target size={24} />,
      title: 'META ADS',
      subtitle: 'Predictable Scale on FB & IG',
      description: 'Data-driven customer acquisition through precision account architecture, Advantage+ scaling, and broad-targeting audience capture.',
      features: ['Advantage+ Scaling Systems', 'Broad Audience Mastery', 'Predictable Low CPA'],
      accent: '#ff7043',
      badge: 'ACQUISITION'
    },
    {
      num: '04',
      icon: <Search size={24} />,
      title: 'GOOGLE ADS',
      subtitle: 'High-Intent Search & Shopping Capture',
      description: 'Capture buyers actively searching for your products with Performance Max, targeted search funnels, and YouTube retargeting.',
      features: ['Performance Max Scaling', 'High-Intent Search Funnels', 'Omnichannel Retargeting'],
      accent: '#38bdf8',
      badge: 'HIGH-INTENT'
    },
    {
      num: '05',
      icon: <BarChart3 size={24} />,
      title: 'CRO',
      subtitle: 'Conversion Rate Optimization',
      description: 'Turn more of your existing traffic into bottom-line profit with A/B offer testing, post-purchase upsells, and friction elimination.',
      features: ['A/B Offer & Bundle Tests', 'Frictionless Checkout Journeys', 'Maximized Average Order Value'],
      accent: '#10b981',
      badge: 'PROFIT LIFT'
    },
    {
      num: '06',
      icon: <Rocket size={24} />,
      title: 'SCALING',
      subtitle: 'Aggressive Capital Allocation',
      description: 'Identify winners instantly, eliminate cash flow bottlenecks, scale ad spend sustainably, and prepare brands for 8 & 9-figure valuations.',
      features: ['Real-Time Winner Detection', 'Cash-Flow Optimization', '8 & 9-Figure Exit Blueprint'],
      accent: '#ffb300',
      badge: '8 & 9 FIGURES'
    }
  ];

  return (
    <section className="what-we-build-section" id="what-we-build">
      {/* Background ambient lighting glows */}
      <div className="wwb-ambient-glow wwb-glow-left" />
      <div className="wwb-ambient-glow wwb-glow-right" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="wwb-header-block">
          <div className="wwb-badge-row">
            <span className="wwb-section-badge">
              <Zap size={14} className="wwb-badge-icon" />
              03 — WHAT WE BUILD
            </span>
          </div>

          <h2 className="wwb-main-title">
            YOUR ENTIRE ECOMMERCE <span className="text-gradient-orange">GROWTH ENGINE.</span>
          </h2>

          <div className="wwb-sub-headline">
            NOT JUST ADS. NOT JUST A STORE.
          </div>

          <p className="wwb-lead-desc">
            We build the complete infrastructure around your brand that turns cold attention into passionate customers and customers into compounding revenue.
          </p>
        </div>

        {/* 6 High-Converting Pillars Card Grid */}
        <div className="wwb-pillars-grid">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="wwb-pillar-card"
              style={{
                '--pillar-accent': pillar.accent
              }}
            >
              {/* Top Row: Index Watermark + Badge */}
              <div className="wwb-card-header-row">
                <div className="wwb-icon-badge" style={{ color: pillar.accent, borderColor: `${pillar.accent}33`, background: `${pillar.accent}14` }}>
                  {pillar.icon}
                </div>
                <div className="wwb-card-right-meta">
                  <span className="wwb-badge-pill" style={{ color: pillar.accent, borderColor: `${pillar.accent}33` }}>
                    {pillar.badge}
                  </span>
                  <span className="wwb-card-number">{pillar.num}</span>
                </div>
              </div>

              {/* Subtitle tag */}
              <div className="wwb-pillar-category">
                {pillar.subtitle}
              </div>

              {/* Main Pillar Title */}
              <h3 className="wwb-pillar-title">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="wwb-pillar-desc">
                {pillar.description}
              </p>

              {/* Feature check tags */}
              <div className="wwb-features-list">
                {pillar.features.map((feat, fIdx) => (
                  <div key={fIdx} className="wwb-feature-pill">
                    <CheckCircle2 size={13} style={{ color: pillar.accent, flexShrink: 0 }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Card Inset Accent Glow Line */}
              <div 
                className="wwb-card-top-line" 
                style={{ background: `linear-gradient(90deg, transparent, ${pillar.accent}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* Section Synchronized Flywheel Bottom Banner */}
        <div className="wwb-flywheel-banner">
          <div className="wwb-flywheel-content">
            <div className="wwb-flywheel-tag">
              <Sparkles size={15} color="#ffb300" />
              <span>THE COMPLETE SYSTEM</span>
            </div>
            <h3 className="wwb-flywheel-title">
              EVERY PIECE WORKS TOGETHER.
            </h3>
            <p className="wwb-flywheel-text">
              Isolated ads don't scale. A synchronized growth flywheel creates unstoppable market momentum.
            </p>
          </div>

          <div className="wwb-flywheel-action">
            <button className="btn-primary wwb-cta-btn" onClick={onOpenBooking}>
              <span>SCALE MY BRAND NOW</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
