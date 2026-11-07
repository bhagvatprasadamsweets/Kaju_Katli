import React from 'react'
import { Sparkles, Phone, PackageCheck } from 'lucide-react'

export default function AnnouncementBar() {
  return (
    <div className="bg-[#F7EEDB] border-b border-[#9E7422]/20 py-2 px-4 text-xs md:text-sm font-medium text-[#9E7422] transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#9E7422] shrink-0 animate-pulse" />
          <span>
            <strong className="font-semibold">Specializing in Handcrafted Pure Cashew Kaju Katri</strong> — Now accepting Corporate & Bulk Festive Inquiries.
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <span className="hidden md:flex items-center gap-1.5 text-[#3D352E]">
            <PackageCheck className="w-3.5 h-3.5 text-[#9E7422]" />
            Custom Gift Packaging Available
          </span>
          <span className="hidden sm:inline text-[#9E7422]/40">|</span>
          <a
            href="tel:+918850011652"
            className="flex items-center gap-1.5 hover:underline font-semibold text-[#9E7422] tracking-wide"
          >
            <Phone className="w-3.5 h-3.5" />
            Direct Inquiry: +91-8850011652
          </a>
        </div>
      </div>
    </div>
  )
}
