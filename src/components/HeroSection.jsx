import React, { useRef, useEffect } from 'react';
import { ArrowUpRight, TrendingUp, Sparkles, Zap, ArrowRight, Play, ShieldCheck } from 'lucide-react';

// Client Logos
const row1Logos = [
  '/logos/logo-01.png',
  '/logos/logo-02.png',
  '/logos/logo-03.png',
  '/logos/logo-04.png',
  '/logos/logo-05.png',
  '/logos/logo-06.png',
  '/logos/logo-07.png',
  '/logos/logo-08.png',
  '/logos/logo-10.png',
  '/logos/logo-11.png',
];

const row2Logos = [
  '/logos/logo-12.png',
  '/logos/logo-13.png',
  '/logos/logo-15.png',
  '/logos/logo-16.png',
  '/logos/logo-17.png',
  '/logos/logo-18.png',
  '/logos/logo-19.png',
  '/logos/logo-20.png',
  '/logos/logo-21.png',
  '/logos/logo-22.png',
];

const stream1Items = [
  '5.4X AVERAGE ROAS',
  'META ADVANTAGE+ SCALING',
  '45+ WEEKLY UGC HOOKS',
  '$100K–$1M/MO ROADMAP',
  'SCIENTIFIC CAC OPTIMIZATION',
  'HIGH-AOV DTC BRANDS'
];

const stream2Items = [
  '118+ VERIFIED CASE PROOFS',
  'SHOPIFY CRO & SPEED ARCHITECTURE',
  'RETENTION & ORDER BUMP FUNNELS',
  'ZERO-TO-SCALE FRAMEWORK',
  '$50M+ PAID AD SPEND',
  'PREDICTABLE 8-FIGURE GROWTH'
];

export default function HeroSection({ onOpenBooking, onNavigate }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="bsh-hero-root">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (High-Visibility Background Video & Bespoke Layout) */}
      {/* ========================================================================= */}
      <section id="hero" className="bsh-hero-stage">
        {/* Crisp High-Visibility Fullscreen Video Background */}
        <div className="bsh-hero-video-bg" aria-hidden="true">
          <video
            ref={videoRef}
            src="/million_dollar_header_video_1080p_web.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="bsh-hero-bg-video-element"
          />
          {/* Subtle Contrast Vignette */}
          <div className="bsh-hero-video-overlay" />
        </div>

        {/* Ambient Warm Studio Lighting */}
        <div className="bsh-hero-ambient-glow" aria-hidden="true" />

        {/* Main Hero Header Content */}
        <div className="bsh-hero-content-wrap">
          {/* Top Pill Tag */}
          <div className="bsh-hero-top-pill">
            <span className="bsh-live-dot" />
            <span className="bsh-pill-text">$50M+ AD SPEND DEPLOYED · 12+ YEARS SCALING 8-FIGURE BRANDS</span>
          </div>

          {/* Main Staggered Cinematic Title */}
          <h1 className="bsh-hero-main-title">
            <span className="bsh-title-line-1">TURNING PAID TRAFFIC INTO</span>
            <span className="bsh-title-line-2">
              <span className="bsh-gradient-fire-text">8-FIGURE REVENUE</span>
            </span>
          </h1>

          {/* Subtitle Value Proposition */}
          <p className="bsh-hero-sub-description">
            We build the complete customer acquisition infrastructure, weekly UGC creative machine, 
            and high-AOV conversion architecture behind fast-growing eCommerce brands.
          </p>

          {/* Direct CTA Button Group */}
          <div className="bsh-hero-cta-group">
            <button className="btn-primary bsh-cta-primary-btn" onClick={onOpenBooking}>
              <span>SCALE YOUR BRAND</span>
              <ArrowRight size={18} />
            </button>
            <button
              className="btn-secondary bsh-cta-secondary-btn"
              onClick={() => onNavigate ? onNavigate('cases') : null}
            >
              <Play size={14} color="#ff5722" />
              <span>118+ VERIFIED CASE STUDIES</span>
            </button>
          </div>

          {/* Dual Dynamic Ticker Streams */}
          <div className="bsh-dual-ticker-container">
            {/* Stream 1 (Left Scrolling) */}
            <div className="bsh-ticker-stream-outer">
              <div className="bsh-ticker-track-left">
                <div className="bsh-ticker-group">
                  {stream1Items.map((item, idx) => (
                    <span key={`s1-a-${idx}`} className="bsh-ticker-chip">
                      <span className="bsh-ticker-text">{item}</span>
                      <span className="bsh-ticker-sparkle">✦</span>
                    </span>
                  ))}
                </div>
                <div className="bsh-ticker-group" aria-hidden="true">
                  {stream1Items.map((item, idx) => (
                    <span key={`s1-b-${idx}`} className="bsh-ticker-chip">
                      <span className="bsh-ticker-text">{item}</span>
                      <span className="bsh-ticker-sparkle">✦</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stream 2 (Right Scrolling) */}
            <div className="bsh-ticker-stream-outer" style={{ marginTop: '8px' }}>
              <div className="bsh-ticker-track-right">
                <div className="bsh-ticker-group">
                  {stream2Items.map((item, idx) => (
                    <span key={`s2-a-${idx}`} className="bsh-ticker-chip bsh-chip-alt">
                      <span className="bsh-ticker-text">{item}</span>
                      <span className="bsh-ticker-sparkle bsh-sparkle-gold">✦</span>
                    </span>
                  ))}
                </div>
                <div className="bsh-ticker-group" aria-hidden="true">
                  {stream2Items.map((item, idx) => (
                    <span key={`s2-b-${idx}`} className="bsh-ticker-chip bsh-chip-alt">
                      <span className="bsh-ticker-text">{item}</span>
                      <span className="bsh-ticker-sparkle bsh-sparkle-gold">✦</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 3 Capability Architecture Cards */}
        <div className="bsh-hero-capabilities-bar">
          <div className="container">
            <div className="bsh-capabilities-grid">
              {/* 01 Paid Media & Scaling */}
              <div
                className="bsh-cap-card"
                onClick={() => onNavigate ? onNavigate('growth') : null}
              >
                <div className="bsh-cap-left">
                  <div className="bsh-cap-icon-box bsh-icon-flame">
                    <TrendingUp size={22} color="#ff5722" />
                  </div>
                  <div className="bsh-cap-info">
                    <span className="bsh-cap-num">01 · MEDIA BUYING</span>
                    <h3 className="bsh-cap-title">Scientific Paid Media</h3>
                    <p className="bsh-cap-sub">Meta Advantage+, Daily Budget Scale & Low CAC</p>
                  </div>
                </div>
                <div className="bsh-cap-arrow-btn">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* 02 Viral Creative Studio */}
              <div
                className="bsh-cap-card"
                onClick={() => onNavigate ? onNavigate('viral-creatives') : null}
              >
                <div className="bsh-cap-left">
                  <div className="bsh-cap-icon-box bsh-icon-sparkle">
                    <Sparkles size={22} color="#ff7043" />
                  </div>
                  <div className="bsh-cap-info">
                    <span className="bsh-cap-num">02 · CREATIVE LAB</span>
                    <h3 className="bsh-cap-title">Direct-Response UGC Studio</h3>
                    <p className="bsh-cap-sub">High-Converting Hooks, UGC & Pattern Interrupts</p>
                  </div>
                </div>
                <div className="bsh-cap-arrow-btn">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* 03 Conversion & High-AOV Funnels */}
              <div
                className="bsh-cap-card"
                onClick={() => onNavigate ? onNavigate('cases') : (onOpenBooking ? onOpenBooking() : null)}
              >
                <div className="bsh-cap-left">
                  <div className="bsh-cap-icon-box bsh-icon-zap">
                    <Zap size={22} color="#ffb300" />
                  </div>
                  <div className="bsh-cap-info">
                    <span className="bsh-cap-num">03 · CRO & RETENTION</span>
                    <h3 className="bsh-cap-title">High-AOV Store Architecture</h3>
                    <p className="bsh-cap-sub">Sub-1s Shopify Funnels, Dynamic Bundles & CRO</p>
                  </div>
                </div>
                <div className="bsh-cap-arrow-btn">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TRUSTED BY 100+ BRANDS (Seamless Infinite Scrolling Logo Rows) */}
      {/* ========================================================================= */}
      <section className="bsh-trusted-brands-section">
        <div className="container">
          <div className="bsh-trusted-heading-row">
            <span className="bsh-trusted-line" />
            <h2 className="bsh-trusted-title">Trusted by 100+ scaling eCommerce founders</h2>
            <span className="bsh-trusted-line" />
          </div>

          {/* Row 1: Scrolling Left */}
          <div className="bsh-logos-marquee-wrapper">
            <div className="bsh-logos-track-left">
              <div className="bsh-logos-group">
                {row1Logos.map((logo, idx) => (
                  <div key={`r1-a-${idx}`} className="bsh-logo-item">
                    <img src={logo} alt={`Client logo ${idx + 1}`} className="bsh-logo-img" loading="eager" />
                  </div>
                ))}
              </div>
              <div className="bsh-logos-group" aria-hidden="true">
                {row1Logos.map((logo, idx) => (
                  <div key={`r1-b-${idx}`} className="bsh-logo-item">
                    <img src={logo} alt="" className="bsh-logo-img" loading="eager" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="bsh-logos-marquee-wrapper" style={{ marginTop: '16px' }}>
            <div className="bsh-logos-track-right">
              <div className="bsh-logos-group">
                {row2Logos.map((logo, idx) => (
                  <div key={`r2-a-${idx}`} className="bsh-logo-item">
                    <img src={logo} alt={`Client logo ${idx + 11}`} className="bsh-logo-img" loading="eager" />
                  </div>
                ))}
              </div>
              <div className="bsh-logos-group" aria-hidden="true">
                {row2Logos.map((logo, idx) => (
                  <div key={`r2-b-${idx}`} className="bsh-logo-item">
                    <img src={logo} alt="" className="bsh-logo-img" loading="eager" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
