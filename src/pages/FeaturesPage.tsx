import React, { useState } from 'react';
import { 
  Bot, 
  Zap, 
  Users, 
  BarChart3, 
  Workflow, 
  Headphones, 
  CheckCircle2, 
  Radio, 
  Lock, 
  Activity, 
  Server, 
  Code,
  Layers,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { BRAND, AI_PLATFORM_MODULES } from '../data/content';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { TiltCard3D } from '../components/3d/TiltCard3D';

interface FeaturesPageProps {
  onOpenContact: () => void;
}

const featureIcons: Record<string, any> = {
  'ai-agents': Bot,
  'smart-automation': Zap,
  'crm-suite': Users,
  'business-analytics': BarChart3,
  'workflow-management': Workflow,
  'ai-assistants': Headphones,
  'task-management': CheckCircle2,
  'multichannel-support': Radio,
  'data-privacy': Lock,
  'realtime-insights': Activity,
  'scalable-infrastructure': Server,
  'ai-dev-tools': Code,
};

export const FeaturesPage: React.FC<FeaturesPageProps> = ({ onOpenContact }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Autonomous Workforce', 'Process Efficiency', 'Revenue Pipeline', 'Executive Intelligence', 'Enterprise Security'];

  const filtered = activeCategory === 'All' 
    ? AI_PLATFORM_MODULES 
    : AI_PLATFORM_MODULES.filter(m => m.category.includes(activeCategory) || activeCategory.includes(m.category));

  return (
    <div className="min-h-screen bg-brand-dark pt-28 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-blue/30 text-brand-blue text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
            <span>DEEP TECHNICAL ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight">
            AI PLATFORM &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-sky-300 to-brand-blueDeep">
              ENTERPRISE FEATURES
            </span>
          </h1>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Examine the engineering anatomy of the Agentic Orbit operating system. 
            Modular, extensible, and built for deterministic high-throughput commercial operations.
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-colors ${
                  activeCategory === cat
                    ? 'bg-brand-blue text-black font-bold shadow-glow-blue-sm'
                    : 'glass-panel border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => {
            const Icon = featureIcons[item.id] || Bot;

            return (
              <TiltCard3D key={item.id} maxTilt={6}>
                <div className="h-full glass-panel p-7 rounded-2xl border border-slate-800 hover:border-brand-blue/50 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-blue/30 group-hover:border-brand-blue text-brand-blue flex items-center justify-center transition-colors shadow-glow-blue-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-white group-hover:text-brand-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-brand-blue mt-0.5 mb-3">
                      {item.category}
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Capabilities */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                        TECHNICAL SPECIFICATIONS
                      </span>
                      {item.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <a
                      href={`https://wa.me/923170062959?text=Hello%20Agentic%20Orbit,%20I%20would%20like%20to%20deploy%20the%20${encodeURIComponent(item.title)}%20module.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-brand-blue hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-current text-brand-whatsapp" />
                      <span>Deploy via WhatsApp</span>
                    </a>

                    <button
                      onClick={onOpenContact}
                      className="text-xs font-mono text-slate-400 hover:text-white"
                    >
                      Docs →
                    </button>
                  </div>
                </div>
              </TiltCard3D>
            );
          })}
        </div>

      </div>
    </div>
  );
};

