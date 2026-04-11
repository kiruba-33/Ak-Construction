import React, { useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import AnimatedBranding from '../AnimatedBranding';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutHeros() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const gridRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const translateX = useTransform(smoothMouseX, [-0.5, 0.5], ["-10px", "10px"]);
  const translateY = useTransform(smoothMouseY, [-0.5, 0.5], ["-10px", "10px"]);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(videoRef.current, { opacity: 0, duration: 2 })
        .from(".grid-item", { 
          opacity: 0, 
          y: 60, 
          duration: 1.2, 
          stagger: 0.1,
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" 
        }, "-=1.5");

      gsap.to(videoRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        scale: 1.1,
        filter: "brightness(0.3)"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const galleryItems = [
    { id: 1, src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070" },
    { id: 2, src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070" },
    { id: 3, src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" }
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-[#050505] font-sans flex items-center justify-center pt-24 md:pt-32 lg:pt-40">
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <video ref={videoRef} autoPlay loop muted playsInline className="h-full w-full object-cover opacity-40 grayscale-[0.2]">
          <source src="hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black z-20" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center py-6 md:py-10 px-4">
        <div className="mb-12 md:mb-20 w-full h-auto pointer-events-none">
          <AnimatedBranding 
            brandingData={[{ text: "A", color: "text-white" }, { text: "K", color: "text-white/80" }]}
            subtitle="about us"
            subtitleColor="text-orange-500"
            lineColor="bg-orange-500/50"
            motionValues={{ x: translateX, y: textY, translateY: translateY }}
          />
        </div>

        <div ref={gridRef} className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="grid-item relative h-[160px] sm:h-[220px] md:h-[28vh] lg:h-[35vh] max-h-[450px] overflow-hidden shadow-2xl rounded-sm"
              style={{ clipPath: "polygon(0 12%, 100% 0, 100% 100%, 0% 100%)" }}
            >
              <img src={item.src} className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-1000" alt="Gallery" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 z-[100] pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}