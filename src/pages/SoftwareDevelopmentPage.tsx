import React from 'react';
import { 
  Code, 
  Layers, 
  ArrowRight, 
  MessageSquare, 
  Database, 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  Server, 
  LayoutDashboard, 
  Lock,
  GitPullRequest
} from 'lucide-react';
import { BRAND } from '../data/content';

interface SoftwareDevelopmentPageProps {
  onOpenContact: (service?: string) => void;
}

export const SoftwareDevelopmentPage: React.FC<SoftwareDevelopmentPageProps> = ({ onOpenContact }) => {
  const capabilities = [
    {
      icon: LayoutDashboard,
      title: "Business Dashboards & Telemetry",
      desc: "Real-time command centers displaying KPIs, employee workloads, sales velocity, and financial metrics in one responsive screen.",
    },
    {
      icon: Server,
      title: "Internal Operations & ERP Tools",
      desc: "Bespoke tools built around your exact proprietary business logic, avoiding clumsy generic subscriptions with unnecessary features.",
    },
    {
      icon: Lock,
      title: "Secure Client & Partner Portals",
      desc: "Granular role-based access control (RBAC), multi-tenant data segmentation, encrypted document vaults, and customer self-service.",
    },
    {
      icon: Cpu,
      title: "AI-Augmented Applications",
      desc: "Native integration of vector search, automated invoice extraction, smart categorization, and intelligent query assistants.",
    },
    {
      icon: Database,
      title: "High-Throughput Databases",
      desc: "Optimized relational (PostgreSQL) and caching architectures designed for ACID compliance, sub-100ms response times, and scale.",
    },
    {
      icon: GitPullRequest,
      title: "Enterprise API Integrations",
      desc: "Seamless connectivity with WhatsApp Cloud API, payment processors, custom logistics providers, and legacy mainframe systems.",
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* =========================================================================
          HERO SECTION (Dedicated: Code & Enterprise Engineering)
      ========================================================================= */}
      <section className="relative py-16 sm:py-24 border-b border-brand-blue/20 overflow-hidden bg-brand-dark">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-xs font-mono text-brand-blue uppercase">
              <Code className="w-3.5 h-3.5" />
              <span>Dedicated Track • Custom Software Engineering</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Custom Software. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-blueGlow to-white">
                Built Around Your Business.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              We design and construct production-grade web applications, internal company portals, and data architectures tailored to your exact operational workflows.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenContact('Custom Software Engineering')}
                className="px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-blueDeep hover:from-brand-blueHover hover:to-brand-blue shadow-glow-blue transition-all flex items-center justify-center space-x-2"
              >
                <span>Request Software Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-xs font-mono text-zinc-300 hover:text-white bg-white/5 border border-white/10 hover:border-brand-blue/40 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Talk with Lead Engineer: {BRAND.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: 6 SOFTWARE CAPABILITIES
      ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-xs font-mono text-brand-blue uppercase">Engineering Scope</span>
          <h2 className="font-display text-3xl font-bold text-white">Full-Stack Enterprise Solutions</h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            From modern responsive frontends to hardened distributed backend APIs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-950 border border-white/10 hover:border-brand-blue/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">{cap.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">{cap.desc}</p>
                </div>
                <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-brand-blue flex items-center justify-between">
                  <span>Custom Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          ENGINEERING STANDARDS
      ========================================================================= */}
      <section className="py-20 bg-brand-card/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-brand-blue/30 shadow-glow-blue-sm space-y-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono text-brand-blue uppercase">Elite Standards</span>
              <h2 className="font-display text-3xl font-bold text-white">Zero Placeholder Code Policy</h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Agentic Scope builds real production software. We do not deliver superficial UI mockups disconnected from actual databases. Every project undergoes rigorous schema validation, automated test suites, and strict credential isolation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 font-mono text-xs text-zinc-300">
              <div className="p-4 rounded-xl bg-black/80 border border-white/10">
                <span className="text-brand-blue font-bold block mb-1">Architecture First</span>
                Data models and API contracts locked prior to code execution.
              </div>
              <div className="p-4 rounded-xl bg-black/80 border border-white/10">
                <span className="text-emerald-400 font-bold block mb-1">Deterministic Math</span>
                Zero guesswork in calculations, billing, or ledger states.
              </div>
              <div className="p-4 rounded-xl bg-black/80 border border-white/10">
                <span className="text-blue-400 font-bold block mb-1">Scalable Deployment</span>
                Containerized, cloud-agnostic, and prepared for high concurrency.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CTA
      ========================================================================= */}
      <section className="pt-10 max-w-5xl mx-auto px-4 text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
          Let&apos;s Build Software That Fits Your Organization
        </h2>
        <p className="text-sm text-zinc-400 max-w-xl mx-auto">
          Share your software vision or replace outdated manual spreadsheets with a dedicated custom system.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenContact('Custom Software Engineering')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-blue hover:bg-brand-blueHover shadow-glow-blue transition-all"
          >
            Request Software Architecture Proposal
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

