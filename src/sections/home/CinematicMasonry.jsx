import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PhysicsButton from '../../components/PhysicsButton';

const projectsData = [
  {
    id: 1,
    img: 'homeimages/homegallery1.webp',
    className:
      'col-span-1 row-span-2 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2',
  },
  {
    id: 2,
    img: 'homeimages/homegallery2.webp',
    className: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    img: 'homeimages/homegallery3.webp',
    className: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    img: 'homeimages/homegallery4.webp',
    className:
      'col-span-2 row-span-1 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1',
  },
  {
    id: 5,
    img: 'homeimages/homegallery5.webp',
    className: 'col-span-1 row-span-1',
  },
  {
    id: 6,
    img: 'homeimages/homegallery6.webp',
    className: 'col-span-1 row-span-1',
  },
];

// ✅ STABLE SHUFFLE
const shuffleArray = (array) => {
  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
};

const CinematicMasonry = () => {
  const navigate = useNavigate();

  const [projects, setProjects] = useState(projectsData);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjects((prev) => shuffleArray(prev));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-16 md:py-24 bg-transparent text-black overflow-hidden font-sans"
      style={{
        overflowAnchor: 'none',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 gap-6 md:gap-8">

          <div className="w-full lg:w-auto">

            <span className="text-red-600 font-display font-semibold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 md:mb-4 block">
              Showcase
            </span>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-[#0B1220] leading-tight">
              Engineering <br />
              <span className="text-[#0B1220] font-medium">
                Excellence.
              </span>
            </h2>

          </div>

          {/* CTA */}
          <motion.div className="w-full lg:w-auto lg:mb-2">
            <PhysicsButton
              type="button"
              onClick={() => navigate('/gallery')}
              className="group flex items-center justify-center gap-2.5 md:gap-3 bg-black text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-sans font-semibold text-sm md:text-base hover:bg-red-600 transition-all duration-500 w-full lg:min-w-[240px]"
            >
              Explore Full Gallery
            </PhysicsButton>
          </motion.div>

        </div>

        {/* GRID */}
        <motion.div
          layout={false}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] sm:auto-rows-[250px] md:auto-rows-[300px] gap-4 md:gap-6"
        >

          {projects.map((project) => (
            <motion.div
              key={project.id}
              layout="position"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                layout: {
                  duration: 0.7,
                  ease: [0.25, 1, 0.5, 1],
                },
              }}
              onClick={() => navigate('/gallery')}
              className={`group relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer ${project.className}`}
              style={{
                willChange: 'transform',
                transform: 'translateZ(0)',
              }}
            >

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 z-0"
              >

                <motion.img
                  src={project.img}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
                />

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-600/50 transition-colors duration-500 rounded-2xl md:rounded-3xl" />

              </motion.div>

              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
};

export default CinematicMasonry;