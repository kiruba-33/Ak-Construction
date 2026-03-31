// src/components/gallery/ProjectGrid.jsx
import React from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import { imagesData } from '../../data/GalleryData';

const ProjectGrid = ({ itemVariants }) => {
  return (
    <div className="grid grid-cols-12 auto-rows-[280px] gap-4 md:gap-6">
      {imagesData.map((image) => (
        <motion.div
          key={image.id}
          variants={itemVariants}
          className={`group relative overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white ${image.span} cursor-pointer bg-slate-200`}
        >
          <img src={image.url} alt="Reality" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
          <img 
            src={image.blueprint} 
            alt="Blueprint" 
            className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-700 z-10 grayscale brightness-75" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-8 flex items-end opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
            <div className="text-white w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
              <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-red-500 mb-2">{image.category}</span>
              <h3 className="text-3xl font-bold tracking-tight mb-4">{image.title}</h3>
              <div className="flex items-center justify-between border-t border-white/20 pt-4">
                <p className="text-xs text-slate-300 font-medium uppercase tracking-widest">View Details</p>
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center"><Search className="w-5 h-5" /></div>
              </div>
            </div>
          </div>
          <div className="absolute top-6 right-6 z-30 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] px-4 py-1.5 rounded-full font-bold uppercase tracking-widest opacity-100 group-hover:opacity-0 transition-opacity">
            Blueprint View
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectGrid;