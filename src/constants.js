import { motion } from 'motion/react';

// Set y to 0 to stop the vertical "jump" on refresh
export const fadeInUp = {
  initial: { opacity: 0, y: 0 }, 
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4, // Faster duration for better feel
      ease: [0.33, 1, 0.68, 1] 
    }
  }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05, // Faster sequence
      delayChildren: 0.05
    }
  }
};

export const imageZoom = {
  initial: { scale: 1.02, opacity: 0 }, // Reduced scale for lighter render
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: 0.8, 
      ease: "easeOut"
    }
  }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { 
      duration: 0.3, 
      ease: "linear"
    }
  }
};

export const reveal = {
  initial: { opacity: 0, y: 0 }, // Stable position for reveal
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4, 
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  },
  viewport: { once: true, amount: 0.05 } // Triggers immediately
};