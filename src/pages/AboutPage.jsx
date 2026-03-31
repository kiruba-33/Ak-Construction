import React from 'react';  
import Hero from '../components/Hero'; 
import AboutHero from '../components/about/AboutHero';
import AboutStats from '../components/about/AboutStats';
import WorkProcess from '../components/about/WorkProcess';
import QualityStandards from '../components/about/QualityStandards';
import TechInnovation from '../components/about/TechInnovation';
import Leadership from '../components/about/Leadership';
import AboutCTA from '../components/about/AboutCTA';

const AboutPage = () => {
  return (
    // FIX: 'bg-[#f3f4f4]' remove pannittu 'bg-transparent' kuduthurukkaen buddy.
    // Ippo thaan pinnadi irukkura premium construction pattern mela theriyaum.
    <div className="bg-transparent min-h-screen flex flex-col font-['Poppins'] selection:bg-red-100 selection:text-red-600">
      
      {/* Main content area */}
      <main className="flex-grow">
        <Hero 
          title={<>Building Legacies <br /> Since 1995</>} 
          type="image" 
          /* NOTE: Hero image load aagalana background transparent-ah irukkum, 
             so pattern nalla theriyaum.
          */
          src="hero1.webp"  
        />

        {/* Sections container */}
        <div className="space-y-0">
          <AboutHero />
          <AboutStats />
          <WorkProcess />
          <QualityStandards />
          <TechInnovation />
          <Leadership />
          <AboutCTA />
        </div>
      </main>
    </div>
  );
};

export default AboutPage;