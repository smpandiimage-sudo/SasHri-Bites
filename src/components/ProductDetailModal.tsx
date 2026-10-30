import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { X, Check, MessageCircle, ShieldCheck, Clock, PackageCheck } from 'lucide-react';
import { formatCurrencyINR, generateWhatsAppLink, createProductWhatsAppMessage } from '../utils/enquiry';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestSample: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRequestSample,
}) => {
  const [selectedPackIdx, setSelectedPackIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setSelectedPackIdx(0);
    setQuantity(1);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  const currentPack = product.packSizes[selectedPackIdx] || product.packSizes[0];
  const whatsappMsg = createProductWhatsAppMessage(product.name, currentPack.weight, quantity);
  const whatsappUrl = generateWhatsAppLink(whatsappMsg);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative w-full max-w-3xl max-h-[88vh] bg-white rounded-2xl shadow-2xl border border-[#E5DEC8] flex flex-col md:flex-row overflow-hidden z-10">
        
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-30 p-2 text-slate-500 hover:text-slate-900 bg-white/90 backdrop-blur-sm rounded-full border border-slate-200 transition-colors shadow-xs"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Column: Image & Highlights */}
        <div className="md:w-5/12 bg-[#F5EFE6] p-5 sm:p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E8E2D8] shrink-0">
          <div>
            <div className="rounded-xl overflow-hidden border border-[#E0D7C3] shadow-xs mb-3">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-44 sm:h-52 object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>

            <span className="text-[11px] font-bold uppercase tracking-wider text-[#2D5A27]">
              {product.categoryLabel}
            </span>
            <h2 id="modal-product-title" className="text-lg sm:text-xl font-extrabold text-[#19231D] font-display mt-0.5 leading-snug">
              {product.name}
            </h2>
            <p className="text-xs text-[#56685D] mt-1.5 italic leading-relaxed">
              &ldquo;{product.tagline}&rdquo;
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-[#E2D8C5] space-y-1.5">
            <div className="flex items-center gap-2 text-[11px] text-[#3B4B40]">
              <Clock className="w-3.5 h-3.5 text-[#2D5A27] shrink-0" />
              <span>Shelf Life: {product.shelfLife}</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-[#3B4B40]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2D5A27] shrink-0" />
              <span>Standard FSSAI Compliance Formulation</span>
            </div>
          </div>
        </div>

        {/* Right Column: Deep Ingredients, Nutrition & Order Actions */}
        <div className="md:w-7/12 p-5 sm:p-6 flex flex-col justify-between overflow-y-auto max-h-[88vh]">
          <div className="space-y-4">
              
              {/* Product Story & Brand Seal */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src="/assets/aistudio/Polish_20261021_202930511_46c83b6b.jpg"
                    alt="SasHri Bites Logo"
                    className="w-5 h-5 rounded-full object-cover border border-[#E68A14]/30"
                  />
                  <span className="text-[11px] font-bold text-[#E68A14] font-display uppercase tracking-wider">
                    Authentic SasHri Formulation
                  </span>
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E3F20] mb-1">
                  Craft & Preparation
                </h4>
                <p className="text-xs text-[#48594E] leading-relaxed">
                  {product.fullStory}
                </p>
              </div>

              {/* Verified Ingredients (No fake additives) */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E3F20] mb-2">
                  Ingredients Breakdown
                </h4>
                <div className="p-3 bg-[#FAF8F5] rounded-lg border border-[#E8E0D0] text-xs text-[#3B4B40] leading-relaxed">
                  {product.ingredients.join(' · ')}
                </div>
              </div>

              {/* Nutrition Facts Table */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E3F20]">
                    Nutritional Value (Per 30g Serving)
                  </h4>
                  <span className="text-[10px] text-[#78887E]">Lab Test Baseline</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 bg-[#FAF8F5] rounded border border-[#E8E2D8]">
                    <span className="text-[10px] text-[#5E6D63] block">Energy</span>
                    <span className="font-bold text-[#19231D] tabular-nums">{product.nutrition.energyKcal}</span>
                  </div>
                  <div className="p-2 bg-[#FAF8F5] rounded border border-[#E8E2D8]">
                    <span className="text-[10px] text-[#5E6D63] block">Protein</span>
                    <span className="font-bold text-[#2D5A27] tabular-nums">{product.nutrition.protein}</span>
                  </div>
                  <div className="p-2 bg-[#FAF8F5] rounded border border-[#E8E2D8]">
                    <span className="text-[10px] text-[#5E6D63] block">Dietary Fiber</span>
                    <span className="font-bold text-[#19231D] tabular-nums">{product.nutrition.dietaryFiber}</span>
                  </div>
                  <div className="p-2 bg-[#FAF8F5] rounded border border-[#E8E2D8]">
                    <span className="text-[10px] text-[#5E6D63] block">Total Fat</span>
                    <span className="font-bold text-[#19231D] tabular-nums">{product.nutrition.totalFat}</span>
                  </div>
                  <div className="p-2 bg-[#FAF8F5] rounded border border-[#E8E2D8]">
                    <span className="text-[10px] text-[#5E6D63] block">Trans Fat</span>
                    <span className="font-bold text-[#2D5A27] tabular-nums">{product.nutrition.transFat}</span>
                  </div>
                  <div className="p-2 bg-[#FAF8F5] rounded border border-[#E8E2D8]">
                    <span className="text-[10px] text-[#5E6D63] block">Carbs</span>
                    <span className="font-bold text-[#19231D] tabular-nums">{product.nutrition.carbohydrates}</span>
                  </div>
                </div>
              </div>

              {/* Pack Selection & Quantity */}
              <div className="pt-2">
                <span className="text-xs font-bold text-[#19231D] block mb-2">
                  Select Pack Size:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {product.packSizes.map((pack, idx) => (
                    <button
                      key={pack.weight}
                      onClick={() => setSelectedPackIdx(idx)}
                      className={`p-2.5 rounded-lg border text-left transition-all ${
                        selectedPackIdx === idx
                          ? 'border-[#1E3F20] bg-[#E9F2E7] ring-1 ring-[#1E3F20]'
                          : 'border-[#E0D7C6] bg-white hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <span className="text-xs font-bold text-[#19231D] block">{pack.weight}</span>
                      <span className="text-sm font-extrabold text-[#1E3F20] tabular-nums block mt-0.5">
                        {formatCurrencyINR(pack.priceINR)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Stepper */}
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium text-[#4B5C51]">Packs Quantity:</span>
                <div className="flex items-center border border-[#DDD5C5] rounded-md overflow-hidden bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-sm font-bold text-[#1E3F20] hover:bg-[#F2EDE4]"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-xs font-bold tabular-nums min-w-[28px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-sm font-bold text-[#1E3F20] hover:bg-[#F2EDE4]"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <span className="text-xs text-[#6B7C71]">
                  Subtotal: <strong className="tabular-nums text-[#19231D]">{formatCurrencyINR(currentPack.priceINR * quantity)}</strong>
                </span>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-4 border-t border-[#E8E2D8] flex flex-col sm:flex-row gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-lg shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire & Order on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onRequestSample(product.name);
                }}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#1E3F20] bg-[#FAF8F5] hover:bg-[#F2EDE4] border border-[#C9D6C7] rounded-lg transition-colors"
              >
                <PackageCheck className="w-4 h-4 text-[#2D5A27]" />
                <span>Request Sample</span>
              </button>
            </div>

          </div>

        </div>
      </div>
  );
};
