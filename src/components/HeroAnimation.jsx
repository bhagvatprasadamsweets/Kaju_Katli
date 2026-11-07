import React, { useState, useEffect, useRef, useCallback } from 'react'
import hero3dImage from '../assets/hero_3d_kaju_katli.jpg'
import floatingCashewPng from '../assets/floating_cashew.png'

export default function HeroAnimation() {
  // Feature states
  const [isDropping, setIsDropping] = useState(false)
  const [dropCooldown, setDropCooldown] = useState(false)
  const [hasDroppedOnce, setHasDroppedOnce] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  // DOM Refs for high-performance rAF lerping (no React re-renders on mousemove)
  const containerRef = useRef(null)
  const card3dRef = useRef(null)
  const specularLightRef = useRef(null)
  const animFrameRef = useRef(null)

  // Mouse physics coordinates
  const mouseCoords = useRef({ targetX: 0, targetY: 0, currentX: 0, currentY: 0 })
  const isHoveringCard = useRef(false)

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)
    const handler = (e) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Feature 1: Smooth 3D Mouse Parallax and Dynamic Specular Lighting with rAF Lerp
  useEffect(() => {
    if (reducedMotion) return

    let isVisible = true
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
    }, { threshold: 0.1 })

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    const lerp = (start, end, factor) => start + (end - start) * factor

    const renderLoop = () => {
      if (isVisible) {
        // Smooth spring-like lerping for 3D rotation
        mouseCoords.current.currentX = lerp(
          mouseCoords.current.currentX,
          mouseCoords.current.targetX,
          0.08
        )
        mouseCoords.current.currentY = lerp(
          mouseCoords.current.currentY,
          mouseCoords.current.targetY,
          0.08
        )

        const rotX = -mouseCoords.current.currentY * 11 // max 11 deg
        const rotY = mouseCoords.current.currentX * 13  // max 13 deg

        if (card3dRef.current) {
          card3dRef.current.style.transform = `perspective(1200px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`
        }

        // Dynamic specular highlight tracking the pointer
        if (specularLightRef.current) {
          const lightX = 50 + mouseCoords.current.currentX * 38
          const lightY = 48 + mouseCoords.current.currentY * 38
          specularLightRef.current.style.background = `radial-gradient(circle 240px at ${lightX.toFixed(1)}% ${lightY.toFixed(1)}%, rgba(255,255,255,0.45) 0%, rgba(226,194,117,0.2) 40%, transparent 75%)`
        }
      }

      animFrameRef.current = requestAnimationFrame(renderLoop)
    }

    animFrameRef.current = requestAnimationFrame(renderLoop)

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
      observer.disconnect()
    }
  }, [reducedMotion])

  const handlePointerMove = useCallback((e) => {
    if (!containerRef.current || reducedMotion) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    // Normalize from -1 to 1
    mouseCoords.current.targetX = (x - 0.5) * 2
    mouseCoords.current.targetY = (y - 0.5) * 2
  }, [reducedMotion])

  const handlePointerEnter = useCallback(() => {
    isHoveringCard.current = true
  }, [])

  const handlePointerLeave = useCallback(() => {
    isHoveringCard.current = false
    // Smoothly return to center
    mouseCoords.current.targetX = 0
    mouseCoords.current.targetY = 0
  }, [])

  // Feature 5: Click or Tap to Drop Cashew with cooldown and sparkle burst
  const triggerCashewDrop = useCallback(() => {
    if (dropCooldown) return

    setDropCooldown(true)
    setIsDropping(true)
    setHasDroppedOnce(true)

    // Complete drop animation cycle (2.6 seconds)
    setTimeout(() => {
      setIsDropping(false)
    }, 2800)

    // Cooldown lock to prevent overlapping rapid clicks
    setTimeout(() => {
      setDropCooldown(false)
    }, 3200)
  }, [dropCooldown])

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className="relative max-w-md w-full select-none"
    >
      {/* Feature 2: Floating Golden Dust Particles (Background Layer) */}
      <div className="absolute -inset-8 pointer-events-none overflow-visible z-0">
        {[
          { top: '15%', left: '10%', size: 4, delay: '0s', dur: '5.2s' },
          { top: '25%', left: '88%', size: 5, delay: '1.2s', dur: '6.4s' },
          { top: '70%', left: '5%', size: 3, delay: '2.5s', dur: '4.8s' },
          { top: '80%', left: '92%', size: 4, delay: '0.8s', dur: '5.8s' },
          { top: '45%', left: '95%', size: 3, delay: '3.1s', dur: '6.1s' },
          { top: '10%', left: '55%', size: 4, delay: '1.9s', dur: '5.5s' },
        ].map((p, i) => (
          <div
            key={i}
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: p.delay,
              animationDuration: p.dur,
            }}
            className="golden-dust-particle absolute rounded-full bg-gradient-to-r from-[#FFFDF9] via-[#E2C275] to-[#9E7422] opacity-75 blur-[0.5px] shadow-[0_0_8px_rgba(226,194,117,0.9)]"
          />
        ))}
      </div>

      {/* Feature 2: Ambient Floating Cashew 1 (Top-Right Depth Layer) */}
      <div
        className="ambient-cashew-1 absolute -top-5 -right-4 w-14 h-12 pointer-events-none z-30"
        style={{ animation: reducedMotion ? 'none' : 'ambientCashewFloat1 6.5s ease-in-out infinite' }}
      >
        <img
          src={floatingCashewPng}
          alt="Floating cashew nut"
          width="56"
          height="48"
          className="w-full h-full object-contain filter drop-shadow-[0_10px_14px_rgba(61,53,46,0.3)] transform rotate-25"
        />
      </div>

      {/* Feature 2: Ambient Floating Cashew 2 (Bottom-Left Depth Layer with soft defocus blur) */}
      <div
        className="ambient-cashew-2 absolute -bottom-4 -left-4 w-12 h-10 pointer-events-none z-30"
        style={{ animation: reducedMotion ? 'none' : 'ambientCashewFloat2 7.2s ease-in-out infinite' }}
      >
        <img
          src={floatingCashewPng}
          alt="Floating whole cashew nut decorative element"
          width="48"
          height="40"
          className="w-full h-full object-contain filter blur-[0.8px] opacity-85 drop-shadow-[0_6px_10px_rgba(61,53,46,0.25)] transform -rotate-40 scale-90"
        />
      </div>

      {/* Outer Royal Ambient Glow */}
      <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#9E7422]/25 via-[#E2C275]/35 to-[#9E7422]/20 blur-xl opacity-80 pointer-events-none" />

      {/* Main 3D Card Shell with CSS 3D Transforms */}
      <div
        ref={card3dRef}
        style={{
          transformStyle: 'preserve-3d',
          transition: reducedMotion ? 'none' : 'transform 0.15s ease-out',
        }}
        className="relative rounded-2xl p-1 bg-gradient-to-tr from-[#9E7422] via-[#E2C275] to-[#9E7422] shadow-2xl overflow-hidden"
      >
        {/* Card Inner Screen */}
        <div className="relative rounded-xl overflow-hidden bg-[#FAF7F2] aspect-square flex items-center justify-center">

          {/* Base 3D CGI Render of Diamond Kaju Katli Platter - PERMANENTLY VISIBLE */}
          <img
            src={hero3dImage}
            alt="Handcrafted Diamond Kaju Katli with Pure Silver Varak - Shahi Katli Sweet Platter"
            width="600"
            height="600"
            fetchPriority="high"
            className="w-full h-full object-cover transform scale-102"
            loading="eager"
          />

          {/* Feature 1: Dynamic Specular Lighting Overlay (Tracks Mouse Movement) */}
          <div
            ref={specularLightRef}
            className="absolute inset-0 pointer-events-none mix-blend-screen opacity-90 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(circle 240px at 50% 50%, rgba(255,255,255,0.4) 0%, rgba(226,194,117,0.15) 40%, transparent 75%)',
            }}
          />

          {/* Feature 4: Realistic Staggered Silver Varak Shimmer Overlays */}
          {/* Wave 1: Gentle sweep across outer petals */}
          <div
            className="varak-wave-1 absolute -inset-full w-[200%] h-[200%] pointer-events-none transform -rotate-35"
            style={{
              background: 'linear-gradient(90deg, transparent 40%, rgba(255,255,255,0.3) 48%, rgba(226,194,117,0.25) 51%, transparent 60%)',
              animation: reducedMotion ? 'none' : 'varakSheenWave1 5.8s ease-in-out infinite',
            }}
          />

          {/* Wave 2: Micro-glint across diamond facets with delay */}
          <div
            className="varak-wave-2 absolute -inset-full w-[200%] h-[200%] pointer-events-none transform -rotate-60"
            style={{
              background: 'linear-gradient(90deg, transparent 42%, rgba(255,255,255,0.35) 49%, rgba(255,255,255,0.15) 53%, transparent 58%)',
              animation: reducedMotion ? 'none' : 'varakSheenWave2 5.8s ease-in-out infinite',
              animationDelay: '2.4s',
            }}
          />

          {/* Ambient Lighting Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#3D352E]/20 via-transparent to-transparent pointer-events-none" />

          {/* Center Sweet Landing Zone: Automatic Looping Cashew (Kaju) Reveal & Hide */}
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 pointer-events-none z-30 flex items-center justify-center">

            {/* Landing Contact Shadow for Cashew (Automatic Infinite Loop) */}
            <div className="center-kaju-shadow-animated absolute bottom-8 w-18 h-6 bg-[#3D352E]/40 rounded-full" />

            {/* Whole Cashew Nut - Real Fresh Light Cashew (Automatic Infinite Loop - No Mouse Needed) */}
            <div className="center-kaju-animated relative w-20 h-14 flex items-center justify-center">
              <img
                src={floatingCashewPng}
                alt="Fresh Whole Cashew Nut Core Ingredient"
                width="80"
                height="56"
                className="w-full h-full object-contain filter drop-shadow-[0_6px_10px_rgba(61,53,46,0.3)]"
              />
            </div>

            {/* Golden Sparkles radiating on Reveal */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

              {/* Star 1: Top-Right */}
              <div className="center-kaju-sparkle-star1 absolute -top-2 right-2 text-[#E2C275]">
                <svg className="w-6 h-6 fill-current filter drop-shadow-[0_0_8px_#E2C275]" viewBox="0 0 24 24">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </div>

              {/* Star 2: Top-Left */}
              <div className="center-kaju-sparkle-star2 absolute -top-1 -left-2 text-[#FFFDF9]">
                <svg className="w-5 h-5 fill-current filter drop-shadow-[0_0_8px_#9E7422]" viewBox="0 0 24 24">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </div>

              {/* Star 3: Bottom-Right */}
              <div className="center-kaju-sparkle-star3 absolute bottom-2 right-1 text-[#E2C275]">
                <svg className="w-4 h-4 fill-current filter drop-shadow-[0_0_6px_#E2C275]" viewBox="0 0 24 24">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </div>

              {/* Star 4: Bottom-Left */}
              <div className="center-kaju-sparkle-star4 absolute -bottom-1 left-2 text-[#F7EEDB]">
                <svg className="w-4 h-4 fill-current filter drop-shadow-[0_0_6px_#9E7422]" viewBox="0 0 24 24">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </div>

              {/* Expanding Golden Ripple Ring on Reveal */}
              <div className="center-kaju-ripple absolute w-20 h-20 rounded-full border border-[#E2C275]/80 shadow-[0_0_12px_rgba(226,194,117,0.6)]" />
            </div>

          </div>

        </div>
      </div>

      {/* Embedded High-Performance Animation Keyframes */}
      <style>{`
        /* Automatic Looping Reveal and Hide for Center Kaju (Cashew) - No Mouse Needed */
        @keyframes centerKajuLoop {
          0% {
            opacity: 0;
            transform: translateY(-12px) scale(0.85);
          }
          18% {
            opacity: 1;
            transform: translateY(0px) scale(1);
          }
          22% {
            opacity: 1;
            transform: translateY(0px) scale(1.02);
          }
          26% {
            opacity: 1;
            transform: translateY(0px) scale(1);
          }
          68% {
            opacity: 1;
            transform: translateY(0px) scale(1);
          }
          86% {
            opacity: 0;
            transform: translateY(-8px) scale(0.85);
          }
          100% {
            opacity: 0;
            transform: translateY(-12px) scale(0.85);
          }
        }

        .center-kaju-animated {
          animation: centerKajuLoop 5.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          transform-origin: center center;
          will-change: opacity, transform;
        }

        @keyframes centerKajuShadowLoop {
          0% {
            opacity: 0;
            transform: scale(0.35);
            filter: blur(5px);
          }
          18%, 68% {
            opacity: 0.75;
            transform: scale(1);
            filter: blur(2px);
          }
          86%, 100% {
            opacity: 0;
            transform: scale(0.35);
            filter: blur(5px);
          }
        }

        .center-kaju-shadow-animated {
          animation: centerKajuShadowLoop 5.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          transform-origin: center center;
          will-change: opacity, transform;
        }

        @keyframes centerKajuSparkleLoop {
          0%, 15% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          20% {
            opacity: 1;
            transform: scale(1.3) rotate(45deg);
          }
          32% {
            opacity: 0.8;
            transform: scale(1) rotate(90deg);
          }
          42% {
            opacity: 0;
            transform: scale(0.2) rotate(135deg);
          }
          100% {
            opacity: 0;
            transform: scale(0);
          }
        }

        .center-kaju-sparkle-star1 {
          animation: centerKajuSparkleLoop 5.6s ease-out infinite;
        }
        .center-kaju-sparkle-star2 {
          animation: centerKajuSparkleLoop 5.6s ease-out infinite;
          animation-delay: 0.08s;
        }
        .center-kaju-sparkle-star3 {
          animation: centerKajuSparkleLoop 5.6s ease-out infinite;
          animation-delay: 0.16s;
        }
        .center-kaju-sparkle-star4 {
          animation: centerKajuSparkleLoop 5.6s ease-out infinite;
          animation-delay: 0.24s;
        }

        @keyframes centerKajuRippleLoop {
          0%, 16% {
            opacity: 0;
            transform: scale(0.4);
          }
          20% {
            opacity: 0.85;
          }
          34% {
            opacity: 0;
            transform: scale(1.5);
          }
          100% {
            opacity: 0;
            transform: scale(1.5);
          }
        }

        .center-kaju-ripple {
          animation: centerKajuRippleLoop 5.6s ease-out infinite;
        }

        /* Golden Dust Particles Floating Upwards */
        @keyframes dustFloat {
          0% {
            transform: translateY(0px) translateX(0px) scale(0.8);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-24px) translateX(8px) scale(1.2);
            opacity: 0.85;
          }
          100% {
            transform: translateY(-48px) translateX(-4px) scale(0.8);
            opacity: 0.3;
          }
        }

        .golden-dust-particle {
          animation: dustFloat 5.5s ease-in-out infinite alternate;
        }

        /* Ambient Floating Cashews in 3D Space */
        @keyframes ambientCashewFloat1 {
          0%, 100% {
            transform: translateY(0px) rotate(22deg) scale(1);
          }
          50% {
            transform: translateY(-12px) rotate(28deg) scale(1.04);
          }
        }

        @keyframes ambientCashewFloat2 {
          0%, 100% {
            transform: translateY(0px) rotate(-38deg) scale(0.9);
          }
          50% {
            transform: translateY(10px) rotate(-32deg) scale(0.94);
          }
        }

        /* Staggered Silver Varak Light Sweeps */
        @keyframes varakSheenWave1 {
          0% {
            transform: translateX(-150%) skewX(-25deg);
            opacity: 0;
          }
          15% {
            opacity: 0.45;
          }
          35% {
            transform: translateX(170%) skewX(-25deg);
            opacity: 0;
          }
          100% {
            transform: translateX(170%) skewX(-25deg);
            opacity: 0;
          }
        }

        @keyframes varakSheenWave2 {
          0% {
            transform: translateX(-150%) skewX(-45deg);
            opacity: 0;
          }
          18% {
            opacity: 0.4;
          }
          38% {
            transform: translateX(170%) skewX(-45deg);
            opacity: 0;
          }
          100% {
            transform: translateX(170%) skewX(-45deg);
            opacity: 0;
          }
        }

        /* Ambient Floating Cashew Cycle (before first manual click) */
        @keyframes cashewAmbientCycle {
          0% {
            transform: translateY(-80px) translateX(10px) rotate(-20deg) scale(0.88);
            opacity: 0;
          }
          12% {
            opacity: 1;
          }
          38% {
            transform: translateY(-8px) translateX(2px) rotate(3deg) scale(1);
          }
          45% {
            transform: translateY(2px) translateX(0px) rotate(-1deg) scale(1.04);
          }
          48% {
            transform: translateY(-2px) translateX(0px) rotate(1deg) scale(0.99);
          }
          52% {
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
          }
          75% {
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
            opacity: 1;
          }
          88% {
            transform: translateY(-15px) translateX(5px) rotate(10deg) scale(0.94);
            opacity: 0.25;
          }
          100% {
            transform: translateY(-80px) translateX(10px) rotate(-20deg) scale(0.88);
            opacity: 0;
          }
        }

        .cashew-ambient-float {
          animation: cashewAmbientCycle 5.5s cubic-bezier(0.25, 1, 0.5, 1) infinite;
        }

        @keyframes cashewAmbientShadow {
          0% {
            transform: scale(0.3);
            opacity: 0;
            filter: blur(8px);
          }
          38% {
            transform: scale(0.85);
            opacity: 0.45;
            filter: blur(4px);
          }
          45% {
            transform: scale(1.1);
            opacity: 0.85;
            filter: blur(2px);
          }
          52%, 75% {
            transform: scale(1);
            opacity: 0.75;
            filter: blur(3px);
          }
          88% {
            transform: scale(0.5);
            opacity: 0.2;
            filter: blur(6px);
          }
          100% {
            transform: scale(0.3);
            opacity: 0;
            filter: blur(8px);
          }
        }

        .cashew-shadow-ambient {
          animation: cashewAmbientShadow 5.5s cubic-bezier(0.25, 1, 0.5, 1) infinite;
        }

        /* Feature 5: Dedicated Click-to-Drop Physics Sequence */
        @keyframes singleDropPhysics {
          0% {
            transform: translateY(-95px) translateX(14px) rotate(-28deg) scale(0.8);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          42% {
            transform: translateY(-6px) translateX(2px) rotate(4deg) scale(1);
          }
          48% {
            transform: translateY(3px) translateX(0px) rotate(-2deg) scale(1.05);
          }
          54% {
            transform: translateY(-3px) translateX(0px) rotate(1deg) scale(0.98);
          }
          62%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
            opacity: 1;
          }
        }

        .cashew-drop-active {
          animation: singleDropPhysics 2.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        @keyframes singleDropShadow {
          0% {
            transform: scale(0.25);
            opacity: 0;
            filter: blur(9px);
          }
          42% {
            transform: scale(0.85);
            opacity: 0.5;
            filter: blur(4px);
          }
          48% {
            transform: scale(1.15);
            opacity: 0.9;
            filter: blur(1.5px);
          }
          62%, 100% {
            transform: scale(1);
            opacity: 0.75;
            filter: blur(3px);
          }
        }

        .cashew-shadow-active {
          animation: singleDropShadow 2.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .cashew-rested {
          transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
          opacity: 1;
          transition: transform 0.4s ease-out;
        }

        /* Feature 5: Sparkle Burst triggered on Landing */
        @keyframes sparklePopOnLanding {
          0%, 46% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          52% {
            transform: scale(1.35) rotate(45deg);
            opacity: 1;
          }
          64% {
            transform: scale(1) rotate(90deg);
            opacity: 0.9;
          }
          78% {
            transform: scale(0.3) rotate(135deg);
            opacity: 0;
          }
          100% {
            transform: scale(0);
            opacity: 0;
          }
        }

        .sparkle-burst-active .sparkle-star-1 {
          animation: sparklePopOnLanding 2.6s ease-out forwards;
        }

        .sparkle-burst-active .sparkle-star-2 {
          animation: sparklePopOnLanding 2.6s ease-out forwards;
          animation-delay: 0.06s;
        }

        .sparkle-burst-active .sparkle-star-3 {
          animation: sparklePopOnLanding 2.6s ease-out forwards;
          animation-delay: 0.12s;
        }

        .sparkle-burst-active .sparkle-star-4 {
          animation: sparklePopOnLanding 2.6s ease-out forwards;
          animation-delay: 0.18s;
        }

        @keyframes rippleRingExpand {
          0%, 47% {
            transform: scale(0.3);
            opacity: 0;
          }
          51% {
            opacity: 0.85;
          }
          62% {
            transform: scale(1.55);
            opacity: 0;
          }
          100% {
            transform: scale(1.55);
            opacity: 0;
          }
        }

        .sparkle-burst-active .sparkle-ripple-ring {
          animation: rippleRingExpand 2.6s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
