import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function SittingHeroBanner({ onOpenBooking }) {
  return (
    <div className="hero-sitting-stage">
      {/* 1. Upper City Stage (Skyscrapers + Giant Orange Letters + Seated Subject) */}
      <div className="hero-sitting-canvas">
        {/* City Skyline Background with upward perspective */}
        <div className="hero-sitting-city-bg"></div>

        {/* Ambient Warm Golden Vignette Overlay */}
        <div className="hero-sitting-vignette"></div>

        {/* Giant Bold Orange Typography behind Gaurav */}
        <div className="hero-sitting-giant-letters" aria-hidden="true">
          GAURAV
        </div>

        {/* Gaurav Cutout Sitting On The Horizon Ledge */}
        <div className="hero-sitting-subject-wrapper">
          <img
            src="/assets/gaurav_sitting_cutout.png"
            alt="Gaurav Kapoor"
            className="hero-sitting-cutout-img"
          />
        </div>

        {/* Crisp Overlay Headline Across Subject */}
        <div className="hero-sitting-overlay-title">
          FROM YOUR FIRST SALE TO 9 FIGURES.
        </div>
      </div>

      {/* 2. Shelf Border Ledge */}
      <div className="hero-sitting-shelf-bar"></div>

      {/* 3. Pure White Horizon Deck (Legs Hang Down Here) */}
      <div className="hero-sitting-white-deck">
        <div className="container hero-sitting-deck-inner">
          
          {/* Left Tagline & Services Pills (Plus Jakarta Sans Font) */}
          <div className="hero-sitting-copy-block">
            <h2 className="hero-sitting-tagline">
              We build the strategy, acquisition and conversion engine<br />
              behind eCommerce brands that are built to scale.
            </h2>
            <div className="hero-sitting-services-row">
              <span>Shopify</span>
              <span className="dot">•</span>
              <span>Creatives</span>
              <span className="dot">•</span>
              <span>Meta Ads</span>
              <span className="dot">•</span>
              <span>Google Ads</span>
              <span className="dot">•</span>
              <span>CRO</span>
              <span className="dot">•</span>
              <span>Scaling</span>
            </div>
          </div>

          {/* Right Glowing Orange Pill CTA */}
          <div className="hero-sitting-cta-box">
            <button className="hero-sitting-orange-btn" onClick={onOpenBooking}>
              <span>SCALE MY BRAND</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
