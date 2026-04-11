import { useState } from "react";
import { motion } from "framer-motion";
import CinematicCard from "./CinematicCard";

export default function CinematicGrid({ data }) {
  const [images, setImages] = useState(data);
  const [shuffling, setShuffling] = useState(false);

  const shuffleImages = () => {
    setShuffling(true);

    setTimeout(() => {
      const shuffled = [...images].sort(() => Math.random() - 0.5);
      setImages(shuffled);
      setShuffling(false);
    }, 300);
  };

  return (
    <div className="gallery-wrapper">
      <div className="top-bar">
        <h2>Cinematic Gallery</h2>
        <button onClick={shuffleImages}>Shuffle</button>
      </div>

      <motion.div
        layout
        className={`gallery ${shuffling ? "shuffling" : ""}`}
        transition={{
          duration: 0.7,
          ease: [0.25, 1, 0.5, 1],
        }}
      >
        {images.map((img) => (
          <CinematicCard key={img.id} img={img} />
        ))}
      </motion.div>
    </div>
  );
}