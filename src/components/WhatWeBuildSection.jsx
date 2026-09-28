import React, { useRef, useEffect } from 'react';
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
  Zap,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Volume2,
  VolumeX,
  Play
} from 'lucide-react';

export default function WhatWeBuildSection({ onOpenBooking, onNavigate }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const leftPillars = [
    {
      num: '01',
      icon: <ShoppingBag size={22} />,
      title: 'SHOPIFY',
      subtitle: 'Conversion-Focused Stores',
      description: 'Conversion-focused stores built to sell with sub-1s page speeds, frictionless mobile checkout, and high-AOV bundles.',
      features: ['Sub-1s Page Speeds', 'High-Converting Mobile UX', 'Dynamic 1-Click Upsells'],
      accent: '#06b6d4',
      badge: 'SPEED & UX'
    },
    {
      num: '02',
      icon: <Video size={22} />,
      title: 'CREATIVE',
      subtitle: 'High-Performing Hooks & UGC',
      description: 'High-performing concepts, hooks, UGC and ads built for continuous testing and aggressive weekly iteration.',
      features: ['3-Second Hook Matrix', 'Direct-Response UGC', 'Rapid Iteration Engine'],
      accent: '#a855f7',
      badge: 'VIRAL HOOKS'
    },
    {
      num: '03',
      icon: <Target size={22} />,
      title: 'META ADS',
      subtitle: 'Predictable Scale on FB & IG',
      description: 'Customer acquisition through Facebook & Instagram using Advantage+ scaling and broad-targeting architectures.',
      features: ['Advantage+ Scaling Systems', 'Broad Audience Mastery', 'Predictable Low CPA'],
      accent: '#ff7043',
      badge: 'ACQUISITION'
    }
  ];

  const rightPillars = [
    {
      num: '04',
      icon: <Search size={22} />,
      title: 'GOOGLE ADS',
      subtitle: 'High-Intent Search & Shopping',
      description: 'Capture high-intent customers actively searching for your products with Performance Max and search capture.',
      features: ['Performance Max Scaling', 'High-Intent Search Funnels', 'Omnichannel Retargeting'],
      accent: '#38bdf8',
      badge: 'HIGH-INTENT'
    },
    {
      num: '05',
      icon: <BarChart3 size={22} />,
      title: 'CRO',
      subtitle: 'Conversion Rate Optimization',
      description: 'Turn more of your existing traffic into revenue with dynamic bundle pricing, order bumps, and friction elimination.',
      features: ['A/B Offer & Bundle Tests', 'Frictionless Checkout Journeys', 'Maximized Average Order Value'],
      accent: '#10b981',
      badge: 'PROFIT LIFT'
    },
    {
      num: '06',
      icon: <Rocket size={22} />,
      title: 'SCALING',
      subtitle: 'Systematic Growth & Exits',
      description: 'Identify winners, eliminate bottlenecks and scale what works to prepare brands for 8 & 9-figure enterprise exits.',
      features: ['Real-Time Winner Detection', 'Cash-Flow Optimization', '8 & 9-Figure Exit Blueprint'],
      accent: '#ffb300',
      badge: '8 & 9 FIGURES'
    }
  ];

  return (
    <section className="what-we-build-section" id="what-we-build" style={{ background: '#0a0103', color: '#ffffff', padding: '90px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background ambient lighting glows */}
      <div className="wwb-ambient-glow wwb-glow-left" />
      <div className="wwb-ambient-glow wwb-glow-right" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="wwb-header-block" style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 55px auto' }}>
          <div className="wwb-badge-row" style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
            <span 
              className="wwb-section-badge"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(220, 38, 38, 0.15)',
                color: '#ff5722',
                border: '1px solid rgba(220, 38, 38, 0.35)',
                borderRadius: '9999px',
                padding: '6px 18px',
                fontWeight: 800,
                fontSize: '0.82rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              <Zap size={14} className="wwb-badge-icon" />
              03 — WHAT WE BUILD
            </span>
          </div>

          <h2 className="wwb-main-title" style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.6rem)', color: '#ffffff', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '10px' }}>
            YOUR ENTIRE ECOMMERCE <span className="text-gradient-orange">GROWTH ENGINE.</span>
          </h2>

          <div className="wwb-sub-headline" style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffb300', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
            NOT JUST ADS. NOT JUST A STORE.
          </div>

          <p className="wwb-lead-desc" style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
            We build the infrastructure around your brand that turns attention into customers and customers into compounding revenue.
          </p>
        </div>

        {/* 3-Column Layout: Left Pillars (3) | Center Video Phone Mockup | Right Pillars (3) */}
        <div 
          className="wwb-growth-engine-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 1fr) minmax(300px, 360px) minmax(280px, 1fr)',
            gap: '28px',
            alignItems: 'center',
            marginBottom: '60px'
          }}
        >
          {/* Left Column: Shopify, Creative, Meta Ads */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {leftPillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="wwb-pillar-card"
                style={{
                  background: 'linear-gradient(145deg, #180306 0%, #0c0103 100%)',
                  border: '1.5px solid rgba(220, 38, 38, 0.28)',
                  borderRadius: '20px',
                  padding: '24px 22px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = pillar.accent;
                  e.currentTarget.style.boxShadow = `0 16px 40px ${pillar.accent}22`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.28)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: `${pillar.accent}18`, border: `1px solid ${pillar.accent}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: pillar.accent }}>
                    {pillar.icon}
                  </div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: pillar.accent, padding: '3px 10px', borderRadius: '999px', border: `1px solid ${pillar.accent}33`, background: `${pillar.accent}0f` }}>
                    {pillar.badge}
                  </span>
                </div>

                <div style={{ fontSize: '0.78rem', color: pillar.accent, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '2px' }}>
                  {pillar.subtitle}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 900, textTransform: 'uppercase', margin: '0 0 8px 0', letterSpacing: '-0.01em' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.55, margin: '0 0 14px 0' }}>
                  {pillar.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {pillar.features.map((feat, fIdx) => (
                    <span key={fIdx} style={{ fontSize: '0.74rem', color: '#e2e8f0', background: 'rgba(255, 255, 255, 0.05)', padding: '3px 9px', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <CheckCircle2 size={11} color={pillar.accent} />
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Center Column: High-Tech Phone Frame Playing Video Full */}
          <div 
            className="wwb-phone-showcase-wrap"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            {/* Ambient Background Backlight Glow */}
            <div 
              style={{
                position: 'absolute',
                inset: '-10px',
                background: 'radial-gradient(circle, rgba(255, 87, 34, 0.35) 0%, rgba(220, 38, 38, 0.15) 50%, transparent 70%)',
                filter: 'blur(35px)',
                zIndex: 0,
                borderRadius: '50px',
                pointerEvents: 'none'
              }}
            />

            {/* Realistic Smartphone Chassis Frame */}
            <div
              className="wwb-phone-frame"
              style={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                maxWidth: '340px',
                background: '#000000',
                borderRadius: '42px',
                padding: '10px',
                border: '3px solid rgba(255, 255, 255, 0.18)',
                boxShadow: '0 25px 70px rgba(0, 0, 0, 0.85), 0 0 40px rgba(255, 87, 34, 0.25)',
                overflow: 'hidden'
              }}
            >
              {/* Inner Phone Screen */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '560px',
                  background: '#050102',
                  borderRadius: '34px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {/* Dynamic Island / Speaker Notch */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '90px',
                    height: '22px',
                    background: '#000000',
                    borderRadius: '20px',
                    zIndex: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#111827', marginRight: '6px' }} />
                  <div style={{ width: '40px', height: '3px', borderRadius: '2px', background: '#1f2937' }} />
                </div>

                {/* Video Player (Plays Full, Unclipped) */}
                <video
                  ref={videoRef}
                  src="/assets/insta-video/ClzYLasvGb7.mp4"
                  poster="/assets/insta-video/ClzYLasvGb7.webp"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    background: '#000000',
                    display: 'block'
                  }}
                />

                {/* Top Overlay Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '40px',
                    left: '14px',
                    zIndex: 15,
                    background: 'rgba(0, 0, 0, 0.75)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff3d00', animation: 'pulse 1.5s infinite' }} />
                  <span>PROVEN METRICS</span>
                </div>

                {/* Right Side Engagement Action Column */}
                <div
                  style={{
                    position: 'absolute',
                    right: '12px',
                    bottom: '75px',
                    zIndex: 15,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '14px'
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff1744' }}>
                      <Heart size={18} fill="#ff1744" />
                    </div>
                    <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>48.2k</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                      <MessageCircle size={18} />
                    </div>
                    <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>1,240</span>
                  </div>

                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                    <Share2 size={17} />
                  </div>
                </div>

                {/* Bottom Video Context & Caption Card */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '42px',
                    left: '12px',
                    right: '54px',
                    zIndex: 15,
                    background: 'rgba(0, 0, 0, 0.78)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    padding: '8px 12px',
                    borderRadius: '12px'
                  }}
                >
                  <div style={{ fontSize: '0.78rem', fontWeight: 900, color: '#ffffff', marginBottom: '2px', lineHeight: 1.2 }}>
                    High-Converting UGC Creative Ad
                  </div>
                  <div style={{ fontSize: '0.68rem', color: '#ffb300', fontWeight: 700, lineHeight: 1.3 }}>
                    Scale to $100k/mo Net Profit • Meta Ads Framework
                  </div>
                </div>

                {/* Bottom Instagram Navigation Bar */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '38px',
                    background: 'rgba(0, 0, 0, 0.95)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    zIndex: 20,
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.8)'
                  }}
                >
                  <span>🏠</span>
                  <span>🔍</span>
                  <span>➕</span>
                  <span>🎬</span>
                  <span>👤</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Ads, CRO, Scaling */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {rightPillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="wwb-pillar-card"
                style={{
                  background: 'linear-gradient(145deg, #180306 0%, #0c0103 100%)',
                  border: '1.5px solid rgba(220, 38, 38, 0.28)',
                  borderRadius: '20px',
                  padding: '24px 22px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = pillar.accent;
                  e.currentTarget.style.boxShadow = `0 16px 40px ${pillar.accent}22`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.28)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: `${pillar.accent}18`, border: `1px solid ${pillar.accent}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: pillar.accent }}>
                    {pillar.icon}
                  </div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: pillar.accent, padding: '3px 10px', borderRadius: '999px', border: `1px solid ${pillar.accent}33`, background: `${pillar.accent}0f` }}>
                    {pillar.badge}
                  </span>
                </div>

                <div style={{ fontSize: '0.78rem', color: pillar.accent, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '2px' }}>
                  {pillar.subtitle}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 900, textTransform: 'uppercase', margin: '0 0 8px 0', letterSpacing: '-0.01em' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.55, margin: '0 0 14px 0' }}>
                  {pillar.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {pillar.features.map((feat, fIdx) => (
                    <span key={fIdx} style={{ fontSize: '0.74rem', color: '#e2e8f0', background: 'rgba(255, 255, 255, 0.05)', padding: '3px 9px', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <CheckCircle2 size={11} color={pillar.accent} />
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Synchronized Flywheel Bottom Banner */}
        <div 
          className="wwb-flywheel-banner"
          style={{
            background: 'linear-gradient(135deg, #1f0407 0%, #100103 100%)',
            border: '1.5px solid rgba(220, 38, 38, 0.4)',
            borderRadius: '24px',
            padding: '36px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 35px rgba(220, 38, 38, 0.15)'
          }}
        >
          <div className="wwb-flywheel-content" style={{ maxWidth: '680px' }}>
            <div className="wwb-flywheel-tag" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ffb300', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.08em', marginBottom: '8px', textTransform: 'uppercase' }}>
              <Sparkles size={15} color="#ffb300" />
              <span>THE COMPLETE SYSTEM</span>
            </div>
            <h3 className="wwb-flywheel-title" style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)', color: '#ffffff', fontWeight: 900, textTransform: 'uppercase', margin: '0 0 8px 0', letterSpacing: '-0.01em' }}>
              EVERY PIECE WORKS TOGETHER.
            </h3>
            <p className="wwb-flywheel-text" style={{ color: '#cbd5e1', fontSize: '0.98rem', lineHeight: 1.6, margin: 0 }}>
              Isolated ads don't scale. A synchronized growth flywheel creates unstoppable market momentum.
            </p>
          </div>

          <div className="wwb-flywheel-action">
            <button className="btn-primary wwb-cta-btn" onClick={onOpenBooking} style={{ padding: '14px 34px' }}>
              <span>SCALE MY BRAND NOW</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
