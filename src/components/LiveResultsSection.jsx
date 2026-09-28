import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ugcCreativesList = [
  {
    id: 'proof-1',
    shortcode: 'C8lyJ6VSyTy',
    hook: 'Six-Figure Dropshipping Scale',
    image: '/assets/instagram_thumbs/insta_C8lyJ6VSyTy.webp',
    url: 'https://www.instagram.com/p/C8lyJ6VSyTy/',
    revenue: '$210.08K Total Sales',
    roas: '+61% Growth · 669 Orders',
    badge: 'VERIFIED SHOPIFY',
    cardHeight: '370px'
  },
  {
    id: 'proof-2',
    shortcode: 'DZXMWaeEgLe',
    hook: '7-Day Dropshipping Scale',
    image: '/assets/instagram_thumbs/insta_DZXMWaeEgLe.webp',
    url: 'https://www.instagram.com/p/DZXMWaeEgLe/',
    revenue: '$80,227 in 7 Days',
    roas: '3.97x ROAS · Meta Ads',
    badge: 'VERIFIED META ADS',
    cardHeight: '320px'
  },
  {
    id: 'proof-3',
    shortcode: 'DZXZSkyAU7x',
    hook: 'Shopify DTC Store: $491,798',
    image: '/assets/instagram_thumbs/insta_DZXZSkyAU7x.webp',
    url: 'https://www.instagram.com/p/DZXZSkyAU7x/',
    revenue: '$491,798.20 (2,286 Orders)',
    roas: '+63% Sales Growth',
    badge: 'SHOPIFY LIVE DASHBOARD',
    cardHeight: '360px',
    isHero: true
  },
  {
    id: 'proof-4',
    shortcode: 'DZS8JtQEqJy',
    hook: 'High-Ticket Supplement Brand',
    image: '/assets/instagram_thumbs/insta_DZS8JtQEqJy.webp',
    url: 'https://www.instagram.com/p/DZS8JtQEqJy/',
    revenue: '$62,182 in 7 Days',
    roas: '4.50x ROAS ($145 AOV)',
    badge: 'HIGH AOV PROOF',
    cardHeight: '345px'
  },
  {
    id: 'proof-5',
    shortcode: 'DZS6d1XEgl1',
    hook: 'DTC Fitness Brand: $102K',
    image: '/assets/instagram_thumbs/insta_DZS6d1XEgl1.webp',
    url: 'https://www.instagram.com/p/DZS6d1XEgl1/',
    revenue: '$102,000 in May',
    roas: '+112% Growth · 769 Orders',
    badge: '6-FIGURE MONTH',
    cardHeight: '315px'
  },
  {
    id: 'proof-6',
    shortcode: 'DW1JuKLlAgI',
    hook: 'DTC Fitness: $80K / 24h',
    image: '/assets/instagram_thumbs/insta_DW1JuKLlAgI.webp',
    url: 'https://www.instagram.com/p/DW1JuKLlAgI/',
    revenue: '$80K in 24 Hours',
    roas: '862 Orders Dispatched',
    badge: '24-HOUR VELOCITY',
    cardHeight: '350px'
  },
  {
    id: 'proof-7',
    shortcode: 'DIpxfULBj7r',
    hook: 'Dropshipping to DTC Scale',
    image: '/assets/instagram_thumbs/insta_DIpxfULBj7r.webp',
    url: 'https://www.instagram.com/p/DIpxfULBj7r/',
    revenue: '$68,679 in 18 Days',
    roas: '4.25x ROAS ($16.1K Spend)',
    badge: '18-DAY SPRINT',
    cardHeight: '340px'
  },
  {
    id: 'proof-8',
    shortcode: 'DZ3yXdciv63',
    hook: 'Supplement Brand: $52K in 17d',
    image: '/assets/instagram_thumbs/insta_DZ3yXdciv63.webp',
    url: 'https://www.instagram.com/p/DZ3yXdciv63/',
    revenue: '$52,000 in 17 Days',
    roas: '4.09x ROAS ($71.7K Peak)',
    badge: 'VERIFIED DASHBOARD',
    cardHeight: '325px'
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

      {/* Infinite Auto-Scrolling Marquee Track with PURE FULL SCREENSHOTS */}
      <div className="ss3-reels-full-strip">
        <div className="ss3-reels-marquee-container">
          {/* Track 1 */}
          <div className="ss3-reels-scroll-track">
            {ugcCreativesList.map((item, idx) => (
              <div
                key={`track1-${item.id}-${idx}`}
                onClick={() => onOpenInstagramModal ? onOpenInstagramModal(item) : null}
                className={`ss3-pure-image-card ${item.isHero ? 'hero-creative-card' : ''}`}
                style={{
                  height: item.cardHeight || '340px',
                  cursor: 'pointer'
                }}
                title={`Click to view verified proof: ${item.hook}`}
              >
                {item.video ? (
                  <video
                    src={item.video}
                    poster={item.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="ss3-pure-img"
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={item.hook || 'Proof Screenshot'}
                    className="ss3-pure-img"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Track 2 (Seamless Infinite Duplicate) */}
          <div className="ss3-reels-scroll-track" aria-hidden="true">
            {ugcCreativesList.map((item, idx) => (
              <div
                key={`track2-${item.id}-${idx}`}
                onClick={() => onOpenInstagramModal ? onOpenInstagramModal(item) : null}
                className={`ss3-pure-image-card ${item.isHero ? 'hero-creative-card' : ''}`}
                style={{
                  height: item.cardHeight || '340px',
                  cursor: 'pointer'
                }}
                title={`Click to view verified proof: ${item.hook}`}
              >
                {item.video ? (
                  <video
                    src={item.video}
                    poster={item.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="ss3-pure-img"
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={item.hook || 'Proof Screenshot'}
                    className="ss3-pure-img"
                    loading="lazy"
                  />
                )}
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
