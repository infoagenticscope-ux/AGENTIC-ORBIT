import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sparkles, Phone } from 'lucide-react';
import { BRAND } from '../data/content';
import { WhatsAppIcon } from './WhatsAppIcon';

interface NavbarProps {
  onOpenContact: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'UK LTD', path: '/uk-services' },
    { name: 'USA LLC', path: '/usa-services' },
    { name: 'Banking & Stripe', path: '/banking-solutions' },
    { name: 'DIGI BIZ OS', path: '/digibiz-os', highlight: true },
    { name: 'AI Platform', path: '/ai-platform' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-blue/25 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.85)]'
            : 'bg-transparent py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with uploaded 3D Agentic Orbit emblem */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-brand-blue/60 shadow-glow-blue-sm group-hover:scale-105 transition-transform duration-300 bg-brand-dark flex-shrink-0">
                <img
                  src={BRAND.logoUrl}
                  alt="AGENTIC ORBIT Logo"
                  className="w-full h-full object-cover"
                />
                <span className="absolute inset-0 rounded-full border border-brand-blue/40 pointer-events-none" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-brand-blue transition-colors leading-tight">
                  AGENTIC <span className="text-brand-blue">ORBIT</span>
                </span>
                <span className="text-[9px] text-slate-400 font-mono tracking-widest uppercase">
                  DG FORMATION &amp; AI OS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-brand-blue bg-brand-blue/15 border border-brand-blue/30 font-semibold shadow-glow-blue-sm'
                        : link.highlight
                        ? 'text-emerald-400 hover:text-white bg-emerald-500/10 border border-emerald-500/20'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: WhatsApp CTA (0317 0062959) */}
            <div className="hidden sm:flex items-center space-x-2.5">
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-mono font-semibold flex items-center gap-1.5 transition-all shadow-whatsapp-glow group"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-brand-whatsapp fill-current group-hover:scale-110 transition-transform" />
                <span>WhatsApp:</span>
                <span className="text-white font-bold font-mono">
                  {BRAND.phoneFormatted}
                </span>
              </a>

              <button
                onClick={() => onOpenContact('Header Instant Inquire')}
                className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-brand-blueDeep to-brand-blue hover:from-brand-blue hover:to-sky-400 text-white hover:text-black font-semibold text-xs tracking-wide transition-all shadow-glow-blue flex items-center gap-1"
              >
                <span>Get Started</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 border border-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-brand-blue" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-brand-dark/98 backdrop-blur-xl border-b border-brand-blue/30 px-4 pt-3 pb-6 space-y-2 mt-2">
            <div className="grid grid-cols-2 gap-1.5">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-3 py-2 rounded-lg text-xs font-medium ${
                      isActive
                        ? 'text-brand-blue bg-brand-blue/20 border border-brand-blue/40 font-semibold'
                        : link.highlight
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile WhatsApp Action Button */}
            <div className="pt-3 border-t border-slate-800 space-y-2">
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-whatsapp-glow"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Talk on WhatsApp ({BRAND.phoneFormatted})</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact('Mobile Menu Inquire');
                }}
                className="w-full py-2.5 px-3 rounded-lg bg-gradient-to-r from-brand-blueDeep to-brand-blue text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-glow-blue"
              >
                <span>Request Formation / AI OS Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

