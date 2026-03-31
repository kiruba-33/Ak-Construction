import React from 'react';
import { motion } from 'motion/react';
import { 
  PencilRuler, FileCheck, Map, Layers, Grid3X3, Layout, Home, 
  Maximize, ChefHat, Tv, DoorClosed, Palette, Footprints, 
  Lightbulb, Zap, Square 
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20 }
  }
};

const servicesList = [
  { title: 'BUILD & DESIGN', image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=600', icon: PencilRuler, desc: 'The design-build construction delivery method replaces the traditional method of awarding separate contracts for design and construction.' },
  { title: 'BUILDING PLAN APPROVAL', image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=600', icon: FileCheck, desc: 'A Building Approval Plan is a blueprint approved by local authorities that serves as a legal document for construction projects.' },
  { title: '2D FLOOR PLAN', image: 'https://images.unsplash.com/photo-1599809275671-b59421abc75b?auto=format&fit=crop&q=80&w=600', icon: Map, desc: 'A 2D plan is a basic illustration that shows the flat layout of a space from above.' },
  { title: '3D FLOOR PLAN', image: 'https://images.unsplash.com/photo-1626023544152-9037f092945f?auto=format&fit=crop&q=80&w=600', icon: Layers, desc: 'A 3D floor plan is a virtual model of a building shown from a bird\'s eye view.' },
  { title: 'REBAR - DETAILING', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600', icon: Grid3X3, desc: 'Preparing shop drawings of steel reinforcement based on required strength.' },
  { title: 'INTERIOR DESIGN', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600', icon: Layout, desc: 'Creating functional indoor environments for homes and workplaces.' },
  { title: 'EXTERIOR ELEVATION', image: 'https://images.unsplash.com/photo-1600585154526-990dbee31261?auto=format&fit=crop&q=80&w=600', icon: Home, desc: 'Drawings that show the outside sides of the building structure.' },
  { title: 'FALSE CEILING', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600', icon: Maximize, desc: 'Secondary ceilings for aesthetics and acoustic benefits.' },
  { title: 'MODULAR KITCHEN CABINETS', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=600', icon: ChefHat, desc: 'Standalone kitchen units made from durable materials.' },
  { title: 'TV UNIT', image: 'https://images.unsplash.com/photo-1593060974444-4282712959c6?auto=format&fit=crop&q=80&w=600', icon: Tv, desc: 'Stylish TV cabinets for modern living rooms.' },
  { title: 'BUILT - IN WARDROBES', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=600', icon: DoorClosed, desc: 'Closets built directly into the wall cavity.' },
  { title: 'WALL FINISHES', image: 'https://images.unsplash.com/photo-1562664377-709f2c337eb2?auto=format&fit=crop&q=80&w=600', icon: Palette, desc: 'Final coating for interior and exterior walls.' },
  { title: 'FLOOR FINISHES', image: 'https://images.unsplash.com/photo-1581858726780-7d02efdfaf3b?auto=format&fit=crop&q=80&w=600', icon: Footprints, desc: 'Durable flooring for functionality and aesthetics.' },
  { title: 'MODERN LIGHTING', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=600', icon: Lightbulb, desc: 'Lighting solutions to enhance brightness and ambiance.' },
  { title: 'LASER CUTTING & MULTI WOOD', image: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?auto=format&fit=crop&q=80&w=600', icon: Zap, desc: 'Precision cutting for high-quality finishes.' },
  { title: 'WALL PANELLING', image: 'https://images.unsplash.com/photo-1615876234886-fd9a39faa97f?auto=format&fit=crop&q=80&w=600', icon: Square, desc: 'Interior wall cladding using wood or other materials.' }
];

const ServiceGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-transparent font-sans">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {servicesList.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={i} 
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl md:rounded-[32px] overflow-hidden shadow-sm border border-slate-100 flex flex-col group hover:shadow-2xl transition duration-500"
              >
                
                {/* Image */}
                <div className="h-[200px] sm:h-[220px] md:h-[250px] w-full overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition duration-500"/>
                  
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white p-3 md:p-4 rounded-2xl shadow border border-slate-100 group-hover:bg-red-600 transition duration-500">
                    <Icon className="text-red-600 w-6 h-6 md:w-8 md:h-8 group-hover:text-white transition duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-grow space-y-3 md:space-y-4">
                  <h2 className="text-base md:text-lg font-display font-semibold text-slate-900 leading-tight group-hover:text-red-600 transition">
                    {service.title}
                  </h2>

                  <p className="text-slate-600 leading-relaxed text-sm md:text-base font-sans">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom line */}
                <div className="px-6 md:px-8 pb-4 mt-auto">
                  <div className="h-0.5 w-10 bg-red-600 group-hover:w-full transition-all duration-700 rounded-full"/>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default ServiceGrid;