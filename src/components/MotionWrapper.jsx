import { motion } from "framer-motion";

const MotionWrapper = ({
  children,
  delay = 0,
  type = "perspective", 
}) => {

  // 🔥 3D PERSPECTIVE REVEAL
  if (type === "perspective") {
    return (
      <div 
        className="w-full"
        style={{ perspective: "1200px" }} // Ithu thaan 3D effect-ku mukiym
      >
        <motion.div
          initial={{ 
            rotateX: -90, // Text kela paduthu irukkum
            opacity: 0, 
            y: 100 
          }}
          whileInView={{ 
            rotateX: 0,   // Straight-ah nippum
            opacity: 1, 
            y: 0 
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: delay,
            // Custom cubic-bezier for "Heavy" feel
            ease: [0.16, 1, 0.3, 1], 
          }}
          style={{ transformOrigin: "top center" }} // Top-ah center-ah vechu rotate aagum
        >
          {children}
        </motion.div>
      </div>
    );
  }

  // Default normal fade-up
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;