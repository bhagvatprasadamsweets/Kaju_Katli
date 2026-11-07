import React from 'react'
import { Briefcase, Building2, Gift, Send, CheckCircle2, CalendarDays } from 'lucide-react'
import corporateImg from '../assets/corporate_gifting_showcase.jpg'

export default function CorporateGifting({ onInquiryClick }) {
  const corporateBenefits = [
    {
      title: 'Bespoke Co-Branding',
      desc: 'Add your company logo, custom greeting sleeve, and personalized festive message cards.',
    },
    {
      title: 'Tiered Bulk Pricing',
      desc: 'Special quotation tiers for orders starting from 25 boxes up to 5,000+ corporate gift suites.',
    },
    {
      title: 'Assured Freshness & Dispatch',
      desc: 'Freshly prepared right before scheduled dispatch dates with secure temperature-safe packaging.',
    },
    {
      title: 'Single & Multi-Address Delivery Support',
      desc: 'Coordination for bulk office shipments or individual dispatch to clients and remote teams.',
    },
  ]

  return (
    <section id="gifting" className="py-8 md:py-10 bg-[#FFFDF9] border-t border-[#9E7422]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          <h2 className="font-royal text-2xl sm:text-3xl md:text-4xl font-bold text-[#9E7422]">
            Distinguished Sweets for Valued Partnerships
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E51]">
            Elevate Diwali, New Year, milestone celebrations, and annual conferences with handcrafted Kaju Katri hampers presented in executive gold-embossed boxes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Corporate Gifting Showcase Visual */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#9E7422]/20 shadow-xl bg-white p-2">
              <img
                src={corporateImg}
                alt="Executive Indian sweet boxes and hampers for corporate gifting"
                className="w-full h-auto object-cover rounded-xl"
                loading="lazy"
              />
              
              <div className="absolute top-6 left-6 bg-[#FAF7F2]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#9E7422]/20 text-xs font-bold text-[#9E7422] shadow-sm flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5" />
                <span>Enterprise & Bulk Orders</span>
              </div>
            </div>
          </div>

          {/* Corporate Details & Features */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-royal text-xl sm:text-2xl font-bold text-[#3D352E]">
              Customized Bulk Hampers Crafted to Reflect Your Brand Prestige
            </h3>

            <p className="text-sm text-[#5C5248] leading-relaxed">
              Whether rewarding high-performing employees, thanking key enterprise clients, or honoring wedding guests, our executive sweet collections deliver an unforgettable royal impression.
            </p>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 pt-2">
              {corporateBenefits.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-[#FAF7F2] border border-[#9E7422]/15">
                  <div className="p-1 sm:p-1.5 rounded-lg bg-[#F7EEDB] text-[#9E7422] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm text-[#3D352E] leading-snug">{item.title}</h4>
                    <p className="text-[11px] sm:text-xs text-[#6B5E51] mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}


