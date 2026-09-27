import React, { useState, useRef, useEffect } from 'react';
import { X, ExternalLink, Play, Pause, Volume2, VolumeX, ArrowRight, ShieldCheck, TrendingUp, DollarSign } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { getEnrichedInstagramData } from '../data/instagramMetadata';

export default function InstagramModal({ item: rawItem, onClose, onOpenBooking }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!rawItem) return null;

  // Enrich item with exact screenshot-matched data (revenue, ROAS, caption, title, badge)
  const item = getEnrichedInstagramData(rawItem) || rawItem;

  const hasVideo = Boolean(item.video || item.videoUrl);
  const mediaSrc = item.video || item.videoUrl || item.image;
  const posterSrc = item.image;

  const title = item.title;
  const subtitle = item.subtitle || item.category || 'Direct-Response Creative';
  const revenue = item.revenue;
  const roas = item.roas;
  const badge = item.badge;
  const caption = item.caption || item.description || item.notes;
  const instaUrl = item.instagramUrl || item.url || 'https://www.instagram.com/gauravecomm/';

  const togglePlay = (e) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e) => {
    e.stopPropagation();
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * duration;
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
      setDuration(videoRef.current.duration);
    }
  };

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(3, 1, 2, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'modalFadeIn 0.25s ease'
      }}
    >
      <div
        className="modal-box-large"
        style={{
          maxWidth: '1020px',
          width: '100%',
          maxHeight: '92vh',
          background: 'linear-gradient(160deg, #160307 0%, #0c0103 100%)',
          border: '1.5px solid rgba(255, 61, 0, 0.4)',
          borderRadius: '24px',
          boxShadow: '0 30px 90px rgba(0, 0, 0, 0.95), 0 0 50px rgba(255, 61, 0, 0.2)',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
          overflow: 'hidden',
          position: 'relative',
          animation: 'modalZoomIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top-Right Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            zIndex: 30,
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'rgba(20, 3, 6, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* LEFT COLUMN: Large High-Resolution Media Stage */}
        <div
          style={{
            position: 'relative',
            backgroundColor: '#050001',
            minHeight: '520px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            borderRight: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {/* Ambient Glowing Background Blur */}
          <img
            src={posterSrc}
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: '-20px',
              width: 'calc(100% + 40px)',
              height: 'calc(100% + 40px)',
              objectFit: 'cover',
              filter: 'blur(30px) brightness(0.28)',
              pointerEvents: 'none',
              zIndex: 1
            }}
          />

          {/* Main Media: Video or High-Resolution Picture */}
          {hasVideo ? (
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                src={item.video}
                poster={posterSrc}
                autoPlay
                playsInline
                loop
                muted={isMuted}
                onTimeUpdate={handleTimeUpdate}
                style={{
                  width: '100%',
                  height: '100%',
                  maxHeight: '85vh',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />

              {/* Centered Play/Pause Icon on Hover or Pause */}
              {!isPlaying && (
                <div
                  style={{
                    position: 'absolute',
                    zIndex: 10,
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    background: 'rgba(0, 0, 0, 0.75)',
                    border: '2px solid #ff5722',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 30px rgba(255, 87, 34, 0.4)'
                  }}
                >
                  <Play size={30} color="#ffffff" style={{ marginLeft: '4px' }} />
                </div>
              )}

              {/* Video Playback Bar Overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  zIndex: 15,
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%)',
                  padding: '24px 18px 14px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Progress Bar */}
                <div
                  style={{
                    width: '100%',
                    height: '5px',
                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    overflow: 'hidden'
                  }}
                  onClick={handleSeek}
                >
                  <div
                    style={{
                      width: `${progress}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #ff3d00, #ffb300)'
                    }}
                  />
                </div>

                {/* Control Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <button
                      onClick={togglePlay}
                      style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', padding: 0 }}
                    >
                      {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                    </button>
                    <button
                      onClick={toggleMute}
                      style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', padding: 0 }}
                    >
                      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#cbd5e1', fontWeight: 700, letterSpacing: '0.04em' }}>
                    {badge}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px'
              }}
            >
              <img
                src={posterSrc}
                alt={title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '85vh',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)'
                }}
              />
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Full Verified Proof & Breakdown Details */}
        <div
          style={{
            padding: '36px 32px 32px 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflowY: 'auto',
            maxHeight: '85vh',
            textAlign: 'left'
          }}
        >
          <div>
            {/* Top Brand Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ff5722 0%, #ff1e27 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 16px rgba(255, 61, 0, 0.4)'
                }}
              >
                <InstagramIcon size={22} color="#ffffff" />
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.01em', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>Brand Scaling Hacks</span>
                  <ShieldCheck size={16} color="#38bdf8" />
                </div>
                <div style={{ fontSize: '0.78rem', color: '#ffb300', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {subtitle}
                </div>
              </div>
            </div>

            {/* Main Title / Hook */}
            <h3
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: '1.45rem',
                fontWeight: 850,
                color: '#ffffff',
                lineHeight: 1.3,
                letterSpacing: '-0.02em',
                marginBottom: '18px'
              }}
            >
              {title}
            </h3>

            {/* Metric Highlight Badges Box */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                marginBottom: '22px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '14px 16px'
              }}
            >
              <div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.65)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <DollarSign size={12} color="#ffb300" />
                  <span>Revenue / Scale</span>
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.01em' }}>
                  {revenue}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.65)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <TrendingUp size={12} color="#ff5722" />
                  <span>Verified ROAS</span>
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#ffb300', letterSpacing: '-0.01em' }}>
                  {roas}
                </div>
              </div>
            </div>

            {/* Authentic Caption & Strategic Context */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                Strategy & Ad Breakdown:
              </div>
              <p
                style={{
                  fontSize: '0.88rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.6,
                  whiteSpace: 'pre-line',
                  margin: 0
                }}
              >
                {caption}
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <a
              href={instaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '12px 24px',
                fontSize: '0.9rem',
                fontWeight: 800,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>View Original on Instagram</span>
              <ExternalLink size={16} />
            </a>

            {onOpenBooking && (
              <button
                className="btn-secondary"
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '11px 24px',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>Scale My Brand With This System</span>
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
