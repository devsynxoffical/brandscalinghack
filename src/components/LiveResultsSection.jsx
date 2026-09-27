import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ugcCreativesList = [
  {
    id: 'proof-1',
    shortcode: 'C8lyJ6VSyTy',
    hook: 'Six-Figure Dropshipping Scale',
    niche: 'Meta Ads Manager Live',
    image: '/assets/instagram_thumbs/insta_C8lyJ6VSyTy.jpg',
    url: 'https://www.instagram.com/p/C8lyJ6VSyTy/',
    revenue: '$34,596 in 24 Hours',
    roas: '5.41x ROAS',
    badge: 'VERIFIED META ADS',
    width: '280px',
    height: '480px',
    offsetY: '-15px',
    rotate: '-0.8deg',
    zIndex: 3
  },
  {
    id: 'proof-2',
    shortcode: 'DDrymP4oSh7',
    hook: "Women's Apparel: $34.5K/Day",
    niche: 'Meta Ads Daily Performance',
    image: '/assets/instagram_thumbs/insta_DDrymP4oSh7.jpg',
    video: '/assets/instagram_videos/reel_DDrymP4oSh7.mp4',
    url: 'https://www.instagram.com/p/DDrymP4oSh7/',
    revenue: '$34,506 in 24 Hours',
    roas: '5.49x ROAS',
    badge: 'REEL BREAKDOWN',
    width: '275px',
    height: '470px',
    offsetY: '20px',
    rotate: '1.2deg',
    zIndex: 2
  },
  {
    id: 'proof-3',
    shortcode: 'DZXZSkyAU7x',
    hook: 'Shopify DTC Store: $491,798',
    niche: 'Shopify Live Store Analytics',
    image: '/assets/instagram_thumbs/insta_DZXZSkyAU7x.jpg',
    url: 'https://www.instagram.com/p/DZXZSkyAU7x/',
    revenue: '$491,798.20 (2,286 Orders)',
    roas: '+63% Sales Growth',
    badge: 'SHOPIFY LIVE DASHBOARD',
    width: '300px',
    height: '515px',
    offsetY: '-30px',
    rotate: '-0.4deg',
    zIndex: 5,
    isHero: true
  },
  {
    id: 'proof-4',
    shortcode: 'DDpjtXUo-ZA',
    hook: '3-Day $62.8K Revenue Surge',
    niche: 'High-Velocity Scaling',
    image: '/assets/instagram_thumbs/insta_DDpjtXUo-ZA.jpg',
    video: '/assets/instagram_videos/reel_DDpjtXUo-ZA.mp4',
    url: 'https://www.instagram.com/p/DDpjtXUo-ZA/',
    revenue: '$62,889 in 3 Days',
    roas: '4.28x ROAS',
    badge: 'REEL BREAKDOWN',
    width: '285px',
    height: '485px',
    offsetY: '-15px',
    rotate: '-1deg',
    zIndex: 4
  },
  {
    id: 'proof-5',
    shortcode: 'DZ3yXdciv63',
    hook: 'Supplement Brand: $52K in 17d',
    niche: 'Supplement & Wellness DTC',
    image: '/assets/instagram_thumbs/insta_DZ3yXdciv63.jpg',
    url: 'https://www.instagram.com/p/DZ3yXdciv63/',
    revenue: '$52,000 in 17 Days',
    roas: '4.09x ROAS',
    badge: 'VERIFIED DASHBOARD',
    width: '290px',
    height: '495px',
    offsetY: '15px',
    rotate: '1.0deg',
    zIndex: 3
  },
  {
    id: 'proof-6',
    shortcode: 'DExlLMQS3cs',
    hook: 'Meta Ads Scaling Truth 2025',
    niche: 'Creative Scaling Blueprint',
    image: '/assets/instagram_thumbs/insta_DExlLMQS3cs.jpg',
    video: '/assets/instagram_videos/reel_DExlLMQS3cs.mp4',
    url: 'https://www.instagram.com/p/DExlLMQS3cs/',
    revenue: '$100K+/Mo Scaling System',
    roas: '4.00x ROAS',
    badge: 'REEL BREAKDOWN',
    width: '275px',
    height: '470px',
    offsetY: '25px',
    rotate: '1.4deg',
    zIndex: 2
  },
  {
    id: 'proof-7',
    shortcode: 'DZS8JtQEqJy',
    hook: 'High-Ticket Supplement Brand',
    niche: 'High AOV DTC System',
    image: '/assets/instagram_thumbs/insta_DZS8JtQEqJy.jpg',
    url: 'https://www.instagram.com/p/DZS8JtQEqJy/',
    revenue: '$62,182 in 7 Days',
    roas: '4.50x ROAS ($145 AOV)',
    badge: 'HIGH AOV PROOF',
    width: '280px',
    height: '475px',
    offsetY: '-15px',
    rotate: '-0.6deg',
    zIndex: 3
  },
  {
    id: 'proof-8',
    shortcode: 'DFDod10oz-k',
    hook: 'Meta Ad Waste Solution',
    niche: 'Budget Scaling Architecture',
    image: '/assets/instagram_thumbs/insta_DFDod10oz-k.jpg',
    video: '/assets/instagram_videos/reel_DFDod10oz-k.mp4',
    url: 'https://www.instagram.com/p/DFDod10oz-k/',
    revenue: '3.8x+ ROAS Framework',
    roas: '4.20x ROAS',
    badge: 'REEL BREAKDOWN',
    width: '285px',
    height: '490px',
    offsetY: '10px',
    rotate: '0.8deg',
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
                  width: item.width || '280px',
                  height: item.height || '480px',
                  transform: `translateY(${item.offsetY || '0px'}) rotate(${item.rotate || '0deg'})`,
                  zIndex: item.zIndex || 2,
                  cursor: 'pointer'
                }}
                title={`Click to preview: ${item.hook}`}
              >
                {/* Ambient Blurred Backdrop for seamless aspect-ratio fill */}
                <img
                  src={item.image}
                  alt=""
                  className="ss3-img-blur-bg"
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: '-10px',
                    width: 'calc(100% + 20px)',
                    height: 'calc(100% + 20px)',
                    objectFit: 'cover',
                    filter: 'blur(16px) brightness(0.35)',
                    pointerEvents: 'none',
                    zIndex: 1
                  }}
                />

                {item.video ? (
                  <video
                    src={item.video}
                    poster={item.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="ss3-clean-img"
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={item.hook}
                    className="ss3-clean-img"
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    loading="lazy"
                  />
                )}

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
                  width: item.width || '280px',
                  height: item.height || '480px',
                  transform: `translateY(${item.offsetY || '0px'}) rotate(${item.rotate || '0deg'})`,
                  zIndex: item.zIndex || 2,
                  cursor: 'pointer'
                }}
                title={`Click to preview: ${item.hook}`}
              >
                {/* Ambient Blurred Backdrop for seamless aspect-ratio fill */}
                <img
                  src={item.image}
                  alt=""
                  className="ss3-img-blur-bg"
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: '-10px',
                    width: 'calc(100% + 20px)',
                    height: 'calc(100% + 20px)',
                    objectFit: 'cover',
                    filter: 'blur(16px) brightness(0.35)',
                    pointerEvents: 'none',
                    zIndex: 1
                  }}
                />

                {item.video ? (
                  <video
                    src={item.video}
                    poster={item.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="ss3-clean-img"
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={item.hook}
                    className="ss3-clean-img"
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    loading="lazy"
                  />
                )}

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
