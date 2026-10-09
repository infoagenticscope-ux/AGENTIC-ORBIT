import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2,
  Globe2,
  Landmark,
  CreditCard,
  Bot, 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  BarChart3, 
  Users, 
  Workflow, 
  Headphones, 
  Lock, 
  Radio, 
  Server, 
  Code,
  Layers,
  ChevronRight,
  TrendingUp,
  Activity,
  FileCheck2,
  DollarSign,
  Calendar,
  Flag,
  FileText
} from 'lucide-react';
import { 
  BRAND, 
  UK_SERVICES, 
  USA_SERVICES, 
  BANKING_SOLUTIONS, 
  DIGIBIZ_OS_HIGHLIGHTS,
  AI_PLATFORM_MODULES, 
  HOW_IT_WORKS_STEPS, 
  WHY_AGENTIC_ORBIT 
} from '../data/content';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { RealClassical3DOrbit } from '../components/3d/RealClassical3DOrbit';
import { Agent3DNetwork } from '../components/3d/Agent3DNetwork';
import { Automation3DFlow } from '../components/3d/Automation3DFlow';
import { VoiceWaveform3D } from '../components/3d/VoiceWaveform3D';
import { CrmAnalyticsShowcase } from '../components/CrmAnalyticsShowcase';
import { TiltCard3D } from '../components/3d/TiltCard3D';

interface HomeProps {
  onOpenContact: (service?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenContact }) => {
  const [calcCountry, setCalcCountry] = useState<'uk' | 'usa'>('uk');
  const [calcPackage, setCalcPackage] = useState<string>('starter');

  const marqueeItems = [
    "UK LTD Formation",
    "US LLC Formation",
    "Banking & Payments",
    "DIGI BIZ OS",
    "VAT Registration",
    "HMRC UTR Number",
    "Director ID Verification",
    "London Registered Office",
    "Annual Confirmation Statement",
    "Stripe & Wise Setup",
    "WhatsApp AI Agents",
    "HMRC Corporate Compliance"
  ];

  return (
    <div className="relative min-h-screen bg-brand-dark text-white selection:bg-brand-blue selection:text-black">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (MATCHES FORMAT OF FORMATIONPLANET.CO.UK + REAL ORBIT) */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-24 border-b border-slate-800/80">
        {/* Cinematic Backdrop Glow */}
        <div className="absolute inset-0 tech-grid opacity-35 pointer-events-none" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-sky-600/15 blur-3xl pointer-events-none" />

        {/* Bokeh floating particles */}
        <span className="absolute rounded-full bg-brand-blue/40 blur-sm pointer-events-none" style={{ top: '12%', left: '8%', width: '6px', height: '6px' }} />
        <span className="absolute rounded-full bg-brand-blue/40 blur-sm pointer-events-none" style={{ top: '22%', left: '78%', width: '10px', height: '10px' }} />
        <span className="absolute rounded-full bg-brand-blue/40 blur-sm pointer-events-none" style={{ top: '65%', left: '14%', width: '8px', height: '8px' }} />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headline, Trust Badge, Marquee, CTAs (Col 1-7) */}
            <div className="lg:col-span-7 min-w-0 text-center lg:text-left space-y-6">
              
              {/* Trust Badge (exact formationplanet style) */}
              <div className="inline-flex items-center gap-2 rounded-full glass-panel border border-brand-blue/30 px-3.5 py-1 text-xs font-medium text-brand-blue shadow-glow-blue-sm">
                <span className="h-2 w-2 rounded-full bg-brand-blue animate-pulse" />
                <span>Trusted by 500+ Global Founders &amp; Non-Residents</span>
              </div>

              {/* Dynamic Formation Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-[1.08] tracking-tight text-white">
                Get your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-sky-300 to-white drop-shadow-[0_0_30px_rgba(0,240,255,0.4)]">
                  UK Limited Company
                </span> <br />
                <span className="block mt-2 text-xl sm:text-3xl lg:text-4xl font-medium text-slate-300">
                  in just 24-48 hours.
                </span>
              </h1>

              {/* Infinite Continuous Marquee Ribbon (exact formationplanet format) */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative overflow-hidden rounded-full glass-panel border border-brand-blue/25 py-2 max-w-xl w-full">
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-brand-dark to-transparent z-10" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-brand-dark to-transparent z-10" />
                  
                  <div className="flex gap-8 whitespace-nowrap animate-marquee">
                    {[...marqueeItems, ...marqueeItems].map((item, i) => (
                      <span key={i} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Launch UK Ltd or US LLC companies, manage compliance, unlock verified Stripe banking, and deploy <strong>DIGI BIZ OS</strong> — all from one expert UK-registered team (<span className="text-white font-semibold">Digiformation Ltd</span>, Companies House 16994903).
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 items-center justify-center lg:justify-start pt-1">
                <button
                  onClick={() => onOpenContact('Start Your Company')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blueDeep to-brand-blue hover:from-brand-blue hover:to-sky-400 text-white hover:text-black px-6 py-3.5 text-sm font-semibold shadow-glow-blue hover:scale-[1.02] transition-all"
                >
                  <span>Start Your Company</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3.5 text-sm font-semibold shadow-whatsapp-glow transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Talk on WhatsApp ({BRAND.phoneFormatted})</span>
                </a>
              </div>

            </div>

            {/* Right Column: Real Classical 3D Orbit (Col 8-12) */}
            <div className="lg:col-span-5 relative flex flex-col items-center w-full">
              <div className="w-full">
                <RealClassical3DOrbit />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STAT PROOF BAR (MATCHES FORMATIONPLANET.CO.UK EXACT STATS STRIP) */}
      {/* ========================================================================= */}
      <section className="relative -mt-6 sm:-mt-8 z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="glass-panel-glow rounded-2xl px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 border border-brand-blue/30 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">
                500+
              </div>
              <div className="mt-1 text-xs sm:text-sm text-slate-300 font-sans">
                Companies Registered
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-mono text-brand-blue">
                24/7
              </div>
              <div className="mt-1 text-xs sm:text-sm text-slate-300 font-sans">
                Global Founder Support
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-emerald-400">
                12+
              </div>
              <div className="mt-1 text-xs sm:text-sm text-slate-300 font-sans">
                Banking &amp; Stripe Partners
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-mono text-emerald-400">
                99%
              </div>
              <div className="mt-1 text-xs sm:text-sm text-slate-300 font-sans">
                Non-Resident Approval Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. "EVERYTHING YOUR BUSINESS NEEDS" SERVICE CARDS (FORMATION PLANET FORMAT) */}
      {/* ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-brand-darker border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-blue">
              OUR CORE SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold leading-tight text-white">
              Everything your business <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-sky-300 to-white">needs</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              From UK &amp; US incorporation to compliance, Stripe banking, and DIGI BIZ OS — one expert gateway.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: UK LTD Formation */}
            <TiltCard3D maxTilt={6}>
              <Link to="/uk-services" className="block h-full">
                <div className="group relative h-full glass-panel rounded-2xl p-6 transition duration-300 hover:-translate-y-1.5 hover:border-brand-blue/60 hover:shadow-glow-blue flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-blue ring-1 ring-brand-blue/30 group-hover:bg-brand-blue/25 transition">
                        <Building2 className="h-6 w-6" />
                      </span>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-brand-blue border border-brand-blue/30 bg-brand-blue/10 rounded-full px-2.5 py-0.5 font-mono">
                        UK FORMATION
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-white group-hover:text-brand-blue transition-colors">
                      UK LTD Company Formation
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Register your UK Limited company in 24-48 hours with official Companies House certificate, London office address, and everything you need to trade.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-sm">
                      <span className="text-slate-400">from </span>
                      <span className="font-bold text-brand-blue font-mono">£140 / PKR 48,000</span>
                    </span>
                    <span className="inline-flex items-center text-xs font-semibold text-brand-blue group-hover:translate-x-1 transition-transform">
                      Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </TiltCard3D>

            {/* Card 2: LTD ID Verification */}
            <TiltCard3D maxTilt={6}>
              <Link to="/uk-services" className="block h-full">
                <div className="group relative h-full glass-panel rounded-2xl p-6 transition duration-300 hover:-translate-y-1.5 hover:border-brand-blue/60 hover:shadow-glow-blue flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-blue ring-1 ring-brand-blue/30 group-hover:bg-brand-blue/25 transition">
                        <ShieldCheck className="h-6 w-6" />
                      </span>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-brand-blue border border-brand-blue/30 bg-brand-blue/10 rounded-full px-2.5 py-0.5 font-mono">
                        2026 MANDATORY
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-white group-hover:text-brand-blue transition-colors">
                      Companies House ID Verification
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Mandatory PSC, director and shareholder verification under the UK Economic Crime Act — handled with zero strike-off risk.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-sm">
                      <span className="text-slate-400">from </span>
                      <span className="font-bold text-brand-blue font-mono">£20 / PKR 6,500</span>
                    </span>
                    <span className="inline-flex items-center text-xs font-semibold text-brand-blue group-hover:translate-x-1 transition-transform">
                      Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </TiltCard3D>

            {/* Card 3: US LLC Formation */}
            <TiltCard3D maxTilt={6}>
              <Link to="/usa-services" className="block h-full">
                <div className="group relative h-full glass-panel rounded-2xl p-6 transition duration-300 hover:-translate-y-1.5 hover:border-brand-blue/60 hover:shadow-glow-blue flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400 ring-1 ring-sky-500/30 group-hover:bg-sky-500/25 transition">
                        <Flag className="h-6 w-6" />
                      </span>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-sky-400 border border-sky-500/30 bg-sky-500/10 rounded-full px-2.5 py-0.5 font-mono">
                        USA FORMATION
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-white group-hover:text-brand-blue transition-colors">
                      USA LLC Formation &amp; IRS EIN
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Wyoming, Delaware, New Mexico, Florida. Official IRS EIN issued without requiring a US SSN, registered agent, and operating agreement.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-sm">
                      <span className="text-slate-400">from </span>
                      <span className="font-bold text-sky-400 font-mono">£150 / $180</span>
                    </span>
                    <span className="inline-flex items-center text-xs font-semibold text-sky-400 group-hover:translate-x-1 transition-transform">
                      Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </TiltCard3D>

            {/* Card 4: Banking & Stripe */}
            <TiltCard3D maxTilt={6}>
              <Link to="/banking-solutions" className="block h-full">
                <div className="group relative h-full glass-panel rounded-2xl p-6 transition duration-300 hover:-translate-y-1.5 hover:border-emerald-500/60 hover:shadow-whatsapp-glow flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30 group-hover:bg-emerald-500/25 transition">
                        <Landmark className="h-6 w-6" />
                      </span>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 rounded-full px-2.5 py-0.5 font-mono">
                        GLOBAL PAYMENTS
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-white group-hover:text-emerald-400 transition-colors">
                      Stripe &amp; Multi-Currency Banking
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Open verified Stripe UK/US, Wise Business with local IBANs, Tide UK, and Mercury Bank for easy global cross-border payouts.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-sm">
                      <span className="text-slate-400">from </span>
                      <span className="font-bold text-emerald-400 font-mono">£20 / PKR 6,500</span>
                    </span>
                    <span className="inline-flex items-center text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                      Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </TiltCard3D>

            {/* Card 5: DIGI BIZ OS (Flagship AI OS) */}
            <TiltCard3D maxTilt={6}>
              <Link to="/digibiz-os" className="block h-full">
                <div className="group relative h-full glass-panel rounded-2xl p-6 transition duration-300 hover:-translate-y-1.5 hover:border-brand-blue/60 hover:shadow-glow-blue flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-blue ring-1 ring-brand-blue/30 group-hover:bg-brand-blue/25 transition">
                        <Cpu className="h-6 w-6" />
                      </span>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-brand-blue border border-brand-blue/30 bg-brand-blue/10 rounded-full px-2.5 py-0.5 font-mono">
                        FLAGSHIP SOFTWARE
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-white group-hover:text-brand-blue transition-colors">
                      DIGI BIZ OS (AI Business OS)
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Windows desktop app that runs your whole business by voice: CRM, WhatsApp sales agent, AI studio, and workflows on your own PC.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-sm">
                      <span className="text-slate-400">lifetime </span>
                      <span className="font-bold text-brand-blue font-mono">PKR 14,900</span>
                    </span>
                    <span className="inline-flex items-center text-xs font-semibold text-brand-blue group-hover:translate-x-1 transition-transform">
                      Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </TiltCard3D>

            {/* Card 6: Annual Compliance & HMRC Tax */}
            <TiltCard3D maxTilt={6}>
              <Link to="/uk-services" className="block h-full">
                <div className="group relative h-full glass-panel rounded-2xl p-6 transition duration-300 hover:-translate-y-1.5 hover:border-brand-blue/60 hover:shadow-glow-blue flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-blue ring-1 ring-brand-blue/30 group-hover:bg-brand-blue/25 transition">
                        <FileCheck2 className="h-6 w-6" />
                      </span>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-brand-blue border border-brand-blue/30 bg-brand-blue/10 rounded-full px-2.5 py-0.5 font-mono">
                        COMPLIANCE
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-white group-hover:text-brand-blue transition-colors">
                      Annual Filing &amp; Returns
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Confirmation statements (CS01), HMRC dormant/annual accounts, director updates, and corporate tax compliance handled end-to-end.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-sm">
                      <span className="text-slate-400">from </span>
                      <span className="font-bold text-brand-blue font-mono">£80 / PKR 26,000</span>
                    </span>
                    <span className="inline-flex items-center text-xs font-semibold text-brand-blue group-hover:translate-x-1 transition-transform">
                      Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </TiltCard3D>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. QUICK ESTIMATE CALCULATOR (FORMATION PLANET FORMAT) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-brand-dark border-b border-slate-800/80">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="glass-panel-glow rounded-3xl p-6 sm:p-10 border border-brand-blue/30">
            <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-blue font-mono">
                  QUICK START CALCULATOR
                </span>
                <h3 className="mt-1 text-2xl sm:text-3xl font-display font-bold text-white">
                  Get an instant formation estimate
                </h3>
              </div>

              {/* Country Switcher */}
              <div className="inline-flex rounded-xl border border-slate-700 bg-brand-darker p-1">
                <button
                  onClick={() => setCalcCountry('uk')}
                  className={`px-4 py-2 text-xs sm:text-sm rounded-lg font-medium transition-all ${
                    calcCountry === 'uk'
                      ? 'bg-brand-blue text-black font-bold shadow-glow-blue-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  🇬🇧 UK Ltd
                </button>
                <button
                  onClick={() => setCalcCountry('usa')}
                  className={`px-4 py-2 text-xs sm:text-sm rounded-lg font-medium transition-all ${
                    calcCountry === 'usa'
                      ? 'bg-brand-blue text-black font-bold shadow-glow-blue-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  🇺🇸 USA LLC
                </button>
              </div>
            </div>

            {/* Packages Grid */}
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {[
                { id: 'starter', name: 'Starter Package', price: calcCountry === 'uk' ? '£140' : '$180', pkr: calcCountry === 'uk' ? 'PKR 48,000' : 'PKR 50,000', desc: 'Government registration + digital certificates.' },
                { id: 'standard', name: 'Standard Compliance', price: calcCountry === 'uk' ? '£180' : '$250', pkr: calcCountry === 'uk' ? 'PKR 62,000' : 'PKR 70,000', desc: 'Adds London address, mail scanning & ID verification.' },
                { id: 'all-in-one', name: 'Full Banking & AI OS', price: calcCountry === 'uk' ? '£260' : '$350', pkr: calcCountry === 'uk' ? 'PKR 89,000' : 'PKR 98,000', desc: 'Includes Stripe verified setup + DIGI BIZ OS lifetime!' }
              ].map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => setCalcPackage(pkg.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    calcPackage === pkg.id
                      ? 'border-brand-blue bg-brand-blue/15 shadow-glow-blue'
                      : 'border-slate-800 bg-brand-dark/70 hover:border-slate-700'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-display font-bold text-white">{pkg.name}</span>
                    <span className="text-xs font-mono font-bold text-brand-blue">{pkg.price}</span>
                  </div>
                  <div className="text-xs font-mono text-emerald-400 mb-2">{pkg.pkr}</div>
                  <p className="text-xs text-slate-300 leading-snug">{pkg.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 font-mono">
                Selected: <strong className="text-white uppercase">{calcCountry} — {calcPackage}</strong> · 24-48h turnaround
              </div>
              <a
                href={`https://wa.me/923170062959?text=Hello%20Agentic%20Orbit,%20I%20want%20to%20order%20the%20${calcCountry.toUpperCase()}%20${calcPackage}%20package.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-brand-blueDeep to-brand-blue text-white font-semibold text-xs tracking-wide shadow-glow-blue flex items-center justify-center gap-2"
              >
                <span>Order on WhatsApp ({BRAND.phoneFormatted})</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. AI AGENT ECOSYSTEM NETWORK (Segment 2 Step 3) */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-brand-darker border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Agent3DNetwork />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. AUTOMATION PIPELINE (Segment 2 Step 4) */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-brand-dark border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Automation3DFlow />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CRM & BUSINESS ANALYTICS (Segment 2 Step 5 & 6) */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-brand-darker border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CrmAnalyticsShowcase />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. AI ASSISTANTS WITH 3D WAVEFORM (Segment 2 Step 7) */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-brand-dark border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VoiceWaveform3D />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. HOW IT WORKS (Segment 2 Step 8) */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-brand-darker border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-blue/30 text-brand-blue text-xs font-mono mb-4">
              <Workflow className="w-3.5 h-3.5 text-brand-blue" />
              <span>RAPID EXECUTION ROADMAP</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              HOW IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-sky-300 to-brand-blueDeep">WORKS</span>
            </h2>
            <p className="mt-4 text-slate-300 text-sm md:text-base leading-relaxed">
              Four structured milestones from your WhatsApp consultation to official company documents and banking readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div 
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-brand-blue/40 transition-all duration-300 relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-extrabold text-brand-blue">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                    {step.badge}
                  </span>
                </div>

                <h3 className="text-base font-display font-bold text-white mb-1">
                  {step.title}
                </h3>
                <h4 className="text-xs font-semibold text-sky-300 mb-2">
                  {step.heading}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. WHY AGENTIC ORBIT / DIGIFORMATION LTD */}
      {/* ========================================================================= */}
      <section className="relative py-24 bg-brand-dark border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              YOUR BUSINESS, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-sky-300 to-brand-blueDeep">IN ORBIT</span>
            </h2>
            <p className="mt-4 text-slate-300 text-sm md:text-base leading-relaxed">
              Why international founders trust Digiformation Ltd and Agentic Orbit for company formation, global banking, and AI operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_AGENTIC_ORBIT.map((card) => (
              <TiltCard3D key={card.id} maxTilt={5}>
                <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-brand-blue/40 transition-all h-full">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/15 border border-brand-blue/30 text-brand-blue flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </TiltCard3D>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. DRAMATIC FINAL CTA BAND */}
      {/* ========================================================================= */}
      <section className="relative py-20 bg-gradient-to-b from-brand-dark to-brand-darker overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue/20 via-brand-darker/80 to-brand-darker pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-brand-blue/40 text-brand-blue text-xs font-mono shadow-glow-blue-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
            <span>24/7 GLOBAL CLIENT DESK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight">
            START YOUR GLOBAL COMPANY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-sky-300 to-white">
              WITH AGENTIC ORBIT
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Incorporate your UK LTD or US LLC, secure international Stripe payment processing, or deploy DIGI BIZ OS. Connect directly with our authorized team on WhatsApp.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact('Final CTA Inquire')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-blueDeep to-brand-blue hover:from-brand-blue hover:to-sky-400 text-white hover:text-black font-semibold text-sm tracking-wide transition-all duration-300 shadow-glow-blue flex items-center justify-center gap-2"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-sm flex items-center justify-center gap-2.5 transition-all duration-300 shadow-whatsapp-glow"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white" />
              <span>Talk on WhatsApp</span>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-800 text-white">
                {BRAND.phoneFormatted}
              </span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
