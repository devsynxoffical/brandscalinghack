import React, { useState, useRef, useEffect } from 'react';

export default function InteractiveDotMatrixFooter() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const glowRef = useRef(null);

  const text = 'BRAND SCALING';
  const letters = text.split('');

  const mouseState = useRef({
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    isHovered: false,
    tiltX: 0,
    tiltY: 0
  });

  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseState.current.targetX = x;
      mouseState.current.targetY = y;
      mouseState.current.isHovered = true;

      // 3D tilt calculation
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      mouseState.current.tiltX = ((y - centerY) / centerY) * -5;
      mouseState.current.tiltY = ((x - centerX) / centerX) * 6;
    };

    const handleMouseLeave = () => {
      mouseState.current.targetX = -1000;
      mouseState.current.targetY = -1000;
      mouseState.current.isHovered = false;
      mouseState.current.tiltX = 0;
      mouseState.current.tiltY = 0;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = container.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;
        mouseState.current.targetX = x;
        mouseState.current.targetY = y;
        mouseState.current.isHovered = true;
      }
    };

    const handleTouchEnd = () => {
      mouseState.current.targetX = -1000;
      mouseState.current.targetY = -1000;
      mouseState.current.isHovered = false;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd);

    // High-performance smooth animation loop (60/120fps)
    const animate = () => {
      const state = mouseState.current;
      // Spring interpolation
      state.x += (state.targetX - state.x) * 0.18;
      state.y += (state.targetY - state.y) * 0.18;

      if (container) {
        container.style.setProperty('--cursor-x', `${state.x.toFixed(1)}px`);
        container.style.setProperty('--cursor-y', `${state.y.toFixed(1)}px`);
        container.style.setProperty('--cursor-opacity', state.isHovered ? '1' : '0');
        container.style.setProperty('--tilt-x', `${state.tiltX.toFixed(2)}deg`);
        container.style.setProperty('--tilt-y', `${state.tiltY.toFixed(2)}deg`);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="footer-interactive-brand-container"
      style={{
        position: 'relative',
        width: '100%',
        padding: '70px 0 35px 0',
        overflow: 'hidden',
        textAlign: 'center',
        userSelect: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1200px',
        cursor: 'default'
      }}
    >
      {/* Dynamic Cursor Reactive Plasma Glow Orb */}
      <div
        ref={glowRef}
        className="footer-brand-cursor-glow"
        aria-hidden="true"
      />

      {/* 3D Tilted Interactive Typography Stage */}
      <div className="footer-brand-3d-stage">
        {/* Base Layer: Dark Luxury Metallic Titanium Typography */}
        <h2 className="footer-brand-base-text" aria-hidden="true">
          {letters.map((char, index) => (
            <span
              key={`base-${index}`}
              className="footer-letter-span"
              style={{
                display: 'inline-block',
                marginRight: char === ' ' ? '0.35em' : '0',
                transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h2>

        {/* Illuminated Foreground Layer (Masked Directly to Cursor Coordinates) */}
        <h2 className="footer-brand-illuminated-text">
          {letters.map((char, index) => (
            <span
              key={`illum-${index}`}
              className="footer-letter-span"
              style={{
                display: 'inline-block',
                marginRight: char === ' ' ? '0.35em' : '0',
                transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
}
