import React from 'react';
import MotionWrapper from '../MotionWrapper';
import { Quote, Award, Target, ShieldCheck } from 'lucide-react';

const Leadership = () => {
  const principles = [
    { icon: ShieldCheck, text: "Uncompromising Integrity" },
    { icon: Award, text: "Award-Winning Quality" },
    { icon: Target, text: "Precision Engineering" }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#0f172a] relative overflow-hidden font-sans w-full">
      
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none flex items-center justify-center">
        <span className="text-[120px] sm:text-[180px] md:text-[300px] lg:text-[500px] font-display font-bold text-white tracking-tight select-none">
          AK
        </span>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        
        <MotionWrapper>
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white uppercase tracking-tight leading-tight">
              Led by <span className="text-red-600">Visionaries</span>
            </h2>
            <div className="w-16 md:w-24 h-[2px] bg-red-600 mx-auto mt-4 md:mt-6"></div>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          
          {/* Image */}
          <div className="lg:col-span-5 relative">
            <MotionWrapper direction="right">
              <div className="relative group">
                
                <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full border border-red-600/30 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                
                <div className="relative overflow-hidden border-6 md:border-8 border-slate-800 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-[320px] sm:h-[400px] md:h-[500px] object-cover grayscale group-hover:grayscale-0 transition duration-700 scale-105 group-hover:scale-100" 
                    alt="A. Karuppasamy" 
                  />
                  
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-6">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-display font-semibold text-white tracking-tight">
                      A. Karuppasamy
                    </h4>
                    <p className="text-red-500 font-sans font-medium text-xs sm:text-sm tracking-[0.2em] uppercase">
                      Founder & CEO
                    </p>
                  </div>
                </div>

              </div>
            </MotionWrapper>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-10">
            
            <MotionWrapper direction="left">
              <div className="space-y-4 md:space-y-6">
                <Quote className="text-red-600 w-10 h-10 md:w-14 md:h-14 opacity-50" />

                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white leading-tight tracking-tight">
                  "Building not just structures, but <span className="text-red-600">legacies</span> that last generations."
                </h3>

                <p className="text-sm sm:text-base md:text-lg text-slate-400 font-sans leading-relaxed max-w-2xl">
                  With over two decades of expertise in the construction landscape, Karuppasamy's vision drives AK Construction to push boundaries in engineering excellence and architectural integrity.
                </p>
              </div>
            </MotionWrapper>

            {/* Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pt-4 md:pt-6 border-t border-slate-800">
              {principles.map((item, i) => (
                <MotionWrapper key={i} delay={0.2 + (i * 0.1)}>
                  <div className="flex items-center gap-3 md:gap-4 group">
                    
                    <div className="bg-slate-800 p-2 md:p-3 group-hover:bg-red-600 transition">
                      <item.icon className="text-white w-4 h-4 md:w-5 md:h-5" />
                    </div>

                    <span className="text-xs sm:text-sm font-sans font-semibold text-slate-300 uppercase tracking-[0.1em]">
                      {item.text}
                    </span>

                  </div>
                </MotionWrapper>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom Graphic */}
        <MotionWrapper delay={0.5} direction="up">
          <div className="mt-12 md:mt-16 relative">
            
            <div className="relative z-10 w-full lg:w-3/4 max-w-lg lg:ml-20 border-[6px] md:border-[10px] border-slate-800 shadow-xl overflow-hidden group">
              
              <svg 
                className="w-full h-20 md:h-24" 
                viewBox="0 0 500 100" 
                preserveAspectRatio="none"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 100 V10 C0 10 50 10 100 10 H400 C450 10 500 10 500 10 V100 H0Z" fill="#1e293b"/>
                <path d="M100 10 L400 10 L450 10 L500 10 H100 V10Z" fill="#cc3d2c" stroke="#cc3d2c" strokeWidth="2"/>
                <circle cx="100" cy="10" r="10" fill="#cc3d2c" stroke="#0f172a" strokeWidth="3" className="transition-transform group-hover:scale-125"/>
                <circle cx="400" cy="10" r="10" fill="#cc3d2c" stroke="#0f172a" strokeWidth="3" className="transition-transform group-hover:scale-125"/>
                <text x="50" y="60" className="text-[10px] md:text-sm font-sans font-semibold text-slate-400 opacity-50 uppercase tracking-widest">
                  AK CONSTRUCTION SYSTEM
                </text>
              </svg>

            </div>

            <div className="absolute -bottom-10 -left-10 w-full h-full bg-red-600 blur-3xl opacity-10"></div>

          </div>
        </MotionWrapper>

      </div>
    </section>
  );
};

export default Leadership;