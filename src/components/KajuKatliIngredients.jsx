import React from 'react'
import ingredientsImg from '../assets/kaju_katli_ingredients.png'

export default function KajuKatliIngredients() {
  const ingredientsList = [
    {
      name: 'Cashew Nuts (Kaju)',
      desc: 'The main ingredient that gives Kaju Katli its distinctive nutty flavour and texture.',
      badge: 'Core',
    },
    {
      name: 'Sugar',
      desc: 'Adds the sweetness that balances the rich taste of cashews.',
      badge: 'Core',
    },
    {
      name: 'Water',
      desc: 'Helps combine the ingredients during preparation.',
      badge: 'Core',
    },
    {
      name: 'Ghee',
      desc: 'Adds a delicate richness, smooth texture, and authentic traditional aroma.',
      badge: 'Core',
    },
  ]

  return (
    <section id="ingredients" className="py-2 md:py-3 bg-[#FFFDF9] border-t border-[#9E7422]/15 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-6 w-72 h-72 bg-[#F7EEDB] rounded-full filter blur-3xl opacity-40 -z-10 pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-80 h-80 bg-[#F5EADA] rounded-full filter blur-3xl opacity-35 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* LEFT SIDE — One Combined Image */}
          <div className="lg:col-span-6 flex justify-center order-1">
            <div className="relative w-full max-w-lg lg:max-w-none group">
              {/* Subtle royal ambient glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#9E7422]/20 via-[#E2C275]/25 to-[#9E7422]/15 blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[#9E7422]/25 shadow-xl bg-white p-2 sm:p-2.5">
                <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-[#FAF7F2]">
                  <img
                    src={ingredientsImg}
                    alt="Traditional Kaju Katli Ingredients: Cashews, Sugar, Ghee, Water, Saffron, Cardamom, and Silver Vark"
                    width="800"
                    height="450"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — Text Content */}
          <div className="lg:col-span-6 space-y-5 order-2 text-center lg:text-left">

            {/* Main Heading */}
            <h2 className="font-royal text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#9E7422] leading-tight tracking-tight">
              Simple Ingredients, Sweet Perfection
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-[#5C5248] leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Discover the ingredients behind the classic taste of Kaju Katli. Cashews, sugar, water, and pure ghee form the foundation of this traditional Indian sweet.
            </p>

            {/* Ingredient List Items */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 pt-1 text-left">
              {ingredientsList.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-4 rounded-xl bg-[#FAF7F2] border border-[#9E7422]/15 hover:border-[#9E7422]/35 transition-colors shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1.5 mb-1.5">
                      <h3 className="font-royal text-xs sm:text-base font-bold text-[#3D352E] leading-snug">
                        {item.name}
                      </h3>
                      <span className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F7EEDB] text-[#9E7422] shrink-0">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-sm text-[#6B5E51] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
