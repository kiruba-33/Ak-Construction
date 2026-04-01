// src/pages/Gallery.jsx
import React, { useState } from "react";
import ProjectGrid from "../components/gallery/ProjectGrid";
import ProcessStoryline from "../components/gallery/ProcessStoryline";
import Hero from "../components/Hero";
import AboutGallery from "../components/gallery/AboutGallery";
import TransformationSection from "../components/home/TransformationSection";

const CinematicGalleryPage = () => {
  // ✅ GLOBAL STATE (THIS WAS MISSING)
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full bg-[#f3f4f4]">

      {/* HERO */}
      <Hero 
        title={<>Interactive 3D <br /> Project Showcase</>} 
        type="image" 
        src="hero1.webp"  
      />

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <AboutGallery />

        {/* ✅ PASS setSelected */}
        <ProjectGrid setSelected={setSelected} />

        <ProcessStoryline />

        <TransformationSection/>
      </section>
    </div>
  );
};

export default CinematicGalleryPage;