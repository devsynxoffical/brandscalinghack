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

    // Function to render justified bold characters perfectly spanning targetWidth
    const drawJustifiedText = (targetCtx, text, centerX, centerY, fontSize, targetWidth, fontFamily) => {
      targetCtx.font = `950 ${fontSize}px ${fontFamily}`;
      targetCtx.textAlign = 'center';
      targetCtx.textBaseline = 'middle';

      if (text.length <= 1) {
        targetCtx.fillText(text, centerX, centerY);
        return;
      }

      let totalCharWidth = 0;
      const charWidths = [];
      for (let i = 0; i < text.length; i++) {
        const w = targetCtx.measureText(text[i]).width;
        charWidths.push(w);
        totalCharWidth += w;
      }

      // If text naturally exceeds target width, adjust or use single block
      if (totalCharWidth >= targetWidth) {
        targetCtx.fillText(text, centerX, centerY);
        return;
      }

      const gap = (targetWidth - totalCharWidth) / (text.length - 1);
      let currentX = centerX - targetWidth / 2;

      for (let i = 0; i < text.length; i++) {
        const charCenterX = currentX + charWidths[i] / 2;
        targetCtx.fillText(text[i], charCenterX, centerY);
        currentX += charWidths[i] + gap;
      }
    };

    const initDots = () => {
      const rect = container.getBoundingClientRect();
      const width = Math.max(rect.width || 0, window.innerWidth || 1200);
      const isMobile = width < 768;
      const height = isMobile ? 360 : 540;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      // Offscreen canvas for crisp pixel sampling
      const offscreen = document.createElement('canvas');
      offscreen.width = width;
      offscreen.height = height;
      const offCtx = offscreen.getContext('2d');

      const line1 = 'BRAND';
      const line2 = 'SCALING';

      const fontFamily = '"Impact", "Arial Black", "Cabinet Grotesk", "Space Grotesk", sans-serif';

      // Width span for both lines (e.g. 92% of container width on desktop, 94% on mobile)
      const targetSpanWidth = width * (isMobile ? 0.94 : 0.92);

      // Height cap so both lines never overlap and never clip canvas borders
      const maxLineHeight = height * (isMobile ? 0.34 : 0.36);
      
      // Calculate font size based on the longer word ("SCALING") fitting targetSpanWidth & maxLineHeight
      offCtx.font = `950 100px ${fontFamily}`;
      const mScaling = offCtx.measureText(line2).width;
      const calculatedFontSize = Math.min(
        100 * (targetSpanWidth / mScaling),
        maxLineHeight
      );

      offCtx.fillStyle = '#ffffff';

      // Position Line 1 ("BRAND") in top half with safe margins
      const y1 = height * 0.27;
      drawJustifiedText(offCtx, line1, width / 2, y1, calculatedFontSize, targetSpanWidth, fontFamily);

      // Position Line 2 ("SCALING") in bottom half with safe margins
      const y2 = height * 0.73;
      drawJustifiedText(offCtx, line2, width / 2, y2, calculatedFontSize, targetSpanWidth, fontFamily);

      // Dot sampling grid matching StreetTalk reference
      const imgData = offCtx.getImageData(0, 0, width, height).data;
      const spacing = isMobile ? 13 : 17;
      const newDots = [];

      for (let y = 0; y < height; y += spacing) {
        for (let x = 0; x < width; x += spacing) {
          const index = (y * width + x) * 4;
          const alpha = imgData[index + 3];

          if (alpha > 70) {
            newDots.push({
              x,
              y,
              baseRadius: isMobile ? 4.8 : 6.6,
              currentRadius: isMobile ? 4.8 : 6.6,
              maxRadius: isMobile ? 9.5 : 13.0,
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

    const EFFECT_RADIUS = 160;

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
          // Luminous hover state with crisp circular dot outline (StreetTalk match)
          const alpha = 0.45 + dot.glowIntensity * 0.55;
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(2)})`;

          if (dot.glowIntensity > 0.3) {
            ctx.shadowColor = 'rgba(255, 112, 67, 0.85)';
            ctx.shadowBlur = 14 * dot.glowIntensity;
          } else {
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;
          }
        } else {
          // Resting state: bold, dark amber/copper halftone dots
          ctx.fillStyle = 'rgba(255, 112, 67, 0.36)';
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
        minHeight: '520px',
        margin: '10px 0 20px 0',
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
