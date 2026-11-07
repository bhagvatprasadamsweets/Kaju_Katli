import React from 'react'
import { ArrowRight, Sparkles, Box, Check } from 'lucide-react'
import kajuImg from '../assets/kaju_katri_golden_tray.jpg'
import pistaImg from '../assets/product_pista_katri.jpg'
import chocoImg from '../assets/product_chocolate_katli.jpg'
import dryfruitImg from '../assets/product_dryfruit_katli.jpg'
import giftBoxImg from '../assets/product_gift_box.jpg'

export const productsData = [
  {
    id: 'kaju-katri',
    name: 'Signature Kaju Katri',
    tag: 'Classic Bestseller',
    image: kajuImg,
    description: 'Our crown jewel: delicate diamond-cut cashew fudge made with premium whole cashews and finished with genuine edible silver vark.',
    features: ['100% select cashew paste', 'Refined melt-in-mouth texture', 'Traditional slow-churned recipe'],
    packOptions: ['250g', '500g', '1kg', 'Bulk Catering'],
  },
  {
    id: 'pista-katri',
    name: 'Royal Pista Katri',
    tag: 'Nutty Luxury',
    image: pistaImg,
    description: 'A lavish blend of finely ground green pistachios and cashews, studded with roasted pistachio nibs for an aromatic crunch.',
    features: ['Real emerald pistachios', 'Natural rich nutty aroma', 'Festive table centerpiece'],
    packOptions: ['250g', '500g', '1kg', 'Bulk Trays'],
  },
  {
    id: 'chocolate-katli',
    name: 'Artisan Chocolate Katli',
    tag: 'Modern Fusion',
    image: chocoImg,
    description: 'A delectable two-layered confection pairing rich dark cocoa truffle with smooth cashew fudge for children and chocolate connoisseurs.',
    features: ['Dual-layer artisan craft', 'Rich premium cocoa layer', 'Delightful fusion favorite'],
    packOptions: ['250g', '500g', '1kg', 'Party Packs'],
  },
  {
    id: 'dry-fruit-katli',
    name: 'Royal Dry Fruit Katli',
    tag: 'Assorted Gourmet',
    image: dryfruitImg,
    description: 'An enriched luxury katli harmonizing roasted California almonds, cashews, and pistachios topped with golden roasted nut flakes.',
    features: ['Triple dry fruit blend', 'Nutrient-rich & wholesome', 'Gilded golden presentation'],
    packOptions: ['250g', '500g', '1kg', 'Custom Boxes'],
  },
  {
    id: 'gift-boxes',
    name: 'Shahi Festive Gift Box',
    tag: 'Celebration Hamper',
    image: giftBoxImg,
    description: 'Bespoke rigid gift hampers featuring assorted Katli varieties, royal satin ribbons, and custom greeting sleeves for auspicious occasions.',
    features: ['Custom branded sleeves', 'Multi-compartment luxury box', 'Ideal for corporate & weddings'],
    packOptions: ['500g Box', '1kg Hamper', '2kg Royal Suite', 'Custom Bulk Orders'],
  },
]

export default function PopularProducts({ onSelectProduct }) {
  return (
    <section id="products" className="py-16 md:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7EEDB] border border-[#9E7422]/20 text-xs font-semibold text-[#9E7422]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Handcrafted Indian Sweets</span>
          </div>
          <h2 className="font-royal text-2xl sm:text-3xl md:text-4xl font-bold text-[#9E7422]">
            Popular Katri & Gifting Selections
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E51]">
            Explore our artisanal range prepared with time-honored techniques, pure cashews, and unmatched royal presentation. Inquire for fresh batches or wholesale volume.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#9E7422]/15 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Product Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F7EEDB]/30">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Floating Tag */}
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-sm px-3 py-1 rounded-full border border-[#9E7422]/20 text-[11px] font-bold text-[#9E7422] shadow-sm">
                  {product.tag}
                </div>
              </div>

              {/* Product Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="font-royal text-lg sm:text-xl font-bold text-[#9E7422] group-hover:text-[#866118] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5248] leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  {/* Highlights */}
                  <ul className="pt-2 space-y-1.5 border-t border-[#9E7422]/10">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-[#3D352E]">
                        <Check className="w-3.5 h-3.5 text-[#9E7422] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Packaging sizes & Inquiry Action */}
                <div className="pt-3 border-t border-[#9E7422]/10 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#6B5E51]">
                    <span className="flex items-center gap-1 font-medium">
                      <Box className="w-3.5 h-3.5 text-[#9E7422]" />
                      Sizes available:
                    </span>
                    <span className="font-semibold text-[#3D352E]">
                      {product.packOptions.join(', ')}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectProduct(product.name)}
                    className="w-full flex items-center justify-center gap-2 bg-[#F7EEDB] hover:bg-[#9E7422] text-[#9E7422] hover:text-white py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 border border-[#9E7422]/30 hover:border-[#9E7422] shadow-sm"
                  >
                    <span>Inquire for {product.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
