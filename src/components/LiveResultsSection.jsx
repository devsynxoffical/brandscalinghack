import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { liveResultsProof } from '../data/mockData';

export const ugcCreativesList = [
  {
    id: 'insta-1',
    hook: 'Now I wake up calm, focused, and actually rested',
    niche: 'Sleep & Wellness DTC',
    image: '/assets/instagram_thumbs/insta_1_Db3hW_mupo1.jpg',
    url: 'https://www.instagram.com/reel/Db3hW_mupo1/',
    revenue: '€118,000 in Month 1',
    roas: '4.9x ROAS',
    badge: 'Verified First Month',
    width: '240px',
    height: '410px',
    offsetY: '-25px',
    rotate: '-0.8deg',
    zIndex: 3
  },
  {
    id: 'insta-2',
    hook: 'Tension, Stress & Recovery Breakdown',
    niche: 'Stress Relief & Recovery',
    image: '/assets/instagram_thumbs/insta_2_DbBMshACSuX.jpg',
    url: 'https://www.instagram.com/reel/DbBMshACSuX/',
    revenue: '€123,000 in 20 Days',
    roas: '5.2x ROAS',
    badge: 'Meta Ads Framework',
    width: '225px',
    height: '385px',
    offsetY: '20px',
    rotate: '1.2deg',
    zIndex: 2
  },
  {
    id: 'insta-3',
    hook: 'Profit Accelerate: Scale to $100k/mo Net Profit',
    niche: 'DTC Brand Portfolio',
    image: '/assets/instagram_thumbs/insta_3_C9CPs88t1qa.jpg',
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
    id: 'insta-4',
    hook: 'Deficiencies in: iron, zinc, b-vitamins...',
    niche: 'Nutraceuticals & Health',
    image: '/assets/instagram_thumbs/insta_4_DbCVqzFhiLU.jpg',
    url: 'https://www.instagram.com/reel/DbCVqzFhiLU/',
    revenue: '$100,000+ in 20 Days',
    roas: '5.6x ROAS',
    badge: 'Six Figures Scale',
    width: '240px',
    height: '410px',
    offsetY: '-20px',
    rotate: '-1deg',
    zIndex: 4
  },
  {
    id: 'insta-5',
    hook: 'If I had to start from ZERO to $10k/mo',
    niche: 'Start from Zero',
    image: '/assets/instagram_thumbs/insta_5_DcO79UbMIFx.jpg',
    url: 'https://www.instagram.com/reel/DcO79UbMIFx/',
    revenue: '$10,000 / mo Blueprint',
    roas: '6.1x ROAS',
    badge: 'Zero to $10k/mo',
    width: '225px',
    height: '385px',
    offsetY: '25px',
    rotate: '1.5deg',
    zIndex: 2
  },
  {
    id: 'insta-6',
    hook: 'Your Competitors Are Still Sleeping',
    niche: 'Live Revenue Dashboards',
    image: '/assets/instagram_thumbs/insta_6_DZcJNI0EhWY.jpg',
    url: 'https://www.instagram.com/p/DZcJNI0EhWY/',
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

