import React from 'react';
import { BRAND } from '../data/content';
import { WhatsAppIcon } from './WhatsAppIcon';

export const WhatsAppFloating: React.FC = () => {
  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 right-6 z-40 flex items-center group select-none">
      {/* Tooltip / Label */}
      <div className="hidden sm:flex items-center mr-3 px-3 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-xs font-mono text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-whatsapp-glow pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-2" />
        <span>Talk on WhatsApp ({BRAND.phoneFormatted})</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={BRAND.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Contact 0317 0062959"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_4px_25px_rgba(37,211,102,0.55)] hover:scale-110 active:scale-95 transition-all duration-300 relative"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500" />
        </span>
        <WhatsAppIcon className="w-7 h-7 fill-white" />
      </a>
    </aside>
  );
};

