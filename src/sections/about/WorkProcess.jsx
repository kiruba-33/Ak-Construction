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
    <section className="py-16 md:py-20 bg-transparent font-sans">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITLE */}
        <div className="mb-12 md:mb-16">
          <h2
            className="
              font-display font-bold text-[#0B1220] tracking-tight
              text-[clamp(1.6rem,3vw,3rem)]
              max-w-[28ch] leading-[1.15] mb-4
            "
          >
            Our Work Process
          </h2>

          <p className="text-gray-500 max-w-xl text-sm sm:text-base leading-relaxed">
            Our step-by-step workflow ensures quality, precision, and client satisfaction.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="space-y-16 md:space-y-20">

          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >

              {/* PRELOAD IMAGE FOR BETTER OPTIMIZATION */}
              <img
                src={step.img}
                loading="lazy"
                decoding="async"
                alt=""
                className="hidden"
              />

              {/* NUMBER */}
              <div className="flex-shrink-0">
                <span
                  className="font-display font-bold leading-none text-[80px] sm:text-[100px] md:text-[120px]"
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
              </div>

              {/* CONTENT */}
              <div className="max-w-md text-center md:text-left">
                
                <h3 className="text-lg sm:text-xl md:text-2xl font-display font-semibold text-gray-900 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-gray-500 mt-2 text-sm sm:text-base leading-relaxed">
                  {step.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WorkProcess;