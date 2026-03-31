import React, { Suspense, lazy } from "react";
import Hero from '../components/Hero';
// import BeforeAfterSlider from "../components/home/BeforeAfterSlider";
import CinematicMasonry from "../components/home/CinematicMasonry";
import TransformationSection from "../components/home/TransformationSection";
import FAQ from "../components/FAQ";
import { Section } from "lucide-react";
import AboutCTA from "../components/about/AboutCTA";


// 1. Lazy load ServicesSection to match AboutSection
const AboutSection = lazy(() => import("../components/home/AboutSection"));
const ServicesSection = lazy(() => import("../components/home/Services"));

const Home = () => {
  return (
    <>
      <Hero 
  title={<>Find Your Perfect <br /> Place to Call Home</>} 
  type="video" 
  src="hero-video.mp4" 
/>
      {/* 2. Both sections are now inside Suspense for a smooth load */}

<Suspense fallback={<div>Loading About...</div>}>
  <AboutSection />
</Suspense>

<Suspense fallback={<div>Loading Services...</div>}>
  <ServicesSection />
</Suspense>

<Suspense fallback={<div>Loading Services...</div>}>
  <TransformationSection/>
</Suspense>

<Suspense fallback={<div>Loading Services...</div>}>
  <CinematicMasonry/>
</Suspense>

<Suspense fallback={<div>Loading Services...</div>}>
  <FAQ/>
</Suspense>

<AboutCTA/>
    </>
  );
};

export default Home;