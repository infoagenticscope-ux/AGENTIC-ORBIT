import React from 'react';
import { 
  Globe, 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  Search, 
  Smartphone, 
  Layers, 
  Compass,
  CheckCircle2
} from 'lucide-react';
import { BRAND } from '../data/content';

interface WebDevelopmentPageProps {
  onOpenContact: (service?: string) => void;
}

export const WebDevelopmentPage: React.FC<WebDevelopmentPageProps> = ({ onOpenContact }) => {
  const websiteTypes = [
    {
      title: "Business & Corporate Websites",
      desc: "Imposing, high-trust digital flagships engineered for international credibility, executive appeal, and crisp corporate messaging.",
      tag: "Enterprise Credibility",
    },
    {
      title: "High-Conversion Landing Pages",
      desc: "Engineered specifically for marketing campaigns, paid ads, and direct WhatsApp lead generation with sub-second page loads.",
      tag: "Lead Generation",
    },
    {
      title: "Full-Stack Web Applications",
      desc: "Rich, interactive software systems featuring real-time client dashboards, authenticated member portals, and integrated databases.",
      tag: "Web Software",
    },
    {
      title: "Modern E-Commerce Architectures",
      desc: "Fast, friction-free checkout flows, automated inventory syncing, multi-currency options, and WhatsApp order confirmations.",
      tag: "Commerce Systems",
    },
    {
      title: "AI-Powered Web Experiences",
      desc: "Web interfaces featuring embedded autonomous AI consultation agents, interactive ROI calculators, and personalized user journeys.",
      tag: "Next-Gen AI Web",
    },
    {
      title: "Performance & Technical Redesigns",
      desc: "Migrate legacy slow WordPress setups to high-speed modern Next.js/React architecture with 95+ Google Lighthouse scores.",
      tag: "Modernization",
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 border-b border-brand-blue/20 overflow-hidden bg-brand-dark">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-xs font-mono text-brand-blue uppercase">
              <Globe className="w-3.5 h-3.5" />
              <span>Dedicated Track • High-Performance Web Engineering</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Websites That Work as Hard as <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-blueGlow to-white">
                Your Business.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              We design and construct conversion-optimized, responsive websites and web applications with international presentation, modern 2026 aesthetics, and built-in search architecture.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenContact('High-Conversion Web Development')}
                className="px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-blueDeep hover:from-brand-blueHover hover:to-brand-blue shadow-glow-blue transition-all flex items-center justify-center space-x-2"
              >
                <span>Request Web Architecture Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-xs font-mono text-zinc-300 hover:text-white bg-white/5 border border-white/10 hover:border-brand-blue/40 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Direct WhatsApp: {BRAND.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-xs font-mono text-brand-blue uppercase">Capabilities</span>
          <h2 className="font-display text-3xl font-bold text-white">Engineered for Performance &amp; Conversion</h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Every digital interface is built from scratch with custom styling, eliminating generic template clutter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {websiteTypes.map((type, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-950 border border-white/10 hover:border-brand-blue/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-brand-blue uppercase font-semibold px-2 py-0.5 rounded bg-brand-blue/10 border border-brand-blue/20 mb-3 inline-block">
                  {type.tag}
                </span>
                <h3 className="font-display font-bold text-xl text-white mb-2">{type.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">{type.desc}</p>
              </div>

              <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                <span>Ultra-Fast Responsive Build</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEO / AEO / GEO Architecture callout */}
      <section className="py-20 bg-brand-card/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 space-y-3">
              <Search className="w-6 h-6 text-brand-blue" />
              <h4 className="font-display font-bold text-lg text-white">Technical SEO Foundations</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Clean semantic HTML5, verified OpenGraph social metadata, canonical URLs, and structured Schema.org markup so search engines index your brand cleanly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 space-y-3">
              <Compass className="w-6 h-6 text-brand-blue" />
              <h4 className="font-display font-bold text-lg text-white">AEO (Answer Engine Optimization)</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Direct, structured FAQ and knowledge schemas designed so AI assistants and conversational search engines can cite your business answers directly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 space-y-3">
              <Smartphone className="w-6 h-6 text-brand-blue" />
              <h4 className="font-display font-bold text-lg text-white">Zero Horizontal Overflow</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Rigorous multi-device responsive testing across 360px, 390px, 430px, 768px, 1024px, 1280px, 1440px, and 1920px viewports with touch-friendly elements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-10 max-w-5xl mx-auto px-4 text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
          Elevate Your Brand With a Custom Website
        </h2>
        <p className="text-sm text-zinc-400 max-w-xl mx-auto">
          Talk to Agentic Scope to plan a modern, high-speed website that turns visitors into qualified clients.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenContact('High-Conversion Web Development')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-blue hover:bg-brand-blueHover shadow-glow-blue transition-all"
          >
            Start Your Web Project
          </button>
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-300 hover:text-white bg-white/5 border border-white/10"
          >
            Direct WhatsApp: {BRAND.phoneFormatted}
          </a>
        </div>
      </section>
    </div>
  );
};

