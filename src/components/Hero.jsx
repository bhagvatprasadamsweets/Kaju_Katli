import React from 'react'
import { ArrowRight, ShieldCheck, Gift, Award } from 'lucide-react'
import HeroAnimation from './HeroAnimation'

export default function Hero({ onInquiryClick }) {
  return (
    <section id="hero" className="relative overflow-hidden pt-2 sm:pt-3 pb-3 md:pb-4">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#F7EEDB] rounded-full filter blur-3xl opacity-60 -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F5EADA] rounded-full filter blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Main Headline */}

            {/* Main Headline */}
            <h1 className="font-royal text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#9E7422] leading-tight tracking-tight">
              Pure Kaju Katli. <br />
              <span className="text-[#3D352E]">Handcrafted Sweet Perfection.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#5C5248] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Experience the rich taste of premium Kaju Katli, handcrafted with select whole cashews and traditional sweetness in Surat, Gujarat. Perfect for festive celebrations, wedding sweet gifting, and corporate hampers.
            </p>

            {/* Call To Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onInquiryClick()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#9E7422] hover:bg-[#866118] text-white px-8 py-3.5 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Send Inquiry</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Value Badges */}
            <div className="pt-6 grid grid-cols-3 gap-3 sm:gap-6 border-t border-[#9E7422]/15 text-left">
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-[#F7EEDB] text-[#9E7422] shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-xs sm:text-sm text-[#3D352E]">100% Cashew</p>
                  <p className="text-[11px] sm:text-xs text-[#6B5E51]">Zero fillers or flour</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-[#F7EEDB] text-[#9E7422] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-xs sm:text-sm text-[#3D352E]">Fresh Daily</p>
                  <p className="text-[11px] sm:text-xs text-[#6B5E51]">Handmade batches</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-[#F7EEDB] text-[#9E7422] shrink-0">
                  <Gift className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-xs sm:text-sm text-[#3D352E]">Custom Boxes</p>
                  <p className="text-[11px] sm:text-xs text-[#6B5E51]">Corporate & festive</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right 3D Animated Showcase Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroAnimation />
          </div>

        </div>
      </div>
    </section>
  )
}
