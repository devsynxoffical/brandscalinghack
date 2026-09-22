import React, { useRef, useEffect } from 'react';

export default function InteractiveDotMatrixFooter() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let dots = [];
    const mouse = { x: -2000, y: -2000, targetX: -2000, targetY: -2000, active: false };

    const initDots = () => {
      const rect = container.getBoundingClientRect();
      const width = Math.max(rect.width || 0, window.innerWidth || 1200);
      const isMobile = width < 768;
      const height = isMobile ? 380 : 520;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      // Offscreen canvas for precise bold pixel sampling
      const offscreen = document.createElement('canvas');
      offscreen.width = width;
      offscreen.height = height;
      const offCtx = offscreen.getContext('2d');

      const line1 = 'BRAND';
      const line2 = 'SCALING';

      const fontFamily = '"Impact", "Arial Black", "Cabinet Grotesk", "Space Grotesk", sans-serif';

      // Measure line 1 & line 2 to scale to 96% full container width
      offCtx.font = `950 100px ${fontFamily}`;
      const m1 = offCtx.measureText(line1).width;
      const m2 = offCtx.measureText(line2).width;

      const targetWidth1 = width * (isMobile ? 0.94 : 0.96);
      const targetWidth2 = width * (isMobile ? 0.95 : 0.98);

      const f1 = 100 * (targetWidth1 / m1);
      const f2 = 100 * (targetWidth2 / m2);

      offCtx.fillStyle = '#ffffff';
      offCtx.textAlign = 'center';
      offCtx.textBaseline = 'middle';

      // Render Line 1 ("BRAND")
      offCtx.font = `950 ${f1}px ${fontFamily}`;
      const y1 = height * 0.28;
      offCtx.fillText(line1, width / 2, y1);

      // Render Line 2 ("SCALING")
      offCtx.font = `950 ${f2}px ${fontFamily}`;
      const y2 = height * 0.74;
      offCtx.fillText(line2, width / 2, y2);

      // Sample pixels with dense grid to form thick, prominent dots (StreetTalk reference match)
      const imgData = offCtx.getImageData(0, 0, width, height).data;
      const spacing = isMobile ? 12 : 16;
      const newDots = [];

      for (let y = 0; y < height; y += spacing) {
        for (let x = 0; x < width; x += spacing) {
          const index = (y * width + x) * 4;
          const alpha = imgData[index + 3];

          if (alpha > 60) {
            newDots.push({
              x,
              y,
              baseRadius: isMobile ? 4.8 : 6.8,
              currentRadius: isMobile ? 4.8 : 6.8,
              maxRadius: isMobile ? 12.5 : 18.5,
              glowIntensity: 0
            });
          }
        }
      }

      dots = newDots;
    };

    if (document.fonts) {
      document.fonts.ready.then(() => {
        initDots();
      });
    } else {
      setTimeout(initDots, 50);
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -2000;
      mouse.targetY = -2000;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.targetX = e.touches[0].clientX - rect.left;
        mouse.targetY = e.touches[0].clientY - rect.top;
        mouse.active = true;
      }
    };

    const handleTouchEnd = () => {
      mouse.active = false;
      mouse.targetX = -2000;
      mouse.targetY = -2000;
    };

    const containerEl = container;
    containerEl.addEventListener('mousemove', handleMouseMove);
    containerEl.addEventListener('mouseleave', handleMouseLeave);
    containerEl.addEventListener('touchmove', handleTouchMove, { passive: true });
    containerEl.addEventListener('touchend', handleTouchEnd);

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        initDots();
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    const EFFECT_RADIUS = 180;

    const render = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.22;
      mouse.y += (mouse.targetY - mouse.y) * 0.22;

      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let targetRadius = dot.baseRadius;
        let targetGlow = 0;

        if (dist < EFFECT_RADIUS) {
          const factor = Math.cos((dist / EFFECT_RADIUS) * (Math.PI / 2));
          targetRadius = dot.baseRadius + (dot.maxRadius - dot.baseRadius) * factor;
          targetGlow = factor;
        }

        dot.currentRadius += (targetRadius - dot.currentRadius) * 0.25;
        dot.glowIntensity += (targetGlow - dot.glowIntensity) * 0.25;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, Math.max(0.5, dot.currentRadius), 0, Math.PI * 2);

        if (dot.glowIntensity > 0.04) {
          const alpha = 0.4 + dot.glowIntensity * 0.6;
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(2)})`;

          if (dot.glowIntensity > 0.3) {
            ctx.shadowColor = 'rgba(255, 112, 67, 0.95)';
            ctx.shadowBlur = 18 * dot.glowIntensity;
          } else {
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;
          }
        } else {
          // Resting state: prominent, bold, glowing dot matrix
          ctx.fillStyle = 'rgba(255, 112, 67, 0.38)';
          ctx.shadowColor = 'transparent';
          ctx.shadowBlur = 0;
        }

        ctx.fill();
      }

      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      containerEl.removeEventListener('mousemove', handleMouseMove);
      containerEl.removeEventListener('mouseleave', handleMouseLeave);
      containerEl.removeEventListener('touchmove', handleTouchMove);
      containerEl.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="streettalk-watermark-wrap"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '480px',
        margin: '20px 0 30px 0',
        cursor: 'crosshair',
        userSelect: 'none'
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  );
}
