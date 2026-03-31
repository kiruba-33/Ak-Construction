import React, { useState, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

const PhysicsButton = ({ children, onClick }) => {
  const buttonRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // 1. Spring properties setup
  const [{ x, y, scale, bgColor }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    bgColor: '#ea580c', // Default Orange
    config: { tension: 350, friction: 15, mass: 1 } 
  }));

  // 2. Mouse Move Logic (Magnetic Pull)
  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Magnet sensitivity (0.35) - button mouse-a follow pannum
    const moveX = (clientX - centerX) * 0.35;
    const moveY = (clientY - centerY) * 0.35;

    api.start({ x: moveX, y: moveY, scale: 1.1, bgColor: '#f97316' });
  };

  // 3. Reset Logic
  const handleMouseLeave = () => {
    setIsHovered(false);
    api.start({ x: 0, y: 0, scale: 1, bgColor: '#ea580c' });
  };

  return (
    <animated.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        x,
        y,
        scale,
        backgroundColor: bgColor,
      }}
      className="px-8 py-3 rounded-full text-white font-bold shadow-lg cursor-pointer outline-none relative overflow-hidden"
    >
      <span className="relative z-10">{children}</span>
      
      {/* Optional: Hover-la varra chinna light effect */}
      {isHovered && (
        <div className="absolute inset-0 bg-white/10 pointer-events-none" />
      )}
    </animated.button>
  );
};

export default PhysicsButton;