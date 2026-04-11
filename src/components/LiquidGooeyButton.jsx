import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function LiquidGooeyButton({ 
  children, 
  onClick, 
  className = "", 
  liquidColor = "#f97316" // Default Orange-500
}) {
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    // GSAP context helps with clean-up in React
    const ctx = gsap.context(() => {
      // 1. Initial State: Blobs hidden below the button
      gsap.set(".blob", { y: "130%", scale: 0.5 });

      // 2. Hover Timeline
      const tl = gsap.timeline({ paused: true });
      
      tl.to(".blob", {
        y: "0%",
        scale: 1.6,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.inOut"
      })
      .to(".btn-text", {
        color: "#ffffff",
        duration: 0.3
      }, "-=0.6");

      // Event Listeners for hover
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
        className={`relative overflow-hidden group border-2 border-orange-500/30 transition-all duration-300 outline-none ${className}`}
        style={{ filter: "url(#gooey-effect)" }} 
      >
        {/* The Text Layer */}
        <span className="btn-text relative z-10 block transition-colors duration-300">
          {children}
        </span>

        {/* The Liquid Blobs Container */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="blob absolute rounded-full"
              style={{
                backgroundColor: liquidColor,
                width: '60%',
                height: '160%',
                left: `${i * 20}%`,
                filter: 'blur(12px)', 
              }}
            />
          ))}
        </div>
      </button>

      {/* SVG FILTER DEFINITION - Idhu thaan Magic logic! */}
      <svg className="hidden">
        <defs>
          <filter id="gooey-effect">
            {/* Step 1: Blur the graphics */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            {/* Step 2: Apply high contrast to the alpha channel to create the "melting" look */}
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" 
              result="goo" 
            />
            {/* Step 3: Composite back the source text over the gooey blobs */}
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </>
  );
}