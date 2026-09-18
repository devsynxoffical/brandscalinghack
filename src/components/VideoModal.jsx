import React from 'react';
import { X, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { YoutubeIcon } from './Icons';

export default function VideoModal({ video, onClose }) {
  if (!video) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-box"
        style={{ maxWidth: '850px', padding: '24px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '16px', background: '#000', marginBottom: '20px' }}>
          <iframe
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
            title={video.title}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <span className="badge badge-orange">{video.date} • {video.duration}</span>
            <span style={{ fontSize: '0.85rem', color: '#ffb300', fontWeight: 700 }}>{video.host}</span>
          </div>

          <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '8px' }}>
            {video.title}
          </h3>

          <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.5 }}>
            {video.description}
          </p>
        </div>
      </div>
    </div>
  );
}
