import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useLayoutEffect,
} from "react";
import { DESTINATIONS } from "../../data/GalleryData";
import gsap from "gsap";

export default function GalleryHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerRef = useRef(null);

  // IMPORTANT FIX
  const firstLoadRef = useRef(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % DESTINATIONS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  // INITIAL PAGE LOAD ANIMATION
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Background first image reveal
      gsap.fromTo(
        `.bg-img-${currentIndex}`,
        {
          scale: 1.15,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.8,
          ease: "power3.out",
        }
      );

      // TEXT
      gsap.fromTo(
        ".reveal-text",
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
        }
      );

      // PREVIEW CARDS
      gsap.fromTo(
        ".gallery-card",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: 0.4,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // SLIDE CHANGE ANIMATION
  useLayoutEffect(() => {
    // VERY IMPORTANT FIX
    if (firstLoadRef.current) {
      firstLoadRef.current = false;
      return;
    }

    const ctx = gsap.context(() => {
      // Kill previous animations
      gsap.killTweensOf(".reveal-text");

      // Background animation
      gsap.fromTo(
        `.bg-img-${currentIndex}`,
        {
          y: 300,
          scale: 0.8,
          opacity: 0,
          borderRadius: "40px",
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          borderRadius: "0px",
          duration: 1.6,
          ease: "expo.out",
        }
      );

      // TEXT ANIMATION
      gsap.fromTo(
        ".reveal-text",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [currentIndex]);

  const current = DESTINATIONS[currentIndex];

  const visibleCards = [];

  for (let i = 1; i <= 4; i++) {
    const index = (currentIndex + i) % DESTINATIONS.length;
    visibleCards.push(DESTINATIONS[index]);
  }

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black text-white"
    >
      {/* BACKGROUND IMAGES */}
      {DESTINATIONS.map((item, index) => (
        <div
          key={item.id}
          className={`bg-img-${index} absolute inset-0 overflow-hidden`}
          style={{
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 10 : 0,
          }}
        >
          <img
            src={item.image}
            alt="Gallery background"
            loading={index === 0 ? "eager" : "lazy"}
            fetchpriority={index === 0 ? "high" : "auto"}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
        </div>
      ))}

      {/* HERO CONTENT */}
      <div className="relative z-20 flex flex-col justify-center h-full px-6 sm:px-10 md:px-16 lg:px-24 pb-40 md:pb-48">
        <p className="reveal-text uppercase text-[10px] sm:text-xs tracking-[0.3em] text-white/70">
          {current.location}
        </p>

        <h1 className="reveal-text mt-3 sm:mt-4 text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9]">
          {current.title}
        </h1>

        <p className="reveal-text mt-4 sm:mt-6 max-w-xs sm:max-w-md text-xs sm:text-sm text-white/70">
          {current.description}
        </p>
      </div>

      {/* PREVIEW CARDS */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-30 px-6 sm:px-10 md:px-16 lg:px-24 flex justify-end">
        <div className="flex gap-3 sm:gap-4 overflow-hidden">
          {visibleCards.map((item) => (
            <div
              key={item.id}
              className="gallery-card w-24 h-32 sm:w-32 sm:h-48 md:w-36 md:h-52 lg:w-44 lg:h-64 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}