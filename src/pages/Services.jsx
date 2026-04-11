import React from 'react';
import ServiceGrid from '../components/sevices/ServiceGrid';
import WorkProcess from '../components/about/WorkProcess';
import ServiceCTA from '../components/sevices/ServiceCTA';
import WhyChooseUs from '../components/WhyChooseUs';
import QualityStandards from '../components/about/QualityStandards';
import QuickContactStrip from '../components/QuickContactStrip';
import ServicesIntro from '../components/sevices/ServicesIntro';
import ServicesHero from '../components/sevices/ServicesHero';

const Services = () => {
  return (
    <div className="pb-24 bg-transparent min-h-screen font-['Poppins']">

      {/* Full width sections */}
      <ServicesHero />
      <ServicesIntro />
      <ServiceGrid />
      <WorkProcess />

      {/* 🔥 REMOVE BOX WRAPPER */}
      <WhyChooseUs />
      <QualityStandards />
    </div>
  );
};

export default Services;