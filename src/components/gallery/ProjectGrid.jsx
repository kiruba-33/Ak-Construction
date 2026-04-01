import React, { useState } from "react";
import { motion } from "framer-motion";

const imagesData = [
  { id: 1, url: "/hero1.webp", title: "Modern Luxury Home", category: "Architecture" },
  { id: 2, url: "/hero1.webp", title: "Luxury Apartment Block", category: "Residential" },
  { id: 3, url: "/hero1.webp", title: "Urban Development", category: "Architecture" },
  { id: 4, url: "/hero1.webp", title: "Grand Villa Entrance", category: "Construction" },
  { id: 5, url: "/hero1.webp", title: "Resort Style Living", category: "Landscape" },
  { id: 6, url: "/hero1.webp", title: "Interior Excellence", category: "Interior" },
  { id: 7, url: "/hero1.webp", title: "Commercial Complex", category: "Commercial" },
  { id: 8, url: "/hero1.webp", title: "Skyline Tower", category: "Architecture" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const ProjectGrid = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="w-full bg-[#f3f4f6] pt-8 pb-24">

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-4 sm:px-6"
      >

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[220px] md:[grid-auto-flow:dense]">

          {imagesData.map((img, index) => {
            const pattern = index % 6;

            return (
              <motion.div
                key={img.id}
                variants={item}
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
                  alt=""
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
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

      {/* 🔥 FULLSCREEN IMAGE VIEW */}
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