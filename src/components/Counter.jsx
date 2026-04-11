import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({ value, duration = 2, delay = 0 }) => {
  const ref = useRef(null);
  
  // Mobile screens-ku -100px romba athigam, so -20px nu maathiruken. 
  // Ippo mobile-la scroll pannuna udaney counter start aagidum buddy.
  const isInView = useInView(ref, { once: true, margin: "-20px" }); 
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: duration,
        delay: delay,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, count, value, duration, delay]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default Counter;