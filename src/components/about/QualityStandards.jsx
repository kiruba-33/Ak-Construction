import React from 'react';
import MotionWrapper from '../MotionWrapper';
import MotionImage from '../MotionImage';
import { ShieldCheck, Award, Microscope, Layers } from 'lucide-react';

const QualityStandards = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F3F4F4] font-sans">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left */}
          <div>
            <p className="text-xs sm:text-sm text-[#FF4D4D] font-display font-semibold mb-3 md:mb-4 tracking-[0.2em] uppercase">
              MATERIALS & QUALITY
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#0F172A] mb-5 md:mb-6 leading-tight tracking-tight">
              Built Stronger. <br /> Designed to Last.
            </h2>

            <p className="text-[#475569] text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-lg font-sans leading-relaxed">
              We use premium-grade materials and follow strict quality control processes to ensure durability, safety, and long-term performance in every project we deliver.
            </p>

            {/* Points */}
            <div className="space-y-3 md:space-y-4 font-sans">
              {[
                "Premium-grade cement & steel",
                "Certified and tested materials",
                "Strict on-site inspections",
                "Long-term structural durability",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  
                  <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full bg-[#FF4D4D]/10">
                    <span className="text-[#FF4D4D] text-xs sm:text-sm font-bold">✓</span>
                  </div>

                  <p className="text-[#334155] text-sm sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/materials.jpg"
                alt=""
                className="w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 sm:-bottom-8 md:-bottom-10 -left-4 sm:-left-6 md:-left-10 bg-white border border-[#E2E8F0] p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl shadow-lg max-w-[220px] sm:max-w-xs">
              <h3 className="text-[#0F172A] font-display font-semibold text-base sm:text-lg mb-1.5 md:mb-2">
                100% Quality Focus
              </h3>
              <p className="text-[#475569] text-xs sm:text-sm font-sans leading-relaxed">
                Every project undergoes strict inspection to ensure top-tier construction standards.
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-24">

          {[
            {
              title: "High-Grade Materials",
              desc: "We source only the best materials to ensure long-lasting strength.",
            },
            {
              title: "Advanced Quality Checks",
              desc: "Every stage is monitored with strict quality control measures.",
            },
            {
              title: "Built for Durability",
              desc: "Our structures are designed to withstand time and environment.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white border border-[#E2E8F0] p-5 sm:p-6 rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
            >
              <h3 className="text-[#0F172A] text-lg sm:text-xl font-display font-semibold mb-2 tracking-tight">
                {card.title}
              </h3>
              <p className="text-[#475569] text-sm font-sans leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default QualityStandards;