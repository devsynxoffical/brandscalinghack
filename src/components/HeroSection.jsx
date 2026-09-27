import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection({ onOpenBooking, onNavigate }) {
  return (
    <section className="hero-home-stage">
      {/* 1. Top Brand Partners Infinite Scroller Strip */}
      <div className="hero-home-top-logos">
        <div className="container hero-home-logos-container">
          <div className="hero-home-logos-track">
            {[...brandLogos, ...brandLogos].map((logo, idx) => (
              <div key={idx} className="hero-home-logo-item">
                <img src={logo} alt={`Brand Partner ${idx + 1}`} className="hero-home-logo-img" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Main Crimson & Orange Studio Lighting Canvas (Blank Red) */}
      <div className="hero-home-main-canvas" style={{ minHeight: '380px' }}>
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
