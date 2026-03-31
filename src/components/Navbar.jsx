import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Droplets, Home, User, Briefcase, 
  Image as ImageIcon, PhoneCall 
} from 'lucide-react'; // Added PhoneCall icon
import { Link, useLocation } from 'react-router-dom';

// Reusable Button Component (UNTOUCHED LOGIC)
const Button = ({ children, variant = 'primary', size = 'md', className = '', icon: Icon }) => {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-200',
    secondary: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50',
    ghost: 'bg-transparent text-blue-600 hover:bg-blue-50'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl font-bold transition-all duration-300 cursor-pointer font-display ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </motion.button>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Added 'Contact' to the navLinks array
  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Gallery', href: '/gallery', icon: ImageIcon },
    { name: 'Contact', href: '/contact', icon: PhoneCall },
  ];

  return (
    <>
    
      {/* --- TOP NAVBAR --- */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full z-50 pt-4 md:pt-6 font-['Poppins']"
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <div className={`px-4 md:px-8 flex justify-between items-center transition-all duration-500 rounded-full ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg py-2.5' : 'bg-white py-3.5 shadow-sm'}`}>
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="bg-black p-1.5 rounded-full">
                <Droplets className="text-white w-4 h-4 md:w-5 md:h-5" />
              </div>
              <span className="text-lg md:text-xl font-bold tracking-tight font-display text-red-600 whitespace-nowrap">
                AK <span className="text-slate-500 font-normal">Construction</span>
              </span>
            </Link>

            {/* Desktop Nav Links (Hidden on mobile/tablet) */}
            <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.slice(0, 4).map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`text-[13px] font-medium transition-colors duration-300 ${
                    location.pathname === link.href ? 'text-red-600 font-bold' : 'text-slate-600 hover:text-black'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Contact Button (HIDDEN ON MOBILE/TABLET, VISIBLE ON DESKTOP) */}
            <div className="hidden lg:block">
              <Button size="sm" className="!bg-black !text-white !rounded-full !px-8 !py-2 !text-[13px] hover:!bg-slate-800 shadow-none">
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* --- BOTTOM NAVIGATION (Mobile/Tablet View - Fixed Bottom Bar) --- */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-100 z-50 pb-safe shadow-[0_-8px_20px_rgba(0,0,0,0.03)] font-['Poppins']">
        <div className="flex justify-around items-center h-16 px-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.href;
            
            return (
              <Link 
                key={link.name} 
                to={link.href} 
                className="relative flex flex-col items-center justify-center w-full h-full group gap-1"
              >
                {/* Icon Wrapper for the Oval Hover Effect */}
                <div className="relative flex items-center justify-center w-14 h-8">
                  {/* --- Oval Hover/Active Background --- */}
                  <motion.div
                    className="absolute inset-0 rounded-full -z-10"
                    initial={false}
                    animate={{ 
                      backgroundColor: isActive ? '#e2e8f0' : 'transparent',
                      opacity: isActive ? 1 : 0
                    }}
                    whileHover={!isActive ? { 
                      opacity: 1, 
                      backgroundColor: '#f1f5f9', 
                    } : {}}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />

                  {/* Icon */}
                  <Icon 
                    className={`w-5 h-5 transition-colors duration-300 ${
                      isActive ? 'text-black' : 'text-slate-500 group-hover:text-black'
                    }`} 
                  />
                </div>

                {/* Text Label */}
                <span className={`text-[10px] font-bold transition-colors duration-300 ${
                  isActive ? 'text-black' : 'text-slate-500'
                }`}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;