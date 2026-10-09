import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Globe2, 
  CreditCard, 
  Cpu, 
  Bot, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { CentralPlanetGlobe } from './CentralPlanetGlobe';

interface OrbitBadge {
  id: string;
  name: string;
  sub: string;
  icon: any;
  color: string;
  path: string;
}

export const HeroFormationOrbit: React.FC = () => {
  const [activeBadge, setActiveBadge] = useState<number>(0);
  const [rotationAngle, setRotationAngle] = useState<number>(0);

  const badges: OrbitBadge[] = [
    {
      id: 'uk',
      name: 'UK LTD Formation',
      sub: '24-48h Companies House',
      icon: Building2,
      color: '#00F0FF',
      path: '/uk-services'
    },
    {
      id: 'usa',
      name: 'USA LLC Formation',
      sub: 'Wyoming & Delaware + EIN',
      icon: Globe2,
      color: '#38BDF8',
      path: '/usa-services'
    },
    {
      id: 'banking',
      name: 'Stripe & Banking',
      icon: CreditCard,
      color: '#00D2FF',
      sub: 'Wise, Tide & Mercury',
      path: '/banking-solutions'
    },
    {
      id: 'digibiz',
      name: 'DIGI BIZ OS',
      sub: 'PKR 14.9k Lifetime AI OS',
      icon: Cpu,
      color: '#10B981',
      path: '/digibiz-os'
    },
    {
      id: 'agents',
      name: 'AI Agent Fleet',
      sub: 'Autonomous Sales & Support',
      icon: Bot,
      color: '#0066FF',
      path: '/ai-platform'
    }
  ];

  // Smooth continuous orbital rotation
  useEffect(() => {
    let animId: number;
    const speed = 0.35; // degrees per frame
    const animate = () => {
      setRotationAngle((prev) => (prev + speed) % 360);
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative w-full flex justify-center items-center select-none py-8">
      {/* Outer Radial Glow Behind Orbit */}
      <div className="absolute w-[440px] h-[440px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-br from-brand-blue/25 via-sky-500/10 to-transparent blur-3xl pointer-events-none" />

      {/* Main Orbit Frame: 440px on mobile, 480px on desktop */}
      <div className="relative w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] md:w-[480px] md:h-[480px] flex items-center justify-center animate-float">
        
        {/* Ring 1: Continuous Clockwise Outer Neon Orbit Ring */}
        <div className="absolute inset-0 rounded-full border border-brand-blue/30 shadow-[0_0_30px_rgba(0,240,255,0.15)] animate-[spin_26s_linear_infinite]" />

        {/* Ring 2: Reverse Counter-Clockwise Dashed Cyber Orbit Ring (Matches Formation Planet format) */}
        <div className="absolute inset-[6%] rounded-full border-2 border-dashed border-sky-400/35 animate-[spin_34s_linear_infinite_reverse]" />

        {/* Ring 3: Inner Solid Guide Ring */}
        <div className="absolute inset-[15%] rounded-full border border-brand-blue/20" />

        {/* ========================================================================= */}
        {/* CENTRAL PLANET: REAL 3D ROTATING CELESTIAL GLOBE (NO STATIC LOGO IMAGE) */}
        {/* ========================================================================= */}
        <div className="relative z-20 flex items-center justify-center group cursor-pointer transition-transform duration-300 hover:scale-105">
          <CentralPlanetGlobe size={180} />
        </div>

        {/* ========================================================================= */}
        {/* REVOLVING ORBITAL SATELLITE BADGES (5 Services Orbiting along the Ring) */}
        {/* ========================================================================= */}
        {badges.map((badge, idx) => {
          const Icon = badge.icon;
          // Calculate angle for 5 items equally spaced (72 deg apart) + current rotationAngle
          const baseAngle = (idx * (360 / badges.length));
          const currentDeg = (baseAngle + rotationAngle) % 360;
          const rad = (currentDeg * Math.PI) / 180;

          // Responsive orbital radius (matches the outer dashed ring)
          const radius = 43; // percentage from center
          const x = 50 + radius * Math.cos(rad);
          const y = 50 + radius * Math.sin(rad);

          const isActive = idx === activeBadge;

          return (
            <div
              key={badge.id}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              className="absolute z-30 transition-all duration-75 pointer-events-auto"
            >
              <button
                onClick={() => setActiveBadge(idx)}
                className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl glass-panel border transition-all duration-300 group shadow-lg ${
                  isActive
                    ? 'border-brand-blue bg-brand-blue/25 scale-110 shadow-glow-blue'
                    : 'border-slate-700/80 bg-brand-dark/95 hover:border-brand-blue/60 hover:scale-105'
                }`}
                title={badge.name}
              >
                <Icon 
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${
                    isActive ? 'text-brand-blue' : 'text-slate-300 group-hover:text-brand-blue'
                  }`} 
                />

                {/* Pulse dot on active item */}
                {isActive && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-brand-blue animate-ping" />
                )}
              </button>
            </div>
          );
        })}

        {/* ========================================================================= */}
        {/* GLOWING ORBITAL SPARKS (Matches the glowing dots on Formation Planet) */}
        {/* ========================================================================= */}
        <span className="absolute h-2.5 w-2.5 rounded-full bg-brand-blue shadow-glow-blue animate-ping" style={{ top: '18%', left: '12%' }} />
        <span className="absolute h-2 w-2 rounded-full bg-sky-300 shadow-glow-blue-sm" style={{ top: '32%', left: '86%' }} />
        <span className="absolute h-2.5 w-2.5 rounded-full bg-brand-blue shadow-glow-blue" style={{ top: '68%', left: '16%' }} />
        <span className="absolute h-2 w-2 rounded-full bg-sky-400 shadow-glow-blue-sm" style={{ top: '82%', left: '76%' }} />
        <span className="absolute h-1.5 w-1.5 rounded-full bg-white shadow-glow-blue-sm" style={{ top: '44%', left: '5%' }} />

        {/* Live Active Badge Description Tooltip Pill */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap z-30">
          <div className="glass-panel px-4 py-1.5 rounded-full border border-brand-blue/40 text-xs font-mono text-white flex items-center gap-2 shadow-glow-blue-sm">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            <span className="text-brand-blue font-bold">{badges[activeBadge].name}</span>
            <span className="text-slate-400 hidden sm:inline">| {badges[activeBadge].sub}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
