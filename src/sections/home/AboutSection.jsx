import React from 'react';
import { useNavigate } from 'react-router-dom';
import PhysicsButton from '../../components/PhysicsButton';

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-16 sm:pt-28 sm:pb-20 md:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* --- Left Side: Image --- */}
        <div className="w-full lg:w-1/2">
          <div className="relative max-w-[550px] mx-auto lg:mx-0">
            
            <img
              src="/homeimages/heroimg1.webp"
              loading="lazy"
              alt="AK Construction Premium Project"
              className="rounded-2xl shadow-xl object-cover w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[500px]"
            />

            <div className="absolute -bottom-5 -right-5 w-32 h-32 md:w-40 md:h-40 border-8 border-black/5 rounded-2xl -z-10 hidden md:block"></div>
          </div>
        </div>

        {/* --- Right Side: Content --- */}
        <div className="w-full lg:w-1/2 text-left mt-6 sm:mt-8 lg:mt-0">

          {/* 🔥 PERFECT SPACING SYSTEM */}
          <div className="flex flex-col gap-5 sm:gap-6 md:gap-7">
            
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
              Our Legacy
            </span>

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
              Engineering Excellence,<br />
              Building Your Dreams.
            </h2>

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
          <div className="mt-8 sm:mt-10">
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