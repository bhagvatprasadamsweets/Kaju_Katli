import React from 'react'
import { UtensilsCrossed, Shield, Gift, HeartHandshake, CheckCircle2 } from 'lucide-react'

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: UtensilsCrossed,
      title: 'Traditional Taste',
      description:
        'Enjoy the classic flavour of Kaju Katri, a favourite for celebrations and gifting.',
      label: 'A Taste of Tradition',
    },
    {
      icon: Shield,
      title: 'Quality Ingredients',
      description:
        'We focus on ingredient quality and a delightful taste in every bite.',
      label: 'Quality Focused',
    },
    {
      icon: Gift,
      title: 'Elegant Presentation',
      description:
        'Beautifully presented Kaju Katri, ideal for sharing with family, friends, and loved ones.',
      label: 'Made for Gifting',
    },
    {
      icon: HeartHandshake,
      title: 'Gifting & Bulk Orders',
      description:
        'Explore options for weddings, festivals, corporate gifting, and family celebrations.',
      label: 'For Every Occasion',
    },
  ]

  return (
    <section id="why-us" className="py-2 md:py-3 bg-[#FFFDF9] border-y border-[#9E7422]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          <h2 className="font-royal text-2xl sm:text-3xl md:text-4xl font-bold text-[#9E7422]">
            Why Choose Our Kaju Katli?
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E51] max-w-2xl mx-auto leading-relaxed">
            We bring together authentic cashew purity, traditional Indian craftsmanship, and royal presentation for weddings, festivals, and corporate gifting.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="bg-[#FAF7F2] rounded-2xl p-3.5 sm:p-6 border border-[#9E7422]/20 shadow-xs hover:border-[#9E7422]/50 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <div className="space-y-2.5 sm:space-y-4">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-[#F7EEDB] flex items-center justify-center text-[#9E7422] group-hover:bg-[#9E7422] group-hover:text-white transition-all duration-300 shadow-xs">
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="font-royal text-sm sm:text-lg font-bold text-[#9E7422] group-hover:text-[#866118] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-sm text-[#5C5248] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2.5 sm:pt-4 mt-2.5 sm:mt-4 border-t border-[#9E7422]/10 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-[#9E7422]">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#9E7422] shrink-0" />
                  <span className="truncate">{item.label}</span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
