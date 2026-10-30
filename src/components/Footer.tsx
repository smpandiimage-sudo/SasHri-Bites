import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, ArrowUp } from 'lucide-react';
import { OFFICIAL_PHONE, OFFICIAL_LOCATION, OFFICIAL_PINCODE, generateWhatsAppLink } from '../utils/enquiry';

interface FooterProps {
  onOpenSampleModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSampleModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#17221A] text-[#C2D1C5] border-t border-[#26372B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#2B3D30]">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/Polish_20261021_202930511_46c83b6b.jpg"
                alt="SasHri Bites Logo"
                className="h-11 w-11 object-cover rounded-full border border-[#FAF8F5]/20"
              />
              <span className="text-2xl font-bold text-white font-display tracking-tight block">
                SasHri <span className="text-[#E68A14]">Bites</span>
              </span>
            </div>
            <p className="text-xs text-[#9BB1A0] leading-relaxed max-w-sm">
              Premium FMCG healthy snacking brand rooted in Ramanathapuram, Tamil Nadu. Traditional Indian grains, roasted millets, spiced makhana, and clean vacuum crisps crafted without deep frying or artificial additives.
            </p>
            <div className="pt-2 text-xs space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C86D51] shrink-0" />
                <span>Ramanathapuram, Tamil Nadu - {OFFICIAL_PINCODE}, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#86AB83] shrink-0" />
                <a href={`tel:${OFFICIAL_PHONE.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {OFFICIAL_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <a
                  href={generateWhatsAppLink('Hello SasHri Bites Team')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +91 96776 32378
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#why-sashri" className="hover:text-white transition-colors">
                  Why SasHri Bites
                </a>
              </li>
              <li>
                <a href="#distributors" className="hover:text-white transition-colors">
                  Dealership & Wholesale
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Brand Origin
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Office
                </a>
              </li>
            </ul>
          </div>

          {/* Product Lines */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display">
              Snack Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Himalayan Pink Salt Makhana
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Coastal 5-Millet Roasted Crunch
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Vacuum-Crisped Tender Jackfruit
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Roasted Chana & Jaggery Clusters
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Tangy Masala Makhana
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Purple Yam & Tapioca Crisps
                </a>
              </li>
            </ul>
          </div>

          {/* B2B Partnerships & Fast Sample CTA */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display">
              Distributor Trade Hub
            </h4>
            <p className="text-xs text-[#9BB1A0] leading-relaxed">
              Seeking regional Super Stockists, district distributors, and modern trade supermarket partners across Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, and Northern metros.
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenSampleModal}
                className="w-full text-center px-4 py-2.5 text-xs font-bold text-white bg-[#2D5A27] hover:bg-[#3D7636] rounded-lg transition-colors shadow-xs"
              >
                Request Tasting Sample Kit
              </button>
            </div>
          </div>

        </div>

        {/* Nutritional & Formulation Integrity Disclaimer */}
        <div className="py-6 border-b border-[#25352A] text-[11px] text-[#7A9180] leading-relaxed">
          <p>
            <strong>Formulation & Packaging Notice:</strong> Nutritional specifications, weights, and ingredient ratios published on this site represent laboratory batch analysis for standard packaging runs. SasHri Bites does not make unverified medicinal claims; our products are formulated with authentic, wholesome grains, natural spices, and trans-fat-free roasting processes in accordance with Indian food safety standards.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A9180]">
          <div>
            &copy; {new Date().getFullYear()} SasHri Bites. All rights reserved. Ramanathapuram, Tamil Nadu, India.
          </div>

          <div className="flex items-center gap-4">
            <span>Customer Care: +91 96776 32378</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 bg-[#25352A] hover:bg-[#324538] text-white rounded-md transition-colors"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
