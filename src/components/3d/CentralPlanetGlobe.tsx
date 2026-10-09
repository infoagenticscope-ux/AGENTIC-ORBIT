import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface CentralPlanetGlobeProps {
  size?: number;
}

export const CentralPlanetGlobe: React.FC<CentralPlanetGlobeProps> = ({ size = 200 }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = size;
    const height = size;

    // 1. Three.js Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // Master Tilt Group (Earth's 23.4-degree axial tilt)
    const tiltGroup = new THREE.Group();
    tiltGroup.rotation.z = (23.4 * Math.PI) / 180;
    tiltGroup.rotation.x = 0.15;
    scene.add(tiltGroup);

    // =========================================================================
    // 2. PROCEDURAL HIGH-RESOLUTION EARTH TEXTURE (Oceans, Continents, City Lights)
    // =========================================================================
    const texCanvas = document.createElement('canvas');
    texCanvas.width = 1024;
    texCanvas.height = 512;
    const ctx = texCanvas.getContext('2d')!;

    // Deep Cosmic Blue Oceans
    const oceanGrad = ctx.createLinearGradient(0, 0, 0, 512);
    oceanGrad.addColorStop(0, '#020b18');
    oceanGrad.addColorStop(0.5, '#062347');
    oceanGrad.addColorStop(1, '#020b18');
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(0, 0, 1024, 512);

    // Realistic Continental Shapes
    ctx.fillStyle = '#0a3d6b';
    const continentSeeds = [
      { x: 260, y: 180, r: 90 }, // Europe / North Africa
      { x: 340, y: 220, r: 85 }, // Middle East / South Asia
      { x: 420, y: 190, r: 110 }, // East Asia
      { x: 180, y: 160, r: 95 }, // North America
      { x: 210, y: 310, r: 75 }, // South America
      { x: 280, y: 320, r: 90 }, // Sub-Saharan Africa
      { x: 440, y: 340, r: 65 }, // Australia
    ];

    continentSeeds.forEach(seed => {
      ctx.beginPath();
      ctx.arc(seed.x, seed.y, seed.r, 0, Math.PI * 2);
      ctx.fill();

      // Secondary organic terrain details
      ctx.fillStyle = '#0f528f';
      ctx.beginPath();
      ctx.arc(seed.x + 15, seed.y - 10, seed.r * 0.75, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#1469b3';
      ctx.beginPath();
      ctx.arc(seed.x - 10, seed.y + 12, seed.r * 0.5, 0, Math.PI * 2);
      ctx.fill();
    });

    // Coastal Shallows (Turquoise cyan fringe)
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.4)';
    ctx.lineWidth = 4;
    continentSeeds.forEach(seed => {
      ctx.beginPath();
      ctx.arc(seed.x, seed.y, seed.r + 2, 0, Math.PI * 2);
      ctx.stroke();
    });

    // Glowing Cyan-Blue & Gold Night City Lights
    ctx.fillStyle = '#00F0FF';
    for (let i = 0; i < 420; i++) {
      const lx = (Math.sin(i * 37) * 0.48 + 0.5) * 1024;
      const ly = (Math.cos(i * 19) * 0.38 + 0.5) * 512;
      const size = Math.random() > 0.88 ? 2.6 : 1.2;
      ctx.shadowColor = '#00F0FF';
      ctx.shadowBlur = 6;
      ctx.fillRect(lx, ly, size, size);
    }
    ctx.shadowBlur = 0;

    // Atmospheric Cloud Texture Overlay
    ctx.fillStyle = 'rgba(255, 255, 255, 0.16)';
    for (let c = 0; c < 24; c++) {
      const cx = (c * 42) % 1024;
      const cy = 120 + (c * 17) % 280;
      ctx.beginPath();
      ctx.ellipse(cx, cy, 70, 22, 0.3, 0, Math.PI * 2);
      ctx.fill();
    }

    const planetTexture = new THREE.CanvasTexture(texCanvas);
    planetTexture.wrapS = THREE.RepeatWrapping;

    // =========================================================================
    // 3. CELESTIAL PLANETARY SPHERE
    // =========================================================================
    const planetRadius = 1.45;
    const planetGeo = new THREE.SphereGeometry(planetRadius, 64, 64);
    const planetMat = new THREE.MeshStandardMaterial({
      map: planetTexture,
      roughness: 0.35,
      metalness: 0.2,
      bumpScale: 0.05,
    });
    const planetMesh = new THREE.Mesh(planetGeo, planetMat);
    tiltGroup.add(planetMesh);

    // Atmospheric Rayleigh Scattering Layer (Luminous Cyan Outer Glow)
    const atmoGeo = new THREE.SphereGeometry(planetRadius * 1.055, 48, 48);
    const atmoMat = new THREE.MeshBasicMaterial({
      color: 0x00F0FF,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });
    const atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
    tiltGroup.add(atmoMesh);

    // Inner Subtle Atmospheric Rim (Frontside glow)
    const rimGeo = new THREE.SphereGeometry(planetRadius * 1.015, 48, 48);
    const rimMat = new THREE.MeshBasicMaterial({
      color: 0x38BDF8,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
    });
    const rimMesh = new THREE.Mesh(rimGeo, rimMat);
    tiltGroup.add(rimMesh);

    // Classical Thin Equator Guidance Ring
    const guideRingGeo = new THREE.RingGeometry(planetRadius * 1.25, planetRadius * 1.27, 64);
    const guideRingMat = new THREE.MeshBasicMaterial({
      color: 0x00F0FF,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45,
    });
    const guideRing = new THREE.Mesh(guideRingGeo, guideRingMat);
    guideRing.rotation.x = Math.PI / 2;
    tiltGroup.add(guideRing);

    // =========================================================================
    // 4. REALISTIC SPACE LIGHTING
    // =========================================================================
    // Direct Sun Light
    const sunLight = new THREE.DirectionalLight(0xFFFFFF, 3.2);
    sunLight.position.set(4, 3, 5);
    scene.add(sunLight);

    // Electric Cyan Rim Light from Space
    const cyanRim = new THREE.DirectionalLight(0x00D2FF, 2.0);
    cyanRim.position.set(-5, -2, -3);
    scene.add(cyanRim);

    // Ambient Space Bounce
    const ambient = new THREE.AmbientLight(0x041328, 1.2);
    scene.add(ambient);

    // Mouse Parallax Interaction
    let targetTiltX = 0.15;
    let targetTiltY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetTiltY = nx * 0.3;
      targetTiltX = 0.15 + ny * 0.2;
    };
    container.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Continuous Majestic Axial Planetary Rotation
      planetMesh.rotation.y = elapsed * 0.12;

      // Mouse Parallax dampening
      tiltGroup.rotation.y += (targetTiltY - tiltGroup.rotation.y) * 0.05;
      tiltGroup.rotation.x += (targetTiltX - tiltGroup.rotation.x) * 0.05;

      // Gentle orbital ring breathing
      guideRing.rotation.z = elapsed * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
      planetGeo.dispose();
      planetMat.dispose();
      atmoGeo.dispose();
      atmoMat.dispose();
      rimGeo.dispose();
      rimMat.dispose();
      guideRingGeo.dispose();
      guideRingMat.dispose();
      planetTexture.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [size]);

  return (
    <div className="relative flex items-center justify-center pointer-events-auto">
      {/* Outer Cyan Cosmic Corona Glow Behind Planet */}
      <div 
        style={{ width: `${size}px`, height: `${size}px` }}
        className="absolute rounded-full bg-gradient-to-tr from-brand-blue/30 via-sky-500/15 to-transparent blur-2xl pointer-events-none" 
      />

      {/* 3D WebGL Canvas Container */}
      <div 
        ref={mountRef} 
        style={{ width: `${size}px`, height: `${size}px` }}
        className="relative z-10 rounded-full overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing"
      />
    </div>
  );
};
