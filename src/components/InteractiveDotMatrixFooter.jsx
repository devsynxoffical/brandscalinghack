import React from 'react';

export default function InteractiveDotMatrixFooter() {
  return (
    <div
      className="footer-bold-brand-wrap"
      style={{
        width: '100%',
        padding: '50px 0 20px 0',
        overflow: 'hidden',
        textAlign: 'center',
        userSelect: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h2
        className="footer-bold-brand-text"
        style={{
          margin: 0,
          padding: 0,
          fontFamily: '"Space Grotesk", "Impact", "Inter", -apple-system, sans-serif',
          fontSize: 'clamp(2.8rem, 10.5vw, 12rem)',
          fontWeight: 950,
          letterSpacing: '-0.035em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          lineHeight: 0.88,
          background: 'linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.45) 75%, rgba(255, 87, 34, 0.35) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 15px 35px rgba(0, 0, 0, 0.9))',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          cursor: 'default',
          width: '100%',
          display: 'block'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = 'drop-shadow(0 0 45px rgba(255, 87, 34, 0.55)) drop-shadow(0 15px 35px rgba(0, 0, 0, 0.9))';
          e.currentTarget.style.transform = 'scale(1.015)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = 'drop-shadow(0 15px 35px rgba(0, 0, 0, 0.9))';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        BRAND SCALING
      </h2>
    </div>
  );
}
