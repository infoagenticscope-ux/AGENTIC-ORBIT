import React from 'react';
import { 
  Landmark, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  FileCheck, 
  Building, 
  DollarSign,
  Scale
} from 'lucide-react';
import { BRAND, USA_SERVICES } from '../data/content';

interface UsaServicesPageProps {
  onOpenContact: (service?: string) => void;
}

export const UsaServicesPage: React.FC<UsaServicesPageProps> = ({ onOpenContact }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 border-b border-brand-blue/20 overflow-hidden bg-brand-dark">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-xs font-mono text-brand-blue uppercase">
              <Landmark className="w-3.5 h-3.5" />
              <span>United States Corporate Incorporation &amp; IRS Compliance</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              US LLC Formation &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-blueGlow to-white">
                IRS EIN / ITIN / FinCEN BOI.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Launch your legal entity in Wyoming, Delaware, New Mexico, or Florida. Fully-managed for non-US residents without a Social Security Number (SSN), including official IRS EIN, registered agent service, and mandatory FinCEN BOI reporting.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenContact('US LLC Formation Package')}
                className="px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-blueDeep hover:from-brand-blueHover hover:to-brand-blue shadow-glow-blue transition-all flex items-center justify-center space-x-2"
              >
                <span>Register US LLC Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-xs font-mono text-zinc-300 hover:text-white bg-white/5 border border-white/10 hover:border-brand-blue/40 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>US Specialist WhatsApp: {BRAND.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-xs font-mono text-brand-blue uppercase">US Capabilities</span>
          <h2 className="font-display text-3xl font-bold text-white">Comprehensive American Business Infrastructure</h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Form your LLC, obtain your federal tax numbers, and open your US banking accounts with guaranteed legal compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USA_SERVICES.map((serv) => (
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
                  onClick={() => onOpenContact(`US Service: ${serv.title}`)}
                  className="text-xs font-semibold text-brand-blue hover:text-white flex items-center space-x-1.5 transition-colors"
                >
                  <span>Select Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[10px] font-mono text-zinc-500">Expedited Service</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FinCEN Alert */}
      <section className="py-16 bg-brand-card/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-brand-blue/30 shadow-glow-blue-sm space-y-4">
            <div className="flex items-center space-x-3">
              <Scale className="w-6 h-6 text-brand-blue" />
              <h3 className="font-display font-bold text-2xl text-white">
                FinCEN BOI (Beneficial Ownership) Filing Protection
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-4xl">
              Under federal United States law (Corporate Transparency Act), all foreign and domestic LLCs must file their Beneficial Ownership Information report with FinCEN. Failure to submit on time carries civil penalties up to $500/day. Agentic Scope includes official FinCEN filing in our packages to keep your US entity 100% safeguarded.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-10 max-w-5xl mx-auto px-4 text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
          Ready to Start Your US Business?
        </h2>
        <p className="text-sm text-zinc-400 max-w-xl mx-auto">
          Contact us today on WhatsApp to select the optimal state (Wyoming vs Delaware) for your business model.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenContact('US LLC Consultation')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-blue hover:bg-brand-blueHover shadow-glow-blue transition-all"
          >
            Schedule US LLC Scoping
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

