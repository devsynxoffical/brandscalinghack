import React from 'react';
import { ArrowRight, Search } from 'lucide-react';

export const coachesList = [
  {
    id: 't-1',
    name: 'Ali',
    role: 'Media Buying & Acquisition Lead',
    brand: 'Brand Scaling Hacks',
    scale: '$1.4M / mo',
    bg: '#ea580c', // Vibrant Tangerine Orange
    image: '/team/ali.webp',
    isCutout: true
  },
  {
    id: 't-2',
    name: 'Daniel Brooks',
    role: 'Creative Strategist & UGC Director',
    brand: 'Brand Scaling Hacks',
    scale: '€118k Month 1',
    bg: '#854d0e', // Warm Mocha / Bronze
    image: '/team/daniel-brooks.webp',
    isCutout: true
  },
  {
    id: 't-3',
    name: 'Ethan Carter',
    role: 'Conversion Rate Architect',
    brand: 'Brand Scaling Hacks',
    scale: '$688k Profit',
    bg: '#1d4ed8', // Deep Royal Blue
    image: '/team/ethan-carter.webp',
    isCutout: true
  },
  {
    id: 't-4',
    name: 'Frank Miller',
    role: 'Shopify Speed & Funnel Engineer',
    brand: 'Brand Scaling Hacks',
    scale: '$179k / mo',
    bg: '#831843', // Deep Crimson / Burgundy
    image: '/team/frank-miller.webp',
    isCutout: true
  },
  {
    id: 't-5',
    name: 'Gaurav Kapoor',
    role: 'Founder & Head of Growth',
    brand: 'Brand Scaling Hacks',
    scale: '$50M+ Ad Spend Managed',
    bg: '#d9921b', // Golden Amber (MAIN CENTER CARD)
    image: '/team/gaurav.webp',
    isCutout: true,
    isCenter: true
  },
  {
    id: 't-6',
    name: 'Jake Wilson',
    role: 'Meta Advantage+ Specialist',
    brand: 'Brand Scaling Hacks',
    scale: '$1.85M / mo',
    bg: '#c2410c', // Terracotta Fire
    image: '/team/jake-wilson.webp',
    isCutout: true
  },
  {
    id: 't-7',
    name: 'Ryan Cooper',
    role: 'Google Search & PMax Strategist',
    brand: 'Brand Scaling Hacks',
    scale: '€123,000 Surge',
    bg: '#4338ca', // Deep Indigo
    image: '/team/ryan-cooper.webp',
    isCutout: true
  },
  {
    id: 't-8',
    name: 'Taqi',
    role: 'Direct-Response Motion Designer',
    brand: 'Brand Scaling Hacks',
    scale: '$1.09M Scaled',
    bg: '#0f766e', // Emerald Teal
    image: '/team/taqi.webp',
    isCutout: true
  }
];

export default function ClientCoachesCarouselSection({ onOpenBooking, onNavigate }) {
  return (
    <section className="intro-coaches-section" id="coaches-mentors">
      {/* Subtle Warm Ambient Top Glow matching Intro.co */}
      <div className="intro-ambient-top-glow" />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
        {/* Intro.co Search Pill */}
        <div className="intro-search-bar">
          <span className="intro-search-placeholder">Search Expert</span>
          <Search size={16} className="intro-search-icon" />
        </div>

        {/* Headline (Intro.co exact style) */}
        <h2 className="intro-main-title">
          Book the top Business Coaches
        </h2>

        {/* Subtitle (Intro.co exact lowercase style) */}
        <p className="intro-sub-title">
          get personalized advice to grow your business
        </p>

        {/* CTA Button: FREE Trial Call with white circled right-arrow */}
        <div className="intro-cta-wrap">
          <button className="btn-intro-trial" onClick={onOpenBooking}>
            <span>FREE Trial Call</span>
            <div className="intro-arrow-circle">
              <ArrowRight size={13} color="#000000" strokeWidth={2.8} />
            </div>
          </button>
        </div>
      </div>

      {/* 3D Panoramic Curved Arc Carousel */}
      <div className="intro-arc-viewport">
        <div className="intro-arc-track">
          {coachesList.map((coach, idx) => {
            // Precise 3D arc transform angles matching Intro.co
            // Cards on the left rotate Y positive (facing inward right)
            // Cards on the right rotate Y negative (facing inward left)
            const transforms = [
              { rotateY: 26, rotateZ: -2.5, translateY: 14, scale: 0.95, zIndex: 1 },
              { rotateY: 19, rotateZ: -1.8, translateY: 4, scale: 0.98, zIndex: 2 },
              { rotateY: 11, rotateZ: -0.9, translateY: -4, scale: 0.99, zIndex: 3 },
              { rotateY: 4, rotateZ: -0.2, translateY: -9, scale: 1.0, zIndex: 4 },
              { rotateY: -4, rotateZ: 0.2, translateY: -9, scale: 1.0, zIndex: 4 },
              { rotateY: -11, rotateZ: 0.9, translateY: -4, scale: 0.99, zIndex: 3 },
              { rotateY: -19, rotateZ: 1.8, translateY: 4, scale: 0.98, zIndex: 2 },
              { rotateY: -26, rotateZ: 2.5, translateY: 14, scale: 0.95, zIndex: 1 }
            ];

            const t = transforms[idx] || { rotateY: 0, rotateZ: 0, translateY: 0, scale: 1, zIndex: 1 };

            return (
              <div
                key={coach.id}
                className={`intro-coach-card ${coach.isCenter ? 'intro-center-card' : ''}`}
                style={{
                  backgroundColor: coach.bg,
                  '--card-bg': coach.bg,
                  '--card-ry': `${t.rotateY}deg`,
                  '--card-rz': `${t.rotateZ}deg`,
                  '--card-ty': `${t.translateY}px`,
                  '--card-scale': t.scale,
                  zIndex: t.zIndex
                }}
                onClick={onOpenBooking}
              >
                {/* Subject Image Wrapper */}
                <div className={`coach-img-box ${coach.isCutout ? 'coach-img-cutout' : ''}`}>
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className={`coach-photo ${coach.isCutout ? 'coach-cutout-photo' : ''}`}
                    loading="lazy"
                  />
                </div>

                {/* Subtle Hover Reveal Tooltip (Minimalist & Clean) */}
                <div className="coach-hover-info">
                  <div className="coach-hover-name">{coach.name}</div>
                  <div className="coach-hover-role">{coach.role}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
