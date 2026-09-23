import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, DollarSign, Award, Target } from 'lucide-react';

export default function ImpactScaleBannerSection({ onOpenBooking, onNavigate }) {
  const highlights = [
    '12+ years building and scaling businesses online.',
    '$50M+ in online advertising spend.',
    '30+ niches and markets.',
    'Experience working with 8 & 9-figure eCommerce brands.'
  ];

  return (
    <section className="impact-scale-banner-section">
      {/* Background Ambience & Lighting */}
      <div className="impact-gold-orb"></div>

      <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1180px' }}>
        {/* Section Header Tag */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div className="impact-brand-pill">
            <span>EXPERIENCE + FINAL CTA</span>
          </div>
        </div>

        {/* Giant Stat Headings */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 className="impact-mega-stat-heading">
            $50M+ IN AD SPEND.
          </h2>
          <h2 className="impact-mega-stat-sub">
            12+ YEARS OF ECOMMERCE EXPERIENCE.
          </h2>
        </div>

        {/* Center Authority Feature Card */}
        <div className="impact-authority-card">
          <div className="impact-card-grid">
            {/* Left: Gaurav Real Cutout Image */}
            <div className="impact-founder-visual">
              <div className="impact-founder-glow"></div>
              <img
                src="/assets/gaurav_cutout.png"
                alt="Gaurav Kapoor"
                className="impact-founder-img"
              />
            </div>

            {/* Right: Bio & Proven Pillars */}
            <div className="impact-founder-info">
              <div className="impact-founder-badge">FOUNDER & LEAD STRATEGIST</div>
              <h3 className="impact-founder-name">GAURAV KAPOOR</h3>
              <p className="impact-founder-title">eCommerce & Customer Acquisition Expert</p>

              {/* 4 Bullet Points */}
              <div className="impact-pillars-list">
                {highlights.map((item, idx) => (
                  <div key={idx} className="impact-pillar-item">
                    <CheckCircle2 size={20} className="impact-check-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Body Statement */}
              <p className="impact-body-copy">
                We've spent years testing what actually drives eCommerce growth across products, markets, offers, creatives and acquisition channels.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Final CTA Callout */}
        <div className="impact-final-cta-box">
          <h3 className="impact-final-cta-heading">
            NOW LET'S PUT THAT EXPERIENCE TO WORK ON YOUR BRAND.
          </h3>
          <div style={{ marginTop: '28px' }}>
            <button className="btn-impact-gold" onClick={onOpenBooking}>
              <span>SCALE MY BRAND NOW</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
