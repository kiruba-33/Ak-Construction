import React from 'react';
import { motion } from 'motion/react';

const ServiceCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-transparent font-sans">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-red-600 rounded-[30px] md:rounded-[50px] p-6 sm:p-10 md:p-16 lg:p-20 text-center text-white space-y-5 md:space-y-8 shadow-2xl shadow-red-600/20"
        >
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold max-w-2xl mx-auto leading-tight tracking-tight">
            Ready to Build Your <br/> 
            <span className="underline decoration-white/30">Next Vision?</span>
          </h2>

          <p className="text-red-50 text-sm sm:text-base md:text-lg font-sans max-w-xl mx-auto leading-relaxed">
            Contact AK Construction today for a free quote on our specialized services.
          </p>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-red-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl md:rounded-2xl font-sans font-semibold text-sm sm:text-base hover:bg-slate-50 transition shadow-lg tracking-wide uppercase"
          >
            Get a Free Quote
          </motion.button>

        </motion.div>

      </div>
    </section>
  );
};

export default ServiceCTA;