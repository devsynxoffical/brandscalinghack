import React from 'react';
import './GlassWindowMarquee.css';

export const MARQUEE_ITEMS = [
  {
    src: '/images/marquee/anastasia.webp',
    alt: 'Client Offer Architecture',
    tag: 'Funnel Build',
    title: 'Client Offer Architecture',
    tilt: 'tilt-neg-2'
  },
  {
    src: '/images/marquee/ann.webp',
    alt: 'Live Growth Breakdown',
    tag: 'Strategy Session',
    title: 'Live Growth Breakdown',
    tilt: 'tilt-pos-2'
  },
  {
    src: '/images/marquee/analytics.webp',
    alt: 'Real-Time Tracking Core',
    tag: 'ROAS Verified',
    title: 'Real-Time Tracking Core',
    tilt: 'tilt-neg-1'
  },
  {
    src: '/images/marquee/george.webp',
    alt: 'Backend Conversion Review',
    tag: 'Scaling Audit',
    title: 'Backend Conversion Review',
    tilt: 'tilt-pos-1'
  },
  {
    src: '/images/marquee/edgar_jeermei.webp',
    alt: 'Offer & Angle Mapping',
    tag: 'Deep-Dive',
    title: 'Offer & Angle Mapping',
    tilt: 'tilt-neg-2'
  },
  {
    src: '/images/marquee/guilia.webp',
    alt: 'High-Ticket Pipeline Setup',
    tag: 'Client Onboarding',
    title: 'High-Ticket Pipeline Setup',
    tilt: 'tilt-pos-2'
  },
  {
    src: '/images/marquee/ig_shot.webp',
    alt: 'Paid Acquisition Proof',
    tag: 'Traffic Scale',
    title: 'Paid Acquisition Proof',
    tilt: 'tilt-neg-1'
  },
  {
    src: '/images/marquee/owne.webp',
    alt: 'Unit Economics Audit',
    tag: 'Growth Workshop',
    title: 'Unit Economics Audit',
    tilt: 'tilt-pos-1'
  },
  {
    src: '/images/marquee/sina.webp',
    alt: 'Closing Optimization',
    tag: 'Pipeline Review',
    title: 'Closing Optimization',
    tilt: 'tilt-neg-2'
  }
];

export default function GlassWindowMarquee() {
  const [isCardHovered, setIsCardHovered] = React.useState(false);

  return (
    <section className="marquee-section">
      {/* Editorial Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '36px', padding: '0 20px', position: 'relative', zIndex: 10 }}>
        <div 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            background: 'rgba(255, 87, 34, 0.1)', 
            border: '1px solid rgba(255, 87, 34, 0.3)', 
            padding: '6px 18px', 
            borderRadius: '999px', 
            color: '#ff5722', 
            fontSize: '12px', 
            fontWeight: 800, 
            textTransform: 'uppercase', 
            letterSpacing: '0.08em', 
            marginBottom: '14px',
            fontFamily: "var(--font-primary, 'Plus Jakarta Sans', sans-serif)"
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ff5722', boxShadow: '0 0 8px #ff5722' }}></span>
          Live Client Recordings • Continuous Proof Loop
        </div>
        <h2 
          style={{ 
            fontSize: 'clamp(22px, 3.5vw, 36px)', 
            fontWeight: 900, 
            color: '#ffffff', 
            letterSpacing: '-0.02em', 
            textTransform: 'uppercase', 
            margin: 0,
            fontFamily: "var(--font-primary, 'Plus Jakarta Sans', sans-serif)"
          }}
        >
          Inside Our Live <span style={{ color: '#ff5722' }}>Scaling Rooms</span>
        </h2>
        <p 
          style={{ 
            color: '#94a3b8', 
            fontSize: '15px', 
            maxWidth: '620px', 
            margin: '10px auto 0', 
            lineHeight: 1.6,
            fontFamily: "var(--font-body, 'Plus Jakarta Sans', sans-serif)"
          }}
        >
          Hover over any session window to pause the stream, straighten the 3D tilt, and inspect the real-time proof.
        </p>
      </div>

      {/* Ambient Radial Glow */}
      <div className="marquee-ambient-glow" />

      {/* Edge Vignette Fades */}
      <div className="marquee-vignette-left" />
      <div className="marquee-vignette-right" />

      {/* Scrolling Track with Hover Pause on Card */}
      <div 
        className={`marquee-track ${isCardHovered ? 'is-paused' : ''}`} 
        style={{ '--marquee-speed': '48s' }}
      >
        {[0, 1].map((copyIndex) => (
          <div key={copyIndex} className="marquee-group" aria-hidden={copyIndex === 1 || undefined}>
            {MARQUEE_ITEMS.map((item, idx) => (
              <div 
                key={`${copyIndex}-${idx}`} 
                className={`window-card-wrapper ${item.tilt}`}
                onMouseEnter={() => setIsCardHovered(true)}
                onMouseLeave={() => setIsCardHovered(false)}
              >
                <div className="window-card">
                  {/* Top Window Header Bar */}
                  <div className="window-header">
                    <div className="window-controls">
                      <span className="dot dot-red" />
                      <span className="dot dot-yellow" />
                      <span className="dot dot-green" />
                    </div>
                    <div className="status-badge">
                      <span className="pulse-circle" />
                      {item.tag}
                    </div>
                  </div>

                  {/* Window Screen Display Area */}
                  <div className="window-screen">
                    <img 
                      src={item.src} 
                      alt={copyIndex === 0 ? item.alt : ''} 
                      loading="lazy" 
                      decoding="async" 
                    />
                    <div className="window-glare" />
                  </div>

                  {/* Bottom Caption Bar */}
                  <div className="window-footer">
                    <span className="window-title">{item.title}</span>
                    <span className="window-meta">LIVE RECORDING</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
