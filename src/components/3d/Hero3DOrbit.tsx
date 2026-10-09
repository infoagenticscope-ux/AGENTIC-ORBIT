import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const Hero3DOrbit: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [telemetry, setTelemetry] = useState({
    fps: 60,
    orbitAngle: 0,
    coreLoad: 18.4,
    status: 'ONLINE',
  });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 550;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse parallax
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 1. Central Core Sphere & Icosahedron Wireframe
    const coreGeo = new THREE.SphereGeometry(2.4, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00F0FF,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    masterGroup.add(coreMesh);

    const innerCoreGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: 0x0066FF,
      emissive: 0x00D2FF,
      emissiveIntensity: 0.9,
      roughness: 0.2,
      metalness: 0.9,
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    masterGroup.add(innerCoreMesh);

    // 2. Concentric Orbit Rings
    const createRing = (radius: number, tube: number, color: number, rotX: number, rotY: number) => {
      const ringGeo = new THREE.TorusGeometry(radius, tube, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.65,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = rotX;
      ring.rotation.y = rotY;
      masterGroup.add(ring);
      return ring;
    };

    const ring1 = createRing(5.2, 0.04, 0x00F0FF, Math.PI / 3, Math.PI / 6);
    const ring2 = createRing(7.0, 0.035, 0x38BDF8, -Math.PI / 4, Math.PI / 4);
    const ring3 = createRing(8.8, 0.03, 0x0066FF, Math.PI / 2.2, -Math.PI / 5);

    // 3. Orbiting Satellites / Agent Data Nodes
    const satelliteGroup = new THREE.Group();
    masterGroup.add(satelliteGroup);

    const satellites: { mesh: THREE.Mesh; angle: number; speed: number; radius: number }[] = [];
    const satGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const satMat = new THREE.MeshStandardMaterial({
      color: 0xFFFFFF,
      emissive: 0x00F0FF,
      emissiveIntensity: 1.5,
    });

    for (let i = 0; i < 6; i++) {
      const satMesh = new THREE.Mesh(satGeo, satMat);
      const satData = {
        mesh: satMesh,
        angle: (i * Math.PI * 2) / 6,
        speed: 0.012 + (i % 3) * 0.005,
        radius: 5.2 + (i % 3) * 1.8,
      };
      satelliteGroup.add(satMesh);
      satellites.push(satData);
    }

    // 4. Luminous Particle Dust / Nebula Cloud
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0x00F0FF);
    const c2 = new THREE.Color(0x38BDF8);

    for (let i = 0; i < particleCount; i++) {
      const r = 4 + Math.random() * 9;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      particlePositions[i * 3] = r * Math.cos(theta) * Math.cos(phi);
      particlePositions[i * 3 + 1] = r * Math.sin(phi);
      particlePositions[i * 3 + 2] = r * Math.sin(theta) * Math.cos(phi);

      const mixed = Math.random() > 0.5 ? c1 : c2;
      particleColors[i * 3] = mixed.r;
      particleColors[i * 3 + 1] = mixed.g;
      particleColors[i * 3 + 2] = mixed.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    masterGroup.add(particleSystem);

    // 5. Lighting
    const pointLight = new THREE.PointLight(0x00F0FF, 3, 50);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0x051525, 2);
    scene.add(ambientLight);

    // Mouse movement interaction with lerping
    let targetX = 0;
    let targetY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.45;
      targetY = y * 0.35;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize listener
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Core rotation
      coreMesh.rotation.y += 0.007;
      coreMesh.rotation.x += 0.004;
      innerCoreMesh.rotation.y -= 0.012;
      innerCoreMesh.rotation.z += 0.008;

      // Rings rotation
      ring1.rotation.z += 0.006;
      ring2.rotation.z -= 0.005;
      ring3.rotation.y += 0.004;

      // Satellites orbiting
      satellites.forEach((sat, idx) => {
        sat.angle += sat.speed;
        const tilt = (idx % 2 === 0 ? 1 : -1) * 0.45;
        sat.mesh.position.x = Math.cos(sat.angle) * sat.radius;
        sat.mesh.position.z = Math.sin(sat.angle) * sat.radius;
        sat.mesh.position.y = Math.sin(sat.angle * 2) * (sat.radius * tilt * 0.4);
      });

      // Particle system rotation
      particleSystem.rotation.y = elapsed * 0.03;

      // Smooth mouse lerp
      masterGroup.rotation.y += (targetX - masterGroup.rotation.y) * 0.05;
      masterGroup.rotation.x += (targetY - masterGroup.rotation.x) * 0.05;

      // Periodic telemetry update
      if (Math.floor(elapsed * 10) % 30 === 0) {
        setTelemetry({
          fps: 60,
          orbitAngle: Math.floor((elapsed * 25) % 360),
          coreLoad: +(16 + Math.sin(elapsed) * 3).toFixed(1),
          status: 'SYNCHRONIZED',
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[460px] md:h-[540px] lg:h-[600px] flex items-center justify-center select-none">
      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Cyber HUD Telemetry Badges */}
      <div className="absolute top-4 left-4 pointer-events-none">
        <div className="glass-panel px-3 py-1.5 rounded-md border border-brand-blue/30 text-[11px] font-mono flex items-center gap-2 text-brand-blue">
          <span className="w-2 h-2 rounded-full bg-brand-blue animate-ping" />
          <span>AI_CORE://ORBIT_V4.2</span>
        </div>
      </div>

      <div className="absolute top-4 right-4 pointer-events-none hidden sm:block">
        <div className="glass-panel px-3 py-1.5 rounded-md border border-brand-blue/30 text-[11px] font-mono text-slate-300">
          STATUS: <span className="text-emerald-400 font-semibold">{telemetry.status}</span>
        </div>
      </div>

      <div className="absolute bottom-6 left-4 right-4 pointer-events-none flex justify-between items-center text-[10px] md:text-xs font-mono text-slate-400 px-2">
        <div className="glass-panel px-3 py-1.5 rounded border border-brand-blue/20">
          ANGULAR MOMENTUM: <span className="text-brand-blue">{telemetry.orbitAngle}°</span>
        </div>
        <div className="glass-panel px-3 py-1.5 rounded border border-brand-blue/20">
          NEURAL LOAD: <span className="text-brand-blue">{telemetry.coreLoad}%</span>
        </div>
        <div className="glass-panel px-3 py-1.5 rounded border border-brand-blue/20 hidden md:block">
          ENGINE: <span className="text-brand-blue">THREE.JS_WEBGL</span>
        </div>
      </div>

      {/* Decorative HUD Corner Crosshairs */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-brand-blue/60 pointer-events-none" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-brand-blue/60 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-brand-blue/60 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-brand-blue/60 pointer-events-none" />
    </div>
  );
};
