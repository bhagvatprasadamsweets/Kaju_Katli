import React, { useState, useEffect, useRef } from 'react'
import {
  Sparkles,
  Gift,
  ArrowRight,
  Leaf,
  Landmark,
  Building2,
  Truck,
} from 'lucide-react'
import heroImg from '../assets/hero_kaju_katri_platter.jpg'
import festivalImg from '../assets/kaju_katri_golden_tray.jpg'
import weddingImg from '../assets/product_gift_box.jpg'
import corporateImg from '../assets/corporate_gifting_showcase.jpg'

export default function AboutSection({ onInquiryClick }) {
  const [isSpecialVisible, setIsSpecialVisible] = useState(false)
  const specialSectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSpecialVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (specialSectionRef.current) {
      observer.observe(specialSectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const specialFeatures = [
    {
      icon: Leaf,
      title: 'Premium Quality Cashews',
      description:
        'Made with carefully selected cashews for a rich, smooth texture and authentic Kaju Katli taste.',
    },
    {
      icon: Landmark,
      title: 'Authentic Traditional Recipe',
      description:
        'Inspired by traditional Indian sweet-making techniques and timeless culinary heritage.',
    },
    {
      icon: Sparkles,
      title: 'Freshly Crafted with Care',
      description:
        'Every batch is prepared with attention to freshness, quality, and consistent taste.',
    },
    {
      icon: Gift,
      title: 'Elegant Royal Packaging',
      description:
        'Beautifully presented in premium gift boxes for festivals, weddings, and special occasions.',
    },
    {
      icon: Building2,
      title: 'Customized Corporate Gifting',
      description:
        'Personalized gift boxes with company branding and greeting messages for clients, employees, and business partners.',
    },
    {
      icon: Truck,
      title: 'Reliable Bulk Order Service',
      description:
        'Convenient bulk ordering and coordinated delivery support for corporate events and festive gifting.',
    },
  ]

  const occasions = [
    {
      title: 'Corporate Gifting',
      subtitle: 'Company, Employees & Clients',
      image: corporateImg,
      description:
        'Executive sweet hampers and gift boxes designed to show gratitude and prestige to valuable clients and teams.',
      inquiryType: 'Corporate Gifting',
    },
    {
      title: 'Wedding / Festive Celebration',
      subtitle: 'Weddings, Diwali & Auspicious Festivals',
      image: festivalImg,
      description:
        'Opulent traditional Kaju Katri arrangements and silver vark platters tailored for wedding invitations and festive joy.',
      inquiryType: 'Wedding / Festive Celebration',
    },
    {
      title: 'Retail / Distribution Inquiry',
      subtitle: 'Shopkeepers, Retailers & Distributors',
      image: heroImg,
      description:
        'Consistent quality supply with hygienic small-batch production for sweet boutiques, franchise counters, and food retail.',
      inquiryType: 'Retail / Distribution Inquiry',
    },
    {
      title: 'Personal / Family Bulk Order',
      subtitle: 'Family Functions & Milestone Events',
      image: weddingImg,
      description:
        'Handcrafted fresh batches in generous quantities for housewarmings, baby showers, engagements, and family gatherings.',
      inquiryType: 'Personal / Family Bulk Order',
    },
  ]

  return (
    <section id="about" className="bg-[#FFFDF9] border-t border-[#9E7422]/15">
      {/* 1. What Makes Us Special Section */}
      <div
        ref={specialSectionRef}
        className="py-2 md:py-3 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div
            className={`text-center max-w-3xl mx-auto space-y-3 mb-8 md:mb-10 transition-all duration-700 ${
              isSpecialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h2 className="font-royal text-2xl sm:text-3xl md:text-4xl font-bold text-[#9E7422] leading-tight">
              The Royal Difference in Every Bite
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#6B5E51] max-w-2xl mx-auto leading-relaxed">
              Experience the perfect blend of traditional Indian craftsmanship, premium ingredients, and royal presentation. Every piece of our Kaju Katli is thoughtfully prepared to make your celebrations and gifting moments truly special.
            </p>
          </div>

          {/* 6 Feature Cards Grid (3 on desktop, 2 on tablet, 2 on mobile) */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {specialFeatures.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  style={{
                    transitionDelay: `${idx * 100}ms`,
                  }}
                  className={`bg-[#FAF7F2] rounded-2xl p-3.5 sm:p-7 border border-[#9E7422]/20 shadow-xs hover:border-[#9E7422]/50 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group h-full ${
                    isSpecialVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-6'
                  }`}
                >
                  <div className="space-y-2.5 sm:space-y-4">
                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-[#F7EEDB] flex items-center justify-center text-[#9E7422] group-hover:bg-[#9E7422] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-4 h-4 sm:w-6 sm:h-6 stroke-[1.8]" />
                    </div>
                    <h3 className="font-royal text-sm sm:text-lg font-bold text-[#3D352E] group-hover:text-[#9E7422] transition-colors duration-200 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-sm text-[#5C5248] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>

      {/* 3. Made for Every Occasion (Gifting & Celebrations) */}
      <div id="gifting" className="py-2 md:py-3 bg-[#FAF7F2] border-t border-[#9E7422]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-8">
            <span className="text-[11px] uppercase tracking-widest text-[#9E7422] font-bold">
              Celebrations & Gifting
            </span>
            <h2 className="font-royal text-2xl sm:text-3xl font-bold text-[#9E7422]">
              Made for Every Occasion
            </h2>
            <p className="text-xs sm:text-sm text-[#6B5E51]">
              From intimate family festivities to grand corporate milestones, our Kaju Katli brings classic elegance to your celebrations.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {occasions.map((occ, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-[#9E7422]/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Visual Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F7EEDB]/30">
                  <img
                    src={occ.image}
                    alt={`${occ.title} - ${occ.subtitle}`}
                    width="400"
                    height="300"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
                  <div className="space-y-1">
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold text-[#6B5E51] block truncate">
                      {occ.subtitle}
                    </span>
                    <h3 className="font-royal text-xs sm:text-base font-bold text-[#3D352E] group-hover:text-[#9E7422] transition-colors leading-snug">
                      {occ.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#5C5248] leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {occ.description}
                    </p>
                  </div>

                  <div className="pt-2 sm:pt-3 border-t border-[#9E7422]/10">
                    <button
                      onClick={() => onInquiryClick(occ.inquiryType)}
                      aria-label={`Inquire about ${occ.title}`}
                      className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-[#9E7422] hover:text-[#866118] transition-colors cursor-pointer"
                    >
                      <span className="truncate">Inquire</span>
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  )
}
