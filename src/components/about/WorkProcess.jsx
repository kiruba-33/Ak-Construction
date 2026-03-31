import React from "react";

const steps = [
  {
    num: "01",
    title: "Research & Analyze",
    desc: "Detailed site analysis and requirement gathering with modern construction insights.",
    img: "/hero1.webp",
  },
  {
    num: "02",
    title: "Concept & Sketch",
    desc: "Initial planning, blueprint sketches, and structural concept development.",
    img: "/hero1.webp",
  },
  {
    num: "03",
    title: "Design & Build",
    desc: "Execution of architecture and construction with precision and quality.",
    img: "/hero1.webp",
  },
  {
    num: "04",
    title: "Market & Deliver",
    desc: "Final delivery, handover, and client satisfaction process.",
    img: "/hero1.webp",
  },
];

const WorkProcess = () => {
  return (
    <section className="py-16 md:py-24 bg-transparent font-sans">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITLE */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 tracking-tight">
            Process
          </h2>
          <p className="text-gray-500 mt-2 max-w-xl text-sm sm:text-base font-sans leading-relaxed">
            Our step-by-step workflow ensures quality, precision, and client satisfaction.
          </p>
        </div>

        {/* STEPS */}
        <div className="space-y-14 md:space-y-20 lg:space-y-24">
          {steps.map((step, i) => (
            <div key={i}>

              {/* Divider */}
              {i !== 0 && (
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8 md:mb-12"></div>
              )}

              <div
                className={`group flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 transition-all duration-700 ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >

                {/* NUMBER */}
                <div className="relative flex-shrink-0 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] lg:w-[220px] lg:h-[220px]">

                  <span
                    className="font-display font-bold leading-none text-[90px] sm:text-[120px] md:text-[150px] lg:text-[170px] transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${step.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      display: "inline-block",
                    }}
                  >
                    {step.num}
                  </span>

                  {/* Glow */}
                  <span className="absolute inset-0 font-display font-bold text-[90px] sm:text-[120px] md:text-[150px] lg:text-[170px] text-gray-100 blur-sm opacity-40 -z-10">
                    {step.num}
                  </span>

                </div>

                {/* CONTENT */}
                <div className="max-w-md text-center md:text-left transition-all duration-500 group-hover:-translate-y-1">
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl font-display font-semibold text-gray-900 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-gray-500 mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed font-sans">
                    {step.desc}
                  </p>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkProcess;