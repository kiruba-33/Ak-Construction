import { motion } from "framer-motion";

const SlideIn = ({ children, direction = "left", delay = 0 }) => {
  const xValue = direction === "left" ? -80 : 80;

  return (
    <motion.div
      initial={{ opacity: 0, x: xValue }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;