import React from 'react';
import { BRAND_STATS } from '../data/products';

export const TrustStats: React.FC = () => {
  return (
    <section className="border-y border-[#E8E2D8] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {BRAND_STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col border-l-2 border-[#D7E2D5] pl-4 sm:pl-5">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E3F20] font-display tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#19231D] mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-[#5E6D63] mt-0.5">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
