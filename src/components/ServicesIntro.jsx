import React from "react";

const ServicesIntro = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F3F4F4] font-sans">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Left Content */}
        <div className="space-y-4 md:space-y-6">
          
          <p className="text-xs sm:text-sm text-[#FF4D4D] font-display font-semibold tracking-[0.2em] uppercase">
            OUR SERVICES
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#0F172A] tracking-tight leading-tight">
            Comprehensive Construction Solutions
          </h2>

          <p className="text-[#475569] text-sm sm:text-base md:text-lg font-sans leading-relaxed">
            We provide end-to-end construction services tailored to meet your residential, commercial, and industrial needs with precision and quality.
          </p>

          {/* Points */}
          <ul className="space-y-2 md:space-y-3 text-[#334155] font-sans text-sm sm:text-base">
            <li>✔ Residential & Commercial Projects</li>
            <li>✔ High-Quality Materials & Workmanship</li>
            <li>✔ On-Time Project Delivery</li>
            <li>✔ Experienced & Skilled Team</li>
          </ul>

        </div>

        {/* Right Image */}
        <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
          
          <img
            src="/hero1.webp"
            alt=""
            className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 bg-black/40 flex items-end p-4 md:p-6">
            <h3 className="text-white text-base sm:text-lg md:text-xl font-display font-semibold">
              Building Excellence in Every Project
            </h3>
          </div>

        </div>

      </div>

    </section>
  );
};

export default ServicesIntro;