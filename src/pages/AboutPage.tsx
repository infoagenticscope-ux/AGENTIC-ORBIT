import React from 'react';
import { 
  Orbit, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  Phone, 
  CheckCircle2, 
  ArrowRight,
  Code2,
  Terminal,
  Layers
} from 'lucide-react';
import { BRAND } from '../data/content';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { TiltCard3D } from '../components/3d/TiltCard3D';

interface AboutPageProps {
  onOpenContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenContact }) => {
  return (
    <div className="min-h-screen bg-brand-dark pt-28 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-blue/30 text-brand-blue text-xs font-mono">
            <Orbit className="w-3.5 h-3.5 text-brand-blue animate-pulse-slow" />
            <span>ORGANIZATIONAL ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight">
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-sky-300 to-brand-blueDeep">AGENTIC ORBIT</span>
          </h1>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            {BRAND.tagline} — {BRAND.secondaryTagline}
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
              The Evolution of Enterprise Business Operations
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              Traditional businesses spend up to 70% of their team bandwidth managing disconnected administrative tasks: copying lead data between apps, answering identical repetitive WhatsApp questions, manual follow-ups, and building static spreadsheets.
            </p>

            <p className="text-slate-300 text-sm leading-relaxed">
              <strong>AGENTIC ORBIT</strong> was engineered to eliminate this operational friction. By uniting autonomous AI agents with deterministic rules engines and real-time CRM pipelines, our platform allows businesses to automate workflows end-to-end with precision and speed.
            </p>

            {/* Architecture Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="glass-panel p-4 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 text-brand-blue font-display font-bold text-sm mb-1">
                  <Cpu className="w-4 h-4" />
                  <span>Deterministic Logic</span>
                </div>
                <p className="text-xs text-slate-400">
                  Business calculations, inventory rules, and financial transactions are calculated strictly by pure deterministic code, never LLM guesswork.
                </p>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 font-display font-bold text-sm mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Zero Fake Claims Policy</span>
                </div>
                <p className="text-xs text-slate-400">
                  We present real, verifiable engineering benchmarks and clearly labeled platform previews rather than fabricated customer logos or statistics.
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="lg:col-span-5">
            <TiltCard3D maxTilt={6}>
              <div className="glass-panel-glow p-8 rounded-3xl border border-brand-blue/30 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/15 border border-brand-blue/40 text-brand-blue flex items-center justify-center">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white text-base">PLATFORM PROFILE</h4>
                      <span className="text-[10px] font-mono text-brand-blue">AGENTIC_ORBIT_OS</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    VERIFIED
                  </span>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex justify-between py-1.5 border-b border-slate-800/60 font-mono">
                    <span className="text-slate-400">BRAND NAME:</span>
                    <span className="text-white font-bold">{BRAND.name}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/60 font-mono">
                    <span className="text-slate-400">TAGLINE:</span>
                    <span className="text-brand-blue">{BRAND.tagline}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/60 font-mono">
                    <span className="text-slate-400">WHATSAPP:</span>
                    <span className="text-emerald-400 font-bold">{BRAND.phoneFormatted}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/60 font-mono">
                    <span className="text-slate-400">REFERENCE SITE:</span>
                    <a href={BRAND.referenceUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 underline hover:text-white">
                      {BRAND.referenceSite}
                    </a>
                  </div>
                  <div className="flex justify-between py-1.5 font-mono">
                    <span className="text-slate-400">SERVED REGIONS:</span>
                    <span className="text-white">Global / Non-Resident Friendly</span>
                  </div>
                </div>

                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs flex items-center justify-center gap-2 transition-all shadow-whatsapp-glow"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Talk with Team on WhatsApp ({BRAND.phoneFormatted})</span>
                </a>
              </div>
            </TiltCard3D>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="border-t border-slate-800 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-display font-bold text-white">
              Our Core Architectural Values
            </h3>
            <p className="text-xs text-slate-400 mt-2">
              Every line of code and agent workflow adheres to three fundamental pillars:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-2xl border border-slate-800">
              <div className="text-brand-blue font-mono text-sm font-bold mb-2">01 / AUTONOMOUS RESILIENCE</div>
              <h4 className="text-base font-display font-bold text-white mb-2">Self-Healing Workflows</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Network glitches, third-party API rate limits, and webhook dropouts are auto-retried with exponential backoff and guaranteed delivery queues.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-800">
              <div className="text-brand-blue font-mono text-sm font-bold mb-2">02 / CONTINUOUS MEMORY</div>
              <h4 className="text-base font-display font-bold text-white mb-2">Contextual Intelligence</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Agents recall customer preferences, past negotiation history, and business rules across months of interaction, eliminating repetitive questions.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-800">
              <div className="text-brand-blue font-mono text-sm font-bold mb-2">03 / COMMERCIALLY READY</div>
              <h4 className="text-base font-display font-bold text-white mb-2">Immediate Business Lift</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Deployable within minutes without multi-month engineering cycles. Directly connects with existing WhatsApp numbers, ERPs, and databases.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

