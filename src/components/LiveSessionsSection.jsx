import React, { useState } from 'react';
import { Play, ArrowUpRight, Maximize2, Sparkles, Radio } from 'lucide-react';
import { liveSessionsData } from '../data/mockData';

export default function LiveSessionsSection({ onOpenVideo }) {
  const [selectedSession, setSelectedSession] = useState(liveSessionsData[0]);
  const [isPlayingInline, setIsPlayingInline] = useState(false);

  const handleSelectSession = (session) => {
    setSelectedSession(session);
    setIsPlayingInline(true);
  };

  const isMp4 = selectedSession.videoType === 'mp4' || (selectedSession.videoUrl && selectedSession.videoUrl.endsWith('.mp4'));

  const getEmbedUrl = () => {
    if (selectedSession.embedUrl) {
      return selectedSession.embedUrl.includes('?')
        ? `${selectedSession.embedUrl}&autoplay=1&rel=0`
        : `${selectedSession.embedUrl}?autoplay=1&rel=0`;
    }
    if (selectedSession.videoUrl && selectedSession.videoUrl.includes('youtube.com/watch?v=')) {
      const vidId = selectedSession.videoUrl.split('v=')[1]?.split('&')[0];
      return `https://www.youtube-nocookie.com/embed/${vidId}?autoplay=1&rel=0`;
    }
    return 'https://www.youtube-nocookie.com/embed/6beGKoXuDKg?autoplay=1&rel=0';
  };

  return (
    <section className="videos-section-theater">
      <div className="theater-glow-orb"></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(234, 88, 12, 0.15)', border: '1px solid rgba(234, 88, 12, 0.35)', padding: '5px 12px', borderRadius: '9999px', color: '#fb923c', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.08em', marginBottom: '8px', textTransform: 'uppercase' }}>
              <Radio size={14} className="animate-pulse" />
              <span>LIVE MASTERCLASSES &amp; PODCAST BREAKDOWNS</span>
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>
              Live Sessions <span style={{ color: '#ff5722' }}>&amp; Breakdowns</span>
            </h2>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', fontWeight: 600 }}>
            <Sparkles size={16} color="#fbbf24" />
            <span>Over 7+ Hours of Deep Strategic Frameworks</span>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="videos-layout-grid">
          {/* Left Column: Playlist */}
          <div className="video-sidebar-playlist">
            {liveSessionsData.map((session, idx) => (
              <div
                key={session.id}
                className={`video-playlist-item ${selectedSession.id === session.id ? 'active' : ''}`}
                onClick={() => handleSelectSession(session)}
              >
                <div className="video-thumb-mini">
                  <img src={session.thumbnail} alt={session.title} />
                  <div className="video-thumb-overlay">
                    <div className="mini-play-circle">
                      <Play size={13} fill="#ffffff" color="#ffffff" style={{ marginLeft: '2px' }} />
                    </div>
                  </div>
                  <span className="mini-duration-pill">{session.duration}</span>
                </div>

                <div className="video-item-meta">
                  <div className="video-item-title">{session.title}</div>
                  <div className="video-item-author">
                    <span className="live-dot-badge">●</span>
                    <span>{(session.host || session.instructor || 'Gaurav Kapoor').split('•')[0].trim()}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom Orange-Red Pill Button */}
            <button
              onClick={() => onOpenVideo(selectedSession)}
              className="btn-theater-all-videos"
            >
              <span>Watch All Sessions</span>
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
                    {/* Ambient Blurred Backdrop */}
                    <div
                      className="main-player-bg-ambient"
                      style={{ backgroundImage: `url(${selectedSession.thumbnail})` }}
                    />
                    
                    {/* Crisp Fitted Image Container */}
                    <img
                      src={selectedSession.thumbnail}
                      alt={selectedSession.title}
                      onClick={() => setIsPlayingInline(true)}
                      style={{ cursor: 'pointer', width: '100%', height: '100%', objectFit: 'contain', position: 'relative', zIndex: 2 }}
                    />

                    {/* Glowing Vibrant Play Button */}
                    <button
                      type="button"
                      className="player-play-btn"
                      onClick={() => setIsPlayingInline(true)}
                      aria-label="Play video"
                    >
                      <Play size={34} fill="#ffffff" color="#ffffff" style={{ marginLeft: '4px' }} />
                    </button>

                    {/* Duration Badge */}
                    <div className="player-duration-badge">
                      ⏱ {selectedSession.duration}
                    </div>

                    {/* Expand/Modal Button in top left */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenVideo(selectedSession);
                      }}
                      title="Open in Theatre Modal"
                      className="btn-theatre-fullview"
                    >
                      <Maximize2 size={14} />
                      <span>Full View Theater</span>
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
                    src="/team/gaurav.webp"
                    alt="Host"
                    onError={(e) => { e.target.src = '/assets/gaurav_portrait.webp'; }}
                  />
                </div>
                <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.94rem' }}>
                  {selectedSession?.host || selectedSession?.instructor || 'Gaurav Kapoor • Live Session'}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>•</span>
                <span style={{ color: '#fb923c', fontSize: '0.88rem', fontWeight: 700 }}>
                  {selectedSession?.date || 'Official Stream'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
