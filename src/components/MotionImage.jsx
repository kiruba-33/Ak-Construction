import { motion } from "framer-motion";
import { memo } from "react";

const MotionImage = ({ src, alt, className, delay = 0 }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6, // reduce from 0.9
        delay,
        ease: "easeOut",
      }}
    />
  );
};

export default memo(MotionImage);