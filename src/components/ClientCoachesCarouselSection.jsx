import React from 'react';
import { ArrowRight } from 'lucide-react';

export const coachesList = [
  {
    id: 't-1',
    name: 'Coach 1',
    bg: '#d95a1e' // Vibrant Warm Terracotta Orange (Card 1)
  },
  {
    id: 't-2',
    name: 'Coach 2',
    bg: '#7d6148' // Warm Camel Taupe Tan (Card 2)
  },
  {
    id: 't-3',
    name: 'Coach 3',
    bg: '#38485e' // Slate Indigo Blue (Card 3)
  },
  {
    id: 't-4',
    name: 'Coach 4',
    bg: '#3b4348' // Dark Slate Charcoal (Card 4)
  },
  {
    id: 't-5',
    name: 'Coach 5',
    bg: '#df981c' // Golden Mustard Ochre (Card 5)
  },
  {
    id: 't-6',
    name: 'Coach 6',
    bg: '#521832' // Deep Wine Burgundy (Card 6)
  },
  {
    id: 't-7',
    name: 'Coach 7',
    bg: '#9c3e2e' // Terracotta Rust Red (Card 7)
  },
  {
    id: 't-8',
    name: 'Coach 8',
    bg: '#4f182c' // Dark Plum Burgundy (Card 8)
  }
];

export default function ClientCoachesCarouselSection({ onOpenBooking }) {
  return (
    <section className="intro-coaches-section" id="coaches-mentors">
      {/* Subtle Warm Ambient Top Glows */}
      <div className="intro-ambient-left-glow" />
      <div className="intro-ambient-right-glow" />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10, marginTop: '10px' }}>
        {/* Headline */}
        <h2 className="intro-main-title">
          Book the top Business Coaches
        </h2>

        {/* Subtitle */}
        <p className="intro-sub-title">
          get personalized advice to grow<br />your business
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
            // Exact 8-card 3D arc transform angles matching the reference
            const transforms = [
              { rotateY: 30, rotateZ: -2.8, translateY: 18, scale: 0.95, zIndex: 1 },
              { rotateY: 20, rotateZ: -1.8, translateY: 8, scale: 0.98, zIndex: 2 },
              { rotateY: 10, rotateZ: -0.8, translateY: 2, scale: 1.0, zIndex: 3 },
              { rotateY: 3, rotateZ: -0.2, translateY: -2, scale: 1.02, zIndex: 4 },
              { rotateY: -3, rotateZ: 0.2, translateY: -2, scale: 1.02, zIndex: 4 },
              { rotateY: -10, rotateZ: 0.8, translateY: 2, scale: 1.0, zIndex: 3 },
              { rotateY: -20, rotateZ: 1.8, translateY: 8, scale: 0.98, zIndex: 2 },
              { rotateY: -30, rotateZ: 2.8, translateY: 18, scale: 0.95, zIndex: 1 }
            ];

            const t = transforms[idx] || { rotateY: 0, rotateZ: 0, translateY: 0, scale: 1, zIndex: 1 };

            return (
              <div
                key={coach.id}
                className="intro-coach-card"
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
                {/* Colorful Placeholder Card Surface */}
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: `linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 40%, rgba(0,0,0,0.2) 100%)`,
                    borderRadius: '22px'
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
