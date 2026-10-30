import React, { useState, useEffect } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Product } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductDetailModal } from './components/ProductDetailModal';
import { WhySasHri } from './components/WhySasHri';
import { DistributorSection } from './components/DistributorSection';
import { AboutUs } from './components/AboutUs';
import { ContactSection } from './components/ContactSection';
import { SampleKitModal } from './components/SampleKitModal';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [sampleModalOpen, setSampleModalOpen] = useState<boolean>(false);
  const [samplePreselect, setSamplePreselect] = useState<string | undefined>(undefined);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Handle active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['products', 'why-sashri', 'distributors', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenSampleModal = (productName?: string) => {
    setSamplePreselect(productName);
    setSampleModalOpen(true);
  };

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#19231D] selection:bg-[#2D5A27] selection:text-white pb-14 sm:pb-0">
      
      {/* 1. Header (Strict Top Bar Contract) */}
      <Header
        onOpenSampleModal={() => handleOpenSampleModal()}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onExploreProducts={() => handleScrollTo('products')}
          onOpenDistributor={() => handleScrollTo('distributors')}
        />

        {/* 3. Trust Statistics / KPI strip */}
        <TrustStats />

        {/* 4. Product Catalog */}
        <ProductCatalog
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onOpenSampleModal={() => handleOpenSampleModal()}
        />

        {/* 5. Why SasHri Bites */}
        <WhySasHri />

        {/* 6. Distributor & Retailer Partnership Hub */}
        <DistributorSection
          onOpenSampleModal={() => handleOpenSampleModal()}
        />

        {/* 7. About Us / Brand Origins */}
        <AboutUs />

        {/* 8. Contact Section (Direct Call, WhatsApp, Form, Map) */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer
        onOpenSampleModal={() => handleOpenSampleModal()}
      />

      {/* 10. Floating WhatsApp & Mobile Action Bar */}
      <FloatingActions
        onOpenSampleModal={() => handleOpenSampleModal()}
      />

      {/* 11. Product Quick Details Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestSample={(prodName) => handleOpenSampleModal(prodName)}
      />

      {/* 12. Sample Kit Request Modal */}
      <SampleKitModal
        isOpen={sampleModalOpen}
        onClose={() => {
          setSampleModalOpen(false);
          setSamplePreselect(undefined);
        }}
        preselectedProduct={samplePreselect}
      />

      {/* Vercel Speed Insights */}
      <SpeedInsights />

    </div>
  );
}
