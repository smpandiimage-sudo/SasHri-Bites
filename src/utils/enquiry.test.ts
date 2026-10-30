import test from 'node:test';
import assert from 'node:assert/strict';
import {
  isValidIndianPhone,
  isValidEmail,
  normalizeIndianPhone,
  validateEnquiryForm,
  validateDistributorForm,
  generateWhatsAppLink,
  formatCurrencyINR,
  OFFICIAL_PHONE_RAW,
} from './enquiry';

test('normalizeIndianPhone handles various prefixes', () => {
  assert.equal(normalizeIndianPhone('9677632378'), '9677632378');
  assert.equal(normalizeIndianPhone('+91 96776 32378'), '9677632378');
  assert.equal(normalizeIndianPhone('09677632378'), '9677632378');
  assert.equal(normalizeIndianPhone('919677632378'), '9677632378');
});

test('isValidIndianPhone accurately validates Indian mobile formats', () => {
  assert.equal(isValidIndianPhone('9677632378'), true);
  assert.equal(isValidIndianPhone('+91 96776 32378'), true);
  assert.equal(isValidIndianPhone('8765432109'), true);
  assert.equal(isValidIndianPhone('7123456789'), true);
  assert.equal(isValidIndianPhone('6123456789'), true);
  // Invalid numbers
  assert.equal(isValidIndianPhone('1234567890'), false);
  assert.equal(isValidIndianPhone('98765'), false);
  assert.equal(isValidIndianPhone(''), false);
});

test('isValidEmail validates standard email strings', () => {
  assert.equal(isValidEmail('distributor@sashribites.com'), true);
  assert.equal(isValidEmail('buyer.store@gmail.co.in'), true);
  assert.equal(isValidEmail('invalid-email'), false);
  assert.equal(isValidEmail('missing-domain@'), false);
});

test('validateEnquiryForm rejects empty and accepts well-formed data', () => {
  const emptyRes = validateEnquiryForm({});
  assert.equal(emptyRes.isValid, false);
  assert.ok(emptyRes.errors.fullName);
  assert.ok(emptyRes.errors.phone);
  assert.ok(emptyRes.errors.message);

  const validRes = validateEnquiryForm({
    fullName: 'Praveen Kumar',
    phone: '9677632378',
    email: 'praveen@gmail.com',
    message: 'Interested in stocking SasHri Bites snacks in Madurai retail store.',
  });
  assert.equal(validRes.isValid, true);
  assert.equal(Object.keys(validRes.errors).length, 0);
});

test('validateDistributorForm enforces business requirements', () => {
  const invalid = validateDistributorForm({
    businessName: '',
    contactPerson: '',
    phone: '123',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.businessName);
  assert.ok(invalid.errors.pincode === undefined); // pincode is optional unless provided

  const valid = validateDistributorForm({
    businessName: 'Coastal Organics Mart',
    contactPerson: 'Murugan R',
    phone: '9840123456',
    city: 'Ramanathapuram',
    state: 'Tamil Nadu',
    pincode: '623501',
    monthlyTargetBudget: '₹50,000 - ₹1,50,000 (District Retailer)',
  });
  assert.equal(valid.isValid, true);
});

test('generateWhatsAppLink encodes message and targets official number', () => {
  const link = generateWhatsAppLink('Hello SasHri Team');
  assert.ok(link.startsWith(`https://wa.me/${OFFICIAL_PHONE_RAW}?text=`));
  assert.ok(link.includes('Hello%20SasHri%20Team'));
});

test('formatCurrencyINR formats Indian currency properly', () => {
  const formatted = formatCurrencyINR(199);
  assert.ok(formatted.includes('199'));
});
