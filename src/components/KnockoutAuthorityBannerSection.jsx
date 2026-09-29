import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function KnockoutAuthorityBannerSection({ onOpenBooking }) {
  return (
    <section className="knockout-stage-section">
      <div className="container">
        {/* Rounded Poster Card: generated boxing-style artwork with live copy on the clean bottom band */}
        <div className="knockout-card">
          <img
            src="/assets/bsh_scale_boxing_poster.webp"
            alt="Gaurav Kapoor throwing a punch in front of the word SCALE"
            className="knockout-poster"
            width="1600"
            height="1063"
            loading="lazy"
            decoding="async"
          />
          <div className="knockout-card-shade" aria-hidden="true"></div>

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
