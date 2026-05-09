import React from 'react';  
import Hero from '../components/Hero'; 
import AboutHero from '../sections/about/AboutHero';
import AboutStats from '../sections/about/AboutStats';
import WorkProcess from '../sections/about/WorkProcess';
import QualityStandards from '../sections/about/QualityStandards';
import TechInnovation from '../sections/about/TechInnovation';
import Leadership from '../sections/about/Leadership';
import AboutCTA from '../sections/about/AboutCTA';
import AboutHeros from '../sections/about/AboutHeros';

const AboutPage = () => {
  return (
    /* FIX: 'font-sans' matthum 'antialiased' add panniyachu buddy. 
       Ippo About page footer-um matha pages mathiriye modern look-la irukkum.
    */
    <div className="font-sans antialiased bg-transparent min-h-screen flex flex-col">
      
      {/* Main content area */}
      <main className="flex-grow">
        <AboutHeros/>
        {/* Sections container */}
        <div className="space-y-0">
          <AboutHero/>
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