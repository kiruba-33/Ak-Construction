import React from "react";

const QuickContactStrip = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F3F4F4] font-sans">

      <div className="relative max-w-7xl mx-auto overflow-hidden rounded-xl md:rounded-2xl">

        {/* Background Image */}
        <img
          src="/hero1.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-110 md:scale-125"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-14 lg:py-16">

          {/* Left */}
          <div className="text-white space-y-4 md:space-y-6">
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight tracking-tight">
              We Build Your <br />
              <span className="text-[#FF4D4D]">Dream Project</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg font-sans leading-relaxed max-w-md">
              From planning to execution, we deliver high-quality construction solutions tailored to your needs.
            </p>

            <ul className="space-y-2 text-gray-200 text-sm sm:text-base font-sans">
              <li>✔ Residential Construction</li>
              <li>✔ Commercial Projects</li>
              <li>✔ Renovation & Remodeling</li>
              <li>✔ Architectural Design</li>
            </ul>

          </div>

          {/* Right */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 text-white shadow-xl">
            
            <h3 className="text-lg sm:text-xl md:text-2xl font-display font-semibold mb-2 md:mb-3">
              Talk to Our Experts
            </h3>

            <p className="text-gray-300 text-sm sm:text-base font-sans mb-4 md:mb-6">
              Get a free consultation today
            </p>

            <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-[#FF4D4D] mb-4 md:mb-6">
              +91 98765 43210
            </div>

            <div className="flex gap-3 md:gap-4 flex-wrap">
              
              <button className="bg-[#FF4D4D] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-sans font-semibold text-sm sm:text-base hover:bg-red-600 transition">
                Get a Quote
              </button>

              <button className="border border-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-sans font-semibold text-sm sm:text-base hover:bg-white hover:text-black transition">
                Call Now
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default QuickContactStrip;