import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { OFFICIAL_PHONE, generateWhatsAppLink } from '../utils/enquiry';

interface HeaderProps {
  onOpenSampleModal: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSampleModal, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'Why SasHri', href: '#why-sashri' },
    { label: 'Distributor Partnership', href: '#distributors' },
    { label: 'Our Story', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D8]">
      {/* Top Bar Contract: Zone 1 (Brand with Official Logo) — Zone 2 (4-5 Nav Links) — Zone 3 (1 Primary Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Official Logo & Brand Wordmark in Fredoka / Baloo font */}
        <a 
          href="#" 
          className="flex items-center gap-3 whitespace-nowrap shrink-0 group hover:opacity-95 transition-opacity"
        >
          <img
            src="/assets/aistudio/Polish_20261021_202930511_46c83b6b.jpg"
            alt="SasHri Bites Official Brand Logo"
            className="h-11 w-11 sm:h-13 sm:w-13 object-cover object-center rounded-full border-2 border-[#E68A14]/30 shadow-xs group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1E3F20] font-display leading-none">
              SasHri <span className="text-[#E68A14]">Bites</span>
            </span>
            <span className="text-[10px] font-semibold text-[#66776C] tracking-wide mt-0.5">
              Wholesome Snacking
            </span>
          </div>
        </a>

        {/* Zone 2: Single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#46554B]">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`hover:text-[#1E3F20] transition-colors whitespace-nowrap shrink-0 relative py-1 ${
                activeSection === item.href.replace('#', '')
                  ? 'text-[#1E3F20] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#1E3F20]'
                  : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={generateWhatsAppLink('Hello SasHri Bites, I would like to enquire about your healthy snack products.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#1E3F20] bg-[#E9F2E7] hover:bg-[#D8E8D5] rounded-md transition-colors whitespace-nowrap shrink-0 border border-[#CDE0C8]"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#2D5A27]" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenSampleModal}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#1E3F20] hover:bg-[#2D5A27] rounded-md shadow-sm transition-colors whitespace-nowrap shrink-0"
          >
            <span>Request Sample Kit</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1E3F20] hover:bg-[#F2EDE4] rounded-md transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-[#E8E2D8] bg-[#FAF8F5] px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="px-3 py-2 text-base font-medium text-[#2C3B32] hover:bg-[#F2EDE4] rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-4 border-t border-[#E8E2D8] flex flex-col gap-2.5">
              <a
                href={`tel:${OFFICIAL_PHONE.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#1E3F20] bg-[#E9F2E7] rounded-md"
              >
                <Phone className="w-4 h-4 text-[#2D5A27]" />
                <span>Call {OFFICIAL_PHONE}</span>
              </a>

              <a
                href={generateWhatsAppLink('Hello SasHri Bites, I want to enquire about retail or distributor orders.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSampleModal();
                }}
                className="w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-[#1E3F20] hover:bg-[#2D5A27] rounded-md"
              >
                Request Distributor Sample Kit
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
