import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function InstagramModal({ item, onClose }) {
  if (!item) return null;

  // Extract post code from URL
  const getEmbedUrl = (url) => {
    // If it ends with /, append embed
    const cleanUrl = url.split('?')[0].replace(/\/$/, '');
    return `${cleanUrl}/embed/captioned/`;
  };

  return (
    <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 1000 }}>
      <div
        className="modal-box"
        style={{
          maxWidth: '520px',
          width: '95%',
          padding: '24px',
          background: '#0c1017',
          border: '1px solid rgba(255, 87, 34, 0.4)',
          borderRadius: '24px',
          boxShadow: '0 25px 70px rgba(0,0,0,0.95)',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #f58529, #dd2a7b, #8134af)', color: '#fff' }}>
              <InstagramIcon size={18} color="#fff" />
            </span>
            <div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#fff' }}>{item.title || item.brand}</div>
              <div style={{ fontSize: '0.78rem', color: '#ff7043', fontWeight: 700 }}>{item.badge} • {item.revenue}</div>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              color: '#94a3b8',
              background: 'rgba(255,255,255,0.06)',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Live Instagram Embed Iframe */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '560px',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#000',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <iframe
            src={getEmbedUrl(item.url)}
            title={item.brand}
            style={{
              width: '100%',
              height: '100%',
              border: 0,
              display: 'block'
            }}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Modal Footer Actions */}
        <div
          style={{
            marginTop: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
            Attributable ROAS: <strong style={{ color: '#4ade80' }}>{item.roas}</strong>
          </div>

          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '8px 20px', fontSize: '0.82rem' }}
          >
            <span>Open in Instagram</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
