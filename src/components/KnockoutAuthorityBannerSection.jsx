import React from 'react';
import { ArrowRight, Flame, TrendingUp, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export default function KnockoutAuthorityBannerSection({ onOpenBooking }) {
  return (
    <section className="home-horizon-sitting-stage" id="scaling-journey">
      
      {/* ========================================================================= */}
      {/* 1. UPPER 3D HORIZON STAGE (City Skyline + 3D SCALE + Center Seated Gaurav) */}
      {/* ========================================================================= */}
      <div className="home-horizon-canvas">
        
        {/* City Skyline Background */}
        <div className="home-horizon-city-bg" aria-hidden="true" />

        {/* Cinematic Atmospheric Lighting */}
        <div className="home-horizon-vignette" aria-hidden="true" />
        <div className="home-horizon-glow-center" aria-hidden="true" />

        {/* Top Eyebrow Headline */}
        <div className="home-horizon-top-header">
          <span className="home-horizon-header-tag">A PERFORMANCE PARTNER FOR 7-8 FIGURE DTC BRANDS</span>
          <h2 className="home-horizon-header-title">FROM YOUR FIRST SALE TO 9 FIGURES.</h2>
        </div>

        {/* Giant Bold 3D Letters behind Gaurav */}
        <div className="home-horizon-giant-letters" aria-hidden="true">
          SCALE
        </div>

        {/* Floating 3D Metric Badges */}
        <div className="home-horizon-float-badge float-badge-left">
          <div className="badge-icon-wrap"><Flame size={16} color="#ff5722" /></div>
          <div>
            <div className="badge-value">12+ Years</div>
            <div className="badge-label">DTC Growth Authority</div>
          </div>
        </div>

        <div className="home-horizon-float-badge float-badge-right">
          <div className="badge-icon-wrap"><TrendingUp size={16} color="#22c55e" /></div>
          <div>
            <div className="badge-value">$50M+ Scaled</div>
            <div className="badge-label">Paid Media Spend</div>
          </div>
        </div>

        {/* Gaurav Cutout Sitting Naturally On The Horizon Ledge */}
        <div className="home-horizon-subject-wrapper">
          <picture>
            <source srcSet="/assets/gaurav_sitting_cutout.webp" type="image/webp" />
            <img
              src="/assets/gaurav_sitting_cutout.png"
              alt="Gaurav Kapoor - DTC Performance Growth Architect"
              className="home-horizon-cutout-img"
              loading="eager"
            />
          </picture>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. Sleek Glowing High-Tech Horizon Ledge Bar */}
      {/* ========================================================================= */}
      <div className="home-horizon-shelf-bar" aria-hidden="true">
        <div className="home-horizon-shelf-glow" />
      </div>

      {/* ========================================================================= */}
      {/* 3. Pure Light Horizon Deck (3-Zone Balanced Architecture) */}
      {/* ========================================================================= */}
      <div className="home-horizon-white-deck">
        {/* Soft Ground Contact Shadow for Shoes */}
        <div className="home-horizon-floor-shadow" aria-hidden="true" />

        <div className="container home-horizon-deck-grid">
          
          {/* Left Value & Growth Architecture Column */}
          <div className="home-horizon-left-col">
            <div className="home-horizon-status-pill">
              <span className="home-horizon-live-dot" />
              <span>PRIVATE GROWTH ARCHITECTURE</span>
            </div>

            <h3 className="home-horizon-tagline">
              We build the strategy, acquisition & conversion engine behind eCommerce brands that scale.
            </h3>

            <div className="home-horizon-services-pills">
              <span className="service-chip">Shopify</span>
              <span className="service-chip">Creatives</span>
              <span className="service-chip">Meta Ads</span>
              <span className="service-chip">Google Ads</span>
              <span className="service-chip">CRO</span>
              <span className="service-chip">Scaling</span>
            </div>
          </div>

          {/* Center Column: Dedicated Breathing Corridor for Gaurav's Seated Legs */}
          <div className="home-horizon-center-corridor" aria-hidden="true" />

          {/* Right Action & Scaling CTA Column */}
          <div className="home-horizon-right-col">
            <div className="home-horizon-cta-card">
              <div className="home-horizon-availability">
                <span className="availability-dot" />
                <span>Only 3 strategy sessions available this week</span>
              </div>

              <button
                className="home-horizon-orange-btn"
                onClick={onOpenBooking}
                aria-label="Start Your Scaling Journey"
              >
                <span>START YOUR SCALING JOURNEY</span>
                <ArrowRight size={18} className="btn-arrow-icon" />
              </button>

              <div className="home-horizon-trust-row">
                <div className="trust-item">
                  <CheckCircle2 size={13} color="#ea580c" />
                  <span>100+ Brands Scaled</span>
                </div>
                <div className="trust-item">
                  <ShieldCheck size={13} color="#ea580c" />
                  <span>Direct Founder Access</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
