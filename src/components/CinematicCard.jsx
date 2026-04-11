import { motion } from "framer-motion";

export default function CinematicCard({ img }) {
  return (
    <motion.div
      layout
      className="card"
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1],
      }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="image-wrapper">
        <img src={img.src} alt={img.title} />

        <div className="overlay">
          <h3>{img.title}</h3>
          <span>View Project →</span>
        </div>
      </div>
    </motion.div>
  );
}