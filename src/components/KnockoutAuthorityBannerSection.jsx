import React, { useState, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function KnockoutAuthorityBannerSection({ onOpenBooking }) {
  const sectionRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50, tiltX: 0, tiltY: 0, active: false });

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Tilt calculations (-15 to 15 degrees)
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    const tiltX = normX * 16;
    const tiltY = normY * -16;

    setMousePos({ x, y, tiltX, tiltY, active: true });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 50, y: 50, tiltX: 0, tiltY: 0, active: false });
  };

  return (
    <section
      ref={sectionRef}
      className="knockout-stage-section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. Dynamic Cursor Spotlight & Interactive Golden Flare */}
      <div
        className="knockout-cursor-spotlight"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 185, 45, 0.35) 0%, rgba(255, 87, 34, 0.15) 35%, transparent 70%)`
        }}
        aria-hidden="true"
      ></div>

      {/* 2. Ambient Studio Architecture & Backlight */}
      <div className="knockout-ambient-glow" aria-hidden="true"></div>
      <div className="knockout-sunburst-rays" aria-hidden="true"></div>
      <div className="knockout-particles-overlay" aria-hidden="true"></div>

      {/* 3. Floating Gold Ember Sparks */}
      <div className="knockout-sparks" aria-hidden="true">
        <span className="spark spark-1"></span>
        <span className="spark spark-2"></span>
        <span className="spark spark-3"></span>
        <span className="spark spark-4"></span>
        <span className="spark spark-5"></span>
        <span className="spark spark-6"></span>
      </div>

      <div className="container knockout-container">
        {/* Top-Left Brand Luxury Badge */}
        <div className="knockout-top-row">
          <div className="knockout-brand-badge">
            <span className="badge-text-main">BRAND SCALING</span>
            <span className="badge-divider">/</span>
            <span className="badge-text-gold">HACKS</span>
          </div>
        </div>

        {/* Center 3D Stage with Interactive Parallax */}
        <div
          className="knockout-visual-stage"
          style={{
            transform: mousePos.active
              ? `perspective(1200px) rotateY(${mousePos.tiltX * 0.6}deg) rotateX(${mousePos.tiltY * 0.6}deg)`
              : 'perspective(1200px) rotateY(0deg) rotateX(0deg)',
            transition: mousePos.active ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
          }}
        >
          {/* Giant Bold 3D Block Typography */}
          <div
            className="knockout-giant-typography"
            style={{
              transform: mousePos.active
                ? `translateZ(10px) translateX(${mousePos.tiltX * -0.4}px)`
                : 'translateZ(10px)',
              transition: mousePos.active ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
            }}
            aria-hidden="true"
          >
            <span className="letter letter-s">S</span>
            <span className="letter letter-c">C</span>
            <span className="letter letter-a">A</span>
            <span className="letter letter-l">L</span>
            <span className="letter letter-e">E</span>
          </div>

          {/* Golden Radiant Aura & Spotlight behind Gaurav */}
          <div
            className="knockout-subject-aura"
            style={{
              transform: `translate(-50%, -50%) translate(${mousePos.tiltX * 0.5}px, ${mousePos.tiltY * 0.5}px)`
            }}
            aria-hidden="true"
          ></div>

          {/* Gaurav Real Cutout (Layered Forward with 3D Depth Parallax) */}
          <div
            className="knockout-subject-wrapper"
            style={{
              transform: mousePos.active
                ? `translate(-50%, -46%) translateZ(60px) translate(${mousePos.tiltX * 0.8}px, ${mousePos.tiltY * -0.8}px) scale(1.02)`
                : 'translate(-50%, -46%) translateZ(60px) scale(1)',
              transition: mousePos.active ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
            }}
          >
            <img
              src="/assets/gaurav_cutout_real.png"
              alt="Gaurav Kapoor - Brand Scaling Hacks"
              className="knockout-subject-img"
            />
          </div>
        </div>

        {/* Bottom Tagline & Gold Action Button */}
        <div className="knockout-bottom-content">
          <p className="knockout-subtitle-text">
            A PROVEN DIRECT-RESPONSE GROWTH ARCHITECTURE FOR 8 &amp; 9-FIGURE ECOMMERCE BRANDS.
          </p>

          <div className="knockout-cta-wrapper">
            <button
              className="knockout-gold-btn"
              onClick={onOpenBooking}
              aria-label="Start Your Scaling Journey"
            >
              <span>START YOUR SCALING JOURNEY</span>
              <ArrowRight size={20} className="knockout-btn-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
