import { ArrowRight, ExternalLink } from 'lucide-react'
import signatureImg from '../assets/signature_kaju_katli_box.jpg'

export default function SignatureKajuKatli({ onInquiryClick }) {
  return (
    <section id="signature-katli" className="py-2 md:py-3 bg-[#FAF7F2] border-t border-[#9E7422]/15 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-[#F7EEDB] rounded-full filter blur-3xl opacity-40 -z-10 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#F5EADA] rounded-full filter blur-3xl opacity-40 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Product Image */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none group">
              {/* Subtle royal ambient glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#9E7422]/20 via-[#E2C275]/25 to-[#9E7422]/15 blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[#9E7422]/25 shadow-xl bg-white p-2 sm:p-2.5">
                <div className="relative rounded-xl overflow-hidden aspect-square bg-[#FAF7F2]">
                  <img
                    src={signatureImg}
                    alt="Signature Kaju Katli Gift Box - Premium Cashew Barfi for Festive Gifting & Celebrations"
                    width="600"
                    height="600"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">

            {/* Main Heading */}
            <h2 className="font-royal text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#9E7422] leading-tight tracking-tight">
              Signature Kaju Katli
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-[#5C5248] leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Discover the classic taste of Kaju Katli, a traditional Indian sweet perfect for festivals, celebrations, and gifting. Made for moments worth celebrating, its delightful flavour makes every occasion feel special. Whether you are sharing happiness with family and friends, celebrating a festival, or choosing a thoughtful gift for your loved ones, Kaju Katli brings sweetness to every memorable moment.
            </p>

            {/* Three Short Highlights */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center lg:items-start justify-center lg:justify-start gap-2.5 pt-1 pb-1">
              {[
                'A Timeless Indian Favourite',
                'Perfect for Celebrations & Gifting',
                'Sweet Moments Worth Sharing',
              ].map((highlight, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/85 border border-[#9E7422]/20 text-xs sm:text-sm font-semibold text-[#3D352E] shadow-2xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9E7422] shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={() => onInquiryClick ? onInquiryClick('Signature Kaju Katri') : null}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#9E7422] hover:bg-[#866118] text-white px-7 py-3.5 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Send Inquiry</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="https://www.bhagvatprasadam.com/products/kaju-katli-cashew-barfi-premium-kaju-katli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order Signature Kaju Katli online (opens in new tab)"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#9E7422] border-2 border-[#9E7422] hover:bg-[#9E7422] hover:text-white px-7 py-3.5 rounded-full text-base font-semibold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Order Online</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
