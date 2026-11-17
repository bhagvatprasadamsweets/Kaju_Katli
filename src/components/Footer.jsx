import React from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import brandLogo from '../assets/kajukatli_royal_logo.webp'
import platingIngredientsImg from '../assets/Kaju Katli Plating and Ingredients.webp'

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
                    aria-label={`Footer navigation link to ${item.name}`}
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
                    aria-label="Workshop & Dispatch Surat on Google Maps"
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
                  <strong className="text-stone-800 font-semibold">Email:</strong>{' '}
                  <a href="mailto:info@megascale.in" aria-label="Email Shahi Katli at info@megascale.in" className="hover:text-[#9E7422] hover:underline">
                    info@megascale.in
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
            alt="Handcrafted Kaju Katli Platter Arrangement with Whole Cashews, Natural Sugar, and Cardamom"
            width="1200"
            height="320"
            className="w-full h-auto object-contain mix-blend-multiply drop-shadow-xs transition-transform duration-500 hover:scale-[1.01]"
            loading="lazy"
          />
        </div>

        {/* Premium Mobile App Promotion Bar */}
        <div className="border-t border-[#9E7422]/30 mt-6 min-h-[28px] py-1 flex items-center justify-center text-center">
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-1.5 sm:gap-2.5 text-stone-700">
            {/* Desktop Typography (text-xs, font-semibold) */}
            <span className="hidden sm:inline text-xs font-semibold">
              Install <span className="font-semibold text-stone-900">Bhagvat Prasadam</span> App &amp; Get{' '}
              <span className="font-bold text-[#9E7422]">2% Extra Discount</span> on App!
            </span>
            <span className="hidden sm:inline text-xs font-medium text-[#9E7422]/80">
              Available on:
            </span>

            {/* Mobile Typography (text-[11px], font-semibold, single line, hides 'Available on:') */}
            <span className="sm:hidden text-[11px] font-semibold text-stone-800">
              Install App &amp; Get <span className="font-bold text-[#9E7422]">2% Off</span>:
            </span>

            {/* Play Store & App Store Pill Badges */}
            <div className="inline-flex items-center gap-1 sm:gap-1.5 shrink-0">
              {/* Play Store */}
              <a
                href="https://play.google.com/store/apps/details?id=in.sellonapp.bhagvatprasadam&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on Google Play Store (opens in new tab)"
                className="bg-black hover:bg-neutral-800 text-white rounded-full inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-semibold shadow-xs transition-all hover:scale-105 active:scale-95"
              >
                <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186A2.296 2.296 0 0 1 3 20.575V3.425c0-.623.226-1.196.609-1.611z" fill="#00E676" />
                  <path d="M17.207 8.586L5.05 1.57A2.28 2.28 0 0 0 3.61 1.814l10.184 10.185 3.413-3.413z" fill="#FFD600" />
                  <path d="M3.61 22.186c.427.351.983.473 1.44.244l12.157-7.016-3.414-3.414L3.61 22.186z" fill="#FF3D00" />
                  <path d="M21.577 11.127l-4.37-2.541-3.414 3.414 3.414 3.414 4.37-2.541a1.004 1.004 0 0 0 0-1.746z" fill="#00B0FF" />
                </svg>
                <span>Play Store</span>
              </a>

              {/* App Store */}
              <a
                href="https://apps.apple.com/in/app/bhagvat-prasadam/id6751397354"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on Apple App Store (opens in new tab)"
                className="bg-black hover:bg-neutral-800 text-white rounded-full inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-semibold shadow-xs transition-all hover:scale-105 active:scale-95"
              >
                <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-current shrink-0" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.59-7.7-11.72-13.97-6.3-9.5-11.11-20.4-14.42-32.69-3.32-12.28-4.97-23.77-4.97-34.46 0-15.01 3.8-27.42 11.41-37.22 7.61-9.79 17.06-14.78 28.36-14.97 4.58 0 9.8 1.15 15.66 3.44 5.86 2.3 9.79 3.52 11.79 3.67 1.63 0 5.73-1.32 12.31-3.95 6.58-2.63 12.1-3.79 16.57-3.48 12.28.98 22.19 5.48 29.74 13.51-10.76 6.52-16.03 15.54-15.82 27.05.22 8.91 3.59 16.41 10.11 22.5 6.53 6.09 14.13 9.78 22.82 11.09-2.07 6.3-4.57 12.72-7.51 19.27zM119.22 33.15c0-7.39 2.66-14.34 7.99-20.86 5.33-6.52 11.96-10.65 19.89-12.29.22 1.3.33 2.45.33 3.44 0 7.39-2.82 14.4-8.47 21.03-5.65 6.63-12.39 10.6-20.21 11.89-.11-1.08-.16-2.16-.16-3.21z" />
                </svg>
                <span>App Store</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="py-2 px-4 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm font-normal text-stone-500 gap-2 sm:gap-4 text-center md:text-left">
          <p>
            &copy; 2026 by <span className="font-semibold text-stone-700">kaju katli</span>. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 font-normal">
            <span>Crafted with</span>
            <span>🤎</span>
            <span>for authentic sweet lovers</span>
          </p>
        </div>

      </div>
    </footer>
  )
}
