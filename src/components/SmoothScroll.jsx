import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;
export const getLenis = () => lenisInstance;

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisInstance = lenis;

    // 2. Sync ScrollTrigger with Lenis
    // User scroll pannum podhu ScrollTrigger-ku update panna solrom
    lenis.on('scroll', ScrollTrigger.update);

    // 3. Connect Lenis to GSAP's Ticker
    // Nee manual-ah vachirundha raf(time) function-ku badhula 
    // GSAP ticker use panrom, idhu innum performance-ah boost pannum
    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // Cleanup
    return () => {
      lenis.destroy();
      gsap.ticker.remove(update);
      lenisInstance = null;
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;