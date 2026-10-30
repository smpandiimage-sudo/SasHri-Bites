import { CustomerEnquiry, DistributorApplication } from '../types';

export const OFFICIAL_PHONE = '+91 96776 32378';
export const OFFICIAL_PHONE_RAW = '919677632378';
export const OFFICIAL_LOCATION = 'Ramanathapuram, Tamil Nadu, India';
export const OFFICIAL_PINCODE = '623501';

/**
 * Normalizes Indian mobile number to 10 digits
 */
export function normalizeIndianPhone(input: string): string {
  const digits = input.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) {
    return digits.slice(2);
  }
  if (digits.length === 11 && digits.startsWith('0')) {
    return digits.slice(1);
  }
  return digits;
}

/**
 * Validates 10-digit Indian mobile number
 */
export function isValidIndianPhone(input: string): boolean {
  const normalized = normalizeIndianPhone(input);
  return normalized.length === 10 && /^[6-9]\d{9}$/.test(normalized);
}

/**
 * Validates email address format
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/**
 * Formats amount into Indian Rupee string
 */
export function formatCurrencyINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Validates customer enquiry form fields
 */
export function validateEnquiryForm(data: Partial<CustomerEnquiry>): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (minimum 2 characters)';
  }

  if (!data.phone || !isValidIndianPhone(data.phone)) {
    errors.phone = 'Please enter a valid 10-digit Indian mobile number (e.g., 9876543210)';
  }

  if (data.email && !isValidEmail(data.email)) {
    errors.email = 'Please provide a valid email address';
  }

  if (!data.message || data.message.trim().length < 5) {
    errors.message = 'Please share a brief note or your requirements (at least 5 characters)';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validates distributor dealership application fields
 */
export function validateDistributorForm(data: Partial<DistributorApplication>): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.businessName || data.businessName.trim().length < 2) {
    errors.businessName = 'Please enter your store or firm name';
  }

  if (!data.contactPerson || data.contactPerson.trim().length < 2) {
    errors.contactPerson = 'Please enter the primary contact person name';
  }

  if (!data.phone || !isValidIndianPhone(data.phone)) {
    errors.phone = 'Please enter a valid 10-digit mobile number';
  }

  if (!data.city || data.city.trim().length < 2) {
    errors.city = 'Please specify your operating city/town';
  }

  if (!data.state || data.state.trim().length < 2) {
    errors.state = 'Please specify your state';
  }

  if (data.pincode && !/^\d{6}$/.test(data.pincode.trim())) {
    errors.pincode = 'Please enter a valid 6-digit postal PIN code';
  }

  if (!data.monthlyTargetBudget) {
    errors.monthlyTargetBudget = 'Please choose an estimated monthly purchase capacity';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Generates an official WhatsApp click-to-chat link
 */
export function generateWhatsAppLink(message: string, customPhone: string = OFFICIAL_PHONE_RAW): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${customPhone}?text=${encoded}`;
}

/**
 * Prepares formatted WhatsApp enquiry text for a specific product
 */
export function createProductWhatsAppMessage(productName: string, packSize: string, quantity: number = 1): string {
  return [
    `Hello SasHri Bites Team,`,
    ``,
    `I am interested in ordering/enquiring about:`,
    `Product: *${productName}*`,
    `Pack Size: *${packSize}*`,
    `Quantity: *${quantity} pack(s)*`,
    ``,
    `Please share pricing, delivery timeline, and availability for my location.`,
    `Thank you!`
  ].join('\n');
}

/**
 * Prepares formatted WhatsApp message for distributor partnership
 */
export function createDistributorWhatsAppMessage(app: Partial<DistributorApplication>): string {
  return [
    `Hello SasHri Bites Management,`,
    ``,
    `I would like to apply for a *Retailer / Distributor Partnership* in my territory:`,
    `Business Name: *${app.businessName || 'N/A'}*`,
    `Contact Person: *${app.contactPerson || 'N/A'}*`,
    `Mobile: *${app.phone || 'N/A'}*`,
    `Business Type: *${app.businessType || 'Retail / Wholesale'}*`,
    `Location: *${app.city || ''}, ${app.state || ''} (PIN: ${app.pincode || 'N/A'})*`,
    `Expected Monthly Volume: *${app.monthlyTargetBudget || 'Standard Tier'}*`,
    app.message ? `Notes: ${app.message}` : '',
    ``,
    `Kindly send your wholesale product catalog, margin slabs, and sample kit details.`,
  ].filter(Boolean).join('\n');
}
