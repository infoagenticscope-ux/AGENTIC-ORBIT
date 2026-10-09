import React, { useState, useEffect } from 'react';
import { 
  UserPlus, 
  Search, 
  Bot, 
  Database, 
  MessageCircle, 
  BellRing, 
  Play, 
  CheckCircle2, 
  ArrowDown, 
  RefreshCw,
  Sparkles,
  Zap
} from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/content';

export const WorkflowSimulator: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [autoSpeed, setAutoSpeed] = useState(1400);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= WORKFLOW_STEPS.length - 1) {
            setIsRunning(false);
            return prev;
          }
          return prev + 1;
        });
      }, autoSpeed);
    }
    return () => clearInterval(interval);
  }, [isRunning, autoSpeed]);

  const handleStartSimulation = () => {
    setActiveStep(0);
    setIsRunning(true);
  };

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <UserPlus className="w-5 h-5" />;
      case 1:
        return <Search className="w-5 h-5" />;
      case 2:
        return <Bot className="w-5 h-5" />;
      case 3:
        return <Database className="w-5 h-5" />;
      case 4:
        return <MessageCircle className="w-5 h-5 text-emerald-400" />;
      case 5:
        return <BellRing className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <div className="relative glass-panel-glow rounded-3xl p-6 sm:p-10 border border-brand-blue/30 overflow-hidden">
      {/* Circuit background lines */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-30 pointer-events-none"></div>
      
      {/* Header of builder */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10 relative z-10">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-brand-blue mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest">Interactive Automation Engine</span>
          </div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
            Lead Qualification & Dispatch Pipeline
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
            Watch how Agentic Scope chains autonomous AI decisions, CRM records, and WhatsApp outreach.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={handleStartSimulation}
            disabled={isRunning}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-glow-blue-sm ${
              isRunning
                ? 'bg-zinc-800 text-zinc-400 cursor-not-allowed'
                : 'bg-brand-blue hover:bg-brand-blueHover text-white hover:scale-105 active:scale-95'
            }`}
          >
            {isRunning ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-brand-blue" />
                <span>Executing Pipeline...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>Trigger Simulation</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Nodes visual flow */}
      <div className="py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative">
          {WORKFLOW_STEPS.map((step, idx) => {
            const isCompleted = idx < activeStep;
            const isCurrent = idx === activeStep;
            
            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`relative flex flex-col justify-between p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  isCurrent
                    ? 'bg-brand-blue/15 border-brand-blue shadow-glow-blue scale-[1.02]'
                    : isCompleted
                    ? 'bg-zinc-900/90 border-emerald-500/40 text-zinc-300'
                    : 'bg-zinc-950/70 border-white/5 opacity-60 hover:opacity-90'
                }`}
              >
                <div>
                  {/* Step badge & state */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-semibold ${
                        isCurrent
                          ? 'bg-brand-blue text-white'
                          : isCompleted
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-white/5 text-zinc-500'
                      }`}
                    >
                      Node {step.step}
                    </span>

                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : isCurrent ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-blue animate-ping" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-zinc-700" />
                    )}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                      isCurrent
                        ? 'bg-brand-blue text-white shadow-glow-blue-sm'
                        : isCompleted
                        ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                        : 'bg-zinc-900 text-zinc-400 border border-white/5'
                    }`}
                  >
                    {getStepIcon(idx)}
                  </div>

                  {/* Title */}
                  <h4 className="font-display font-semibold text-xs sm:text-sm text-white mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-zinc-400 leading-normal">
                    {step.description}
                  </p>
                </div>

                {/* Subtag */}
                <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>Type</span>
                  <span className="text-zinc-300">{step.status}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Terminal / Live Execution Payload Inspector */}
      <div className="mt-2 bg-black/90 border border-white/10 rounded-2xl p-4 sm:p-5 font-mono text-xs relative z-10">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-zinc-400">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-blue"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-zinc-300 ml-2 font-semibold">
              Live Workflow Event Inspector — Node {WORKFLOW_STEPS[activeStep].step}
            </span>
          </div>
          <span className="text-[10px] text-zinc-500">Deterministic Event Stream</span>
        </div>

        <div className="space-y-1.5 text-zinc-300 text-[11px]">
          <div className="text-brand-blue font-semibold">
            &gt; STAGE_NAME: &quot;{WORKFLOW_STEPS[activeStep].title}&quot;
          </div>
          <div className="text-zinc-400">
            &gt; STATUS: {activeStep < WORKFLOW_STEPS.length - 1 ? 'PROCESSING_PAYLOAD' : 'COMPLETE_DISPATCHED'}
          </div>
          <div className="text-emerald-400">
            &gt; EXECUTION_TIME: {(activeStep * 84 + 42).toString()}ms | LATENCY: 0.04s | PROTOCOL: WEBSOCKET / SECURE_API
          </div>
          <div className="p-3 bg-zinc-950 rounded-lg text-zinc-400 border border-white/5 mt-2 overflow-x-auto text-[10px]">
            {activeStep === 0 && (
              <code>
                &#123;&quot;event&quot;: &quot;lead.captured&quot;, &quot;source&quot;: &quot;Web &amp; WhatsApp&quot;, &quot;tier&quot;: &quot;Enterprise&quot;, &quot;time&quot;: &quot;2026-10-03T19:14:00Z&quot;&#125;
              </code>
            )}
            {activeStep === 1 && (
              <code>
                &#123;&quot;event&quot;: &quot;lead.parsed&quot;, &quot;budget_validated&quot;: true, &quot;operational_bottleneck&quot;: &quot;Manual CRM Data Entry&quot;&#125;
              </code>
            )}
            {activeStep === 2 && (
              <code>
                &#123;&quot;event&quot;: &quot;agent.qualification&quot;, &quot;score&quot;: 96, &quot;routing_policy&quot;: &quot;DIRECT_SENIOR_CONSULTANT&quot;&#125;
              </code>
            )}
            {activeStep === 3 && (
              <code>
                &#123;&quot;event&quot;: &quot;crm.synchronized&quot;, &quot;record_id&quot;: &quot;AS-9481&quot;, &quot;status&quot;: &quot;QUALIFIED_ACTIVE&quot;&#125;
              </code>
            )}
            {activeStep === 4 && (
              <code>
                &#123;&quot;event&quot;: &quot;whatsapp.dispatched&quot;, &quot;recipient&quot;: &quot;+92 321 8420985&quot;, &quot;template&quot;: &quot;immediate_discovery_booking&quot;&#125;
              </code>
            )}
            {activeStep === 5 && (
              <code>
                &#123;&quot;event&quot;: &quot;pipeline.complete&quot;, &quot;team_notified&quot;: true, &quot;calendar_slot&quot;: &quot;Reserved&quot;&#125;
              </code>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

