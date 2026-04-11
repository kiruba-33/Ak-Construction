import React, { useRef, useEffect, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'; 
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register Plugin
gsap.registerPlugin(ScrollTrigger);

export default function HomeHero() {
  const containerRef = useRef(null);
  const bgTextRef = useRef(null);
  const mainLettersRef = useRef([]);
  const subtitleRef = useRef(null);
  const videoRef = useRef(null);
  
  // Existing Framer Motion Scroll Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Existing Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const translateX = useTransform(smoothMouseX, [-0.5, 0.5], ["-20px", "20px"]);
  const translateY = useTransform(smoothMouseY, [-0.5, 0.5], ["-20px", "20px"]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX / innerWidth - 0.5);
      mouseY.set(clientY / innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  // --- GSAP REVEAL & SCROLL LOGIC ---
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Initial State (Hidden)
      gsap.set([bgTextRef.current, subtitleRef.current, ".info-bottom"], { opacity: 0, y: 50 });
      gsap.set(mainLettersRef.current, { opacity: 0, y: 100, filter: "blur(10px)" });

      // 2. Reveal Sequence
      tl.to(bgTextRef.current, { opacity: 0.15, y: 0, duration: 2 })
        .to(mainLettersRef.current, { 
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)", 
          duration: 1.5, 
          stagger: 0.2 
        }, "-=1.5")
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 1 }, "-=1")
        .to(".info-bottom", { opacity: 1, y: 0, duration: 1, stagger: 0.2 }, "-=0.5");

      // 3. ScrollTrigger Scrub (Lenis kooda sync aagi work aagum)
      gsap.to(videoRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        scale: 1.2,
        opacity: 0.2
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const letters = ["A", "K"];

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden font-sans bg-[#050505] text-white flex items-center justify-center">
      
      {/* Noise Texture */}
      <div className="absolute inset-0 z-[100] pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Background Layer */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-10">
          <h1
            ref={bgTextRef}
            className="text-[150vw] sm:text-[120vw] md:text-[100vw] lg:text-[60vw] font-black leading-none tracking-[-0.15em] text-white select-none uppercase translate-y-[-5%] whitespace-nowrap"
          >
            AK
          </h1>
        </div>

        <video
          ref={videoRef}
          autoPlay loop muted playsInline
          className="h-full w-full object-cover opacity-50 grayscale-[0.1] relative z-0"
        >
          <source src="hero-video.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black z-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-20" />
      </motion.div>

      {/* Foreground Content */}
      <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
        <motion.div style={{ y: textY, x: translateX, y: translateY }} className="relative w-full h-full flex flex-col items-center justify-center">
          <div className="relative perspective-[1000px] flex flex-col items-center">
            <div className="absolute inset-0 bg-orange-500/10 blur-[120px] rounded-full scale-150 pointer-events-none" />

            {/* Subtitle */}
            <div ref={subtitleRef} className="mb-[2vh] flex items-center justify-center gap-2 sm:gap-4 z-20">
              <div className="h-[1px] w-4 sm:w-8 bg-orange-500/50" />
              <span className="text-[10px] sm:text-[12px] md:text-[1.2vw] lg:text-[1vw] font-bold text-orange-500 uppercase tracking-[0.8em] sm:tracking-[1.5em] leading-none">
                construction
              </span>
              <div className="h-[1px] w-4 sm:w-8 bg-orange-500/50" />
            </div>

            {/* Main Branding */}
            <div className="flex gap-[4vw] sm:gap-[2vw]">
              {letters.map((letter, i) => (
                <span
                  key={i}
                  ref={(el) => (mainLettersRef.current[i] = el)}
                  className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] font-black leading-none tracking-tighter text-white/90 select-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Information */}
      <div className="absolute bottom-8 sm:bottom-12 left-0 w-full px-6 sm:px-12 flex flex-col sm:flex-row justify-between items-center sm:items-end z-20 gap-6 sm:gap-0">
        <div className="info-bottom hidden sm:block">
          <div className="flex items-center gap-4">
            <div className="w-8 h-[1px] bg-orange-500/50" />
            <p className="text-[7px] md:text-[8px] font-bold tracking-[0.5em] text-white/30 uppercase">Premium Architectural Studio</p>
          </div>
        </div>

        <div className="info-bottom max-w-[280px] sm:max-w-xs text-center sm:text-right">
          <p className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] text-orange-500 uppercase mb-1 sm:mb-2">Architecture with meaning</p>
          <p className="text-[8px] md:text-[9px] leading-relaxed text-white/30 font-medium">
            Bespoke architectural solutions crafted with precision. We build beyond structures, creating living spaces that inspire.
          </p>
        </div>
      </div>
    </section>
  );
}