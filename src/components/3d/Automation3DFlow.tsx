import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Cpu, 
  GitBranch, 
  RefreshCw, 
  CheckCircle, 
  Play, 
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface StepData {
  step: number;
  label: string;
  sub: string;
  icon: any;
  tech: string;
  payload: string;
  latency: string;
}

export const Automation3DFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const steps: StepData[] = [
    {
      step: 1,
      label: 'TRIGGER',
      sub: 'Inbound Event Ingestion',
      icon: Zap,
      tech: 'Webhook / WhatsApp / API Event',
      payload: '{\n  "source": "WhatsApp_Business",\n  "contact": "+92 317 0062959",\n  "intent": "Enterprise_Licensing_Inquiry"\n}',
      latency: '2ms'
    },
    {
      step: 2,
      label: 'AI AGENT',
      sub: 'Neural Intent Extraction',
      icon: Cpu,
      tech: 'Agentic Orbit Core LLM',
      payload: '{\n  "agent": "Sales_Agent_V4",\n  "confidence": 0.994,\n  "extracted_deal_size": "$24,000",\n  "priority": "HIGH"\n}',
      latency: '18ms'
    },
    {
      step: 3,
      label: 'DECISION',
      sub: 'Deterministic Policy Evaluation',
      icon: GitBranch,
      tech: 'Autonomous Rules Engine',
      payload: '{\n  "rule_check": "APPROVED",\n  "sla_tier": "VIP_15min",\n  "routing": "Auto_Schedule_Executive_Demo"\n}',
      latency: '4ms'
    },
    {
      step: 4,
      label: 'AUTOMATION',
      sub: 'Cross-System Multi-Exec',
      icon: RefreshCw,
      tech: 'CRM Sync + Stripe + Calendar',
      payload: '{\n  "crm_lead_created": "ID_98241",\n  "calendar_invite_dispatched": true,\n  "slack_alert_fired": true\n}',
      latency: '24ms'
    },
    {
      step: 5,
      label: 'BUSINESS RESULT',
      sub: 'Autonomous Value Delivered',
      icon: CheckCircle,
      tech: 'Revenue Captured / Zero Latency',
      payload: '{\n  "status": "COMPLETED",\n  "customer_satisfaction": 5.0,\n  "staff_intervention": "0_HOURS"\n}',
      latency: 'Instant'
    }
  ];

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStep(0);

    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current < steps.length) {
        setActiveStep(current);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 1100);
  };

  useEffect(() => {
    // Initial auto simulation
    const timer = setTimeout(() => {
      runSimulation();
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full relative">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-blue/30 text-brand-blue text-xs font-mono mb-4">
          <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
          <span>END-TO-END EVENT ORCHESTRATION</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
          AUTOMATE THE WORK. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-sky-300 to-brand-blueDeep">
            FOCUS ON THE GROWTH.
          </span>
        </h2>
        <p className="mt-4 text-slate-300 text-sm md:text-base leading-relaxed">
          From the millisecond a lead arrives to the instant the deal is executed in your CRM — our self-orchestrating event pipeline handles operations with zero human lag.
        </p>

        {/* Live Simulation Trigger Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={runSimulation}
            disabled={isSimulating}
            className="px-5 py-2.5 rounded-xl bg-brand-surface border border-brand-blue/40 hover:border-brand-blue text-white font-mono text-xs md:text-sm flex items-center gap-2.5 transition-all shadow-glow-blue disabled:opacity-60"
          >
            <Play className={`w-3.5 h-3.5 text-brand-blue ${isSimulating ? 'animate-spin' : ''}`} />
            <span>{isSimulating ? 'SIMULATING REAL-TIME PIPELINE...' : 'RUN LIVE EVENT SIMULATION'}</span>
          </button>
        </div>
      </div>

      {/* 5-Step 3D Pipeline Visualization Track */}
      <div className="relative mb-12">
        {/* Connecting Neon Conduit Track */}
        <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 -translate-y-1/2 bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-brand-blue via-sky-400 to-brand-blueDeep transition-all duration-700 shadow-glow-blue"
            style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
          />
        </div>

        {/* Grid of 5 Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isPassed = idx <= activeStep;
            const isCurrent = idx === activeStep;

            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 relative group ${
                  isCurrent
                    ? 'glass-panel-glow border-brand-blue scale-105 shadow-glow-blue z-20'
                    : isPassed
                    ? 'glass-panel border-brand-blue/40 bg-brand-surface/70'
                    : 'glass-panel border-slate-800 bg-brand-dark/60 opacity-70 hover:opacity-100 hover:border-slate-700'
                }`}
              >
                {/* Stage Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                    isCurrent 
                      ? 'bg-brand-blue text-black font-bold border-brand-blue'
                      : isPassed
                      ? 'bg-brand-blue/15 text-brand-blue border-brand-blue/30'
                      : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}>
                    0{s.step}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {s.latency}
                  </span>
                </div>

                <div className={`p-3 rounded-xl w-fit mb-3 border ${
                  isCurrent
                    ? 'bg-brand-blue/20 border-brand-blue text-brand-blue'
                    : 'bg-slate-800/80 border-slate-700 text-slate-300'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-sm font-display font-bold text-white tracking-wide">
                  {s.label}
                </h3>
                <p className="text-xs text-slate-300 mt-1 font-sans">
                  {s.sub}
                </p>

                <div className="mt-3 pt-3 border-t border-slate-800 text-[10px] font-mono text-brand-blue truncate">
                  {s.tech}
                </div>

                {/* Animated Pulsing Light on Current Node */}
                {isCurrent && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-blue rounded-full animate-ping" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Step Payload & Telemetry Inspector */}
      <div className="glass-panel p-6 rounded-2xl border border-brand-blue/30 max-w-4xl mx-auto">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-white font-semibold">
              STEP {steps[activeStep].step} TELEMETRY INSPECTOR: <span className="text-brand-blue">{steps[activeStep].label}</span>
            </span>
          </div>
          <span className="text-xs font-mono text-slate-400">
            ENGINE: AGENTIC_EVENT_BUS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <h4 className="text-sm font-display font-semibold text-white mb-1">
              {steps[activeStep].sub}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Real-time asynchronous execution managed by Agentic Orbit. State transitions are verified against policy constraints before dispatching downstream transactions.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="glass-panel px-3 py-1.5 rounded border border-slate-800 text-xs font-mono">
                <span className="text-slate-400">EXEC_TIME: </span>
                <span className="text-brand-blue font-bold">{steps[activeStep].latency}</span>
              </div>
              <div className="glass-panel px-3 py-1.5 rounded border border-slate-800 text-xs font-mono">
                <span className="text-slate-400">STATUS: </span>
                <span className="text-emerald-400 font-bold">VERIFIED</span>
              </div>
            </div>
          </div>

          <div className="bg-brand-darker p-4 rounded-xl border border-slate-800 font-mono text-[11px] text-cyan-300 overflow-x-auto">
            <div className="text-[10px] text-slate-500 mb-1 flex items-center justify-between">
              <span>RAW EVENT JSON PAYLOAD</span>
              <span>200 OK</span>
            </div>
            <pre className="whitespace-pre">{steps[activeStep].payload}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};
