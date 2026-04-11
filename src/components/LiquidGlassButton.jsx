import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function LiquidGlassButton({ 
  children, 
  onClick, 
  className = "" 
}) {
  const buttonRef = useRef(null);
  const liquidRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial State: Blobs hidden below but button IS visible
      gsap.set(".glass-blob", { y: "150%", scale: 0.5 });

      // 2. Liquid Hover Timeline
      const tl = gsap.timeline({ paused: true });
      
      tl.to(".glass-blob", {
        y: "-10%",
        scale: 1.8,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.inOut"
      })
      .to(".button-text", {
        color: "#ffffff",
        duration: 0.3
      }, "-=0.6");

      const onEnter = () => tl.play();
      const onLeave = () => tl.reverse();

      buttonRef.current.addEventListener("mouseenter", onEnter);
      buttonRef.current.addEventListener("mouseleave", onLeave);
    }, buttonRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={onClick}
        /* Base Styling: Glassmorphism border and visible state */
        className={`relative overflow-hidden group border-2 border-orange-500/40 bg-white/5 backdrop-blur-md transition-all duration-300 rounded-full px-10 py-4 ${className}`}
        style={{ filter: "url(#liquid-goo)" }}
      >
        {/* The Text Layer - Visible by default */}
        <span className="button-text relative z-10 block font-bold uppercase tracking-widest text-orange-500 transition-colors duration-300">
          {children}
        </span>

        {/* Liquid Blobs Container */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="glass-blob absolute rounded-full"
              style={{
                backgroundColor: "#f97316", // Premium Orange
                width: '80%',
                height: '180%',
                left: `${i * 25 - 10}%`,
                filter: 'blur(15px)', 
              }}
            />
          ))}
        </div>
      </button>

      {/* SVG Filter Definition */}
      <svg className="hidden">
        <defs>
          <filter id="liquid-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" 
              result="goo" 
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </>
  );
}