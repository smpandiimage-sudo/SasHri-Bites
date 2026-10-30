import React, { useState } from 'react';
import { CustomerEnquiry } from '../types';
import {
  OFFICIAL_PHONE,
  OFFICIAL_LOCATION,
  OFFICIAL_PINCODE,
  validateEnquiryForm,
  generateWhatsAppLink,
} from '../utils/enquiry';
import { Phone, MessageCircle, MapPin, Mail, Clock, Send, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<Partial<CustomerEnquiry>>({
    enquiryType: 'retail_pack',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateEnquiryForm(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setSubmitted(true);
  };

  const generateEnquiryWhatsAppMessage = () => {
    return [
      `Hello SasHri Bites Team,`,
      ``,
      `New Website Customer Enquiry:`,
      `Name: *${formData.fullName || 'N/A'}*`,
      `Mobile: *${formData.phone || 'N/A'}*`,
      `Enquiry Type: *${formData.enquiryType || 'General'}*`,
      formData.city ? `Location: *${formData.city}, ${formData.state || ''}*` : '',
      `Message: ${formData.message || 'I would like more information on SasHri Bites products.'}`,
      ``,
      `Please contact me at your earliest convenience.`
    ].filter(Boolean).join('\n');
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2D5A27] block mb-2">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#19231D] font-display tracking-tight leading-snug">
            Contact our Ramanathapuram headquarters.
          </h2>
          <p className="text-sm sm:text-base text-[#56685D] mt-3 leading-relaxed">
            Whether you are a consumer looking for our packs, a retailer wanting to stock healthy snacks, or a corporate client planning custom gift hampers, our team is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Official Contact Channels & Interactive Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Cards */}
            <div className="bg-white rounded-xl border border-[#E5DEC8] p-6 space-y-5 shadow-xs">
              
              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-[#E9F2E7] text-[#1E3F20] rounded-lg shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#5E6D63] block font-medium">Direct Telephone</span>
                  <a
                    href={`tel:${OFFICIAL_PHONE.replace(/\s+/g, '')}`}
                    className="text-base sm:text-lg font-bold text-[#19231D] font-display hover:text-[#1E3F20] transition-colors"
                  >
                    {OFFICIAL_PHONE}
                  </a>
                  <span className="text-[11px] text-[#78887E] block mt-0.5">
                    Click to call directly from your device
                  </span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#EFE8DC]">
                <div className="p-2.5 bg-[#E9F2E7] text-[#25D366] rounded-lg shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5 text-[#2D5A27]" />
                </div>
                <div>
                  <span className="text-xs text-[#5E6D63] block font-medium">Official WhatsApp</span>
                  <a
                    href={generateWhatsAppLink('Hello SasHri Bites, I want to connect regarding your healthy snack products.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-bold text-[#1E3F20] font-display hover:underline"
                  >
                    +91 96776 32378
                  </a>
                  <span className="text-[11px] text-[#78887E] block mt-0.5">
                    Fast response for quick questions & orders
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#EFE8DC]">
                <div className="p-2.5 bg-[#E9F2E7] text-[#1E3F20] rounded-lg shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#C86D51]" />
                </div>
                <div>
                  <span className="text-xs text-[#5E6D63] block font-medium">Headquarters & Processing Unit</span>
                  <p className="text-sm font-semibold text-[#19231D] mt-0.5 leading-snug">
                    SasHri Bites Private Facility,<br />
                    Ramanathapuram - {OFFICIAL_PINCODE},<br />
                    Tamil Nadu, India.
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#EFE8DC]">
                <div className="p-2.5 bg-[#E9F2E7] text-[#1E3F20] rounded-lg shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#5E6D63] block font-medium">Operational Hours</span>
                  <p className="text-xs font-semibold text-[#19231D] mt-0.5">
                    Monday to Saturday: 9:00 AM – 7:00 PM IST
                  </p>
                  <span className="text-[11px] text-[#78887E] block">
                    Sunday: Online WhatsApp messages logged
                  </span>
                </div>
              </div>

            </div>

            {/* Google Maps Embed Preview of Ramanathapuram */}
            <div className="rounded-xl overflow-hidden border border-[#E5DEC8] shadow-xs bg-white">
              <div className="p-3 bg-[#FAF8F5] border-b border-[#E8E2D8] flex items-center justify-between text-xs text-[#4F6054]">
                <span className="font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C86D51]" />
                  Ramanathapuram, Tamil Nadu Map
                </span>
                <span className="text-[11px] text-[#7A8A80]">PIN: 623501</span>
              </div>
              <div className="h-56 w-full">
                <iframe
                  title="SasHri Bites Location Ramanathapuram"
                  src="https://maps.google.com/maps?q=Ramanathapuram,Tamil%20Nadu,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Customer Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E5DEC8] p-6 sm:p-10 shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#19231D] font-display">
                Send Us an Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-[#5E6D63] mt-1">
                Fill in the details below. We verify every request and respond with custom pricing or product details promptly.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-[#E9F2E7] border border-[#BED7BA] rounded-xl text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 bg-[#2D5A27] text-white rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#19231D] font-display">
                    Thank You, {formData.fullName}!
                  </h4>
                  <p className="text-xs text-[#394B3F] max-w-md mx-auto mt-1 leading-relaxed">
                    Your enquiry has been received. Our Ramanathapuram team will reach out to <strong>{formData.phone}</strong> shortly.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={generateWhatsAppLink(generateEnquiryWhatsAppMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-lg shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Query Directly to WhatsApp Now</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ enquiryType: 'retail_pack' });
                    }}
                    className="px-4 py-2.5 text-xs font-semibold text-[#1E3F20] bg-white border border-[#CBD8C9] rounded-lg hover:bg-[#FAF8F5]"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="contact-fullName" className="block text-xs font-bold text-[#19231D] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="contact-fullName"
                      name="fullName"
                      value={formData.fullName || ''}
                      onChange={handleInputChange}
                      placeholder="e.g. Ananya Raman"
                      className={`w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E3F20] ${
                        errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-[#DDD4C3]'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-600 mt-1 block">{errors.fullName}</span>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-[#19231D] mb-1.5">
                      Mobile Number (10 digits) *
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone || ''}
                      onChange={handleInputChange}
                      placeholder="e.g. 9876543210"
                      className={`w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E3F20] ${
                        errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#DDD4C3]'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-600 mt-1 block">{errors.phone}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-[#19231D] mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email || ''}
                      onChange={handleInputChange}
                      placeholder="name@email.com"
                      className={`w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E3F20] ${
                        errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#DDD4C3]'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-600 mt-1 block">{errors.email}</span>
                    )}
                  </div>

                  {/* Enquiry Type */}
                  <div>
                    <label htmlFor="enquiryType" className="block text-xs font-bold text-[#19231D] mb-1.5">
                      Purpose of Enquiry
                    </label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      value={formData.enquiryType || 'retail_pack'}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border border-[#DDD4C3] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E3F20]"
                    >
                      <option value="retail_pack">Individual / Family Snack Order</option>
                      <option value="distributor_dealership">Retailer & Distributor Partnership</option>
                      <option value="sample_kit">Tasting Sample Kit Request</option>
                      <option value="corporate_order">Corporate Gifting & Event Catering</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* City */}
                  <div>
                    <label htmlFor="contact-city" className="block text-xs font-bold text-[#19231D] mb-1.5">
                      Your City
                    </label>
                    <input
                      type="text"
                      id="contact-city"
                      name="city"
                      value={formData.city || ''}
                      onChange={handleInputChange}
                      placeholder="e.g. Ramanathapuram, Madurai, Bangalore"
                      className="w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border border-[#DDD4C3] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E3F20]"
                    />
                  </div>

                  {/* State */}
                  <div>
                    <label htmlFor="contact-state" className="block text-xs font-bold text-[#19231D] mb-1.5">
                      State
                    </label>
                    <input
                      type="text"
                      id="contact-state"
                      name="state"
                      value={formData.state || ''}
                      onChange={handleInputChange}
                      placeholder="e.g. Tamil Nadu"
                      className="w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border border-[#DDD4C3] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E3F20]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-[#19231D] mb-1.5">
                    How can we help you? *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message || ''}
                    onChange={handleInputChange}
                    placeholder="Specify pack requirements, bulk quantities, or dealership queries..."
                    className={`w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E3F20] ${
                      errors.message ? 'border-red-400 bg-red-50/20' : 'border-[#DDD4C3]'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-600 mt-1 block">{errors.message}</span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs text-[#5E6D63]">
                    <span>Prefer direct chat?</span>
                    <a
                      href={generateWhatsAppLink('Hello SasHri Bites, I have a quick question.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1E3F20] font-bold hover:underline inline-flex items-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>WhatsApp Us</span>
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-[#1E3F20] hover:bg-[#2D5A27] rounded-lg shadow-sm transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Enquiry</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
