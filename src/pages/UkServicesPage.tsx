import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  FileText, 
  Landmark, 
  Mail, 
  Clock, 
  AlertCircle,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { BRAND, UK_SERVICES } from '../data/content';

interface UkServicesPageProps {
  onOpenContact: (service?: string) => void;
}

export const UkServicesPage: React.FC<UkServicesPageProps> = ({ onOpenContact }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 border-b border-brand-blue/20 overflow-hidden bg-brand-dark">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-xs font-mono text-brand-blue uppercase">
              <Building2 className="w-3.5 h-3.5" />
              <span>Official UK Corporate Incorporation &amp; Compliance Hub</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              UK Limited Company Formation &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-blueGlow to-white">
                Companies House Compliance.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Fully-managed UK LTD registration for international non-residents worldwide. Includes official Companies House government incorporation, London registered address, mandatory ID verification, HMRC UTR, and corporate bank readiness within 24-48 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenContact('UK LTD Formation Full Package')}
                className="px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-blueDeep hover:from-brand-blueHover hover:to-brand-blue shadow-glow-blue transition-all flex items-center justify-center space-x-2"
              >
                <span>Incorporate UK LTD Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-xs font-mono text-zinc-300 hover:text-white bg-white/5 border border-white/10 hover:border-brand-blue/40 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Consultant: {BRAND.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-xs font-mono text-brand-blue uppercase">Statutory Services</span>
          <h2 className="font-display text-3xl font-bold text-white">Full-Spectrum UK Corporate Capabilities</h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Everything your company requires to stay fully compliant with Companies House and HMRC regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {UK_SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="p-7 rounded-2xl bg-zinc-950 border border-white/10 hover:border-brand-blue/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-mono text-brand-blue uppercase font-semibold px-2 py-0.5 rounded bg-brand-blue/10 border border-brand-blue/20 mb-3 inline-block">
                  {serv.tag}
                </span>

                <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-brand-blue transition-colors">
                  {serv.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {serv.description}
                </p>

                <div className="space-y-2.5 mb-6">
                  {serv.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => onOpenContact(`UK Service: ${serv.title}`)}
                  className="text-xs font-semibold text-brand-blue hover:text-white flex items-center space-x-1.5 transition-colors"
                >
                  <span>Select Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[10px] font-mono text-zinc-500">24-48h Delivery</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2026 Compliance Callout */}
      <section className="py-16 bg-brand-card/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-brand-blue/30 shadow-glow-blue-sm space-y-4">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-6 h-6 text-brand-blue" />
              <h3 className="font-display font-bold text-2xl text-white">
                2026 UK Identity Verification Guarantee
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-4xl">
              Under the UK Economic Crime and Corporate Transparency Act, all existing and newly appointed company directors and PSCs (People with Significant Control) must have their identity verified. Agentic Scope is equipped with Authorized Corporate Service Provider workflows to verify international directors smoothly without rejections or administrative strike-offs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-10 max-w-5xl mx-auto px-4 text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
          Launch Your Official UK Company Today
        </h2>
        <p className="text-sm text-zinc-400 max-w-xl mx-auto">
          Message our UK corporate specialists on WhatsApp to get your company name checked and verified instantly.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenContact('UK Company Formation')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-blue hover:bg-brand-blueHover shadow-glow-blue transition-all"
          >
            Start UK LTD Formation
          </button>
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-300 hover:text-white bg-white/5 border border-white/10"
          >
            WhatsApp Support: {BRAND.phoneFormatted}
          </a>
        </div>
      </section>
    </div>
  );
};

