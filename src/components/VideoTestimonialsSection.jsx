import React, { useState, useRef, useEffect } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Sparkles, 
  X, 
  ArrowRight,
  Star,
  ExternalLink
} from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function VideoTestimonialsSection({ onOpenBooking }) {
  const [activeAudioId, setActiveAudioId] = useState(null);
  const [selectedVideoModal, setSelectedVideoModal] = useState(null);
  const videoRefs = useRef({});

  const testimonials = [
    {
      id: 'portrait-1',
      type: 'portrait',
      videoSrc: '/testimonials/portrait-1.mp4',
      posterSrc: '/testimonials/portrait-1.mp4.jpg',
      name: 'Gaurav Kapoor',
      role: 'Head of Growth Engine',
      location: '• @gauravecomm',
      quote: 'Scaling Advantage+ campaigns to 7-figures using broad targeting, weekly creative testing cadences, and cash flow architecture.',
      badge: '7-FIGURE ADVANTAGE+',
      badgeColor: '#ff7043',
      stats: '$1.4M Scaled • 5.2x ROAS',
      url: 'https://www.instagram.com/reel/DAK4iLGSGI_/'
    },
    {
      id: 'landscape-1',
      type: 'landscape',
      videoSrc: '/testimonials/landscape-1.mp4',
      posterSrc: '/testimonials/landscape-1.mp4.jpg',
      name: 'Creative Engine',
      role: 'Direct-Response UGC Studio',
      quote: 'Why the first 3 seconds dictate 80% of ad spend profitability. 45+ variation direct-response matrix.',
      badge: 'VIRAL HOOK MATRIX',
      badgeColor: '#38bdf8',
      stats: '€180k Month 1 • 4.8x ROAS',
      url: 'https://www.instagram.com/reel/C9RU-C9yhfU/'
    },
    {
      id: 'landscape-2',
      type: 'landscape',
      videoSrc: '/testimonials/landscape-2.mp4',
      posterSrc: '/testimonials/landscape-2.mp4.jpg',
      name: 'Profit Accelerate',
      role: 'DTC Brand Portfolio',
      quote: 'Guaranteed system to help you scale your eCommerce brand to $100k/month with $30k-$40k net margin.',
      badge: '$3.5M CASE STUDY',
      badgeColor: '#a855f7',
      stats: '$3,500,000 Portfolio',
      url: 'https://www.instagram.com/reel/C9CPs88t1qa/'
    },
    {
      id: 'portrait-2',
      type: 'portrait',
      videoSrc: '/testimonials/portrait-2.mp4',
      posterSrc: '/testimonials/portrait-2.mp4.jpg',
      name: 'Zero to $10k/mo',
      role: 'Foundational eCommerce Blueprint',
      quote: 'If I had to start from ZERO today and build compounding monthly revenue, these are the 5 exact systems I bet on.',
      badge: 'ZERO TO $10K/MO',
      badgeColor: '#10b981',
      stats: '$10,000 / mo Blueprint',
      hasSubPill: true,
      url: 'https://www.instagram.com/reel/DcO79UbMIFx/'
    },
    {
      id: 'square-1',
      type: 'square',
      videoSrc: '/testimonials/square-1.mp4',
      posterSrc: '/testimonials/square-1.mp4.jpg',
      name: 'Offer Architecture & CRO',
      role: 'Shopify Funnel Optimization',
      quote: 'How to double average order value with 1-click Shopify bundle upsells without increasing acquisition spend.',
      badge: '1-CLICK BUNDLES',
      badgeColor: '#ffb300',
      stats: '+38% AOV Lift • 4.4x ROAS',
      url: 'https://www.instagram.com/reel/DcLYkuoBQbo/'
    },
    {
      id: 'landscape-3',
      type: 'landscape-wide',
      videoSrc: '/testimonials/landscape-3.mp4',
      posterSrc: '/testimonials/landscape-3.mp4.jpg',
      name: 'Live Revenue Dashboards',
      role: '8 & 9-Figure Proof',
      quote: 'Real ad accounts. Real ad spend. Live revenue dashboards. Some people talk eCommerce, we engineer predictable scale.',
      badge: 'VERIFIED LIVE ACCOUNTS',
      badgeColor: '#ec4899',
      stats: '$50M+ Ad Spend Managed',
      url: 'https://www.instagram.com/reel/DGV7gMeNXYM/'
    }
  ];

  // Guaranteed video autoplay across all browsers
  useEffect(() => {
    Object.values(videoRefs.current).forEach((videoEl) => {
      if (videoEl) {
        videoEl.muted = true;
        videoEl.play().catch(() => {});
      }
    });
  }, []);

  const toggleAudio = (id, e) => {
    e.stopPropagation();
    const currentVideo = videoRefs.current[id];
    if (!currentVideo) return;

    if (activeAudioId === id) {
      currentVideo.muted = true;
      setActiveAudioId(null);
    } else {
      // Mute all other videos
      Object.entries(videoRefs.current).forEach(([k, v]) => {
        if (v) v.muted = true;
      });
      currentVideo.muted = false;
      currentVideo.play().catch(() => {});
      setActiveAudioId(id);
    }
  };

  const openModal = (item) => {
    // Mute inline videos when modal opens
    Object.entries(videoRefs.current).forEach(([k, v]) => {
      if (v) v.muted = true;
    });
    setActiveAudioId(null);
    setSelectedVideoModal(item);
  };

  const closeModal = () => {
    setSelectedVideoModal(null);
  };

  return (
    <section className="video-testimonials-section" id="video-testimonials">
      {/* Background ambient lighting */}
      <div className="vt-ambient-glow vt-glow-1" />
      <div className="vt-ambient-glow vt-glow-2" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="vt-header-block">
          <div className="vt-badge-row">
            <span className="badge badge-orange">
              <Sparkles size={14} />
              <span>REAL CLIENT RESULTS & CASE STUDIES</span>
            </span>
          </div>

          <h2 className="vt-main-title">
            HEAR DIRECTLY FROM THE <span className="text-gradient-orange">FOUNDERS WE SCALE.</span>
          </h2>

          <p className="vt-subtitle">
            Raw, unfiltered video proof from eCommerce brands and agency leaders scaling with our growth architecture.
          </p>
        </div>

        {/* Bento Masonry Grid */}
        <div className="vt-bento-grid">
          {/* Top Row: 3 Columns (Portrait | 2 Stacked Landscapes | Portrait) */}
          <div className="vt-top-row">
            {/* Column 1: Portrait 1 (Mohanded) */}
            <div 
              className="vt-card vt-card-portrait"
              onClick={() => openModal(testimonials[0])}
            >
              <video
                ref={(el) => (videoRefs.current[testimonials[0].id] = el)}
                src={testimonials[0].videoSrc}
                poster={testimonials[0].posterSrc}
                autoPlay
                loop
                muted={activeAudioId !== testimonials[0].id}
                playsInline
                preload="metadata"
                className="vt-video-media"
              />
              
              {/* Card Top Badge */}
              <div className="vt-card-top-bar">
                <span className="vt-pill-badge" style={{ borderColor: `${testimonials[0].badgeColor}55`, color: testimonials[0].badgeColor }}>
                  <span className="vt-pulse-dot" style={{ background: testimonials[0].badgeColor }} />
                  {testimonials[0].badge}
                </span>
              </div>

              {/* Bottom Details Overlay */}
              <div className="vt-card-bottom-overlay">
                <div className="vt-author-info">
                  <span className="vt-author-name">{testimonials[0].name}</span>
                  <span className="vt-author-sep">•</span>
                  <span className="vt-author-role">{testimonials[0].role} {testimonials[0].location}</span>
                </div>
                <p className="vt-quote-text">
                  "{testimonials[0].quote}"
                </p>

                {/* Control Action Bar */}
                <div className="vt-controls-bar">
                  <button 
                    className={`vt-unmute-btn ${activeAudioId === testimonials[0].id ? 'active' : ''}`}
                    onClick={(e) => toggleAudio(testimonials[0].id, e)}
                    aria-label="Toggle Sound"
                  >
                    {activeAudioId === testimonials[0].id ? (
                      <>
                        <Volume2 size={15} />
                        <span>Mute</span>
                      </>
                    ) : (
                      <>
                        <VolumeX size={15} />
                        <span>Unmute</span>
                      </>
                    )}
                  </button>

                  <button 
                    className="vt-expand-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(testimonials[0]);
                    }}
                    aria-label="Watch Full Video"
                  >
                    <Maximize2 size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Column 2: Stacked Landscapes (Giulia & Edgar/Jeremi) */}
            <div className="vt-stacked-column">
              {/* Stack 1: Giulia */}
              <div 
                className="vt-card vt-card-landscape"
                onClick={() => openModal(testimonials[1])}
              >
                <video
                  ref={(el) => (videoRefs.current[testimonials[1].id] = el)}
                  src={testimonials[1].videoSrc}
                  poster={testimonials[1].posterSrc}
                  autoPlay
                  loop
                  muted={activeAudioId !== testimonials[1].id}
                  playsInline
                  preload="metadata"
                  className="vt-video-media"
                />

                <div className="vt-card-top-bar">
                  <span className="vt-pill-badge" style={{ borderColor: `${testimonials[1].badgeColor}55`, color: testimonials[1].badgeColor }}>
                    <span className="vt-pulse-dot" style={{ background: testimonials[1].badgeColor }} />
                    {testimonials[1].badge}
                  </span>
                </div>

                <div className="vt-card-bottom-overlay">
                  <div className="vt-author-info">
                    <span className="vt-author-name">{testimonials[1].name}</span>
                    <span className="vt-author-sep">•</span>
                    <span className="vt-author-role">{testimonials[1].role}</span>
                  </div>
                  <p className="vt-quote-text">
                    "{testimonials[1].quote}"
                  </p>

                  <div className="vt-controls-bar">
                    <button 
                      className={`vt-unmute-btn ${activeAudioId === testimonials[1].id ? 'active' : ''}`}
                      onClick={(e) => toggleAudio(testimonials[1].id, e)}
                    >
                      {activeAudioId === testimonials[1].id ? <Volume2 size={15} /> : <VolumeX size={15} />}
                      <span>{activeAudioId === testimonials[1].id ? 'Mute' : 'Unmute'}</span>
                    </button>
                    <button 
                      className="vt-expand-btn" 
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(testimonials[1]);
                      }}
                    >
                      <Maximize2 size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Stack 2: Edgar & Jeremi */}
              <div 
                className="vt-card vt-card-landscape"
                onClick={() => openModal(testimonials[2])}
              >
                <video
                  ref={(el) => (videoRefs.current[testimonials[2].id] = el)}
                  src={testimonials[2].videoSrc}
                  poster={testimonials[2].posterSrc}
                  autoPlay
                  loop
                  muted={activeAudioId !== testimonials[2].id}
                  playsInline
                  preload="metadata"
                  className="vt-video-media"
                />

                <div className="vt-card-top-bar">
                  <span className="vt-pill-badge" style={{ borderColor: `${testimonials[2].badgeColor}55`, color: testimonials[2].badgeColor }}>
                    <span className="vt-pulse-dot" style={{ background: testimonials[2].badgeColor }} />
                    {testimonials[2].badge}
                  </span>
                </div>

                <div className="vt-card-bottom-overlay">
                  <div className="vt-author-info">
                    <span className="vt-author-name">{testimonials[2].name}</span>
                    <span className="vt-author-sep">•</span>
                    <span className="vt-author-role">{testimonials[2].role}</span>
                  </div>
                  <p className="vt-quote-text">
                    "{testimonials[2].quote}"
                  </p>

                  <div className="vt-controls-bar">
                    <button 
                      className={`vt-unmute-btn ${activeAudioId === testimonials[2].id ? 'active' : ''}`}
                      onClick={(e) => toggleAudio(testimonials[2].id, e)}
                    >
                      {activeAudioId === testimonials[2].id ? <Volume2 size={15} /> : <VolumeX size={15} />}
                      <span>{activeAudioId === testimonials[2].id ? 'Mute' : 'Unmute'}</span>
                    </button>
                    <button 
                      className="vt-expand-btn" 
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(testimonials[2]);
                      }}
                    >
                      <Maximize2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Portrait 2 (Edgar Solo) */}
            <div 
              className="vt-card vt-card-portrait"
              onClick={() => openModal(testimonials[3])}
            >
              <video
                ref={(el) => (videoRefs.current[testimonials[3].id] = el)}
                src={testimonials[3].videoSrc}
                poster={testimonials[3].posterSrc}
                autoPlay
                loop
                muted={activeAudioId !== testimonials[3].id}
                playsInline
                preload="metadata"
                className="vt-video-media"
              />

              <div className="vt-card-top-bar">
                <span className="vt-pill-badge" style={{ borderColor: `${testimonials[3].badgeColor}55`, color: testimonials[3].badgeColor }}>
                  <span className="vt-pulse-dot" style={{ background: testimonials[3].badgeColor }} />
                  {testimonials[3].badge}
                </span>
              </div>

              <div className="vt-card-bottom-overlay">
                <div className="vt-author-info">
                  <span className="vt-author-name">{testimonials[3].name}</span>
                  <span className="vt-author-sep">•</span>
                  <span className="vt-author-role">{testimonials[3].role}</span>
                </div>
                <p className="vt-quote-text">
                  "{testimonials[3].quote}"
                </p>

                {testimonials[3].hasSubPill && (
                  <div className="vt-sub-stats-pill">
                    <span className="vt-sub-stats-bullet">▶</span>
                    <span>{testimonials[3].stats}</span>
                  </div>
                )}

                <div className="vt-controls-bar">
                  <button 
                    className={`vt-unmute-btn ${activeAudioId === testimonials[3].id ? 'active' : ''}`}
                    onClick={(e) => toggleAudio(testimonials[3].id, e)}
                  >
                    {activeAudioId === testimonials[3].id ? <Volume2 size={15} /> : <VolumeX size={15} />}
                    <span>{activeAudioId === testimonials[3].id ? 'Mute' : 'Unmute'}</span>
                  </button>
                  <button 
                    className="vt-expand-btn" 
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(testimonials[3]);
                    }}
                  >
                    <Maximize2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: 2 Cards (Square Marie Grace Berg & Landscape Muhammad Ghattas) */}
          <div className="vt-bottom-row">
            {/* Card 4: Marie Grace Berg */}
            <div 
              className="vt-card vt-card-square"
              onClick={() => openModal(testimonials[4])}
            >
              <video
                ref={(el) => (videoRefs.current[testimonials[4].id] = el)}
                src={testimonials[4].videoSrc}
                poster={testimonials[4].posterSrc}
                autoPlay
                loop
                muted={activeAudioId !== testimonials[4].id}
                playsInline
                preload="metadata"
                className="vt-video-media"
              />

              <div className="vt-card-top-bar">
                <span className="vt-pill-badge" style={{ borderColor: `${testimonials[4].badgeColor}55`, color: testimonials[4].badgeColor }}>
                  <span className="vt-pulse-dot" style={{ background: testimonials[4].badgeColor }} />
                  {testimonials[4].badge}
                </span>
              </div>

              <div className="vt-card-bottom-overlay">
                <div className="vt-author-info">
                  <span className="vt-author-name">{testimonials[4].name}</span>
                  <span className="vt-author-sep">•</span>
                  <span className="vt-author-role">{testimonials[4].role}</span>
                </div>
                <p className="vt-quote-text">
                  "{testimonials[4].quote}"
                </p>

                <div className="vt-controls-bar">
                  <button 
                    className={`vt-unmute-btn ${activeAudioId === testimonials[4].id ? 'active' : ''}`}
                    onClick={(e) => toggleAudio(testimonials[4].id, e)}
                  >
                    {activeAudioId === testimonials[4].id ? <Volume2 size={15} /> : <VolumeX size={15} />}
                    <span>{activeAudioId === testimonials[4].id ? 'Mute' : 'Unmute'}</span>
                  </button>
                  <button 
                    className="vt-expand-btn" 
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(testimonials[4]);
                    }}
                  >
                    <Maximize2 size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 5: Muhammad Ghattas */}
            <div 
              className="vt-card vt-card-landscape-wide"
              onClick={() => openModal(testimonials[5])}
            >
              <video
                ref={(el) => (videoRefs.current[testimonials[5].id] = el)}
                src={testimonials[5].videoSrc}
                poster={testimonials[5].posterSrc}
                autoPlay
                loop
                muted={activeAudioId !== testimonials[5].id}
                playsInline
                preload="metadata"
                className="vt-video-media"
              />

              <div className="vt-card-top-bar">
                <span className="vt-pill-badge" style={{ borderColor: `${testimonials[5].badgeColor}55`, color: testimonials[5].badgeColor }}>
                  <span className="vt-pulse-dot" style={{ background: testimonials[5].badgeColor }} />
                  {testimonials[5].badge}
                </span>
              </div>

              <div className="vt-card-bottom-overlay">
                <div className="vt-author-info">
                  <span className="vt-author-name">{testimonials[5].name}</span>
                  <span className="vt-author-sep">•</span>
                  <span className="vt-author-role">{testimonials[5].role}</span>
                </div>
                <p className="vt-quote-text">
                  "{testimonials[5].quote}"
                </p>

                <div className="vt-controls-bar">
                  <button 
                    className={`vt-unmute-btn ${activeAudioId === testimonials[5].id ? 'active' : ''}`}
                    onClick={(e) => toggleAudio(testimonials[5].id, e)}
                  >
                    {activeAudioId === testimonials[5].id ? <Volume2 size={15} /> : <VolumeX size={15} />}
                    <span>{activeAudioId === testimonials[5].id ? 'Mute' : 'Unmute'}</span>
                  </button>
                  <button 
                    className="vt-expand-btn" 
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(testimonials[5]);
                    }}
                  >
                    <Maximize2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="vt-cta-banner">
          <div className="vt-cta-left">
            <div className="vt-cta-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#ffb300" color="#ffb300" />
              ))}
            </div>
            <div className="vt-cta-title">
              READY TO BE OUR NEXT 8-FIGURE SUCCESS STORY?
            </div>
            <div className="vt-cta-subtitle">
              Book a 1-on-1 strategy diagnostic to map your brand's growth roadmap.
            </div>
          </div>

          <div className="vt-cta-right">
            <button className="btn-primary vt-action-btn" onClick={onOpenBooking}>
              <span>BOOK YOUR GROWTH CALL</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Video Modal Popup */}
      {selectedVideoModal && (
        <div className="vt-modal-backdrop" onClick={closeModal}>
          <div className="vt-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="vt-modal-close" onClick={closeModal} aria-label="Close modal">
              <X size={22} />
            </button>

            <div className="vt-modal-video-wrapper">
              <video
                src={selectedVideoModal.videoSrc}
                poster={selectedVideoModal.posterSrc}
                controls
                autoPlay
                playsInline
                className="vt-modal-video"
              />
            </div>

            <div className="vt-modal-details">
              <div className="vt-modal-meta">
                <span className="vt-pill-badge" style={{ borderColor: `${selectedVideoModal.badgeColor}66`, color: selectedVideoModal.badgeColor }}>
                  {selectedVideoModal.badge}
                </span>
                <span className="vt-modal-stats">{selectedVideoModal.stats}</span>
              </div>

              <h3 className="vt-modal-title">{selectedVideoModal.name} — {selectedVideoModal.role}</h3>
              <p className="vt-modal-quote">"{selectedVideoModal.quote}"</p>

              {selectedVideoModal.url && (
                <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-end' }}>
                  <a
                    href={selectedVideoModal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ padding: '8px 20px', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <InstagramIcon size={14} color="#fff" />
                    <span>Watch Full Post on Instagram</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
