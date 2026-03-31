// src/pages/Gallery.jsx
import React from "react";
// import BuildingModel from "../components/gallery/BuildingModel"; 
import HeroStats from "../components/HeroStats"; // Stats inga call panrom
import ProjectGrid from "../components/gallery/ProjectGrid";
import ProcessStoryline from "../components/gallery/ProcessStoryline";
import Hero from "../components/Hero";

const CinematicGalleryPage = () => {
  return (
    <div className="w-full bg-[#f3f4f4]">
      {/* 1. 3D Model Section */}
      <Hero 
  title={<>Interactive 3D <br /> Project Showcase</>} 
  type="model" 
  src="hero1.webp"  
/>

      {/* 2. Stats Section (Only in Gallery Page) */}
      {/* <div className="relative -mt-20 z-30 max-w-7xl mx-auto px-6">
        <HeroStats />
      </div> */}

      {/* 3. Other Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <ProjectGrid />
        <ProcessStoryline />
      </section>
    </div>
  );
};

export default CinematicGalleryPage;