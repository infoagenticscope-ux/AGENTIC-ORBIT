import React, { useState } from 'react';
import { 
  Users, 
  BarChart3, 
  TrendingUp, 
  Phone, 
  MessageSquare, 
  CheckCircle, 
  Clock, 
  Filter, 
  Sparkles, 
  ArrowUpRight, 
  ShieldAlert,
  Calendar,
  Layers,
  Activity
} from 'lucide-react';
import { TiltCard3D } from './3d/TiltCard3D';

interface LeadItem {
  id: string;
  name: string;
  company: string;
  value: string;
  stage: 'Qualified' | 'Proposal' | 'Negotiation' | 'Closing';
  aiScore: number;
  recommendation: string;
  lastTouch: string;
}

export const CrmAnalyticsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'crm' | 'analytics'>('crm');
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [selectedTimeframe, setSelectedTimeframe] = useState<'30D' | '90D' | '1Y'>('30D');

  const leads: LeadItem[] = [
    {
      id: 'L-101',
      name: 'Sarah Jenkins',
      company: 'Apex Logistics Inc.',
      value: '$34,500',
      stage: 'Closing',
      aiScore: 98,
      recommendation: 'Send custom SLA proposal — customer reviewed pricing 4 times today.',
      lastTouch: 'WhatsApp Voice Call (2h ago)'
    },
    {
      id: 'L-102',
      name: 'Tariq Mehmood',
      company: 'Global Retail Hub',
      value: '$18,200',
      stage: 'Proposal',
      aiScore: 89,
      recommendation: 'Trigger automated ROI calculator demo based on retail volume.',
      lastTouch: 'WhatsApp Chat (45m ago)'
    },
    {
      id: 'L-103',
      name: 'Elena Rostova',
      company: 'OmniHealth SaaS',
      value: '$42,000',
      stage: 'Negotiation',
      aiScore: 92,
      recommendation: 'Offer 14-day agent sandbox trial with enterprise security addendum.',
      lastTouch: 'Executive Briefing (Yesterday)'
    },
    {
      id: 'L-104',
      name: 'David Sterling',
      company: 'FinFlow Capital',
      value: '$29,000',
      stage: 'Qualified',
      aiScore: 84,
      recommendation: 'Autonomous follow-up cadence scheduled for 10:00 AM tomorrow.',
      lastTouch: 'Inbound Webhook Form (3h ago)'
    }
  ];

  const filteredLeads = selectedFilter === 'All' 
    ? leads 
    : leads.filter(l => l.stage === selectedFilter);

  return (
    <div className="w-full relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-brand-blue/30 text-brand-blue text-xs font-mono mb-4">
          <Activity className="w-3.5 h-3.5 text-brand-blue" />
          <span>MISSION CONTROL DASHBOARDS</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
          CRM &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-sky-300 to-brand-blueDeep">BUSINESS ANALYTICS</span>
        </h2>
        <p className="mt-4 text-slate-300 text-sm md:text-base leading-relaxed">
          Real-time visibility into every customer conversation, pipeline deal, automated event, and revenue metric. 
        </p>

        {/* Platform Preview Disclaimer Badge */}
        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded bg-sky-950/40 border border-sky-800/40 text-[11px] font-mono text-sky-300">
          <span className="w-2 h-2 rounded-full bg-brand-blue" />
          <span>NOTE: Interactive interface below is an illustrative <strong>Platform Preview</strong>.</span>
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <button
          onClick={() => setActiveTab('crm')}
          className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold flex items-center gap-2 transition-all duration-300 ${
            activeTab === 'crm'
              ? 'bg-brand-blue text-black font-bold shadow-glow-blue scale-105'
              : 'glass-panel border-slate-800 text-slate-300 hover:text-white'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Autonomous CRM Showcase</span>
        </button>

        <button
          onClick={() => setActiveTab('analytics')}
          className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold flex items-center gap-2 transition-all duration-300 ${
            activeTab === 'analytics'
              ? 'bg-brand-blue text-black font-bold shadow-glow-blue scale-105'
              : 'glass-panel border-slate-800 text-slate-300 hover:text-white'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span>Predictive Business Analytics</span>
        </button>
      </div>

      {/* Showcase Container */}
      <div className="glass-panel-glow rounded-3xl border border-brand-blue/30 p-4 md:p-8 relative overflow-hidden">
        {activeTab === 'crm' ? (
          /* ================= CRM SHOWCASE TAB ================= */
          <div className="space-y-6">
            {/* Top Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">PIPELINE STAGE:</span>
                <div className="flex items-center gap-1.5 overflow-x-auto">
                  {['All', 'Qualified', 'Proposal', 'Negotiation', 'Closing'].map((stage) => (
                    <button
                      key={stage}
                      onClick={() => setSelectedFilter(stage)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                        selectedFilter === stage
                          ? 'bg-brand-blue/20 text-brand-blue border border-brand-blue/40 font-bold'
                          : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      {stage}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                <span>ACTIVE DEALS: <strong className="text-white">4</strong></span>
                <span className="text-slate-600">|</span>
                <span>PIPELINE VALUE: <strong className="text-brand-blue">$123,700</strong></span>
              </div>
            </div>

            {/* Leads Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredLeads.map((lead) => (
                <TiltCard3D key={lead.id} maxTilt={6}>
                  <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-brand-blue/40 transition-all h-full flex flex-col justify-between">
                    <div>
                      {/* Top Lead Info */}
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-base font-display font-bold text-white">
                              {lead.name}
                            </h4>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-blue/15 text-brand-blue border border-brand-blue/30">
                              {lead.id}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400">{lead.company}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-base font-mono font-bold text-white">
                            {lead.value}
                          </span>
                          <span className="block text-[10px] font-mono text-brand-blue uppercase">
                            {lead.stage}
                          </span>
                        </div>
                      </div>

                      {/* AI Probability & Recommendation */}
                      <div className="my-3 p-3 rounded-xl bg-brand-dark/80 border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-slate-400 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
                            AI Close Probability:
                          </span>
                          <span className="text-emerald-400 font-bold">{lead.aiScore}%</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-brand-blue to-emerald-400 rounded-full"
                            style={{ width: `${lead.aiScore}%` }}
                          />
                        </div>

                        <p className="text-[11px] text-slate-300 italic pt-1 leading-snug">
                          {lead.recommendation}
                        </p>
                      </div>
                    </div>

                    {/* Footer Activity */}
                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span>{lead.lastTouch}</span>
                      <a
                        href="https://wa.me/923170062959?text=Hello%20Agentic%20Orbit,%20I%20want%20to%20learn%20how%20your%20CRM%20manages%20leads%20and%20follow-ups."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-blue hover:text-white flex items-center gap-1"
                      >
                        <span>WhatsApp Connect</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </TiltCard3D>
              ))}
            </div>
          </div>
        ) : (
          /* ================= BUSINESS ANALYTICS TAB ================= */
          <div className="space-y-6">
            {/* KPI Cards Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              <div className="glass-panel p-4 rounded-xl border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 uppercase">MONTHLY REVENUE LIFT</span>
                <div className="text-2xl font-mono font-extrabold text-white mt-1">+34.8%</div>
                <div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>Driven by AI pipeline velocity</span>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 uppercase">AVG LEAD ENGAGEMENT</span>
                <div className="text-2xl font-mono font-extrabold text-brand-blue mt-1">2.4 sec</div>
                <div className="text-[10px] text-slate-400 mt-1">Instant WhatsApp triage</div>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 uppercase">EVENTS AUTOMATED</span>
                <div className="text-2xl font-mono font-extrabold text-white mt-1">428,910</div>
                <div className="text-[10px] text-brand-blue mt-1">99.99% event delivery</div>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 uppercase">CHURN REDUCTION</span>
                <div className="text-2xl font-mono font-extrabold text-emerald-400 mt-1">-42%</div>
                <div className="text-[10px] text-slate-400 mt-1">Proactive health alarms</div>
              </div>
            </div>

            {/* Main Cyber Chart Mockup */}
            <div className="p-6 rounded-2xl bg-brand-dark/90 border border-slate-800 relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <h4 className="text-sm font-display font-bold text-white">
                    Operational Throughput vs. Human Hours Saved
                  </h4>
                  <p className="text-xs text-slate-400">
                    Platform Telemetry Simulation (30-Day Cohort Breakdown)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {(['30D', '90D', '1Y'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTimeframe(t)}
                      className={`px-2.5 py-1 rounded text-xs font-mono ${
                        selectedTimeframe === t 
                          ? 'bg-brand-blue text-black font-bold' 
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bar Chart Bars Simulation */}
              <div className="h-48 flex items-end gap-2 sm:gap-4 pt-4 border-b border-slate-800 px-2">
                {[
                  { day: 'W1', value: 45, auto: 35 },
                  { day: 'W2', value: 65, auto: 55 },
                  { day: 'W3', value: 50, auto: 48 },
                  { day: 'W4', value: 85, auto: 78 },
                  { day: 'W5', value: 70, auto: 66 },
                  { day: 'W6', value: 92, auto: 88 },
                  { day: 'W7', value: 80, auto: 75 },
                  { day: 'W8', value: 98, auto: 95 }
                ].map((item, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1 group">
                    <div className="w-full flex items-end justify-center gap-1 h-36">
                      <div 
                        style={{ height: `${item.value}%` }} 
                        className="w-1/2 bg-slate-700/60 rounded-t group-hover:bg-slate-600 transition-colors"
                        title={`Baseline: ${item.value}`}
                      />
                      <div 
                        style={{ height: `${item.auto}%` }} 
                        className="w-1/2 bg-gradient-to-t from-brand-blueDeep to-brand-blue rounded-t shadow-glow-blue-sm group-hover:brightness-125 transition-all"
                        title={`Autonomous: ${item.auto}`}
                      />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">{item.day}</span>
                  </div>
                ))}
              </div>

              {/* Chart Legend */}
              <div className="flex items-center justify-center gap-6 mt-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-slate-700" />
                  <span>Manual Operations</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-brand-blue shadow-glow-blue-sm" />
                  <span className="text-brand-blue font-semibold">Agentic Orbit Autonomous Flow</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

