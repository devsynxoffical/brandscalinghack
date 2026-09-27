import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  RotateCw,
  Sparkles
} from 'lucide-react';

export default function ExperienceCtaSection({ onOpenBooking }) {
  const [flippedCard, setFlippedCard] = useState(null);

  const tiers = [
    {
      id: 'tier-1',
      num: '01',
      level: '$10K/MONTH?',
      target: 'Proof of Concept & First Winners',
      frontHighlight: 'Launch & Validate',
      action: 'Validate 2-3 winning creative hooks, build high-speed mobile Shopify baseline, and establish initial profitable Meta ROAS with low CPA broad architecture.',
      deliverables: ['Creative Angle Validation', 'Sub-1s Mobile Shopify Setup', 'Initial Meta ROAS Engine'],
      color: '#ff5722'
    },
    {
      id: 'tier-2',
      num: '02',
      level: '$50K/MONTH?',
      target: 'Predictable Creative Testing',
      frontHighlight: 'Creative Scale',
      action: 'Deploy fixed weekly UGC creative cadence, eliminate product page drop-offs, optimize mobile checkout friction, and scale daily ad budget to $500+/day sustainably.',
      deliverables: ['Weekly UGC Ad Testing Pipeline', 'Pre-Purchase Friction Removal', 'Predictable $500+/day Scaling'],
      color: '#ea580c'
    },
    {
      id: 'tier-3',
      num: '03',
      level: '$100K/MONTH?',
      target: 'Multi-Channel Acquisition',
      frontHighlight: 'Omnichannel Scale',
      action: 'Synergize Meta Advantage+ with Google Shopping & TikTok Spark Ads. Introduce in-cart bundle upsells to lift AOV and scale daily ad spend aggressively.',
      deliverables: ['Meta Advantage+ Scaling', 'Google Shopping & PMax Funnels', 'In-Cart & Post-Purchase Upsells'],
      color: '#dc2626'
    },
    {
      id: 'tier-4',
      num: '04',
      level: '$1M/MONTH?',
      target: 'Category Leadership & 8-Figure Scale',
      frontHighlight: '8-Figure Playbook',
      action: 'Aggressive creator studio production (40+ assets/mo), international market localization, advanced retention email/SMS flows, and custom supply chain optimization.',
      deliverables: ['High-Volume Creator Production', 'Global International Scaling', 'Advanced LTV Compounding'],
      color: '#b91c1c'
    },
    {
      id: 'tier-5',
      num: '05',
      level: '$10M+?',
      target: 'Enterprise 9-Figure Dominance',
      frontHighlight: '9-Figure Valuation',
      action: 'Custom brand engineering, omni-channel media dominance, supply chain efficiency, enterprise media spend optimization, and preparation for an 8 or 9-figure exit.',
      deliverables: ['Omni-Channel Media Dominance', 'Enterprise Capital Allocation', '8 & 9-Figure Valuation Exit'],
      color: '#991b1b'
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
    <section className="light-exp-cta-section" id="growth-benchmark-cta" style={{ padding: '65px 0' }}>
      <div className="container relative z-10" style={{ textAlign: 'center' }}>
        {/* Milestone Header */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>
            <span className="light-exp-pill-badge">
              <Sparkles size={14} style={{ marginRight: '6px' }} />
              GROWTH BENCHMARK
            </span>
          </div>
          <h3 className="light-exp-milestone-title">
            WHAT'S YOUR NEXT NUMBER?
          </h3>
          <p style={{ color: '#64748b', fontSize: '0.98rem', margin: '6px 0 0 0' }}>
            Hover over any milestone card to flip and reveal the customized scaling roadmap:
          </p>
        </div>

        {/* 3D Interactive Hover Flip Cards Grid */}
        <div className="light-exp-flip-grid">
          {tiers.map((tier) => {
            const isFlipped = flippedCard === tier.id;
            return (
              <div
                key={tier.id}
                className={`flip-card-container ${isFlipped ? 'is-flipped' : ''}`}
                onMouseEnter={() => setFlippedCard(tier.id)}
                onMouseLeave={() => setFlippedCard(null)}
                onClick={() => setFlippedCard(isFlipped ? null : tier.id)}
              >
                <div className="flip-card-inner">
                  {/* FRONT OF CARD */}
                  <div className="flip-card-front" style={{ borderTop: `4px solid rgba(255, 255, 255, 0.6)` }}>
                    <div className="flip-front-header">
                      <span className="flip-front-num">{tier.num}</span>
                      <span className="flip-front-badge">
                        {tier.frontHighlight}
                      </span>
                    </div>

                    <div className="flip-front-level">
                      {tier.level}
                    </div>

                    <div className="flip-front-target">
                      {tier.target}
                    </div>

                    <div className="flip-front-hint">
                      <RotateCw size={13} />
                      <span>Hover to Flip</span>
                    </div>
                  </div>

                  {/* BACK OF CARD (Flipped side) */}
                  <div className="flip-card-back">
                    <div className="flip-back-header">
                      <span className="flip-back-title">Roadmap • {tier.level}</span>
                    </div>

                    <p className="flip-back-action">
                      {tier.action}
                    </p>

                    <div className="flip-back-deliverables">
                      {tier.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flip-back-item">
                          <CheckCircle2 size={13} style={{ color: '#ffffff', flexShrink: 0, marginTop: '2px' }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      className="flip-back-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onOpenBooking) onOpenBooking();
                      }}
                    >
                      <span>Scale to {tier.level.replace('?', '')}</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* High-Impact Final Scale CTA Banner */}
        <div className="light-exp-final-banner">
          <div className="light-exp-banner-subtext">
            Wherever you are today, the goal is simple:
          </div>

          <h3 className="light-exp-banner-heading">
            BUILD WHAT IT TAKES TO GET TO THE NEXT LEVEL.
          </h3>

          <div className="light-exp-banner-tagline">
            FROM YOUR FIRST SALE TO 9 FIGURES.
          </div>

          <div style={{ marginTop: '28px', marginBottom: '28px' }}>
            <button className="light-exp-cta-btn" onClick={onOpenBooking}>
              <span>SCALE MY BRAND</span>
              <div className="light-exp-arrow-circle">
                <ArrowRight size={16} color="#dc2626" strokeWidth={3} />
              </div>
            </button>
          </div>

          {/* Connected Pillar Feature Badges */}
          <div className="light-exp-pillars-row">
            {pillarTags.map((tag, pIdx) => (
              <React.Fragment key={pIdx}>
                <span className="light-exp-pillar-item">{tag}</span>
                {pIdx < pillarTags.length - 1 && <span className="light-exp-pillar-dot">•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
