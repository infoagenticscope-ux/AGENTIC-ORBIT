import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Globe, Shield, ArrowUpRight, Building2, CreditCard, Cpu } from 'lucide-react';
import { BRAND } from '../data/content';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FooterProps {
  onOpenContact: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="relative bg-brand-darker border-t border-brand-blue/20 pt-16 pb-12 overflow-hidden text-slate-300">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 tech-grid-blue opacity-25 pointer-events-none" />

      {/* Subtle Blue Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Column (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-full border-2 border-brand-blue/50 shadow-glow-blue-sm bg-brand-dark overflow-hidden flex items-center justify-center flex-shrink-0">
                <img
                  src={BRAND.logoUrl}
                  alt="AGENTIC ORBIT Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-2xl tracking-tight text-white group-hover:text-brand-blue transition-colors">
                  AGENTIC <span className="text-brand-blue">ORBIT</span>
                </span>
                <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                  DIGIFORMATION LTD (UK)
                </span>
              </div>
            </Link>

            <p className="text-brand-blue font-mono text-xs tracking-wider uppercase font-semibold">
              AI-POWERED BUSINESS OPERATING SYSTEM &amp; FORMATION HUB
            </p>

            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              Official UK LTD &amp; US LLC incorporation, international corporate banking, verified Stripe setup, and DIGI BIZ OS. Operated by Digiformation Ltd (Companies House 16994903).
            </p>

            {/* Direct WhatsApp Callout */}
            <div className="pt-2">
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-semibold transition-all shadow-whatsapp-glow group"
              >
                <WhatsAppIcon className="w-4 h-4 fill-brand-whatsapp group-hover:scale-110 transition-transform" />
                <span>Direct WhatsApp: </span>
                <span className="text-white font-bold">{BRAND.phoneFormatted}</span>
              </a>
            </div>
          </div>

          {/* Corporate Formation Links (Col 6-7) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-brand-blue font-bold">
              FORMATION &amp; BANKING
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/uk-services" className="text-slate-300 hover:text-brand-blue transition-colors">
                  UK LTD Formation
                </Link>
              </li>
              <li>
                <Link to="/usa-services" className="text-slate-300 hover:text-brand-blue transition-colors">
                  USA LLC Formation
                </Link>
              </li>
              <li>
                <Link to="/banking-solutions" className="text-slate-300 hover:text-brand-blue transition-colors">
                  Banking &amp; Stripe
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-slate-300 hover:text-brand-blue transition-colors">
                  Formation Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* AI OS & Software Links (Col 8-9) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-brand-blue font-bold">
              AI OS &amp; PLATFORM
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/digibiz-os" className="text-emerald-400 hover:text-white transition-colors">
                  DIGI BIZ OS (PKR 14.9k)
                </Link>
              </li>
              <li>
                <Link to="/ai-platform" className="hover:text-brand-blue transition-colors">
                  AI Agents &amp; Platform
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-brand-blue transition-colors">
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connectivity & Reference (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-brand-blue font-bold">
              CONNECT &amp; VERIFY
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-brand-blue" />
                <span className="font-mono">{BRAND.phoneFormatted}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Globe className="w-3.5 h-3.5 text-brand-blue" />
                <a 
                  href={BRAND.referenceUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-brand-blue underline transition-colors"
                >
                  {BRAND.referenceSite}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Companies House: 16994903</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenContact('Footer Briefing Request')}
                className="w-full py-2 px-3 rounded-lg bg-brand-surface hover:bg-brand-card border border-brand-blue/30 text-white hover:text-brand-blue text-xs font-medium flex items-center justify-center gap-1.5 transition-all shadow-glow-blue-sm"
              >
                <span>Request Formation Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-brand-blue" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 space-y-4 md:space-y-0">
          <div>
            {BRAND.copyright} · Official Reference: <a href={BRAND.referenceUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 underline">{BRAND.referenceSite}</a>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="hover:text-brand-blue transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-brand-blue transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-[11px] font-mono text-slate-500">
              [Official Digiformation Ltd Clone]
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

