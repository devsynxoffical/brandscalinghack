import React, { useRef, useEffect } from 'react';

// Exact 208 crisp dot matrix coordinates for 'BRAND SCALING' (StreetTalk Dot Grid)
const DOT_COORDINATES = [{"x": 38.264, "y": 14.0}, {"x": 42.68, "y": 14.0}, {"x": 47.096, "y": 14.0}, {"x": 51.512, "y": 14.0}, {"x": 55.928, "y": 14.0}, {"x": 38.264, "y": 18.416}, {"x": 60.344, "y": 18.416}, {"x": 38.264, "y": 22.832}, {"x": 60.344, "y": 22.832}, {"x": 38.264, "y": 27.248}, {"x": 42.68, "y": 27.248}, {"x": 47.096, "y": 27.248}, {"x": 51.512, "y": 27.248}, {"x": 55.928, "y": 27.248}, {"x": 38.264, "y": 31.664}, {"x": 60.344, "y": 31.664}, {"x": 38.264, "y": 36.08}, {"x": 60.344, "y": 36.08}, {"x": 38.264, "y": 40.496}, {"x": 42.68, "y": 40.496}, {"x": 47.096, "y": 40.496}, {"x": 51.512, "y": 40.496}, {"x": 55.928, "y": 40.496}, {"x": 78.008, "y": 14.0}, {"x": 82.424, "y": 14.0}, {"x": 86.84, "y": 14.0}, {"x": 91.256, "y": 14.0}, {"x": 95.672, "y": 14.0}, {"x": 78.008, "y": 18.416}, {"x": 100.088, "y": 18.416}, {"x": 78.008, "y": 22.832}, {"x": 100.088, "y": 22.832}, {"x": 78.008, "y": 27.248}, {"x": 82.424, "y": 27.248}, {"x": 86.84, "y": 27.248}, {"x": 91.256, "y": 27.248}, {"x": 95.672, "y": 27.248}, {"x": 78.008, "y": 31.664}, {"x": 95.672, "y": 31.664}, {"x": 78.008, "y": 36.08}, {"x": 100.088, "y": 36.08}, {"x": 78.008, "y": 40.496}, {"x": 100.088, "y": 40.496}, {"x": 122.168, "y": 14.0}, {"x": 126.584, "y": 14.0}, {"x": 131.0, "y": 14.0}, {"x": 135.416, "y": 14.0}, {"x": 117.752, "y": 18.416}, {"x": 139.832, "y": 18.416}, {"x": 117.752, "y": 22.832}, {"x": 139.832, "y": 22.832}, {"x": 117.752, "y": 27.248}, {"x": 122.168, "y": 27.248}, {"x": 126.584, "y": 27.248}, {"x": 131.0, "y": 27.248}, {"x": 135.416, "y": 27.248}, {"x": 139.832, "y": 27.248}, {"x": 117.752, "y": 31.664}, {"x": 139.832, "y": 31.664}, {"x": 117.752, "y": 36.08}, {"x": 139.832, "y": 36.08}, {"x": 117.752, "y": 40.496}, {"x": 139.832, "y": 40.496}, {"x": 157.496, "y": 14.0}, {"x": 179.576, "y": 14.0}, {"x": 157.496, "y": 18.416}, {"x": 161.912, "y": 18.416}, {"x": 179.576, "y": 18.416}, {"x": 157.496, "y": 22.832}, {"x": 166.328, "y": 22.832}, {"x": 179.576, "y": 22.832}, {"x": 157.496, "y": 27.248}, {"x": 170.744, "y": 27.248}, {"x": 179.576, "y": 27.248}, {"x": 157.496, "y": 31.664}, {"x": 175.16, "y": 31.664}, {"x": 179.576, "y": 31.664}, {"x": 157.496, "y": 36.08}, {"x": 179.576, "y": 36.08}, {"x": 157.496, "y": 40.496}, {"x": 179.576, "y": 40.496}, {"x": 197.24, "y": 14.0}, {"x": 201.656, "y": 14.0}, {"x": 206.072, "y": 14.0}, {"x": 210.488, "y": 14.0}, {"x": 214.904, "y": 14.0}, {"x": 197.24, "y": 18.416}, {"x": 219.32, "y": 18.416}, {"x": 197.24, "y": 22.832}, {"x": 219.32, "y": 22.832}, {"x": 197.24, "y": 27.248}, {"x": 219.32, "y": 27.248}, {"x": 197.24, "y": 31.664}, {"x": 219.32, "y": 31.664}, {"x": 197.24, "y": 36.08}, {"x": 219.32, "y": 36.08}, {"x": 197.24, "y": 40.496}, {"x": 201.656, "y": 40.496}, {"x": 206.072, "y": 40.496}, {"x": 210.488, "y": 40.496}, {"x": 214.904, "y": 40.496}, {"x": 31.64, "y": 56.0}, {"x": 36.056, "y": 56.0}, {"x": 40.472, "y": 56.0}, {"x": 44.888, "y": 56.0}, {"x": 27.224, "y": 60.416}, {"x": 27.224, "y": 64.832}, {"x": 31.64, "y": 69.248}, {"x": 36.056, "y": 69.248}, {"x": 40.472, "y": 69.248}, {"x": 44.888, "y": 73.664}, {"x": 44.888, "y": 78.08}, {"x": 27.224, "y": 82.496}, {"x": 31.64, "y": 82.496}, {"x": 36.056, "y": 82.496}, {"x": 40.472, "y": 82.496}, {"x": 62.552, "y": 56.0}, {"x": 66.968, "y": 56.0}, {"x": 71.384, "y": 56.0}, {"x": 75.8, "y": 56.0}, {"x": 58.136, "y": 60.416}, {"x": 58.136, "y": 64.832}, {"x": 58.136, "y": 69.248}, {"x": 58.136, "y": 73.664}, {"x": 58.136, "y": 78.08}, {"x": 62.552, "y": 82.496}, {"x": 66.968, "y": 82.496}, {"x": 71.384, "y": 82.496}, {"x": 75.8, "y": 82.496}, {"x": 93.464, "y": 56.0}, {"x": 97.88, "y": 56.0}, {"x": 102.296, "y": 56.0}, {"x": 89.048, "y": 60.416}, {"x": 106.712, "y": 60.416}, {"x": 89.048, "y": 64.832}, {"x": 106.712, "y": 64.832}, {"x": 89.048, "y": 69.248}, {"x": 93.464, "y": 69.248}, {"x": 97.88, "y": 69.248}, {"x": 102.296, "y": 69.248}, {"x": 106.712, "y": 69.248}, {"x": 89.048, "y": 73.664}, {"x": 106.712, "y": 73.664}, {"x": 89.048, "y": 78.08}, {"x": 106.712, "y": 78.08}, {"x": 89.048, "y": 82.496}, {"x": 106.712, "y": 82.496}, {"x": 119.96, "y": 56.0}, {"x": 119.96, "y": 60.416}, {"x": 119.96, "y": 64.832}, {"x": 119.96, "y": 69.248}, {"x": 119.96, "y": 73.664}, {"x": 119.96, "y": 78.08}, {"x": 119.96, "y": 82.496}, {"x": 124.376, "y": 82.496}, {"x": 128.792, "y": 82.496}, {"x": 133.208, "y": 82.496}, {"x": 137.624, "y": 82.496}, {"x": 150.872, "y": 56.0}, {"x": 155.288, "y": 56.0}, {"x": 159.704, "y": 56.0}, {"x": 164.12, "y": 56.0}, {"x": 168.536, "y": 56.0}, {"x": 159.704, "y": 60.416}, {"x": 159.704, "y": 64.832}, {"x": 159.704, "y": 69.248}, {"x": 159.704, "y": 73.664}, {"x": 159.704, "y": 78.08}, {"x": 150.872, "y": 82.496}, {"x": 155.288, "y": 82.496}, {"x": 159.704, "y": 82.496}, {"x": 164.12, "y": 82.496}, {"x": 168.536, "y": 82.496}, {"x": 181.784, "y": 56.0}, {"x": 199.448, "y": 56.0}, {"x": 181.784, "y": 60.416}, {"x": 186.2, "y": 60.416}, {"x": 199.448, "y": 60.416}, {"x": 181.784, "y": 64.832}, {"x": 190.616, "y": 64.832}, {"x": 199.448, "y": 64.832}, {"x": 181.784, "y": 69.248}, {"x": 195.032, "y": 69.248}, {"x": 199.448, "y": 69.248}, {"x": 181.784, "y": 73.664}, {"x": 199.448, "y": 73.664}, {"x": 181.784, "y": 78.08}, {"x": 199.448, "y": 78.08}, {"x": 181.784, "y": 82.496}, {"x": 199.448, "y": 82.496}, {"x": 217.112, "y": 56.0}, {"x": 221.528, "y": 56.0}, {"x": 225.944, "y": 56.0}, {"x": 230.36, "y": 56.0}, {"x": 212.696, "y": 60.416}, {"x": 212.696, "y": 64.832}, {"x": 212.696, "y": 69.248}, {"x": 221.528, "y": 69.248}, {"x": 225.944, "y": 69.248}, {"x": 230.36, "y": 69.248}, {"x": 212.696, "y": 73.664}, {"x": 230.36, "y": 73.664}, {"x": 212.696, "y": 78.08}, {"x": 230.36, "y": 78.08}, {"x": 217.112, "y": 82.496}, {"x": 221.528, "y": 82.496}, {"x": 225.944, "y": 82.496}, {"x": 230.36, "y": 82.496}];

const VIEW_BOX = { width: 262, height: 98 };
const BASE_RADIUS = 1.35;
const RADIUS_MULTIPLIER = 2.2;
const DURATION_MS = 250;

export default function InteractiveDotMatrixFooter() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let dots = [];
    let scaledRadius = BASE_RADIUS;

    const clearCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, container.clientWidth, container.clientHeight);
    };

    const renderDots = (now) => {
      clearCanvas();
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = 'rgba(255, 87, 34, 0.95)';
      ctx.shadowBlur = 14;
      let hasActive = false;

      for (let dot of dots) {
        if (dot.offAt > now) {
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, scaledRadius, 0, Math.PI * 2);
          ctx.fill();
          hasActive = true;
        }
      }
      return hasActive;
    };

    const loop = (now) => {
      const active = renderDots(now);
      if (active) {
        animId = requestAnimationFrame(loop);
      } else {
        animId = 0;
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

      const scaleX = w / VIEW_BOX.width;
      const scaleY = h / VIEW_BOX.height;
      scaledRadius = BASE_RADIUS * scaleX;

      dots = DOT_COORDINATES.map((d) => ({
        x: d.x * scaleX,
        y: d.y * scaleY,
        offAt: 0
      }));

      if (animId) cancelAnimationFrame(animId);
      animId = 0;
      clearCanvas();
    };

    const handlePointerMove = (e) => {
      if (dots.length === 0) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const hitRadius = scaledRadius * 2 * RADIUS_MULTIPLIER;
      const hitRadiusSq = hitRadius * hitRadius;
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
  }, []);

  return (
    <div
      ref={containerRef}
      className="st-footer-logo"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1440px',
        margin: '2rem auto',
        display: 'flex',
        justifyContent: 'center',
        cursor: 'default',
        userSelect: 'none'
      }}
    >
      {/* Base BRAND SCALING inline SVG */}
      <svg
        viewBox="0 0 262 98"
        className="st-footer-wordmark"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          fill: 'rgba(255, 112, 67, 0.42)',
          pointerEvents: 'none'
        }}
      >
        <g>
        <circle cx="38.264" cy="14.0" r="1.35" />
        <circle cx="42.68" cy="14.0" r="1.35" />
        <circle cx="47.096" cy="14.0" r="1.35" />
        <circle cx="51.512" cy="14.0" r="1.35" />
        <circle cx="55.928" cy="14.0" r="1.35" />
        <circle cx="38.264" cy="18.416" r="1.35" />
        <circle cx="60.344" cy="18.416" r="1.35" />
        <circle cx="38.264" cy="22.832" r="1.35" />
        <circle cx="60.344" cy="22.832" r="1.35" />
        <circle cx="38.264" cy="27.248" r="1.35" />
        <circle cx="42.68" cy="27.248" r="1.35" />
        <circle cx="47.096" cy="27.248" r="1.35" />
        <circle cx="51.512" cy="27.248" r="1.35" />
        <circle cx="55.928" cy="27.248" r="1.35" />
        <circle cx="38.264" cy="31.664" r="1.35" />
        <circle cx="60.344" cy="31.664" r="1.35" />
        <circle cx="38.264" cy="36.08" r="1.35" />
        <circle cx="60.344" cy="36.08" r="1.35" />
        <circle cx="38.264" cy="40.496" r="1.35" />
        <circle cx="42.68" cy="40.496" r="1.35" />
        <circle cx="47.096" cy="40.496" r="1.35" />
        <circle cx="51.512" cy="40.496" r="1.35" />
        <circle cx="55.928" cy="40.496" r="1.35" />
        <circle cx="78.008" cy="14.0" r="1.35" />
        <circle cx="82.424" cy="14.0" r="1.35" />
        <circle cx="86.84" cy="14.0" r="1.35" />
        <circle cx="91.256" cy="14.0" r="1.35" />
        <circle cx="95.672" cy="14.0" r="1.35" />
        <circle cx="78.008" cy="18.416" r="1.35" />
        <circle cx="100.088" cy="18.416" r="1.35" />
        <circle cx="78.008" cy="22.832" r="1.35" />
        <circle cx="100.088" cy="22.832" r="1.35" />
        <circle cx="78.008" cy="27.248" r="1.35" />
        <circle cx="82.424" cy="27.248" r="1.35" />
        <circle cx="86.84" cy="27.248" r="1.35" />
        <circle cx="91.256" cy="27.248" r="1.35" />
        <circle cx="95.672" cy="27.248" r="1.35" />
        <circle cx="78.008" cy="31.664" r="1.35" />
        <circle cx="95.672" cy="31.664" r="1.35" />
        <circle cx="78.008" cy="36.08" r="1.35" />
        <circle cx="100.088" cy="36.08" r="1.35" />
        <circle cx="78.008" cy="40.496" r="1.35" />
        <circle cx="100.088" cy="40.496" r="1.35" />
        <circle cx="122.168" cy="14.0" r="1.35" />
        <circle cx="126.584" cy="14.0" r="1.35" />
        <circle cx="131.0" cy="14.0" r="1.35" />
        <circle cx="135.416" cy="14.0" r="1.35" />
        <circle cx="117.752" cy="18.416" r="1.35" />
        <circle cx="139.832" cy="18.416" r="1.35" />
        <circle cx="117.752" cy="22.832" r="1.35" />
        <circle cx="139.832" cy="22.832" r="1.35" />
        <circle cx="117.752" cy="27.248" r="1.35" />
        <circle cx="122.168" cy="27.248" r="1.35" />
        <circle cx="126.584" cy="27.248" r="1.35" />
        <circle cx="131.0" cy="27.248" r="1.35" />
        <circle cx="135.416" cy="27.248" r="1.35" />
        <circle cx="139.832" cy="27.248" r="1.35" />
        <circle cx="117.752" cy="31.664" r="1.35" />
        <circle cx="139.832" cy="31.664" r="1.35" />
        <circle cx="117.752" cy="36.08" r="1.35" />
        <circle cx="139.832" cy="36.08" r="1.35" />
        <circle cx="117.752" cy="40.496" r="1.35" />
        <circle cx="139.832" cy="40.496" r="1.35" />
        <circle cx="157.496" cy="14.0" r="1.35" />
        <circle cx="179.576" cy="14.0" r="1.35" />
        <circle cx="157.496" cy="18.416" r="1.35" />
        <circle cx="161.912" cy="18.416" r="1.35" />
        <circle cx="179.576" cy="18.416" r="1.35" />
        <circle cx="157.496" cy="22.832" r="1.35" />
        <circle cx="166.328" cy="22.832" r="1.35" />
        <circle cx="179.576" cy="22.832" r="1.35" />
        <circle cx="157.496" cy="27.248" r="1.35" />
        <circle cx="170.744" cy="27.248" r="1.35" />
        <circle cx="179.576" cy="27.248" r="1.35" />
        <circle cx="157.496" cy="31.664" r="1.35" />
        <circle cx="175.16" cy="31.664" r="1.35" />
        <circle cx="179.576" cy="31.664" r="1.35" />
        <circle cx="157.496" cy="36.08" r="1.35" />
        <circle cx="179.576" cy="36.08" r="1.35" />
        <circle cx="157.496" cy="40.496" r="1.35" />
        <circle cx="179.576" cy="40.496" r="1.35" />
        <circle cx="197.24" cy="14.0" r="1.35" />
        <circle cx="201.656" cy="14.0" r="1.35" />
        <circle cx="206.072" cy="14.0" r="1.35" />
        <circle cx="210.488" cy="14.0" r="1.35" />
        <circle cx="214.904" cy="14.0" r="1.35" />
        <circle cx="197.24" cy="18.416" r="1.35" />
        <circle cx="219.32" cy="18.416" r="1.35" />
        <circle cx="197.24" cy="22.832" r="1.35" />
        <circle cx="219.32" cy="22.832" r="1.35" />
        <circle cx="197.24" cy="27.248" r="1.35" />
        <circle cx="219.32" cy="27.248" r="1.35" />
        <circle cx="197.24" cy="31.664" r="1.35" />
        <circle cx="219.32" cy="31.664" r="1.35" />
        <circle cx="197.24" cy="36.08" r="1.35" />
        <circle cx="219.32" cy="36.08" r="1.35" />
        <circle cx="197.24" cy="40.496" r="1.35" />
        <circle cx="201.656" cy="40.496" r="1.35" />
        <circle cx="206.072" cy="40.496" r="1.35" />
        <circle cx="210.488" cy="40.496" r="1.35" />
        <circle cx="214.904" cy="40.496" r="1.35" />
        <circle cx="31.64" cy="56.0" r="1.35" />
        <circle cx="36.056" cy="56.0" r="1.35" />
        <circle cx="40.472" cy="56.0" r="1.35" />
        <circle cx="44.888" cy="56.0" r="1.35" />
        <circle cx="27.224" cy="60.416" r="1.35" />
        <circle cx="27.224" cy="64.832" r="1.35" />
        <circle cx="31.64" cy="69.248" r="1.35" />
        <circle cx="36.056" cy="69.248" r="1.35" />
        <circle cx="40.472" cy="69.248" r="1.35" />
        <circle cx="44.888" cy="73.664" r="1.35" />
        <circle cx="44.888" cy="78.08" r="1.35" />
        <circle cx="27.224" cy="82.496" r="1.35" />
        <circle cx="31.64" cy="82.496" r="1.35" />
        <circle cx="36.056" cy="82.496" r="1.35" />
        <circle cx="40.472" cy="82.496" r="1.35" />
        <circle cx="62.552" cy="56.0" r="1.35" />
        <circle cx="66.968" cy="56.0" r="1.35" />
        <circle cx="71.384" cy="56.0" r="1.35" />
        <circle cx="75.8" cy="56.0" r="1.35" />
        <circle cx="58.136" cy="60.416" r="1.35" />
        <circle cx="58.136" cy="64.832" r="1.35" />
        <circle cx="58.136" cy="69.248" r="1.35" />
        <circle cx="58.136" cy="73.664" r="1.35" />
        <circle cx="58.136" cy="78.08" r="1.35" />
        <circle cx="62.552" cy="82.496" r="1.35" />
        <circle cx="66.968" cy="82.496" r="1.35" />
        <circle cx="71.384" cy="82.496" r="1.35" />
        <circle cx="75.8" cy="82.496" r="1.35" />
        <circle cx="93.464" cy="56.0" r="1.35" />
        <circle cx="97.88" cy="56.0" r="1.35" />
        <circle cx="102.296" cy="56.0" r="1.35" />
        <circle cx="89.048" cy="60.416" r="1.35" />
        <circle cx="106.712" cy="60.416" r="1.35" />
        <circle cx="89.048" cy="64.832" r="1.35" />
        <circle cx="106.712" cy="64.832" r="1.35" />
        <circle cx="89.048" cy="69.248" r="1.35" />
        <circle cx="93.464" cy="69.248" r="1.35" />
        <circle cx="97.88" cy="69.248" r="1.35" />
        <circle cx="102.296" cy="69.248" r="1.35" />
        <circle cx="106.712" cy="69.248" r="1.35" />
        <circle cx="89.048" cy="73.664" r="1.35" />
        <circle cx="106.712" cy="73.664" r="1.35" />
        <circle cx="89.048" cy="78.08" r="1.35" />
        <circle cx="106.712" cy="78.08" r="1.35" />
        <circle cx="89.048" cy="82.496" r="1.35" />
        <circle cx="106.712" cy="82.496" r="1.35" />
        <circle cx="119.96" cy="56.0" r="1.35" />
        <circle cx="119.96" cy="60.416" r="1.35" />
        <circle cx="119.96" cy="64.832" r="1.35" />
        <circle cx="119.96" cy="69.248" r="1.35" />
        <circle cx="119.96" cy="73.664" r="1.35" />
        <circle cx="119.96" cy="78.08" r="1.35" />
        <circle cx="119.96" cy="82.496" r="1.35" />
        <circle cx="124.376" cy="82.496" r="1.35" />
        <circle cx="128.792" cy="82.496" r="1.35" />
        <circle cx="133.208" cy="82.496" r="1.35" />
        <circle cx="137.624" cy="82.496" r="1.35" />
        <circle cx="150.872" cy="56.0" r="1.35" />
        <circle cx="155.288" cy="56.0" r="1.35" />
        <circle cx="159.704" cy="56.0" r="1.35" />
        <circle cx="164.12" cy="56.0" r="1.35" />
        <circle cx="168.536" cy="56.0" r="1.35" />
        <circle cx="159.704" cy="60.416" r="1.35" />
        <circle cx="159.704" cy="64.832" r="1.35" />
        <circle cx="159.704" cy="69.248" r="1.35" />
        <circle cx="159.704" cy="73.664" r="1.35" />
        <circle cx="159.704" cy="78.08" r="1.35" />
        <circle cx="150.872" cy="82.496" r="1.35" />
        <circle cx="155.288" cy="82.496" r="1.35" />
        <circle cx="159.704" cy="82.496" r="1.35" />
        <circle cx="164.12" cy="82.496" r="1.35" />
        <circle cx="168.536" cy="82.496" r="1.35" />
        <circle cx="181.784" cy="56.0" r="1.35" />
        <circle cx="199.448" cy="56.0" r="1.35" />
        <circle cx="181.784" cy="60.416" r="1.35" />
        <circle cx="186.2" cy="60.416" r="1.35" />
        <circle cx="199.448" cy="60.416" r="1.35" />
        <circle cx="181.784" cy="64.832" r="1.35" />
        <circle cx="190.616" cy="64.832" r="1.35" />
        <circle cx="199.448" cy="64.832" r="1.35" />
        <circle cx="181.784" cy="69.248" r="1.35" />
        <circle cx="195.032" cy="69.248" r="1.35" />
        <circle cx="199.448" cy="69.248" r="1.35" />
        <circle cx="181.784" cy="73.664" r="1.35" />
        <circle cx="199.448" cy="73.664" r="1.35" />
        <circle cx="181.784" cy="78.08" r="1.35" />
        <circle cx="199.448" cy="78.08" r="1.35" />
        <circle cx="181.784" cy="82.496" r="1.35" />
        <circle cx="199.448" cy="82.496" r="1.35" />
        <circle cx="217.112" cy="56.0" r="1.35" />
        <circle cx="221.528" cy="56.0" r="1.35" />
        <circle cx="225.944" cy="56.0" r="1.35" />
        <circle cx="230.36" cy="56.0" r="1.35" />
        <circle cx="212.696" cy="60.416" r="1.35" />
        <circle cx="212.696" cy="64.832" r="1.35" />
        <circle cx="212.696" cy="69.248" r="1.35" />
        <circle cx="221.528" cy="69.248" r="1.35" />
        <circle cx="225.944" cy="69.248" r="1.35" />
        <circle cx="230.36" cy="69.248" r="1.35" />
        <circle cx="212.696" cy="73.664" r="1.35" />
        <circle cx="230.36" cy="73.664" r="1.35" />
        <circle cx="212.696" cy="78.08" r="1.35" />
        <circle cx="230.36" cy="78.08" r="1.35" />
        <circle cx="217.112" cy="82.496" r="1.35" />
        <circle cx="221.528" cy="82.496" r="1.35" />
        <circle cx="225.944" cy="82.496" r="1.35" />
        <circle cx="230.36" cy="82.496" r="1.35" />
        </g>
      </svg>

      {/* Interactive Canvas on Top */}
      <canvas
        ref={canvasRef}
        className="st-footer-dots"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
