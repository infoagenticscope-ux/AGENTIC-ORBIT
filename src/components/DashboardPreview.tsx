import React, { useState } from 'react';
import { 
  Cpu, 
  Users, 
  Zap, 
  CheckSquare, 
  BarChart3, 
  UserCheck, 
  TrendingUp, 
  MessageSquare, 
  Code, 
  Network,
  Activity,
  Shield,
  CircleDot,
  Radio
} from 'lucide-react';

export const DashboardPreview: React.FC = () => {
  const [activeModule, setActiveModule] = useState('AI');

  const modules = [
    { id: 'AI', label: 'AI Agents', icon: Cpu, count: '6 Autonomous' },
    { id: 'CRM', label: 'Central CRM', icon: Users, count: '100% Synced' },
    { id: 'Automation', label: 'Workflows', icon: Zap, count: 'Zero Latency' },
    { id: 'Tasks', label: 'Task Router', icon: CheckSquare, count: 'Automated' },
    { id: 'Analytics', label: 'Analytics', icon: BarChart3, count: 'Live KPIs' },
    { id: 'Customers', label: 'Customers', icon: UserCheck, count: 'Centralized' },
    { id: 'Sales', label: 'Sales Engine', icon: TrendingUp, count: 'Lead Scored' },
    { id: 'Communication', label: 'WhatsApp & Omni', icon: MessageSquare, count: 'Direct API' },
    { id: 'Software', label: 'Custom ERP', icon: Code, count: 'Modular' },
    { id: 'Integrations', label: 'Webhooks', icon: Network, count: 'Encrypted' },
  ];

  return (
    <div className="relative glass-panel-glow rounded-3xl p-6 sm:p-10 border border-brand-blue/30 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center text-brand-blue">
            <Activity className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="text-[11px] font-mono text-brand-blue uppercase tracking-wider">
              Agentic Scope OS • Central Matrix
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              Unified Business Operating System
            </h3>
          </div>
        </div>

        <div className="flex items-center space-x-3 text-xs font-mono">
          <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
            <CircleDot className="w-3 h-3 animate-ping" />
            <span>Operational Health: Optimal</span>
          </span>
          <span className="hidden sm:inline text-zinc-500">|</span>
          <span className="hidden sm:inline text-zinc-400">2026 Microservice Fabric</span>
        </div>
      </div>

      {/* Interactive 10 modules selector */}
      <div className="py-6 border-b border-white/10 relative z-10">
        <div className="text-xs font-mono text-zinc-400 mb-3 flex items-center justify-between">
          <span>Connected Operating Modules: Click to Inspect Telemetry</span>
          <span className="text-brand-blue font-semibold">{modules.length} Nodes Online</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {modules.map((m) => {
            const Icon = m.icon;
            const isSelected = activeModule === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setActiveModule(m.id)}
                className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-brand-blue text-white border-brand-blue shadow-glow-blue-sm scale-[1.02]'
                    : 'bg-black/60 border-white/5 text-zinc-300 hover:border-brand-blue/30 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-brand-blue'}`} />
                  <Radio className={`w-3 h-3 ${isSelected ? 'text-white' : 'text-zinc-600'}`} />
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight truncate">{m.label}</div>
                  <div className={`text-[10px] font-mono mt-0.5 ${isSelected ? 'text-white/80' : 'text-zinc-500'}`}>
                    {m.count}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Futuristic Visual Mockup Canvas */}
      <div className="pt-6 relative z-10">
        <div className="bg-black/80 border border-white/10 rounded-2xl p-5 sm:p-6 shadow-inner">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Console Panel */}
            <div className="lg:w-1/3 space-y-4">
              <div className="p-4 rounded-xl bg-zinc-950 border border-white/10">
                <div className="text-[11px] font-mono text-brand-blue uppercase mb-1">
                  Active Subsystem
                </div>
                <div className="font-display font-bold text-lg text-white mb-2">
                  {modules.find((m) => m.id === activeModule)?.label}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Real-time synchronization layer ensuring zero manual handoffs across all business operations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 space-y-2">
                <div className="text-[11px] font-mono text-zinc-400 uppercase">
                  Data Stream Invariants
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-zinc-300">
                    <span>Deterministic Execution:</span>
                    <span className="text-emerald-400 font-mono">100% Verified</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span>Message Bus:</span>
                    <span className="text-white font-mono">Direct API Webhooks</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span>Security Layer:</span>
                    <span className="text-brand-blue font-mono">Encrypted TLS 1.3</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Telemetry Mockup */}
            <div className="lg:w-2/3 space-y-4">
              {/* Top KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-white/10">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">System Uptime</div>
                  <div className="text-lg font-display font-bold text-white mt-1">99.98%</div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-0.5">Continuous Monitoring</div>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-white/10">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">Average Latency</div>
                  <div className="text-lg font-display font-bold text-brand-blue mt-1">&lt; 180ms</div>
                  <div className="text-[10px] text-zinc-400 font-mono mt-0.5">Fast API Pipeline</div>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-white/10">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">Channel Link</div>
                  <div className="text-lg font-display font-bold text-white mt-1">WhatsApp &amp; CRM</div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-0.5">Dual-Way Active</div>
                </div>
              </div>

              {/* Live Event Terminal Simulation */}
              <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2.5 text-zinc-500 text-[10px]">
                  <span>LIVE REPOSITORIES &amp; EVENT BUS</span>
                  <span className="text-emerald-400">STREAMING</span>
                </div>
                <div className="space-y-1.5 text-zinc-300 text-[11px]">
                  <p className="text-zinc-400">
                    <span className="text-brand-blue">[19:14:02]</span> Routing inbound lead event from WhatsApp API (+92 321 8420985)
                  </p>
                  <p className="text-zinc-400">
                    <span className="text-emerald-400">[19:14:03]</span> AI Agent validated qualification score: 94/100 (Enterprise Tier)
                  </p>
                  <p className="text-zinc-400">
                    <span className="text-brand-blue">[19:14:04]</span> Central CRM updated with deal stage and automated meeting slot
                  </p>
                  <p className="text-zinc-300">
                    <span className="text-blue-400">[19:14:05]</span> Dispatched instant confirmation SMS &amp; WhatsApp calendar invite
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

