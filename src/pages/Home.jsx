import React, { Suspense, lazy } from "react";
import CinematicMasonry from "../components/home/CinematicMasonry";
import TransformationSection from "../components/home/TransformationSection";
import FAQ from "../components/FAQ";
import AboutCTA from "../components/about/AboutCTA";
import HomeHero from "../components/home/HomeHero";


// 1. Lazy load ServicesSection to match AboutSection
const AboutSection = lazy(() => import("../components/home/AboutSection"));
const ServicesSection = lazy(() => import("../components/home/Services"));

const Home = () => {
  return (
    <>
    <HomeHero/>
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