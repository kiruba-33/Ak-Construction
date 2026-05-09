import React, { Suspense, lazy } from "react";
import CinematicMasonry from "../sections/home/CinematicMasonry";
import TransformationSection from "../sections/home/TransformationSection";
import FAQ from "../components/FAQ";
import AboutCTA from "../sections/about/AboutCTA";
import HomeHero from "../sections/home/HomeHero";


// 1. Lazy load ServicesSection to match AboutSection
const AboutSection = lazy(() => import("../sections/home/AboutSection"));
const ServicesSection = lazy(() => import("../sections/home/Services"));

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