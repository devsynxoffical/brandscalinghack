import React, { useRef, useEffect } from 'react';
import { ArrowUpRight, TrendingUp, Sparkles, Zap, ArrowRight, Play, Flame, Award } from 'lucide-react';

// Client Logos for Marquee (18 Verified eCommerce Brands Scaled)
const row1Logos = [
  { name: 'Dr. Naomi Skin', src: '/logos/clients/drnaomi.svg' },
  { name: 'Vedge Nutrition', src: '/logos/clients/vedge-nutrition.svg' },
  { name: 'ionBottles', src: '/logos/clients/ion-bottles.svg' },
  { name: 'Vanidox', src: '/logos/clients/vanidox.svg' },
  { name: 'Ayurda', src: '/logos/clients/ayurda.svg' },
  { name: 'Juice Beauty', src: '/logos/clients/juice-beauty.svg' },
  { name: 'Steel Horse Leather', src: '/logos/clients/steel-horse-leather.svg' },
  { name: 'Ghost Democracy', src: '/logos/clients/ghost-democracy.svg' },
  { name: 'Talon', src: '/logos/clients/talon.svg' },
];

const row2Logos = [
  { name: 'ZenSATION', src: '/logos/clients/zensation.svg' },
  { name: 'EZ Detangler', src: '/logos/clients/ez-detangler.svg' },
  { name: 'Little & Lively', src: '/logos/clients/little-and-lively.svg' },
  { name: 'Tasgal', src: '/logos/clients/tasgal.svg' },
  { name: 'Veil Cosmetics', src: '/logos/clients/veil-cosmetics.svg' },
  { name: 'Water Jewelers', src: '/logos/clients/water-jewelers.svg' },
  { name: 'Swamp Kitten Jewelry', src: '/logos/clients/swamp-kitten.svg' },
  { name: 'Pure Skin Lab', src: '/logos/clients/pure-skin-lab.svg' },
  { name: 'Life Easy', src: '/logos/clients/life-easy.svg' },
];

const bigMarqueeItems = [
  { text: 'FROM YOUR FIRST SALE', highlight: false },
  { text: 'TO 9 FIGURES', highlight: true },
  { text: 'STRATEGY & ACQUISITION', highlight: false },
  { text: 'CONVERSION ENGINE', highlight: true },
  { text: 'SCALE DTC PLAYBOOK', highlight: false },
  { text: '$50M+ AD SPEND DEPLOYED', highlight: true },
];

export const BRANDS_SCALED = [
  { name: "Juice Beauty", cat: "Organic Skincare & Makeup", followers: "357K", handle: "@juicebeauty", url: "https://www.instagram.com/juicebeauty/", img: "/brands/juicebeauty.webp" },
  { name: "Vedge Nutrition", cat: "Plant-Based Supplements", followers: "88.7K", handle: "@vedgenutrition", url: "https://www.instagram.com/vedgenutrition/", img: "/brands/vedge.webp" },
  { name: "Dr Naomi Skin", cat: "Clinical Skincare & Devices", followers: "85K", handle: "@drnaomiskin", url: "https://www.instagram.com/drnaomiskin/", img: "/brands/drnaomi.webp" },
  { name: "Water Jewelers", cat: "Premium Jewelry", followers: "81.1K", handle: "@waterwatch.co", url: "https://www.instagram.com/waterwatch.co", img: "/brands/waterjewelers.webp" },
  { name: "Little & Lively", cat: "Canadian Baby & Kids Clothing", followers: "80K", handle: "@littleandlively", url: "https://www.instagram.com/littleandlively/", img: "/brands/littleandlively.webp" },
  { name: "Veil Cosmetics", cat: "Vegan Cosmetics", followers: "52.1K", handle: "@veilcosmetics", url: "https://www.instagram.com/veilcosmetics/", img: "/brands/veil.webp" },
  { name: "ionBottles", cat: "Hydrogen Water Bottles", followers: "23.3K", handle: "@ionbottles", url: "https://www.instagram.com/ionbottles", img: "/brands/ionbottles.webp" },
  { name: "Ghost Democracy", cat: "Clean Skincare", followers: "17.5K", handle: "@ghostdemocracy", url: "https://www.instagram.com/ghostdemocracy/", img: "/brands/ghostdemocracy.webp" },
  { name: "Swamp Kitten Jewelry", cat: "Jewelry & Watches", followers: "11K", handle: "Facebook", url: "https://www.facebook.com/kristalizejewelry/", img: "/brands/swampkitten.webp" },
];

export default function HeroSection({ onOpenBooking, onNavigate }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Direct DOM property enforcement for 100% reliable autoplay across Chrome, Safari, Firefox
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playVideo = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    };

    playVideo();

    // Continuous smooth playback listeners
    const handlePause = () => {
      if (video && video.paused) {
        playVideo();
      }
    };

    const handleVisibility = () => {
      if (!document.hidden && video && video.paused) {
        playVideo();
      }
    };

    const handleEnded = () => {
      if (video) {
        video.currentTime = 0;
        playVideo();
      }
    };

    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('focus', playVideo);

    return () => {
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('focus', playVideo);
    };
  }, []);

  return (
    <div className="bsh-hero-root">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (High-Visibility Background Video + Big Scrolling Line) */}
      {/* ========================================================================= */}
      <section id="hero" className="bsh-hero-stage">
        {/* Crystal Clear High-Visibility Fullscreen Video Background */}
        <div className="bsh-hero-video-bg" aria-hidden="true">
          <video
            ref={videoRef}
            src="/brand-scaling-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            className="bsh-hero-bg-video-element"
          >
            <source src="/brand-scaling-video.mp4" type="video/mp4" />
          </video>
          {/* Subtle Transparent Vignette for High Video Clarity */}
          <div className="bsh-hero-video-overlay" />
        </div>

        {/* Ambient Warm Studio Lighting */}
        <div className="bsh-hero-ambient-glow" aria-hidden="true" />

        {/* Hero Top Content Header */}
        <div className="bsh-hero-content-wrap">
          {/* Elegant Top Subhead */}
          <h1 className="bsh-hero-header-eyebrow">
            <span className="bsh-serif-italic">From Your First Sale To</span>{' '}
            <span className="bsh-bold-flame">9 Figures.</span>
          </h1>
        </div>

        {/* ========================================================================= */}
        {/* BIG SCROLLING MARQUEE LINE (Massive, High-Impact Typography) */}
        {/* ========================================================================= */}
        <div className="bsh-big-marquee-wrapper">
          <div className="bsh-big-marquee-track">
            <div className="bsh-big-marquee-group">
              {bigMarqueeItems.map((item, idx) => (
                <span key={`bm-a-${idx}`} className="bsh-big-marquee-item">
                  <span className={item.highlight ? 'bsh-big-text-gradient' : 'bsh-big-text-solid'}>
                    {item.text}
                  </span>
                  <span className="bsh-big-star">✦</span>
                </span>
              ))}
            </div>
            <div className="bsh-big-marquee-group" aria-hidden="true">
              {bigMarqueeItems.map((item, idx) => (
                <span key={`bm-b-${idx}`} className="bsh-big-marquee-item">
                  <span className={item.highlight ? 'bsh-big-text-gradient' : 'bsh-big-text-solid'}>
                    {item.text}
                  </span>
                  <span className="bsh-big-star">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Subtitle, Services Pills & Action CTAs */}
        <div className="bsh-hero-mid-controls">
          <p className="bsh-hero-sub-description">
            We build the strategy, acquisition and conversion engine behind eCommerce brands that are built to scale.
          </p>

          {/* Services / Channels Row */}
          <div className="bsh-hero-services-row">
            <span>Shopify</span>
            <span className="bsh-services-dot">•</span>
            <span>Creatives</span>
            <span className="bsh-services-dot">•</span>
            <span>Meta Ads</span>
            <span className="bsh-services-dot">•</span>
            <span>Google Ads</span>
            <span className="bsh-services-dot">•</span>
            <span>CRO</span>
            <span className="bsh-services-dot">•</span>
            <span>Scaling</span>
          </div>

          <div className="bsh-hero-cta-group" style={{ marginTop: '22px' }}>
            <button className="btn-primary bsh-cta-primary-btn" onClick={onOpenBooking}>
              <span>SCALE YOUR BRAND</span>
              <ArrowRight size={18} />
            </button>
            <button
              className="btn-secondary bsh-cta-secondary-btn"
              onClick={() => onNavigate ? onNavigate('case-studies') : null}
            >
              <Play size={14} color="#ff5722" />
              <span>150+ CASE STUDIES</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SCROLLING BRAND SHOWCASE CARDS (Infinite Marquee) */}
        {/* ========================================================================= */}
        <div className="bsh-hero-brands-marquee-bar">
          <div className="bsh-hero-brands-scroll-wrap">
            <div className="bsh-hero-brands-track">
              <div className="bsh-hero-brands-group">
                {BRANDS_SCALED.map((b, idx) => (
                  <a
                    key={`brand-a-${idx}`}
                    className="bsh-brand-card"
                    href={b.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bsh-brand-top">
                      <span className="bsh-brand-handle">{b.handle}</span>
                      <span className="bsh-brand-arrow">
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                    <div className="bsh-brand-avatar">
                      <img src={b.img} alt={b.name} loading="lazy" />
                    </div>
                    <h3 className="bsh-brand-name">{b.name}</h3>
                    <p className="bsh-brand-cat">{b.cat}</p>
                    <div className="bsh-brand-stat">
                      <b className="bsh-brand-followers">{b.followers}</b>
                      <span className="bsh-brand-stat-label">Followers</span>
                    </div>
                  </a>
                ))}
              </div>
              <div className="bsh-hero-brands-group" aria-hidden="true">
                {BRANDS_SCALED.map((b, idx) => (
                  <a
                    key={`brand-b-${idx}`}
                    className="bsh-brand-card"
                    href={b.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex="-1"
                  >
                    <div className="bsh-brand-top">
                      <span className="bsh-brand-handle">{b.handle}</span>
                      <span className="bsh-brand-arrow">
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                    <div className="bsh-brand-avatar">
                      <img src={b.img} alt={b.name} loading="lazy" />
                    </div>
                    <h3 className="bsh-brand-name">{b.name}</h3>
                    <p className="bsh-brand-cat">{b.cat}</p>
                    <div className="bsh-brand-stat">
                      <b className="bsh-brand-followers">{b.followers}</b>
                      <span className="bsh-brand-stat-label">Followers</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TRUSTED BY 100+ BRANDS (Seamless Infinite Scrolling Logo Showcase) */}
      {/* ========================================================================= */}
      <section className="bsh-trusted-brands-section">
        <div className="container">
          <div className="bsh-trusted-heading-row">
            <span className="bsh-trusted-line" />
            <h2 className="bsh-trusted-title">
              Trusted by <span className="bsh-trusted-title-accent">100+ scaling eCommerce</span> founders
            </h2>
            <span className="bsh-trusted-line" />
          </div>

          {/* Row 1: Scrolling Left */}
          <div className="bsh-logos-marquee-wrapper">
            <div className="bsh-logos-track-left">
              <div className="bsh-logos-group">
                {row1Logos.map((logo, idx) => (
                  <div key={`r1-a-${idx}`} className="bsh-logo-item" title={logo.name}>
                    <img src={logo.src} alt={logo.name} className="bsh-logo-img" loading="eager" />
                  </div>
                ))}
              </div>
              <div className="bsh-logos-group" aria-hidden="true">
                {row1Logos.map((logo, idx) => (
                  <div key={`r1-b-${idx}`} className="bsh-logo-item" title={logo.name}>
                    <img src={logo.src} alt="" className="bsh-logo-img" loading="eager" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="bsh-logos-marquee-wrapper" style={{ marginTop: '16px' }}>
            <div className="bsh-logos-track-right">
              <div className="bsh-logos-group">
                {row2Logos.map((logo, idx) => (
                  <div key={`r2-a-${idx}`} className="bsh-logo-item" title={logo.name}>
                    <img src={logo.src} alt={logo.name} className="bsh-logo-img" loading="eager" />
                  </div>
                ))}
              </div>
              <div className="bsh-logos-group" aria-hidden="true">
                {row2Logos.map((logo, idx) => (
                  <div key={`r2-b-${idx}`} className="bsh-logo-item" title={logo.name}>
                    <img src={logo.src} alt="" className="bsh-logo-img" loading="eager" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
