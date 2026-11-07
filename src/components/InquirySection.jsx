import React, { useState, useEffect } from 'react'
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle,
  Copy,
  MessageCircle,
  HelpCircle,
} from 'lucide-react'

export default function InquirySection({ selectedProduct, onResetProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    quantity: '500g Box (14-16 Pcs) • Most Popular',
    orderType: 'Corporate Gifting',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  // Sync selected requirement type if clicked from occasion cards
  useEffect(() => {
    if (selectedProduct) {
      const orderTypeOptions = [
        'Corporate Gifting',
        'Wedding / Festive Celebration',
        'Retail / Distribution Inquiry',
        'Personal / Family Bulk Order',
        'Event / Party Orders',
        'Wholesale / Bulk Purchase',
        'Custom Gift Packaging',
        'Other Inquiry',
      ]
      const found = orderTypeOptions.find(
        (opt) =>
          opt.toLowerCase() === selectedProduct.toLowerCase() ||
          selectedProduct.toLowerCase().includes(opt.toLowerCase()) ||
          opt.toLowerCase().includes(selectedProduct.toLowerCase())
      )
      if (found) {
        setFormData((prev) => ({ ...prev, orderType: found }))
      }
      setSubmitted(false)
    }
  }, [selectedProduct])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    const waUrl = `https://wa.me/918850011652?text=${whatsappMessage}`
    window.open(waUrl, '_blank')
  }

  const handleCopyInquiry = () => {
    const text = `Inquiry Details:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Email: ${formData.email || 'N/A'}\n- Estimated Volume / Weight: ${formData.quantity}\n- Requirement: ${formData.orderType}\n- Notes: ${formData.message || 'None'}`
    navigator.clipboard?.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Shahi Katri! I am inquiring for Kaju Katri (Weight: ${formData.quantity}, Type: ${formData.orderType}). Name: ${formData.name || 'Customer'}.`
  )

  return (
    <section id="inquiry-form" className="py-2 md:py-3 bg-[#FAF7F2] border-t border-[#9E7422]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          <h2 className="font-royal text-2xl sm:text-3xl md:text-4xl font-bold text-[#9E7422]">
            Request a Bulk Quote & Product Consultation
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E51]">
            Planning a celebration, corporate dispatch, or retail order? Share your details and our team will get in touch with product specifications, samples, and personalized quotation tiers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Inquiry Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#9E7422]/20 shadow-xl">
            {submitted ? (
              <div className="text-center py-8 space-y-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#F7EEDB] text-[#9E7422] mx-auto flex items-center justify-center">
                  <CheckCircle className="w-9 h-9" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-royal text-2xl font-bold text-[#9E7422]">
                    Inquiry Summary Prepared
                  </h3>
                  <p className="text-sm text-[#5C5248] max-w-md mx-auto">
                    Thank you, <strong className="text-[#3D352E]">{formData.name || 'Valued Guest'}</strong>! Your inquiry for{' '}
                    <strong className="text-[#9E7422]">{formData.quantity}</strong> ({formData.orderType}) has been drafted.
                  </p>
                </div>

                {/* Transparency notice per instructions */}
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#9E7422]/15 text-xs text-[#6B5E51] text-left max-w-lg mx-auto space-y-1.5">
                  <div className="flex items-center gap-1.5 font-semibold text-[#9E7422]">
                    <HelpCircle className="w-4 h-4" />
                    <span>Inquiry Ready for Direct Connection</span>
                  </div>
                  <p>
                    You can instantly forward these details to our sales team over WhatsApp or call us directly.
                  </p>
                </div>

                {/* Instant Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/918850011652?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>

                  <button
                    onClick={handleCopyInquiry}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#9E7422] border border-[#9E7422]/30 hover:border-[#9E7422] px-6 py-3 rounded-full text-sm font-semibold transition-all"
                  >
                    <Copy className="w-4 h-4" />
                    <span>{copied ? 'Details Copied!' : 'Copy Summary'}</span>
                  </button>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      if (onResetProduct) onResetProduct()
                    }}
                    className="text-xs text-[#9E7422] hover:underline font-medium"
                  >
                    Edit or Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="inquiry-full-name" className="text-xs font-semibold text-[#3D352E] uppercase tracking-wider">
                      Your Full Name *
                    </label>
                    <input
                      id="inquiry-full-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#9E7422]/25 focus:border-[#9E7422] focus:ring-2 focus:ring-[#9E7422]/20 outline-none text-sm bg-[#FFFDF9] transition-all"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="space-y-1.5">
                    <label htmlFor="inquiry-phone-number" className="text-xs font-semibold text-[#3D352E] uppercase tracking-wider">
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="inquiry-phone-number"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#9E7422]/25 focus:border-[#9E7422] focus:ring-2 focus:ring-[#9E7422]/20 outline-none text-sm bg-[#FFFDF9] transition-all"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label htmlFor="inquiry-email-address" className="text-xs font-semibold text-[#3D352E] uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    id="inquiry-email-address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. rajesh@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#9E7422]/25 focus:border-[#9E7422] focus:ring-2 focus:ring-[#9E7422]/20 outline-none text-sm bg-[#FFFDF9] transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Estimated Quantity */}
                  <div className="space-y-1.5">
                    <label htmlFor="inquiry-estimated-volume" className="text-xs font-semibold text-[#3D352E] uppercase tracking-wider">
                      Estimated Volume / Weight *
                    </label>
                    <select
                      id="inquiry-estimated-volume"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#9E7422]/25 focus:border-[#9E7422] focus:ring-2 focus:ring-[#9E7422]/20 outline-none text-sm bg-[#FFFDF9] transition-all cursor-pointer font-medium"
                    >
                      <option value="250g Box (6-8 Pcs)">250g Box (6-8 Pcs)</option>
                      <option value="500g Box (14-16 Pcs) • Most Popular">500g Box (14-16 Pcs) • Most Popular</option>
                      <option value="1kg Box (28-32 Pcs)">1kg Box (28-32 Pcs)</option>
                      <option value="Custom Bulk Weight">Custom Bulk Weight</option>
                    </select>
                  </div>

                  {/* Order / Event Type */}
                  <div className="space-y-1.5">
                    <label htmlFor="inquiry-order-type" className="text-xs font-semibold text-[#3D352E] uppercase tracking-wider">
                      Requirement Type
                    </label>
                    <select
                      id="inquiry-order-type"
                      name="orderType"
                      value={formData.orderType}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#9E7422]/25 focus:border-[#9E7422] focus:ring-2 focus:ring-[#9E7422]/20 outline-none text-sm bg-[#FFFDF9] transition-all cursor-pointer font-medium"
                    >
                      <option value="Corporate Gifting">Corporate Gifting</option>
                      <option value="Wedding / Festive Celebration">Wedding / Festive Celebration</option>
                      <option value="Retail / Distribution Inquiry">Retail / Distribution Inquiry</option>
                      <option value="Personal / Family Bulk Order">Personal / Family Bulk Order</option>
                      <option value="Event / Party Orders">Event / Party Orders</option>
                      <option value="Wholesale / Bulk Purchase">Wholesale / Bulk Purchase</option>
                      <option value="Custom Gift Packaging">Custom Gift Packaging</option>
                      <option value="Other Inquiry">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-1.5">
                  <label htmlFor="inquiry-notes-message" className="text-xs font-semibold text-[#3D352E] uppercase tracking-wider">
                    Your Requirement / Notes
                  </label>
                  <textarea
                    id="inquiry-notes-message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Specify delivery destination city, scheduled date requirement, custom packaging notes, etc."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#9E7422]/25 focus:border-[#9E7422] focus:ring-2 focus:ring-[#9E7422]/20 outline-none text-sm bg-[#FFFDF9] transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#9E7422] hover:bg-[#866118] text-white py-3.5 px-6 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Submit Inquiry on WhatsApp</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Details & Direct Connect Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card - Direct Communication */}
            <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border border-[#9E7422]/20 shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-[11px] uppercase font-bold tracking-wider text-[#9E7422]">
                  Get In Touch
                </span>
                <h3 className="font-royal text-2xl font-bold text-[#3D352E]">
                  Direct Communication
                </h3>
              </div>

              <div className="space-y-3.5 pt-1">
                {/* Instant Chat / WhatsApp Support */}
                <a
                  href={`https://wa.me/918850011652?text=${encodeURIComponent("Hello! I'm interested in your Kaju Katli. Please share the details and pricing. Thank you!")}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chat with Shahi Katli on WhatsApp (opens in new tab)"
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAF7F2] hover:bg-[#F7EEDB]/80 border border-[#9E7422]/15 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-[#F7EEDB] text-[#9E7422] group-hover:bg-[#9E7422] group-hover:text-white transition-colors shrink-0 mt-0.5">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-[#6B5E51] font-medium block">Instant Chat</span>
                    <span className="text-sm font-bold text-[#9E7422] group-hover:underline">
                      WhatsApp Support
                    </span>
                    <p className="text-xs text-[#5C5248] mt-0.5">
                      Quickest response for batch schedules & custom orders.
                    </p>
                  </div>
                </a>

                {/* Phone Call */}
                <a
                  href="tel:+918850011652"
                  aria-label="Call Shahi Katli at +91-8850011652"
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAF7F2] hover:bg-[#F7EEDB]/80 border border-[#9E7422]/15 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-[#F7EEDB] text-[#9E7422] group-hover:bg-[#9E7422] group-hover:text-white transition-colors shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#6B5E51] font-medium block">Phone Call</span>
                    <span className="text-sm font-bold text-[#9E7422] group-hover:underline">
                      +91-8850011652
                    </span>
                    <p className="text-xs text-[#5C5248] mt-0.5">
                      Mon to Sun: 9:00 AM to 9:00 PM IST
                    </p>
                  </div>
                </a>

                {/* Written Inquiries */}
                <a
                  href="mailto:hello@kaju_katli.in"
                  aria-label="Email Shahi Katli at hello@kaju_katli.in"
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAF7F2] hover:bg-[#F7EEDB]/80 border border-[#9E7422]/15 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-[#F7EEDB] text-[#9E7422] group-hover:bg-[#9E7422] group-hover:text-white transition-colors shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#6B5E51] font-medium block">Written Inquiries</span>
                    <span className="text-sm font-bold text-[#9E7422] group-hover:underline break-all">
                      hello@kaju_katli.in
                    </span>
                    <p className="text-xs text-[#5C5248] mt-0.5">
                      Corporate & wedding invitation proposals.
                    </p>
                  </div>
                </a>

                {/* Artisan Workshop */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#9E7422]/15">
                  <div className="p-2.5 rounded-xl bg-[#F7EEDB] text-[#9E7422] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#6B5E51] font-medium block">Artisan Workshop</span>
                    <a
                      href="https://goo.gl/maps/VkN5zYqj6yp8YqZJ9"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Shahi Katli workshop location in Surat, Gujarat on Google Maps (opens in new tab)"
                      className="text-sm font-semibold text-[#3D352E] hover:text-[#9E7422] hover:underline block leading-snug transition-colors"
                    >
                      411-412, New Escon Plaza, Chhaprabhatha Road, Amroli, Surat, Gujarat - 394107
                    </a>
                  </div>
                </div>
              </div>
            </div>


          </div>

        </div>

      </div>
    </section>
  )
}
