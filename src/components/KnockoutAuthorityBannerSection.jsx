import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function KnockoutAuthorityBannerSection({ onOpenBooking }) {
  return (
    <section className="knockout-stage-section">
      <div className="container">
        {/* Rounded Poster Card */}
        <div className="knockout-card">
          {/* Faded Backdrop Photo + Black-to-Gold Gradient Wash */}
          <div className="knockout-card-backdrop" aria-hidden="true"></div>
          <div className="knockout-card-wash" aria-hidden="true"></div>
          <div className="knockout-card-vignette" aria-hidden="true"></div>

          {/* Top-Left Brand Wordmark */}
          <div className="knockout-brand-mark">
            <span className="knockout-brand-mark-gold">BRAND SCALING</span>
            <span className="knockout-brand-mark-white">HACKS</span>
          </div>

          {/* Center Stage: Giant Glowing Wordmark with Gaurav in Front */}
          <div className="knockout-stage">
            <div className="knockout-word" aria-hidden="true">
              SCALE
            </div>
            <div className="knockout-subject-glow" aria-hidden="true"></div>
            <img
              src="/assets/gaurav_cutout_real.webp"
              alt="Gaurav Kapoor - Brand Scaling Hacks"
              className="knockout-subject"
            />
          </div>

          {/* Bottom Tagline & Gold Pill Button */}
          <div className="knockout-card-bottom">
            <p className="knockout-tagline">
              A PROVEN DIRECT-RESPONSE GROWTH ARCHITECTURE FOR 8 &amp; 9-FIGURE ECOMMERCE BRANDS.
            </p>
            <button
              className="knockout-gold-btn"
              onClick={onOpenBooking}
              aria-label="Start Your Scaling Journey"
            >
              <span>START YOUR SCALING JOURNEY</span>
              <ArrowRight size={18} className="knockout-btn-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
