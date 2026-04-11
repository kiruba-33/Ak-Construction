import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function EliteMagneticButton({ 
  children, 
  onClick, 
  className = "" 
}) {
  const buttonRef = useRef(null);
  const fillRef = useRef(null);
  const textRef = useRef(null);

  // Split text logic for staggered animation
  const text = typeof children === "string" ? children : "";

  useLayoutEffect(() => {
    const button = buttonRef.current;
    
    const ctx = gsap.context(() => {
      // 1. Initial Setup: Skewed entry for organic feel
      gsap.set(fillRef.current, { x: "-105%", skewX: -20 }); 
      gsap.set(".char", { y: 0 });

      const tl = gsap.timeline({ paused: true });
      
      tl.to(fillRef.current, {
        x: "0%",
        skewX: 0,
        duration: 0.6,
        ease: "expo.out"
      })
      .to(".char", {
        y: -5, // Subtle lift effect
        opacity: 1,
        stagger: 0.02,
        duration: 0.3,
        ease: "power2.out"
      }, "-=0.4")
      .to(button, {
        scale: 1.05,
        duration: 0.3
      }, 0);

      // 2. Magnetic Interaction Logic
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = button.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);

        gsap.to(button, {
          x: x * 0.2, // Controls movement intensity
          y: y * 0.2,
          duration: 0.4,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        tl.reverse();
        gsap.to(button, { 
          x: 0, 
          y: 0, 
          duration: 0.6, 
          ease: "elastic.out(1, 0.3)" // Bouncy snap back
        });
      };

      // Attaching events
      button.addEventListener("mousemove", handleMouseMove);
      button.addEventListener("mouseenter", () => tl.play());
      button.addEventListener("mouseleave", handleMouseLeave);
    }, buttonRef);

    return () => ctx.revert(); // GSAP cleanup for React
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      /* Incorporates glassmorphism and premium aesthetics as requested */
      className={`relative inline-flex items-center justify-center overflow-hidden border-2 border-orange-500/50 rounded-full px-12 py-5 bg-white/5 backdrop-blur-md shadow-2xl transition-shadow duration-500 hover:shadow-orange-500/20 ${className}`}
    >
      {/* Background Slide Layer */}
      <div 
        ref={fillRef}
        className="absolute inset-0 bg-orange-500 z-0 pointer-events-none origin-left"
      />

      {/* Staggered Text Layer */}
      <span ref={textRef} className="relative z-10 flex overflow-hidden">
        {text.split("").map((char, i) => (
          <span 
            key={i} 
            className="char inline-block whitespace-pre font-sans font-bold uppercase tracking-[0.2em] text-orange-500 transition-colors duration-300 group-hover:text-white"
          >
            {char}
          </span>
        ))}
      </span>
      
      {/* Force white text on hover via CSS for better sync */}
      <style dangerouslySetInnerHTML={{ __html: `
        button:hover .char { color: white !important; }
      `}} />
    </button>
  );
}