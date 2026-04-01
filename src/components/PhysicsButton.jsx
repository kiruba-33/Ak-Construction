import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const PhysicsButton = ({ children, onClick }) => {
  const [pressed, setPressed] = useState(false);
  const [hovered, setHovered] = useState(false);

  const spring = useSpring({
    scale: pressed ? 0.93 : hovered ? 1.05 : 1,
    y: pressed ? 3 : hovered ? -4 : 0,
    boxShadow: pressed
      ? "0px 5px 12px rgba(0,0,0,0.2)"
      : hovered
      ? "0px 18px 30px rgba(0,0,0,0.2)"  // ✅ neutral shadow
      : "0px 8px 18px rgba(0,0,0,0.12)",
    config: {
      tension: 320,
      friction: 18,
    },
  });

  return (
    <animated.button
      style={{
        transform: spring.scale.to(
          (s) => `scale(${s}) translateY(${spring.y.get()}px)`
        ),
        boxShadow: spring.boxShadow,
      }}
      className="relative px-7 py-3 rounded-full overflow-hidden select-none text-white font-semibold tracking-wide"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPressed(false);
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onClick={onClick}
    >
      {/* 🔴 BASE GRADIENT */}
      <span className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-orange-500"></span>

      {/* 🔥 HOVER SWEEP */}
      <span
        className={`absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-red-700 transition-transform duration-500 ease-out ${
          hovered ? "translate-x-0" : "-translate-x-full"
        }`}
      ></span>

      {/* TEXT */}
      <span className="relative z-10">{children}</span>

      {/* ✨ INNER LIGHT */}
      <span className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-t from-white/10 to-transparent opacity-40" />
    </animated.button>
  );
};

export default PhysicsButton;