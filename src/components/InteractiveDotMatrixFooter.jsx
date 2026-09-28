import React, { useRef, useState, useEffect } from 'react';

export default function InteractiveDotMatrixFooter({ 
  line1 = "9 FIGURES", 
  line2 = "SCALING" 
}) {
  const containerRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 50, y: 50, isHovered: false, tiltX: 0, tiltY: 0 });

  const handlePointerMove = (e) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const clientX = e.clientX ?? (e.touches && e.touches[0]?.clientX);
    const clientY = e.clientY ?? (e.touches && e.touches[0]?.clientY);
    if (clientX === undefined || clientY === undefined) return;

    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    // Subtle 3D perspective tilt
    const tiltY = ((x - 50) / 50) * 4.5;
    const tiltX = -((y - 50) / 50) * 4.5;

    setCursor({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
      tiltX,
      tiltY,
      isHovered: true
    });
  };

  const handlePointerLeave = () => {
    setCursor((prev) => ({ ...prev, isHovered: false, tiltX: 0, tiltY: 0 }));
  };

  return (
    <div
      ref={containerRef}
      className="st-footer-wordmark-wrapper"
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        '--cursor-x': `${cursor.x}%`,
        '--cursor-y': `${cursor.y}%`,
        '--tilt-x': `${cursor.tiltX}deg`,
        '--tilt-y': `${cursor.tiltY}deg`
      }}
    >
      {/* Ambient Cursor Light Behind Text */}
      <div 
        className={`st-footer-spotlight-bg ${cursor.isHovered ? 'active' : ''}`} 
        aria-hidden="true" 
      />

      {/* 3D Tilted Typography Stage */}
      <div className="st-footer-wordmark-stage">
        {/* Layer 1: Crisp Base Lettering with Ember Stroke */}
        <div className="st-footer-text-layer st-footer-base-text" aria-hidden="true">
          <span className="st-wordmark-line line-1">{line1}</span>
          <span className="st-wordmark-line line-2">{line2}</span>
        </div>

        {/* Layer 2: Real-time Cursor Illuminated Spotlight Gradient */}
        <div className="st-footer-text-layer st-footer-glow-text">
          <span className="st-wordmark-line line-1">{line1}</span>
          <span className="st-wordmark-line line-2">{line2}</span>
        </div>
      </div>
    </div>
  );
}
