import React, { useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import AnimatedBranding from '../../components/AnimatedBranding';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// GSAP Plugin Register
gsap.registerPlugin(ScrollTrigger);

export default function AboutHeros() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const gridRef = useRef(null);
  
  // Framer Motion Scroll Progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const translateX = useTransform(smoothMouseX, [-0.5, 0.5], ["-10px", "10px"]);
  const translateY = useTransform(smoothMouseY, [-0.5, 0.5], ["-10px", "10px"]);

  // Scroll Transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Initial Reveal Animation
      tl.from(imageRef.current, { 
        opacity: 0, 
        scale: 1.1, 
        duration: 2 
      })
      .from(".grid-item", { 
        opacity: 0, 
        y: 60, 
        duration: 1.2, 
        stagger: 0.1,
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" 
      }, "-=1.5");

      // Scroll Scrub
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        scale: 1.2,
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  // ORIGINAL IMAGES
  const galleryItems = [
    { id: 1, src: "/aboutimages/abouthero1.webp" }, 
    { id: 2, src: "/aboutimages/abouthero2.webp" }, 
    { id: 3, src: "/aboutimages/abouthero3.webp" } 
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-[#050505] font-sans flex items-center justify-center pt-24 md:pt-32 lg:pt-40">
      
      {/* Background Image Layer */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        
        {/* BACKGROUND IMAGE */}
        <img
          ref={imageRef}
          src="aboutimages/abouthero.webp"
          alt="AK Construction Background"
          className="h-full w-full object-cover opacity-75"
          loading="eager"
          fetchpriority="high"
        />

        {/* SOFTER FADE OVERLAYS */}
        <div className="absolute inset-0 bg-black/40 z-20" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60 z-20" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)] z-20" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-30 w-full max-w-7xl mx-auto flex flex-col items-center justify-center py-6 md:py-10 px-4">
        
        {/* Branding Section */}
        <div className="mb-12 md:mb-20 w-full h-auto pointer-events-none">
          <AnimatedBranding 
            brandingData={[{ text: "A", color: "text-white" }, { text: "K", color: "text-white/80" }]}
            subtitle="about us"
            subtitleColor="text-orange-500"
            lineColor="bg-orange-500/50"
            motionValues={{ x: translateX, y: textY, translateY: translateY }}
          />
        </div>

        {/* Gallery Grid Section */}
        <div ref={gridRef} className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="grid-item relative h-[160px] sm:h-[220px] md:h-[28vh] lg:h-[35vh] max-h-[450px] overflow-hidden shadow-2xl rounded-sm group"
              style={{ clipPath: "polygon(0 12%, 100% 0, 100% 100%, 0% 100%)" }}
            >
              <img 
                src={item.src} 
                loading="lazy"
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                alt="Construction Project" 
              />

              <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 z-[100] pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}