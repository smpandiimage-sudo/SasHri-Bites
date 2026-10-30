import React from 'react';
import { MapPin, Compass, Eye, HeartHandshake, ShieldCheck } from 'lucide-react';
import { OFFICIAL_LOCATION } from '../utils/enquiry';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[#F8F5EE]/50 border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2D5A27] block mb-2">
            The SasHri Bites Story
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#19231D] font-display tracking-tight leading-snug">
            Born in Ramanathapuram, crafted for conscious snackers across India.
          </h2>
          <p className="text-sm sm:text-base text-[#56685D] mt-3 leading-relaxed">
            SasHri Bites began with a simple question: Why must Indian teatime snacking be synonymous with deep-fried batter, refined palm oil, and synthetic spice powders?
          </p>
        </div>

        {/* Mascot & Brand Identity Spotlight */}
        <div className="mb-14 p-6 sm:p-8 bg-white rounded-2xl border border-[#E5DEC8] shadow-xs flex flex-col md:flex-row items-center gap-8">
          <div className="w-36 h-36 sm:w-44 sm:h-44 shrink-0 rounded-2xl overflow-hidden border-2 border-[#E68A14]/30 shadow-sm bg-[#FAF8F5] p-2 flex items-center justify-center">
            <img
              src="/assets/aistudio/Polish_20261021_202930511_46c83b6b.jpg"
              alt="SasHri Bites Brand Mascot Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#E68A14] font-display block mb-1">
              Brand Identity & Mascot Story
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#19231D] font-display mb-2">
              The Heart of SasHri Bites: Tradition Meets Joyful Nutrition
            </h3>
            <p className="text-xs sm:text-sm text-[#4D5E53] leading-relaxed mb-3">
              Our official mascot features two cheerful Indian siblings celebrating wholesome living. With traditional jasmine flowers and culinary whisk, the sister honors time-tested home recipes and authentic spices. Beside her, the brother with his school backpack and crunchy snack bite embodies energetic childhood growth, school lunchboxes, and mindful workplace snacking.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#1E3F20]">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E68A14]" />
                Traditional Culinary Heritage
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A27]" />
                Active Family Nutrition
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4A2810]" />
                Guilt-Free Teatime Crunches
              </span>
            </div>
          </div>
        </div>

        {/* Narrative 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#3B4C41] leading-relaxed">
            <p>
              Growing up in the historic, culturally rich soil of <strong>Ramanathapuram, Tamil Nadu</strong>, we were surrounded by time-tested agrarian traditions: farmers sun-drying native millets like Thinai and Kambu, roasting golden Bengal grams over wood-fired pans, and harvesting raw jackfruit from nearby groves.
            </p>
            <p>
              However, modern urban supermarket shelves became dominated by ultra-processed snacks loaded with cheap palm olein, refined flours, and synthetic preservatives. We founded <strong>SasHri Bites</strong> to bridge this gap: pairing traditional Indian harvest wisdom with contemporary hot-air roasting and low-temperature vacuum crisping technology.
            </p>
            <p>
              Today, from our Ramanathapuram headquarters, we manufacture snacks that families can place on the dining table with proud confidence—snacks that nourish active professionals at their desks, energize children after school, and delight guests with authentic Indian flavors.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 bg-white rounded-xl border border-[#E5DEC8] shadow-xs">
              <div className="flex items-center gap-2.5 mb-2">
                <Compass className="w-4 h-4 text-[#2D5A27]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#1E3F20] font-display">
                  Our Mission
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#54665B] leading-relaxed">
                To replace empty calorie, deep-fried snacks with delicious, 100% roasted and vacuum-crisped alternatives that celebrate indigenous Indian millets and natural pantry spices.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#E5DEC8] shadow-xs">
              <div className="flex items-center gap-2.5 mb-2">
                <Eye className="w-4 h-4 text-[#2D5A27]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#1E3F20] font-display">
                  Our Vision
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#54665B] leading-relaxed">
                To establish SasHri Bites as a benchmark Indian FMCG brand known for uncompromised ingredient honesty, accessible pricing, and enduring trade partnerships across India.
              </p>
            </div>

            <div className="p-6 bg-[#E9F2E7] rounded-xl border border-[#CDE0C8] shadow-xs">
              <div className="flex items-center gap-2.5 mb-2">
                <HeartHandshake className="w-4 h-4 text-[#1E3F20]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#1E3F20] font-display">
                  Commitment to Quality
                </h3>
              </div>
              <p className="text-xs text-[#35483B] leading-relaxed">
                Every batch is prepared with strict adherence to food safety norms, zero trans-fat formulations, nitrogen-sealed packaging, and ethical farmer procurement.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
