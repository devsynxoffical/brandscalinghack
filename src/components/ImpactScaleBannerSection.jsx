import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ImpactScaleBannerSection({ onOpenBooking, onNavigate }) {
  return (
    <section className="impact-scale-banner-section">
      {/* Background Ambience & Lighting */}
      <div className="impact-gold-orb"></div>

      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        {/* Brand Kicker Header */}
        <div className="impact-brand-pill">
          <span>BRAND SCALING HACKS</span>
        </div>

        {/* 3D Typography + Cutout Integration Frame (Jabz Boxing Style) */}
        <div className="impact-typography-stage">
          {/* Giant 3D Text Behind */}
          <div className="impact-giant-text">
            SCALE
          </div>

          {/* Central Cutout Subject Punching / Breaking Through Letters */}
          <div className="impact-subject-cutout">
            <img src="/assets/gaurav_cutout.png" alt="Scaling Authority" className="impact-cutout-img" />
          </div>
        </div>

        {/* Tagline Below */}
        <p className="impact-tagline-text">
          AN ECOMMERCE-FIRST GROWTH ENGINE DESIGNED FOR 7, 8 & 9-FIGURE FOUNDERS.
        </p>

        {/* Gold Action Button */}
        <div style={{ marginTop: '28px' }}>
          <button className="btn-impact-gold" onClick={onOpenBooking}>
            <span>START YOUR STRONGER JOURNEY</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
