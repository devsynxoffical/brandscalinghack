import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowDown, 
  Sparkles, 
  Flame,
  Search,
  Repeat
} from 'lucide-react';

// Hand-Drawn Cartoon Sticker SVGs (Exact Truus by Dennis Snellenberg Style)
function StickerCamera() {
  return (
    <div className="epw-truus-sticker sticker-camera" aria-hidden="true">
      <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
        {/* Outer White Sticker Cutout Glow / Border */}
        <path d="M18 36 L30 18 L68 18 L82 36 L90 42 L88 84 L14 84 L10 42 Z" fill="#ffffff" />
        {/* Inner Black Body */}
        <path d="M22 38 L33 22 L65 22 L78 38 L84 44 L82 80 L18 80 L16 44 Z" fill="#18181b" />
        {/* Lens Outer Circle */}
        <circle cx="50" cy="54" r="20" fill="#ffffff" />
        <circle cx="50" cy="54" r="16" fill="#18181b" />
        <circle cx="50" cy="54" r="9" fill="#ffffff" />
        {/* Flash & Doodle Accents */}
        <circle cx="70" cy="34" r="4" fill="#ffffff" />
        <path d="M12 24 L22 30 M88 24 L78 30 M50 8 L50 16" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function StickerPhone() {
  return (
    <div className="epw-truus-sticker sticker-phone" aria-hidden="true">
      <svg width="64" height="64" viewBox="0 0 100 100" fill="none">
        {/* White Sticker Border */}
        <rect x="22" y="10" width="56" height="80" rx="14" fill="#ffffff" transform="rotate(-6 50 50)" />
        {/* Yellow Phone Body */}
        <rect x="26" y="14" width="48" height="72" rx="10" fill="#fde047" stroke="#18181b" strokeWidth="4" transform="rotate(-6 50 50)" />
        {/* Screen */}
        <rect x="32" y="24" width="36" height="48" rx="4" fill="#18181b" transform="rotate(-6 50 50)" />
        {/* Vibration Squiggles */}
        <path d="M12 36 Q6 48 12 60 M88 30 Q94 42 88 54" stroke="#18181b" strokeWidth="5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function StickerSmiley() {
  return (
    <div className="epw-truus-sticker sticker-smiley" aria-hidden="true">
      <svg width="66" height="66" viewBox="0 0 100 100" fill="none">
        {/* White Cutout Border */}
        <circle cx="50" cy="50" r="46" fill="#ffffff" />
        {/* Solid Blue Circle Body */}
        <circle cx="50" cy="50" r="40" fill="#60a5fa" stroke="#18181b" strokeWidth="4" />
        {/* Big Happy Eyes */}
        <ellipse cx="38" cy="40" rx="4.5" ry="9" fill="#18181b" />
        <ellipse cx="62" cy="40" rx="4.5" ry="9" fill="#18181b" />
        {/* Happy Curved Smile */}
        <path d="M30 56 Q50 78 70 56" stroke="#18181b" strokeWidth="5" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

function StickerWatch() {
  return (
    <div className="epw-truus-sticker sticker-watch" aria-hidden="true">
      <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
        {/* White Border */}
        <rect x="15" y="15" width="70" height="70" rx="18" fill="#ffffff" />
        {/* Lime Body */}
        <rect x="20" y="20" width="60" height="60" rx="14" fill="#bef264" stroke="#18181b" strokeWidth="4" />
        {/* Hand with Watch Graphic */}
        <circle cx="50" cy="50" r="18" fill="#ffffff" stroke="#18181b" strokeWidth="3" />
        <path d="M50 38 L50 50 L60 50" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
        <path d="M50 20 L50 32 M50 68 L50 80" stroke="#f97316" strokeWidth="5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function StickerHeart() {
  return (
    <div className="epw-truus-sticker sticker-heart" aria-hidden="true">
      <svg width="66" height="66" viewBox="0 0 100 100" fill="none">
        {/* White Border */}
        <path d="M50 86 C25 65 10 45 10 28 C10 14 20 6 34 6 C42 6 47 10 50 14 C53 10 58 6 66 6 C80 6 90 14 90 28 C90 45 75 65 50 86 Z" fill="#ffffff" stroke="#ffffff" strokeWidth="6" />
        {/* Berry Heart Body */}
        <path d="M50 82 C27 62 14 43 14 28 C14 16 23 9 35 9 C42 9 47 13 50 17 C53 13 58 9 65 9 C77 9 86 16 86 28 C86 43 73 62 50 82 Z" fill="#9f1239" stroke="#18181b" strokeWidth="3" />
        {/* Sparkle Stars */}
        <path d="M26 22 L28 16 L30 22 L36 24 L30 26 L28 32 L26 26 L20 24 Z" fill="#ffffff" />
        <circle cx="72" cy="46" r="3.5" fill="#ffffff" />
      </svg>
    </div>
  );
}

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

  // 06 Solid Colorful Cards Deck (Exact Truus by Dennis Snellenberg Reproduction)
  const scalingCards = [
    {
      id: 'brand',
      title: 'brand',
      solidColor: '#246b54', // Solid Emerald Forest Green
      textColor: '#ffffff',
      dividerColor: 'rgba(255, 255, 255, 0.4)',
      bulletColor: '#ffffff',
      tilt: '-5deg',
      sticker: <StickerCamera />,
      items: [
        'Brand Strategy',
        '360° Creative Offer',
        'Art Direction & Copy',
        'Sub-1s Shopify Build',
        'Motion Graphics & Angles',
        'Unit Margin Economics'
      ]
    },
    {
      id: 'social',
      title: 'social',
      solidColor: '#688ef7', // Solid Periwinkle Sky Blue
      textColor: '#080e21',
      dividerColor: '#080e21',
      bulletColor: '#080e21',
      tilt: '-2deg',
      sticker: <StickerPhone />,
      items: [
        'Weekly UGC Ad Cadence',
        '45+ Hook Matrix',
        'TikTok & Meta Adv+',
        'Direct-Response Scripts',
        'Rapid Angle Iteration',
        'Creator Studio Network'
      ]
    },
    {
      id: 'activations',
      title: 'activations',
      solidColor: '#ef5824', // Solid Punchy Tangerine Orange
      textColor: '#080e21',
      dividerColor: '#080e21',
      bulletColor: '#080e21',
      tilt: '0.8deg',
      sticker: <StickerSmiley />,
      items: [
        'CAC & CPA Reduction',
        'In-Cart Bundle Stacks',
        'Post-Purchase Upsells',
        'Mobile CRO Optimization',
        'Checkout Friction Erasure',
        'MER & Cashflow Tracking'
      ]
    },
    {
      id: 'video',
      title: 'video production',
      solidColor: '#8a274c', // Solid Deep Wine Berry Maroon
      textColor: '#ffffff',
      dividerColor: 'rgba(255, 255, 255, 0.4)',
      bulletColor: '#ffffff',
      tilt: '3.2deg',
      sticker: <StickerWatch />,
      items: [
        'High-Converting Ad UGC',
        'Direct-Response VSLs',
        'Social Media Content',
        'High-AOV Unboxing Sets',
        'Founder Story Content',
        'Omnichannel P-Max Ads'
      ]
    },
    {
      id: 'partners',
      title: 'with partners',
      solidColor: '#e5a5f4', // Solid Soft Lilac Lavender
      textColor: '#190422',
      dividerColor: '#190422',
      bulletColor: '#190422',
      tilt: '5.8deg',
      sticker: <StickerHeart />,
      items: [
        'Dedicated Strategist',
        'Daily Slack Operations',
        'Global Localization',
        'Klaviyo Compounding LTV',
        '8 & 9-Figure Scale Plan',
        'Category Leadership'
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
        {/* MODULE 06 — THE SCALING SYSTEM (Solid Colorful Overlapping Fan Deck) */}
        {/* ========================================================================= */}
        <div className="epw-module-card epw-module-system">
          <div className="epw-module-top-bar">
            <span className="epw-module-num-badge">06 — THE SCALING SYSTEM</span>
            <span className="epw-module-tag">RECURSIVE GROWTH ENGINE</span>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3 className="epw-section-heading">
              BUILD <span className="epw-gold-arrow">→</span> TEST <span className="epw-gold-arrow">→</span> OPTIMIZE <span className="epw-gold-arrow">→</span> SCALE.
            </h3>
            <p className="epw-system-sub">
              Hover over each phase to explore our complete execution architecture:
            </p>
          </div>

          {/* Dennis Snellenberg / Truus Solid Colorful Overlapping Fan Deck */}
          <div className="epw-snellenberg-deck-wrap">
            <div className="epw-snellenberg-deck">
              {scalingCards.map((card, idx) => {
                const isHovered = hoveredCard === card.id;
                return (
                  <div
                    key={card.id}
                    className={`epw-truus-solid-card card-${card.id} ${isHovered ? 'hovered' : ''}`}
                    style={{
                      backgroundColor: card.solidColor,
                      color: card.textColor,
                      transform: isHovered 
                        ? 'translateY(-28px) rotate(0deg) scale(1.06)' 
                        : `rotate(${card.tilt}) translateY(0px)`,
                      zIndex: isHovered ? 40 : idx + 1
                    }}
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Hand-Drawn Sticker on Top Edge */}
                    {card.sticker}

                    {/* Card Title (Truus Style Heavy Sans Title) */}
                    <div className="epw-truus-card-header">
                      <h4 className="epw-truus-title" style={{ color: card.textColor }}>
                        {card.title}
                      </h4>
                    </div>

                    {/* Hand-Drawn Underline Divider */}
                    <div 
                      className="epw-truus-divider" 
                      style={{ backgroundColor: card.dividerColor }}
                    ></div>

                    {/* Bullet Points with Diamond Stars */}
                    <ul className="epw-truus-bullets">
                      {card.items.map((bullet, bIdx) => (
                        <li key={bIdx} className="epw-truus-bullet-item" style={{ color: card.textColor }}>
                          <span className="epw-truus-diamond" style={{ color: card.bulletColor }}>✦</span>
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
