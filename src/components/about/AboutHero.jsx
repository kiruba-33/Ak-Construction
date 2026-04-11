import React from 'react';
import MotionWrapper from '../MotionWrapper';
import MotionImage from '../MotionImage';
import { CheckCircle2 } from 'lucide-react';

const AboutHero = () => (
  <section className="px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto py-16 md:py-24 bg-transparent font-sans">
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="space-y-5 md:space-y-6 text-center lg:text-left">
           <MotionWrapper type='perspective'>
          <h2 className="text-red-600 font-display font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase">
            The AK Legacy
          </h2>

                     
<h2 className="
  font-display
  font-bold
  text-[#0B1220]
  tracking-tight
  text-[clamp(1.6rem,3vw,3rem)]
  max-w-[22ch] sm:max-w-[24ch] md:max-w-[26ch] lg:max-w-[28ch]
  leading-[1.2] sm:leading-[1.2] md:leading-[1.15]
  mb-4 sm:mb-5 md:mb-6
">
  We Don't Just Build.<br />
  We Engineer Legacies.
</h2>
            </MotionWrapper>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-sans max-w-xl mx-auto lg:mx-0">
            Founded in Cumbum, AK Construction evolved from a local firm to a multi-domain engineering powerhouse. We specialize in high-stakes construction where quality and structural integrity are non-negotiable.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 pt-3 md:pt-4 justify-center lg:justify-start">
            
            <div className="flex items-center gap-2 text-slate-800 font-sans font-medium bg-white px-3 sm:px-4 py-2 rounded-full shadow-sm border border-slate-100">
              <CheckCircle2 className="text-red-600 w-4 h-4 sm:w-5 sm:h-5" /> 
              Licensed & Insured
            </div>

            <div className="flex items-center gap-2 text-slate-800 font-sans font-medium bg-white px-3 sm:px-4 py-2 rounded-full shadow-sm border border-slate-100">
              <CheckCircle2 className="text-red-600 w-4 h-4 sm:w-5 sm:h-5" /> 
              ISO Certified
            </div>

          </div>
        </div>

      {/* Image */}
      <div className="relative h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl group">
        <MotionImage 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2070" 
          alt="Construction Site Mastery" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

    </div>
  </section>
);

export default AboutHero;