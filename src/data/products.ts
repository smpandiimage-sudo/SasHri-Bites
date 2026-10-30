import { Product } from '../types';

export const SASHRI_PRODUCTS: Product[] = [
  {
    id: 'spiced-makhana-pink-salt',
    name: 'Himalayan Pink Salt & Black Pepper Makhana',
    tagline: 'Slow-roasted popped lotus seeds tossed in mineral pink salt & coarse Malabar pepper',
    category: 'makhana',
    categoryLabel: 'Spiced Makhana',
    description: 'Light, crunchy fox nuts slowly dry-roasted to perfection, then lightly seasoned with genuine Himalayan rock salt and freshly cracked black pepper. A naturally protein-rich, gluten-free snack that curbs midday cravings without excess oil.',
    fullStory: 'Harvested from pristine freshwater ponds, our lotus seeds are sun-dried and hot-air popped. Instead of deep frying, SasHri Bites uses an artisanal continuous slow-roast drum with a delicate cold-pressed rice bran oil mist to bind pure spices without oily residue.',
    ingredients: [
      'Popped Lotus Seeds (Fox Nuts / Makhana) 91%',
      'Cold-Pressed Rice Bran Oil (Mist application) 4%',
      'Himalayan Pink Rock Salt 2.5%',
      'Coarse Malabar Black Pepper 1.8%',
      'Natural Dried Mango Powder (Amchur) 0.7%'
    ],
    packSizes: [
      { weight: '50g', priceINR: 85, wholesaleEstimateINR: 52, perPackDesc: 'Single-serve on-the-go pouch' },
      { weight: '120g', priceINR: 185, wholesaleEstimateINR: 115, perPackDesc: 'Resealable stand-up aroma pouch' },
      { weight: '350g', priceINR: 490, wholesaleEstimateINR: 310, perPackDesc: 'Value canister for families & pantry' },
    ],
    nutrition: {
      servingSize: '30g (approx. 1 bowl)',
      energyKcal: '118 kcal',
      protein: '3.2g',
      dietaryFiber: '2.1g',
      totalFat: '3.6g',
      transFat: '0.0g',
      carbohydrates: '19.4g',
      sodium: '142mg',
    },
    highlights: [
      '100% Dry-Roasted (Never Deep Fried)',
      'Zero Trans Fat & 0mg Cholesterol',
      'Rich in Plant Protein & Minerals',
      'Clean Pantry Ingredients Only'
    ],
    image: '/src/assets/images/product_spiced_makhana_1793366385663.jpg',
    shelfLife: '9 Months (Nitrogen-flushed pack)',
    isBestseller: true,
    isSampleEligible: true,
  },
  {
    id: 'south-indian-roasted-5-millet-crunch',
    name: 'Coastal 5-Millet Roasted Crunch',
    tagline: 'Crisp Foxtail, Ragi puffs, Pearl millet, toasted pumpkin seeds & curry leaf temper',
    category: 'millets',
    categoryLabel: 'Roasted Millets',
    description: 'An ode to Tamil Nadu’s heritage grains. A wholesome blend of puffed foxtail millet (Thinai), finger millet (Ragi), toasted pearl millet (Kambu), golden roasted Bengal gram, and nutrient-dense pumpkin seeds tossed with sun-dried curry leaves and cold-pressed sesame oil.',
    fullStory: 'Ancient millets are climate-resilient supergrains that have nourished South India for centuries. At SasHri Bites in Ramanathapuram, we revive this wholesome heritage by roasting small batches with traditional spice temperings, delivering high fiber and satisfying crunch.',
    ingredients: [
      'Puffed Multi-Millets 52% (Foxtail Millet, Finger Millet/Ragi, Pearl Millet/Kambu)',
      'Roasted Bengal Gram (Chana) 18%',
      'Toasted Pumpkin & Sesame Seeds 14%',
      'Cold-Pressed Sesame Oil (Mist) 6%',
      'Sun-Dried Curry Leaves 3%',
      'Himalayan Salt, Cumin & Asafoetida (Hing) 7%'
    ],
    packSizes: [
      { weight: '80g', priceINR: 65, wholesaleEstimateINR: 40, perPackDesc: 'Compact daily snack pouch' },
      { weight: '180g', priceINR: 135, wholesaleEstimateINR: 84, perPackDesc: 'Family zipper pouch' },
      { weight: '450g', priceINR: 310, wholesaleEstimateINR: 195, perPackDesc: 'Bulk pantry jar' },
    ],
    nutrition: {
      servingSize: '30g',
      energyKcal: '124 kcal',
      protein: '4.8g',
      dietaryFiber: '3.8g',
      totalFat: '4.1g',
      transFat: '0.0g',
      carbohydrates: '18.2g',
      sodium: '110mg',
    },
    highlights: [
      'Complex Slow-Burning Carbohydrates',
      'High Dietary Fiber (3.8g per serve)',
      'Gluten-Friendly Heritage Grains',
      'Natural Curry Leaf Antioxidants'
    ],
    image: '/src/assets/images/product_roasted_millet_mix_1793366385902.jpg',
    shelfLife: '6 Months',
    isBestseller: true,
    isSampleEligible: true,
  },
  {
    id: 'crispy-vacuum-fried-jackfruit-chips',
    name: 'Vacuum-Crisped Tender Jackfruit Chips',
    tagline: 'Low-temperature vacuum-crisped native raw jackfruit with 70% less oil absorption',
    category: 'crisps',
    categoryLabel: 'Vacuum Crisps',
    description: 'Sourced from Western Ghats jackfruit orchards, mature raw jackfruit pods are gently sliced and dehydrated under low-temperature vacuum conditions. This preserves the natural golden hue, delicate sweet-savory fiber, and satisfying crunch without the heavy oiliness of conventional banana or potato chips.',
    fullStory: 'Conventional deep frying subjects fruit slices to 180°C oil, breaking down natural micronutrients and soaking up fat. Our vacuum technology cooks at under 95°C in reduced atmospheric pressure, ensuring the chips retain 90%+ natural fruit nutrients and extraordinary natural taste.',
    ingredients: [
      'Mature Green Jackfruit (Raw Fruit Pulp) 88%',
      'Refined Coconut Oil (Vacuum-process medium) 9.5%',
      'Sea Salt 1.5%',
      'Kashmiri Chilli & Turmeric Powder 1.0%'
    ],
    packSizes: [
      { weight: '70g', priceINR: 99, wholesaleEstimateINR: 62, perPackDesc: 'Snack pack' },
      { weight: '150g', priceINR: 195, wholesaleEstimateINR: 122, perPackDesc: 'Gourmet seal pouch' },
      { weight: '300g', priceINR: 370, wholesaleEstimateINR: 235, perPackDesc: 'Party box' },
    ],
    nutrition: {
      servingSize: '30g',
      energyKcal: '136 kcal',
      protein: '1.9g',
      dietaryFiber: '4.2g',
      totalFat: '4.8g',
      transFat: '0.0g',
      carbohydrates: '21.0g',
      sodium: '98mg',
    },
    highlights: [
      '70% Less Oil than Traditional Chips',
      'No Palm Oil · No Artificial Food Colors',
      'Authentic Western Ghats Jackfruit',
      'Intense Natural Crunch & Good Fiber'
    ],
    image: '/src/assets/images/product_vacuum_fried_crisps_1793366386877.jpg',
    shelfLife: '6 Months',
    isBestseller: true,
    isSampleEligible: true,
  },
  {
    id: 'spicy-roasted-chana-peanut-clusters',
    name: 'Roasted Chana & Peanut Jaggery Clusters',
    tagline: 'High-protein roasted gram and native groundnuts hand-tossed in organic jaggery syrup',
    category: 'clusters',
    categoryLabel: 'Energy Clusters',
    description: 'A contemporary reimagining of Tamil Nadu’s iconic Kadalai Mittai. Crunchy double-roasted Bengal gram and golden local peanuts coated in a light, glossy organic jaggery syrup infused with crushed dry ginger (chukku) and green cardamom.',
    fullStory: 'No refined white sugar, no glucose syrup, and no preservatives. We source native sugarcane jaggery directly from local cooperative mills in southern Tamil Nadu, boiling it to precise caramel consistency for an unrefined, iron-rich sweet crunch.',
    ingredients: [
      'Roasted Bengal Gram & Peanuts 62%',
      'Organic Unrefined Palm & Sugarcane Jaggery 32%',
      'Cold-Pressed Gingelly (Sesame) Oil 3%',
      'Crushed Dry Ginger (Chukku) & Green Cardamom 3%'
    ],
    packSizes: [
      { weight: '100g', priceINR: 75, wholesaleEstimateINR: 46, perPackDesc: 'Pocket power bite pack' },
      { weight: '220g', priceINR: 155, wholesaleEstimateINR: 96, perPackDesc: 'Resealable stand-up pack' },
      { weight: '500g', priceINR: 330, wholesaleEstimateINR: 205, perPackDesc: 'Family treat carton' },
    ],
    nutrition: {
      servingSize: '30g',
      energyKcal: '142 kcal',
      protein: '5.4g',
      dietaryFiber: '2.8g',
      totalFat: '5.2g',
      transFat: '0.0g',
      carbohydrates: '18.6g',
      sodium: '32mg',
    },
    highlights: [
      'Zero White Sugar (100% Unrefined Jaggery)',
      'Rich in Plant Iron & Clean Protein',
      'Traditional Southern Kadalai Mittai Craft',
      'Sustained Midday Energy for Work & Study'
    ],
    image: '/src/assets/images/hero_sashri_bites_spread_1793366383501.jpg',
    shelfLife: '6 Months',
    isBestseller: false,
    isSampleEligible: true,
  },
  {
    id: 'tangy-peri-peri-makhana',
    name: 'Tangy Coastal Masala Makhana',
    tagline: 'Crisp roasted fox nuts with sun-dried Kashmiri chillies, tangy amchur, and roasted cumin',
    category: 'makhana',
    categoryLabel: 'Spiced Makhana',
    description: 'For lovers of spicy, zesty Indian teatime snacks. Popped lotus seeds coated with a tantalizing spice rub made of mild Kashmiri red chilli, dry mango powder, toasted cumin, and rock salt. Satisfies craving for chatpata flavor without guilt.',
    fullStory: 'Carefully roasted in hot air roasters to retain crispiness in all weather conditions, this variant combines the irresistible tang of street-style chaat spices with the wholesome purity of fox nuts.',
    ingredients: [
      'Popped Lotus Seeds 89%',
      'Cold-Pressed Rice Bran Oil (Mist) 4.5%',
      'Spices & Condiments 5.5% (Kashmiri Chilli, Cumin, Amchur, Coriander, Black Salt)',
      'Natural Citric Acid from Lemon Peel 1.0%'
    ],
    packSizes: [
      { weight: '50g', priceINR: 85, wholesaleEstimateINR: 52, perPackDesc: 'Single pouch' },
      { weight: '120g', priceINR: 185, wholesaleEstimateINR: 115, perPackDesc: 'Resealable pouch' },
    ],
    nutrition: {
      servingSize: '30g',
      energyKcal: '121 kcal',
      protein: '3.1g',
      dietaryFiber: '2.0g',
      totalFat: '3.8g',
      transFat: '0.0g',
      carbohydrates: '19.1g',
      sodium: '158mg',
    },
    highlights: [
      'Chatpata Zesty Indian Teatime Flavor',
      'Low Sodium Formula',
      '100% Roasted, Never Fried',
      'No Synthetic Colors or MSG'
    ],
    image: '/src/assets/images/product_spiced_makhana_1793366385663.jpg',
    shelfLife: '9 Months',
    isBestseller: false,
    isSampleEligible: true,
  },
  {
    id: 'purple-yam-tapioca-crisps',
    name: 'Vacuum-Crisped Purple Yam & Tapioca',
    tagline: 'Artisanal root veggie medley with vibrant purple sweet potato and Salem tapioca',
    category: 'crisps',
    categoryLabel: 'Vacuum Crisps',
    description: 'A striking blend of natural purple yam and GI-tagged Salem tapioca roots, sliced thin and vacuum-crisped to seal in their vivid botanical colors and earthy sweetness. Lightly sprinkled with rock salt and crushed black pepper.',
    fullStory: 'Tapioca and tubers are traditional staple roots of Southern India. By employing clean vacuum-frying technology, we preserve the vibrant antioxidant anthocyanins in purple yam while reducing fat content compared to conventional street-side tapioca chips.',
    ingredients: [
      'Farm Fresh Purple Yam 48%',
      'Salem Tapioca Roots 42%',
      'Refined Coconut Oil (Vacuum-fry medium) 8%',
      'Rock Salt & Crushed Black Pepper 2%'
    ],
    packSizes: [
      { weight: '75g', priceINR: 95, wholesaleEstimateINR: 59, perPackDesc: 'Snack pack' },
      { weight: '160g', priceINR: 185, wholesaleEstimateINR: 115, perPackDesc: 'Value pack' },
    ],
    nutrition: {
      servingSize: '30g',
      energyKcal: '138 kcal',
      protein: '1.4g',
      dietaryFiber: '3.6g',
      totalFat: '4.6g',
      transFat: '0.0g',
      carbohydrates: '22.4g',
      sodium: '105mg',
    },
    highlights: [
      'Vibrant Natural Plant Pigments',
      'Salem Tapioca & Coastal Purple Yam',
      'Non-Greasy Dry Crisp Texture',
      'No Added Preservatives or Flavors'
    ],
    image: '/src/assets/images/product_vacuum_fried_crisps_1793366386877.jpg',
    shelfLife: '6 Months',
    isBestseller: false,
    isSampleEligible: true,
  }
];

export const BRAND_STATS = [
  { value: '100%', label: 'Roasted & Non-Fried Range', desc: 'Crafted without deep frying' },
  { value: '0g', label: 'Trans Fat & Hydrogenated Oil', desc: 'Heart-mindful formulations' },
  { value: '6-9', label: 'Months Guaranteed Shelf Life', desc: 'Nitrogen-flushed freshness' },
  { value: '25-35%', label: 'Distributor Profit Margins', desc: 'High retail turnover velocity' },
];

export const DISTRIBUTOR_BENEFITS = [
  {
    title: 'Attractive Profit Margins',
    description: 'Up to 30–35% wholesale margin for Super Stockists and 22–26% for retail partners, ensuring sustainable, repeatable profitability.',
  },
  {
    title: 'Modern Retail Shelf Presence',
    description: 'Matte premium pouches with tactile kraft aesthetics that stand out in modern trade supermarkets, organic marts, and airport retail.',
  },
  {
    title: 'Free Counter Display Dispensers',
    description: 'Sturdy wooden-finish counter-top displays and clip-strips provided with opening wholesale orders to maximize impulse trial purchases.',
  },
  {
    title: 'Reliable Pan-India Supply Chain',
    description: 'Direct dispatch from our Ramanathapuram processing facility with tracked freight logistics across South India and major metros.',
  },
  {
    title: 'Marketing & Sampling Kits',
    description: 'Complimentary tasting sample pouches provided for your in-store sales staff and customer trial activations.',
  },
  {
    title: 'Flexible Order Batches',
    description: 'Accessible minimum order quantities (MOQs) starting from just ₹25,000 for new regional distributors and retail chains.',
  }
];
