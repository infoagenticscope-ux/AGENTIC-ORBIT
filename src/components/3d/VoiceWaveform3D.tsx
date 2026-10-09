import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  MicOff, 
  MessageSquare, 
  Briefcase, 
  Headphones, 
  GitMerge, 
  Volume2, 
  Sparkles,
  Send,
  PhoneCall
} from 'lucide-react';

interface AssistantProfile {
  id: string;
  name: string;
  category: string;
  icon: any;
  voiceDesc: string;
  samplePrompt: string;
  aiResponse: string;
  workflowAction: string;
}

export const VoiceWaveform3D: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('voice');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(true);
  const [bars, setBars] = useState<number[]>([]);

  const assistants: AssistantProfile[] = [
    {
      id: 'voice',
      name: 'Voice AI Agent',
      category: 'Conversational Telephony & VoIP',
      icon: PhoneCall,
      voiceDesc: 'Ultra-low latency natural neural voice synthesizing authentic human intonation and dialect.',
      samplePrompt: '"Customer: I need to upgrade our enterprise license and change the billing credit card."',
      aiResponse: '"Agentic Voice AI: Certainly! I have verified your account from this incoming number. I can upgrade you to Enterprise Tier 2 and send a secure billing link right now."',
      workflowAction: 'Dispatched 3DS payment verification link via SMS & updated CRM account tier.'
    },
    {
      id: 'chat',
      name: 'Chat AI Assistant',
      category: 'Omni-Channel Web & App Messaging',
      icon: MessageSquare,
      voiceDesc: 'Multi-lingual real-time web widget and mobile chat with zero waiting queue.',
      samplePrompt: '"Visitor: Can you integrate directly with our custom PostgreSQL ERP database?"',
      aiResponse: '"Chat AI: Yes, Agentic Orbit provides native bidirectional webhooks and REST/GraphQL connectors with field-level encryption for PostgreSQL."',
      workflowAction: 'Sent technical documentation link and scheduled engineer discovery meeting.'
    },
    {
      id: 'business',
      name: 'Business Strategy AI',
      category: 'Executive Copilot & Decision Support',
      icon: Briefcase,
      voiceDesc: 'Financial and operational reasoning engine that audits P&L, CAC, and staff efficiency.',
      samplePrompt: '"Founder: Analyze our customer retention rate for Q3 and highlight where we lost margin."',
      aiResponse: '"Business AI: Q3 retention held at 94.2%. However, delivery overhead in regional hubs increased by 6.8% due to manual dispatching bottlenecks."',
      workflowAction: 'Generated automated logistics optimization plan ready for executive approval.'
    },
    {
      id: 'support',
      name: 'Customer Support AI',
      category: 'Automated Tier-1/2 Issue Fulfillment',
      icon: Headphones,
      voiceDesc: 'Context-aware support agent that cross-references past orders, issues, and warranty policies.',
      samplePrompt: '"Client: My delivery order #9810 is delayed. When will the rider reach my location?"',
      aiResponse: '"Support AI: Your rider is 6 minutes away at Main Boulevard. Their live GPS location is tracked, and I have notified the store to ensure order priority."',
      workflowAction: 'Sent live GPS tracking link to customer WhatsApp and flagged order in KDS.'
    },
    {
      id: 'workflow',
      name: 'Workflow AI Conductor',
      category: 'Autonomous Multi-Tool Orchestrator',
      icon: GitMerge,
      voiceDesc: 'Translates natural language commands into complex multi-step automated sequences.',
      samplePrompt: '"Manager: Whenever a new deal above $5,000 closes, generate the SLA, invoice, and notify Slack."',
      aiResponse: '"Workflow AI: Flow configured! Listening to CRM stage changes. Automatic invoice dispatch and team notification are now activated."',
      workflowAction: 'Trigger deployed to production event pipeline across 3 external APIs.'
    }
  ];

  const current = assistants.find(a => a.id === selectedId) || assistants[0];

  // Generate dynamic 3D audio waveform bars
  useEffect(() => {
    const barCount = 36;
    let t = 0;
    const interval = setInterval(() => {
      t += 0.15;
      if (isSpeaking) {
        const newBars = Array.from({ length: barCount }, (_, i) => {
          const wave1 = Math.sin(t * 2 + i * 0.3);
          const wave2 = Math.cos(t * 1.5 + i * 0.5);
          const height = Math.abs(wave1 * wave2) * 44 + 8;
          return Math.max(6, Math.min(60, height));
        });
        setBars(newBars);
      } else {
        setBars(Array.from({ length: barCount }, () => 4));
      }
    }, 60);

    return () => clearInterval(interval);
  }, [isSpeaking]);

  return (
    <div className="w-full relative">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-blue/30 text-brand-blue text-xs font-mono mb-4">
          <Volume2 className="w-3.5 h-3.5 text-brand-blue" />
          <span>INTELLIGENT CONVERSATIONAL INTERFACES</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
          AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-sky-300 to-brand-blueDeep">ASSISTANTS</span> FOR EVERY TOUCHPOINT
        </h2>
        <p className="mt-4 text-slate-300 text-sm md:text-base leading-relaxed">
          From human-grade voice calling agents to multi-channel chat copilots, our AI assistants speak your business vocabulary and execute workflows in real-time.
        </p>
      </div>

      {/* Assistant Category Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 max-w-4xl mx-auto">
        {assistants.map((ast) => {
          const Icon = ast.icon;
          const isSelected = ast.id === selectedId;

          return (
            <button
              key={ast.id}
              onClick={() => setSelectedId(ast.id)}
              className={`px-4 py-2.5 rounded-xl border text-xs md:text-sm font-semibold flex items-center gap-2 transition-all duration-300 ${
                isSelected
                  ? 'bg-brand-blue/20 border-brand-blue text-brand-blue shadow-glow-blue scale-105'
                  : 'glass-panel border-slate-800 text-slate-400 hover:text-white hover:border-brand-blue/40'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{ast.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main Holographic Interactive Showcase Card */}
      <div className="glass-panel-glow p-6 md:p-10 rounded-3xl border border-brand-blue/30 max-w-5xl mx-auto relative overflow-hidden">
        {/* Subtle Cyber Grid Background */}
        <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 3D Audio Spectrum & Waveform Visualizer */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 rounded-2xl glass-panel border border-brand-blue/20 bg-brand-dark/80">
            {/* Header Telemetry */}
            <div className="w-full flex items-center justify-between text-xs font-mono text-slate-400 pb-4 border-b border-slate-800 mb-6">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isSpeaking ? 'bg-brand-blue animate-ping' : 'bg-slate-600'}`} />
                <span className="text-white font-semibold">{current.name.toUpperCase()}</span>
              </div>
              <button
                onClick={() => setIsSpeaking(!isSpeaking)}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] flex items-center gap-1.5 transition-colors"
              >
                {isSpeaking ? <Mic className="w-3 h-3 text-brand-blue" /> : <MicOff className="w-3 h-3 text-rose-400" />}
                <span>{isSpeaking ? 'MUTE AUDIO' : 'UNMUTE AUDIO'}</span>
              </button>
            </div>

            {/* 3D Audio Waveform Bars */}
            <div className="h-28 flex items-center justify-center gap-1.5 w-full my-4 px-2">
              {bars.map((h, i) => (
                <div
                  key={i}
                  style={{
                    height: `${h}px`,
                    transition: 'height 0.06s ease-out',
                  }}
                  className={`w-1.5 rounded-full ${
                    isSpeaking 
                      ? 'bg-gradient-to-t from-brand-blueDeep via-brand-blue to-white shadow-glow-blue-sm' 
                      : 'bg-slate-800'
                  }`}
                />
              ))}
            </div>

            {/* Frequency Telemetry Badges */}
            <div className="w-full grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-800 text-[11px] font-mono text-center">
              <div className="glass-panel p-2 rounded">
                <div className="text-slate-500 text-[9px]">SAMPLE RATE</div>
                <div className="text-brand-blue font-bold">48.0 kHz</div>
              </div>
              <div className="glass-panel p-2 rounded">
                <div className="text-slate-500 text-[9px]">NEURAL LATENCY</div>
                <div className="text-brand-blue font-bold">220 ms</div>
              </div>
              <div className="glass-panel p-2 rounded">
                <div className="text-slate-500 text-[9px]">INTONATION</div>
                <div className="text-emerald-400 font-bold">NATURAL</div>
              </div>
            </div>
          </div>

          {/* Right: Simulated Real-Time Conversation Log */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-brand-blue/15 text-brand-blue border border-brand-blue/30 font-semibold">
                {current.category}
              </span>
            </div>

            <p className="text-xs text-slate-400 italic">
              {current.voiceDesc}
            </p>

            {/* Dialogue Bubble 1: Inbound Message */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
              <span className="font-mono text-[10px] text-slate-500 block mb-1">INCOMING VOICE / QUERY</span>
              <p className="font-sans font-medium text-white">{current.samplePrompt}</p>
            </div>

            {/* Dialogue Bubble 2: AI Voice Response */}
            <div className="p-4 rounded-xl glass-panel-glow border border-brand-blue/40 text-xs text-slate-200">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[10px] text-brand-blue font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-brand-blue" />
                  {current.name} SYNTHESIS
                </span>
                <span className="text-[10px] font-mono text-emerald-400">STREAMING</span>
              </div>
              <p className="font-sans text-slate-100 leading-relaxed">{current.aiResponse}</p>
            </div>

            {/* Executed Action */}
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 flex items-start gap-2">
              <span className="font-bold text-emerald-400 shrink-0">ACTION TAKEN:</span>
              <span>{current.workflowAction}</span>
            </div>

            {/* WhatsApp Deployment Button */}
            <a
              href={`https://wa.me/923170062959?text=Hello%20Agentic%20Orbit,%20I%20want%20to%20test%20the%20${encodeURIComponent(current.name)}%20for%20my%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-brand-blue hover:text-white transition-colors pt-2"
            >
              <span>Test live {current.name} on WhatsApp (0317 0062959)</span>
              <span className="text-brand-blue">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
