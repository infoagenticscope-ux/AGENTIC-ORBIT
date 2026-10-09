import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  Globe2, 
  CreditCard, 
  Cpu, 
  Bot, 
  Camera, 
  Compass, 
  Maximize2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ServiceNode {
  id: string;
  name: string;
  sub: string;
  price: string;
  icon: any;
  color: string;
  hexColor: number;
  path: string;
  angle: number; // base angle in degrees
}

export const RealClassical3DOrbit: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [activeNode, setActiveNode] = useState<number>(0);
  const [cameraView, setCameraView] = useState<'cinematic' | 'front' | 'top'>('cinematic');
  const [telemetry, setTelemetry] = useState({
    velocity: '27,840 km/h',
    altitude: '412 km',
    phase: 'LOCKED & SYNCHRONIZED',
    status: 'ACTIVE FLIGHT'
  });

  const services: ServiceNode[] = [
    {
      id: 'uk',
      name: 'UK LTD Formation',
      sub: 'Companies House 24-48h',
      price: '£140',
      icon: Building2,
      color: '#00F0FF',
      hexColor: 0x00F0FF,
      path: '/uk-services',
      angle: 0
    },
    {
      id: 'usa',
      name: 'USA LLC Formation',
      sub: 'Wyoming & Delaware + EIN',
      price: '£150',
      icon: Globe2,
      color: '#38BDF8',
      hexColor: 0x38BDF8,
      path: '/usa-services',
      angle: 72
    },
    {
      id: 'banking',
      name: 'Stripe & Wise Banking',
      sub: '100% Non-Resident Verified',
      price: 'Guaranteed',
      icon: CreditCard,
      color: '#00D2FF',
      hexColor: 0x00D2FF,
      path: '/banking-solutions',
      angle: 144
    },
    {
      id: 'digibiz',
      name: 'DIGI BIZ OS',
      sub: 'AI Business Desktop System',
      price: 'PKR 14,900',
      icon: Cpu,
      color: '#10B981',
      hexColor: 0x10B981,
      path: '/digibiz-os',
      angle: 216
    },
    {
      id: 'agents',
      name: 'Autonomous AI Agents',
      sub: 'Sales, Voice & WhatsApp Fleet',
      price: 'Enterprise',
      icon: Bot,
      color: '#0066FF',
      hexColor: 0x0066FF,
      path: '/ai-platform',
      angle: 288
    }
  ];

  // 3D Three.js Scene Setup
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 550;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020713, 0.024);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 1.8, 17.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // =========================================================================
    // 2. PROCEDURAL HIGH-RESOLUTION EARTH PLANET TEXTURE
    // =========================================================================
    const planetCanvas = document.createElement('canvas');
    planetCanvas.width = 1024;
    planetCanvas.height = 512;
    const pctx = planetCanvas.getContext('2d')!;

    // Cosmic deep blue oceans
    const oceanGrad = pctx.createLinearGradient(0, 0, 0, 512);
    oceanGrad.addColorStop(0, '#020b18');
    oceanGrad.addColorStop(0.5, '#052144');
    oceanGrad.addColorStop(1, '#020b18');
    pctx.fillStyle = oceanGrad;
    pctx.fillRect(0, 0, 1024, 512);

    // Realistic Continental Shapes
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

      // Terrain details
      pctx.fillStyle = '#0f528f';
      pctx.beginPath();
      pctx.arc(c.x + 12, c.y - 8, c.r * 0.7, 0, Math.PI * 2);
      pctx.fill();

      pctx.fillStyle = '#1469b3';
      pctx.beginPath();
      pctx.arc(c.x - 8, c.y + 10, c.r * 0.45, 0, Math.PI * 2);
      pctx.fill();
    });

    // Coastal Shallows
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
    const planetRadius = 2.5;
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
    // Earth's axial tilt (23.4 degrees)
    planetMesh.rotation.z = (23.4 * Math.PI) / 180;
    masterGroup.add(planetMesh);

    // Atmospheric Rayleigh Scattering Cyan Glow Layer
    const atmoGeo = new THREE.SphereGeometry(planetRadius * 1.055, 48, 48);
    const atmoMat = new THREE.MeshBasicMaterial({
      color: 0x00D2FF,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });
    const atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
    masterGroup.add(atmoMesh);

    // Clouds Sphere Layer
    const cloudsCanvas = document.createElement('canvas');
    cloudsCanvas.width = 1024;
    cloudsCanvas.height = 512;
    const cctx = cloudsCanvas.getContext('2d')!;
    cctx.fillStyle = 'rgba(255, 255, 255, 0.16)';
    for (let c = 0; c < 36; c++) {
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

    // =========================================================================
    // 3. CLASSICAL 3D ELLIPTICAL ORBIT RINGS (Tilted at 35 degrees)
    // =========================================================================
    // Outer Primary Orbit Ring (Matches user image & formationplanet format)
    const orbitRadiusX = 5.2;
    const orbitRadiusY = 2.6;
    const orbitCurve = new THREE.EllipseCurve(0, 0, orbitRadiusX, orbitRadiusY, 0, 2 * Math.PI, false, 0);
    const orbitPoints = orbitCurve.getPoints(140);
    const orbitPoints3D = orbitPoints.map(p => new THREE.Vector3(p.x, p.y, 0));
    const orbitPath3D = new THREE.CatmullRomCurve3(orbitPoints3D, true);

    // Glowing Neon Cyan Primary Orbit Tube
    const orbitTubeGeo = new THREE.TubeGeometry(orbitPath3D, 140, 0.065, 12, true);
    const orbitTubeMat = new THREE.MeshStandardMaterial({
      color: 0x93C5FD,
      emissive: 0x00F0FF,
      emissiveIntensity: 0.9,
      metalness: 0.95,
      roughness: 0.12,
    });
    const orbitTubeMesh = new THREE.Mesh(orbitTubeGeo, orbitTubeMat);
    
    // Tilt the orbit at classical 35-degree angle
    const orbitTilt = new THREE.Euler(Math.PI / 4.2, -Math.PI / 6, -Math.PI / 5.5);
    orbitTubeMesh.rotation.copy(orbitTilt);
    masterGroup.add(orbitTubeMesh);

    // Secondary Outer Dashed Navigation Ring
    const dashedLineGeo = new THREE.BufferGeometry().setFromPoints(orbitPoints3D);
    const dashedLineMat = new THREE.LineDashedMaterial({
      color: 0x38BDF8,
      dashSize: 0.4,
      gapSize: 0.2,
      transparent: true,
      opacity: 0.65,
    });
    const dashedRing = new THREE.Line(dashedLineGeo, dashedLineMat);
    dashedRing.computeLineDistances();
    dashedRing.scale.set(1.18, 1.18, 1.18);
    dashedRing.rotation.copy(orbitTilt);
    masterGroup.add(dashedRing);

    // Inner Solid Guide Ring
    const innerRingGeo = new THREE.BufferGeometry().setFromPoints(orbitPoints3D);
    const innerRingMat = new THREE.LineBasicMaterial({
      color: 0x0066FF,
      transparent: true,
      opacity: 0.45,
    });
    const innerRing = new THREE.Line(innerRingGeo, innerRingMat);
    innerRing.scale.set(0.85, 0.85, 0.85);
    innerRing.rotation.copy(orbitTilt);
    masterGroup.add(innerRing);

    // =========================================================================
    // 4. REVOLVING 3D SATELLITE CHROME ORB WITH GLOWING TRAIL (Matching user's image)
    // =========================================================================
    const satOrbGeo = new THREE.SphereGeometry(0.55, 32, 32);
    const satOrbMat = new THREE.MeshStandardMaterial({
      color: 0xFFFFFF,
      emissive: 0x00F0FF,
      emissiveIntensity: 0.6,
      metalness: 0.98,
      roughness: 0.08,
    });
    const satelliteOrb = new THREE.Mesh(satOrbGeo, satOrbMat);
    satelliteOrb.castShadow = true;
    masterGroup.add(satelliteOrb);

    // Point Light attached to the satellite orb
    const satPointLight = new THREE.PointLight(0x00F0FF, 3.5, 14);
    satelliteOrb.add(satPointLight);

    // Sparkle trail particles following the satellite orb
    const trailCount = 50;
    const trailPositions = new Float32Array(trailCount * 3);
    const trailGeo = new THREE.BufferGeometry();
    trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
    const trailMat = new THREE.PointsMaterial({
      color: 0x00F0FF,
      size: 0.16,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const trailPoints = new THREE.Points(trailGeo, trailMat);
    masterGroup.add(trailPoints);
    const trailHistory: THREE.Vector3[] = [];

    // =========================================================================
    // 5. FIVE 3D SATELLITE PROBES REVOLVING ON ORBIT
    // =========================================================================
    const createSatelliteProbe = (colorHex: number): THREE.Group => {
      const g = new THREE.Group();

      // Main metallic chassis
      const body = new THREE.Mesh(
        new THREE.BoxGeometry(0.3, 0.24, 0.38),
        new THREE.MeshStandardMaterial({ color: 0xE2E8F0, metalness: 0.95, roughness: 0.15 })
      );
      g.add(body);

      // Solar Wings
      const wingMat = new THREE.MeshStandardMaterial({
        color: 0x0369A1,
        emissive: 0x0284C7,
        emissiveIntensity: 0.4,
        metalness: 0.8,
        roughness: 0.3
      });
      const leftWing = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.02, 0.24), wingMat);
      leftWing.position.x = -0.5;
      g.add(leftWing);

      const rightWing = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.02, 0.24), wingMat);
      rightWing.position.x = 0.5;
      g.add(rightWing);

      // Dish antenna
      const dish = new THREE.Mesh(
        new THREE.ConeGeometry(0.16, 0.12, 16, 1, true),
        new THREE.MeshStandardMaterial({ color: 0xCBD5E1, metalness: 0.9, roughness: 0.2 })
      );
      dish.rotation.x = Math.PI;
      dish.position.y = -0.18;
      g.add(dish);

      // Beacon
      const beacon = new THREE.Mesh(
        new THREE.SphereGeometry(0.08, 12, 12),
        new THREE.MeshBasicMaterial({ color: colorHex })
      );
      beacon.position.y = 0.16;
      g.add(beacon);

      return g;
    };

    const probeMeshes: THREE.Group[] = services.map(s => {
      const probe = createSatelliteProbe(s.hexColor);
      masterGroup.add(probe);
      return probe;
    });

    // =========================================================================
    // 6. CINEMATIC REFLECTIVE CYBER STAGE & STARFIELD
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

    // Neon LED Stage Ring
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

    // Starfield in background
    const starCount = 350;
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
    // 7. LIGHTING
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

    // Mouse Parallax
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
    // 8. ANIMATION LOOP: REAL ORBITAL PHYSICS
    // =========================================================================
    let animId: number;
    const clock = new THREE.Clock();
    let satAngle = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth continuous planet & cloud rotation
      planetMesh.rotation.y = elapsed * 0.08;
      cloudsMesh.rotation.y = elapsed * 0.095;

      // Dashed ring slow reverse spin
      dashedRing.rotation.z = -elapsed * 0.03;

      // 1. Satellite Orb traversal along 3D elliptical orbit
      satAngle += 0.016;
      const rawX = Math.cos(satAngle) * orbitRadiusX;
      const rawY = Math.sin(satAngle) * orbitRadiusY;
      const satVec = new THREE.Vector3(rawX, rawY, 0);
      satVec.applyEuler(orbitTilt);
      satelliteOrb.position.copy(satVec);

      // Record trail
      trailHistory.unshift(satVec.clone());
      if (trailHistory.length > trailCount) trailHistory.pop();

      const posAttr = trailGeo.attributes.position as THREE.BufferAttribute;
      for (let k = 0; k < trailCount; k++) {
        if (trailHistory[k]) {
          posAttr.setXYZ(k, trailHistory[k].x, trailHistory[k].y, trailHistory[k].z);
        }
      }
      posAttr.needsUpdate = true;

      // 2. Five Satellite Probes moving along the orbit
      services.forEach((s, idx) => {
        const probeTheta = (s.angle * Math.PI) / 180 + elapsed * 0.18;
        const px = Math.cos(probeTheta) * (orbitRadiusX * 1.08);
        const py = Math.sin(probeTheta) * (orbitRadiusY * 1.08);
        const probeVec = new THREE.Vector3(px, py, 0);
        probeVec.applyEuler(orbitTilt);

        const probeMesh = probeMeshes[idx];
        if (probeMesh) {
          probeMesh.position.copy(probeVec);
          probeMesh.rotation.y = elapsed * 0.6;
        }
      });

      // Starfield slow drift
      starField.rotation.y = elapsed * 0.008;

      // Camera Modes
      if (cameraView === 'cinematic') {
        const camX = Math.sin(elapsed * 0.15) * 1.5;
        const camY = 1.6 + Math.cos(elapsed * 0.12) * 0.8;
        camera.position.x += (camX - camera.position.x) * 0.04;
        camera.position.y += (camY - camera.position.y) * 0.04;
        camera.position.z += (17.5 - camera.position.z) * 0.04;
        masterGroup.rotation.y += (targetRotY - masterGroup.rotation.y) * 0.05;
        masterGroup.rotation.x += (targetRotX - masterGroup.rotation.x) * 0.05;
      } else if (cameraView === 'front') {
        camera.position.x += (0 - camera.position.x) * 0.08;
        camera.position.y += (0.2 - camera.position.y) * 0.08;
        camera.position.z += (15.5 - camera.position.z) * 0.08;
        masterGroup.rotation.set(0, 0, 0);
      } else if (cameraView === 'top') {
        camera.position.x += (0 - camera.position.x) * 0.08;
        camera.position.y += (14 - camera.position.y) * 0.08;
        camera.position.z += (10 - camera.position.z) * 0.08;
      }

      camera.lookAt(0, 0, 0);

      // Telemetry Update
      if (Math.floor(elapsed * 10) % 20 === 0) {
        setTelemetry({
          velocity: (27800 + Math.sin(elapsed) * 45).toFixed(0) + ' km/h',
          altitude: (412 + Math.cos(elapsed) * 3).toFixed(0) + ' km',
          phase: '5 PROBES SYNCHRONIZED',
          status: 'ACTIVE ORBIT FLIGHT'
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
  }, [cameraView]);

  return (
    <div className="relative w-full flex flex-col items-center select-none py-2">
      {/* Main 3D Orbit Display Viewport */}
      <div className="relative w-full h-[480px] sm:h-[540px] md:h-[580px] lg:h-[620px] rounded-3xl overflow-hidden glass-panel-glow border border-brand-blue/35 bg-radial-gradient from-[#08152c] via-[#030814] to-[#01040a] shadow-[0_0_80px_rgba(0,240,255,0.25)]">
        
        {/* Three.js Canvas Container */}
        <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

        {/* Top Left: Orbit Telemetry Indicator */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none space-y-1">
          <div className="inline-flex items-center gap-2 rounded-full glass-panel border border-brand-blue/40 px-3 py-1 text-xs font-mono font-bold text-brand-blue shadow-glow-blue-sm">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-ping" />
            <span>AGENTIC ORBIT // LIVE CELESTIAL FLIGHT</span>
          </div>
          <div className="text-[10px] font-mono text-slate-400 pl-2">
            35° TILTED ELLIPTICAL ORBIT + 5 SATELLITE PROBES
          </div>
        </div>

        {/* Top Right: Camera View Controls */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5">
          <button
            onClick={() => setCameraView('cinematic')}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1 ${
              cameraView === 'cinematic'
                ? 'bg-brand-blue text-black font-bold shadow-glow-blue-sm'
                : 'glass-panel text-slate-300 hover:text-white border border-slate-700'
            }`}
            title="Cinematic motion"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>CINEMATIC</span>
          </button>

          <button
            onClick={() => setCameraView('front')}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1 ${
              cameraView === 'front'
                ? 'bg-brand-blue text-black font-bold shadow-glow-blue-sm'
                : 'glass-panel text-slate-300 hover:text-white border border-slate-700'
            }`}
            title="Frontal view"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>FRONT</span>
          </button>

          <button
            onClick={() => setCameraView('top')}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1 ${
              cameraView === 'top'
                ? 'bg-brand-blue text-black font-bold shadow-glow-blue-sm'
                : 'glass-panel text-slate-300 hover:text-white border border-slate-700'
            }`}
            title="Polar high angle view"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>POLAR</span>
          </button>
        </div>

        {/* Floating Service Badges Overlay (Matches formationplanet format + interactive) */}
        <div className="absolute left-3 top-20 bottom-16 pointer-events-none hidden sm:flex flex-col justify-center gap-2 z-20">
          {services.map((s, idx) => {
            const Icon = s.icon;
            const isSelected = activeNode === idx;
            return (
              <button
                key={s.id}
                onClick={() => {
                  setActiveNode(idx);
                  navigate(s.path);
                }}
                className={`glass-panel px-3 py-2 rounded-xl border text-left flex items-center gap-2.5 max-w-[220px] shadow-lg pointer-events-auto transition-all duration-300 group hover:scale-105 ${
                  isSelected 
                    ? 'border-brand-blue bg-brand-blue/20 shadow-glow-blue-sm' 
                    : 'border-slate-800 bg-brand-dark/85 hover:border-brand-blue/50'
                }`}
              >
                <div 
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border"
                  style={{ 
                    backgroundColor: `${s.color}15`, 
                    borderColor: `${s.color}40`,
                    color: s.color 
                  }}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-bold text-white truncate group-hover:text-brand-blue transition-colors">
                    {s.name}
                  </div>
                  <div className="text-[9px] text-slate-400 truncate">
                    {s.sub}
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            );
          })}
        </div>

        {/* Bottom Live Flight Telemetry Strip */}
        <div className="absolute bottom-3 left-3 right-3 z-20 pointer-events-none flex flex-wrap justify-between items-center text-[10px] sm:text-xs font-mono text-slate-300 px-3.5 py-2 rounded-xl glass-panel border border-brand-blue/30 bg-brand-dark/90 backdrop-blur">
          <div>
            ORBIT VELOCITY: <span className="text-brand-blue font-bold">{telemetry.velocity}</span>
          </div>
          <div>
            ALTITUDE: <span className="text-emerald-400 font-bold">{telemetry.altitude}</span>
          </div>
          <div className="hidden md:block">
            STATUS: <span className="text-sky-300 font-bold">{telemetry.phase}</span>
          </div>
        </div>

        {/* Viewfinder Crosshair Accents */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-brand-blue/70 pointer-events-none" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-brand-blue/70 pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-brand-blue/70 pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-brand-blue/70 pointer-events-none" />
      </div>

      {/* Mobile Horizontal Carousel of Services */}
      <div className="sm:hidden flex overflow-x-auto w-full gap-2 pt-3 pb-1 px-1 no-scrollbar">
        {services.map((s, idx) => {
          const Icon = s.icon;
          return (
            <button
              key={s.id}
              onClick={() => {
                setActiveNode(idx);
                navigate(s.path);
              }}
              className="glass-panel px-3 py-2 rounded-xl border border-slate-800 bg-brand-dark/90 flex items-center gap-2 shrink-0 text-left"
            >
              <Icon className="w-4 h-4 text-brand-blue" />
              <div className="text-[11px] font-semibold text-white whitespace-nowrap">{s.name}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
