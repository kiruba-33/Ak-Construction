import React from 'react';
import MotionWrapper from '../MotionWrapper';

const QualityStandards = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F3F4F4] font-sans">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left */}
          <div>
            <MotionWrapper type='perspective'>
              <p className="text-xs sm:text-sm text-[#FF4D4D] font-semibold mb-3 md:mb-4 tracking-[0.2em] uppercase">
                MATERIALS & QUALITY
              </p>

              <h2 className="font-bold text-[#0B1220] text-[clamp(1.6rem,3vw,3rem)] leading-[1.2] mb-4 md:mb-6">
                Built Stronger. <br /> Designed to Last.
              </h2>
            </MotionWrapper>

            <p className="text-[#475569] text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-lg">
              We use premium-grade materials and follow strict quality control processes.
            </p>

            <div className="space-y-3 md:space-y-4">
              {[
                "Premium-grade cement & steel",
                "Certified and tested materials",
                "Strict on-site inspections",
                "Long-term structural durability",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-4 h-4 flex items-center justify-center rounded-full bg-[#FF4D4D]/10">
                    ✓
                  </div>
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="/images/materials.jpg"
                alt=""
                className="w-full h-[280px] sm:h-[360px] md:h-[420px] object-cover"
              />
            </div>

            {/* ✅ MOBILE FLOAT */}
            <div className="
              block md:hidden
              absolute -bottom-6 left-1/2 -translate-x-1/2
              bg-white border p-3 rounded-lg shadow-md max-w-[180px]
            ">
              <h3 className="text-sm font-semibold text-center">
                100% Quality Focus
              </h3>
              <p className="text-xs text-center">
                Strict inspection ensures top-tier quality.
              </p>
            </div>

            {/* ✅ DESKTOP FLOAT */}
            <div className="
              hidden lg:block
              absolute -bottom-10 left-1/2 -translate-x-1/2
              lg:-left-10 lg:translate-x-0
              bg-white border p-4 rounded-xl shadow-md max-w-[200px]
            ">
              <h3 className="text-sm font-semibold">100% Quality Focus</h3>
              <p className="text-xs">Strict inspection ensures top-tier quality.</p>
            </div>

          </div>

        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-24">

          {/* TABLET CARD */}
          <div className="hidden md:block lg:hidden bg-white border p-5 rounded-xl shadow-sm">
            <h3 className="text-sm md:text-lg font-semibold">
              100% Quality Focus
            </h3>
            <p className="text-xs md:text-sm">
              Strict inspection ensures top-tier quality.
            </p>
          </div>

          {[
            {
              title: "High-Grade Materials",
              desc: "We source only the best materials.",
            },
            {
              title: "Advanced Quality Checks",
              desc: "Every stage is monitored strictly.",
            },
            {
              title: "Built for Durability",
              desc: "Designed to withstand time.",
            },
          ].map((card, i) => (
            <div key={i} className="bg-white border p-5 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-sm">{card.desc}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default QualityStandards;