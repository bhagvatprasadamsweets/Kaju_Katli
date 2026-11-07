import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SignatureKajuKatli from './components/SignatureKajuKatli'
import KajuKatliIngredients from './components/KajuKatliIngredients'
import WhatIsKajuKatli from './components/WhatIsKajuKatli'
import BannerShowcase from './components/BannerShowcase'
import WhyChooseUs from './components/WhyChooseUs'
import AboutSection from './components/AboutSection'
import InquirySection from './components/InquirySection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState('Signature Kaju Katri')

  const scrollToInquiry = (productName) => {
    if (productName) {
      setSelectedProduct(productName)
    }
    const inquiryEl = document.querySelector('#inquiry-form') || document.querySelector('#inquiry')
    if (inquiryEl) {
      inquiryEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#3D352E] selection:bg-[#9E7422]/20 selection:text-[#9E7422]">
      {/* 1. Navigation Header */}
      <Navbar onInquiryClick={() => scrollToInquiry()} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onInquiryClick={() => scrollToInquiry()} />

        {/* 2.1 Royal Delicacies Banner Showcase */}
        <BannerShowcase onInquiryClick={() => scrollToInquiry('Royal Delicacies Gift Box')} />

        {/* 2.5 Signature Kaju Katli Section */}
        <SignatureKajuKatli onInquiryClick={(pName) => scrollToInquiry(pName)} />

        {/* 3. What Is Kaju Katli? Section */}
        <WhatIsKajuKatli />

        {/* 3.5 Simple Ingredients, Sweet Perfection (Kaju Katli Ingredients) Section */}
        <KajuKatliIngredients />

        {/* 4. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. Heritage & About Section */}
        <AboutSection onInquiryClick={() => scrollToInquiry()} />

        {/* 7. Frequently Asked Questions */}
        <FAQSection />

        {/* 8.5 Inquiry CTA & Interactive Form */}
        <InquirySection
          selectedProduct={selectedProduct}
          onResetProduct={() => setSelectedProduct('Signature Kaju Katri')}
        />
      </main>

      {/* 9. Footer */}
      <Footer onInquiryClick={(pName) => scrollToInquiry(pName)} />

      {/* 10. Floating Bottom-Right WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  )
}
