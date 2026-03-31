// src/components/gallery/ProcessStoryline.jsx
import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { processSteps } from '../../data/GalleryData';

const ProcessStoryline = ({ itemVariants }) => {
  return (
    <div className="mt-32 mb-10">
      <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12 uppercase tracking-[0.2em]">Our Construction Process</motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {processSteps.map((step, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="relative bg-white p-10 rounded-[3rem] shadow-xl border-t-8 border-red-600 group overflow-hidden"
          >
            <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{step.icon}</div>
            <h4 className="text-2xl font-bold mb-3">{step.title}</h4>
            <p className="text-slate-500 leading-relaxed mb-6">{step.desc}</p>
            <div className="flex items-center text-red-600 font-bold text-xs uppercase tracking-widest gap-2">
              Learn More <ChevronRight className="w-4 h-4" />
            </div>
            <span className="absolute -bottom-4 -right-2 text-9xl font-black text-slate-100 z-0 opacity-50">0{index + 1}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessStoryline;