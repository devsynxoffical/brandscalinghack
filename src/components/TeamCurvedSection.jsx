import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function TeamCurvedSection({ onOpenBooking }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Cards array: 2.png in the DEAD CENTER, flanked symmetrically by other team members
  const teamMembers = [
    {
      id: 'member-4',
      imgSrc: '/teamm/4.png',
      bgColor: 'linear-gradient(180deg, #c2410c 0%, #7c2d12 100%)',
      side: 'left-outer',
      transformDefault: 'rotateY(24deg) rotateZ(-3.5deg) translateY(18px) scale(0.91)',
    },
    {
      id: 'member-3',
      imgSrc: '/teamm/3.png',
      bgColor: 'linear-gradient(180deg, #1e3a8a 0%, #0f172a 100%)',
      side: 'left-inner',
      transformDefault: 'rotateY(12deg) rotateZ(-1.5deg) translateY(8px) scale(0.97)',
    },
    {
      id: 'member-2',
      imgSrc: '/teamm/2.png',
      bgColor: 'linear-gradient(180deg, #b45309 0%, #78350f 100%)',
      side: 'center',
      isCenter: true,
      transformDefault: 'rotateY(0deg) rotateZ(0deg) translateY(0px) scale(1.06)',
    },
    {
      id: 'member-1',
      imgSrc: '/teamm/1.png',
      bgColor: 'linear-gradient(180deg, #ea580c 0%, #9a3412 100%)',
      side: 'right-inner',
      transformDefault: 'rotateY(-12deg) rotateZ(1.5deg) translateY(8px) scale(0.97)',
    },
    {
      id: 'member-5',
      imgSrc: '/teamm/5.png',
      bgColor: 'linear-gradient(180deg, #831843 0%, #500724 100%)',
      side: 'right-outer',
      transformDefault: 'rotateY(-24deg) rotateZ(3.5deg) translateY(18px) scale(0.91)',
    }
  ];

  return (
    <section className="team-curved-section" id="team-experts">
      {/* Background ambient lighting */}
      <div className="team-curved-glow-left" aria-hidden="true" />
      <div className="team-curved-glow-right" aria-hidden="true" />

      <div className="container relative z-10">
        {/* Header Block */}
        <div className="team-curved-header">
          <div className="team-curved-badge-wrap">
            <span className="team-curved-badge">
              <Sparkles size={14} />
              <span>THE PEOPLE BEHIND THE WORK</span>
            </span>
          </div>

          <h2 className="team-curved-title">
            Work Directly With Top eCommerce Growth Specialists
          </h2>

          <p className="team-curved-subtitle">
            No junior account managers or guesswork. Get a dedicated squad of senior media buyers, direct-response creative strategists, and CRO engineers scaling your brand.
          </p>

          <div style={{ marginTop: '22px', display: 'flex', justifyContent: 'center' }}>
            <button
              onClick={onOpenBooking}
              className="team-curved-cta-pill"
            >
              <span>FREE Diagnostic Strategy Call</span>
              <div className="team-pill-arrow">
                <ArrowRight size={15} />
              </div>
            </button>
          </div>
        </div>

        {/* 3D Curved Perspective Stage */}
        <div className="team-curved-stage-container">
          <div className="team-curved-fan-row">
            {teamMembers.map((member, idx) => {
              const isHovered = hoveredIndex === idx;
              return (
                <div
                  key={member.id}
                  className={`team-curved-card-wrap ${member.isCenter ? 'is-center' : ''} ${isHovered ? 'is-active-hover' : ''}`}
                  style={{
                    transform: isHovered
                      ? 'translateY(-20px) scale(1.12) rotateY(0deg) rotateZ(0deg)'
                      : member.transformDefault,
                    zIndex: isHovered ? 30 : member.isCenter ? 15 : idx === 1 || idx === 3 ? 10 : 5,
                  }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={onOpenBooking}
                >
                  <div
                    className="team-curved-card-inner"
                    style={{ background: member.bgColor }}
                  >
                    {/* Background subtle light radial highlight */}
                    <div className="team-card-inner-glow" />

                    {/* Member Cutout / Photo (Clean full-bleed without text) */}
                    <div className="team-card-img-wrap">
                      <img
                        src={member.imgSrc}
                        alt="Brand Scaling Specialist"
                        className="team-card-photo"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Social Proof Micro Note */}
        <div className="team-curved-footer-note">
          <span className="team-footer-dot">•</span>
          <span>12+ Years Experience</span>
          <span className="team-footer-dot">•</span>
          <span>$50M+ In Meta Ad Spend</span>
          <span className="team-footer-dot">•</span>
          <span>Direct Access To Senior Growth Directors</span>
          <span className="team-footer-dot">•</span>
        </div>
      </div>
    </section>
  );
}
