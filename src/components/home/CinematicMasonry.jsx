import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate import panniyaachu
import PhysicsButton from '../PhysicsButton';

const projects = [
  {
    id: 1,
    title: 'Modern Sky-High Residency',
    location: 'Chennai, TN',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
    className: 'col-span-1 row-span-2 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2'
  },
  {
    id: 2,
    title: 'Industrial Steel Plant',
    location: 'Salem, TN',
    img: 'https://images.unsplash.com/photo-1565034946487-067915993741?auto=format&fit=crop&q=80&w=800',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 3,
    title: 'Luxury Villa Interior',
    location: 'Coimbatore, TN',
    img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 4,
    title: 'Corporate Glass Hub',
    location: 'Bangalore, KA',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    className: 'col-span-2 row-span-1 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1'
  },
  {
    id: 5,
    title: 'Eco-Friendly Apartments',
    location: 'Kochi, KL',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 6,
    title: 'Steel Bridge Project',
    location: 'Madurai, TN',
    img: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=800',
    className: 'col-span-1 row-span-1'
  }
];

const CinematicMasonry = () => {
  const navigate = useNavigate(); // navigate function-ai initialize panniyaachu

  return (
    <section className="py-16 md:py-24 bg-[#f3f4f4] text-black overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 gap-6 md:gap-8">
          
          <div className="w-full lg:w-auto">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-red-600 font-display font-semibold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 md:mb-4 block"
            >
              Showcase
            </motion.span>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-black leading-tight">
              Cinematic <br /> 
              <span className="text-slate-500 italic font-medium">Portfolio.</span>
            </h2>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-auto lg:mb-2"
          >
            <PhysicsButton
           type="button"
      onClick={() => navigate('/gallery')}
      className="group flex items-center justify-center gap-2.5 md:gap-3 bg-black text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-sans font-semibold text-sm md:text-base hover:bg-red-600 transition-all duration-500 w-full lg:min-w-[240px]"
    >
      Explore Full Gallery
            </PhysicsButton>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] sm:auto-rows-[250px] md:auto-rows-[300px] gap-4 md:gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`group relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer ${project.className}`}
            >
              <div className="absolute inset-0 z-0">
                <motion.img 
                  src={project.img} 
                  alt={project.title} 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-600/50 transition-colors duration-500 rounded-2xl md:rounded-3xl" />
              </div>

              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute inset-0 z-20 p-4 sm:p-5 md:p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-white">
                
                <p className="text-red-500 text-[10px] md:text-xs font-display font-semibold uppercase tracking-widest mb-1.5 md:mb-2">
                  {project.location}
                </p>

                <div className="flex justify-between items-end gap-3">
                  <h3 className="text-base sm:text-lg md:text-2xl font-display font-bold leading-tight max-w-[200px]">
                    {project.title}
                  </h3>

                  <div className="bg-white/10 backdrop-blur-md p-2.5 md:p-3 rounded-full group-hover:bg-red-600 transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CinematicMasonry;