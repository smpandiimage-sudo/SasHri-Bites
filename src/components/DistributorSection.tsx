import React, { useState } from 'react';
import { DistributorApplication } from '../types';
import { DISTRIBUTOR_BENEFITS } from '../data/products';
import {
  validateDistributorForm,
  generateWhatsAppLink,
  createDistributorWhatsAppMessage,
  formatCurrencyINR,
  OFFICIAL_PHONE,
} from '../utils/enquiry';
import { CheckCircle2, Calculator, Send, MessageCircle, Building2, Store, Truck, Sparkles, Check } from 'lucide-react';

interface DistributorSectionProps {
  onOpenSampleModal: () => void;
}

export const DistributorSection: React.FC<DistributorSectionProps> = ({ onOpenSampleModal }) => {
  // Calculator state
  const [crateVolume, setCrateVolume] = useState<number>(1000);
  const [distributorTier, setDistributorTier] = useState<'retail' | 'district' | 'super'>('district');

  // Form state
  const [formData, setFormData] = useState<Partial<DistributorApplication>>({
    businessType: 'supermarket',
    monthlyTargetBudget: '₹50,000 - ₹1,50,000 (District Retailer)',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submittedApp, setSubmittedApp] = useState<Partial<DistributorApplication> | null>(null);

  // Margin calculation
  const averagePackMRP = 110;
  const marginPercentage = distributorTier === 'super' ? 32 : distributorTier === 'district' ? 26 : 22;
  const retailSalesValue = crateVolume * averagePackMRP;
  const distributorCost = retailSalesValue * (1 - marginPercentage / 100);
  const estimatedGrossProfit = retailSalesValue - distributorCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateDistributorForm(formData);
    if (!result.isValid) {
      setFormErrors(result.errors);
      return;
    }

    setSubmittedApp(formData);
    setIsSubmitted(true);
  };

  return (
    <section id="distributors" className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2D5A27] block mb-2">
            B2B Trade & Channel Partnerships
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#19231D] font-display tracking-tight leading-snug">
            Partner with SasHri Bites as a Retailer or Regional Distributor.
          </h2>
          <p className="text-sm sm:text-base text-[#56685D] mt-3 leading-relaxed">
            Healthy snacking is India’s fastest-growing FMCG category. Partner with SasHri Bites to stock high-velocity, clean-ingredient roasted snacks with attractive wholesale margins and reliable logistics from Ramanathapuram.
          </p>
        </div>

        {/* Top 2-Column: Packaging Mockup & Key Commercial Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-[#E0D7C3] shadow-md bg-white">
              <img
                src="/src/assets/images/distributor_packaging_mockup_1793366386475.jpg"
                alt="SasHri Bites modern retail display boxes and stand-up pouches on store shelves"
                className="w-full h-80 sm:h-96 object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="p-5 bg-white border-t border-[#E8E2D8]">
                <h4 className="text-sm font-bold text-[#19231D] font-display">
                  Premium Modern Trade Shelf Appeal
                </h4>
                <p className="text-xs text-[#5E6D63] mt-1 leading-relaxed">
                  Our clean matte kraft pouches and branded counter-top displays command premium eye-level attention in supermarkets, organic lifestyle stores, and gourmet chains.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold text-[#19231D] font-display mb-2">
              Commercial Advantages for Stockists
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {DISTRIBUTOR_BENEFITS.map((benefit, idx) => (
                <div key={idx} className="p-4 bg-white rounded-xl border border-[#E5DEC8] shadow-xs">
                  <h4 className="text-xs sm:text-sm font-bold text-[#1E3F20] font-display mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-[#55675C] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenSampleModal}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-[#1E3F20] bg-[#E9F2E7] hover:bg-[#D9E9D7] border border-[#CBD8C9] rounded-lg transition-colors"
              >
                Request Free B2B Tasting Samples for Your Store
              </button>
            </div>
          </div>

        </div>

        {/* Interactive Wholesale Margin Calculator */}
        <div className="mb-16 p-6 sm:p-8 bg-white rounded-2xl border border-[#E5DEC8] shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#EAE3D5]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#E9F2E7] rounded-lg text-[#1E3F20]">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#19231D] font-display">
                  Interactive Wholesale Margin & Profit Estimator
                </h3>
                <p className="text-xs text-[#5E6D63]">
                  Simulate your monthly revenue potential based on projected pack volume and channel tier.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
            
            {/* Calculator Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between text-xs font-semibold text-[#324338] mb-2">
                  <span>Estimated Monthly Volume:</span>
                  <span className="text-[#1E3F20] font-bold tabular-nums">{crateVolume.toLocaleString('en-IN')} units / month</span>
                </div>
                <input
                  type="range"
                  min="250"
                  max="10000"
                  step="250"
                  value={crateVolume}
                  onChange={(e) => setCrateVolume(Number(e.target.value))}
                  className="w-full accent-[#1E3F20] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#78887E] mt-1">
                  <span>250 packs (Starter Retailer)</span>
                  <span>2,500 packs</span>
                  <span>10,000+ packs (Super Stockist)</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-[#324338] block mb-2">
                  Select Your Channel Tier:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'retail', label: 'Retail Store', margin: '22%' },
                    { id: 'district', label: 'District Distr.', margin: '26%' },
                    { id: 'super', label: 'Super Stockist', margin: '32%' },
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setDistributorTier(tier.id as any)}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        distributorTier === tier.id
                          ? 'border-[#1E3F20] bg-[#E9F2E7] ring-1 ring-[#1E3F20]'
                          : 'border-[#DDD4C3] bg-[#FAF8F5] hover:bg-white'
                      }`}
                    >
                      <span className="text-xs font-bold text-[#19231D] block">{tier.label}</span>
                      <span className="text-xs font-extrabold text-[#2D5A27] mt-0.5 block">{tier.margin} Margin</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Calculated Output Strip */}
            <div className="lg:col-span-5 bg-[#FAF8F5] p-5 rounded-xl border border-[#E5DEC8] space-y-3.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#5E6D63]">Estimated Retail Sales (MRP):</span>
                <span className="font-bold text-[#19231D] tabular-nums">{formatCurrencyINR(retailSalesValue)}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#5E6D63]">Distributor Procurement Cost:</span>
                <span className="font-bold text-[#19231D] tabular-nums">{formatCurrencyINR(distributorCost)}</span>
              </div>
              <div className="pt-3 border-t border-[#E5DEC8] flex justify-between items-baseline">
                <span className="text-xs font-bold text-[#19231D]">Est. Gross Margin Profit:</span>
                <span className="text-xl font-extrabold text-[#1E3F20] font-display tabular-nums">
                  {formatCurrencyINR(estimatedGrossProfit)}
                </span>
              </div>
              <p className="text-[10px] text-[#7B8B80] leading-relaxed pt-1">
                *Estimates calculated using weighted average ₹110 MRP basket. Actual margins confirmed on formal invoice and territory agreements.
              </p>
            </div>

          </div>
        </div>

        {/* Distributor Application Form */}
        <div className="bg-white rounded-2xl border border-[#E5DEC8] p-6 sm:p-10 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D5A27] block mb-1">
              Apply for Territory Dealership
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#19231D] font-display">
              Distributor & Wholesale Partnership Form
            </h3>
            <p className="text-xs sm:text-sm text-[#5E6D63] mt-1">
              Share your business details below. Our team in Ramanathapuram will contact you within 24 business hours with margin slabs and catalog samples.
            </p>
          </div>

          {isSubmitted && submittedApp ? (
            <div className="p-6 bg-[#E9F2E7] border border-[#BED7BA] rounded-xl text-center space-y-4 animate-fadeIn">
              <div className="w-12 h-12 bg-[#2D5A27] text-white rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#19231D] font-display">
                  Application Received for {submittedApp.businessName}
                </h4>
                <p className="text-xs text-[#394B3F] max-w-md mx-auto mt-1 leading-relaxed">
                  Thank you, <strong>{submittedApp.contactPerson}</strong>! Your application for {submittedApp.city}, {submittedApp.state} has been recorded.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={generateWhatsAppLink(createDistributorWhatsAppMessage(submittedApp))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-lg shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Details via WhatsApp for Instant Fast-Track</span>
                </a>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      businessType: 'supermarket',
                      monthlyTargetBudget: '₹50,000 - ₹1,50,000 (District Retailer)',
                    });
                  }}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-[#1E3F20] bg-white border border-[#CBD8C9] rounded-lg hover:bg-[#FAF8F5]"
                >
                  Submit Another Form
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                
                {/* Firm / Store Name */}
                <div>
                  <label htmlFor="businessName" className="block text-xs font-bold text-[#19231D] mb-1.5">
                    Store / Firm / Agency Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName || ''}
                    onChange={handleInputChange}
                    placeholder="e.g. Madurai Green Grocers"
                    className={`w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E3F20] ${
                      formErrors.businessName ? 'border-red-400 bg-red-50/20' : 'border-[#DDD4C3]'
                    }`}
                  />
                  {formErrors.businessName && (
                    <span className="text-[11px] text-red-600 mt-1 block">{formErrors.businessName}</span>
                  )}
                </div>

                {/* Contact Person */}
                <div>
                  <label htmlFor="contactPerson" className="block text-xs font-bold text-[#19231D] mb-1.5">
                    Primary Contact Person *
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson || ''}
                    onChange={handleInputChange}
                    placeholder="Full name"
                    className={`w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E3F20] ${
                      formErrors.contactPerson ? 'border-red-400 bg-red-50/20' : 'border-[#DDD4C3]'
                    }`}
                  />
                  {formErrors.contactPerson && (
                    <span className="text-[11px] text-red-600 mt-1 block">{formErrors.contactPerson}</span>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label htmlFor="dist-phone" className="block text-xs font-bold text-[#19231D] mb-1.5">
                    Contact Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="dist-phone"
                    name="phone"
                    value={formData.phone || ''}
                    onChange={handleInputChange}
                    placeholder="10-digit mobile number"
                    className={`w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E3F20] ${
                      formErrors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#DDD4C3]'
                    }`}
                  />
                  {formErrors.phone && (
                    <span className="text-[11px] text-red-600 mt-1 block">{formErrors.phone}</span>
                  )}
                </div>

                {/* Business Type */}
                <div>
                  <label htmlFor="businessType" className="block text-xs font-bold text-[#19231D] mb-1.5">
                    Business Model / Channel
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType || 'supermarket'}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border border-[#DDD4C3] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E3F20]"
                  >
                    <option value="supermarket">Supermarket / Hypermarket</option>
                    <option value="retail_store">Organic / Gourmet Food Store</option>
                    <option value="district_distributor">District FMCG Distributor</option>
                    <option value="super_stockist">State / Regional Super Stockist</option>
                    <option value="online_reseller">E-Commerce / Quick Commerce Reseller</option>
                  </select>
                </div>

                {/* City / Town */}
                <div>
                  <label htmlFor="city" className="block text-xs font-bold text-[#19231D] mb-1.5">
                    City / Town *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city || ''}
                    onChange={handleInputChange}
                    placeholder="e.g. Coimbatore, Chennai, Trichy"
                    className={`w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E3F20] ${
                      formErrors.city ? 'border-red-400 bg-red-50/20' : 'border-[#DDD4C3]'
                    }`}
                  />
                  {formErrors.city && (
                    <span className="text-[11px] text-red-600 mt-1 block">{formErrors.city}</span>
                  )}
                </div>

                {/* State */}
                <div>
                  <label htmlFor="state" className="block text-xs font-bold text-[#19231D] mb-1.5">
                    State *
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state || ''}
                    onChange={handleInputChange}
                    placeholder="e.g. Tamil Nadu, Kerala, Karnataka"
                    className={`w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E3F20] ${
                      formErrors.state ? 'border-red-400 bg-red-50/20' : 'border-[#DDD4C3]'
                    }`}
                  />
                  {formErrors.state && (
                    <span className="text-[11px] text-red-600 mt-1 block">{formErrors.state}</span>
                  )}
                </div>

                {/* Postal PIN Code */}
                <div>
                  <label htmlFor="pincode" className="block text-xs font-bold text-[#19231D] mb-1.5">
                    Postal PIN Code
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={formData.pincode || ''}
                    onChange={handleInputChange}
                    placeholder="6 digits"
                    maxLength={6}
                    className={`w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E3F20] ${
                      formErrors.pincode ? 'border-red-400 bg-red-50/20' : 'border-[#DDD4C3]'
                    }`}
                  />
                  {formErrors.pincode && (
                    <span className="text-[11px] text-red-600 mt-1 block">{formErrors.pincode}</span>
                  )}
                </div>

                {/* Monthly Volume Capacity */}
                <div>
                  <label htmlFor="monthlyTargetBudget" className="block text-xs font-bold text-[#19231D] mb-1.5">
                    Estimated Monthly Order Capacity *
                  </label>
                  <select
                    id="monthlyTargetBudget"
                    name="monthlyTargetBudget"
                    value={formData.monthlyTargetBudget || ''}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border border-[#DDD4C3] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E3F20]"
                  >
                    <option value="₹25,000 - ₹50,000 (Trial Retailer)">₹25,000 - ₹50,000 (Trial Retailer)</option>
                    <option value="₹50,000 - ₹1,50,000 (District Retailer)">₹50,000 - ₹1,50,000 (District Retailer)</option>
                    <option value="₹1,50,000 - ₹5,00,000 (Regional Distributor)">₹1,50,000 - ₹5,00,000 (Regional Distributor)</option>
                    <option value="₹5,00,000+ (Super Stockist / C&F)">₹5,00,000+ (Super Stockist / C&F)</option>
                  </select>
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="dist-email" className="block text-xs font-bold text-[#19231D] mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    id="dist-email"
                    name="email"
                    value={formData.email || ''}
                    onChange={handleInputChange}
                    placeholder="trade@company.com"
                    className="w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border border-[#DDD4C3] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E3F20]"
                  />
                </div>

              </div>

              {/* Message / Distribution Area */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-[#19231D] mb-1.5">
                  Territory Covered & Current FMCG Brands Handled (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  value={formData.message || ''}
                  onChange={handleInputChange}
                  placeholder="Tell us about your distribution route, number of retail outlets serviced, or store location..."
                  className="w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border border-[#DDD4C3] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E3F20]"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-xs text-[#5E6D63]">
                  Direct trade helpline: <strong>{OFFICIAL_PHONE}</strong>
                </p>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-[#1E3F20] hover:bg-[#2D5A27] rounded-lg shadow-sm transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Partnership Application</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
