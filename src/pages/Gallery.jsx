// src/pages/Gallery.jsx
import React, { useState } from "react";
import ProjectGrid from "../sections/gallery/ProjectGrid";
import ProcessStoryline from "../sections/gallery/ProcessStoryline";
// import Hero from "../components/Hero";
import TransformationSection from "../sections/home/TransformationSection";
import GalleryHero from "../sections/gallery/GalleryHero";

const CinematicGalleryPage = () => {
  // ✅ GLOBAL STATE (THIS WAS MISSING)
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full bg-[#f3f4f4]">

      <GalleryHero/>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        {/* ✅ PASS setSelected */}
        <ProjectGrid setSelected={setSelected} />

        <ProcessStoryline />

        <TransformationSection/>
      </section>
    </div>
  );
};

export default CinematicGalleryPage;