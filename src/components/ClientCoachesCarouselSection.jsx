import React from 'react';
import { ArrowRight, Search } from 'lucide-react';

export const coachesList = [
  {
    id: 't-gaurav',
    name: 'Gaurav Kapoor',
    role: 'Founder & Head of Growth',
    brand: 'Brand Scaling Hacks',
    scale: '$50M+ Ad Spend Managed',
    bg: '#d97706', // Golden Amber
    image: '/team/gaurav.jpeg',
    isCutout: true,
    isCenter: true
  },
  {
    id: 't-rahul',
    name: 'Rahul',
    role: 'Head of Client Success & Scaling',
    brand: 'Brand Scaling Hacks',
    scale: '$12M+ Portfolio Scaled',
    bg: '#f59e0b', // Amber
    image: '/team/rahul.jpeg',
    isCutout: true
  },
  {
    id: 't-taqi',
    name: 'Taqi',
    role: 'Direct-Response Creative & Motion Lead',
    brand: 'Brand Scaling Hacks',
    scale: '$1.09M Scaled',
    bg: '#0f766e', // Emerald Teal
    image: '/team/taqi.webp',
    isCutout: true
  },
  {
    id: 't-ali',
    name: 'Ali',
    role: 'Media Buying & Acquisition Lead',
    brand: 'Brand Scaling Hacks',
    scale: '$1.4M / mo',
    bg: '#ea580c', // Tangerine Orange
    image: '/team/ali.webp',
    isCutout: true
  },
  {
    id: 't-ethan',
    name: 'Ethan Carter',
    role: 'Conversion Rate Architect',
    brand: 'Brand Scaling Hacks',
    scale: '$688k Profit',
    bg: '#1d4ed8', // Deep Royal Blue
    image: '/team/ethan-carter.webp',
    isCutout: true
  },
  {
    id: 't-frank',
    name: 'Frank Miller',
    role: 'Shopify Speed & Funnel Engineer',
    brand: 'Brand Scaling Hacks',
    scale: '$179k / mo',
    bg: '#831843', // Deep Crimson / Burgundy
    image: '/team/frank-miller.webp',
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
              { rotateY: 18, rotateZ: -1.6, translateY: 6, scale: 0.96, zIndex: 1 },
              { rotateY: 10, rotateZ: -0.9, translateY: -2, scale: 0.99, zIndex: 2 },
              { rotateY: 3, rotateZ: -0.2, translateY: -8, scale: 1.02, zIndex: 3 },
              { rotateY: -3, rotateZ: 0.2, translateY: -8, scale: 1.02, zIndex: 3 },
              { rotateY: -10, rotateZ: 0.9, translateY: -2, scale: 0.99, zIndex: 2 },
              { rotateY: -18, rotateZ: 1.6, translateY: 6, scale: 0.96, zIndex: 1 }
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
