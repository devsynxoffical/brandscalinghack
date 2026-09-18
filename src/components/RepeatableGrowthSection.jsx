import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';

export const creativeGridItems = [
  {
    id: 'ad-1',
    topBanner: 'KANSAS CITY COCKTAIL FESTIVAL',
    topSub: 'GET YOUR TICKETS TODAY',
    hook: 'Live Event Scale',
    image: '/assets/city_skyline.jpg',
    tag: '4.8x ROAS',
    bannerBg: '#ffffff',
    textColor: '#0f172a'
  },
  {
    id: 'ad-2',
    topBanner: "BRENDON BURCHARD'S PRODUCTIVITY",
    topSub: 'ONE-SHEET BLUEPRINT',
    hook: 'Digital & DTC Conversion',
    image: '/assets/gaurav_portrait.jpg',
    tag: 'High CTR',
    bannerBg: '#fef08a',
    textColor: '#854d0e'
  },
  {
    id: 'ad-3',
    topBanner: 'CHEAPER THAN YOUR GYM MEMBERSHIP 🌿',
    topSub: '🔥 Shop Link in Bio',
    hook: 'Eyewear & DTC Apparel',
    image: '/assets/ugc_sunglasses.jpg',
    tag: 'Scaled $1.4M',
    bannerBg: 'rgba(0,0,0,0.75)',
    textColor: '#ffffff',
    isVideo: true
  },
  {
    id: 'ad-4',
    topBanner: 'ORGANIC PAIN RELIEF & RECOVERY',
    topSub: 'Doctor Formulated Skincare',
    hook: 'Skin Health & Wellness',
    image: '/assets/instagram_thumbs/insta_1_Db3hW_mupo1.jpg',
    tag: '€118k Month 1',
    bannerBg: '#ffffff',
    textColor: '#0f172a',
    isVideo: true
  },
  {
    id: 'ad-5',
    topBanner: 'YOUR COMPETITORS ARE STILL SLEEPING.',
    topSub: 'Scale While Others Rest',
    hook: 'Media Buying Infrastructure',
    image: '/assets/instagram_thumbs/insta_4_DbCVqzFhiLU.jpg',
    tag: '$100k+ in 20 Days',
    bannerBg: 'rgba(0,0,0,0.85)',
    textColor: '#ffffff',
    isVideo: true
  },
  {
    id: 'ad-6',
    topBanner: 'DTC FITNESS PROTEIN SURGE',
    topSub: '€123,000 in 20 Days',
    hook: 'Meta Ads Advantage+',
    image: '/assets/instagram_thumbs/insta_2_DbBMshACSuX.jpg',
    tag: '5.2x ROAS',
    bannerBg: '#ffffff',
    textColor: '#0f172a',
    isVideo: true
  },
  {
    id: 'ad-7',
    topBanner: 'CODE: BABSY50 • SITEWIDE 50% OFF',
    topSub: 'Direct-to-Consumer Flash Promo',
    hook: 'High-Volume Retargeting',
    image: '/assets/instagram_thumbs/insta_5_DcO79UbMIFx.jpg',
    tag: '6.1x ROAS',
    bannerBg: '#fbcfe8',
    textColor: '#9d174d'
  },
  {
    id: 'ad-8',
    topBanner: 'SOMNA SLEEP & REST SYSTEM',
    topSub: 'Clinical Nighttime Support',
    hook: 'Health & Nutraceuticals',
    image: '/assets/instagram_thumbs/insta_6_DZcJNI0EhWY.jpg',
    tag: 'Verified Scale',
    bannerBg: '#ffffff',
    textColor: '#0f172a'
  }
];

export default function RepeatableGrowthSection({ onOpenBooking, onNavigate }) {
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

      {/* 3D Tilted Isometric Creative Collage Grid (Screenshot 2) */}
      <div className="tilted-grid-viewport">
        {/* Top and Bottom Seamless Gradient Masks */}
        <div className="tilted-mask-top" />
        <div className="tilted-mask-bottom" />

        <div className="tilted-grid-plane">
          {/* Row 1 - Scrolling Left */}
          <div className="tilted-row tilted-row-1">
            {[...creativeGridItems, ...creativeGridItems].map((item, idx) => (
              <div key={`row1-${item.id}-${idx}`} className="tilted-card">
                {/* Top Ad Banner Header */}
                <div
                  className="tilted-card-top-banner"
                  style={{ background: item.bannerBg, color: item.textColor }}
                >
                  <div className="banner-main-txt">{item.topBanner}</div>
                  <div className="banner-sub-txt">{item.topSub}</div>
                </div>

                <div className="tilted-card-img-wrap">
                  <img src={item.image} alt={item.topBanner} className="tilted-card-img" />
                  
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
              <div key={`row2-${item.id}-${idx}`} className="tilted-card">
                {/* Top Ad Banner Header */}
                <div
                  className="tilted-card-top-banner"
                  style={{ background: item.bannerBg, color: item.textColor }}
                >
                  <div className="banner-main-txt">{item.topBanner}</div>
                  <div className="banner-sub-txt">{item.topSub}</div>
                </div>

                <div className="tilted-card-img-wrap">
                  <img src={item.image} alt={item.topBanner} className="tilted-card-img" />
                  
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
              <div key={`row3-${item.id}-${idx}`} className="tilted-card">
                {/* Top Ad Banner Header */}
                <div
                  className="tilted-card-top-banner"
                  style={{ background: item.bannerBg, color: item.textColor }}
                >
                  <div className="banner-main-txt">{item.topBanner}</div>
                  <div className="banner-sub-txt">{item.topSub}</div>
                </div>

                <div className="tilted-card-img-wrap">
                  <img src={item.image} alt={item.topBanner} className="tilted-card-img" />
                  
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
