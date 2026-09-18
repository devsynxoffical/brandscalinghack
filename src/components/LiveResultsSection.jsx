import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { liveResultsProof } from '../data/mockData';

export const ugcCreativesList = liveResultsProof.map((item, idx) => {
  const layouts = [
    { width: '240px', height: '350px', offsetY: '-38px', rotate: '-0.8deg', zIndex: 3 },
    { width: '210px', height: '290px', offsetY: '24px', rotate: '1.2deg', zIndex: 2 },
    { width: '265px', height: '395px', offsetY: '-62px', rotate: '-0.5deg', zIndex: 5, isHero: true },
    { width: '220px', height: '295px', offsetY: '28px', rotate: '1.5deg', zIndex: 2 },
    { width: '235px', height: '345px', offsetY: '-30px', rotate: '-1deg', zIndex: 4 },
    { width: '220px', height: '305px', offsetY: '18px', rotate: '0.8deg', zIndex: 3 },
    { width: '245px', height: '360px', offsetY: '-45px', rotate: '-1.2deg', zIndex: 4 },
    { width: '225px', height: '310px', offsetY: '22px', rotate: '1deg', zIndex: 2 }
  ];
  const layout = layouts[idx % layouts.length];
  return {
    ...item,
    ...layout
  };
});

export default function LiveResultsSection({ onOpenBooking, onNavigate, onOpenInstagramModal }) {
  return (
    <section className="results-section-fire">
      <div className="results-glow-orb"></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Screenshot 3 Styled Bold Headline */}
        <h2 className="results-title-bold" style={{ marginTop: '10px' }}>
          We Craft <span style={{ fontStyle: 'italic', fontWeight: 600 }}>World Class</span> <span className="results-title-highlight">Performance Creatives</span> To Hit Your Revenue Goals.
        </h2>

        {/* Minimal Subtext matching reference */}
        <p className="results-subtext">
          We help eCommerce brands scale through a repeatable creative system, not random ads. We offer <strong>full service ad creative from research and ideation to execution</strong> and delivery.
        </p>

        {/* Action Buttons matching screenshot exactly */}
        <div className="results-cta-group" style={{ marginBottom: '40px' }}>
          <button className="btn-ss3-orange" onClick={onOpenBooking}>
            <span>Book A Discovery Call</span>
            <ArrowRight size={18} />
          </button>

          <button className="btn-ss3-transparent" onClick={() => onNavigate('viral-creatives')}>
            <span>See How We Work</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Screenshot 3 Infinite Auto-Scrolling / Interactive Marquee Track */}
      <div className="ss3-reels-full-strip">
        <div className="ss3-reels-marquee-container">
          {/* Track 1 */}
          <div className="ss3-reels-scroll-track">
            {ugcCreativesList.map((item, idx) => (
              <div
                key={`track1-${item.id}-${idx}`}
                onClick={() => onOpenInstagramModal ? onOpenInstagramModal(item) : null}
                className={`ss3-reel-card-clean ${item.isHero ? 'hero-creative-card' : ''}`}
                style={{
                  width: item.width || '220px',
                  height: item.height || '320px',
                  transform: `translateY(${item.offsetY || '0px'}) rotate(${item.rotate || '0deg'})`,
                  zIndex: item.zIndex || 2
                }}
                title={`Click to preview: ${item.hook}`}
              >
                <img src={item.image} alt={item.hook} className="ss3-clean-img" />
                
                {/* Play icon badge */}
                <div className="ss3-clean-play-badge">
                  <Play size={14} fill="#fff" />
                </div>

                {/* UGC On-Screen Hook Pill */}
                <div className="ss3-clean-hook-pill">
                  {item.hook}
                </div>

                {/* Bottom Subtle Overlay */}
                <div className="ss3-clean-footer-tag">
                  <span className="ss3-footer-rev">{item.revenue}</span>
                  <span className="ss3-footer-roas">{item.roas}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Track 2 (Seamless Infinite Duplicate) */}
          <div className="ss3-reels-scroll-track" aria-hidden="true">
            {ugcCreativesList.map((item, idx) => (
              <div
                key={`track2-${item.id}-${idx}`}
                onClick={() => onOpenInstagramModal ? onOpenInstagramModal(item) : null}
                className={`ss3-reel-card-clean ${item.isHero ? 'hero-creative-card' : ''}`}
                style={{
                  width: item.width || '220px',
                  height: item.height || '320px',
                  transform: `translateY(${item.offsetY || '0px'}) rotate(${item.rotate || '0deg'})`,
                  zIndex: item.zIndex || 2
                }}
                title={`Click to preview: ${item.hook}`}
              >
                <img src={item.image} alt={item.hook} className="ss3-clean-img" />
                
                {/* Play icon badge */}
                <div className="ss3-clean-play-badge">
                  <Play size={14} fill="#fff" />
                </div>

                {/* UGC On-Screen Hook Pill */}
                <div className="ss3-clean-hook-pill">
                  {item.hook}
                </div>

                {/* Bottom Subtle Overlay */}
                <div className="ss3-clean-footer-tag">
                  <span className="ss3-footer-rev">{item.revenue}</span>
                  <span className="ss3-footer-roas">{item.roas}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '36px', position: 'relative', zIndex: 10 }}>
        <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.08em', fontWeight: 800, textTransform: 'uppercase' }}>
          REAL BRANDS. REAL AD SPEND. REAL RESULTS.
        </p>
      </div>
    </section>
  );
}

