import React from "react";
import { motion } from "motion/react";
import { processSteps } from "../../data/GalleryData";

const ProcessStoryline = ({ itemVariants }) => {

  const steps = processSteps.slice(0, 3);

  return (
    <section className="mt-20 md:mt-28 lg:mt-32 mb-16 md:mb-20 px-4 sm:px-6 lg:px-8">

      {/* HEADER */}
      <motion.div
        variants={itemVariants}
        className="text-center max-w-xl mx-auto mb-12 md:mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Project Journey
        </h2>

        <p className="text-gray-500 mt-3 md:mt-4 text-sm sm:text-base leading-relaxed">
          From initial planning to final handover, every project goes through a
          carefully managed journey to ensure quality and precision.
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div className="relative">

        {/* CENTER LINE */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gray-200 -translate-x-1/2"></div>

        <div className="flex flex-col gap-10 md:gap-12">

          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`
                  flex flex-col md:flex-row items-center md:items-stretch
                  gap-4 sm:gap-6 md:gap-8
                  ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}
                `}
              >

                {/* CONTENT */}
                <div className="w-full md:w-1/2">
                  <div className="
                    bg-white 
                    p-5 sm:p-6 md:p-8 
                    rounded-2xl md:rounded-3xl 
                    shadow-sm md:shadow-md 
                    border border-gray-100 
                    hover:shadow-xl 
                    transition duration-500
                  ">

                    {/* ICON */}
                    <div className="text-3xl md:text-4xl text-red-500 mb-3 md:mb-4">
                      {step.icon}
                    </div>

                    {/* TITLE */}
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2">
                      {step.title}
                    </h4>

                    {/* DESC */}
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.desc}
                    </p>

                  </div>
                </div>

                {/* DOT */}
                <div className="hidden md:flex items-center justify-center w-10 relative">
                  <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow-md z-10"></div>
                </div>

                {/* EMPTY SIDE */}
                <div className="hidden md:block md:w-1/2"></div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ProcessStoryline;