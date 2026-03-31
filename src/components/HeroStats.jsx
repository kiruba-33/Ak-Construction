import React from "react";
import { motion } from 'motion/react';
import { MapPin, DollarSign, Home, Bed, Search } from 'lucide-react';
import { fadeInUp } from '../constants';

const StatItem = ({ icon, value, label, showBorderRight }) => (
  /* Tablet grid-la andha boundary lines clear-ah theriya border logic add panniruken buddy */
  <div className={`flex items-center flex-1 px-4 py-4 md:px-6 relative group/item ${showBorderRight ? 'border-r border-slate-50 lg:border-none' : ''}`}>
    <div className="flex items-center gap-3 w-full">
      <div className="p-2.5 bg-slate-50 rounded-xl text-slate-600 group-hover/item:bg-blue-50 group-hover/item:text-blue-600 transition-colors duration-300 shrink-0">
        {React.cloneElement(icon, { size: 18, strokeWidth: 2.5 })}
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-display">
          {label}
        </span>
        <span className="text-xs md:text-sm font-bold text-slate-900 truncate font-display">
          {value}
        </span>
      </div>
    </div>
    {/* Desktop View (1024px+) divider logic */}
    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-slate-100 last:hidden" />
  </div>
);

const HeroStats = () => {
  const stats = [
    { icon: <MapPin />, value: 'San Jose, CA', label: 'Location' },
    { icon: <DollarSign />, value: '$1,000-$2,000', label: 'Price' },
    { icon: <Home />, value: 'Apartment', label: 'Property type' },
    { icon: <Bed />, value: '1-3', label: 'Bedrooms' },
  ];

  return (
    <motion.div 
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      // Tablet-la squashed look thavirkka rounded corners and flex direction-ai 'lg' (1024px) breakpoint-la fix panniruken buddy
      className="bg-white rounded-[2rem] lg:rounded-full p-3 lg:p-2 shadow-2xl flex flex-col lg:flex-row items-center w-full border border-slate-100"
    >
      <div className="grid grid-cols-2 lg:flex lg:flex-row items-center flex-1 w-full divide-y lg:divide-y-0 divide-slate-50">
        {stats.map((stat, index) => (
          <StatItem 
            key={stat.label}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
            // 2-column grid-la (Tablet) vertical spacing katchidhama irukka border-right logic
            showBorderRight={index % 2 === 0}
          />
        ))}
      </div>
      
      {/* Button-ai mobile/tablet-la full width aakki search icon add panniruken buddy */}
      <button className="w-full lg:w-auto bg-black text-white px-10 lg:px-14 py-4 lg:py-4 rounded-2xl lg:rounded-full font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all group font-display text-sm mt-3 lg:mt-0 lg:ml-2 shrink-0 shadow-lg shadow-black/10">
        <Search size={18} className="group-hover:scale-110 transition-transform" />
        Search
      </button>
    </motion.div>
  );
};

export default React.memo(HeroStats);