import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  CreditCard, 
  Building2, 
  Landmark, 
  Cpu, 
  Code
} from 'lucide-react';
import { DIGIFORMATION_PRICING, PricingItem } from '../data/pricingData';
import { BRAND } from '../data/content';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

interface PricingPageProps {
  onOpenContact: (service?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenContact }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Banking & Gateways',
    'UK LTD Formation',
    'USA LLC Formation',
    'DIGI BIZ OS',
    'Custom Tech & Web',
  ];

  const filteredPricing = DIGIFORMATION_PRICING.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 border-b border-brand-blue/20 overflow-hidden bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-xs font-mono text-brand-blue uppercase">
            <span>Transparent Corporate &amp; Tech Rates</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Fixed, Transparent Pricing. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-blueGlow to-white">
              Zero Hidden Surprises.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            All official pricing for UK LTD incorporation, US LLC filing, international banking setups (Stripe, PayPal, Wise, Tide, Mercury), and our flagship DIGI BIZ OS lifetime license.
          </p>

          {/* Category Filter Tabs */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-blue text-white shadow-glow-blue-sm scale-105'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPricing.map((item) => (
            <div
              key={item.id}
              className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative ${
                item.popular
                  ? 'bg-zinc-950 border-brand-blue shadow-glow-blue scale-[1.02]'
                  : 'bg-zinc-950/70 border-white/10 hover:border-brand-blue/40'
              }`}
            >
              {item.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-brand-blue text-white text-[10px] font-mono uppercase tracking-wider font-bold shadow-glow-blue-sm">
                  {item.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-zinc-500 uppercase">{item.category}</span>
                  <span className="text-emerald-400 flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{item.turnaround}</span>
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-white mb-2">{item.name}</h3>

                {/* Price Display */}
                <div className="flex items-baseline space-x-2 my-4">
                  <span className="font-display text-4xl font-extrabold text-white">
                    {item.price}
                  </span>
                  {item.originalPrice && (
                    <span className="text-sm font-mono text-zinc-500 line-through">
                      {item.originalPrice}
                    </span>
                  )}
                  <span className="text-xs font-mono text-zinc-400">/ {item.period}</span>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-2.5 mb-8">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">What is Included:</span>
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/5">
                <button
                  onClick={() => onOpenContact(`Booking: ${item.name} (${item.price})`)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold transition-all text-center ${
                    item.popular
                      ? 'bg-brand-blue hover:bg-brand-blueHover text-white shadow-glow-blue-sm'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  Book Service ({item.price})
                </button>

                <a
                  href={`${BRAND.whatsappUrl}&text=Hello%20Agentic%20Scope%2C%20I%20want%20to%20order%20${encodeURIComponent(item.name)}%20for%20${encodeURIComponent(item.price)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-1.5 text-xs text-zinc-400 hover:text-[#25D366] font-mono py-1 transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Order via WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance Guarantee Notice */}
      <section className="pb-16 max-w-4xl mx-auto px-4">
        <div className="p-6 rounded-2xl bg-black/80 border border-brand-blue/30 flex items-start space-x-4 text-xs text-zinc-300">
          <ShieldCheck className="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-semibold text-white">Official Transparent Pricing Guarantee</h4>
            <p className="text-zinc-400">
              No hidden surprise charges. All government Companies House or IRS processing fees, official physical addresses, and compliance reporting are declared upfront with itemized deliverables.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

