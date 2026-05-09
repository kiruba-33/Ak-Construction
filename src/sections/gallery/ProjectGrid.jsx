import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { imagesData } from "../../data/GalleryData";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04 },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

// ✅ STABLE SHUFFLE FUNCTION
const shuffleArray = (array) => {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
};

const ProjectGrid = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [images, setImages] = useState(imagesData);

  // 🔥 OPTIMIZED CINEMATIC SHUFFLE
  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prev) => shuffleArray(prev));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#f3f4f6] pt-8 pb-24 overflow-hidden">

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        layoutScroll={false}
        className="max-w-7xl mx-auto px-4 sm:px-6"
      >

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[220px] md:[grid-auto-flow:dense]">

          {images.map((img, index) => {
            const pattern = index % 6;

            return (
              <motion.div
                key={img.id}
                layout="position"
                variants={item}
                transition={{
                  layout: {
                    duration: 0.7,
                    ease: [0.25, 1, 0.5, 1],
                  },
                }}
                onClick={() => setActiveImage(img.url)}
                className={`
                  relative group cursor-pointer overflow-hidden rounded-2xl

                  ${pattern === 0 ? "col-span-2 row-span-2" : ""}
                  ${pattern === 1 ? "row-span-2" : ""}

                  md:${pattern === 0 ? "col-span-2 row-span-2" : ""}
                  md:${pattern === 2 ? "row-span-2" : ""}

                  lg:${pattern === 0 ? "col-span-2 row-span-2" : ""}
                  lg:${pattern === 3 ? "row-span-2" : ""}
                `}
              >

                <img
                  src={img.url}
                  alt="Gallery Image"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white text-sm font-semibold">
                    {img.title}
                  </h3>

                  <p className="text-gray-300 text-xs">
                    {img.category}
                  </p>
                </div>

              </motion.div>
            );
          })}

        </div>
      </motion.div>

      {/* FULLSCREEN */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            className="max-w-[95%] max-h-[90%] rounded-xl"
          />

          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white text-2xl"
          >
            ✕
          </button>
        </div>
      )}

    </div>
  );
};

export default ProjectGrid;