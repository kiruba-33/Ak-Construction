import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBranding = ({ 
  // Reusability kaaga props
  brandingData = [
    { text: "A", color: "text-[#ed1c24]" }, // Default logo colors
    { text: "K", color: "text-white/90" }
  ], 
  subtitle = "construction", 
  subtitleColor = "text-orange-500",
  lineColor = "bg-orange-500/50",
  // Parent section-layirundhu parallax values
  motionValues = { x: 0, y: 0, translateY: 0 } 
}) => {
  return (
    <motion.div
      style={{ 
        y: motionValues.y, 
        x: motionValues.x, 
        translateY: motionValues.translateY 
      }}
      className="relative w-full h-full flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="relative perspective-[1000px] flex flex-col items-center">
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 bg-orange-500/10 blur-[120px] rounded-full scale-150" />

        {/* --- Subtitle Section (Same Style) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mb-[2vh] flex items-center justify-center gap-2 sm:gap-4 z-20"
        >
          <div className={`h-[1px] w-4 sm:w-8 ${lineColor}`} />
          <span className={`text-[10px] sm:text-[12px] md:text-[1.2vw] lg:text-[1vw] font-bold ${subtitleColor} uppercase tracking-[0.8em] sm:tracking-[1.5em] leading-none whitespace-nowrap`}>
            {subtitle}
          </span>
          <div className={`h-[1px] w-4 sm:w-8 ${lineColor}`} />
        </motion.div>

        {/* --- Big Letters Section (Montserrat Style + Blur Animation) --- */}
        <div className="flex gap-[4vw] sm:gap-[2vw]">
          {brandingData.map((item, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ 
                delay: 0.8 + (i * 0.2), 
                duration: 1.5, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              /* Premium Font Style & Shadow logic remains same */
              className={`text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] font-black leading-none tracking-tighter ${item.color} select-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {item.text}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedBranding;