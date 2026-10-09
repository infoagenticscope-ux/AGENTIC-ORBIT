import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  TrendingUp, 
  Megaphone, 
  Headphones, 
  Users, 
  Cpu, 
  BarChart3, 
  Zap, 
  Activity, 
  CheckCircle2, 
  ArrowRight,
  Shield,
  Layers
} from 'lucide-react';

interface AgentNode {
  id: string;
  name: string;
  role: string;
  icon: any;
  color: string;
  angle: number; // in radians
  distance: number; // radius from center
  description: string;
  metrics: { label: string; value: string }[];
  capabilities: string[];
}

export const Agent3DNetwork: React.FC = () => {
  const [selectedAgentId, setSelectedAgentId] = useState<string>('sales');
  const [hoveredAgentId, setHoveredAgentId] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const agents: AgentNode[] = [
    {
      id: 'sales',
      name: 'Sales Agent',
      role: 'Autonomous Lead Qualifier & Deal Closer',
      icon: TrendingUp,
      color: '#00F0FF',
      angle: 0,
      distance: 210,
      description: 'Engages inbound leads in real-time, qualifies B2B prospects against ideal customer profiles, schedules demos, and negotiates pricing based on configured business rules.',
      metrics: [
        { label: 'Lead Response Time', value: '< 2.4 sec' },
        { label: 'Conversion Lift', value: '+34%' },
        { label: 'Pipeline Velocity', value: '2.8x' }
      ],
      capabilities: [
        'Multi-channel outreach (WhatsApp, Email, Web Chat)',
        'Objection handling & pricing matrix calculations',
        'Direct calendar booking & CRM sync',
        'Intent scoring & automatic deal escalation'
      ]
    },
    {
      id: 'marketing',
      name: 'Marketing Agent',
      role: 'Campaign Strategist & Content Engine',
      icon: Megaphone,
      color: '#38BDF8',
      angle: (Math.PI * 2) * (1 / 7),
      distance: 210,
      description: 'Conducts continuous audience analysis, synthesizes hyper-targeted marketing copies, schedules omni-channel campaigns, and auto-optimizes ad spend based on real-time conversions.',
      metrics: [
        { label: 'Campaign ROAS', value: '4.2x' },
        { label: 'Content Throughput', value: '50+ assets/wk' },
        { label: 'A/B Test Turnaround', value: 'Real-time' }
      ],
      capabilities: [
        'Autonomous copywriting & visual brief generation',
        'Cross-channel post scheduling & social listening',
        'Budget reallocation to highest-converting segments',
        'SEO keyword & competitor ranking surveillance'
      ]
    },
    {
      id: 'support',
      name: 'Customer Support Agent',
      role: '24/7 Intelligent Ticket Resolver',
      icon: Headphones,
      color: '#00D2FF',
      angle: (Math.PI * 2) * (2 / 7),
      distance: 210,
      description: 'Resolves complex customer inquiries across WhatsApp, chat, and email with contextual business memory, zero wait time, and intelligent human escalation.',
      metrics: [
        { label: 'First Contact Resolution', value: '88.5%' },
        { label: 'Customer Satisfaction', value: '4.9 / 5.0' },
        { label: 'Average Handle Time', value: '18 sec' }
      ],
      capabilities: [
        'Natural multi-lingual voice & chat resolution',
        'Live order status lookup & database verification',
        'Automated refund & tier-1 issue fulfillment',
        'Instant sentiment analysis & priority routing'
      ]
    },
    {
      id: 'crm',
      name: 'CRM Agent',
      role: 'Customer Data Synchronizer & Churn Predictor',
      icon: Users,
      color: '#0284C7',
      angle: (Math.PI * 2) * (3 / 7),
      distance: 210,
      description: 'Maintains hygiene across your entire customer lifecycle, detects retention risks weeks before churn happens, and automatically triggers proactive re-engagement journeys.',
      metrics: [
        { label: 'Data Accuracy', value: '99.9%' },
        { label: 'Churn Prevention', value: '42%' },
        { label: 'Enrichment Rate', value: 'Instant' }
      ],
      capabilities: [
        'Automated activity logging across calls & messages',
        'Behavioral intent & lifetime value scoring',
        'Auto-healing duplicate & outdated contact records',
        'Proactive renewal & loyalty trigger dispatch'
      ]
    },
    {
      id: 'operations',
      name: 'Operations Agent',
      role: 'Resource Dispatcher & Process Governor',
      icon: Cpu,
      color: '#00F0FF',
      angle: (Math.PI * 2) * (4 / 7),
      distance: 210,
      description: 'Supervises internal logistics, inventory levels, supplier SLAs, and staff task assignments, dynamically rerouting bottlenecks before they disrupt customer delivery.',
      metrics: [
        { label: 'SLA Adherence', value: '99.8%' },
        { label: 'Admin Hours Saved', value: '120h / mo' },
        { label: 'Error Reduction', value: '94%' }
      ],
      capabilities: [
        'Automated vendor order generation & tracking',
        'Real-time inventory threshold surveillance',
        'Dynamic team task allocation & escalation',
        'Compliance checks against standard operating policies'
      ]
    },
    {
      id: 'analytics',
      name: 'Analytics Agent',
      role: 'Predictive Intelligence & Executive Synthesis',
      icon: BarChart3,
      color: '#38BDF8',
      angle: (Math.PI * 2) * (5 / 7),
      distance: 210,
      description: 'Translates high-volume operational telemetry into executive revenue forecasts, anomalies, unit economic breakdowns, and actionable strategic directives.',
      metrics: [
        { label: 'Forecast Accuracy', value: '96.2%' },
        { label: 'Report Generation', value: 'Instant' },
        { label: 'Anomaly Catch Rate', value: '99.4%' }
      ],
      capabilities: [
        'Automated executive briefings sent to WhatsApp/Slack',
        'Unit economics & CAC / LTV cohort decomposition',
        'Early margin compression warnings',
        'Natural-language data queries ("What drove sales on Tuesday?")'
      ]
    },
    {
      id: 'automation',
      name: 'Automation Agent',
      role: 'Cross-App API Trigger & Flow Conductor',
      icon: Zap,
      color: '#0066FF',
      angle: (Math.PI * 2) * (6 / 7),
      distance: 210,
      description: 'The master wiring engine connecting your ERP, banking, WhatsApp API, accounting, and third-party tools into self-orchestrating event-driven loops.',
      metrics: [
        { label: 'Event Latency', value: '< 45ms' },
        { label: 'Integration Count', value: '250+' },
        { label: 'Execution Reliability', value: '99.99%' }
      ],
      capabilities: [
        'Webhook listening & guaranteed message delivery',
        'Conditional logic branching & fallback routes',
        'Automated invoice generation & reconciliation',
        'Self-healing API retry protocols'
      ]
    }
  ];

  const selectedAgent = agents.find(a => a.id === selectedAgentId) || agents[0];

  // Interactive Canvas Background with Animated Energy Connections
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const render = () => {
      t += 0.02;
      const width = canvas.width = canvas.parentElement?.clientWidth || 700;
      const height = canvas.height = canvas.parentElement?.clientHeight || 600;
      const cx = width / 2;
      const cy = height / 2;

      ctx.clearRect(0, 0, width, height);

      // Draw concentric radar orbits
      [90, 160, 220, 280].forEach((r, idx) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = idx === 2 ? 'rgba(0, 240, 255, 0.15)' : 'rgba(0, 240, 255, 0.05)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Draw Connection lines and animated pulse packets to each agent
      agents.forEach((agent) => {
        // compute node position
        const radius = Math.min(width, height) * 0.38;
        const nx = cx + Math.cos(agent.angle + t * 0.05) * radius;
        const ny = cy + Math.sin(agent.angle + t * 0.05) * radius;

        const isCurrent = agent.id === selectedAgentId;
        const isHovered = agent.id === hoveredAgentId;

        // Line
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(nx, ny);
        ctx.strokeStyle = isCurrent || isHovered
          ? 'rgba(0, 240, 255, 0.7)' 
          : 'rgba(0, 240, 255, 0.18)';
        ctx.lineWidth = isCurrent || isHovered ? 2.5 : 1;
        ctx.stroke();

        // Traveling energy packet
        const packetProgress = (t * 0.8 + agent.angle) % 1;
        const px = cx + (nx - cx) * packetProgress;
        const py = cy + (ny - cy) * packetProgress;

        ctx.beginPath();
        ctx.arc(px, py, isCurrent ? 4 : 2.5, 0, Math.PI * 2);
        ctx.fillStyle = isCurrent ? '#00F0FF' : '#38BDF8';
        ctx.shadowColor = '#00F0FF';
        ctx.shadowBlur = isCurrent ? 12 : 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw Central Core Node Glow
      const corePulse = Math.sin(t * 2) * 4;
      const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 55 + corePulse);
      grad.addColorStop(0, 'rgba(0, 240, 255, 0.9)');
      grad.addColorStop(0.4, 'rgba(0, 102, 255, 0.4)');
      grad.addColorStop(1, 'rgba(3, 7, 18, 0)');

      ctx.beginPath();
      ctx.arc(cx, cy, 55 + corePulse, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [selectedAgentId, hoveredAgentId]);

  return (
    <div className="w-full relative">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-brand-blue/30 text-brand-blue text-xs font-mono mb-4">
          <Activity className="w-3.5 h-3.5 animate-pulse text-brand-blue" />
          <span>AUTONOMOUS WORKFORCE ORCHESTRATION</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
          AI AGENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-sky-300 to-brand-blueDeep">ECOSYSTEM</span>
        </h2>
        <p className="mt-4 text-slate-300 text-sm md:text-base leading-relaxed">
          Seven specialized AI agents interconnected around the <strong className="text-brand-blue">Agentic Orbit AI Core</strong>. 
          Each agent operates autonomously or collaboratively to execute mission-critical business functions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: 3D Network Visualization Canvas & Interactive Orbit Map */}
        <div className="lg:col-span-7 relative h-[480px] md:h-[580px] rounded-2xl glass-panel-glow border border-brand-blue/25 p-4 flex items-center justify-center overflow-hidden">
          <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none w-full h-full" />

          {/* Central AI Core Emblem */}
          <div className="relative z-10 flex flex-col items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-full glass-panel border-2 border-brand-blue shadow-glow-blue text-center p-2 transition-all duration-300 hover:scale-105">
            <Bot className="w-8 h-8 md:w-10 md:h-10 text-brand-blue animate-pulse-slow mb-1" />
            <span className="text-[11px] md:text-xs font-display font-bold text-white tracking-wider">AGENTIC ORBIT</span>
            <span className="text-[9px] font-mono text-brand-blue font-semibold">AI CORE</span>
          </div>

          {/* Connected Agent Node Buttons in Orbit */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {agents.map((agent, index) => {
              const Icon = agent.icon;
              const isSelected = agent.id === selectedAgentId;
              const isHovered = agent.id === hoveredAgentId;

              // Responsive positioning radius
              const radiusPercent = 38; // percentage from center
              const angleDeg = (index * (360 / agents.length)) - 90;
              const rad = (angleDeg * Math.PI) / 180;
              
              // CSS percentage coordinates
              const xPos = 50 + radiusPercent * Math.cos(rad);
              const yPos = 50 + radiusPercent * Math.sin(rad);

              return (
                <button
                  key={agent.id}
                  onClick={() => setSelectedAgentId(agent.id)}
                  onMouseEnter={() => setHoveredAgentId(agent.id)}
                  onMouseLeave={() => setHoveredAgentId(null)}
                  style={{
                    left: `${xPos}%`,
                    top: `${yPos}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  className={`pointer-events-auto absolute p-3 md:p-3.5 rounded-xl border transition-all duration-300 flex items-center gap-2 group ${
                    isSelected 
                      ? 'bg-brand-blue/20 border-brand-blue shadow-glow-blue scale-110 z-20' 
                      : isHovered
                      ? 'bg-brand-surface border-brand-blue/60 scale-105 z-10'
                      : 'bg-brand-dark/90 border-slate-700/60 hover:border-brand-blue/40'
                  }`}
                >
                  <Icon className={`w-4 h-4 md:w-5 md:h-5 ${isSelected ? 'text-brand-blue' : 'text-slate-300 group-hover:text-brand-blue'}`} />
                  <span className="text-xs font-display font-semibold text-white whitespace-nowrap hidden sm:inline-block">
                    {agent.name}
                  </span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-ping" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick HUD Tag */}
          <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
            <span className="text-[10px] font-mono text-slate-400 bg-brand-dark/80 px-2.5 py-1 rounded border border-brand-blue/20">
              CLICK ANY NODE TO INSPECT LIVE CAPABILITIES
            </span>
          </div>
        </div>

        {/* Right: Selected Agent Deep-Dive Control Card */}
        <div className="lg:col-span-5">
          <div className="glass-panel-glow p-6 md:p-8 rounded-2xl border border-brand-blue/30 relative">
            <div className="flex items-center justify-between pb-4 border-b border-brand-blue/20">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-brand-blue/15 border border-brand-blue/40 text-brand-blue">
                  {React.createElement(selectedAgent.icon, { className: 'w-6 h-6' })}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                    {selectedAgent.name}
                  </h3>
                  <p className="text-xs font-mono text-brand-blue">
                    {selectedAgent.role}
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ACTIVE
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed my-5">
              {selectedAgent.description}
            </p>

            {/* Performance Metrics */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {selectedAgent.metrics.map((m, idx) => (
                <div key={idx} className="glass-panel p-3 rounded-lg border border-slate-800 text-center">
                  <div className="text-base md:text-lg font-mono font-bold text-brand-blue">
                    {m.value}
                  </div>
                  <div className="text-[10px] text-slate-400 font-sans mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Core Capabilities Checklist */}
            <div className="space-y-2 mb-6">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-brand-blue" />
                <span>Autonomous Capabilities</span>
              </div>
              {selectedAgent.capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp Integration Action Button */}
            <a
              href={`https://wa.me/923170062959?text=Hello%20Agentic%20Orbit,%20I%20am%20interested%20in%20deploying%20the%20${encodeURIComponent(selectedAgent.name)}%20for%20my%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brand-blueDeep to-brand-blue hover:from-brand-blue hover:to-sky-400 text-white hover:text-black font-semibold text-xs md:text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-glow-blue"
            >
              <span>Deploy {selectedAgent.name} via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
