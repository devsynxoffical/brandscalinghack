import React, { useState } from 'react';
import { Play, ArrowUpRight } from 'lucide-react';
import { YoutubeIcon } from './Icons';
import { liveSessionsData } from '../data/mockData';

export default function LiveSessionsSection({ onOpenVideo }) {
  const [selectedSession, setSelectedSession] = useState(liveSessionsData[0]);

  return (
    <section className="videos-section-theater">
      <div className="container">
        {/* Screenshot 4 Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>
            Videos
          </h2>
          <span style={{ fontSize: '0.82rem', color: '#ffb300', fontWeight: 800, letterSpacing: '0.08em' }}>
            LIVE MASTERCLASSES & PODCAST BREAKDOWNS
          </span>
        </div>

        {/* Screenshot 4 Grid Layout */}
        <div className="videos-layout-grid">
          {/* Left Column: Playlist */}
          <div className="video-sidebar-playlist">
            {liveSessionsData.map((session) => (
              <div
                key={session.id}
                className={`video-playlist-item ${selectedSession.id === session.id ? 'active' : ''}`}
                onClick={() => setSelectedSession(session)}
              >
                <div className="video-thumb-mini">
                  <img src={session.thumbnail} alt={session.title} />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(0,0,0,0.3)',
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

            {/* Screenshot 4 Bottom Green Pill Button */}
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
                boxShadow: '0 4px 15px rgba(22, 163, 74, 0.4)'
              }}
            >
              <span>All Videos</span>
              <ArrowUpRight size={18} />
            </button>
          </div>

          {/* Right Column: Main Featured Video Cinema Player (Screenshot 4) */}
          <div className="main-player-wrapper">
            <div className="main-player-card">
              <div className="main-player-screen" onClick={() => onOpenVideo(selectedSession)} style={{ cursor: 'pointer' }}>
                <img src={selectedSession.thumbnail} alt={selectedSession.title} />
                <div className="player-geo-pattern"></div>

                {/* White Play Button with Black Arrow (Screenshot 4) */}
                <div className="player-play-btn">
                  <Play size={30} fill="#000000" color="#000000" style={{ marginLeft: '4px' }} />
                </div>

                {/* Duration Badge */}
                <div className="player-duration-badge">
                  {selectedSession.duration}
                </div>
              </div>
            </div>

            {/* Below Player Headline & Metadata (Screenshot 4 Exact Match) */}
            <div className="main-player-external-info">
              <h3 className="main-player-title-big">{selectedSession.title}</h3>
              <div className="main-player-host-line">
                <div className="host-icon-badge">
                  <img src="/assets/gaurav_portrait.jpg" alt="Host" />
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
