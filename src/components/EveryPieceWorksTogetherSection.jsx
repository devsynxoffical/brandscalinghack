import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowDown, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Rocket, 
  ShieldCheck, 
  TrendingUp, 
  Layers, 
  Repeat, 
  Flame,
  Target,
  BarChart3,
  Search,
  Sliders,
  Maximize2
} from 'lucide-react';

export default function EveryPieceWorksTogetherSection({ onOpenBooking }) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeBottleneck, setActiveBottleneck] = useState(0);

  // 04 Pipeline Steps
  const zeroPipeline = [
    { label: 'PRODUCT', desc: 'Identify High-Demand Winning Concepts' },
    { label: 'BRAND', desc: 'Craft Unique Positioning & Identity' },
    { label: 'SHOPIFY', desc: 'Build Sub-1s High-Converting Storefront' },
    { label: 'CREATIVE', desc: 'Produce Scroll-Stopping Direct UGC' },
    { label: 'TRAFFIC', desc: 'Deploy Meta, TikTok & Google Advantage+' },
    { label: 'SALES', desc: 'Scale Predictable Compounding Revenue' },
  ];

  // 05 Funnel Bottleneck Stages
  const bottleneckStages = [
    { name: 'OFFER', question: 'Irresistible bundles & price anchoring?', tip: 'Weak perceived value causes instant drop-off.' },
    { name: 'CREATIVE', question: 'Weekly fresh UGC hooks testing pipeline?', tip: 'Creative fatigue spikes CPA dramatically.' },
    { name: 'TRAFFIC', question: 'Simplified broad targeting & multi-channel?', tip: 'Fragmented ad sets bleed ad spend.' },
    { name: 'SHOPIFY', question: 'Sub-2s mobile speed & frictionless checkout?', tip: 'Slow load times kill 60%+ of paid traffic.' },
    { name: 'CONVERSION', question: 'High AOV bundles & social proof widgets?', tip: 'Low CVR destroys unit economics.' },
    { name: 'CUSTOMER VALUE', question: 'In-cart & post-purchase 1-click upsells?', tip: 'Zero backend monetization wastes first-order CAC.' },
    { name: 'PROFITABILITY', question: 'Healthy contribution margin & MER?', tip: 'Top-line vanity revenue without real profit.' }
  ];

  // 06 Dennis Snellenberg Overlapping Tilted Cards
  const scalingCards = [
    {
      id: 'build',
      num: '01',
      title: 'BUILD',
      tag: 'FOUNDATION',
      color: '#059669',
      bgColor: 'linear-gradient(145deg, #062b1e 0%, #03140e 100%)',
      borderColor: 'rgba(16, 185, 129, 0.4)',
      tilt: '-3.5deg',
      subtitle: 'Create the right foundation, offer, store and customer journey.',
      items: [
        'Offer Architecture & Value Stacking',
        'Frictionless Shopify Theme Build',
        'Direct-Response Angle Engineering',
        'Unit Economics & Margin Modeling'
      ]
    },
    {
      id: 'test',
      num: '02',
      title: 'TEST',
      tag: 'CREATIVE LAB',
      color: '#3b82f6',
      bgColor: 'linear-gradient(145deg, #0c2340 0%, #05101f 100%)',
      borderColor: 'rgba(59, 130, 246, 0.4)',
      tilt: '-1.2deg',
      subtitle: 'Continuously test products, creatives, hooks, audiences and messaging.',
      items: [
        'Weekly UGC Creative Testing Cadence',
        '45+ Variation Hook & Angle Matrix',
        'Broad Advantage+ Meta Ad Setup',
        'Rapid Iteration on Winning Angles'
      ]
    },
    {
      id: 'optimize',
      num: '03',
      title: 'OPTIMIZE',
      tag: 'EFFICIENCY',
      color: '#ff7043',
      bgColor: 'linear-gradient(145deg, #2b1206 0%, #170802 100%)',
      borderColor: 'rgba(255, 112, 67, 0.4)',
      tilt: '1.5deg',
      subtitle: 'Improve CAC, CVR, AOV, ROAS and overall profitability.',
      items: [
        'Aggressive CAC & CPA Reduction',
        'In-Cart & Post-Purchase Upsells (AOV Boost)',
        'Mobile Checkout Friction Removal',
        'MER & Cashflow Health Tracking'
      ]
    },
    {
      id: 'scale',
      num: '04',
      title: 'SCALE',
      tag: 'MULTIPLIER',
      color: '#a855f7',
      bgColor: 'linear-gradient(145deg, #240a38 0%, #12031f 100%)',
      borderColor: 'rgba(168, 85, 247, 0.4)',
      tilt: '3.8deg',
      subtitle: 'Put more budget, creative and resources behind what\'s working.',
      items: [
        'Daily Ad Budget Aggressive Scaling',
        'Cross-Channel TikTok & Google P-Max',
        'International Market Expansion',
        'Compounding 90-Day Customer LTV'
      ]
    }
  ];

  return (
    <section className="epw-master-section" id="scaling-ecosystem">
      {/* Background Ambience */}
      <div className="epw-ambient-glow" aria-hidden="true"></div>

      <div className="container epw-container">
        
        {/* ========================================================================= */}
        {/* MASTER HEADER */}
        {/* ========================================================================= */}
        <div className="epw-master-header">
          <div className="epw-pill-tag">
            <Sparkles size={14} className="epw-pill-icon" />
            <span>THE COMPLETE ECOMMERCE GROWTH FRAMEWORK</span>
          </div>
          <h2 className="epw-master-title">
            EVERY PIECE WORKS <span className="epw-flame-text">TOGETHER.</span>
          </h2>
          <p className="epw-master-sub">
            From validating your first winning product to engineering multi-million dollar predictable acquisition engines.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MODULE 04 — STARTING FROM ZERO */}
        {/* ========================================================================= */}
        <div className="epw-module-card epw-module-zero">
          <div className="epw-module-top-bar">
            <span className="epw-module-num-badge">04 — STARTING FROM ZERO</span>
            <span className="epw-module-tag">VALIDATION &amp; LAUNCH</span>
          </div>

          <div className="epw-zero-grid">
            <div className="epw-zero-left">
              <h3 className="epw-section-heading">
                YOUR FIRST SALE IS ONLY THE BEGINNING.
              </h3>
              <h4 className="epw-section-subheading">
                BUILD THE BRAND. VALIDATE THE PRODUCT. THEN SCALE.
              </h4>
              <p className="epw-body-copy">
                Starting an eCommerce business? We can help take you from initial product validation to automated high-converting sales:
              </p>

              {/* 3 Core Zero Rules */}
              <div className="epw-zero-rules">
                <div className="epw-rule-item">
                  <span className="epw-rule-num">1</span>
                  <span className="epw-rule-text">FIND THE WINNER.</span>
                </div>
                <div className="epw-rule-item">
                  <span className="epw-rule-num">2</span>
                  <span className="epw-rule-text">BUILD THE BRAND.</span>
                </div>
                <div className="epw-rule-item">
                  <span className="epw-rule-num">3</span>
                  <span className="epw-rule-text">SCALE THE BUSINESS.</span>
                </div>
              </div>

              <div className="epw-dropship-callout">
                <Flame size={18} className="epw-callout-icon" />
                <span>If dropshipping is your starting point, we don't look at it as the final destination.</span>
              </div>

              <div className="epw-btn-wrap">
                <button className="epw-action-btn epw-btn-gold" onClick={onOpenBooking}>
                  <span>BUILD MY BRAND</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Right: Interactive Linear Pipeline Flow */}
            <div className="epw-zero-right">
              <div className="epw-pipeline-track">
                {zeroPipeline.map((step, idx) => (
                  <div key={idx} className="epw-pipeline-step">
                    <div className="epw-step-marker">
                      <span className="epw-step-dot">{idx + 1}</span>
                      {idx < zeroPipeline.length - 1 && <div className="epw-step-line"></div>}
                    </div>
                    <div className="epw-step-content">
                      <div className="epw-step-title">{step.label}</div>
                      <div className="epw-step-desc">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MODULE 05 — EXISTING ECOMMERCE BRANDS */}
        {/* ========================================================================= */}
        <div className="epw-module-card epw-module-existing">
          <div className="epw-module-top-bar">
            <span className="epw-module-num-badge">05 — EXISTING ECOMMERCE BRANDS</span>
            <span className="epw-module-tag">DIAGNOSTIC &amp; BOTTLENECK FIX</span>
          </div>

          <div className="epw-existing-header-block">
            <h3 className="epw-section-heading">
              ALREADY SELLING? LET'S FIND WHAT'S HOLDING YOU BACK.
            </h3>
            <p className="epw-existing-lead">
              More ad spend won't fix a broken growth engine. We look at the entire customer journey to uncover and eliminate conversion friction:
            </p>
          </div>

          {/* Customer Journey Vertical/Horizontal Step Flow */}
          <div className="epw-funnel-flow-wrapper">
            <div className="epw-funnel-steps-row">
              {bottleneckStages.map((stage, idx) => (
                <React.Fragment key={idx}>
                  <div 
                    className={`epw-funnel-node ${activeBottleneck === idx ? 'active' : ''}`}
                    onClick={() => setActiveBottleneck(idx)}
                  >
                    <span className="epw-node-name">{stage.name}</span>
                    <span className="epw-node-indicator"></span>
                  </div>
                  {idx < bottleneckStages.length - 1 && (
                    <div className="epw-node-arrow">
                      <ArrowDown size={14} className="epw-arrow-mobile" />
                      <span className="epw-arrow-desktop">→</span>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Diagnostic Card for Selected Node */}
            <div className="epw-diagnostic-box">
              <div className="epw-diag-top">
                <Search size={18} color="#ff7043" />
                <span className="epw-diag-title">DIAGNOSTIC FOCUS: {bottleneckStages[activeBottleneck].name}</span>
              </div>
              <div className="epw-diag-question">
                "{bottleneckStages[activeBottleneck].question}"
              </div>
              <div className="epw-diag-leak">
                <span className="epw-leak-label">Common Bottleneck:</span> {bottleneckStages[activeBottleneck].tip}
              </div>
            </div>
          </div>

          {/* Fix & Scale Action Callout */}
          <div className="epw-existing-bottom-cta">
            <div className="epw-bottom-manifesto">
              <span className="epw-man-step">FIND THE BOTTLENECK.</span>
              <span className="epw-man-dot">•</span>
              <span className="epw-man-step">FIX IT.</span>
              <span className="epw-man-dot">•</span>
              <span className="epw-man-step epw-flame">THEN SCALE.</span>
            </div>
            <button className="epw-action-btn epw-btn-fire" onClick={onOpenBooking}>
              <span>SCALE MY BRAND</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MODULE 06 — THE SCALING SYSTEM (Dennis Snellenberg / Truus Overlapping Deck) */}
        {/* ========================================================================= */}
        <div className="epw-module-card epw-module-system">
          <div className="epw-module-top-bar">
            <span className="epw-module-num-badge">06 — THE SCALING SYSTEM</span>
            <span className="epw-module-tag">RECURSIVE GROWTH ENGINE</span>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h3 className="epw-section-heading">
              BUILD <span className="epw-gold-arrow">→</span> TEST <span className="epw-gold-arrow">→</span> OPTIMIZE <span className="epw-gold-arrow">→</span> SCALE.
            </h3>
            <p className="epw-system-sub">
              Hover over each phase to explore our full direct-response execution architecture:
            </p>
          </div>

          {/* Dennis Snellenberg Overlapping Interactive Tilted Cards Deck */}
          <div className="epw-snellenberg-deck-wrap">
            <div className="epw-snellenberg-deck">
              {scalingCards.map((card, idx) => {
                const isHovered = hoveredCard === card.id;
                return (
                  <div
                    key={card.id}
                    className={`epw-tilted-card card-${card.id} ${isHovered ? 'hovered' : ''}`}
                    style={{
                      background: card.bgColor,
                      border: `1px solid ${card.borderColor}`,
                      transform: isHovered 
                        ? 'translateY(-22px) rotate(0deg) scale(1.05)' 
                        : `rotate(${card.tilt}) translateY(0px)`,
                      zIndex: isHovered ? 20 : idx + 1
                    }}
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Top Sticker Badge (Truus Style) */}
                    <div className="epw-card-sticker-tag" style={{ color: card.color, borderColor: card.color }}>
                      <span>{card.tag}</span>
                    </div>

                    {/* Card Title */}
                    <div className="epw-card-header-row">
                      <h4 className="epw-card-title">{card.title}</h4>
                      <span className="epw-card-num">{card.num}</span>
                    </div>

                    {/* Card Description */}
                    <p className="epw-card-desc">{card.subtitle}</p>

                    <div className="epw-card-divider" style={{ backgroundColor: card.borderColor }}></div>

                    {/* Bullet Points with Diamond Icons */}
                    <ul className="epw-card-bullets">
                      {card.items.map((bullet, bIdx) => (
                        <li key={bIdx} className="epw-card-bullet-item">
                          <span className="epw-bullet-diamond" style={{ color: card.color }}>✦</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 06 Closing Repeatable System Manifesto */}
          <div className="epw-system-closing-box">
            <div className="epw-repeat-badge">
              <Repeat size={16} className="epw-repeat-icon" />
              <span>THEN DO IT AGAIN.</span>
            </div>
            <p className="epw-closing-quote">
              "Because a single winning campaign isn't a growth strategy."
            </p>
            <h4 className="epw-closing-punchline">
              A REPEATABLE SYSTEM IS.
            </h4>

            <div style={{ marginTop: '26px' }}>
              <button className="epw-action-btn epw-btn-gold" onClick={onOpenBooking}>
                <span>DEPLOY THE SCALING SYSTEM</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
