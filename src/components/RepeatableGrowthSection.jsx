import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';

export const creativeGridItems = [
  {
    id: 'reel-76',
    topBanner: '€118,838.09 LIVE META ADS PROOF',
    topSub: 'COLUMNS: BRAND SCALING HACKS™',
    hook: 'Meta Ads Manager Live',
    image: '/assets/instagram_thumbs/reel_Db3hW_mupo1.jpg',
    video: '/assets/instagram_videos/reel_Db3hW_mupo1.mp4',
    url: 'https://www.instagram.com/reel/Db3hW_mupo1/',
    tag: '€118,838.09 Sales',
    roas: '4.90x ROAS',
    badge: 'Meta Ads Framework',
    category: 'Meta Scaling',
    bannerBg: '#ffffff',
    textColor: '#0f172a',
    isVideo: true
  },
  {
    id: 'reel-75',
    topBanner: '$3.5M CASE STUDY: REVEALED',
    topSub: '$3,553,858.35 TOTAL REVENUE',
    hook: '8-Figure System',
    image: '/assets/instagram_thumbs/reel_C9CPs88t1qa.jpg',
    video: '/assets/instagram_videos/reel_C9CPs88t1qa.mp4',
    url: 'https://www.instagram.com/reel/C9CPs88t1qa/',
    tag: '$3.5M Case Study',
    roas: '4.80x ROAS',
    badge: '$3.5M Case Study',
    category: '8-Figure Proof',
    bannerBg: 'rgba(0,0,0,0.75)',
    textColor: '#ffffff',
    isVideo: true
  },
  {
    id: 'reel-77',
    topBanner: 'YOUR COMPETITORS ARE STILL SLEEPING',
    topSub: '€126,168.44 IN 20 DAYS • 1,523 PURCHASES',
    hook: '20-Day Sprint',
    image: '/assets/instagram_thumbs/reel_DbCVqzFhiLU.jpg',
    video: '/assets/instagram_videos/reel_DbCVqzFhiLU.mp4',
    url: 'https://www.instagram.com/reel/DbCVqzFhiLU/',
    tag: '€126,168 in 20d',
    roas: '5.60x ROAS',
    badge: 'Six Figures Scale',
    category: 'Meta Scaling',
    bannerBg: '#ffffff',
    textColor: '#0f172a',
    isVideo: true
  },
  {
    id: 'reel-78',
    topBanner: 'SCALING DTC MEDIA BUYING',
    topSub: 'GAURAV KAPOOR STRATEGY BREAKDOWN',
    hook: 'Founder Breakdown',
    image: '/assets/instagram_thumbs/reel_DPI2h3TARq_.jpg',
    video: '/assets/instagram_videos/reel_DPI2h3TARq_.mp4',
    url: 'https://www.instagram.com/reel/DPI2h3TARq_/',
    tag: 'Strategy Engine',
    roas: '5.20x ROAS',
    badge: 'Live Ad Accounts',
    category: 'CRO & Funnels',
    bannerBg: '#fef08a',
    textColor: '#854d0e',
    isVideo: true
  },
  {
    id: 'reel-79',
    topBanner: 'CREATIVE TESTING BLUEPRINT',
    topSub: 'ZERO TO SCALE METHODOLOGY',
    hook: 'Creative Engine',
    image: '/assets/instagram_thumbs/reel_C9RU-C9yhfU.jpg',
    video: '/assets/instagram_videos/reel_C9RU-C9yhfU.mp4',
    url: 'https://www.instagram.com/reel/C9RU-C9yhfU/',
    tag: 'Creative Scale',
    roas: '4.90x ROAS',
    badge: 'Creative Testing',
    category: 'Creative Hooks',
    bannerBg: 'rgba(0,0,0,0.85)',
    textColor: '#ffffff',
    isVideo: true
  },
  {
    id: 'reel-64',
    topBanner: '$102,190 GENERATED IN 28 DAYS',
    topSub: '$17,289 SPEND • 5.91X BLENDED ROAS',
    hook: 'DTC Scale Formula',
    image: '/assets/instagram_thumbs/reel_DBE4BLBo-U-.jpg',
    video: '/assets/instagram_videos/reel_DBE4BLBo-U-.mp4',
    url: 'https://www.instagram.com/reel/DBE4BLBo-U-/',
    tag: '5.91x ROAS',
    roas: '5.91x ROAS',
    badge: 'Meta Ads Framework',
    category: 'Meta Scaling',
    bannerBg: '#ffffff',
    textColor: '#0f172a',
    isVideo: true
  }
];

export default function RepeatableGrowthSection({ onOpenBooking, onNavigate, onOpenInstagramModal }) {
  return (
    <section className="repeatable-growth-section">
      <div className="container">
        {/* Top Header Row */}
        <div className="growth-header-grid">
          {/* Left Column: Big Impact Typography */}
          <div className="growth-title-col">
            <span className="growth-kicker-tag">
              DTC PERFORMANCE MARKETING & GROWTH ENGINE
            </span>

            <h2 className="growth-mega-title">
              <span className="mega-word">BUILDING</span>
              <span className="mega-word">REPEATABLE GROWTH</span>
              
              <div className="mega-third-line">
                <span className="yellow-badge-box">
                  <span className="yellow-badge-text">A PERFORMANCE PARTNER FOR 7-8 FIGURE DTC BRANDS</span>
                  <span className="yellow-stripes">
                    <span></span><span></span><span></span><span></span>
                  </span>
                </span>
                <span className="mega-word-inline">FOR DTC BRANDS</span>
              </div>
            </h2>
          </div>

          {/* Right Column: Copy and Pill Button */}
          <div className="growth-cta-col">
            <p className="growth-subtext-copy">
              We build the creative, run the ads, fix the tracking, and give you a growth system you can trust.
            </p>

            <button className="btn-highbeam-talk" onClick={onOpenBooking}>
              <span>LET'S TALK</span>
              <div className="yellow-arrow-circle">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 3D Tilted Isometric Creative Collage Grid with AUTOPLAYING VIDEOS */}
      <div className="tilted-grid-viewport">
        {/* Top and Bottom Seamless Gradient Masks */}
        <div className="tilted-mask-top" />
        <div className="tilted-mask-bottom" />

        <div className="tilted-grid-plane">
          {/* Row 1 - Scrolling Left */}
          <div className="tilted-row tilted-row-1">
            {[...creativeGridItems, ...creativeGridItems].map((item, idx) => (
              <div
                key={`row1-${item.id}-${idx}`}
                className="tilted-card"
                onClick={() => onOpenInstagramModal ? onOpenInstagramModal(item) : window.open(item.url, '_blank')}
                style={{ cursor: 'pointer' }}
              >
                {/* Top Ad Banner Header */}
                <div
                  className="tilted-card-top-banner"
                  style={{ background: item.bannerBg, color: item.textColor }}
                >
                  <div className="banner-main-txt">{item.topBanner}</div>
                  <div className="banner-sub-txt">{item.topSub}</div>
                </div>

                <div className="tilted-card-img-wrap">
                  <video
                    src={item.video}
                    poster={item.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="tilted-card-img"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  
                  {item.isVideo && (
                    <div className="tilted-play-circle">
                      <Play size={18} fill="#ffffff" color="#ffffff" style={{ marginLeft: '3px' }} />
                    </div>
                  )}
                </div>

                {/* Bottom Pill Badge Overlay */}
                <div className="tilted-card-bottom-pill">
                  <span className="tilted-pill-tag">{item.tag}</span>
                  <span className="tilted-pill-hook">{item.hook}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 - Scrolling Right */}
          <div className="tilted-row tilted-row-2">
            {[...creativeGridItems, ...creativeGridItems].reverse().map((item, idx) => (
              <div
                key={`row2-${item.id}-${idx}`}
                className="tilted-card"
                onClick={() => onOpenInstagramModal ? onOpenInstagramModal(item) : window.open(item.url, '_blank')}
                style={{ cursor: 'pointer' }}
              >
                {/* Top Ad Banner Header */}
                <div
                  className="tilted-card-top-banner"
                  style={{ background: item.bannerBg, color: item.textColor }}
                >
                  <div className="banner-main-txt">{item.topBanner}</div>
                  <div className="banner-sub-txt">{item.topSub}</div>
                </div>

                <div className="tilted-card-img-wrap">
                  <video
                    src={item.video}
                    poster={item.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="tilted-card-img"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  
                  {item.isVideo && (
                    <div className="tilted-play-circle">
                      <Play size={18} fill="#ffffff" color="#ffffff" style={{ marginLeft: '3px' }} />
                    </div>
                  )}
                </div>

                {/* Bottom Pill Badge Overlay */}
                <div className="tilted-card-bottom-pill">
                  <span className="tilted-pill-tag">{item.tag}</span>
                  <span className="tilted-pill-hook">{item.hook}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3 - Scrolling Left (Fills the entire bottom with zero empty space) */}
          <div className="tilted-row tilted-row-3">
            {[...creativeGridItems, ...creativeGridItems].map((item, idx) => (
              <div
                key={`row3-${item.id}-${idx}`}
                className="tilted-card"
                onClick={() => onOpenInstagramModal ? onOpenInstagramModal(item) : window.open(item.url, '_blank')}
                style={{ cursor: 'pointer' }}
              >
                {/* Top Ad Banner Header */}
                <div
                  className="tilted-card-top-banner"
                  style={{ background: item.bannerBg, color: item.textColor }}
                >
                  <div className="banner-main-txt">{item.topBanner}</div>
                  <div className="banner-sub-txt">{item.topSub}</div>
                </div>

                <div className="tilted-card-img-wrap">
                  <video
                    src={item.video}
                    poster={item.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="tilted-card-img"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  
                  {item.isVideo && (
                    <div className="tilted-play-circle">
                      <Play size={18} fill="#ffffff" color="#ffffff" style={{ marginLeft: '3px' }} />
                    </div>
                  )}
                </div>

                {/* Bottom Pill Badge Overlay */}
                <div className="tilted-card-bottom-pill">
                  <span className="tilted-pill-tag">{item.tag}</span>
                  <span className="tilted-pill-hook">{item.hook}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
