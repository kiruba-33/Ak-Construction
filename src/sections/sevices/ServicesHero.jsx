import React, { useRef, useEffect, useLayoutEffect } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring
} from 'framer-motion';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesHero() {

  const containerRef = useRef(null);
  const bgTextRef = useRef(null);
  const mainLettersRef = useRef([]);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);

  // SCROLL
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // MOUSE PARALLAX
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = {
    damping: 25,
    stiffness: 150
  };

  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const translateX = useTransform(
    smoothMouseX,
    [-0.5, 0.5],
    ["-20px", "20px"]
  );

  const translateY = useTransform(
    smoothMouseY,
    [-0.5, 0.5],
    ["-20px", "20px"]
  );

  // MOUSE MOVE
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

  // PARALLAX
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "20%"]
  );

  // GSAP
  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out"
        }
      });

      gsap.set(
        [
          bgTextRef.current,
          subtitleRef.current,
          ".info-card"
        ],
        {
          opacity: 0,
          y: 50
        }
      );

      gsap.set(mainLettersRef.current, {
        opacity: 0,
        y: 100,
        filter: "blur(10px)"
      });

      tl.to(bgTextRef.current, {
        opacity: 0.04,
        y: 0,
        duration: 2
      })

      .to(mainLettersRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.5,
        stagger: 0.2
      }, "-=1.5")

      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1
      }, "-=1")

      .to(".info-card", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15
      }, "-=0.6");

      // BG SCALE
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        scale: 1.15,
      });

    }, containerRef);

    return () => ctx.revert();

  }, []);

  const letters = ["A", "K"];

  return (
    <section
      ref={containerRef}
      className="
        relative
        h-screen
        w-full
        overflow-hidden
        bg-[#050505]
        text-white
        flex
        items-center
        justify-center
      "
    >

      {/* NOISE */}
      <div className="absolute inset-0 z-[100] pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* BACKGROUND */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >

        {/* BG TEXT */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-10">

          <h1
            ref={bgTextRef}
            className="
              text-[140vw]
              sm:text-[110vw]
              md:text-[90vw]
              lg:text-[55vw]
              font-black
              leading-none
              tracking-[-0.15em]
              text-white/30
              select-none
              uppercase
              translate-y-[-5%]
              whitespace-nowrap
            "
          >
            SERVICES
          </h1>

        </div>

        {/* BACKGROUND IMAGE */}
       <img
  ref={imageRef}
  src="services/serviceshero.webp"
  alt="Services Background"
  loading="eager"
  fetchpriority="high"
  className="
    h-full
    w-full
    object-cover
    opacity-100
    brightness-110
    contrast-125
    scale-105
  "
/>

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-black/10 z-20" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60 z-20" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)] z-20" />

      </motion.div>

      {/* CONTENT */}
      <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">

        <motion.div
          style={{
            x: translateX,
            y: translateY
          }}
          className="
            relative
            w-full
            h-full
            flex
            flex-col
            items-center
            justify-center
            px-6
          "
        >

          {/* TOP SUBTITLE */}
          <div
            ref={subtitleRef}
            className="
              mb-[2vh]
              flex
              items-center
              justify-center
              gap-2
              sm:gap-4
              z-20
            "
          >

            <div className="h-[1px] w-4 sm:w-8 bg-red-500/50" />

            <span className="
              text-[10px]
              sm:text-[12px]
              md:text-[1.2vw]
              lg:text-[1vw]
              font-bold
              text-orange-500
              uppercase
              tracking-[0.8em]
              sm:tracking-[1.5em]
              leading-none
            ">
              services
            </span>

            <div className="h-[1px] w-4 sm:w-8 bg-red-500/50" />

          </div>

          {/* MAIN BRANDING */}
          <div className="flex gap-[4vw] sm:gap-[2vw]">

            {letters.map((letter, i) => (
              <span
                key={i}
                ref={(el) => (mainLettersRef.current[i] = el)}
                className="
                  text-[15vw]
                  sm:text-[12vw]
                  md:text-[10vw]
                  lg:text-[8vw]
                  font-black
                  leading-none
                  tracking-tighter
                  text-white/90
                  select-none
                  drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]
                "
              >
                {letter}
              </span>
            ))}

          </div>

          {/* FLOATING CARDS */}
          <div className="
            mt-10
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-4
            w-full
            max-w-4xl
            pointer-events-auto
          ">

            {[
              ["500+", "Projects Completed"],
              ["10+", "Years Experience"],
              ["100%", "Quality Focus"],
            ].map(([number, label], i) => (

              <div
                key={i}
               className="
  info-card
  bg-black/55
  border
  border-white/10
  rounded-2xl
  p-5
  text-center
  shadow-[0_10px_40px_rgba(0,0,0,0.35)]
"
              >

                <h3 className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-white
                ">
                  {number}
                </h3>

                <p className="
                  mt-2
                  text-xs
                  sm:text-sm
                  text-white/60
                ">
                  {label}
                </p>

              </div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}