import React from 'react';
import { motion } from 'motion/react';

const ServiceHeader = () => {
  return (
    <section className="bg-slate-900 py-16 md:py-24 px-4 sm:px-6 lg:px-8 rounded-b-[30px] md:rounded-b-[60px] mx-2 sm:mx-4 overflow-hidden font-sans">
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto text-center space-y-4 md:space-y-6"
      >
        
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-red-600 font-display font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase"
        >
          OUR SERVICES
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight tracking-tight"
        >
          Building Your <br/> 
          <span className="text-red-600 underline decoration-white/20">Vision</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-slate-400 text-sm sm:text-base md:text-lg font-sans font-normal max-w-xl md:max-w-2xl mx-auto leading-relaxed"
        >
          Explore our comprehensive range of construction and design solutions tailored for premium quality.
        </motion.p>

      </motion.div>
    </section>
  );
};

export default ServiceHeader;