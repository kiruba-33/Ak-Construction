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
  { title: 'BUILD & DESIGN', image: 'services/servicescard1.webp', icon: PencilRuler, desc: 'The design-build construction delivery method replaces the traditional method of awarding separate contracts for design and construction.' },
  { title: 'BUILDING PLAN APPROVAL', image: 'services/servicescard2.webp', icon: FileCheck, desc: 'A Building Approval Plan is a blueprint approved by local authorities that serves as a legal document for construction projects.' },
  { title: '2D FLOOR PLAN', image: 'services/servicescard3.webp', icon: Map, desc: 'A 2D plan is a basic illustration that shows the flat layout of a space from above.' },
  { title: '3D FLOOR PLAN', image: 'services/servicescard4.webp', icon: Layers, desc: 'A 3D floor plan is a virtual model of a building shown from a bird\'s eye view.' },
  { title: 'REBAR - DETAILING', image: 'services/servicescard5.webp', icon: Grid3X3, desc: 'Preparing shop drawings of steel reinforcement based on required strength.' },
  { title: 'INTERIOR DESIGN', image: 'services/servicescard6.webp', icon: Layout, desc: 'Creating functional indoor environments for homes and workplaces.' },
  { title: 'EXTERIOR ELEVATION', image: 'services/servicescard7.webp', icon: Home, desc: 'Drawings that show the outside sides of the building structure.' },
  { title: 'FALSE CEILING', image: 'services/servicescard8.webp', icon: Maximize, desc: 'Secondary ceilings for aesthetics and acoustic benefits.' },
  { title: 'MODULAR KITCHEN CABINETS', image: 'services/servicescard9.webp', icon: ChefHat, desc: 'Standalone kitchen units made from durable materials.' },
  { title: 'TV UNIT', image: 'services/servicescard10.webp', icon: Tv, desc: 'Stylish TV cabinets for modern living rooms.' },
  { title: 'BUILT - IN WARDROBES', image: 'services/servicescard11.webp', icon: DoorClosed, desc: 'Closets built directly into the wall cavity.' },
  { title: 'WALL FINISHES', image: 'services/servicescard12.webp', icon: Palette, desc: 'Final coating for interior and exterior walls.' },
  { title: 'FLOOR FINISHES', image: 'services/servicescard13.webp', icon: Footprints, desc: 'Durable flooring for functionality and aesthetics.' },
  { title: 'MODERN LIGHTING', image: 'services/servicescard14.webp', icon: Lightbulb, desc: 'Lighting solutions to enhance brightness and ambiance.' },
  { title: 'LASER CUTTING & MULTI WOOD', image: 'services/servicescard15.webp', icon: Zap, desc: 'Precision cutting for high-quality finishes.' },
  { title: 'WALL PANELLING', image: 'services/servicescard16.webp', icon: Square, desc: 'Interior wall cladding using wood or other materials.' }
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
                    loading='lazy'
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