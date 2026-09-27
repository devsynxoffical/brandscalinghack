import React, { useRef, useEffect } from 'react';
import { ArrowUpRight, TrendingUp, Sparkles, Zap } from 'lucide-react';

// Row 1 & Row 2 Logos
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

const marqueeWords = [
  'PREDICTABLE SCALE',
  '$50M+ AD SPEND',
  'CREATIVE ENGINE',
  'HIGH-AOV DTC',
  'ADVANTAGE+ META',
  'BRAND SCALING HACKS',
  '8-FIGURE PROOF',
  '5.4X ROAS'
];

export default function HeroSection({ onOpenBooking, onNavigate }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="mdf-hero-root">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Video Background & Brand Scaling Hacks Typography) */}
      {/* ========================================================================= */}
      <section id="hero" className="mdf-hero-stage">
        {/* Background Fullscreen Video with Dark Overlay */}
        <div className="mdf-hero-video-bg" aria-hidden="true">
          <video
            ref={videoRef}
            src="/million_dollar_header_video_1080p_web.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="mdf-hero-bg-video-element"
          />
          <div className="mdf-hero-video-overlay" />
        </div>

        {/* Ambient Radial Fire Glow Backdrop */}
        <div className="mdf-hero-radial-glow" aria-hidden="true" />

        {/* Hero Content Container */}
        <div className="mdf-hero-content-wrap">
          {/* Top Title: Scaling Brands To 8-Figures */}
          <div className="mdf-hero-headline-box">
            <span className="mdf-hero-serif-text">Scaling Brands</span>
            <span className="mdf-hero-sans-text">To 8-Figures</span>
          </div>

          {/* Giant Scrolling Typography Marquee */}
          <div className="mdf-giant-marquee-outer">
            <div className="mdf-giant-marquee-track">
              {/* Group 1 */}
              <div className="mdf-giant-marquee-group">
                {marqueeWords.map((word, idx) => (
                  <span key={`w1-${idx}`} className="mdf-giant-word-unit">
                    <span className="mdf-giant-word">{word}</span>
                    <span className="mdf-giant-sparkle">✦</span>
                  </span>
                ))}
              </div>
              {/* Group 2 (Duplicate for Seamless Infinite Loop) */}
              <div className="mdf-giant-marquee-group" aria-hidden="true">
                {marqueeWords.map((word, idx) => (
                  <span key={`w2-${idx}`} className="mdf-giant-word-unit">
                    <span className="mdf-giant-word">{word}</span>
                    <span className="mdf-giant-sparkle">✦</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tagline Below Marquee */}
          <div className="mdf-hero-tagline-wrap">
            <p className="mdf-hero-tagline">
              SCIENTIFIC CUSTOMER ACQUISITION & ECOMMERCE GROWTH ENGINE · $50M+ DEPLOYED
            </p>
          </div>
        </div>

        {/* Bottom 3 Capability Cards Bar */}
        <div className="mdf-hero-capabilities-bar">
          <div className="container">
            <div className="mdf-capabilities-grid">
              {/* 01 Paid Media & Scaling */}
              <div
                className="mdf-cap-card"
                onClick={() => onNavigate ? onNavigate('growth') : null}
              >
                <div className="mdf-cap-left">
                  <div className="mdf-cap-icon-box mdf-icon-flame">
                    <TrendingUp size={22} color="#ff5722" />
                  </div>
                  <div className="mdf-cap-info">
                    <span className="mdf-cap-num">01</span>
                    <h3 className="mdf-cap-title">Paid Media & Scaling</h3>
                    <p className="mdf-cap-sub">Meta Advantage+, Scientific CAC & Scale</p>
                  </div>
                </div>
                <div className="mdf-cap-arrow-btn">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* 02 Viral Creative Studio */}
              <div
                className="mdf-cap-card"
                onClick={() => onNavigate ? onNavigate('viral-creatives') : null}
              >
                <div className="mdf-cap-left">
                  <div className="mdf-cap-icon-box mdf-icon-sparkle">
                    <Sparkles size={22} color="#ff7043" />
                  </div>
                  <div className="mdf-cap-info">
                    <span className="mdf-cap-num">02</span>
                    <h3 className="mdf-cap-title">Viral Creative Studio</h3>
                    <p className="mdf-cap-sub">High-Converting UGC, Hooks & Pattern Interrupts</p>
                  </div>
                </div>
                <div className="mdf-cap-arrow-btn">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* 03 Conversion & High-AOV Funnels */}
              <div
                className="mdf-cap-card"
                onClick={() => onNavigate ? onNavigate('cases') : (onOpenBooking ? onOpenBooking() : null)}
              >
                <div className="mdf-cap-left">
                  <div className="mdf-cap-icon-box mdf-icon-zap">
                    <Zap size={22} color="#ffb300" />
                  </div>
                  <div className="mdf-cap-info">
                    <span className="mdf-cap-num">03</span>
                    <h3 className="mdf-cap-title">Conversion & High-AOV Funnels</h3>
                    <p className="mdf-cap-sub">Shopify Optimization, Multi-Tier Bundles & CRO</p>
                  </div>
                </div>
                <div className="mdf-cap-arrow-btn">
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
      <section className="mdf-trusted-brands-section">
        <div className="container">
          <div className="mdf-trusted-heading-row">
            <span className="mdf-trusted-line" />
            <h2 className="mdf-trusted-title">Trusted by 100+ scaling eCommerce brands</h2>
            <span className="mdf-trusted-line" />
          </div>

          {/* Row 1: Scrolling Left */}
          <div className="mdf-logos-marquee-wrapper">
            <div className="mdf-logos-track-left">
              <div className="mdf-logos-group">
                {row1Logos.map((logo, idx) => (
                  <div key={`r1-a-${idx}`} className="mdf-logo-item">
                    <img src={logo} alt={`Client logo ${idx + 1}`} className="mdf-logo-img" loading="eager" />
                  </div>
                ))}
              </div>
              <div className="mdf-logos-group" aria-hidden="true">
                {row1Logos.map((logo, idx) => (
                  <div key={`r1-b-${idx}`} className="mdf-logo-item">
                    <img src={logo} alt="" className="mdf-logo-img" loading="eager" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="mdf-logos-marquee-wrapper" style={{ marginTop: '16px' }}>
            <div className="mdf-logos-track-right">
              <div className="mdf-logos-group">
                {row2Logos.map((logo, idx) => (
                  <div key={`r2-a-${idx}`} className="mdf-logo-item">
                    <img src={logo} alt={`Client logo ${idx + 11}`} className="mdf-logo-img" loading="eager" />
                  </div>
                ))}
              </div>
              <div className="mdf-logos-group" aria-hidden="true">
                {row2Logos.map((logo, idx) => (
                  <div key={`r2-b-${idx}`} className="mdf-logo-item">
                    <img src={logo} alt="" className="mdf-logo-img" loading="eager" />
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
