import React from 'react';  
import Hero from '../components/Hero'; 
import AboutHero from '../components/about/AboutHero';
import AboutStats from '../components/about/AboutStats';
import WorkProcess from '../components/about/WorkProcess';
import QualityStandards from '../components/about/QualityStandards';
import TechInnovation from '../components/about/TechInnovation';
import Leadership from '../components/about/Leadership';
import AboutCTA from '../components/about/AboutCTA';
import AboutHeros from '../components/about/AboutHeros';

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