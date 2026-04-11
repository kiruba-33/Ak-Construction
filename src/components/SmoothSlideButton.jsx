import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function SmoothSlideButton({ 
  children, 
  onClick, 
  className = "" 
}) {
  const buttonRef = useRef(null);
  const fillRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial State: Fill layer is tucked away to the left (-101% to ensure no border peek)
      gsap.set(fillRef.current, { x: "-101%" });

      // 2. Hover Animation Timeline
      const tl = gsap.timeline({ paused: true });
      
      tl.to(fillRef.current, {
        x: "0%",
        duration: 0.5,
        ease: "power2.inOut"
      })
      .to(textRef.current, {
        color: "#ffffff", // Text turns white when background fills
        duration: 0.3
      }, "-=0.3");

      // Event Listeners for hover interaction
      const onEnter = () => tl.play();
      const onLeave = () => tl.reverse();

      buttonRef.current.addEventListener("mouseenter", onEnter);
      buttonRef.current.addEventListener("mouseleave", onLeave);
    }, buttonRef);

    return () => ctx.revert(); // Cleanup GSAP context
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      /* - Base styling: Always visible with border and glass effect
         - Incorporates glassmorphism aesthetics as requested
      */
      className={`relative overflow-hidden group border-2 border-orange-500 rounded-full px-10 py-4 bg-white/5 backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] ${className}`}
    >
      {/* 1. THE SLIDE LAYER: This moves from left to right */}
      <div 
        ref={fillRef}
        className="absolute inset-0 bg-orange-500 z-0 pointer-events-none"
      />

      {/* 2. THE TEXT LAYER: Must stay above the fill layer (z-10) */}
      <span 
        ref={textRef}
        className="relative z-10 block font-sans font-bold uppercase tracking-widest text-orange-500 transition-colors duration-300"
      >
        {children}
      </span>
    </button>
  );
}