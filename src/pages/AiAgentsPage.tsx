import React from 'react';
import { 
  Bot, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Terminal, 
  Layers, 
  Radio, 
  Users, 
  Sparkles,
  GitBranch,
  Key
} from 'lucide-react';
import { BRAND, AI_AGENTS_LIST } from '../data/content';

interface AiAgentsPageProps {
  onOpenContact: (service?: string) => void;
}

export const AiAgentsPage: React.FC<AiAgentsPageProps> = ({ onOpenContact }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* =========================================================================
          HERO SECTION (Dedicated: Robotic / Autonomous Grid)
      ========================================================================= */}
      <section className="relative py-16 sm:py-24 border-b border-brand-blue/20 overflow-hidden bg-brand-dark">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-xs font-mono text-brand-blue uppercase">
              <Bot className="w-3.5 h-3.5" />
              <span>Dedicated Service Track • Autonomous Systems</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Intelligent Agents for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-blueGlow to-white">
                Real Business Work.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              We engineer goal-oriented autonomous software agents that execute complex business tasks, converse across customer channels, and sync enterprise records without human delay.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenContact('AI Agents Deployment')}
                className="px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-blueDeep hover:from-brand-blueHover hover:to-brand-blue shadow-glow-blue transition-all flex items-center justify-center space-x-2"
              >
                <span>Deploy AI Agents for Your Company</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-xs font-mono text-zinc-300 hover:text-white bg-white/5 border border-white/10 hover:border-brand-blue/40 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Discuss on WhatsApp: {BRAND.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: WHAT AI AGENTS ACTUALLY DO
      ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-zinc-950 border border-brand-blue/20 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">Execute Real Actions</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Unlike static chatbots that only generate text, Agentic Scope AI agents interact with your databases, dispatch WhatsApp templates, update CRM stages, and create real task assignments.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-950 border border-white/10 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">Strict Company Guardrails</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Agents never hallucinate pricing or make unauthorized promises. Every response is constrained by your approved policies, knowledge bases, and escalation protocols.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-950 border border-white/10 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-blue">
              <GitBranch className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">Multi-Step Reasoning</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Capable of evaluating multiple conditions before deciding the next step: verifying customer identity, checking order status, and calculating priority in milliseconds.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: DEEP DIVE INTO 6 AGENT TYPES
      ========================================================================= */}
      <section className="py-20 bg-brand-card/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs font-mono text-brand-blue uppercase">Agent Matrix</span>
            <h2 className="font-display text-3xl font-bold text-white">Specialized Business Agents</h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Explore how each agent functions within an enterprise workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_AGENTS_LIST.map((agent) => (
              <div
                key={agent.id}
                className="p-6 rounded-2xl bg-zinc-950 border border-white/10 hover:border-brand-blue/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-brand-blue font-semibold">
                      {agent.role}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">{agent.status}</span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-2">{agent.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">{agent.description}</p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">Capabilities</span>
                    <div className="flex flex-wrap gap-1.5">
                      {agent.capabilities.map((c) => (
                        <span
                          key={c}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/5 text-zinc-300"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-white/5 text-[11px] font-mono text-zinc-400">
                  <span className="text-brand-blue block mb-0.5">&gt; Sample Action:</span>
                  &quot;{agent.exampleTask}&quot;
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: HUMAN + AI COLLABORATION (SUPERVISORY CONTROL)
      ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-brand-blue/30 shadow-glow-blue-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-2/3 space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-brand-blue">
              <Users className="w-4 h-4" />
              <span>Human-In-The-Loop Architecture</span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              AI Agents Complement Your Team, Never Replace Discretion.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              We design every agent with supervisory gates. Routine qualification and data entry run autonomously, but whenever edge-case exceptions, complaints, or custom pricing thresholds occur, the agent flags an immediate notification to human operators with complete conversation history.
            </p>
          </div>

          <div className="lg:w-1/3 p-6 rounded-2xl bg-black/80 border border-white/10 font-mono text-xs text-zinc-300 space-y-2 w-full">
            <div className="text-brand-blue font-semibold pb-1 border-b border-white/10">
              Escalation Protocol
            </div>
            <div>[PASS] Standard lead qualification (Autonomous)</div>
            <div>[PASS] Knowledgebase FAQ resolution (Autonomous)</div>
            <div className="text-amber-400">[ESCALATE] Custom enterprise RFP (Routed to Director)</div>
            <div className="text-emerald-400 pt-2">&gt; Audit trail synced to CRM record</div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: DEDICATED CALL TO ACTION
      ========================================================================= */}
      <section className="pt-10 max-w-5xl mx-auto px-4 text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
          Ready to Deploy Autonomous Agents?
        </h2>
        <p className="text-sm text-zinc-400 max-w-xl mx-auto">
          Contact Agentic Scope to map out your first specialized AI agent deployment.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenContact('AI Agents Deployment')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-blue hover:bg-brand-blueHover shadow-glow-blue transition-all"
          >
            Request Agent Architecture Session
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

