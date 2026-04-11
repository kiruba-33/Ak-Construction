import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Image as ImageIcon, PhoneCall } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu Links
  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Gallery', href: '/gallery', icon: ImageIcon },
    { name: 'Contact', href: '/contact', icon: PhoneCall },
  ];

  const isHome = location.pathname === "/";

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full z-50 pt-4 md:pt-6 font-['Poppins']"
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          {/* Main Navbar Capsule - Mobile scroll logic updated */}
          <div className={`px-5 md:px-8 flex justify-between items-center transition-all duration-500 ${
            isScrolled 
              ? 'lg:bg-white/95 lg:backdrop-blur-xl lg:shadow-lg py-2.5 lg:rounded-full bg-transparent shadow-none' 
              : 'bg-transparent py-5 shadow-none'
          }`}>
            
            {/* Logo Section - Hidden on Mobile/Tablet when scrolled */}
            <Link 
              to="/" 
              className={`items-center gap-2 shrink-0 transition-all duration-500 ${
                isScrolled ? 'max-lg:opacity-0 max-lg:pointer-events-none flex' : 'flex opacity-100'
              }`}
            >
              <motion.img 
                src="loho.png" 
                alt="AK Logo" 
                className="h-10 md:h-12 w-auto object-contain"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />
            </Link>

            {/* Desktop Nav Links - Remains unchanged */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                
                return (
                  <Link 
                    key={link.name} 
                    to={link.href} 
                    className={`text-[15px] font-bold transition-all duration-300 relative group ${
                      isActive 
                        ? 'text-red-600' 
                        : isScrolled 
                          ? 'text-slate-700 hover:text-black' 
                          : isHome 
                            ? 'text-white hover:text-red-400' 
                            : 'text-[#001554] hover:text-red-600' 
                    }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : ''}`} />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Trigger - Always visible dots */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2.5 rounded-full transition-all duration-300 active:scale-90 shadow-md md:shadow-none ${
                  isScrolled 
                    ? 'text-black bg-white/95 backdrop-blur-md shadow-lg' 
                    : isHome
                      ? 'text-white bg-white/10' 
                      : 'text-[#001554] bg-slate-100/50' 
                }`}
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* --- MOBILE OVERLAY MENU --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-2xl shadow-2xl rounded-3xl overflow-hidden border border-slate-100 z-50"
            >
              <div className="flex flex-col p-4 gap-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                        isActive 
                        ? 'bg-red-50 text-red-600 shadow-sm' 
                        : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className={`p-2 rounded-xl ${isActive ? 'bg-red-100' : 'bg-slate-100'}`}>
                        <Icon size={20} />
                      </div>
                      <span className="font-bold text-base">{link.name}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;