import React, { useState } from 'react';
import { 
  Phone, 
  Globe, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  Orbit,
  Building,
  Mail
} from 'lucide-react';
import { BRAND } from '../data/content';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { TiltCard3D } from '../components/3d/TiltCard3D';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'AI Platform & Agents',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-brand-dark pt-28 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-blue/30 text-brand-blue text-xs font-mono">
            <Orbit className="w-3.5 h-3.5 text-brand-blue" />
            <span>DIRECT ENTERPRISE ENGAGEMENT</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight">
            CONNECT WITH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-sky-300 to-brand-blueDeep">
              AGENTIC ORBIT
            </span>
          </h1>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Ready to integrate autonomous AI agents and enterprise automation into your business operations? 
            Reach out through our direct channels or submit an operational inquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct WhatsApp & Reference Info (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary WhatsApp Card */}
            <TiltCard3D maxTilt={6}>
              <div className="glass-panel-glow p-8 rounded-3xl border border-emerald-500/30 space-y-5 relative overflow-hidden">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center">
                    <WhatsAppIcon className="w-6 h-6 fill-brand-whatsapp" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">
                      FASTEST RESPONSE CHANNEL
                    </span>
                    <h3 className="text-xl font-display font-bold text-white">
                      Official WhatsApp
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Chat directly with our solutions architecture team on WhatsApp for live demonstrations, pricing plans, and immediate technical answers.
                </p>

                <div className="p-4 rounded-xl bg-brand-dark/80 border border-emerald-500/30 font-mono text-center">
                  <span className="text-xs text-slate-400 block mb-1">DIRECT CONTACT NUMBER</span>
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {BRAND.phoneFormatted}
                  </span>
                </div>

                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs md:text-sm flex items-center justify-center gap-2 shadow-whatsapp-glow transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp ({BRAND.phoneFormatted})</span>
                </a>
              </div>
            </TiltCard3D>

            {/* Reference Verification Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
              <h4 className="text-xs font-mono text-brand-blue uppercase tracking-wider font-bold">
                PLATFORM VERIFICATION
              </h4>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Reference Website:</span>
                  <a href={BRAND.referenceUrl} target="_blank" rel="noopener noreferrer" className="text-slate-200 underline hover:text-brand-blue">
                    {BRAND.referenceSite}
                  </a>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Response SLA:</span>
                  <span className="text-emerald-400 font-mono font-bold">&lt; 15 Minutes</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-400">Coverage:</span>
                  <span className="text-white">Global Business Operations</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form (Col 6-12) */}
          <div className="lg:col-span-7">
            <div className="glass-panel-glow p-8 md:p-10 rounded-3xl border border-brand-blue/30 relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Message Successfully Received
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you, <strong className="text-brand-blue">{formData.name}</strong>. Our enterprise team will review your business specifications and reply immediately.
                  </p>
                  <div className="pt-4 flex justify-center">
                    <a
                      href={BRAND.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs flex items-center gap-2 shadow-whatsapp-glow transition-all"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-white" />
                      <span>Continue on WhatsApp ({BRAND.phoneFormatted})</span>
                    </a>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    Submit Operational Brief
                  </h3>
                  <p className="text-xs text-slate-400 mb-6">
                    Fill out the parameters below and our architecture team will structure a deployment plan.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Elena Rostova"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-brand-dark/90 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-brand-blue transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="elena@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-brand-dark/90 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-brand-blue transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+92 317 0000000"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-brand-dark/90 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-brand-blue transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1">
                          Solution Area
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-brand-dark/90 border border-slate-700 text-white text-xs focus:outline-none focus:border-brand-blue transition-colors"
                        >
                          <option value="AI Platform & Agents">AI Platform & Autonomous Agents</option>
                          <option value="Enterprise CRM Suite">Enterprise CRM Suite</option>
                          <option value="Smart Workflow Automation">Smart Workflow Automation</option>
                          <option value="Predictive Business Analytics">Predictive Business Analytics</option>
                          <option value="Conversational Voice AI">Conversational Voice AI</option>
                          <option value="Custom AI Development">Custom AI Development</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Operational Requirements &amp; Goals *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Detail the manual tasks, integration needs, or transaction scale you wish to automate..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-brand-dark/90 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-brand-blue transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-blueDeep to-brand-blue hover:from-brand-blue hover:to-sky-400 text-white hover:text-black font-semibold text-xs md:text-sm flex items-center justify-center gap-2 transition-all shadow-glow-blue disabled:opacity-50"
                      >
                        <Send className="w-4 h-4" />
                        <span>{loading ? 'Transmitting Data...' : 'Send Message'}</span>
                      </button>

                      <a
                        href={BRAND.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs md:text-sm flex items-center justify-center gap-2 shadow-whatsapp-glow transition-all"
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-white" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </form>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

