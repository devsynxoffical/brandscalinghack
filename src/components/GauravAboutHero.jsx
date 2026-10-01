import React from 'react';
import { Flame, ArrowRight } from 'lucide-react';

export default function GauravAboutHero({ onOpenBooking, onNavigate }) {
  return (
    <section className="gaurav-ref-hero-stage">
      {/* Dark Luxury Ambient Background */}
      <div className="gaurav-ref-bg" aria-hidden="true" />
      <div className="gaurav-ref-glow-orb-left" aria-hidden="true" />
      <div className="gaurav-ref-glow-orb-right" aria-hidden="true" />

      {/* 1. TOP NUMBERS / METRICS ROW (Cleanly below Navbar with dedicated spacing) */}
      <div className="gaurav-ref-top-numbers-bar">
        <div className="gaurav-ref-num-group group-left">
          <span className="num-pill"><b>12+</b> YEARS EXP</span>
          <span className="num-dot">•</span>
          <span className="num-pill"><b>$50M+</b> AD SPEND</span>
          <span className="num-dot">•</span>
          <span className="num-pill"><b>30+</b> NICHES</span>
        </div>

        <div className="gaurav-ref-num-group group-right">
          <span className="num-pill"><b>100+</b> BRANDS</span>
          <span className="num-dot">•</span>
          <span className="num-pill"><b>8 & 9</b> FIGURES</span>
          <span className="num-dot">•</span>
          <span className="num-pill"><b>4.8x</b> AVG ROAS</span>
        </div>
      </div>

      {/* 2. MAIN CENTER 3D COMPOSITION (Giant Letters + Gaurav Cutout) */}
      <div className="gaurav-ref-center-stage">
        
        {/* Giant Typography in Background Layer */}
        <div className="gaurav-ref-giant-name-wrap" aria-hidden="true">
          <span className="gaurav-ref-giant-letters">GAURAV</span>
          <span className="gaurav-ref-trademark">®</span>
        </div>

        {/* Center Foreground Cutout */}
        <div className="gaurav-ref-person-center">
          <picture>
            <source srcSet="/assets/gaurav_cutout_real.webp" type="image/webp" />
            <img
              src="/assets/gaurav_cutout_real.png"
              alt="Gaurav Kapoor - Founder"
              className="gaurav-ref-person-img"
              loading="eager"
            />
          </picture>
        </div>

        {/* Left Floating Cards (50M+ Spent, 12+ Years) */}
        <div className="gaurav-ref-float-left">
          <div className="gaurav-ref-metric-card card-top">
            <div className="card-icon-tag">
              <Flame size={18} color="#ff5722" />
            </div>
            <div className="card-content">
              <div className="card-big-num">50M+</div>
              <div className="card-sub-label">Spent In Meta Ads</div>
            </div>
          </div>

          <div className="gaurav-ref-metric-card card-bottom">
            <div className="card-content-only">
              <div className="card-big-num num-accent">12<span className="plus">+</span></div>
              <div className="card-sub-label">Years of experience</div>
            </div>
          </div>
        </div>

        {/* Right Floating Services Pill Badge */}
        <div className="gaurav-ref-float-right">
          <div className="gaurav-ref-services-pill-box">
            <ul className="pill-list">
              <li><span className="pill-dot" />Leads</li>
              <li><span className="pill-dot" />Funnels</li>
              <li><span className="pill-dot" />Ads</li>
              <li><span className="pill-dot" />Creative</li>
              <li><span className="pill-dot" />Scale</li>
            </ul>
          </div>
        </div>

      </div>

      {/* 3. BOTTOM OVERLAID HEADLINE & ACTIONS */}
      <div className="gaurav-ref-bottom-overlay">
        <div className="headline-scrim">
          <h1 className="gaurav-ref-bottom-headline">
            We Build What Businesses Need To Grow.
          </h1>

          <div className="gaurav-ref-btn-row">
            <button
              className="gaurav-ref-btn-flame"
              onClick={onOpenBooking}
            >
              <span>Find My Solution</span>
              <ArrowRight size={16} />
            </button>

            <button
              className="gaurav-ref-btn-dark"
              onClick={() => onNavigate ? onNavigate('case-studies') : onOpenBooking()}
            >
              <span>View Projects</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4. BOTTOM MICRO COPY STRIP */}
      <div className="gaurav-ref-footer-strip container">
        <div className="footer-strip-left">
          Growth Systems. That’s Brand Scaling Hacks.
        </div>
        <div className="footer-strip-right">
          Brand Scaling Hacks is the company behind a growing ecosystem of brands built to help ambitious businesses solve their biggest growth challenges.
        </div>
      </div>

    </section>
  );
}
