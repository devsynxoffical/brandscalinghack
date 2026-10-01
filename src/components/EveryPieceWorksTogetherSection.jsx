import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

// Hand-Drawn Cartoon Sticker SVGs (Exact Truus by Dennis Snellenberg Style)
function StickerCamera() {
  return (
    <div className="epw-truus-sticker sticker-camera" aria-hidden="true">
      <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
        <path d="M18 36 L30 18 L68 18 L82 36 L90 42 L88 84 L14 84 L10 42 Z" fill="#ffffff" />
        <path d="M22 38 L33 22 L65 22 L78 38 L84 44 L82 80 L18 80 L16 44 Z" fill="#18181b" />
        <circle cx="50" cy="54" r="20" fill="#ffffff" />
        <circle cx="50" cy="54" r="16" fill="#18181b" />
        <circle cx="50" cy="54" r="9" fill="#ffffff" />
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
        <rect x="22" y="10" width="56" height="80" rx="14" fill="#ffffff" transform="rotate(-6 50 50)" />
        <rect x="26" y="14" width="48" height="72" rx="10" fill="#fde047" stroke="#18181b" strokeWidth="4" transform="rotate(-6 50 50)" />
        <rect x="32" y="24" width="36" height="48" rx="4" fill="#18181b" transform="rotate(-6 50 50)" />
        <path d="M12 36 Q6 48 12 60 M88 30 Q94 42 88 54" stroke="#18181b" strokeWidth="5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function StickerSmiley() {
  return (
    <div className="epw-truus-sticker sticker-smiley" aria-hidden="true">
      <svg width="66" height="66" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="46" fill="#ffffff" />
        <circle cx="50" cy="50" r="40" fill="#60a5fa" stroke="#18181b" strokeWidth="4" />
        <ellipse cx="38" cy="40" rx="4.5" ry="9" fill="#18181b" />
        <ellipse cx="62" cy="40" rx="4.5" ry="9" fill="#18181b" />
        <path d="M30 56 Q50 78 70 56" stroke="#18181b" strokeWidth="5" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

function StickerWatch() {
  return (
    <div className="epw-truus-sticker sticker-watch" aria-hidden="true">
      <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
        <rect x="15" y="15" width="70" height="70" rx="18" fill="#ffffff" />
        <rect x="20" y="20" width="60" height="60" rx="14" fill="#bef264" stroke="#18181b" strokeWidth="4" />
        <circle cx="50" cy="50" r="18" fill="#ffffff" stroke="#18181b" strokeWidth="3" />
        <path d="M50 38 L50 50 L60 50" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
        <path d="M50 20 L50 32 M50 68 L50 80" stroke="#f97316" strokeWidth="5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function EveryPieceWorksTogetherSection({ onOpenBooking }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  // 06 Solid Colorful Cards Deck (Exact Truus by Dennis Snellenberg Reproduction with OUR Content)
  const scalingCards = [
    {
      id: 'build',
      title: 'build',
      desc: 'Create the right foundation, offer, store and customer journey.',
      solidColor: '#246b54', // Solid Emerald Forest Green
      textColor: '#ffffff',
      dividerColor: 'rgba(255, 255, 255, 0.4)',
      bulletColor: '#ffffff',
      tilt: '-4.5deg',
      sticker: <StickerCamera />,
      items: [
        'Right Foundation & Angles',
        'Irresistible Offer Setup',
        'Sub-1s Mobile Shopify',
        'Frictionless Journey',
        'Unit Margin Economics'
      ]
    },
    {
      id: 'test',
      title: 'test',
      desc: 'Continuously test products, creatives, hooks, audiences and messaging.',
      solidColor: '#688ef7', // Solid Periwinkle Sky Blue
      textColor: '#080e21',
      dividerColor: '#080e21',
      bulletColor: '#080e21',
      tilt: '-1.5deg',
      sticker: <StickerPhone />,
      items: [
        'Winning Product Testing',
        'Weekly UGC Ad Cadence',
        '45+ Hook & Angle Matrix',
        'Advantage+ Audience Testing',
        'Direct Messaging Testing'
      ]
    },
    {
      id: 'optimize',
      title: 'optimize',
      desc: 'Improve CAC, CVR, AOV, ROAS and overall profitability.',
      solidColor: '#ef5824', // Solid Punchy Tangerine Orange
      textColor: '#080e21',
      dividerColor: '#080e21',
      bulletColor: '#080e21',
      tilt: '1.5deg',
      sticker: <StickerSmiley />,
      items: [
        'CAC & CPA Reduction',
        'Conversion Rate (CVR)',
        'In-Cart & 1-Click AOV',
        'ROAS & Margin Health',
        'Checkout Friction Removal'
      ]
    },
    {
      id: 'scale',
      title: 'scale',
      desc: 'Put more budget, creative and resources behind what\'s working.',
      solidColor: '#8a274c', // Solid Deep Wine Berry Maroon
      textColor: '#ffffff',
      dividerColor: 'rgba(255, 255, 255, 0.4)',
      bulletColor: '#ffffff',
      tilt: '4.5deg',
      sticker: <StickerWatch />,
      items: [
        'Daily Ad Budget Scaling',
        'High-Volume Creative Lab',
        'Omnichannel Domination',
        'Global Market Expansion',
        'Compounding 90-Day LTV'
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
          <h2 className="epw-master-title">
            BUILD <span className="epw-gold-arrow">→</span> TEST <span className="epw-gold-arrow">→</span> OPTIMIZE <span className="epw-gold-arrow">→</span> <span className="epw-flame-text">SCALE.</span>
          </h2>
          <p className="epw-master-sub">
            Hover over each phase to explore our complete execution architecture:
          </p>
        </div>

        {/* ========================================================================= */}
        {/* SOLID COLORFUL OVERLAPPING FAN DECK (DENNIS SNELLENBERG STYLE) */}
        {/* ========================================================================= */}
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
                  {/* Hand-Drawn Cartoon Sticker on Top Edge */}
                  {card.sticker}

                  {/* Card Title (Truus Heavy Title) */}
                  <div className="epw-truus-card-header">
                    <h4 className="epw-truus-title" style={{ color: card.textColor }}>
                      {card.title}
                    </h4>
                  </div>

                  {/* Core Description Copy */}
                  <p className="epw-card-desc-our" style={{ color: card.textColor }}>
                    {card.desc}
                  </p>

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

      </div>
    </section>
  );
}
