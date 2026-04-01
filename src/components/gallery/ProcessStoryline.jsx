// src/components/gallery/ProcessStoryline.jsx
import React from "react";
import { motion } from "motion/react";
import { processSteps } from "../../data/GalleryData";

const ProcessStoryline = ({ itemVariants }) => {

  // 🔥 LIMIT TO 3 STEPS (Gallery = story, not full process)
  const steps = processSteps.slice(0, 3);

  return (
    <div className="mt-32 mb-20">

      {/* HEADER */}
      <motion.div
        variants={itemVariants}
        className="text-center max-w-xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Project Journey
        </h2>

        <p className="text-gray-500 mt-4 text-sm md:text-base leading-relaxed">
          From initial planning to final handover, every project goes through a
          carefully managed journey to ensure quality and precision.
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div className="relative">

        {/* CENTER LINE */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gray-200 transform -translate-x-1/2"></div>

        <div className="flex flex-col gap-12">

          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col md:flex-row items-center md:items-stretch gap-6 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >

                {/* CONTENT */}
                <div className="md:w-1/2">
                  <div className="bg-white p-6 md:p-8 rounded-3xl shadow-md border border-gray-100 hover:shadow-xl transition duration-500">

                    {/* ICON */}
                    <div className="text-4xl text-red-500 mb-4">
                      {step.icon}
                    </div>

                    {/* TITLE */}
                    <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                      {step.title}
                    </h4>

                    {/* DESC */}
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.desc}
                    </p>

                  </div>
                </div>

                {/* DOT */}
                <div className="hidden md:flex items-center justify-center w-10">
                  <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow-md"></div>
                </div>

                {/* EMPTY SIDE */}
                <div className="md:w-1/2 hidden md:block"></div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default ProcessStoryline;