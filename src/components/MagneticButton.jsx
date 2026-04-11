import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function MagneticButton({ children, className = "" }) {
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const button = buttonRef.current;
    
    // Mouse Move Logic
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = button.getBoundingClientRect();
      
      // Calculate center of the button
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Distance from mouse to center
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;

      // Move the button (30px max pull)
      gsap.to(button, {
        x: deltaX * 0.3, 
        y: deltaY * 0.3,
        duration: 0.5,
        ease: "power2.out"
      });

      // Move the text inside slightly more for liquid effect
      gsap.to(button.querySelector('.inner-content'), {
        x: deltaX * 0.1,
        y: deltaY * 0.1,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    // Reset position on Leave
    const handleMouseLeave = () => {
      gsap.to([button, button.querySelector('.inner-content')], {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.3)" // Bouncy snap back
      });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={buttonRef}
      className={`relative inline-flex items-center justify-center cursor-pointer ${className}`}
      style={{ touchAction: 'none' }}
    >
      <div className="inner-content pointer-events-none">
        {children}
      </div>
    </div>
  );
}