import React, { useRef, useEffect } from 'react';
import { ArrowUpRight, TrendingUp, Sparkles, Zap, ArrowRight, Play, Flame, Award } from 'lucide-react';

// Client Logos for Marquee
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

const bigMarqueeItems = [
  { text: 'TURNING PAID TRAFFIC', highlight: false },
  { text: 'INTO 8-FIGURE REVENUE', highlight: true },
  { text: 'SCIENTIFIC ACQUISITION', highlight: false },
  { text: 'HIGH-AOV DTC FUNNELS', highlight: true },
  { text: 'VIRAL UGC CREATIVE LAB', highlight: false },
  { text: '$50M+ AD SPEND DEPLOYED', highlight: true },
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
      {/* 1. HERO SECTION (High-Visibility Background Video + Big Scrolling Line) */}
      {/* ========================================================================= */}
      <section id="hero" className="bsh-hero-stage">
        {/* Crystal Clear High-Visibility Fullscreen Video Background */}
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
          {/* Subtle Transparent Vignette for High Video Clarity */}
          <div className="bsh-hero-video-overlay" />
        </div>

        {/* Ambient Warm Studio Lighting */}
        <div className="bsh-hero-ambient-glow" aria-hidden="true" />

        {/* Hero Top Content Header */}
        <div className="bsh-hero-content-wrap">
          {/* Top Live Status Pill */}
          <div className="bsh-hero-top-pill">
            <span className="bsh-live-dot" />
            <span className="bsh-pill-text">$50M+ AD SPEND DEPLOYED · 12+ YEARS SCALING 8-FIGURE BRANDS</span>
          </div>

          {/* Elegant Top Subhead */}
          <div className="bsh-hero-header-eyebrow">
            <span className="bsh-serif-italic">Scaling Brands</span>{' '}
            <span className="bsh-bold-flame">To 8–Figures</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BIG SCROLLING MARQUEE LINE (Massive, High-Impact Typography) */}
        {/* ========================================================================= */}
        <div className="bsh-big-marquee-wrapper">
          <div className="bsh-big-marquee-track">
            <div className="bsh-big-marquee-group">
              {bigMarqueeItems.map((item, idx) => (
                <span key={`bm-a-${idx}`} className="bsh-big-marquee-item">
                  <span className={item.highlight ? 'bsh-big-text-gradient' : 'bsh-big-text-solid'}>
                    {item.text}
                  </span>
                  <span className="bsh-big-star">✦</span>
                </span>
              ))}
            </div>
            <div className="bsh-big-marquee-group" aria-hidden="true">
              {bigMarqueeItems.map((item, idx) => (
                <span key={`bm-b-${idx}`} className="bsh-big-marquee-item">
                  <span className={item.highlight ? 'bsh-big-text-gradient' : 'bsh-big-text-solid'}>
                    {item.text}
                  </span>
                  <span className="bsh-big-star">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Subtitle & Action CTAs */}
        <div className="bsh-hero-mid-controls">
          <p className="bsh-hero-sub-description">
            SCIENTIFIC CUSTOMER ACQUISITION & ECOMMERCE GROWTH ENGINE · $50M+ DEPLOYED
          </p>

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
              <span>118+ CASE STUDIES</span>
            </button>
          </div>
        </div>

        {/* Bottom 3 Capability Cards (Custom Styled with glowing accents) */}
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
                    <span className="bsh-cap-num">01</span>
                    <h3 className="bsh-cap-title">Paid Media & Scaling</h3>
                    <p className="bsh-cap-sub">Meta Advantage+, Scientific CAC & Scale</p>
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
                    <span className="bsh-cap-num">02</span>
                    <h3 className="bsh-cap-title">Viral Creative Studio</h3>
                    <p className="bsh-cap-sub">High-Converting UGC, Hooks & Pattern Interrupts</p>
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
                    <span className="bsh-cap-num">03</span>
                    <h3 className="bsh-cap-title">Conversion & High-AOV Funnels</h3>
                    <p className="bsh-cap-sub">Shopify Optimization, Multi-Tier Bundles & CRO</p>
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
      {/* 2. TRUSTED BY 100+ BRANDS (Seamless Infinite Scrolling Logo Showcase) */}
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
