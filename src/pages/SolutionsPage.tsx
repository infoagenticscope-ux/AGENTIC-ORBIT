import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Megaphone, 
  Headphones, 
  Cpu, 
  Users, 
  Briefcase, 
  Zap, 
  BarChart3, 
  Code2,
  Sparkles,
  Layers
} from 'lucide-react';
import { BRAND, SOLUTIONS_LIST } from '../data/content';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { TiltCard3D } from '../components/3d/TiltCard3D';

interface SolutionsPageProps {
  onOpenContact: () => void;
}

const solutionIcons: Record<string, any> = {
  'sales-solution': TrendingUp,
  'marketing-solution': Megaphone,
  'support-solution': Headphones,
  'operations-solution': Cpu,
  'crm-solution': Users,
  'business-management': Briefcase,
  'automation-solution': Zap,
  'analytics-solution': BarChart3,
  'ai-dev-solution': Code2,
};

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onOpenContact }) => {
  return (
    <div className="min-h-screen bg-brand-dark pt-28 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-blue/30 text-brand-blue text-xs font-mono">
            <Layers className="w-3.5 h-3.5 text-brand-blue" />
            <span>ENTERPRISE CAPABILITY SUITE</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight">
            SOLUTIONS FOR EVERY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-sky-300 to-brand-blueDeep">
              BUSINESS FUNCTION
            </span>
          </h1>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Nine specialized operational solution packages built natively into the Agentic Orbit operating system. 
            Deploy individually or interconnect seamlessly.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS_LIST.map((sol) => {
            const Icon = solutionIcons[sol.id] || Sparkles;

            return (
              <TiltCard3D key={sol.id} maxTilt={6}>
                <div className="h-full glass-panel p-7 rounded-2xl border border-slate-800 hover:border-brand-blue/50 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-blue/30 group-hover:border-brand-blue text-brand-blue flex items-center justify-center transition-colors shadow-glow-blue-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {sol.impact}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-white group-hover:text-brand-blue transition-colors">
                      {sol.title}
                    </h3>
                    
                    <p className="text-xs font-mono text-brand-blue mt-1 mb-3">
                      {sol.subtitle}
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed mb-5">
                      {sol.description}
                    </p>

                    {/* Key Deliverables */}
                    <div className="space-y-2 mb-6">
                      {sol.points.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                    <a
                      href={`https://wa.me/923170062959?text=Hello%20Agentic%20Orbit,%20I%20am%20interested%20in%20the%20${encodeURIComponent(sol.title)}%20solution.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-brand-blue hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-current text-brand-whatsapp" />
                      <span>Inquire via WhatsApp</span>
                    </a>

                    <button
                      onClick={onOpenContact}
                      className="text-xs font-mono text-slate-400 hover:text-white"
                    >
                      Request Spec →
                    </button>
                  </div>
                </div>
              </TiltCard3D>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl glass-panel-glow border border-brand-blue/30 text-center space-y-4">
          <h2 className="text-2xl font-display font-bold text-white">
            Need a Custom Architecture for Your Industry?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Our engineering team designs custom neural workflows, private LLM pipelines, and ERP connectors tailored to your company's data requirements.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-blueDeep to-brand-blue text-white font-semibold text-xs tracking-wide shadow-glow-blue"
            >
              Consult Solutions Architect
            </button>
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs flex items-center gap-2 shadow-whatsapp-glow"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Direct WhatsApp ({BRAND.phoneFormatted})</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

