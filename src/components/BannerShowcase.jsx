import React from 'react'
import bannerImg from '../assets/royal_delicacies_banner.png'

export default function BannerShowcase() {
  return (
    <section className="w-full bg-[#FAF7F2] p-0 m-0 overflow-hidden border-b border-[#9E7422]/20">
      <div className="w-full">
        {/* Full uncropped image maintaining 100% natural aspect ratio */}
        <img
          src={bannerImg}
          alt="Royal Delicacies - Handcrafted Kaju Katli Gift Boxes & Traditional Indian Sweets"
          width="1920"
          height="480"
          className="w-full h-auto block"
          loading="lazy"
        />
      </div>
    </section>
  )
}
