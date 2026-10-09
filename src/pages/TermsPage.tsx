import React from 'react';
import { FileText, CheckCircle2, AlertTriangle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND } from '../data/content';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark pt-28 pb-24 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back link */}
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono text-brand-blue hover:text-white mb-6">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="space-y-3 mb-10 pb-6 border-b border-slate-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-xs font-mono">
            <FileText className="w-3.5 h-3.5" />
            <span>COMMERCIAL OPERATING AGREEMENT</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            Effective Date: October 2026 · {BRAND.name} Business Operating System
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
          <section className="glass-panel p-6 rounded-2xl border border-slate-800">
            <h2 className="text-lg font-display font-bold text-white mb-3">
              1. Acceptance of Operating Terms
            </h2>
            <p>
              By accessing or deploying the <strong>{BRAND.name}</strong> platform ("Service"), you agree to be bound by these commercial terms. If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the organizational authority to bind that entity.
            </p>
          </section>

          <section className="glass-panel p-6 rounded-2xl border border-slate-800">
            <h2 className="text-lg font-display font-bold text-white mb-3">
              2. Autonomous Agent Deployment &amp; Human-in-the-Loop
            </h2>
            <p>
              {BRAND.name} provides autonomous AI agents and automated workflow conduits. Clients maintain the capability and right to configure human-in-the-loop review thresholds, escalation criteria, and spending caps. You acknowledge that AI agent actions executed within your defined policy limits are legally attributable to your business entity.
            </p>
          </section>

          <section className="glass-panel p-6 rounded-2xl border border-slate-800">
            <h2 className="text-lg font-display font-bold text-white mb-3">
              3. Platform Previews &amp; Demonstration Data
            </h2>
            <p>
              Any sample metric dashboards, deal pipelines, customer names, or revenue numbers displayed in promotional mockups are clearly designated as <strong>Platform Previews</strong> for architectural illustration and do not constitute representations of past client results.
            </p>
          </section>

          <section className="glass-panel p-6 rounded-2xl border border-slate-800">
            <h2 className="text-lg font-display font-bold text-white mb-3">
              4. Service Availability &amp; Support SLA
            </h2>
            <p>
              {BRAND.name} strives for 99.99% system availability. Our support desk operates with rapid WhatsApp and email escalation protocols. For inquiries regarding licensing agreements or support tiers, connect directly via WhatsApp at <strong className="text-emerald-400">{BRAND.phoneFormatted}</strong>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};

