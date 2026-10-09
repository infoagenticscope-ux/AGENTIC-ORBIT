import React, { useState } from 'react';
import { 
  Cpu, 
  Mic, 
  Monitor, 
  Bot, 
  Network, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Download, 
  Play, 
  Volume2, 
  Radio, 
  Terminal, 
  Sparkles,
  Zap,
  HardDrive
} from 'lucide-react';
import { BRAND, DIGI_BIZ_OS } from '../data/content';

interface DigiBizOsPageProps {
  onOpenContact: (service?: string) => void;
}

export const DigiBizOsPage: React.FC<DigiBizOsPageProps> = ({ onOpenContact }) => {
  const [selectedVoiceCommand, setSelectedVoiceCommand] = useState(0);

  const voiceDemos = [
    {
      voice: "“Hey DigiBiz, summarize yesterday’s sales and sync WhatsApp leads to our CRM.”",
      response: "Parsed 42 inbound leads. 18 qualified as High-Intent. CRM deal stages updated, WhatsApp confirmation dispatched to 18 prospects. Total cycle time: 1.4 seconds.",
      category: "CRM & Sales Orchestration",
    },
    {
      voice: "“DigiBiz, create a PDF invoice for client Apex Logistics and file in archive.”",
      response: "Generated Invoice #AS-2026-88. Computed VAT & total. Stored securely in local vault and dispatched payment link via email and WhatsApp.",
      category: "Automated Invoicing",
    },
    {
      voice: "“DigiBiz, run desktop scraper on supplier inventory and flag low stock items.”",
      response: "Checked 1,200 SKUs via automated desktop window. Flagged 6 items below threshold. Alert notification routed to Operations Director.",
      category: "Desktop UI Automation",
    },
  ];

  const agentNodes = [
    { name: "Memory Agent", desc: "Long-term persistent context storage across sessions." },
    { name: "Soul Engine", desc: "Personality, brand tone, and company policy alignment." },
    { name: "Skills Vault", desc: "Pre-compiled automated recipes and CLI tools." },
    { name: "Mobile Bridge", desc: "Two-way live WhatsApp and smartphone sync." },
    { name: "Screen Share", desc: "Real-time visual recognition of desktop windows." },
    { name: "Universal MCP", desc: "Model Context Protocol connections to external databases." },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 border-b border-brand-blue/20 overflow-hidden bg-brand-dark">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-xs font-mono text-brand-blue uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Flagship Software • {DIGI_BIZ_OS.version}</span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                DIGI BIZ OS — <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-blueGlow to-white">
                  The Voice-Controlled
                </span>{' '}
                <br />
                Business Operating System.
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl">
                {DIGI_BIZ_OS.heroHook}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white">
                  Windows 10/11 Available Now
                </span>
                <span className="px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-blue font-semibold">
                  One-Time £50 Lifetime License
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400">
                  Zero Monthly Subscriptions
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenContact('DIGI BIZ OS License & Download')}
                  className="px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-blueDeep hover:from-brand-blueHover hover:to-brand-blue shadow-glow-blue transition-all flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Get DIGI BIZ OS License</span>
                </button>

                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl text-xs font-mono text-zinc-300 hover:text-white bg-white/5 border border-white/10 hover:border-brand-blue/40 transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Demo: {BRAND.phoneFormatted}</span>
                </a>
              </div>
            </div>

            {/* Right Visual Console */}
            <div className="lg:col-span-5 relative">
              <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-brand-blue/40 shadow-glow-blue relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 font-mono text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-blue animate-ping"></span>
                    <span className="text-white font-bold">DIGI BIZ OS RUNTIME</span>
                  </div>
                  <span className="text-emerald-400">&lt;200ms LATENCY</span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-black/80 border border-white/10 font-mono text-xs space-y-2">
                    <div className="text-zinc-500 uppercase text-[10px]">Active Subsystems</div>
                    <div className="flex justify-between text-zinc-300">
                      <span>Voice Assistant:</span>
                      <span className="text-emerald-400">Online (JARVIS Audio Engine)</span>
                    </div>
                    <div className="flex justify-between text-zinc-300">
                      <span>Desktop Automation:</span>
                      <span className="text-white">Active Hook</span>
                    </div>
                    <div className="flex justify-between text-zinc-300">
                      <span>AI Model Engine:</span>
                      <span className="text-brand-blue">Local Ollama / Gemini Hybrid</span>
                    </div>
                    <div className="flex justify-between text-zinc-300">
                      <span>Universal MCP:</span>
                      <span className="text-emerald-400">12 Tools Connected</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-brand-blue/10 border border-brand-blue/30 text-xs font-mono text-zinc-300">
                    <span className="text-brand-blue font-bold block mb-1">Lifetime Ownership Policy</span>
                    No cloud locks, no monthly per-seat SaaS tax. You own the software and can run local open-source models with zero recurring subscription fees.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Control Interactive Demo */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-xs font-mono text-brand-blue uppercase">Voice AI Experience</span>
          <h2 className="font-display text-3xl font-bold text-white">Speak and Control Your Business</h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Click any command below to see how DIGI BIZ OS processes natural language into desktop action.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {voiceDemos.map((demo, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedVoiceCommand(idx)}
              className={`p-6 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                selectedVoiceCommand === idx
                  ? 'bg-zinc-950 border-brand-blue shadow-glow-blue-sm scale-[1.02]'
                  : 'bg-zinc-950/60 border-white/5 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-zinc-500 uppercase">{demo.category}</span>
                  <Volume2 className={`w-4 h-4 ${selectedVoiceCommand === idx ? 'text-brand-blue' : 'text-zinc-600'}`} />
                </div>
                <p className="text-sm font-display font-semibold text-white mb-4">
                  {demo.voice}
                </p>
              </div>
              <span className="text-[11px] font-mono text-brand-blue">Click to simulate</span>
            </button>
          ))}
        </div>

        {/* Live response box */}
        <div className="p-6 rounded-2xl bg-black border border-brand-blue/30 font-mono text-xs text-zinc-300 space-y-2">
          <div className="flex items-center space-x-2 text-brand-blue font-bold pb-2 border-b border-white/10">
            <Mic className="w-4 h-4" />
            <span>VOICE COMMAND EXECUTED:</span>
          </div>
          <div className="text-white text-sm font-semibold italic">
            {voiceDemos[selectedVoiceCommand].voice}
          </div>
          <div className="pt-2 text-emerald-400">
            &gt; SYSTEM ACTION: {voiceDemos[selectedVoiceCommand].response}
          </div>
        </div>
      </section>

      {/* 6 Core Feature Pillars */}
      <section className="py-20 bg-brand-card/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs font-mono text-brand-blue uppercase">Operating Architecture</span>
            <h2 className="font-display text-3xl font-bold text-white">Why Founders Choose DIGI BIZ OS</h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              A complete native desktop operating environment combining local AI, voice, and multi-agent workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIGI_BIZ_OS.coreFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-950 border border-white/10 hover:border-brand-blue/40 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">{feat.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Agent Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-xs font-mono text-brand-blue uppercase">Subsystem Matrix</span>
          <h2 className="font-display text-3xl font-bold text-white">Concurrent Specialized Sub-Agents</h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Each agent has designated roles, isolated execution boundaries, and encrypted local memory.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {agentNodes.map((agent, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-zinc-950/70 border border-white/5 space-y-2">
              <div className="flex items-center space-x-2 text-brand-blue font-mono text-xs font-bold">
                <Bot className="w-4 h-4" />
                <span>{agent.name}</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">{agent.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pt-10 max-w-5xl mx-auto px-4 text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
          Get DIGI BIZ OS for Windows Today
        </h2>
        <p className="text-sm text-zinc-400 max-w-xl mx-auto">
          One-time purchase of £50 or request custom enterprise deployment for your multi-user team.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenContact('DIGI BIZ OS Purchase')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-blue hover:bg-brand-blueHover shadow-glow-blue transition-all"
          >
            Buy DIGI BIZ OS (£50 One-Time)
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

