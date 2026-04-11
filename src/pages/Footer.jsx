import React from 'react';
import { motion } from 'framer-motion'; // Animation-kku ithu mukkiyam buddy
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import PhysicsButton from '../components/PhysicsButton';

const Footer = () => {
  return (
    // 1. bg-black add pannirukkén - image load aagattiye dark-ah irukkum
    <footer className="relative bg-[#050505] text-white pt-20 pb-10 overflow-hidden">

      {/* 🔥 BACKGROUND IMAGE WITH FADE */}
      {/* 2. z-index-ah 0-nu mathittén, ithu thaan image-ah mela kondu varum */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        {/* 3. backgroundImage-kku pathula img tag use panrathu safe buddy */}
        <img 
          src="/hero1.webp" 
          alt="background" 
          className="absolute inset-0 w-full h-full object-cover scale-110 opacity-40" 
        />

        {/* Dark Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-black/60" />

        {/* Light Sweep Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[200%] h-[100%] bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shine_8s_linear_infinite]" />
        </div>
      </motion.div>

      {/* --- CONTENT AREA (z-10 vachathaan image-kku mela varum) --- */}
      <div className="relative z-10">

        {/* MAIN GRID */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* BRAND & LOGO */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              {/* 4. Logo Image Set Panniachu (Explorer-la 'loho.png'-nu irukku buddy) */}
              <div className="w-12 h-12 overflow-hidden rounded-xl bg-white p-1">
                <img src="/loho.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <h2 className="text-2xl font-bold">
              <span className="text-gray-400">Construction</span>
              </h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Premium residential & commercial construction with 25+ years of trust and excellence.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <div key={i} className="p-3 bg-gray-800/80 backdrop-blur rounded-full hover:bg-red-600 hover:text-white transition cursor-pointer">
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-red-600 pl-3">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              {["Home", "About", "Services", "Gallery"].map((item, i) => (
                <li key={i} className="hover:text-red-500 transition cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-red-600 pl-3">Services</h3>
            <ul className="space-y-3 text-gray-400">
              {["Residential Construction", "Commercial Projects", "3D Design", "Renovation"].map((service, i) => (
                <li key={i} className="hover:text-red-500 transition cursor-pointer">{service}</li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-red-600 pl-3">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3 hover:text-red-500 transition cursor-pointer"><MapPin size={20} /> Theni, Tamil Nadu</li>
              <li className="flex gap-3 hover:text-red-500 transition cursor-pointer"><Phone size={20} /> +91 98765 43210</li>
              <li className="flex gap-3 hover:text-red-500 transition cursor-pointer"><Mail size={20} /> info@akconstruction.com</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 border-t border-gray-800/50 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} AK Construction. All rights reserved.
        </div>
      </div>

      <style>
        {`@keyframes shine { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }`}
      </style>
    </footer>
  );
};

export default Footer;