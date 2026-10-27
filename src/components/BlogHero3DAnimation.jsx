import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Premium Interactive 3D Background for Blog Hero Sections
 * Features:
 * - Floating 3D Geometric Core (Dual Icosahedron Wireframe & Holographic Nodes)
 * - 3D Attribution Network / Marketing Data Constellation with dynamic connections
 * - Undulating 3D Algorithm Wave Field (representing ROAS & ad scale curves)
 * - Smooth mouse parallax with lerped physics
 * - Optimized with IntersectionObserver (auto-pauses when out of viewport)
 */
export default function BlogHero3DAnimation() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    } catch {
      return; // Graceful fallback if WebGL fails
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 45;

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 1. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const orangePointLight = new THREE.PointLight(0xea580c, 3.5, 80);
    orangePointLight.position.set(25, 15, 20);
    scene.add(orangePointLight);

    const slatePointLight = new THREE.PointLight(0x38bdf8, 2.0, 80);
    slatePointLight.position.set(-25, -15, 15);
    scene.add(slatePointLight);

    // 2. Main 3D Floating Geometric Core (Symbolizing Strategic Growth Engine)
    const coreGroup = new THREE.Group();
    coreGroup.position.set(22, 4, -5);

    // Outer wireframe icosahedron
    const outerGeo = new THREE.IcosahedronGeometry(9, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0xea580c,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerMesh);

    // Inner glowing geometric crystal
    const innerGeo = new THREE.OctahedronGeometry(5.2, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0xffedd5,
      emissive: 0xea580c,
      emissiveIntensity: 0.35,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Outer orbital ring
    const ringGeo = new THREE.TorusGeometry(12, 0.12, 16, 80);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xf97316,
      transparent: true,
      opacity: 0.35,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    ringMesh.rotation.y = Math.PI / 6;
    coreGroup.add(ringMesh);

    // Secondary tilted counter-ring
    const ring2Geo = new THREE.TorusGeometry(10.5, 0.08, 16, 80);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.25,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.x = -Math.PI / 4;
    ring2Mesh.rotation.z = Math.PI / 5;
    coreGroup.add(ring2Mesh);

    scene.add(coreGroup);

    // 3. 3D Attribution Data Constellation (Marketing Network Nodes)
    const particleCount = 65;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 85;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 45;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 35;
      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.015,
      });
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Canvas particle texture for smooth antialiased circular glowing nodes
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(234, 88, 12, 1)');
      gradient.addColorStop(0.4, 'rgba(234, 88, 12, 0.8)');
      gradient.addColorStop(1, 'rgba(234, 88, 12, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, Math.PI * 2);
      ctx.fill();
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      size: 1.6,
      map: particleTexture,
      transparent: true,
      opacity: 0.55,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 4. Undulating 3D Algorithmic Scale Wave (Grid of depth points)
    const waveCols = 38;
    const waveRows = 16;
    const waveCount = waveCols * waveRows;
    const waveGeo = new THREE.BufferGeometry();
    const wavePositions = new Float32Array(waveCount * 3);
    const waveBaseX = [];
    const waveBaseY = [];

    let waveIdx = 0;
    for (let c = 0; c < waveCols; c++) {
      for (let r = 0; r < waveRows; r++) {
        const x = (c - waveCols / 2) * 2.4;
        const y = -14 + (r - waveRows / 2) * 1.5;
        const z = -15 + r * 1.8;
        wavePositions[waveIdx * 3] = x;
        wavePositions[waveIdx * 3 + 1] = y;
        wavePositions[waveIdx * 3 + 2] = z;
        waveBaseX.push(x);
        waveBaseY.push(y);
        waveIdx++;
      }
    }
    waveGeo.setAttribute('position', new THREE.BufferAttribute(wavePositions, 3));

    const waveMat = new THREE.PointsMaterial({
      size: 1.1,
      color: 0x94a3b8,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
    });
    const waveMesh = new THREE.Points(waveGeo, waveMat);
    scene.add(waveMesh);

    // 5. Mouse Parallax & Smooth Physics
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetMouseX = x * 4;
      targetMouseY = y * 2.5;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 6. Responsive Resize Handling
    const handleResize = () => {
      if (!container || !renderer) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 7. Visibility Observer to throttle when off-screen
    let isVisible = true;
    const intersectionObserver = new IntersectionObserver((entries) => {
      isVisible = entries[0]?.isIntersecting ?? true;
    });
    intersectionObserver.observe(container);

    // 8. Animation Render Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return; // Save GPU/battery when scrolled away

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      camera.position.x = currentMouseX;
      camera.position.y = currentMouseY;
      camera.lookAt(0, 0, 0);

      // Rotate 3D Core
      coreGroup.rotation.y = elapsedTime * 0.18;
      coreGroup.rotation.x = Math.sin(elapsedTime * 0.12) * 0.25;
      outerMesh.rotation.y = elapsedTime * 0.22;
      innerMesh.rotation.x = -elapsedTime * 0.35;
      innerMesh.rotation.z = elapsedTime * 0.15;
      ringMesh.rotation.z = elapsedTime * 0.12;
      ring2Mesh.rotation.y = -elapsedTime * 0.16;

      // Gentle floating hover for core
      coreGroup.position.y = 4 + Math.sin(elapsedTime * 0.8) * 1.2;

      // Animate Constellation particles
      const positions = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const vel = particleVelocities[i];
        positions[i * 3] += vel.x;
        positions[i * 3 + 1] += vel.y;
        positions[i * 3 + 2] += vel.z;

        // Boundaries wrap
        if (positions[i * 3] > 45) positions[i * 3] = -45;
        if (positions[i * 3] < -45) positions[i * 3] = 45;
        if (positions[i * 3 + 1] > 25) positions[i * 3 + 1] = -25;
        if (positions[i * 3 + 1] < -25) positions[i * 3 + 1] = 25;
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Animate Algorithmic Scale Wave
      const wavePos = waveGeo.attributes.position.array;
      let wIdx = 0;
      for (let c = 0; c < waveCols; c++) {
        for (let r = 0; r < waveRows; r++) {
          const x = waveBaseX[wIdx];
          const y = waveBaseY[wIdx];
          // Dynamic 3D ripple
          const waveHeight = Math.sin(x * 0.18 + elapsedTime * 1.5) * 1.6 +
                             Math.cos(r * 0.3 + elapsedTime * 1.2) * 1.2;
          wavePos[wIdx * 3 + 1] = y + waveHeight;
          wIdx++;
        }
      }
      waveGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();

      // Dispose 3D elements
      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      particleTexture.dispose();
      waveGeo.dispose();
      waveMat.dispose();

      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="blog-hero-3d-canvas-wrap"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    />
  );
}
