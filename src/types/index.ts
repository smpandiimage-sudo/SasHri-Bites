export type ProductCategory = 'all' | 'makhana' | 'millets' | 'crisps' | 'clusters';

export interface PackSize {
  weight: string;
  priceINR: number;
  wholesaleEstimateINR?: number;
  perPackDesc: string;
}

export interface NutritionalInfo {
  servingSize: string;
  energyKcal: string;
  protein: string;
  dietaryFiber: string;
  totalFat: string;
  transFat: string;
  carbohydrates: string;
  sodium: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'makhana' | 'millets' | 'crisps' | 'clusters';
  categoryLabel: string;
  description: string;
  fullStory: string;
  ingredients: string[];
  packSizes: PackSize[];
  nutrition: NutritionalInfo;
  highlights: string[];
  image: string;
  shelfLife: string;
  isBestseller?: boolean;
  isSampleEligible?: boolean;
}

export interface CustomerEnquiry {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  enquiryType: 'retail_pack' | 'distributor_dealership' | 'sample_kit' | 'corporate_order';
  productInterest?: string;
  message: string;
}

export interface DistributorApplication {
  businessName: string;
  contactPerson: string;
  phone: string;
  email: string;
  businessType: 'retail_store' | 'supermarket' | 'district_distributor' | 'super_stockist' | 'online_reseller';
  city: string;
  state: string;
  pincode: string;
  currentExperienceYears: string;
  monthlyTargetBudget: string;
  gstNumber?: string;
  message: string;
}

export interface SampleKitRequest {
  businessName: string;
  contactPerson: string;
  phone: string;
  shippingAddress: string;
  city: string;
  state: string;
  pincode: string;
  preferredSnacks: string[];
}
