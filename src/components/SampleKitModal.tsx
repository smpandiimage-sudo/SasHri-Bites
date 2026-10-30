import React, { useState } from 'react';
import { X, PackageCheck, Check, MessageCircle, Send } from 'lucide-react';
import {
  isValidIndianPhone,
  generateWhatsAppLink,
  OFFICIAL_PHONE,
} from '../utils/enquiry';
import { SASHRI_PRODUCTS } from '../data/products';

interface SampleKitModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

export const SampleKitModal: React.FC<SampleKitModalProps> = ({
  isOpen,
  onClose,
  preselectedProduct,
}) => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    phone: '',
    city: '',
    state: '',
    pincode: '',
    shippingAddress: '',
    selectedProducts: preselectedProduct ? [preselectedProduct] : ['All Signature Varieties'],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleCheckboxChange = (productName: string) => {
    setFormData((prev) => {
      const current = prev.selectedProducts;
      if (current.includes(productName)) {
        return { ...prev, selectedProducts: current.filter((p) => p !== productName) };
      } else {
        return { ...prev, selectedProducts: [...current, productName] };
      }
    });
  };

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.contactName.trim()) err.contactName = 'Please enter your name';
    if (!isValidIndianPhone(formData.phone)) err.phone = 'Valid 10-digit mobile number required';
    if (!formData.city.trim()) err.city = 'Please specify city';
    if (!formData.state.trim()) err.state = 'Please specify state';
    if (!formData.shippingAddress.trim()) err.shippingAddress = 'Courier shipping address required';
    if (formData.pincode && !/^\d{6}$/.test(formData.pincode.trim())) err.pincode = '6-digit PIN code required';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const sampleWhatsAppText = [
    `Hello SasHri Bites,`,
    ``,
    `I have requested a *Tasting Sample Box*:`,
    `Business/Store: *${formData.businessName || 'Individual/Prospective Partner'}*`,
    `Contact Name: *${formData.contactName}*`,
    `Mobile: *${formData.phone}*`,
    `Address: *${formData.shippingAddress}, ${formData.city}, ${formData.state} - ${formData.pincode || ''}*`,
    `Selected Samples: *${formData.selectedProducts.join(', ')}*`,
    ``,
    `Please confirm dispatch details and courier tracking.`
  ].join('\n');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sample-modal-title"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-[#E5DEC8] overflow-y-auto z-10 p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-full transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4 animate-fadeIn">
            <div className="w-12 h-12 bg-[#2D5A27] text-white rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#19231D] font-display">
              Sample Box Request Recorded!
            </h3>
            <p className="text-xs text-[#4E6054] max-w-md mx-auto leading-relaxed">
              We have noted your delivery address. Our logistics desk in Ramanathapuram will review sample availability and connect with you at <strong>{formData.phone}</strong>.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={generateWhatsAppLink(sampleWhatsAppText)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Address on WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-[#1E3F20] bg-[#FAF8F5] border border-[#CBD8C9] rounded-lg"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img
                src="/assets/aistudio/Polish_20261021_202930511_46c83b6b.jpg"
                alt="SasHri Bites Logo"
                className="w-10 h-10 rounded-full object-cover border border-[#E68A14]/30"
              />
              <div>
                <h3 id="sample-modal-title" className="text-xl font-bold text-[#19231D] font-display">
                  Request a Tasting Sample Box
                </h3>
                <span className="text-[11px] font-semibold text-[#E68A14]">
                  SasHri Bites Trade Sampling Desk
                </span>
              </div>
            </div>
            <p className="text-xs text-[#5E6D63] mb-6 leading-relaxed">
              Experience the freshness, crunch, and authentic seasoning of SasHri Bites before placing retail stocking or distributor bulk crate orders.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#19231D] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="Full name"
                    className="w-full px-3 py-1.5 text-xs bg-[#FAF8F5] border border-[#DDD4C3] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E3F20]"
                  />
                  {errors.contactName && <span className="text-[11px] text-red-600 mt-0.5 block">{errors.contactName}</span>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#19231D] mb-1">
                    Store / Firm Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Organic Mart / Self"
                    className="w-full px-3 py-1.5 text-xs bg-[#FAF8F5] border border-[#DDD4C3] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E3F20]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#19231D] mb-1">
                  Mobile Number (10 digits) *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 9876543210"
                  className="w-full px-3 py-1.5 text-xs bg-[#FAF8F5] border border-[#DDD4C3] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E3F20]"
                />
                {errors.phone && <span className="text-[11px] text-red-600 mt-0.5 block">{errors.phone}</span>}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#19231D] mb-1">
                  Shipping Address (for Courier Delivery) *
                </label>
                <textarea
                  rows={2}
                  value={formData.shippingAddress}
                  onChange={(e) => setFormData({ ...formData, shippingAddress: e.target.value })}
                  placeholder="Door/Shop No, Street, Landmark"
                  className="w-full px-3 py-1.5 text-xs bg-[#FAF8F5] border border-[#DDD4C3] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1E3F20]"
                />
                {errors.shippingAddress && <span className="text-[11px] text-red-600 mt-0.5 block">{errors.shippingAddress}</span>}
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-[11px] font-bold text-[#19231D] mb-1">City *</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-2.5 py-1.5 text-xs bg-[#FAF8F5] border border-[#DDD4C3] rounded-lg"
                  />
                  {errors.city && <span className="text-[10px] text-red-600 mt-0.5 block">{errors.city}</span>}
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#19231D] mb-1">State *</label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-2.5 py-1.5 text-xs bg-[#FAF8F5] border border-[#DDD4C3] rounded-lg"
                  />
                  {errors.state && <span className="text-[10px] text-red-600 mt-0.5 block">{errors.state}</span>}
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#19231D] mb-1">PIN Code</label>
                  <input
                    type="text"
                    maxLength={6}
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full px-2.5 py-1.5 text-xs bg-[#FAF8F5] border border-[#DDD4C3] rounded-lg"
                  />
                  {errors.pincode && <span className="text-[10px] text-red-600 mt-0.5 block">{errors.pincode}</span>}
                </div>
              </div>

              {/* Snack varieties selection */}
              <div>
                <span className="block text-xs font-bold text-[#19231D] mb-2">
                  Select Snacks for Tasting:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {SASHRI_PRODUCTS.map((p) => {
                    const isChecked = formData.selectedProducts.includes(p.name);
                    return (
                      <label
                        key={p.id}
                        className={`flex items-center gap-2 p-2 rounded border cursor-pointer transition-colors ${
                          isChecked ? 'bg-[#E9F2E7] border-[#2D5A27]' : 'bg-[#FAF8F5] border-[#E2D9C8]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleCheckboxChange(p.name)}
                          className="accent-[#1E3F20]"
                        />
                        <span className="text-xs truncate">{p.name}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="pt-3 border-t border-[#E8E2D8] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-[#1E3F20] hover:bg-[#2D5A27] rounded-lg shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Dispatch Sample Request</span>
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
