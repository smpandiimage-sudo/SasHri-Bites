import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_LOCATION } from '../utils/enquiry';

interface HeroProps {
  onExploreProducts: () => void;
  onOpenDistributor: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onOpenDistributor }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5] to-[#F5EFE6]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Brand Logo & Origin Tag */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2D9C8] rounded-full shadow-2xs">
                <img
                  src="/assets/aistudio/Polish_20261021_202930511_46c83b6b.jpg"
                  alt="SasHri Bites Mascot Logo"
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-xs font-bold text-[#1E3F20] font-display tracking-wide">
                  SasHri Bites
                </span>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#485E4E] inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C86D51] shrink-0" />
                <span>Ramanathapuram, Tamil Nadu</span>
              </span>
            </div>

            {/* Display Headline with balanced wrapping */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#19231D] font-display tracking-tight leading-[1.12] mb-6 [text-wrap:balance]">
              Wholesome snacking, rooted in Indian tradition & mindful taste.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#4F6055] leading-relaxed mb-8 max-w-2xl">
              SasHri Bites crafts honest, slow-roasted millets, mineral-seasoned makhana, and vacuum-crisped native produce. No deep frying, zero trans fats, and zero compromise on authentic Indian teatime crunch.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                onClick={onExploreProducts}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#1E3F20] hover:bg-[#2D5A27] rounded-lg shadow-sm transition-all duration-200"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenDistributor}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#1E3F20] bg-[#FAF8F5] hover:bg-[#F0EAE1] border border-[#C9D6C7] rounded-lg transition-all duration-200"
              >
                <span>Distributor & Wholesale Enquiries</span>
              </button>
            </div>

            {/* Trust Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 pt-6 border-t border-[#E8E2D8] w-full text-xs text-[#39493F]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D5A27] shrink-0" />
                <span className="font-medium">100% Roasted / Non-Fried</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D5A27] shrink-0" />
                <span className="font-medium">Zero Palm Oil & Trans Fat</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D5A27] shrink-0" />
                <span className="font-medium">Pan-India Freight Logistics</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E6DEC8] bg-[#F5EFE6]">
              <img
                src="/src/assets/images/hero_sashri_bites_spread_1793366383501.jpg"
                alt="SasHri Bites healthy Indian snack assortment featuring roasted makhana, millets, and vacuum crisps"
                className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover object-center transform transition-transform duration-700 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
                loading="eager"
              />

              {/* Discreet caption overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 text-white">
                <p className="text-xs uppercase tracking-wider font-semibold text-[#E5D7A9]">
                  SasHri Bites Artisanal Pantry
                </p>
                <p className="text-sm font-medium mt-0.5 text-white/95">
                  Small-batch roasted fox nuts, ancient 5-millets & crisp vacuum chips
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
