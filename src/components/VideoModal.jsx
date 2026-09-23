import React from 'react';
import { X, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { YoutubeIcon } from './Icons';

export default function VideoModal({ video, onClose }) {
  if (!video) return null;

  const isMp4 = video.videoType === 'mp4' || (video.videoUrl && video.videoUrl.endsWith('.mp4'));
  
  const getEmbedUrl = () => {
    if (video.embedUrl) {
      return video.embedUrl.includes('?') ? `${video.embedUrl}&autoplay=1` : `${video.embedUrl}?autoplay=1&rel=0`;
    }
    if (video.videoUrl && video.videoUrl.includes('youtube.com/watch?v=')) {
      const vidId = video.videoUrl.split('v=')[1]?.split('&')[0];
      return `https://www.youtube-nocookie.com/embed/${vidId}?autoplay=1&rel=0`;
    }
    return 'https://www.youtube-nocookie.com/embed/X-L8GQjHOYA?autoplay=1&rel=0';
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-box"
        style={{ maxWidth: '880px', padding: '24px', background: '#0a0e17', border: '1px solid rgba(255, 87, 34, 0.4)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '16px', background: '#000', marginBottom: '20px' }}>
          {isMp4 ? (
            <video
              src={video.videoUrl}
              controls
              autoPlay
              playsInline
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain' }}
            />
          ) : (
            <iframe
              src={getEmbedUrl()}
              title={video.title}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <span className="badge badge-orange">{video.date || 'Masterclass'} • {video.duration}</span>
            <span style={{ fontSize: '0.85rem', color: '#ffb300', fontWeight: 700 }}>{video.host}</span>
          </div>

          <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '8px', lineHeight: 1.3 }}>
            {video.title}
          </h3>

          <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.5, margin: 0 }}>
            {video.description}
          </p>
        </div>
      </div>
    </div>
  );
}
