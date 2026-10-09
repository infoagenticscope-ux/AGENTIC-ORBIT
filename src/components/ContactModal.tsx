import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Phone, Globe, Shield, Orbit } from 'lucide-react';
import { BRAND } from '../data/content';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'AI Platform & Agents',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'AI Platform & Agents',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl rounded-3xl glass-panel-glow border border-brand-blue/30 p-6 md:p-8 overflow-hidden shadow-[0_0_80px_rgba(0,240,255,0.2)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-slate-300" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white">
              Inquiry Dispatched Successfully
            </h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto">
              Thank you, <strong className="text-brand-blue">{formData.name}</strong>. Our enterprise team will review your business requirements and connect with you shortly.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-whatsapp-glow transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Instant Reply via WhatsApp ({BRAND.phoneFormatted})</span>
              </a>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/15 border border-brand-blue/40 flex items-center justify-center text-brand-blue">
                <Orbit className="w-5 h-5 animate-pulse-slow" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                  Connect with AGENTIC ORBIT
                </h3>
                <p className="text-xs text-brand-blue font-mono">
                  AI-POWERED BUSINESS OPERATING SYSTEM
                </p>
              </div>
            </div>

            {/* Quick Contact Ribbon */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5 p-3 rounded-xl bg-brand-surface/60 border border-slate-800 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-blue" />
                <span>WhatsApp: <strong className="text-white font-mono">{BRAND.phoneFormatted}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-brand-blue" />
                <span>Reference: <span className="text-slate-400">{BRAND.referenceSite}</span></span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alexander Vance"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-brand-dark/90 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-brand-blue transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-brand-dark/90 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-brand-blue transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Phone / WhatsApp *
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
                    Interest Area
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-brand-dark/90 border border-slate-700 text-white text-xs focus:outline-none focus:border-brand-blue transition-colors"
                  >
                    <option value="AI Platform & Agents">AI Platform & Autonomous Agents</option>
                    <option value="Smart Workflow Automation">Smart Workflow Automation</option>
                    <option value="Enterprise CRM Suite">Enterprise CRM Suite</option>
                    <option value="Conversational Voice AI">Conversational Voice AI</option>
                    <option value="Business Analytics">Business Analytics & Dashboards</option>
                    <option value="Custom AI Development">Custom AI Development</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  How can we help your business? *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your team size, workflow bottlenecks, or automation goals..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-brand-dark/90 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-brand-blue transition-colors resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-brand-blueDeep to-brand-blue hover:from-brand-blue hover:to-sky-400 text-white hover:text-black font-semibold text-xs md:text-sm flex items-center justify-center gap-2 transition-all shadow-glow-blue disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Transmitting Data...' : 'Send Message'}</span>
                </button>

                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs md:text-sm flex items-center justify-center gap-2 transition-all shadow-whatsapp-glow"
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
  );
};

