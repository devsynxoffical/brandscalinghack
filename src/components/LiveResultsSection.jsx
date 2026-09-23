import React from 'react';
import { ArrowRight } from 'lucide-react';
import { liveResultsProof } from '../data/mockData';

export const ugcCreativesList = [
  {
    id: 'reel-76',
    hook: 'Now I wake up calm, focused, and actually rested',
    niche: 'Sleep & Wellness DTC',
    image: '/assets/instagram_thumbs/reel_Db3hW_mupo1.jpg',
    video: '/assets/instagram_videos/reel_Db3hW_mupo1.mp4',
    url: 'https://www.instagram.com/reel/Db3hW_mupo1/',
    revenue: '€118,000 in Month 1',
    roas: '4.9x ROAS',
    badge: 'Verified Scale',
    width: '240px',
    height: '410px',
    offsetY: '-25px',
    rotate: '-0.8deg',
    zIndex: 3
  },
  {
    id: 'reel-77',
    hook: 'Deficiencies in: iron, zinc, b-vitamins...',
    niche: 'Nutraceuticals & Health',
    image: '/assets/instagram_thumbs/reel_DbCVqzFhiLU.jpg',
    video: '/assets/instagram_videos/reel_DbCVqzFhiLU.mp4',
    url: 'https://www.instagram.com/reel/DbCVqzFhiLU/',
    revenue: '$100,000+ in 20 Days',
    roas: '5.6x ROAS',
    badge: 'Six Figures Scale',
    width: '225px',
    height: '385px',
    offsetY: '20px',
    rotate: '1.2deg',
    zIndex: 2
  },
  {
    id: 'reel-75',
    hook: 'Profit Accelerate: Scale to $100k/mo Net Profit',
    niche: 'DTC Brand Portfolio',
    image: '/assets/instagram_thumbs/reel_C9CPs88t1qa.jpg',
    video: '/assets/instagram_videos/reel_C9CPs88t1qa.mp4',
    url: 'https://www.instagram.com/reel/C9CPs88t1qa/',
    revenue: '$3,500,000 Portfolio',
    roas: '4.8x ROAS',
    badge: '$3.5M Case Study',
    width: '265px',
    height: '450px',
    offsetY: '-45px',
    rotate: '-0.5deg',
    zIndex: 5,
    isHero: true
  },
  {
    id: 'reel-78',
    hook: 'Live Ad Account Scaling Framework',
    niche: 'Meta Ads Framework',
    image: '/assets/instagram_thumbs/reel_DPI2h3TARq_.jpg',
    video: '/assets/instagram_videos/reel_DPI2h3TARq_.mp4',
    url: 'https://www.instagram.com/reel/DPI2h3TARq_/',
    revenue: 'High-Impact Scale',
    roas: '5.2x ROAS',
    badge: 'Live Ad Account',
    width: '240px',
    height: '410px',
    offsetY: '-20px',
    rotate: '-1deg',
    zIndex: 4
  },
  {
    id: 'reel-79',
    hook: 'High Converting Creative Structure',
    niche: 'Creative Testing Engine',
    image: '/assets/instagram_thumbs/reel_C9RU-C9yhfU.jpg',
    video: '/assets/instagram_videos/reel_C9RU-C9yhfU.mp4',
    url: 'https://www.instagram.com/reel/C9RU-C9yhfU/',
    revenue: '380% ROAS Jump',
    roas: '4.9x ROAS',
    badge: 'Creative Engine',
    width: '225px',
    height: '385px',
    offsetY: '25px',
    rotate: '1.5deg',
    zIndex: 2
  },
  {
    id: 'reel-64',
    hook: 'Meta Advantage+ Scaling Strategy Breakdown',
    niche: 'Live Revenue Dashboards',
    image: '/assets/instagram_thumbs/reel_DBE4BLBo-U-.jpg',
    video: '/assets/instagram_videos/reel_DBE4BLBo-U-.mp4',
    url: 'https://www.instagram.com/reel/DBE4BLBo-U-/',
    revenue: 'Live Dashboard Proof',
    roas: 'Verified Accounts',
    badge: 'Live Ad Accounts',
    width: '245px',
    height: '420px',
    offsetY: '-30px',
    rotate: '-1.2deg',
    zIndex: 4
  }
];

export default function LiveResultsSection({ onOpenBooking, onNavigate, onOpenInstagramModal }) {
  return (
    <section className="results-section-fire">
      <div className="results-glow-orb"></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Bold Headline */}
        <h2 className="results-title-bold" style={{ marginTop: '10px' }}>
          We Craft <span style={{ fontStyle: 'italic', fontWeight: 600 }}>World Class</span> <span className="results-title-highlight">Performance Creatives</span> To Hit Your Revenue Goals.
        </h2>

        {/* Minimal Subtext */}
        <p className="results-subtext">
          We help eCommerce brands scale through a repeatable creative system, not random ads. We offer <strong>full service ad creative from research and ideation to execution</strong> and delivery.
        </p>

        {/* Action Buttons */}
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

      {/* Infinite Auto-Scrolling / Interactive Marquee Track with LIVE VIDEO REELS */}
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
                  zIndex: item.zIndex || 2,
                  cursor: 'pointer'
                }}
                title={`Click to preview: ${item.hook}`}
              >
                <video
                  src={item.video}
                  poster={item.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="ss3-clean-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

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
                  zIndex: item.zIndex || 2,
                  cursor: 'pointer'
                }}
                title={`Click to preview: ${item.hook}`}
              >
                <video
                  src={item.video}
                  poster={item.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="ss3-clean-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

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
