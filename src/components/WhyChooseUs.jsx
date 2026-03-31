import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f3f4f4] font-sans">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 px-4 sm:px-6">
        
        <p className="text-xs sm:text-sm text-[#FF4D4D] font-display font-semibold tracking-[0.2em] uppercase mb-2">
          WHY CHOOSE US
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#0F172A] mb-4 tracking-tight leading-tight">
          Building Trust Through Quality & Expertise
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-500 font-sans leading-relaxed">
          We deliver reliable construction solutions with precision, safety, and commitment to excellence.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[220px] sm:auto-rows-[240px] md:auto-rows-[260px] gap-6 md:gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Card 1 */}
        <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition flex flex-col justify-between">
          <p className="text-gray-500 text-sm md:text-base font-sans mb-4 leading-relaxed">
            We ensure top-quality materials and strict construction standards.
          </p>
          <h3 className="text-lg md:text-xl font-display font-semibold text-[#0F172A] tracking-tight">
            99% Quality Assurance
          </h3>
        </div>

        {/* Card 2 */}
        <div className="row-span-2 relative rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:scale-105 transition">
          <img
            src="/hero1.webp"
            alt="Worker"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8 flex flex-col justify-end text-white">
            <h3 className="text-lg md:text-xl font-display font-semibold">
              On-Time Delivery
            </h3>
            <p className="text-sm md:text-base text-gray-200 font-sans leading-relaxed">
              We complete projects on schedule without compromising quality.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:scale-105 transition">
          <img
            src="/images/site.jpg"
            alt="Construction Site"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 4 */}
        <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:scale-105 transition">
          <img
            src="/images/tools.jpg"
            alt="Tools"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 5 */}
        <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition flex flex-col justify-between">
          <h3 className="text-lg md:text-xl font-display font-semibold text-[#0F172A] mb-2 tracking-tight">
            300+ Projects Completed
          </h3>
          <p className="text-gray-500 text-sm md:text-base font-sans leading-relaxed">
            Trusted by hundreds of clients for consistent and reliable work.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;