import React, { useState, useEffect, useRef } from 'react'
import { Leaf, Landmark, Gem } from 'lucide-react'
import whatIsKatliImg from '../assets/what_is_kaju_katli.jpg'

export default function WhatIsKajuKatli() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Leaf,
      title: 'Premium Cashews',
      description: 'Made with finely ground cashews for a naturally rich, nutty flavour.',
    },
    {
      icon: Landmark,
      title: 'Timeless Tradition',
      description: 'A beloved Indian delicacy enjoyed during festivals, weddings, and special celebrations.',
    },
    {
      icon: Gem,
      title: 'Elegant Silver Varak',
      description: 'Traditionally finished with delicate edible silver leaf for a refined, royal appearance.',
    },
  ]

  return (
    <section
      id="what-is-kaju-katli"
      ref={sectionRef}
      className="py-2 md:py-3 bg-[#FFFDF9] border-t border-[#9E7422]/15 relative overflow-hidden"
    >
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#F7EEDB] rounded-full filter blur-3xl opacity-50 -z-10 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F5EADA] rounded-full filter blur-3xl opacity-40 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column — Product Visual */}
          <div
            className={`lg:col-span-6 flex justify-center order-2 lg:order-1 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative max-w-lg w-full group">
              
              {/* Outer decorative royal frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#9E7422]/20 via-[#E2C275]/30 to-[#9E7422]/15 blur-lg opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden border border-[#9E7422]/20 shadow-2xl bg-white p-2">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#FAF7F2]">
                  <img
                    src={whatIsKatliImg}
                    alt="Traditional diamond-shaped Kaju Katli on ivory porcelain plate with edible silver varak"
                    width="600"
                    height="450"
                    className="w-full h-full object-cover transform group-hover:scale-104 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Silver Varak Shimmer Wave */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="varak-shimmer-sweep absolute -inset-full w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent transform -rotate-45" />
                  </div>

                  {/* Soft bottom vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3D352E]/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>

          {/* Right Column — Content */}
          <div
            className={`lg:col-span-6 space-y-6 order-1 lg:order-2 text-center lg:text-left transition-all duration-1000 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Main Heading */}
            <h2 className="font-royal text-3xl sm:text-4xl lg:text-5xl font-bold text-[#9E7422] leading-tight">
              What Is Kaju Katli?
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#5C5248] leading-relaxed">
              Kaju Katli is one of India’s most cherished traditional sweets, celebrated for its delicate diamond shape, rich cashew flavour, and smooth, melt-in-your-mouth texture. Crafted from finely ground cashews and sugar, each piece represents a beautiful blend of heritage, craftsmanship, and indulgence.
            </p>

            {/* 3 Premium Feature Highlights */}
            <div className="space-y-4 pt-2 text-left">
              {features.map((feat, idx) => {
                const Icon = feat.icon
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#9E7422]/15 hover:border-[#9E7422]/40 transition-colors duration-200"
                  >
                    <div className="p-2 rounded-lg bg-[#F7EEDB] text-[#9E7422] shrink-0 mt-0.5 shadow-2xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base text-[#3D352E]">
                        {feat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#6B5E51] mt-0.5 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>

        </div>
      </div>

      {/* Shimmer CSS */}
      <style>{`
        @keyframes varakSweep {
          0% {
            transform: translateX(-160%) skewX(-30deg);
            opacity: 0;
          }
          15% {
            opacity: 0.45;
          }
          35% {
            transform: translateX(180%) skewX(-30deg);
            opacity: 0;
          }
          100% {
            transform: translateX(180%) skewX(-30deg);
            opacity: 0;
          }
        }

        .varak-shimmer-sweep {
          animation: varakSweep 6s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .varak-shimmer-sweep {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
