import React from 'react';
import MotionWrapper from '../MotionWrapper';
import Counter from '../Counter'; 

const AboutStats = () => {
  const constructionBg = "hero1.webp"; 

  const stats = [
    { label: 'Years of Excellence', value: 25 },
    { label: 'Projects Delivered', value: 500 },
    { label: 'Expert Engineers', value: 40 },
    { label: 'Quality Awards', value: 12 }
  ];

  return (
    <section className="bg-[#0e949c] py-16 md:py-24 relative overflow-hidden font-sans">
      
      {/* Background */}
      {constructionBg && (
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `url(${constructionBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-y-12 gap-x-6">
          
          {stats.map((stat, i) => (
            <MotionWrapper key={i} delay={i * 0.1} direction="up">
              
              <div className="flex flex-col items-center text-center text-white">
                
                {/* Number Section with Counter Animation */}
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 md:mb-4 flex items-center">
                  <Counter value={stat.value} duration={2} delay={i * 0.1} />
                  <span>+</span>
                </h3>
                
                {/* Line */}
                <div className="w-16 sm:w-20 md:w-24 h-[1.5px] bg-white/60 mb-3 md:mb-4" />
                
                {/* Label */}
                <p className="text-[10px] sm:text-xs md:text-sm font-sans font-semibold uppercase tracking-[0.15em] leading-relaxed max-w-[140px]">
                  {stat.label}
                </p>

              </div>

            </MotionWrapper>
          ))}
        
        </div>
      </div>
    </section>
  );
};

export default AboutStats;