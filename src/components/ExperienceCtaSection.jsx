import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  DollarSign, 
  Clock, 
  Globe2, 
  Rocket, 
  Sparkles, 
  Flame, 
  Target, 
  TrendingUp, 
  Zap,
  ShieldCheck
} from 'lucide-react';

export default function ExperienceCtaSection({ onOpenBooking }) {
  const tiers = [
    {
      level: '$10K/MONTH?',
      target: 'Proof of Concept & First Winners',
      action: 'Validate 2-3 winning creative hooks, build high-speed Shopify baseline, and establish initial profitable Meta ROAS with low CPA broad architecture.',
      deliverables: ['Creative Angle Validation', 'Sub-1s Mobile Shopify Setup', 'Initial Meta ROAS Engine']
    },
    {
      level: '$50K/MONTH?',
      target: 'Predictable Creative Testing',
      action: 'Deploy fixed weekly UGC creative cadence, eliminate product page drop-offs, optimize mobile checkout friction, and scale daily ad budget to $500+/day sustainably.',
      deliverables: ['Weekly UGC Ad Testing Pipeline', 'Pre-Purchase Friction Removal', 'Predictable $500+/day Scaling']
    },
    {
      level: '$100K/MONTH?',
      target: 'Multi-Channel Acquisition',
      action: 'Synergize Meta Advantage+ with Google Shopping & TikTok Spark Ads. Introduce in-cart bundle upsells to lift AOV and scale daily ad spend aggressively.',
      deliverables: ['Meta Advantage+ Scaling', 'Google Shopping & PMax Funnels', 'In-Cart & Post-Purchase Upsells']
    },
    {
      level: '$1M/MONTH?',
      target: 'Category Leadership & 8-Figure Scale',
      action: 'Aggressive creator studio production (40+ assets/mo), international market localization, advanced retention email/SMS flows, and custom supply chain optimization.',
      deliverables: ['High-Volume Creator Production', 'Global International Scaling', 'Advanced LTV Compounding']
    },
    {
      level: '$10M+?',
      target: 'Enterprise 9-Figure Dominance',
      action: 'Custom brand engineering, omni-channel media dominance, supply chain efficiency, enterprise media spend optimization, and preparation for an 8 or 9-figure exit.',
      deliverables: ['Omni-Channel Media Dominance', 'Enterprise Capital Allocation', '8 & 9-Figure Valuation Exit']
    }
  ];

  const [activeTier, setActiveTier] = useState(tiers[2]); // $100k/mo default

  const credentials = [
    {
      stat: '12+ Years',
      label: 'Building and scaling businesses online',
      icon: <Clock size={24} />,
      color: '#ffb300'
    },
    {
      stat: '$50M+',
      label: 'Online advertising spend managed',
      icon: <DollarSign size={24} />,
      color: '#ff7043'
    },
    {
      stat: '30+ Niches',
      label: 'Tested across global international markets',
      icon: <Globe2 size={24} />,
      color: '#10b981'
    },
    {
      stat: '8 & 9 Figures',
      label: 'Hands-on brand scaling experience',
      icon: <Rocket size={24} />,
      color: '#38bdf8'
    }
  ];

  const pillarTags = [
    'Shopify',
    'Creatives',
    'Meta Ads',
    'Google Ads',
    'CRO',
    'Scaling'
  ];

  return (
    <section className="experience-cta-section" id="experience-cta">
      {/* Ambient background glows */}
      <div className="exp-ambient-glow exp-glow-top" />
      <div className="exp-ambient-glow exp-glow-bottom" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="exp-header-block">
          <div className="exp-badge-row">
            <span className="exp-section-badge">
              <Sparkles size={14} className="exp-badge-icon" />
              08 — EXPERIENCE + FINAL CTA
            </span>
          </div>

          <h2 className="exp-main-title">
            $50M+ IN AD SPEND.<br />
            <span className="text-gradient-orange">12+ YEARS OF ECOMMERCE EXPERIENCE.</span>
          </h2>

          <div className="exp-expert-tag">
            <ShieldCheck size={16} color="#ffb300" />
            <span>GAURAV KAPOOR • eCommerce & Customer Acquisition Expert</span>
          </div>
        </div>

        {/* 4 Credentials Stat Cards */}
        <div className="exp-credentials-grid">
          {credentials.map((cred, idx) => (
            <div key={idx} className="exp-stat-card">
              <div 
                className="exp-stat-icon-wrap"
                style={{ 
                  color: cred.color, 
                  background: `${cred.color}14`,
                  borderColor: `${cred.color}33`
                }}
              >
                {cred.icon}
              </div>
              <div className="exp-stat-val" style={{ color: cred.color }}>
                {cred.stat}
              </div>
              <div className="exp-stat-label">
                {cred.label}
              </div>
              <div 
                className="exp-stat-line" 
                style={{ background: `linear-gradient(90deg, transparent, ${cred.color}, transparent)` }} 
              />
            </div>
          ))}
        </div>

        {/* Philosophy Transition Callout Box */}
        <div className="exp-philosophy-card">
          <p className="exp-philosophy-text">
            We've spent years testing what actually drives eCommerce growth across products, markets, offers, creatives and acquisition channels.
          </p>
          <div className="exp-philosophy-highlight">
            <Flame size={18} color="#ff7043" />
            <span>NOW LET'S PUT THAT EXPERIENCE TO WORK ON YOUR BRAND.</span>
          </div>
        </div>

        {/* Interactive Revenue Milestone Selector */}
        <div className="exp-milestone-header">
          <h3 className="exp-milestone-title">
            WHAT'S YOUR NEXT NUMBER?
          </h3>
          <p className="exp-milestone-sub">
            Select your milestone to see your customized growth action plan:
          </p>
        </div>

        {/* Milestone Selection Tabs Grid */}
        <div className="exp-tiers-grid">
          {tiers.map((tier, idx) => {
            const isActive = activeTier.level === tier.level;
            return (
              <div
                key={idx}
                className={`exp-tier-card ${isActive ? 'exp-tier-active' : ''}`}
                onClick={() => setActiveTier(tier)}
              >
                <div className="exp-tier-top-row">
                  <span className="exp-tier-num">0{idx + 1}</span>
                  {isActive && <CheckCircle2 size={16} className="exp-tier-active-icon" />}
                </div>
                <div className="exp-tier-level">
                  {tier.level}
                </div>
                <div className="exp-tier-target">
                  {tier.target}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Tier Interactive Roadmap Blueprint Card */}
        <div className="exp-roadmap-card">
          <div className="exp-roadmap-header">
            <div className="exp-roadmap-pill">
              <Zap size={14} color="#ffb300" />
              <span>CUSTOMIZED ACTION PLAN</span>
            </div>
            <div className="exp-roadmap-tier-tag">
              Roadmap For <strong>{activeTier.level}</strong>
            </div>
          </div>

          <h4 className="exp-roadmap-target-title">
            Target: {activeTier.target}
          </h4>

          <p className="exp-roadmap-action-text">
            {activeTier.action}
          </p>

          <div className="exp-deliverables-wrap">
            <div className="exp-deliverables-label">Key Growth Deliverables:</div>
            <div className="exp-deliverables-list">
              {activeTier.deliverables.map((item, dIdx) => (
                <div key={dIdx} className="exp-deliverable-item">
                  <CheckCircle2 size={14} color="#ff7043" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* High-Impact Final Scale CTA Banner */}
        <div className="exp-final-cta-box">
          <div className="exp-final-glow" />
          
          <div className="exp-final-subtext">
            Wherever you are today, the goal is simple:
          </div>

          <h2 className="exp-final-heading">
            BUILD WHAT IT TAKES TO GET TO THE NEXT LEVEL.
          </h2>

          <div className="exp-final-tagline">
            FROM YOUR FIRST SALE TO 9 FIGURES.
          </div>

          <div className="exp-cta-btn-wrap">
            <button className="btn-primary exp-scale-btn" onClick={onOpenBooking}>
              <span>SCALE MY BRAND</span>
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Connected Pillar Feature Badges */}
          <div className="exp-pillar-tags-row">
            {pillarTags.map((tag, pIdx) => (
              <React.Fragment key={pIdx}>
                <span className="exp-pillar-tag">{tag}</span>
                {pIdx < pillarTags.length - 1 && <span className="exp-pillar-bullet">•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
