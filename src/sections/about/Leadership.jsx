import React from 'react';
import { Quote } from 'lucide-react';

const Leadership = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#0f172a] text-white overflow-hidden">

      {/* 🔥 ANIMATED GRID BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06]">
        <div className="w-full h-full 
          bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),
              linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
          bg-[size:50px_50px] animate-gridMove">
        </div>
      </div>

      {/* 🔥 LIGHT SWEEP ANIMATION */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-red-500/10 to-transparent animate-lightSweep"></div>
      </div>

      {/* 🔥 RESPONSIVE AK WATERMARK */}
      <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
        <h1 className="
          absolute 
          left-1/2 -translate-x-1/2
          top-[60%] md:top-1/2 
          -translate-y-1/2
          text-[120px] sm:text-[160px] md:text-[300px] lg:text-[500px]
          font-bold text-white 
          opacity-[0.02] md:opacity-[0.03]
          tracking-tight select-none
        ">
          AK
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">

        {/* HEADER */}
        <div className="mb-16 md:mb-20">
          <p className="text-xs tracking-[0.3em] text-red-500 mb-4">
            LEADERSHIP
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Built on <span className="text-red-500">Leadership</span>
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* IMAGE */}
          <div className="relative z-10">
            <img
              src="/aboutimages/owner.webp"
              alt="Founder"
              loading="lazy"
              className="w-full h-[420px] md:h-[520px] object-contain bg-[#111827]"
            />

            <div className="absolute bottom-0 left-0 w-full bg-black/70 px-8 py-5 flex flex-col items-center justify-center text-center">
              <h4 className="text-2xl font-semibold leading-none">
                AK. Mydeen
              </h4>

              <p className="mt-2 text-sm text-red-500 tracking-[0.25em] uppercase">
                Founder & CEO
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="space-y-8">

            <Quote className="w-10 h-10 text-red-500 opacity-70" />

            <h3 className="text-2xl md:text-4xl font-bold leading-tight">
              Building not just structures, but{" "}
              <span className="text-red-500">legacies</span> that last generations.
            </h3>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              With over two decades of experience, our leadership drives innovation,
              precision, and long-term value across every project we undertake.
            </p>

            <div className="space-y-4 pt-6 border-t border-white/10">

              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-red-500"></div>

                <span className="uppercase text-sm tracking-widest text-gray-300">
                  Uncompromising Integrity
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-red-500"></div>

                <span className="uppercase text-sm tracking-widest text-gray-300">
                  Award-Winning Quality
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-red-500"></div>

                <span className="uppercase text-sm tracking-widest text-gray-300">
                  Precision Engineering
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Leadership;