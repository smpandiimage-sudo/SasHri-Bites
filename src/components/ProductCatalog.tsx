import React, { useState, useMemo } from 'react';
import { Product, ProductCategory } from '../types';
import { SASHRI_PRODUCTS } from '../data/products';
import { Search, Eye, MessageCircle, Info, Sparkles } from 'lucide-react';
import { formatCurrencyINR, generateWhatsAppLink, createProductWhatsAppMessage } from '../utils/enquiry';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  onOpenSampleModal: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProduct, onOpenSampleModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPackMap, setSelectedPackMap] = useState<Record<string, number>>({});

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'All Healthy Snacks' },
    { id: 'makhana', label: 'Spiced Makhana' },
    { id: 'millets', label: 'Roasted Millets' },
    { id: 'crisps', label: 'Vacuum Crisps' },
    { id: 'clusters', label: 'Energy Clusters' },
  ];

  const filteredProducts = useMemo(() => {
    return SASHRI_PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.tagline.toLowerCase().includes(query) ||
        product.ingredients.some((ing) => ing.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handlePackChange = (productId: string, packIndex: number) => {
    setSelectedPackMap((prev) => ({
      ...prev,
      [productId]: packIndex,
    }));
  };

  return (
    <section id="products" className="py-16 lg:py-24 bg-[#F8F5EE]/60 border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D5A27] block mb-2">
              Artisanal FMCG Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#19231D] font-display tracking-tight">
              Honest Snacking Range
            </h2>
            <p className="text-sm sm:text-base text-[#56685D] mt-2">
              Nutrient-dense native Indian grains, slow-roasted lotus seeds, and low-temperature vacuum-crisped root chips with pure spices.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSampleModal}
              className="px-4 py-2 text-xs font-semibold text-[#1E3F20] bg-white border border-[#CBD8C9] hover:bg-[#F2EDE4] rounded-md transition-colors"
            >
              Order Distributor Sample Box
            </button>
          </div>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center mb-8 pb-4 border-b border-[#E5DEC8]">
          
          {/* Functional Category Filter Tabs (allowed buttons) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#1E3F20] text-white shadow-xs'
                    : 'bg-white text-[#4D5E53] hover:text-[#19231D] border border-[#E0D8C8]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] sm:w-72">
            <Search className="w-4 h-4 text-[#7A8C81] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by grain or spice..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-[#DDD4C3] rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E3F20] focus:border-[#1E3F20] text-[#19231D]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-[#E5DEC8]">
            <p className="text-base font-semibold text-[#19231D]">No snacks found matching &ldquo;{searchQuery}&rdquo;</p>
            <p className="text-xs text-[#5E6D63] mt-1">Try searching for makhana, millets, jackfruit, or ragi.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-[#1E3F20] bg-[#E9F2E7] rounded-md"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProducts.map((product) => {
              const currentPackIdx = selectedPackMap[product.id] || 0;
              const currentPack = product.packSizes[currentPackIdx] || product.packSizes[0];
              const whatsappMsg = createProductWhatsAppMessage(product.name, currentPack.weight, 1);
              const whatsappLink = generateWhatsAppLink(whatsappMsg);

              return (
                <div
                  key={product.id}
                  className="group flex flex-col bg-white rounded-xl border border-[#E2D9C8] overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  {/* Product Image Area */}
                  <div className="relative h-60 sm:h-64 bg-[#F4EFEA] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />

                    {/* Subtle Top Kicker */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#1E3F20] bg-white/95 px-2.5 py-1 rounded shadow-xs">
                        {product.categoryLabel}
                      </span>
                    </div>

                    {product.isBestseller && (
                      <div className="absolute top-3 right-3">
                        <span className="text-[11px] font-bold text-white bg-[#C86D51] px-2 py-0.5 rounded shadow-xs">
                          Customer Favorite
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Content Details */}
                  <div className="flex flex-col flex-1 p-5 sm:p-6">
                    
                    {/* Clean unboxed metadata with dot separators */}
                    <div className="flex items-center gap-2 text-xs text-[#5E6D63] mb-1.5">
                      <span>{product.shelfLife}</span>
                      <span aria-hidden="true">·</span>
                      <span>Zero Trans Fat</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#19231D] font-display group-hover:text-[#1E3F20] transition-colors leading-snug">
                      {product.name}
                    </h3>

                    <p className="text-xs text-[#56685D] mt-2 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Pack size selector pills / buttons */}
                    <div className="mt-4 pt-3 border-t border-[#EFE8DC]">
                      <span className="text-[11px] font-semibold text-[#3C4C42] block mb-1.5">
                        Select Pack Size:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.packSizes.map((pack, idx) => (
                          <button
                            key={pack.weight}
                            onClick={() => handlePackChange(product.id, idx)}
                            className={`px-2.5 py-1 text-xs font-semibold rounded border transition-colors ${
                              currentPackIdx === idx
                                ? 'bg-[#1E3F20] text-white border-[#1E3F20]'
                                : 'bg-[#FAF8F5] text-[#3D4C43] border-[#DED6C7] hover:border-[#1E3F20]'
                            }`}
                          >
                            {pack.weight}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Price baseline & Wholesale hint */}
                    <div className="mt-4 flex items-baseline justify-between">
                      <div>
                        <span className="text-xs text-[#6F8074]">Retail MRP:</span>
                        <div className="text-xl font-extrabold text-[#19231D] font-display tabular-nums">
                          {formatCurrencyINR(currentPack.priceINR)}
                        </div>
                      </div>
                      {currentPack.wholesaleEstimateINR && (
                        <div className="text-right">
                          <span className="text-[11px] text-[#2D5A27] font-semibold block">
                            Wholesale from {formatCurrencyINR(currentPack.wholesaleEstimateINR)}
                          </span>
                          <span className="text-[10px] text-[#7B8B80]">
                            (B2B bulk orders)
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-5 pt-4 border-t border-[#EFE8DC] grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#1E3F20] bg-[#E9F2E7] hover:bg-[#D8E8D5] rounded-md transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Nutrition & Info</span>
                      </button>

                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-md transition-colors shadow-xs"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Enquire Pack</span>
                      </a>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Honest FMCG Disclaimer */}
        <div className="mt-10 p-4 bg-white/70 rounded-lg border border-[#E2D9C8] flex items-start gap-3 text-xs text-[#5E6D63]">
          <Info className="w-4 h-4 text-[#2D5A27] shrink-0 mt-0.5" />
          <p>
            <strong>Packaging & Nutritional Note:</strong> Listed pack weights, nutrition values, and MRPs represent our standard retail formulations. Custom nitrogen-barrier pouch sizes, gift hamper packing, and institutional wholesale crates are available for verified retail and distributor partners.
          </p>
        </div>

      </div>
    </section>
  );
};
