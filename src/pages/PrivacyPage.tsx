import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND } from '../data/content';

export const PrivacyPage: React.FC = () => {
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
            <Lock className="w-3.5 h-3.5" />
            <span>DATA GOVERNANCE PROTOCOL</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            Last Updated: October 2026 · Official Policy for {BRAND.name} ({BRAND.tagline})
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
          <section className="glass-panel p-6 rounded-2xl border border-slate-800">
            <h2 className="text-lg font-display font-bold text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-blue" />
              1. Zero-Leakage Data Privacy Architecture
            </h2>
            <p>
              At <strong>{BRAND.name}</strong>, we recognize that our enterprise clients process mission-critical customer records, financial transactions, and operational logs. Our platform is built on strict data isolation boundaries: tenant data is never commingled, never used to train public foundation models, and encrypted at rest with AES-256 and in transit via TLS 1.3.
            </p>
          </section>

          <section className="glass-panel p-6 rounded-2xl border border-slate-800">
            <h2 className="text-lg font-display font-bold text-white mb-3">
              2. Information We Ingest
            </h2>
            <p className="mb-3">
              We ingest only the operational data explicitly authorized by you when connecting enterprise channels:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-400">
              <li>Contact telemetry: WhatsApp metadata, phone numbers, customer names, and incoming query transcripts.</li>
              <li>Workflow signals: Webhook payloads, database transaction triggers, and API events.</li>
              <li>Authentication metadata: Secure tokens and role-based access keys stored in encrypted vaults.</li>
            </ul>
          </section>

          <section className="glass-panel p-6 rounded-2xl border border-slate-800">
            <h2 className="text-lg font-display font-bold text-white mb-3">
              3. Deterministic AI Model Isolation
            </h2>
            <p>
              Your business data belongs strictly to you. Any AI agents deployed through {BRAND.name} operate in private, sandboxed context windows. We enforce deterministic guardrails to prevent hallucinations, data leakage, or unauthorized third-party model retraining.
            </p>
          </section>

          <section className="glass-panel p-6 rounded-2xl border border-slate-800">
            <h2 className="text-lg font-display font-bold text-white mb-3">
              4. Contact &amp; Inquiries
            </h2>
            <p>
              For data compliance inquiries, GDPR rights requests, or security architecture reviews, please contact our enterprise team directly on WhatsApp at <strong className="text-emerald-400">{BRAND.phoneFormatted}</strong> or via our reference website at <span className="text-brand-blue">{BRAND.referenceSite}</span>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};

