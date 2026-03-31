import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Hammer, FileCheck, Layout, Box, Layers, Palette, 
  Home, Grid, ChefHat, Tv, DoorOpen, Brush, 
  Square, Lightbulb, Scissors, Columns, ArrowRight 
} from 'lucide-react';
import { reveal, staggerContainer } from '../../constants'; 
import MotionWrapper from '../MotionWrapper';
import PhysicsButton from '../PhysicsButton'

const Services = () => {
  const navigate = useNavigate();

  const services = [
    { title: "Build & Design", icon: <Hammer />, desc: "Complete delivery method from design to final construction." },
    { title: "Building Plan Approval", icon: <FileCheck />, desc: "Blueprint approvals by local authorities for legal construction." },
    { title: "2D Floor Plan", icon: <Layout />, desc: "Basic flat layout illustrations of your space from above." },
    { title: "3D Floor Plan", icon: <Box />, desc: "Bird's eye virtual models for better spatial communication." },
    { title: "Rebar - Detailing", icon: <Layers />, desc: "Expert steel reinforcement drawings for structural strength." },
    { title: "Interior Design", icon: <Palette />, desc: "Creating functional and aesthetic indoor living environments." },
    { title: "Exterior Elevation", icon: <Home />, desc: "Side perspective drawings showing your building's outer look." },
    { title: "False Ceiling", icon: <Grid />, desc: "Secondary ceiling layers for acoustics and aesthetic benefits." },
    { title: "Modular Kitchen Cabinets", icon: <ChefHat />, desc: "Custom standalone units made from high-grade materials." },
    { title: "TV Unit", icon: <Tv />, desc: "Elegant centerpieces for modern living and leisure spaces." },
    { title: "Built-in Wardrobes", icon: <DoorOpen />, desc: "Custom closets integrated directly into your wall cavities." },
    { title: "Wall Finishes", icon: <Brush />, desc: "Premium interior and exterior wall coatings for a final touch." },
    { title: "Floor Finishes", icon: <Square />, desc: "Durable and aesthetic surfaces for every room in your home." },
    { title: "Modern Lighting", icon: <Lightbulb />, desc: "Enhanced clarity and brightness for a modern living feel." },
    { title: "Laser Cutting & Multi Wood", icon: <Scissors />, desc: "Precision manufacturing for high-quality surface finishes." },
    { title: "Wall Panelling", icon: <Columns />, desc: "Modern cladding using wood, plastic, or stone strips." }
  ];

  return (
    <section id="services" className="bg-[#f3f4f4] py-20 md:py-24 px-4 md:px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          variants={reveal}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-gray-500 block mb-3 font-display">
            Expertise
          </span>

          <MotionWrapper>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 leading-tight">
              Our Premium <span className="text-gray-600">Services</span>
            </h2>

            <div className="w-16 md:w-20 h-1 bg-black mx-auto mt-5 rounded-full" />
          </MotionWrapper>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate" 
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={reveal}
              whileInView="whileInView" 
              whileHover={{ y: -8 }}
              className="group bg-white p-6 md:p-7 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col h-full"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-5 text-slate-900 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:scale-105">
                {React.cloneElement(service.icon, { size: 24, strokeWidth: 1.5 })}
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2 font-display tracking-tight">
                {service.title}
              </h3>

              <p className="text-slate-500 text-sm md:text-[15px] leading-relaxed flex-grow font-sans">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          variants={reveal}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="mt-14 md:mt-16 text-center"
        >
          <PhysicsButton 
            onClick={() => navigate('/services')}
            className="inline-flex items-center gap-2 bg-black text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-sans font-semibold text-sm md:text-base hover:bg-slate-800 transition shadow-lg"
          >
            Explore All Services
          </PhysicsButton>
        </motion.div>

      </div>
    </section>
  );
};

export default React.memo(Services);