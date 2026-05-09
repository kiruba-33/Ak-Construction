import React from 'react';
import ServiceGrid from '../sections/sevices/ServiceGrid';
import WorkProcess from '../sections/about/WorkProcess';
import WhyChooseUs from '../components/WhyChooseUs';
import QualityStandards from '../sections/about/QualityStandards';
import ServicesIntro from '../sections/sevices/ServicesIntro';
import ServicesHero from '../sections/sevices/ServicesHero';

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