import React, { useRef, useEffect, useState } from 'react';

export default function InteractiveDotMatrixFooter({ 
  line1 = "9 FIGURES", 
  line2 = "SCALING" 
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [activePhrase, setActivePhrase] = useState({ l1: line1, l2: line2 });

  useEffect(() => {
    setActivePhrase({ l1: line1, l2: line2 });
  }, [line1, line2]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let dots = [];
    let baseDots = [];
    const DURATION_MS = 320;
    const BASE_RADIUS = 1.15;
    let scaledRadius = BASE_RADIUS;
    let hitRadiusSq = 0;

    // 1. Offscreen Generator to create crisp dot matrix from text
    const generateDotsFromText = (t1, t2) => {
      const offCanvas = document.createElement('canvas');
      const offW = 340;
      const offH = 120;
      offCanvas.width = offW;
      offCanvas.height = offH;
      const offCtx = offCanvas.getContext('2d');
      if (!offCtx) return [];

      offCtx.fillStyle = '#000000';
      offCtx.fillRect(0, 0, offW, offH);

      offCtx.fillStyle = '#ffffff';
      offCtx.textAlign = 'center';
      offCtx.textBaseline = 'middle';
      
      // Heavy bold condensed typography for impactful dot matrix
      offCtx.font = '950 48px "Montserrat", "Impact", "Arial Black", "Plus Jakarta Sans", sans-serif';

      // Draw two centered lines
      if (t2) {
        offCtx.fillText(t1.toUpperCase(), offW / 2, 38);
        offCtx.fillText(t2.toUpperCase(), offW / 2, 88);
      } else {
        offCtx.fillText(t1.toUpperCase(), offW / 2, offH / 2);
      }

      const imgData = offCtx.getImageData(0, 0, offW, offH).data;
      const step = 2.85;
      const coords = [];

      for (let y = 4; y < offH - 4; y += step) {
        for (let x = 4; x < offW - 4; x += step) {
          const pixelIndex = (Math.floor(y) * offW + Math.floor(x)) * 4;
          const r = imgData[pixelIndex];
          if (r > 120) {
            coords.push({
              relX: x / offW,
              relY: y / offH
            });
          }
        }
      }

      return coords;
    };

    const relativeCoords = generateDotsFromText(activePhrase.l1, activePhrase.l2, 320, 110);

    const render = (now) => {
      const dpr = window.devicePixelRatio || 1;
      const w = container.clientWidth;
      const h = container.clientHeight;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      // Draw background base dots (amber/fire glow)
      ctx.fillStyle = 'rgba(255, 87, 34, 0.42)';
      ctx.shadowBlur = 0;
      for (let dot of baseDots) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, scaledRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw highlighted glowing dots from mouse interaction
      let hasActive = false;
      for (let dot of dots) {
        if (dot.offAt > now) {
          const progress = (dot.offAt - now) / DURATION_MS;
          const alpha = Math.max(0, Math.min(1, progress));

          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = 'rgba(255, 170, 0, 0.9)';
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, scaledRadius * 1.25, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();

          hasActive = true;
        }
      }

      return hasActive;
    };

    const loop = (now) => {
      const active = render(now);
      if (active) {
        animId = requestAnimationFrame(loop);
      } else {
        animId = 0;
        render(0);
      }
    };

    const startLoop = () => {
      if (!animId) {
        animId = requestAnimationFrame(loop);
      }
    };

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w < 8 || h < 8) return;

      const dpr = window.devicePixelRatio || 1;
      const pixelW = Math.round(w * dpr);
      const pixelH = Math.round(h * dpr);

      if (canvas.width !== pixelW || canvas.height !== pixelH) {
        canvas.width = pixelW;
        canvas.height = pixelH;
      }

      scaledRadius = Math.max(1.1, (w / 320) * 1.15 * 0.95);
      const hitRadius = (w / 320) * 5.2;
      hitRadiusSq = hitRadius * hitRadius;

      baseDots = relativeCoords.map((d) => ({
        x: d.relX * w,
        y: d.relY * h
      }));

      dots = baseDots.map((d) => ({
        x: d.x,
        y: d.y,
        offAt: 0
      }));

      if (animId) cancelAnimationFrame(animId);
      animId = 0;
      render(0);
    };

    const handlePointerMove = (e) => {
      if (dots.length === 0) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const offTime = performance.now() + DURATION_MS;

      let triggered = false;
      for (let dot of dots) {
        const dx = dot.x - mouseX;
        const dy = dot.y - mouseY;
        if (dx * dx + dy * dy < hitRadiusSq) {
          dot.offAt = offTime;
          triggered = true;
        }
      }

      if (triggered) {
        startLoop();
      }
    };

    handleResize();

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerenter', handlePointerMove);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerenter', handlePointerMove);
    };
  }, [activePhrase]);

  return (
    <div
      ref={containerRef}
      className="st-footer-logo"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1380px',
        height: 'clamp(140px, 18vw, 240px)',
        margin: '2rem auto 2.5rem auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'crosshair',
        userSelect: 'none'
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      />
    </div>
  );
}
