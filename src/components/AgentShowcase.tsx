import React, { useState } from 'react';
import { 
  TrendingUp, 
  Headphones, 
  Filter, 
  Activity, 
  Database, 
  Network, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Zap,
  Terminal
} from 'lucide-react';
import { AI_AGENTS_LIST } from '../data/content';

export const AgentShowcase: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState(AI_AGENTS_LIST[0]);
  const [activeWorkflowStage, setActiveWorkflowStage] = useState(2);

  const getAgentIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-brand-blue" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-brand-blue" />;
      case 'Filter':
        return <Filter className="w-5 h-5 text-brand-blue" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-brand-blue" />;
      case 'Database':
        return <Database className="w-5 h-5 text-brand-blue" />;
      case 'Network':
        return <Network className="w-5 h-5 text-brand-blue" />;
      default:
        return <Cpu className="w-5 h-5 text-brand-blue" />;
    }
  };

  const workflowCycle = [
    { label: "Trigger", desc: "Customer interaction or scheduled event", stage: 0 },
    { label: "AI Agent", desc: "Contextual reasoning & policy lookup", stage: 1 },
    { label: "Decision", desc: "Rule evaluation & validation checks", stage: 2 },
    { label: "Action", desc: "API calls, DB queries & message dispatch", stage: 3 },
    { label: "Result", desc: "Verified outcome & CRM record update", stage: 4 },
  ];

  return (
    <div className="space-y-12">
      {/* Visual Workflow Line: Trigger -> AI Agent -> Decision -> Action -> Result */}
      <div className="relative glass-panel rounded-2xl p-6 sm:p-8 border border-brand-blue/20 overflow-hidden">
        <div className="flex items-center space-x-2 text-xs font-mono text-brand-blue uppercase tracking-wider mb-4">
          <Zap className="w-4 h-4" />
          <span>Autonomous Loop Execution Flow</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 relative">
          {workflowCycle.map((item, index) => {
            const isCurrent = activeWorkflowStage === item.stage;
            return (
              <div
                key={item.label}
                onClick={() => setActiveWorkflowStage(item.stage)}
                className={`relative p-3.5 rounded-xl border cursor-pointer transition-all duration-300 ${
                  isCurrent
                    ? 'bg-brand-blue/15 border-brand-blue shadow-glow-blue-sm scale-[1.02]'
                    : 'bg-black/50 border-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono text-zinc-500">Stage 0{index + 1}</span>
                  {isCurrent && <span className="w-2 h-2 rounded-full bg-brand-blue animate-ping" />}
                </div>
                <h4 className="font-display font-bold text-sm text-white">{item.label}</h4>
                <p className="text-[11px] text-zinc-400 mt-1 leading-snug">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Agents 6 Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AI_AGENTS_LIST.map((agent) => {
          const isSelected = selectedAgent.id === agent.id;
          return (
            <div
              key={agent.id}
              onClick={() => setSelectedAgent(agent)}
              className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                isSelected
                  ? 'bg-zinc-950/90 border-brand-blue shadow-glow-blue-sm scale-[1.01]'
                  : 'bg-zinc-950/60 border-white/10 hover:border-brand-blue/40 hover:bg-zinc-900/60'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getAgentIcon(agent.icon)}
                  </div>
                  <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[10px] font-mono text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>{agent.status}</span>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-brand-blue font-medium mb-1">
                  {agent.role}
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {agent.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {agent.description}
                </p>

                {/* Capabilities pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {agent.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 border border-white/5 text-zinc-300"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sample Task Output */}
              <div className="pt-3 border-t border-white/5 text-[11px] text-zinc-400 flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="italic text-zinc-300">
                  &quot;{agent.exampleTask}&quot;
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Agent Terminal Detail Preview */}
      <div className="relative glass-panel rounded-2xl p-6 sm:p-8 border border-white/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10 mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white shadow-glow-blue-sm">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-white">
                Autonomous Sandbox: {selectedAgent.title}
              </h4>
              <p className="text-xs text-zinc-400 font-mono">
                Model: Enterprise Deterministic Agent Architecture • Zero Guesswork
              </p>
            </div>
          </div>
          <div className="text-xs text-zinc-400 font-mono flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Policy: Strictly Bound to Company Guardrails</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="space-y-3">
            <h5 className="font-mono text-brand-blue uppercase text-[11px] tracking-wider">
              Autonomous Trigger Conditions
            </h5>
            <ul className="space-y-2 text-zinc-300">
              <li className="flex items-start space-x-2">
                <ArrowRight className="w-3.5 h-3.5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span>Listens to webhook inputs from WhatsApp, CRM forms, and email servers.</span>
              </li>
              <li className="flex items-start space-x-2">
                <ArrowRight className="w-3.5 h-3.5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span>Runs semantic intent evaluation without risking sensitive database credentials.</span>
              </li>
              <li className="flex items-start space-x-2">
                <ArrowRight className="w-3.5 h-3.5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span>Escalates seamlessly to authorized human operators whenever edge-cases occur.</span>
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-black/80 border border-white/5 font-mono text-[11px] text-zinc-300 space-y-1.5">
            <div className="text-emerald-400 font-semibold">[AGENT_ACTIVE: {selectedAgent.id.toUpperCase()}]</div>
            <div>&gt; INGESTION_SOURCE: WhatsApp API (Direct Gateway)</div>
            <div>&gt; CONTEXT_WINDOW: 8k Tokens Verified Knowledgebase</div>
            <div>&gt; RESPONSE_LATENCY: 0.38 seconds</div>
            <div>&gt; AUDIT_TRAIL: 100% Logged with SHA-256 Checksum</div>
            <div className="text-brand-blue pt-1">&gt; STATUS: Ready for deployment in your business stack</div>
          </div>
        </div>
      </div>
    </div>
  );
};

