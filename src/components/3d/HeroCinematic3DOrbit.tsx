import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Camera, Compass, Maximize2, ShieldCheck, Globe, Building2, CreditCard, Cpu, Bot } from 'lucide-react';

interface SatelliteData {
  id: string;
  name: string;
  sub: string;
  color: number;
  orbitRadiusX: number;
  orbitRadiusY: number;
  orbitTiltX: number;
  orbitTiltY: number;
  orbitTiltZ: number;
  speed: number;
  angleOffset: number;
  group: THREE.Group;
  trailHistory: THREE.Vector3[];
  trailPoints: THREE.Points;
}

export const HeroCinematic3DOrbit: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [cameraMode, setCameraMode] = useState<'cinematic' | 'front' | 'angled'>('cinematic');
  const [hoveredSat, setHoveredSat] = useState<string | null>(null);
  const [telemetry, setTelemetry] = useState({
    fps: 60,
    orbitVelocity: '27,640 km/h',
    altitude: '412 km',
    phase: 'KEPLER SYNCHRONIZED',
    coreTemp: '2.7 K'
  });

  const satInfos = [
    { id: 'uk', name: 'UK LTD Formation', sub: '24-48h Companies House', icon: Building2, color: 0x00F0FF, hex: '#00F0FF' },
    { id: 'usa', name: 'USA LLC Formation', sub: 'Wyoming & Delaware + EIN', icon: Globe, color: 0x38BDF8, hex: '#38BDF8' },
    { id: 'banking', name: 'Stripe & Wise Banking', sub: 'Non-Resident Verified', icon: CreditCard, color: 0x00D2FF, hex: '#00D2FF' },
    { id: 'digibiz', name: 'DIGI BIZ OS', sub: 'AI Desktop Operating System', icon: Cpu, color: 0x10B981, hex: '#10B981' },
    { id: 'agents', name: 'Autonomous AI Agents', sub: 'Sales, Support & Voice', icon: Bot, color: 0x0066FF, hex: '#0066FF' }
  ];

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 650;
    const height = container.clientHeight || 560;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020713, 0.022);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 1.8, 17);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // =========================================================================
    // 2. PROCEDURAL PHOTOREALISTIC CELESTIAL EARTH PLANET
    // =========================================================================
    const planetCanvas = document.createElement('canvas');
    planetCanvas.width = 1024;
    planetCanvas.height = 512;
    const pctx = planetCanvas.getContext('2d')!;

    // Deep cosmic blue oceans
    const oceanGrad = pctx.createLinearGradient(0, 0, 0, 512);
    oceanGrad.addColorStop(0, '#020b18');
    oceanGrad.addColorStop(0.5, '#052142');
    oceanGrad.addColorStop(1, '#020b18');
    pctx.fillStyle = oceanGrad;
    pctx.fillRect(0, 0, 1024, 512);

    // Realistic Earth Continents
    pctx.fillStyle = '#0a3d6b';
    const continents = [
      { x: 260, y: 170, r: 85 }, // Europe / Mediterranean
      { x: 340, y: 210, r: 90 }, // Asia / Middle East
      { x: 430, y: 180, r: 105 }, // East Asia
      { x: 170, y: 155, r: 95 }, // North America
      { x: 210, y: 310, r: 75 }, // South America
      { x: 280, y: 315, r: 95 }, // Africa
      { x: 440, y: 340, r: 60 }, // Australia
    ];

    continents.forEach(c => {
      pctx.beginPath();
      pctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      pctx.fill();

      pctx.fillStyle = '#0f528f';
      pctx.beginPath();
      pctx.arc(c.x + 12, c.y - 8, c.r * 0.7, 0, Math.PI * 2);
      pctx.fill();

      pctx.fillStyle = '#1469b3';
      pctx.beginPath();
      pctx.arc(c.x - 8, c.y + 10, c.r * 0.45, 0, Math.PI * 2);
      pctx.fill();
    });

    // Coastal Shallows (Turquoise cyan fringe)
    pctx.strokeStyle = 'rgba(0, 240, 255, 0.45)';
    pctx.lineWidth = 3;
    continents.forEach(c => {
      pctx.beginPath();
      pctx.arc(c.x, c.y, c.r + 2, 0, Math.PI * 2);
      pctx.stroke();
    });

    // Night side city lights (Cyan & Amber)
    pctx.fillStyle = '#00F0FF';
    for (let j = 0; j < 450; j++) {
      const lx = (Math.sin(j * 43) * 0.48 + 0.5) * 1024;
      const ly = (Math.cos(j * 23) * 0.4 + 0.5) * 512;
      const size = Math.random() > 0.85 ? 2.5 : 1.2;
      pctx.shadowColor = '#00F0FF';
      pctx.shadowBlur = 6;
      pctx.fillRect(lx, ly, size, size);
    }
    pctx.shadowBlur = 0;

    const planetTex = new THREE.CanvasTexture(planetCanvas);
    planetTex.wrapS = THREE.RepeatWrapping;

    // Celestial Planet Sphere
    const planetRadius = 2.6;
    const planetGeo = new THREE.SphereGeometry(planetRadius, 64, 64);
    const planetMat = new THREE.MeshStandardMaterial({
      map: planetTex,
      roughness: 0.38,
      metalness: 0.22,
      bumpScale: 0.05,
    });
    const planetMesh = new THREE.Mesh(planetGeo, planetMat);
    planetMesh.castShadow = true;
    planetMesh.receiveShadow = true;
    // Earth axial tilt
    planetMesh.rotation.z = (23.4 * Math.PI) / 180;
    masterGroup.add(planetMesh);

    // Clouds Sphere Layer (Rotating slightly faster for parallax depth)
    const cloudsCanvas = document.createElement('canvas');
    cloudsCanvas.width = 1024;
    cloudsCanvas.height = 512;
    const cctx = cloudsCanvas.getContext('2d')!;
    cctx.fillStyle = 'rgba(255, 255, 255, 0.18)';
    for (let c = 0; c < 38; c++) {
      const cx = (c * 37) % 1024;
      const cy = 100 + (c * 23) % 312;
      cctx.beginPath();
      cctx.ellipse(cx, cy, 65, 20, 0.25, 0, Math.PI * 2);
      cctx.fill();
    }
    const cloudsTex = new THREE.CanvasTexture(cloudsCanvas);
    cloudsTex.wrapS = THREE.RepeatWrapping;

    const cloudsGeo = new THREE.SphereGeometry(planetRadius * 1.018, 48, 48);
    const cloudsMat = new THREE.MeshStandardMaterial({
      map: cloudsTex,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const cloudsMesh = new THREE.Mesh(cloudsGeo, cloudsMat);
    planetMesh.add(cloudsMesh);

    // Atmospheric Rayleigh Glow Layer (Luminous Cyan Outer Halo)
    const atmoGeo = new THREE.SphereGeometry(planetRadius * 1.055, 48, 48);
    const atmoMat = new THREE.MeshBasicMaterial({
      color: 0x00D2FF,
      transparent: true,
      opacity: 0.32,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });
    const atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
    masterGroup.add(atmoMesh);

    // =========================================================================
    // 3. CLASSICAL KEPLERIAN ORBITAL RINGS (NO LOGO - PURE SPACE TRAJECTORIES)
    // =========================================================================
    const createOrbitRing = (rx: number, ry: number, tiltX: number, tiltY: number, tiltZ: number, color: number, tubeRadius: number = 0.035, dashed: boolean = false) => {
      const curve = new THREE.EllipseCurve(0, 0, rx, ry, 0, 2 * Math.PI, false, 0);
      const points = curve.getPoints(120);
      const points3D = points.map(p => new THREE.Vector3(p.x, p.y, 0));
      const path3D = new THREE.CatmullRomCurve3(points3D, true);

      let ringMesh: THREE.Object3D;
      if (dashed) {
        // Dashed glowing orbital track
        const lineGeo = new THREE.BufferGeometry().setFromPoints(points3D);
        const lineMat = new THREE.LineDashedMaterial({
          color,
          dashSize: 0.35,
          gapSize: 0.18,
          transparent: true,
          opacity: 0.7,
        });
        const line = new THREE.Line(lineGeo, lineMat);
        line.computeLineDistances();
        ringMesh = line;
      } else {
        const tubeGeo = new THREE.TubeGeometry(path3D, 120, tubeRadius, 10, true);
        const tubeMat = new THREE.MeshStandardMaterial({
          color,
          emissive: color,
          emissiveIntensity: 0.75,
          metalness: 0.85,
          roughness: 0.2,
          transparent: true,
          opacity: 0.85,
        });
        ringMesh = new THREE.Mesh(tubeGeo, tubeMat);
      }

      ringMesh.rotation.set(tiltX, tiltY, tiltZ);
      masterGroup.add(ringMesh);
      return { ringMesh, rx, ry, tiltX, tiltY, tiltZ };
    };

    // Track 1: Classical Inclined Equatorial Orbit (34-degree inclination)
    const orbitTrack1 = createOrbitRing(4.8, 2.5, Math.PI / 4.2, -Math.PI / 6, -Math.PI / 5.5, 0x00F0FF, 0.045);
    
    // Track 2: Polar Orbital Path (65-degree steep inclination)
    const orbitTrack2 = createOrbitRing(5.6, 3.2, Math.PI / 2.2, Math.PI / 7, Math.PI / 4, 0x38BDF8, 0.03, true);

    // Track 3: Geostationary Outer Navigation Track (Broad equatorial ellipse)
    const orbitTrack3 = createOrbitRing(6.4, 3.6, Math.PI / 3.4, -Math.PI / 10, 0.1, 0x0066FF, 0.035);

    // =========================================================================
    // 4. FIVE 3D SATELLITES WITH REALISTIC SOLAR PANELS & ANTENNAS
    // =========================================================================
    const create3DSatellite = (colorHex: number): THREE.Group => {
      const satGroup = new THREE.Group();

      // Main Satellite Body (Gold / Brushed Chrome Chassis)
      const bodyGeo = new THREE.BoxGeometry(0.32, 0.26, 0.42);
      const bodyMat = new THREE.MeshStandardMaterial({
        color: 0xE2E8F0,
        metalness: 0.95,
        roughness: 0.15,
      });
      const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
      bodyMesh.castShadow = true;
      satGroup.add(bodyMesh);

      // Dual Solar Panel Wings (Photovoltaic Blue Arrays)
      const solarGeo = new THREE.BoxGeometry(0.72, 0.02, 0.28);
      const solarMat = new THREE.MeshStandardMaterial({
        color: 0x0369A1,
        emissive: 0x0284C7,
        emissiveIntensity: 0.35,
        metalness: 0.8,
        roughness: 0.3,
      });
      
      const leftSolar = new THREE.Mesh(solarGeo, solarMat);
      leftSolar.position.x = -0.55;
      satGroup.add(leftSolar);

      const rightSolar = new THREE.Mesh(solarGeo, solarMat);
      rightSolar.position.x = 0.55;
      satGroup.add(rightSolar);

      // Communication Dish Antenna Pointing Downward
      const dishGeo = new THREE.ConeGeometry(0.18, 0.14, 16, 1, true);
      const dishMat = new THREE.MeshStandardMaterial({
        color: 0xCBD5E1,
        metalness: 0.9,
        roughness: 0.2,
      });
      const dish = new THREE.Mesh(dishGeo, dishMat);
      dish.rotation.x = Math.PI;
      dish.position.y = -0.2;
      satGroup.add(dish);

      // Blinking Navigation LED Beacon
      const ledGeo = new THREE.SphereGeometry(0.09, 12, 12);
      const ledMat = new THREE.MeshBasicMaterial({ color: colorHex });
      const led = new THREE.Mesh(ledGeo, ledMat);
      led.position.set(0, 0.18, 0);
      satGroup.add(led);

      // Dynamic Point Light emitted by satellite
      const satLight = new THREE.PointLight(colorHex, 2.2, 8);
      satGroup.add(satLight);

      return satGroup;
    };

    // Instantiate the 5 classical satellites mapped to their respective orbital tracks
    const satellites: SatelliteData[] = [
      {
        id: 'uk',
        name: 'UK LTD Formation',
        sub: '24-48h Fast Track',
        color: 0x00F0FF,
        orbitRadiusX: 4.8,
        orbitRadiusY: 2.5,
        orbitTiltX: Math.PI / 4.2,
        orbitTiltY: -Math.PI / 6,
        orbitTiltZ: -Math.PI / 5.5,
        speed: 0.018,
        angleOffset: 0,
        group: create3DSatellite(0x00F0FF),
        trailHistory: [],
        trailPoints: new THREE.Points(),
      },
      {
        id: 'usa',
        name: 'USA LLC Formation',
        sub: 'Wyoming & Delaware',
        color: 0x38BDF8,
        orbitRadiusX: 4.8,
        orbitRadiusY: 2.5,
        orbitTiltX: Math.PI / 4.2,
        orbitTiltY: -Math.PI / 6,
        orbitTiltZ: -Math.PI / 5.5,
        speed: 0.018,
        angleOffset: Math.PI,
        group: create3DSatellite(0x38BDF8),
        trailHistory: [],
        trailPoints: new THREE.Points(),
      },
      {
        id: 'banking',
        name: 'Stripe & Wise Banking',
        sub: 'Verified Non-Resident',
        color: 0x00D2FF,
        orbitRadiusX: 5.6,
        orbitRadiusY: 3.2,
        orbitTiltX: Math.PI / 2.2,
        orbitTiltY: Math.PI / 7,
        orbitTiltZ: Math.PI / 4,
        speed: 0.014,
        angleOffset: 1.2,
        group: create3DSatellite(0x00D2FF),
        trailHistory: [],
        trailPoints: new THREE.Points(),
      },
      {
        id: 'digibiz',
        name: 'DIGI BIZ OS',
        sub: 'AI Business Desktop OS',
        color: 0x10B981,
        orbitRadiusX: 5.6,
        orbitRadiusY: 3.2,
        orbitTiltX: Math.PI / 2.2,
        orbitTiltY: Math.PI / 7,
        orbitTiltZ: Math.PI / 4,
        speed: 0.014,
        angleOffset: 1.2 + Math.PI,
        group: create3DSatellite(0x10B981),
        trailHistory: [],
        trailPoints: new THREE.Points(),
      },
      {
        id: 'agents',
        name: 'AI Agent Fleet',
        sub: 'Autonomous Intelligence',
        color: 0x0066FF,
        orbitRadiusX: 6.4,
        orbitRadiusY: 3.6,
        orbitTiltX: Math.PI / 3.4,
        orbitTiltY: -Math.PI / 10,
        orbitTiltZ: 0.1,
        speed: 0.011,
        angleOffset: 2.4,
        group: create3DSatellite(0x0066FF),
        trailHistory: [],
        trailPoints: new THREE.Points(),
      },
    ];

    // Setup trail particles for each satellite
    const trailLength = 30;
    satellites.forEach(sat => {
      masterGroup.add(sat.group);

      const trailGeo = new THREE.BufferGeometry();
      const trailPositions = new Float32Array(trailLength * 3);
      trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
      const trailMat = new THREE.PointsMaterial({
        color: sat.color,
        size: 0.12,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
      });
      sat.trailPoints = new THREE.Points(trailGeo, trailMat);
      masterGroup.add(sat.trailPoints);
    });

    // =========================================================================
    // 5. CINEMATIC REFLECTIVE CYBER STAGE / PODIUM & STARFIELD
    // =========================================================================
    const stageGeo = new THREE.CylinderGeometry(7.5, 8.2, 0.4, 64);
    const stageMat = new THREE.MeshStandardMaterial({
      color: 0x070E1A,
      metalness: 0.9,
      roughness: 0.22,
    });
    const stageMesh = new THREE.Mesh(stageGeo, stageMat);
    stageMesh.position.y = -4.2;
    stageMesh.receiveShadow = true;
    masterGroup.add(stageMesh);

    // Stage LED Outer Ring
    const stageRingGeo = new THREE.RingGeometry(5.8, 6.05, 64);
    const stageRingMat = new THREE.MeshBasicMaterial({
      color: 0x00F0FF,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const stageRing = new THREE.Mesh(stageRingGeo, stageRingMat);
    stageRing.rotation.x = Math.PI / 2;
    stageRing.position.y = -3.98;
    masterGroup.add(stageRing);

    // Deep Cosmic Starfield
    const starCount = 400;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    for (let s = 0; s < starCount; s++) {
      starPos[s * 3] = (Math.random() - 0.5) * 80;
      starPos[s * 3 + 1] = (Math.random() - 0.5) * 60;
      starPos[s * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0x38BDF8,
      size: 0.12,
      transparent: true,
      opacity: 0.65,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // =========================================================================
    // 6. LIGHTING
    // =========================================================================
    const sunLight = new THREE.DirectionalLight(0xE2E8F0, 3.4);
    sunLight.position.set(8, 12, 10);
    sunLight.castShadow = true;
    scene.add(sunLight);

    const rimLight = new THREE.SpotLight(0x00F0FF, 6.0, 30, Math.PI / 4, 0.4);
    rimLight.position.set(-8, 5, -8);
    rimLight.target = planetMesh;
    scene.add(rimLight);

    const ambientLight = new THREE.AmbientLight(0x0A192F, 1.4);
    scene.add(ambientLight);

    // Mouse Parallax Interaction
    let targetRotY = 0;
    let targetRotX = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = x * 0.35;
      targetRotX = y * 0.25;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // =========================================================================
    // 7. ANIMATION LOOP: CLASSICAL ORBITAL MECHANICS
    // =========================================================================
    let animId: number;
    const clock = new THREE.Clock();
    let currentAngle = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Majestic Planet & Cloud Rotation
      planetMesh.rotation.y = elapsed * 0.08;
      cloudsMesh.rotation.y = elapsed * 0.095;

      // Update Satellites along true 3D orbital trajectories
      satellites.forEach(sat => {
        const theta = sat.angleOffset + elapsed * sat.speed * 6.28;
        const localX = Math.cos(theta) * sat.orbitRadiusX;
        const localY = Math.sin(theta) * sat.orbitRadiusY;
        const satPos = new THREE.Vector3(localX, localY, 0);

        // Apply orbital inclination matrix
        const euler = new THREE.Euler(sat.orbitTiltX, sat.orbitTiltY, sat.orbitTiltZ);
        satPos.applyEuler(euler);
        sat.group.position.copy(satPos);

        // Rotate satellite body gently
        sat.group.rotation.y = elapsed * 0.5;

        // Trail positions
        sat.trailHistory.unshift(satPos.clone());
        if (sat.trailHistory.length > trailLength) sat.trailHistory.pop();

        const attr = sat.trailPoints.geometry.attributes.position as THREE.BufferAttribute;
        for (let t = 0; t < trailLength; t++) {
          if (sat.trailHistory[t]) {
            attr.setXYZ(t, sat.trailHistory[t].x, sat.trailHistory[t].y, sat.trailHistory[t].z);
          }
        }
        attr.needsUpdate = true;
      });

      // Starfield slow drift
      starField.rotation.y = elapsed * 0.008;

      // Camera Modes
      if (cameraMode === 'cinematic') {
        const camX = Math.sin(elapsed * 0.15) * 1.5;
        const camY = 1.6 + Math.cos(elapsed * 0.12) * 0.8;
        camera.position.x += (camX - camera.position.x) * 0.04;
        camera.position.y += (camY - camera.position.y) * 0.04;
        camera.position.z += (17 - camera.position.z) * 0.04;
        masterGroup.rotation.y += (targetRotY - masterGroup.rotation.y) * 0.05;
        masterGroup.rotation.x += (targetRotX - masterGroup.rotation.x) * 0.05;
      } else if (cameraMode === 'front') {
        camera.position.x += (0 - camera.position.x) * 0.08;
        camera.position.y += (0.2 - camera.position.y) * 0.08;
        camera.position.z += (15 - camera.position.z) * 0.08;
        masterGroup.rotation.set(0, 0, 0);
      } else if (cameraMode === 'angled') {
        camera.position.x += (8 - camera.position.x) * 0.08;
        camera.position.y += (5 - camera.position.y) * 0.08;
        camera.position.z += (15 - camera.position.z) * 0.08;
      }

      camera.lookAt(0, 0, 0);

      // Flight Telemetry Update
      if (Math.floor(elapsed * 10) % 20 === 0) {
        setTelemetry({
          fps: 60,
          orbitVelocity: (27600 + Math.sin(elapsed) * 35).toFixed(0) + ' km/h',
          altitude: (412 + Math.cos(elapsed) * 3).toFixed(0) + ' km',
          phase: '5 SATELLITES SYNCHRONIZED',
          coreTemp: '2.7 K'
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [cameraMode]);

  return (
    <div className="relative w-full h-[520px] md:h-[600px] lg:h-[650px] flex items-center justify-center select-none overflow-hidden rounded-3xl bg-radial-gradient from-[#08152c] via-[#030814] to-[#01040a] border border-brand-blue/30 shadow-[0_0_80px_rgba(0,240,255,0.25)]">
      {/* Three.js Canvas */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Left: Classical Telemetry Status HUD */}
      <div className="absolute top-5 left-5 pointer-events-none space-y-1">
        <div className="glass-panel px-3 py-1.5 rounded-lg border border-brand-blue/40 text-[11px] font-mono flex items-center gap-2 text-brand-blue">
          <span className="w-2 h-2 rounded-full bg-brand-blue animate-ping" />
          <span className="font-bold">CLASSICAL CELESTIAL ORBIT // 5 SATELLITES</span>
        </div>
        <div className="text-[10px] font-mono text-slate-400 pl-1">
          PHOTOREALISTIC EARTH + 3 KEPLERIAN TRACKS + ACTIVE FLEET
        </div>
      </div>

      {/* Top Right: Camera Switcher Controls */}
      <div className="absolute top-5 right-5 z-20 flex items-center gap-2">
        <button
          onClick={() => setCameraMode('cinematic')}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
            cameraMode === 'cinematic'
              ? 'bg-brand-blue text-black font-bold shadow-glow-blue-sm'
              : 'glass-panel text-slate-300 hover:text-white border border-slate-700'
          }`}
          title="Movie camera motion"
        >
          <Camera className="w-3.5 h-3.5" />
          <span>CINEMATIC</span>
        </button>

        <button
          onClick={() => setCameraMode('front')}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
            cameraMode === 'front'
              ? 'bg-brand-blue text-black font-bold shadow-glow-blue-sm'
              : 'glass-panel text-slate-300 hover:text-white border border-slate-700'
          }`}
          title="Equatorial view"
        >
          <Compass className="w-3.5 h-3.5" />
          <span>EQUATOR</span>
        </button>

        <button
          onClick={() => setCameraMode('angled')}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
            cameraMode === 'angled'
              ? 'bg-brand-blue text-black font-bold shadow-glow-blue-sm'
              : 'glass-panel text-slate-300 hover:text-white border border-slate-700'
          }`}
          title="Polar orbital view"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>POLAR</span>
        </button>
      </div>

      {/* Floating Interactive 5 Service Tags Overlay */}
      <div className="absolute left-4 top-20 bottom-16 pointer-events-none hidden md:flex flex-col justify-center gap-2 z-10">
        {satInfos.map(sat => {
          const Icon = sat.icon;
          return (
            <div 
              key={sat.id}
              className="glass-panel px-3 py-1.5 rounded-xl border border-slate-700/80 bg-brand-dark/80 backdrop-blur flex items-center gap-2.5 max-w-[210px] shadow-lg pointer-events-auto transition-transform hover:scale-105"
            >
              <div 
                className="w-2.5 h-2.5 rounded-full" 
                style={{ backgroundColor: sat.hex, boxShadow: `0 0 8px ${sat.hex}` }} 
              />
              <div className="min-w-0">
                <div className="text-[11px] font-semibold text-white truncate">{sat.name}</div>
                <div className="text-[9px] text-slate-400 truncate">{sat.sub}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Live Flight Telemetry Strip */}
      <div className="absolute bottom-4 left-4 right-4 pointer-events-none flex flex-wrap justify-between items-center text-[10px] sm:text-xs font-mono text-slate-300 px-3 py-2 rounded-xl glass-panel border border-brand-blue/25 bg-brand-dark/85">
        <div>
          VELOCITY: <span className="text-brand-blue font-bold">{telemetry.orbitVelocity}</span>
        </div>
        <div>
          ALTITUDE: <span className="text-emerald-400 font-bold">{telemetry.altitude}</span>
        </div>
        <div>
          CORE: <span className="text-white font-bold">{telemetry.coreTemp}</span>
        </div>
        <div className="hidden sm:block">
          STATUS: <span className="text-sky-300 font-bold">{telemetry.phase}</span>
        </div>
      </div>

      {/* Viewfinder Corner Crosshairs */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-brand-blue/70 pointer-events-none" />
      <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-brand-blue/70 pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-brand-blue/70 pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-brand-blue/70 pointer-events-none" />
    </div>
  );
};
