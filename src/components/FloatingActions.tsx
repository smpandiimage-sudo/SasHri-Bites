import React, { useState } from 'react';
import { Phone, MessageCircle, ArrowUpRight, X } from 'lucide-react';
import { OFFICIAL_PHONE, generateWhatsAppLink } from '../utils/enquiry';

interface FloatingActionsProps {
  onOpenSampleModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenSampleModal }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <>
      {/* Desktop Floating WhatsApp Button (bottom right) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2">
        {showTooltip && (
          <div className="relative bg-white text-[#19231D] text-xs py-2 px-3 rounded-lg shadow-lg border border-[#E5DEC8] max-w-xs animate-fadeIn flex items-center gap-2.5">
            <img
              src="/assets/aistudio/Polish_20261021_202930511_46c83b6b.jpg"
              alt="SasHri Bites Logo"
              className="w-8 h-8 rounded-full object-cover shrink-0 border border-[#E68A14]/30"
            />
            <div>
              <span className="font-bold text-[#1E3F20] font-display block">Chat with SasHri Bites</span>
              <span className="text-[11px] text-[#5E6D63]">Questions, orders & samples</span>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-700 p-0.5 ml-1"
              aria-label="Dismiss chat tip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <a
          href={generateWhatsAppLink('Hello SasHri Bites! I would like to enquire about your healthy snack products.')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with SasHri Bites at +91 96776 32378"
          className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 group"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="pr-1 whitespace-nowrap">WhatsApp Us</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar (Strictly < 15% of mobile viewport, height is ~54px) */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FAF8F5]/98 backdrop-blur-md border-t border-[#E2D9C8] px-3 py-2 shadow-2xl flex items-center justify-between gap-2">
        
        {/* Direct Call Button */}
        <a
          href={`tel:${OFFICIAL_PHONE.replace(/\s+/g, '')}`}
          aria-label="Call SasHri Bites"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-white text-[#1E3F20] border border-[#CBD8C9] rounded-lg text-xs font-bold"
        >
          <Phone className="w-3.5 h-3.5 text-[#2D5A27]" />
          <span>Call Us</span>
        </a>

        {/* Direct WhatsApp Button */}
        <a
          href={generateWhatsAppLink('Hello SasHri Bites! I want to enquire about healthy snacks and dealership.')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp SasHri Bites"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#25D366] text-white rounded-lg text-xs font-bold shadow-xs"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white" />
          <span>WhatsApp</span>
        </a>

        {/* Distributor Sample Action */}
        <button
          onClick={onOpenSampleModal}
          className="flex-1 flex items-center justify-center gap-1 py-2.5 px-2 bg-[#1E3F20] text-white rounded-lg text-xs font-bold shadow-xs"
        >
          <span>Sample Box</span>
        </button>

      </div>
    </>
  );
};
