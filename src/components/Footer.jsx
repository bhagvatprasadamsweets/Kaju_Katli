import React from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import brandLogo from '../assets/kajukatli_royal_logo.png'
import platingIngredientsImg from '../assets/Kaju Katli Plating and Ingredients.png'

export default function Footer({ onInquiryClick }) {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Culinary Heritage', href: '#about' },
    { name: 'Gifting & Bulk', href: '#gifting' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Inquiry Portal', href: '#inquiry-form' },
  ]

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id="contact" className="w-full relative overflow-hidden bg-[#FAF6F0] border-t border-amber-900/10">
      {/* Centered Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-14 relative z-10">
        
        {/* 3-Column Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1 — Brand (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="flex items-center">
              <img
                src={brandLogo}
                alt="Shahi Katli - Royal Indian Sweets & Kaju Katli Artisans in Surat, Gujarat"
                width="180"
                height="64"
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-xs"
              />
            </div>

            <p className="text-sm text-stone-600 leading-relaxed max-w-md">
              Crafting traditional Indian diamond-cut Kaju Katli with pure whole cashews, natural ingredients, and opulent presentation for family celebrations, wedding sweet gifting, and corporate hospitality in Surat, Gujarat.
            </p>

            {/* Send Bulk Inquiry Button */}
            <div className="pt-1">
              <button
                onClick={() => (onInquiryClick ? onInquiryClick() : null)}
                className="inline-flex items-center justify-center gap-1.5 bg-[#9E7422] hover:bg-[#866118] text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Send Bulk Inquiry ↗</span>
              </button>
            </div>
          </div>

          {/* Column 2 — Navigation (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h3 className="font-royal text-sm font-bold text-amber-950 uppercase tracking-wider">
              NAVIGATION
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="text-stone-600 hover:text-[#9E7422] hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Workshop & Contact Details (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <h3 className="font-royal text-sm font-bold text-amber-950 uppercase tracking-wider">
              ARTISAN WORKSHOP
            </h3>
            
            <div className="space-y-3.5 text-sm text-stone-600">
              {/* Workshop & Dispatch */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#9E7422] shrink-0 mt-1" />
                <span>
                  <strong className="text-stone-800 font-semibold block">Workshop & Dispatch:</strong>
                  <a
                    href="https://goo.gl/maps/VkN5zYqj6yp8YqZJ9"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Shahi Katli workshop location in Surat on Google Maps (opens in new tab)"
                    className="hover:text-[#9E7422] hover:underline transition-colors leading-snug block mt-0.5"
                  >
                    411–412, New Escon Plaza, Chhaprabhatha Road, Amroli, Surat, Gujarat – 394107
                  </a>
                </span>
              </div>

              {/* Phone Call */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#9E7422] shrink-0" />
                <span>
                  <strong className="text-stone-800 font-semibold">Phone Call:</strong>{' '}
                  <a href="tel:+918850011652" aria-label="Call Shahi Katli at +91-8850011652" className="hover:text-[#9E7422] hover:underline">
                    +91–8850011652
                  </a>
                </span>
              </div>

              {/* Written Inquiries */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#9E7422] shrink-0" />
                <span>
                  <strong className="text-stone-800 font-semibold">Written Inquiries:</strong>{' '}
                  <a href="mailto:hello@kaju_katli.in" aria-label="Email Shahi Katli at hello@kaju_katli.in" className="hover:text-[#9E7422] hover:underline">
                    hello@kaju_katli.in
                  </a>
                </span>
              </div>

              {/* Desk Timings */}
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#9E7422] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-stone-800 font-semibold block">Desk Timings:</strong>
                  <span className="text-stone-600 block mt-0.5">Mon to Sun: 9:00 AM to 9:00 PM IST</span>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Kaju Katli Plating and Ingredients Panoramic Image at Footer Bottom */}
        <div className="mt-6 sm:mt-8 flex justify-center overflow-hidden">
          <img
            src={platingIngredientsImg}
            alt="Handcrafted Kaju Katli Platter Arrangement with Whole Cashews, Saffron, and Silver Vark"
            width="1200"
            height="320"
            className="w-full h-auto object-contain mix-blend-multiply drop-shadow-xs transition-transform duration-500 hover:scale-[1.01]"
            loading="lazy"
          />
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-amber-900/10 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-stone-600 gap-4 text-center md:text-left">
          <p className="font-medium">
            @2026 by kaju katli. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 font-medium">
            <span>Crafted with</span>
            <span>🤎</span>
            <span>for authentic sweet lovers</span>
          </p>
        </div>

      </div>
    </footer>
  )
}
