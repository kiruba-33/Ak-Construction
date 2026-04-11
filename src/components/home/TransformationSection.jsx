import React, { useState, useRef } from 'react';
import { motion } from 'motion/react'; 
import { ChevronLeft, ChevronRight } from 'lucide-react';
import  MotionWrapper  from '../MotionWrapper'
import beforeImage from '../../assets/before.png';
import afterImage from '../../assets/after.png';

const TransformationSection = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!isDragging && e.type !== 'mousemove' && e.type !== 'touchmove') return;

    const rect = containerRef.current.getBoundingClientRect();
    const pageX = e.type.startsWith('touch') ? e.touches[0].pageX : e.pageX;
    const x = pageX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(position);
  };

  return (
    <section className="bg-transparent py-16 md:py-24 font-sans">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
           <MotionWrapper type='perspective'>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight text-[#0B1220] mb-4">
            Project Transformation
          </h2>
           </MotionWrapper>
          
          <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
            Slide to see the magic of our construction work
          </p>
        </div>

        {/* Slider */}
        <div 
          ref={containerRef}
          className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl border border-white mx-auto w-full max-w-5xl"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
        >
          {/* After Image */}
          <img 
            src={afterImage} 
            alt="After Construction" 
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Before Image */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img 
              src={beforeImage} 
              alt="Before Construction" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Handle */}
          <div 
            className="absolute inset-y-0 z-20" 
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute inset-y-0 -left-[2px] w-[2px] md:w-1 bg-white shadow-lg" />
            
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 
              w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 
              bg-black text-white rounded-full flex items-center justify-center 
              shadow-2xl border border-white"
            >
              <div className="flex gap-0.5">
                <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div 
            className="absolute bottom-4 md:bottom-6 left-4 md:left-6 z-10 
              bg-black/50 backdrop-blur-md text-white 
              px-3 md:px-4 py-1 md:py-1.5 
              rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-wider 
              pointer-events-none transition-opacity duration-300"
            style={{ opacity: sliderPos <= 5 ? 0 : 1 }} 
          >
            Before
          </div>

          <div 
            className="absolute bottom-4 md:bottom-6 right-4 md:right-6 z-10 
              bg-red-600/80 backdrop-blur-md text-white 
              px-3 md:px-4 py-1 md:py-1.5 
              rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-wider 
              pointer-events-none transition-opacity duration-300"
            style={{ opacity: sliderPos >= 95 ? 0 : 1 }} 
          >
            After
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;