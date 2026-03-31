import React from 'react';
import MotionWrapper from '../MotionWrapper';
import { Quote, SendHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

const ctaBg = "/hero1.webp";

const AboutCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-transparent relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto z-10 relative px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          
          <div 
            className="w-full relative px-5 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-10 md:py-16 lg:py-20 rounded-none shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 group transition-all duration-300 hover:scale-[1.02] bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${ctaBg})` 
            }}
          >
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            {/* Left Content */}
            <div className="space-y-5 md:space-y-6 relative z-10 text-white">
              
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 md:w-12 h-px bg-red-400"></div>
                <p className="font-display font-semibold text-red-100 uppercase tracking-[0.2em] text-xs sm:text-sm">
                  Let's Build Together
                </p>
              </div>
              
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight uppercase">
                Looking for a <span className="text-red-400">reliable</span> <br/> construction partner?
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg text-slate-200 font-sans font-normal leading-relaxed max-w-xl">
                Let's build your dream together. With AK Construction, we are committed to turning your visions into reality.
              </p>
            </div>

            {/* Right Side */}
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-4 md:gap-6 relative z-10">
              <Link to="/contact" className="w-full md:w-auto">
                
                <button className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 md:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-none bg-red-600 text-white font-sans font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-slate-900 group">
                  
                  <SendHorizontal className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:rotate-12" />
                  
                  Get a Quote
                  
                  <Quote className="w-4 h-4 md:w-5 md:h-5 text-red-200" />
                
                </button>

              </Link>
            </div>

          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default AboutCTA;