import React, { useState, useEffect, useCallback, useRef, useLayoutEffect } from "react";
import { DESTINATIONS } from "../../data/GalleryData";
import gsap from "gsap";

export default function GalleryHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % DESTINATIONS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Initial Reveal Animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        y: 80,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out"
      });
      gsap.from(".gallery-card", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 0.5
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Slide Change Animation (Fly-up & Zoom Effect)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Background Image Animation: Below-la irunthu mela vandhu zoom aagum
      gsap.fromTo(`.bg-img-${currentIndex}`, 
        { 
          y: 400,            // Kela irunthu varathuku
          scale: 0.7,        // Chinna card size-la irunthu start aagum
          opacity: 0,
          borderRadius: "40px" // Card mathiri round-ah start aagi full screen aagum
        },
        { 
          y: 0, 
          scale: 1.1,        // Smooth-ah zoom-in aagi nirikum
          opacity: 1,
          borderRadius: "0px",
          duration: 1.8, 
          ease: "expo.out" 
        }
      );

      // Text transition for each slide change
      gsap.fromTo(".reveal-text", 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.3 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [currentIndex]);

  const current = DESTINATIONS[currentIndex];
  const visibleCards = [];
  for (let i = 1; i <= 4; i++) {
    const index = (currentIndex + i) % DESTINATIONS.length;
    visibleCards.push(DESTINATIONS[index]);
  }

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Images with GSAP targeting */}
      {DESTINATIONS.map((item, index) => (
        <div
          key={item.id}
          className={`bg-img-${index} absolute inset-0 z-0 overflow-hidden`}
          style={{ 
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 10 : 0 
          }}
        >
          <img src={item.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center h-full px-6 sm:px-10 md:px-16 lg:px-24 pb-40 md:pb-48">
        <p className="reveal-text uppercase text-[10px] sm:text-xs tracking-[0.3em] text-white/70">{current.location}</p>
        <h1 className="reveal-text mt-3 sm:mt-4 text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9]">{current.title}</h1>
        <p className="reveal-text mt-4 sm:mt-6 max-w-xs sm:max-w-md text-xs sm:text-sm text-white/70">{current.description}</p>
      </div>

      {/* Preview Cards */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-30 px-6 sm:px-10 md:px-16 lg:px-24 flex justify-end">
        <div className="flex gap-3 sm:gap-4 overflow-hidden">
          {visibleCards.map((item) => (
            <div key={item.id} className="gallery-card w-24 h-32 sm:w-32 sm:h-48 md:w-36 md:h-52 lg:w-44 lg:h-64 rounded-2xl overflow-hidden shadow-xl">
              <img src={item.image} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}