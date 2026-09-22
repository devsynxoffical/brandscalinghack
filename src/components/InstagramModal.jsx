import React, { useState, useRef, useEffect } from 'react';
import { X, ExternalLink, Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function InstagramModal({ item, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  if (!item) return null;

  // Video path or fallback
  const videoSrc = item.video || `/assets/instagram_videos/${item.id}.mp4`;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
        setDuration(video.duration);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('ended', handleEnded);
    };
  }, [videoSrc]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e) => {
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * duration;
  };

  return (
    <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 1000, backdropFilter: 'blur(12px)' }}>
      <div
        className="modal-box"
        style={{
          maxWidth: '520px',
          width: '95%',
          padding: '20px',
          background: '#0a0d14',
          border: '1px solid rgba(255, 87, 34, 0.35)',
          borderRadius: '24px',
          boxShadow: '0 30px 90px rgba(0,0,0,0.95), 0 0 40px rgba(255,87,34,0.15)',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '34px', height: '34px', borderRadius: '50%', background: 'linear-gradient(135deg, #f58529, #dd2a7b, #8134af)', color: '#fff', boxShadow: '0 4px 12px rgba(221,42,123,0.3)' }}>
              <InstagramIcon size={18} color="#fff" />
            </span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.01em' }}>{item.title || item.brand}</div>
              <div style={{ fontSize: '0.75rem', color: '#ff7043', fontWeight: 700 }}>{item.badge} • {item.roas}</div>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              color: '#94a3b8',
              background: 'rgba(255,255,255,0.06)',
              border: 'none',
              borderRadius: '50%',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Video Player Container */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '480px',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#000',
            border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={togglePlay}
        >
          {/* Ambient blurred backdrop */}
          <img
            src={item.image}
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'blur(30px) brightness(0.4)',
              transform: 'scale(1.2)',
              pointerEvents: 'none'
            }}
          />

          <video
            ref={videoRef}
            src={videoSrc}
            poster={item.image}
            autoPlay
            playsInline
            muted={isMuted}
            style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              cursor: 'pointer'
            }}
            onError={(e) => {
              // If video hasn't finished downloading yet, fallback gracefully
              console.log('Video loading fallback to poster image');
            }}
          />

          {/* Floating Big Play Button if Paused */}
          {!isPlaying && (
            <div
              style={{
                position: 'absolute',
                zIndex: 10,
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.65)',
                border: '2px solid rgba(255,87,34,0.8)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0,0,0,0.6)'
              }}
            >
              <Play size={28} color="#ff7043" style={{ marginLeft: '4px' }} />
            </div>
          )}

          {/* Video Controls Bar Overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 10,
              background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)',
              padding: '16px 14px 10px 14px',
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
                height: '4px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '2px',
                cursor: 'pointer',
                position: 'relative'
              }}
              onClick={handleSeek}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #ff5722, #ff7043)',
                  borderRadius: '2px'
                }}
              />
            </div>

            {/* Bottom buttons */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button
                  onClick={togglePlay}
                  style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 0 }}
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>
                <button
                  onClick={toggleMute}
                  style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 0 }}
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
              </div>

              <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 600 }}>
                {item.category}
              </span>
            </div>
          </div>
        </div>

        {/* Video Description */}
        <div style={{ marginTop: '12px', textAlign: 'left' }}>
          <p
            style={{
              fontSize: '0.82rem',
              color: '#94a3b8',
              lineHeight: 1.5,
              maxHeight: '68px',
              overflowY: 'auto',
              margin: 0
            }}
          >
            {item.description}
          </p>
        </div>

        {/* Modal Footer Actions */}
        <div
          style={{
            marginTop: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px'
          }}
        >
          <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>
            Verified ROAS: <strong style={{ color: '#4ade80' }}>{item.roas}</strong>
          </div>

          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '8px 18px', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <span>Open on Instagram</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
