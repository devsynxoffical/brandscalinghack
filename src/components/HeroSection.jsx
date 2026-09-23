import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection({ onOpenBooking, onNavigate }) {
  return (
    <section className="ss1-hero-stage">
      {/* 1. Upper City Stage (Skyscrapers + Giant Orange Letters + Seated Cutout) */}
      <div className="ss1-upper-canvas">
        {/* City Skyline Background */}
        <div className="ss1-city-bg"></div>

        {/* Ambient Warm Vignette */}
        <div className="ss1-vignette-overlay"></div>

        {/* Giant Orange 3D Lettering (Screenshot 1: "NADIA" -> "GAURAV") */}
        <div className="ss1-giant-orange-text" aria-hidden="true">
          GAURAV
        </div>

        {/* Transparent Subject Cutout Seated in Center */}
        <div className="ss1-subject-wrapper">
          <img
            src="/assets/gaurav_cutout.png"
            alt="Gaurav Kapoor"
            className="ss1-cutout-img"
          />
        </div>

        {/* Overlaid Headline Across Subject (Screenshot 1: "EXECUTIVE COACH NEW YORK NY") */}
        <div className="ss1-center-overlay-title">
          FROM YOUR FIRST SALE TO 9 FIGURES.
        </div>
      </div>

      {/* 2. Dark Brown Ledge Shelf Bar (Screenshot 1 Dividing Shelf) */}
      <div className="ss1-shelf-ledge"></div>

      {/* 3. Pure White Horizon Deck (Screenshot 1 Lower Shelf) */}
      <div className="ss1-lower-white-deck">
        <div className="container ss1-deck-container">
          {/* Left Serif Tagline & Services Sub-line */}
          <div>
            <div className="ss1-serif-tagline">
              We build the strategy, acquisition and conversion engine<br />
              behind eCommerce brands that are built to scale.
            </div>
            <div className="ss1-services-pills">
              <span>Shopify</span>
              <span>•</span>
              <span>Creatives</span>
              <span>•</span>
              <span>Meta Ads</span>
              <span>•</span>
              <span>Google Ads</span>
              <span>•</span>
              <span>CRO</span>
              <span>•</span>
              <span>Scaling</span>
            </div>
          </div>

          {/* Right Orange Pill Button (Exact User CTA: [SCALE MY BRAND]) */}
          <div className="ss1-cta-wrapper">
            <button className="ss1-orange-pill-btn" onClick={onOpenBooking}>
              SCALE MY BRAND
            </button>
          </div>
        </div>
      </div>

      {/* 4. Brand Logos Infinite Scroller */}
      <div className="hero-logos-scroller-wrap">
        <div className="hero-logos-track">
          {[...brandLogos, ...brandLogos].map((logo, idx) => (
            <div key={idx} className="hero-logo-item">
              <img src={logo} alt={`Brand Partner ${idx + 1}`} className="hero-logo-img" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const brandLogos = [
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
