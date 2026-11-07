import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function FAQSection() {
  // Independent open state allows smooth interaction across 2 columns
  const [openIndices, setOpenIndices] = useState([0])

  const faqs = [
    {
      q: 'What is Kaju Katli?',
      a: 'Kaju Katli is a traditional Indian sweet made primarily from finely ground cashews and sugar. It is loved for its smooth texture, rich cashew flavour, and signature diamond shape.',
    },
    {
      q: 'What ingredients are used in your Kaju Katli?',
      a: 'Our Kaju Katli is made with cashews, sugar, and other ingredients as specified on the product label. Please check the packaging for the complete ingredient and allergen information.',
    },
    {
      q: 'Is Kaju Katli suitable for vegetarians?',
      a: 'Kaju Katli is generally a vegetarian sweet. Please check the specific product label for ingredient details and dietary suitability.',
    },
    {
      q: 'Does Kaju Katli contain nuts?',
      a: 'Yes. Cashews are the main ingredient. It is not suitable for people with a cashew allergy. Check the product label for additional allergen information.',
    },
    {
      q: 'How should I store Kaju Katli?',
      a: 'Store Kaju Katli according to the instructions printed on its packaging. Keep it sealed and away from heat, direct sunlight, and moisture. Follow the stated use-by or best-before date.',
    },
    {
      q: 'How long does Kaju Katli stay fresh?',
      a: 'Shelf life depends on the recipe, packaging, and storage conditions. Please refer to the best-before date and storage instructions printed on the product packaging.',
    },
    {
      q: 'Do you offer delivery?',
      a: 'Delivery availability depends on the locations and shipping options supported by our store. Please check the delivery information at checkout or contact our team for assistance.',
    },
    {
      q: 'Can I order Kaju Katli in bulk for weddings or corporate gifting?',
      a: 'We can present bulk and gifting enquiries through a dedicated contact option. Customers should contact our team to confirm available quantities, pricing, packaging options, and delivery timelines.',
    },
    {
      q: 'Do you offer customised gift packaging?',
      a: 'Gift packaging and customisation depend on the options currently available. Contact our team to discuss your gifting requirements.',
    },
    {
      q: 'How can I contact you for help with an order?',
      a: 'Customers can contact us through the contact details or enquiry form available on our website. For an existing order, include the order number when contacting the team.',
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <section
      id="faqs"
      className="py-2 md:py-3 bg-[#FAF7F2] border-t border-[#9E7422]/15 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#F7EEDB] rounded-full filter blur-3xl opacity-50 -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section (Centered container with max-width: 800px) */}
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
          {/* Subtitle kicker */}
          <span className="text-xs uppercase tracking-[0.25em] text-[#9E7422] font-semibold block mb-2">
            FREQUENTLY ASKED QUESTIONS
          </span>

          {/* Main Title in Title Case */}
          <h2 className="font-royal text-3xl sm:text-4xl font-bold text-[#2B1B12] leading-tight mb-3">
            Everything You Need To Know
          </h2>

          {/* Clear description text */}
          <p className="text-sm sm:text-base text-[#6B5E55] leading-relaxed">
            Everything you need to know about our handcrafted Kaju Katli, pure cashew ingredients, shelf life freshness, and customized gifting delivery.
          </p>
        </div>

        {/* 2-Column Accordion Grid (2 per row on both mobile and desktop) */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-5 items-start">
          {faqs.map((faq, idx) => {
            const isOpen = openIndices.includes(idx)
            return (
              <div
                key={idx}
                className={`bg-white rounded-lg border transition-all duration-300 self-start ${
                  isOpen
                    ? 'border-[#9E7422]/60 shadow-md ring-1 ring-[#9E7422]/15 -translate-y-0.5'
                    : 'border-[#9E7422]/20 hover:border-[#9E7422]/60 hover:shadow-sm hover:-translate-y-0.5'
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleFAQ(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    id={`faq-question-${idx}`}
                    className="w-full p-3 sm:p-5 flex items-start justify-between text-left gap-2 sm:gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9E7422] rounded-lg cursor-pointer"
                  >
                    <span className="font-royal text-xs sm:text-base font-semibold text-[#2B1B12] leading-snug">
                      {faq.q}
                    </span>

                    {/* Sleek, thin gold circle badge with rotating icon */}
                    <span
                      className={`w-5 h-5 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 mt-0.5 ${
                        isOpen
                          ? 'border-[#9E7422] bg-[#9E7422] text-white rotate-180 shadow-2xs'
                          : 'border-[#9E7422]/30 bg-[#FAF7F2] text-[#9E7422] hover:border-[#9E7422] hover:bg-[#9E7422] hover:text-white'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[2]" />
                      ) : (
                        <Plus className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[2]" />
                      )}
                    </span>
                  </button>
                </h3>

                {/* Smooth Expandable Answer Area */}
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-3 pb-3 pt-2 sm:px-5 sm:pb-5 text-[11px] sm:text-sm text-[#6B5E55] leading-relaxed border-t border-[#9E7422]/10">
                    {faq.a}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
