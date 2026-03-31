import React from 'react';
import MotionWrapper from '../MotionWrapper';
import { FileText, BrainCircuit, HardHat, ClipboardList, Building, Zap } from 'lucide-react';

const TechInnovation = () => {

  const techItems = [
    { id: '01', title: 'Cloud Collaboration', icon: FileText, desc: 'Real-time sync of architectural designs and structural blueprints, keeping every stakeholder on the same page.', label: 'Digital' },
    { id: '02', title: 'AI Design Optimization', icon: BrainCircuit, desc: 'Generative algorithms that analyze material use and spatial efficiency to create high-integrity, sustainable structures.', label: 'AI' },
    { id: '03', title: 'AR Field Guides', icon: HardHat, desc: 'On-site augmented reality overlays that guide crews with holographic instructions, reducing errors and ensuring safety.', label: 'On-Site' },
    { id: '04', title: 'IoT-Driven Jobsite', icon: ClipboardList, desc: 'Connected sensors and equipment monitoring progress, safety conditions, and material levels for seamless management.', label: 'Data' },
    { id: '05', title: '3D Prefabrication Modeling', icon: Building, desc: 'Precision manufacturing of building components through intelligent BIM modeling, reducing on-site waste and construction time.', label: 'Tech' },
    { id: '06', title: 'Integrated Project Delivery', icon: Zap, desc: 'A cohesive digital framework integrating design, engineering, and construction phases to accelerate timelines by 20%.', label: 'Premium' },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden font-sans">
      
      {/* Background */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-red-50/50 rounded-full blur-3xl opacity-70 z-0"></div>

      <div className="max-w-7xl mx-auto space-y-12 md:space-y-20 relative z-10">
        
        {/* Header */}
        <MotionWrapper>
          <div className="text-center space-y-4 md:space-y-6">
            
            <div className="inline-flex items-center gap-3 md:gap-4 bg-red-100 text-red-600 px-4 md:px-6 py-2 rounded-full shadow-inner border border-red-200">
              <span className="font-display font-semibold uppercase tracking-[0.2em] text-[10px] md:text-xs">Innovation</span>
              <div className="h-4 w-px bg-red-300"></div>
              <span className="text-slate-900 font-sans font-medium text-xs md:text-sm">Tech Ecosystem</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-slate-900 uppercase tracking-tight leading-tight">
              The Blueprint of <br/>
              <span className="text-red-600">Premium Construction</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-sans max-w-2xl mx-auto leading-relaxed">
              At AK Construction, we integrate advanced construction technologies across every milestone to deliver unparalleled quality, safety, and efficiency.
            </p>

          </div>
        </MotionWrapper>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {techItems.map((item, i) => {
            const statText = item.id;

            return (
              <MotionWrapper key={i} delay={i * 0.1} direction="up">
                
                <div className="group h-full rounded-2xl md:rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 relative p-6 md:p-8 flex flex-col gap-5 md:gap-6 overflow-hidden">
                  
                  {/* Background Number */}
                  <div className="absolute inset-0 z-0 opacity-5 group-hover:opacity-10 transition-opacity flex items-center justify-center -translate-y-6">
                    <span className="text-[120px] md:text-[160px] font-display font-bold tracking-tight text-[#0d1424]">
                      {statText}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col gap-5 md:gap-6">
                    
                    <div className="flex items-center justify-between">
                      <span className="text-red-600 font-display font-semibold uppercase tracking-[0.1em] text-[10px] md:text-xs px-3 py-1 bg-red-50 rounded-full">
                        {item.label}
                      </span>
                      <span className="text-slate-400 font-sans font-medium text-xs md:text-sm group-hover:text-red-600 transition">
                        #{item.id}
                      </span>
                    </div>

                    <div className="flex flex-col items-center text-center gap-3 md:gap-4">
                      <div className="bg-slate-900 text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:bg-red-600 transition">
                        <item.icon className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:scale-110" />
                      </div>

                      <h3 className="text-lg md:text-xl font-display font-semibold text-slate-900 tracking-tight leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 text-sm md:text-base text-center font-sans leading-relaxed">
                      {item.desc}
                    </p>

                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition origin-left"></div>
                </div>

              </MotionWrapper>
            );
          })}
        </div>

        {/* Footer */}
        <MotionWrapper delay={0.6}>
          <div className="text-center pt-8 md:pt-10 border-t border-slate-200">
            <p className="text-xs md:text-sm font-display font-semibold text-slate-900 uppercase tracking-[0.2em] mb-2 md:mb-3">
              Powered by Digital Integrity
            </p>
            <p className="text-[11px] md:text-xs text-slate-500 font-sans max-w-xl mx-auto leading-relaxed">
              Our integrated technology platform optimizes workflows, reduces waste, and ensures every construction metric meets or exceeds premium industry benchmarks.
            </p>
          </div>
        </MotionWrapper>

      </div>
    </section>
  );
};

export default TechInnovation;