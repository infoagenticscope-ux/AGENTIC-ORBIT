import React from 'react';
import { 
  CreditCard, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Globe2, 
  Lock, 
  Sparkles,
  Zap
} from 'lucide-react';
import { BRAND, BANKING_SOLUTIONS } from '../data/content';

interface BankingPageProps {
  onOpenContact: (service?: string) => void;
}

export const BankingPage: React.FC<BankingPageProps> = ({ onOpenContact }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 border-b border-brand-blue/20 overflow-hidden bg-brand-dark">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-xs font-mono text-brand-blue uppercase">
              <CreditCard className="w-3.5 h-3.5" />
              <span>International Payment Gateways &amp; Business Banking</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Global Business Banking &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-blueGlow to-white">
                Stripe / PayPal Gateways.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Open legitimate, fully-verified international business accounts for your UK LTD or US LLC. Accept global payments across Stripe, PayPal, Wise, Tide, Mercury, and Payoneer with multi-currency payouts and zero account freezing risk.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenContact('Global Banking & Stripe Verification')}
                className="px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-blueDeep hover:from-brand-blueHover hover:to-brand-blue shadow-glow-blue transition-all flex items-center justify-center space-x-2"
              >
                <span>Get Verified Banking Setup</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-xs font-mono text-zinc-300 hover:text-white bg-white/5 border border-white/10 hover:border-brand-blue/40 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Instant Banking Inquiry: {BRAND.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Banking Cards Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-xs font-mono text-brand-blue uppercase">Verified Gateways</span>
          <h2 className="font-display text-3xl font-bold text-white">Supported International Financial Partners</h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            We provide full documentation and compliance architecture so your business accounts are approved smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BANKING_SOLUTIONS.map((bank, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-zinc-950 border border-white/10 hover:border-brand-blue/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-brand-blue uppercase font-semibold px-2 py-0.5 rounded bg-brand-blue/10 border border-brand-blue/20">
                    {bank.badge}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">{bank.tag}</span>
                </div>

                <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-brand-blue transition-colors">
                  {bank.name}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {bank.desc}
                </p>

                <div className="space-y-3 mb-6 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-black/60 border border-white/5 space-y-1">
                    <span className="text-[10px] text-zinc-500 uppercase block">Currencies</span>
                    <div className="flex flex-wrap gap-1">
                      {bank.currencies.map((curr) => (
                        <span key={curr} className="px-2 py-0.5 rounded bg-white/5 text-zinc-300 text-[10px]">
                          {curr}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-black/60 border border-white/5 space-y-0.5">
                    <span className="text-[10px] text-zinc-500 uppercase block">Best For</span>
                    <span className="text-zinc-300 text-[11px]">{bank.idealFor}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => onOpenContact(`Banking Setup: ${bank.name}`)}
                  className="text-xs font-semibold text-brand-blue hover:text-white flex items-center space-x-1.5 transition-colors"
                >
                  <span>Apply for {bank.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="py-16 bg-brand-card/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-brand-blue/30 shadow-glow-blue-sm space-y-4">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-6 h-6 text-brand-blue" />
              <h3 className="font-display font-bold text-2xl text-white">
                Legitimate Real-Entity Architecture (Zero Fake Documents)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-4xl">
              Payment processors like Stripe, Wise, and PayPal aggressively block fraudulent, synthetic, or rented virtual accounts. Agentic Scope builds your banking on 100% legal corporate foundations: official government certificates, verified director identification, and real physical office addresses that pass strict AML and KYC compliance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-10 max-w-5xl mx-auto px-4 text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
          Start Accepting Global Payments Today
        </h2>
        <p className="text-sm text-zinc-400 max-w-xl mx-auto">
          Talk to our international payment team on WhatsApp to connect Stripe, Wise, or PayPal to your company.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenContact('Global Payment Gateway Setup')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-blue hover:bg-brand-blueHover shadow-glow-blue transition-all"
          >
            Request Payment Gateway Setup
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

