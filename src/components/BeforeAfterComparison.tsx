import React, { useState } from 'react';
import { 
  XCircle, 
  CheckCircle2, 
  Layers, 
  Unlink, 
  Clock, 
  AlertTriangle, 
  Cpu, 
  Zap, 
  BarChart, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const BeforeAfterComparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'after' | 'before'>('after');

  const problems = [
    {
      icon: Clock,
      title: "Too Much Manual Work",
      desc: "Employees spending 4-6 hours daily on repetitive copying, pasting, and data entry across separate spreadsheets.",
    },
    {
      icon: Unlink,
      title: "Disconnected Tools & Silos",
      desc: "WhatsApp chats, email inboxes, accounting sheets, and customer logs don't talk to each other.",
    },
    {
      icon: AlertTriangle,
      title: "Slow Processes & Missed Leads",
      desc: "Prospects waiting hours for follow-ups while competitors reply in minutes, leading to abandoned inquiries.",
    },
    {
      icon: Layers,
      title: "Poor Operational Visibility",
      desc: "Founders and executives cannot see live bottlenecks, accurate lead statuses, or daily team throughput.",
    },
  ];

  const ecosystemFeatures = [
    {
      icon: Cpu,
      title: "One Intelligent Ecosystem",
      desc: "AI agents, custom workflows, CRM, and custom software connected in real-time under a unified architecture.",
    },
    {
      icon: Zap,
      title: "Sub-Minute Automated Actions",
      desc: "Inbound leads automatically parsed, enriched, stored in CRM, and contacted on WhatsApp within 30 seconds.",
    },
    {
      icon: BarChart,
      title: "Complete Real-Time Telemetry",
      desc: "Live visibility on lead conversion rates, agent efficiency, team tasks, and operational revenue metrics.",
    },
    {
      icon: Sparkles,
      title: "Effortless Scalability",
      desc: "Handle 10x the client volume without needing to hire linearly or suffering operational breakdowns.",
    },
  ];

  return (
    <div className="relative glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header and Toggle */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10 relative z-10">
        <div>
          <div className="text-xs font-mono text-brand-blue uppercase tracking-widest mb-1.5 flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
            <span>Operational Transformation</span>
          </div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
            Fragmented Chaos <span className="text-zinc-500 font-light">vs</span> Intelligent Ecosystem
          </h3>
        </div>

        {/* State Toggle Buttons */}
        <div className="inline-flex p-1 rounded-xl bg-black border border-white/10 self-start">
          <button
            onClick={() => setActiveTab('before')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'before'
                ? 'bg-zinc-800 text-red-400 border border-red-500/30'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Traditional Chaos
          </button>
          <button
            onClick={() => setActiveTab('after')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 ${
              activeTab === 'after'
                ? 'bg-gradient-to-r from-brand-blue to-brand-blueDeep text-white shadow-glow-blue-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Agentic Scope System</span>
          </button>
        </div>
      </div>

      {/* Cards Display */}
      <div className="py-8 relative z-10">
        {activeTab === 'before' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {problems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-zinc-950/80 border border-red-900/30 relative overflow-hidden group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-red-950/50 border border-red-500/30 flex items-center justify-center flex-shrink-0 text-red-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <h4 className="font-display font-bold text-base text-zinc-200">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {ecosystemFeatures.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-to-br from-zinc-950/90 to-brand-card border border-brand-blue/40 shadow-glow-blue-sm relative overflow-hidden group hover:border-brand-blue transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/15 border border-brand-blue/40 flex items-center justify-center flex-shrink-0 text-brand-blue group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <h4 className="font-display font-bold text-base text-white">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Interactive summary strip */}
      <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-zinc-400 relative z-10">
        <span className="font-mono text-zinc-300 flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Result: Zero lost leads, automated CRM tracking, and streamlined team throughput.</span>
        </span>
        <button
          onClick={() => setActiveTab(activeTab === 'after' ? 'before' : 'after')}
          className="text-brand-blue hover:text-white font-mono flex items-center space-x-1.5 transition-colors self-start"
        >
          <span>Toggle view comparison</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

