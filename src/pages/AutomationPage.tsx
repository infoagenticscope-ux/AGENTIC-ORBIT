import React from 'react';
import { 
  Zap, 
  Workflow, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  Database, 
  ShieldCheck, 
  GitCommit, 
  AlertCircle,
  FileSpreadsheet,
  Layers
} from 'lucide-react';
import { BRAND } from '../data/content';
import { WorkflowSimulator } from '../components/WorkflowSimulator';

interface AutomationPageProps {
  onOpenContact: (service?: string) => void;
}

export const AutomationPage: React.FC<AutomationPageProps> = ({ onOpenContact }) => {
  const comparisonData = [
    {
      metric: "Lead Response Time",
      manual: "2 to 8 hours (during business hours)",
      automated: "< 30 seconds (24/7/365)",
    },
    {
      metric: "Data Entry Across Systems",
      manual: "Manually re-typing from WhatsApp into Excel/CRM",
      automated: "Instant webhook synchronization with zero re-typing",
    },
    {
      metric: "Human Error Rate",
      manual: "Missed follow-ups, typos in contact numbers, lost records",
      automated: "Deterministic 100% logged execution",
    },
    {
      metric: "Staff Time Spent",
      manual: "15-25 hours per employee/week on admin chores",
      automated: "Freed to focus on customer relationships and high-value work",
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* =========================================================================
          HERO SECTION (Dedicated: Workflow Engineering Matrix)
      ========================================================================= */}
      <section className="relative py-16 sm:py-24 border-b border-brand-blue/20 overflow-hidden bg-brand-dark">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-xs font-mono text-brand-blue uppercase">
              <Zap className="w-3.5 h-3.5" />
              <span>Dedicated Track • Smart Business Automation</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Automate the Work. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-blueGlow to-white">
                Not the Vision.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              We connect your existing communication tools, databases, CRMs, and email pipelines into self-running automated workflows that never miss a step.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenContact('Smart Automation & Workflows')}
                className="px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-blueDeep hover:from-brand-blueHover hover:to-brand-blue shadow-glow-blue transition-all flex items-center justify-center space-x-2"
              >
                <span>Design Your Automated Workflow</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-xs font-mono text-zinc-300 hover:text-white bg-white/5 border border-white/10 hover:border-brand-blue/40 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Direct WhatsApp: {BRAND.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE WORKFLOW SIMULATOR
      ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 space-y-2">
          <span className="text-xs font-mono text-brand-blue uppercase">Architecture Visualizer</span>
          <h2 className="font-display text-3xl font-bold text-white">Live Workflow Engine Demonstration</h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Experience how event-driven webhooks seamlessly chain through data enrichment and instant messaging.
          </p>
        </div>

        <WorkflowSimulator />
      </section>

      {/* =========================================================================
          MANUAL VS AUTOMATED BREAKDOWN
      ========================================================================= */}
      <section className="py-20 bg-brand-card/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs font-mono text-brand-blue uppercase">Operational Impact</span>
            <h2 className="font-display text-3xl font-bold text-white">Manual Handling vs Agentic Scope</h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Clear operational differences when switching from fragmented spreadsheets to automated pipelines.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-brand-blue/30 bg-black/60 font-mono text-xs uppercase">
                  <th className="p-4 text-zinc-400">Operational Dimension</th>
                  <th className="p-4 text-red-400">Traditional Manual Process</th>
                  <th className="p-4 text-emerald-400">Agentic Scope Automated Pipeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-semibold text-white font-display">{row.metric}</td>
                    <td className="p-4 text-zinc-400 flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
                      <span>{row.manual}</span>
                    </td>
                    <td className="p-4 text-zinc-200 font-medium">
                      <span className="inline-flex items-center space-x-1.5 text-emerald-400">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                        <span>{row.automated}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: TECHNICAL ARCHITECTURE INVARIANTS
      ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue">
              <Database className="w-4 h-4" />
            </div>
            <h4 className="font-display font-bold text-lg text-white">Idempotent Execution</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Every webhook and message dispatch is assigned a unique idempotency key, preventing duplicate messages or duplicate CRM record creation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <h4 className="font-display font-bold text-lg text-white">Secure Encrypted Transit</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              All credentials, API tokens, and client communications are stored with AES-256 encryption and transmitted over TLS 1.3 tunnels.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-blue">
              <GitCommit className="w-4 h-4" />
            </div>
            <h4 className="font-display font-bold text-lg text-white">Automated Retry &amp; Dead-Letter</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              If a third-party server temporarily drops connection, our queue system retries with exponential backoff and alerts your technical team.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CTA
      ========================================================================= */}
      <section className="pt-10 max-w-5xl mx-auto px-4 text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
          Eliminate Manual Bottlenecks Today
        </h2>
        <p className="text-sm text-zinc-400 max-w-xl mx-auto">
          Share your daily repetitive workflows with Agentic Scope and let us build an automated proof-of-concept.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenContact('Automation Workflow Scoping')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-blue hover:bg-brand-blueHover shadow-glow-blue transition-all"
          >
            Schedule Automation Scoping Call
          </button>
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-300 hover:text-white bg-white/5 border border-white/10"
          >
            Talk on WhatsApp: {BRAND.phoneFormatted}
          </a>
        </div>
      </section>
    </div>
  );
};

