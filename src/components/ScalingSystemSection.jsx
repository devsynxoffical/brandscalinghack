import React, { useRef, useEffect, useState } from 'react';
import { ShoppingBag, Palette, Target, Search, TrendingUp, Rocket, Heart, MessageCircle, Send, Share2, Sparkles, Brain, Calendar, Truck, Layers, Volume2, VolumeX } from 'lucide-react';

export default function ScalingSystemSection({ onOpenBooking }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Hardcode DOM level muted attributes for 100% autoplay compliance
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

    // Auto-resume on pause or visibility change
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

    // Play when in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && video.paused) {
          playVideo();
        }
      });
    }, { threshold: 0.1 });

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

  return (
    <section className="system-section" id="how-we-win">
      <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
        {/* Section Top Tag Pill */}
        <div className="system-title-tag">
          [ 03 — WHAT WE BUILD ]
        </div>

        {/* Main Heading with Highlighter Marker Effect */}
        <h2 className="system-main-heading">
          YOUR ENTIRE ECOMMERCE <span className="system-highlight-yellow">GROWTH ENGINE.</span>
        </h2>

        {/* Red Kicker Subhead */}
        <div className="system-sub-kicker">
          NOT JUST ADS. NOT JUST A STORE.
        </div>

        {/* Descriptive Lead Paragraph */}
        <p className="system-desc-lead">
          We build the infrastructure around your brand that turns attention into customers and customers into revenue.
        </p>

        {/* Main Interactive Stage with Tilted Phone, Doodle Arrows & Surrounding Cards */}
        <div className="system-grid-layout">
          {/* Hand-drawn SVG Arrow Top-Right */}
          <svg className="system-doodle-arrow-top" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M10 65 C 40 10, 85 15, 105 45" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M92 48 L 106 46 L 104 32" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>

          {/* Hand-drawn SVG Arrow Bottom-Left */}
          <svg className="system-doodle-arrow-bottom" viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M10 20 C 35 70, 70 85, 95 60 C 115 40, 105 15, 80 28 C 65 38, 75 75, 125 55" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M112 60 L 126 54 L 124 40" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>

          {/* Left Column (3 Cards) */}
          <div className="system-column">
            {/* 1. SHOPIFY (Red Card) */}
            <div className="system-card red">
              <div className="system-card-icon-badge">
                <ShoppingBag size={20} color="#ffffff" />
              </div>
              <h4>SHOPIFY</h4>
              <p>Conversion-focused stores built to sell.</p>
            </div>

            {/* 2. CREATIVE (Light Gray Card) */}
            <div className="system-card gray">
              <div className="system-card-icon-badge">
                <Palette size={20} color="#dc2626" />
              </div>
              <h4 className="title-red">CREATIVE</h4>
              <p>High-performing concepts, hooks, UGC and ads built for continuous testing.</p>
            </div>

            {/* 3. META ADS (Red Card) */}
            <div className="system-card red">
              <div className="system-card-icon-badge">
                <Target size={20} color="#ffffff" />
              </div>
              <h4>META ADS</h4>
              <p>Customer acquisition through Facebook & Instagram.</p>
            </div>
          </div>

          {/* Center Tilted Smartphone Mockup (Clean Screen, No Obstructive Tag) */}
          <div className="phone-mockup-wrapper">
            <div className="phone-mockup-frame-tilted">
              {/* Phone Speaker Notch / Dynamic Island */}
              <div className="phone-speaker-notch">
                <div className="phone-camera-lens" />
              </div>

              {/* Inner Screen & Video Player */}
              <div className="phone-screen-content">
                <video
                  ref={videoRef}
                  src="/assets/insta-video/ClzYLasvGb7.mp4"
                  poster="/assets/insta-video/ClzYLasvGb7.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  disablePictureInPicture
                  disableRemotePlayback
                  className="phone-screen-video"
                />
                {/* Interactive Sound Toggle Control Button */}
                <button
                  onClick={toggleSound}
                  className={`phone-audio-toggle-btn ${!isMuted ? 'active' : ''}`}
                  aria-label={isMuted ? "Unmute sound" : "Mute sound"}
                  title={isMuted ? "Turn on sound" : "Mute sound"}
                >
                  {isMuted ? (
                    <VolumeX size={15} color="#ffffff" />
                  ) : (
                    <Volume2 size={15} color="#ffffff" />
                  )}
                  <span>{isMuted ? 'TAP FOR SOUND' : 'SOUND ON'}</span>
                </button>

                {/* Engagement Reactions Bar */}
                <div className="phone-reactions-stack">
                  <div className="phone-reaction-item">
                    <Heart size={20} fill="#ff1744" color="#ff1744" />
                    <span>48.2k</span>
                  </div>
                  <div className="phone-reaction-item">
                    <MessageCircle size={20} color="#ffffff" />
                    <span>1,240</span>
                  </div>
                  <div className="phone-reaction-item">
                    <Send size={18} color="#ffffff" />
                  </div>
                </div>

                {/* Bottom Video Progress Bar Scrubber with Blue Dot */}
                <div className="phone-scrubber-bar">
                  <div className="phone-scrubber-dot" />
                  <div className="phone-scrubber-line" />
                </div>

                {/* Bottom Instagram App Navigation Bar */}
                <div className="phone-bottom-nav">
                  <span>🏠</span>
                  <span>🔍</span>
                  <span>➕</span>
                  <span>🎬</span>
                  <span>👤</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (3 Cards) */}
          <div className="system-column">
            {/* 4. GOOGLE ADS (Light Gray Card) */}
            <div className="system-card gray">
              <div className="system-card-icon-badge">
                <Search size={20} color="#dc2626" />
              </div>
              <h4 className="title-red">GOOGLE ADS</h4>
              <p>Capture high-intent customers actively searching for your products.</p>
            </div>

            {/* 5. CRO (Red Card) */}
            <div className="system-card red">
              <div className="system-card-icon-badge">
                <TrendingUp size={20} color="#ffffff" />
              </div>
              <h4>CRO</h4>
              <p>Turn more of your existing traffic into revenue.</p>
            </div>

            {/* 6. SCALING (Light Gray Card) */}
            <div className="system-card gray">
              <div className="system-card-icon-badge">
                <Rocket size={20} color="#dc2626" />
              </div>
              <h4 className="title-red">SCALING</h4>
              <p>Identify winners, eliminate bottlenecks and scale what works.</p>
            </div>
          </div>
        </div>

        {/* Bottom Sub-text Quote in Italics */}
        <div className="system-footer-note">
          <em>Skipping steps kills performance. We don't skip steps.</em>
        </div>
      </div>
    </section>
  );
}
