import React from 'react';
import { useNavigate } from 'react-router-dom';
import MotionWrapper from "../../components/MotionWrapper";
import MotionImage from '../MotionImage';
import PhysicsButton from '../PhysicsButton';

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* --- Left Side: Image --- */}
        <div className="w-full lg:w-1/2">
          <div className="relative group max-w-[550px] mx-auto lg:mx-0">
            
            <MotionImage
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
              alt="AK Construction Premium Project" 
              className="rounded-2xl shadow-xl object-cover w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[500px] transition-transform duration-700 group-hover:scale-[1.02]"
            />

            <div className="absolute -bottom-5 -right-5 w-32 h-32 md:w-40 md:h-40 border-8 border-black/5 rounded-2xl -z-10 hidden md:block"></div>
          </div>
        </div>

        {/* --- Right Side: Content --- */}
        <div className="w-full lg:w-1/2 text-left">

          <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 block mb-2">
            Our Legacy
          </span>

          <MotionWrapper>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.1] text-[#0B1220]">
              Engineering Excellence,<br />
              Building Your Dreams.
            </h2>
          </MotionWrapper>

          <div className="mt-5 space-y-4 md:space-y-5">
            
            <p className="font-sans text-[#475569] text-base sm:text-lg leading-relaxed max-w-xl">
              At <span className="font-semibold text-black">AK Construction</span>, we don’t just build structures; we craft landmarks. 
              Our focus is on merging modern engineering with aesthetic perfection.
            </p>

            <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
              With a commitment to durability and timely delivery, we ensure every project represents 
              the highest standards of quality. From residential paradises to commercial hubs, 
              we turn your architectural visions into reality.
            </p>

          </div>
          
          {/* CTA */}
          <div className="mt-6">
            <PhysicsButton 
              onClick={() => navigate('/about')}
              className="w-full sm:w-auto px-8 py-3 font-sans font-semibold text-white shadow-md active:scale-95"
            >
              Learn More About Us
            </PhysicsButton>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default React.memo(AboutSection);