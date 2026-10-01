import React, { useRef, useEffect, useState } from 'react';
import { 
  ShoppingBag, 
  Palette, 
  Target, 
  Search, 
  TrendingUp, 
  Rocket, 
  Heart, 
  MessageCircle, 
  Send, 
  Volume2, 
  VolumeX,
  Sparkles,
  ArrowRight,
  Zap,
  CheckCircle2,
  Flame,
  Activity
} from 'lucide-react';

const CAPABILITIES = [
  {
    id: 'shopify',
    col: 'left',
    icon: ShoppingBag,
    title: 'SHOPIFY ARCHITECTURE',
    short: 'SHOPIFY',
    tag: 'High-Converting UX',
    desc: 'Lightning-fast, mobile-first stores built with custom landing pages and frictionless checkout flows that maximize AOV.',
    color: '#ff5722'
  },
  {
    id: 'creative',
    col: 'left',
    icon: Palette,
    title: 'CREATIVE STRATEGY',
    short: 'CREATIVE',
    tag: 'Scroll-Stopping UGC',
    desc: 'High-converting hooks, direct-response video ads, and UGC angle testing pipelines engineered for scale.',
    color: '#ea580c'
  },
  {
    id: 'meta-ads',
    col: 'left',
    icon: Target,
    title: 'META ACQUISITION',
    short: 'META ADS',
    tag: 'Scalable ROAS',
    desc: 'Algorithmic media buying, broad-targeting structures, and budget scaling across Facebook & Instagram feeds.',
    color: '#dc2626'
  },
  {
    id: 'google-ads',
    col: 'right',
    icon: Search,
    title: 'GOOGLE & YOUTUBE ADS',
    short: 'GOOGLE ADS',
    tag: 'High-Intent Demand',
    desc: 'Capture high-intent shoppers searching for your exact products with Performance Max, Search, and Shopping campaigns.',
    color: '#f59e0b'
  },
  {
    id: 'cro',
    col: 'right',
    icon: TrendingUp,
    title: 'CRO & RETENTION',
    short: 'CRO',
    tag: '+38% Avg Lift',
    desc: 'Aggressive split testing, offer engineering, and retention loops that squeeze maximum profit from existing traffic.',
    color: '#10b981'
  },
  {
    id: 'scaling',
    col: 'right',
    icon: Rocket,
    title: 'OMNICHANNEL SCALE',
    short: 'SCALING',
    tag: '8 & 9-Figure Engine',
    desc: 'Identify winning units, eliminate backend bottlenecks, and safely scale daily ad spend from $5k to $50k+.',
    color: '#ec4899'
  }
];

export default function ScalingSystemSection({ onOpenBooking }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && video.paused) {
          playVideo();
        }
      });
    }, { threshold: 0.15 });

    observer.observe(video);

    return () => {
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('focus', playVideo);
      observer.disconnect();
    };
  }, []);

  const toggleSound = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted) {
        videoRef.current.volume = 1;
        videoRef.current.play().catch(() => {});
      }
    }
  };

  const leftCards = CAPABILITIES.filter(c => c.col === 'left');
  const rightCards = CAPABILITIES.filter(c => c.col === 'right');

  // Selected accent color for active phone glow
  const currentAccent = activeCard 
    ? (CAPABILITIES.find(c => c.id === activeCard)?.color || '#ff5722')
    : '#ff5722';

  return (
    <section className="scaling-engine-section" id="how-we-win">
      {/* Ambient background glow & lighting */}
      <div className="scaling-engine-ambient-glow" aria-hidden="true" />
      <div className="scaling-engine-grid-pattern" aria-hidden="true" />

      {/* Decorative background energy orbs */}
      <div className="scaling-bg-orb scaling-bg-orb-1" aria-hidden="true" />
      <div className="scaling-bg-orb scaling-bg-orb-2" aria-hidden="true" />

      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="scaling-engine-header">
          <div className="scaling-engine-kicker">
            <span className="scaling-kicker-dot" />
            <span>NOT JUST ADS. NOT JUST A STORE.</span>
          </div>

          <h2 className="scaling-engine-title">
            YOUR ENTIRE ECOMMERCE <span className="scaling-engine-gradient-text">GROWTH ENGINE.</span>
          </h2>

          <p className="scaling-engine-desc">
            We build the integrated acquisition, creative, and conversion infrastructure around your brand that turns raw traffic into predictable, compounding 8-figure revenue.
          </p>
        </div>

        {/* 3-Column Interactive Layout: Left Cards | Center Phone with Flow Arrows | Right Cards */}
        <div className="scaling-engine-grid">

          {/* Left Column Cards */}
          <div className="scaling-engine-col scaling-col-left">
            {leftCards.map((card, idx) => {
              const Icon = card.icon;
              const isHovered = activeCard === card.id;
              return (
                <div
                  key={card.id}
                  className={`scaling-card ${isHovered ? 'active' : ''}`}
                  onMouseEnter={() => setActiveCard(card.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  style={{ '--accent-color': card.color }}
                >
                  <div className="scaling-card-header">
                    <div className="scaling-card-icon-wrap">
                      <Icon size={19} />
                    </div>
                    <div className="scaling-card-meta">
                      <h3 className="scaling-card-name">{card.short}</h3>
                      <span className="scaling-card-tag">{card.tag}</span>
                    </div>
                  </div>
                  <p className="scaling-card-desc">{card.desc}</p>
                  <div className="scaling-card-indicator" aria-hidden="true" />
                  
                  {/* Subtle hover connection dot */}
                  <div className="scaling-card-node-right" aria-hidden="true">
                    <span className="scaling-node-ping" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Column: Phone Mockup Frame + Animated Curved Flow Arrows */}
          <div className="scaling-engine-center">
            
            {/* Dynamic Animated Flow Arrows (SVG Connections) */}
            <div className="scaling-flow-connectors" aria-hidden="true">
              {/* Left Top Curved Arrow into Phone */}
              <svg className={`scaling-svg-arrow arrow-lt ${activeCard === 'shopify' || activeCard === 'creative' ? 'active' : ''}`} viewBox="0 0 120 70" fill="none">
                <path d="M5 15 Q 65 10 108 50" stroke="url(#gradientArrowLeft)" strokeWidth="2.5" strokeDasharray="5 4" strokeLinecap="round" />
                <polygon points="106,42 114,56 100,53" fill="#ff5722" />
              </svg>

              {/* Left Bottom Curved Arrow into Phone */}
              <svg className={`scaling-svg-arrow arrow-lb ${activeCard === 'meta-ads' ? 'active' : ''}`} viewBox="0 0 120 70" fill="none">
                <path d="M5 55 Q 65 60 108 20" stroke="url(#gradientArrowLeft)" strokeWidth="2.5" strokeDasharray="5 4" strokeLinecap="round" />
                <polygon points="100,17 114,14 106,28" fill="#dc2626" />
              </svg>

              {/* Right Top Curved Arrow out from Phone */}
              <svg className={`scaling-svg-arrow arrow-rt ${activeCard === 'google-ads' || activeCard === 'cro' ? 'active' : ''}`} viewBox="0 0 120 70" fill="none">
                <path d="M12 50 Q 55 10 115 15" stroke="url(#gradientArrowRight)" strokeWidth="2.5" strokeDasharray="5 4" strokeLinecap="round" />
                <polygon points="110,7 118,17 106,20" fill="#ea580c" />
              </svg>

              {/* Right Bottom Curved Arrow out from Phone */}
              <svg className={`scaling-svg-arrow arrow-rb ${activeCard === 'scaling' ? 'active' : ''}`} viewBox="0 0 120 70" fill="none">
                <path d="M12 20 Q 55 60 115 55" stroke="url(#gradientArrowRight)" strokeWidth="2.5" strokeDasharray="5 4" strokeLinecap="round" />
                <polygon points="106,50 118,53 110,63" fill="#ec4899" />
              </svg>

              {/* SVG Gradient Definitions */}
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="gradientArrowLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fca5a5" />
                    <stop offset="100%" stopColor="#ff5722" />
                  </linearGradient>
                  <linearGradient id="gradientArrowRight" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff5722" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Phone Showcase Wrapper */}
            <div className="scaling-phone-wrapper">
              
              {/* Backlight Glow Behind Phone with Active Tint */}
              <div 
                className="scaling-phone-backglow" 
                aria-hidden="true" 
                style={{ '--glow-color': currentAccent }}
              />

              {/* Pulsing Engine Energy Rings */}
              <div className="scaling-engine-pulse-ring ring-1" aria-hidden="true" />
              <div className="scaling-engine-pulse-ring ring-2" aria-hidden="true" />

              {/* Floating Floating Micro Badges Around Phone */}
              <div className="scaling-floating-badge badge-top-left">
                <Flame size={14} color="#ff5722" />
                <span>4.8x Avg ROAS</span>
              </div>

              <div className="scaling-floating-badge badge-bottom-right">
                <Activity size={14} color="#10b981" />
                <span>$50M+ Scaled</span>
              </div>

              {/* iPhone 15 Pro Hardware Frame */}
              <div className="scaling-phone-frame">
                {/* Dynamic Island / Camera Island */}
                <div className="scaling-phone-island">
                  <div className="scaling-phone-lens" />
                </div>

                {/* Inner Screen Video */}
                <div className="scaling-phone-screen">
                  <video
                    ref={videoRef}
                    src="/assets/insta-video/ClzYLasvGb7.mp4"
                    poster="/assets/insta-video/ClzYLasvGb7.webp"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    disablePictureInPicture
                    disableRemotePlayback
                    className="scaling-phone-video"
                  />

                  {/* Sound Toggle Button */}
                  <button
                    onClick={toggleSound}
                    className={`scaling-audio-pill ${!isMuted ? 'active' : ''}`}
                    aria-label={isMuted ? "Unmute sound" : "Mute sound"}
                  >
                    {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    <span>{isMuted ? 'TAP FOR SOUND' : 'SOUND ON'}</span>
                  </button>

                  {/* Live Revenue Verified Badge Overlay */}
                  <div className="scaling-phone-proof-tag">
                    <CheckCircle2 size={13} color="#22c55e" />
                    <span>$422K In 30 Days</span>
                  </div>

                  {/* Instagram Floating Reactions Stack */}
                  <div className="scaling-phone-reactions">
                    <div className="scaling-reaction-badge">
                      <Heart size={18} fill="#ff1744" color="#ff1744" />
                      <span>48.2k</span>
                    </div>
                    <div className="scaling-reaction-badge">
                      <MessageCircle size={18} color="#ffffff" />
                      <span>1,240</span>
                    </div>
                    <div className="scaling-reaction-badge">
                      <Send size={16} color="#ffffff" />
                    </div>
                  </div>

                  {/* Bottom Video Progress Bar */}
                  <div className="scaling-video-scrubber">
                    <div className="scaling-scrubber-dot" />
                    <div className="scaling-scrubber-fill" />
                  </div>

                  {/* Bottom App Navigation */}
                  <div className="scaling-phone-nav">
                    <span>🏠</span>
                    <span>🔍</span>
                    <span className="scaling-nav-add">＋</span>
                    <span>🎬</span>
                    <span>👤</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Cards */}
          <div className="scaling-engine-col scaling-col-right">
            {rightCards.map((card) => {
              const Icon = card.icon;
              const isHovered = activeCard === card.id;
              return (
                <div
                  key={card.id}
                  className={`scaling-card ${isHovered ? 'active' : ''}`}
                  onMouseEnter={() => setActiveCard(card.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  style={{ '--accent-color': card.color }}
                >
                  {/* Subtle hover connection dot */}
                  <div className="scaling-card-node-left" aria-hidden="true">
                    <span className="scaling-node-ping" />
                  </div>

                  <div className="scaling-card-header">
                    <div className="scaling-card-icon-wrap">
                      <Icon size={19} />
                    </div>
                    <div className="scaling-card-meta">
                      <h3 className="scaling-card-name">{card.short}</h3>
                      <span className="scaling-card-tag">{card.tag}</span>
                    </div>
                  </div>
                  <p className="scaling-card-desc">{card.desc}</p>
                  <div className="scaling-card-indicator" aria-hidden="true" />
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Closing Callout & Action */}
        <div className="scaling-engine-footer">
          <div className="scaling-footer-badge">
            <Zap size={15} color="#ea580c" />
            <span>Skipping steps kills performance. We don't skip steps.</span>
          </div>
          {onOpenBooking && (
            <button className="scaling-engine-cta-btn" onClick={onOpenBooking}>
              <span>SCALE WITH OUR ENGINE</span>
              <ArrowRight size={16} />
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
