import React, { useState } from 'react';
import { Play, ArrowUpRight, Maximize2 } from 'lucide-react';
import { liveSessionsData } from '../data/mockData';

export default function LiveSessionsSection({ onOpenVideo }) {
  const [selectedSession, setSelectedSession] = useState(liveSessionsData[0]);
  const [isPlayingInline, setIsPlayingInline] = useState(false);

  const handleSelectSession = (session) => {
    setSelectedSession(session);
    setIsPlayingInline(false);
  };

  const isMp4 = selectedSession.videoType === 'mp4' || (selectedSession.videoUrl && selectedSession.videoUrl.endsWith('.mp4'));

  const getEmbedUrl = () => {
    if (selectedSession.embedUrl) {
      return selectedSession.embedUrl.includes('?') ? `${selectedSession.embedUrl}&autoplay=1` : `${selectedSession.embedUrl}?autoplay=1&rel=0`;
    }
    if (selectedSession.videoUrl && selectedSession.videoUrl.includes('youtube.com/watch?v=')) {
      const vidId = selectedSession.videoUrl.split('v=')[1]?.split('&')[0];
      return `https://www.youtube-nocookie.com/embed/${vidId}?autoplay=1&rel=0`;
    }
    return 'https://www.youtube-nocookie.com/embed/X-L8GQjHOYA?autoplay=1&rel=0';
  };

  return (
    <section className="videos-section-theater">
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>
            Videos
          </h2>
          <span style={{ fontSize: '0.82rem', color: '#ffb300', fontWeight: 800, letterSpacing: '0.08em' }}>
            LIVE MASTERCLASSES & PODCAST BREAKDOWNS
          </span>
        </div>

        {/* Grid Layout */}
        <div className="videos-layout-grid">
          {/* Left Column: Playlist */}
          <div className="video-sidebar-playlist">
            {liveSessionsData.map((session) => (
              <div
                key={session.id}
                className={`video-playlist-item ${selectedSession.id === session.id ? 'active' : ''}`}
                onClick={() => handleSelectSession(session)}
              >
                <div className="video-thumb-mini">
                  <img src={session.thumbnail} alt={session.title} />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(0,0,0,0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Play size={16} fill="#fff" color="#fff" />
                  </div>
                </div>

                <div className="video-item-meta">
                  <div className="video-item-title">{session.title}</div>
                  <div className="video-item-author">
                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '18px', height: '18px', borderRadius: '50%', background: '#0284c7', color: '#fff', fontSize: '0.65rem' }}>
                      ▶
                    </span>
                    <span>{session.host.split('•')[0]} • {session.duration}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom Green Pill Button */}
            <button
              onClick={() => onOpenVideo(selectedSession)}
              style={{
                width: '100%',
                background: '#16a34a',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '0.92rem',
                padding: '14px',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '10px',
                transition: 'all 0.25s ease',
                boxShadow: '0 4px 15px rgba(22, 163, 74, 0.4)',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <span>All Videos</span>
              <ArrowUpRight size={18} />
            </button>
          </div>

          {/* Right Column: Main Featured Video Cinema Player */}
          <div className="main-player-wrapper">
            <div className="main-player-card">
              <div className="main-player-screen">
                {isPlayingInline ? (
                  isMp4 ? (
                    <video
                      src={selectedSession.videoUrl}
                      controls
                      autoPlay
                      playsInline
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        background: '#000000',
                        position: 'relative',
                        zIndex: 10
                      }}
                    />
                  ) : (
                    <iframe
                      src={getEmbedUrl()}
                      title={selectedSession.title}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 0,
                        zIndex: 10,
                        background: '#000000'
                      }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )
                ) : (
                  <>
                    {/* Ambient Blurred Backdrop for seamless box fit */}
                    <div
                      className="main-player-bg-ambient"
                      style={{ backgroundImage: `url(${selectedSession.thumbnail})` }}
                    />
                    
                    {/* Crisp Fitted Image Container */}
                    <img
                      src={selectedSession.thumbnail}
                      alt={selectedSession.title}
                      onClick={() => setIsPlayingInline(true)}
                      style={{ cursor: 'pointer' }}
                    />

                    {/* White Play Button with Black Arrow */}
                    <button
                      type="button"
                      className="player-play-btn"
                      onClick={() => setIsPlayingInline(true)}
                      aria-label="Play video"
                    >
                      <Play size={30} fill="#000000" color="#000000" style={{ marginLeft: '4px' }} />
                    </button>

                    {/* Duration Badge */}
                    <div className="player-duration-badge">
                      {selectedSession.duration}
                    </div>

                    {/* Expand/Modal Button in top left */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenVideo(selectedSession);
                      }}
                      title="Open in Theatre Modal"
                      style={{
                        position: 'absolute',
                        top: '16px',
                        left: '16px',
                        background: 'rgba(0, 0, 0, 0.75)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        padding: '6px 10px',
                        color: '#fff',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        cursor: 'pointer',
                        zIndex: 10,
                        backdropFilter: 'blur(8px)'
                      }}
                    >
                      <Maximize2 size={14} />
                      <span>Full View</span>
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Below Player Headline & Metadata */}
            <div className="main-player-external-info">
              <h3 className="main-player-title-big">{selectedSession.title}</h3>
              <div className="main-player-host-line">
                <div className="host-icon-badge">
                  <img
                    src="/team/gaurav.jpeg"
                    alt="Host"
                    onError={(e) => { e.target.src = '/assets/gaurav_portrait.jpg'; }}
                  />
                </div>
                <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.92rem' }}>{selectedSession.host}</span>
                <span style={{ color: '#64748b' }}>•</span>
                <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{selectedSession.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
