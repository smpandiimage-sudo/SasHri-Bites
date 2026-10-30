import React from 'react';
import { Flame, Leaf, HeartPulse, Sparkles, Award, ShieldCheck, SunMedium } from 'lucide-react';

export const WhySasHri: React.FC = () => {
  const pillars = [
    {
      title: '01. Continuous Dry-Roasting & Vacuum Tech',
      desc: 'Instead of deep immersion frying in high-heat commercial vats, we use hot-air fluidized bed roasters and low-temperature vacuum crispers. This seals in natural crunch with over 70% less oil retention.',
    },
    {
      title: '02. Native Indian Supergrains & Millets',
      desc: 'Formulated with climate-resilient regional millets like Foxtail (Thinai), Finger Millet (Ragi), and Pearl Millet (Kambu). Rich in plant protein, dietary fiber, and slow-digesting complex carbs.',
    },
    {
      title: '03. Zero Palm Oil & No Trans Fats',
      desc: 'Strictly zero hydrogenated vegetable fats and zero cheap palm oil blends. We use minimal cold-pressed rice bran and coconut oils solely for natural spice adherence.',
    },
    {
      title: '04. Nitrogen Barrier Freshness',
      desc: 'Every pouch is sealed with multi-layer barrier foil and nitrogen flushed, locking in natural aromas, crisp texture, and flavor integrity for 6 to 9 months without chemical preservatives.',
    },
    {
      title: '05. Authentic Pantry Spices & Jaggery',
      desc: 'Real Himalayan pink rock salt, Malabar black pepper, sun-dried amchur, curry leaves, and organic unrefined jaggery. Clean, honest ingredients you recognize in your own home kitchen.',
    },
    {
      title: '06. Proudly Crafted in Ramanathapuram',
      desc: 'Rooted in the coastal heritage of Tamil Nadu, our processing facility supports local agrarian producers, ensuring transparent, traceable batches and ethical FMCG standards.',
    },
  ];

  return (
    <section id="why-sashri" className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2D5A27] block mb-2">
            Quality & Nutritional Foundation
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#19231D] font-display tracking-tight leading-snug">
            Why families, working professionals, and retail partners choose SasHri Bites.
          </h2>
          <p className="text-sm sm:text-base text-[#56685D] mt-3 leading-relaxed">
            Snacking in India should not require choosing between addictive taste and long-term health. We engineer traditional grains and wholesome pulses with modern food processing standards.
          </p>
        </div>

        {/* 6-Pillar Editorial Grid (No cards within cards; clean whitespace & hairline borders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl border border-[#E5DEC8] shadow-xs flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-[#19231D] font-display mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#54665B] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Direct comparison table: Conventional Snacking vs. SasHri Bites */}
        <div className="mt-14 bg-white rounded-xl border border-[#E5DEC8] overflow-hidden">
          <div className="p-5 sm:p-6 bg-[#F5EFE6] border-b border-[#E8E0D0]">
            <h3 className="text-lg font-bold text-[#19231D] font-display">
              The SasHri Bites Difference at a Glance
            </h3>
            <p className="text-xs text-[#5C6E63] mt-1">
              Honest contrast between mass commercial snacks and our mindful roasting methods.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#E8E2D8] text-[11px] font-bold text-[#56685D] uppercase tracking-wider bg-[#FAF8F5]">
                  <th className="py-3.5 px-4 sm:px-6">Attribute</th>
                  <th className="py-3.5 px-4 sm:px-6 text-[#7E4535]">Conventional Mass Snacks</th>
                  <th className="py-3.5 px-4 sm:px-6 text-[#1E3F20] bg-[#E9F2E7]/40">SasHri Bites Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFE8DC] text-[#34453A]">
                <tr>
                  <td className="py-3 px-4 sm:px-6 font-semibold">Cooking Method</td>
                  <td className="py-3 px-4 sm:px-6 text-[#6B5A55]">High-heat deep frying in recirculated oil</td>
                  <td className="py-3 px-4 sm:px-6 font-medium text-[#1E3F20] bg-[#E9F2E7]/40">Hot-air roasting & low-temp vacuum crisping</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 sm:px-6 font-semibold">Oil Used</td>
                  <td className="py-3 px-4 sm:px-6 text-[#6B5A55]">Hydrogenated palm olein & vegetable fat</td>
                  <td className="py-3 px-4 sm:px-6 font-medium text-[#1E3F20] bg-[#E9F2E7]/40">Cold-pressed rice bran / coconut mist (minimal)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 sm:px-6 font-semibold">Base Ingredients</td>
                  <td className="py-3 px-4 sm:px-6 text-[#6B5A55]">Refined wheat flour (Maida), potato starches</td>
                  <td className="py-3 px-4 sm:px-6 font-medium text-[#1E3F20] bg-[#E9F2E7]/40">Popped lotus seeds, Foxtail & Ragi millets, raw jackfruit</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 sm:px-6 font-semibold">Flavorings & Preservatives</td>
                  <td className="py-3 px-4 sm:px-6 text-[#6B5A55]">Synthetic MSG, artificial colors, TBHQ chemical stabilizers</td>
                  <td className="py-3 px-4 sm:px-6 font-medium text-[#1E3F20] bg-[#E9F2E7]/40">Himalayan rock salt, black pepper, jaggery, nitrogen flush</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 sm:px-6 font-semibold">Trans Fat Content</td>
                  <td className="py-3 px-4 sm:px-6 text-[#6B5A55]">Often contains trace trans fats from oxidized oil</td>
                  <td className="py-3 px-4 sm:px-6 font-medium text-[#1E3F20] bg-[#E9F2E7]/40">Strictly 0.0g Trans Fat (Lab Verified)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
