import React from 'react';

export default function BrandLogo({ size = 'default', showSubtext = true, className = '' }) {
  const isSmall = size === 'small';
  const isLarge = size === 'large';

  const iconWidth = isSmall ? 28 : isLarge ? 42 : 34;
  const iconHeight = isSmall ? 28 : isLarge ? 42 : 34;

  return (
    <div className={`brandscaling-logo-wrap ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: isSmall ? '10px' : '12px', userSelect: 'none' }}>
      
      {/* 1. Custom Geometric Flame Ascension Emblem (SVG) */}
      <svg
        width={iconWidth}
        height={iconHeight}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="brandscaling-emblem-svg"
        style={{ flexShrink: 0, filter: 'drop-shadow(0 4px 14px rgba(255, 87, 34, 0.45))' }}
      >
        <defs>
          <linearGradient id="bsFlameGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d84315" />
            <stop offset="50%" stopColor="#ff5722" />
            <stop offset="100%" stopColor="#ff8a65" />
          </linearGradient>
          
          <linearGradient id="bsFlameGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#ffab91" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="bsDarkShade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#bf360c" />
            <stop offset="100%" stopColor="#ff3d00" />
          </linearGradient>
        </defs>

        {/* Outer Hex-Facet Frame with Dynamic Scale Notch */}
        <path
          d="M22 2L39 12V32L22 42L5 32V12L22 2Z"
          fill="url(#bsDarkShade)"
          opacity="0.18"
        />

        {/* Outer Glow Outline */}
        <path
          d="M22 2L39 12V32L22 42L5 32V12L22 2Z"
          stroke="url(#bsFlameGrad1)"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />

        {/* Ascending Geometric Chevrons / "B & S" Flame Layers */}
        {/* Left 'B' Architecture Wing */}
        <path
          d="M13 30V14H22C24.5 14 26.5 15.5 26.5 18C26.5 19.8 25.2 21.2 23.5 21.7C25.8 22.2 27.5 24 27.5 26.5C27.5 29 25.2 30 22.5 30H13Z"
          fill="url(#bsFlameGrad1)"
        />

        {/* Inner Cutouts forming geometric B & S Growth Facets */}
        <path
          d="M17 17.5H21.5C22.6 17.5 23.2 18.1 23.2 19C23.2 19.9 22.6 20.5 21.5 20.5H17V17.5Z"
          fill="#05070c"
        />
        <path
          d="M17 23.5H22C23.2 23.5 24 24.2 24 25.2C24 26.2 23.2 27 22 27H17V23.5Z"
          fill="#05070c"
        />

        {/* Rising Diagonal Scale Beam (Growth Spear) */}
        <path
          d="M28 12L35 6L33 16L38 15L28 29L30 19L24 21L28 12Z"
          fill="url(#bsFlameGrad2)"
          filter="drop-shadow(0 0 6px rgba(255,255,255,0.8))"
        />
      </svg>

      {/* 2. Modern Luxury Wordmark */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', lineHeight: 1 }}>
          <span
            style={{
              fontFamily: 'var(--font-primary, "Space Grotesk", sans-serif)',
              fontSize: isSmall ? '1.15rem' : isLarge ? '1.65rem' : '1.38rem',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              textTransform: 'uppercase'
            }}
          >
            BRAND
          </span>
          <span
            style={{
              fontFamily: 'var(--font-primary, "Space Grotesk", sans-serif)',
              fontSize: isSmall ? '1.15rem' : isLarge ? '1.65rem' : '1.38rem',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              background: 'linear-gradient(135deg, #ff7a50 0%, #ff5722 55%, #ea580c 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textTransform: 'uppercase',
              marginLeft: '2px'
            }}
          >
            SCALING
          </span>
        </div>

        {/* Subtitle Tag */}
        {showSubtext && (
          <div
            style={{
              fontFamily: 'var(--font-primary, "Space Grotesk", sans-serif)',
              fontSize: isSmall ? '0.55rem' : isLarge ? '0.68rem' : '0.60rem',
              fontWeight: 800,
              letterSpacing: '0.22em',
              color: 'rgba(255, 255, 255, 0.55)',
              textTransform: 'uppercase',
              marginTop: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <span>DTC GROWTH ENGINE</span>
          </div>
        )}
      </div>

    </div>
  );
}
