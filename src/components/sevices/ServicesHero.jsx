import React, { useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { SERVICES } from '../../data/Services';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesHero() {
  const containerRef = useRef(null);
  const bgImgRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      gsap.to(bgImgRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        scale: 1.3,
        opacity: 0.1
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full bg-transparent font-sans text-[#1A1A1A]">
      <div className="relative h-[100dvh] w-full overflow-hidden">
        
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0 pointer-events-none">
          <img ref={bgImgRef} src="https://picsum.photos/seed/construction-site/1920/1080?blur=10" className="h-[120%] w-full object-cover opacity-20" alt="Parallax" />
        </motion.div>

        <div className="relative z-20 h-full w-full flex flex-col items-center justify-center px-4 sm:px-6 py-4 text-center">
          <div className="service-reveal inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-[8px] sm:text-[10px] font-bold text-orange-600 border border-orange-200 uppercase tracking-wider mb-2">
            Trusted by over 5,000 homeowners
          </div>
          <h1 className="service-reveal mt-2 sm:mt-4 max-w-4xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
            Build Your Dream <br className="hidden sm:block" />
            <span className="relative inline-block">with Expert Construction</span>
          </h1>
          <p className="service-reveal mt-4 max-w-xl text-sm text-gray-600">High-quality construction and design services tailored to your needs.</p>

          <div className="service-reveal relative mt-10 w-full max-w-[1200px]">
            <div className="flex justify-center items-end gap-4">
              <AnimatePresence>
                {[...Array(7)].map((_, i) => {
                  const index = (currentIndex + i) % SERVICES.length;
                  const service = SERVICES[index];
                  const offset = i - 3;
                  const isVisible = (i >= 2 && i <= 4) || (windowWidth >= 640 && i >= 1 && i <= 5) || windowWidth >= 1024;
                  if (!isVisible) return null;
                  return (
                    <motion.div 
                      key={`${service.id}-${i}`} 
                      animate={{ y: Math.abs(offset) * 12, scale: 1 - Math.abs(offset) * 0.08, opacity: 1 - Math.abs(offset) * 0.2 }}
                      className="relative group overflow-hidden rounded-2xl border-4 border-white shadow-xl bg-white h-48 w-32 sm:h-60 sm:w-40 lg:h-72 lg:w-48"
                    >
                      <img src={service.image} className="h-full w-full object-cover" alt="" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-left">
                        <p className="text-[8px] uppercase tracking-widest text-orange-400 font-bold">{service.category}</p>
                        <h3 className="text-[11px] sm:text-sm font-bold leading-tight">{service.title}</h3>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}