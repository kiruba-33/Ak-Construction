import React from 'react';
import ServiceGrid from '../components/sevices/ServiceGrid';
import WorkProcess from '../components/about/WorkProcess';
import ServiceCTA from '../components/sevices/ServiceCTA';
import WhyChooseUs from '../components/WhyChooseUs';
import QualityStandards from '../components/about/QualityStandards';
import Hero from '../components/Hero';
import QuickContactStrip from '../components/QuickContactStrip';
import ServicesIntro from '../components/ServicesIntro';

const Services = () => {
  return (
    <div className="pb-24 bg-[#f3f4f4] min-h-screen font-['Poppins']">

      <Hero 
                title={<>Building Legacies <br /> Since 1995</>} 
                type="image" 
                /* NOTE: Hero image load aagalana background transparent-ah irukkum, 
                   so pattern nalla theriyaum.
                */
                src="hero1.webp"  
              />
      <ServicesIntro/>
      <ServiceGrid />
      <WorkProcess />
      <ServiceCTA />
      
      {/* Existing Sections */}
      <div className="px-6 md:px-10 lg:px-16 max-w-[1440px] mx-auto">
        <WhyChooseUs />
        <QualityStandards />
      </div>
      <QuickContactStrip/>
    </div>
  );
};

export default Services;