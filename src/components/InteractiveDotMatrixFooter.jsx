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
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false };

    // Function to initialize dot grid from rendered text
    const initDots = () => {
      const rect = container.getBoundingClientRect();
      const width = rect.width || 1100;
      const height = Math.max(rect.height || 0, 320);

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      // Create an offscreen canvas to sample typography pixels
      const offscreen = document.createElement('canvas');
      offscreen.width = width;
      offscreen.height = height;
      const offCtx = offscreen.getContext('2d');

      // Determine text and layout
      const isMobile = width < 680;
      const fontSize = isMobile ? Math.floor(width * 0.16) : Math.floor(Math.min(width * 0.13, 140));
      const line1 = 'BRAND SCALING';
      const line2 = 'HACKS';

      offCtx.fillStyle = '#ffffff';
      offCtx.font = `900 ${fontSize}px "Space Grotesk", "Inter", -apple-system, sans-serif`;
      offCtx.textAlign = 'center';
      offCtx.textBaseline = 'middle';

      if (isMobile) {
        offCtx.fillText(line1, width / 2, height * 0.35);
        offCtx.fillText(line2, width / 2, height * 0.7);
      } else {
        offCtx.fillText(line1, width / 2, height * 0.34);
        offCtx.fillText(line2, width / 2, height * 0.72);
      }

      // Sample pixels
      const imgData = offCtx.getImageData(0, 0, width, height).data;
      const spacing = isMobile ? 12 : 14;
      const newDots = [];

      for (let y = 0; y < height; y += spacing) {
        for (let x = 0; x < width; x += spacing) {
          const index = (y * width + x) * 4;
          const alpha = imgData[index + 3];

          if (alpha > 120) {
            newDots.push({
              x,
              y,
              baseRadius: isMobile ? 3 : 4,
              currentRadius: isMobile ? 3 : 4,
              maxRadius: isMobile ? 11 : 15,
              glowIntensity: 0
            });
          }
        }
      }

      dots = newDots;
    };

    // Run initial dot calculation after fonts load or brief timeout
    if (document.fonts) {
      document.fonts.ready.then(() => {
        initDots();
      });
    } else {
      setTimeout(initDots, 50);
    }

    // Mouse & Touch listeners
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
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
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const containerEl = container;
    containerEl.addEventListener('mousemove', handleMouseMove);
    containerEl.addEventListener('mouseleave', handleMouseLeave);
    containerEl.addEventListener('touchmove', handleTouchMove, { passive: true });
    containerEl.addEventListener('touchend', handleTouchEnd);

    // Resize observer
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        initDots();
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    // Animation Render Loop with Elastic Spring Physics
    const EFFECT_RADIUS = 135;

    const render = () => {
      // Smooth mouse interpolation for liquid feel
      mouse.x += (mouse.targetX - mouse.x) * 0.25;
      mouse.y += (mouse.targetY - mouse.y) * 0.25;

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
          const factor = Math.cos((dist / EFFECT_RADIUS) * (Math.PI / 2)); // Smooth cosine falloff
          targetRadius = dot.baseRadius + (dot.maxRadius - dot.baseRadius) * factor;
          targetGlow = factor;
        }

        // Smooth physics easing
        dot.currentRadius += (targetRadius - dot.currentRadius) * 0.22;
        dot.glowIntensity += (targetGlow - dot.glowIntensity) * 0.22;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, Math.max(0.5, dot.currentRadius), 0, Math.PI * 2);

        // Color interpolation from resting dark subtle obsidian/orange to brilliant white
        if (dot.glowIntensity > 0.05) {
          // Hovered / illuminated state (Pure White & glowing core like StreetTalk)
          const alpha = 0.25 + dot.glowIntensity * 0.75;
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(2)})`;
          
          if (dot.glowIntensity > 0.4) {
            ctx.shadowColor = 'rgba(255, 112, 67, 0.85)';
            ctx.shadowBlur = 14 * dot.glowIntensity;
          } else {
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;
          }
        } else {
          // Resting state (Subtle luxury brand watermark dots)
          ctx.fillStyle = 'rgba(255, 112, 67, 0.18)';
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
        minHeight: '340px',
        margin: '20px 0',
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
