import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import brandLogo from '../assets/kajukatli_royal_logo.png'

export default function Navbar({ onInquiryClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Specialty', href: '#signature-katli' },
    { name: 'About Us', href: '#about' },
    { name: 'Gifting & Bulk', href: '#gifting' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#inquiry-form' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    if (href === '#inquiry-form' && onInquiryClick) {
      onInquiryClick()
    }
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#9E7422]/20 py-2.5'
          : 'bg-[#FAF7F2] border-b border-[#9E7422]/10 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center group py-0.5"
            title="Shahi Katli - Premium Handcrafted Kaju Katli"
          >
            <img
              src={brandLogo}
              alt="Shahi Katli - Royal Indian Sweets & Kaju Katli Brand Logo"
              width="180"
              height="64"
              className="h-12 sm:h-16 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-[#3D352E] hover:text-[#9E7422] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#9E7422] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://www.bhagvatprasadam.com/products/kaju-katli-cashew-barfi-premium-kaju-katli"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order Shahi Katli online (opens in new tab)"
              className="inline-flex items-center gap-1.5 bg-white text-[#9E7422] border border-[#9E7422] hover:bg-[#F7EEDB] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-xs hover:shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <span>Order Online</span>
              <span className="text-sm leading-none">↗</span>
            </a>

            <a
              href="#inquiry-form"
              onClick={(e) => {
                e.preventDefault()
                if (onInquiryClick) onInquiryClick()
                else {
                  const el = document.querySelector('#inquiry-form')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center gap-1.5 bg-[#9E7422] hover:bg-[#866118] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Send Inquiry</span>
              <span className="text-base leading-none">↗</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#9E7422] hover:bg-[#F7EEDB] rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#9E7422]/20 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-base font-medium text-[#3D352E] hover:text-[#9E7422] hover:bg-[#F7EEDB]/60 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-[#9E7422]/15 space-y-2">
            <a
              href="https://www.bhagvatprasadam.com/products/kaju-katli-cashew-barfi-premium-kaju-katli"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-1.5 bg-white text-[#9E7422] border border-[#9E7422] hover:bg-[#F7EEDB] py-2.5 rounded-full text-sm font-semibold shadow-xs transition-colors"
            >
              <span>Order Online</span>
              <span className="text-sm leading-none">↗</span>
            </a>

            <a
              href="#inquiry-form"
              onClick={(e) => {
                e.preventDefault()
                setMobileMenuOpen(false)
                if (onInquiryClick) onInquiryClick()
                else {
                  const el = document.querySelector('#inquiry-form')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="w-full flex items-center justify-center gap-1.5 bg-[#9E7422] hover:bg-[#866118] text-white py-3 rounded-full text-base font-semibold shadow-md transition-colors"
            >
              <span>Send Inquiry</span>
              <span className="text-base leading-none">↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
