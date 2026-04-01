// src/components/gallery/GalleryViewer.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const GalleryViewer = ({ selectedIndex, setSelectedIndex, images }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClose = () => {
    setSelectedIndex(null);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
    resetZoom();
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
    resetZoom();
  };

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // 🔥 keyboard
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // 🔥 zoom (scroll)
  const handleWheel = (e) => {
    e.preventDefault();
    let newScale = scale + e.deltaY * -0.001;
    newScale = Math.min(Math.max(1, newScale), 3);
    setScale(newScale);
  };

  return (
    <AnimatePresence>
      {selectedIndex !== null && (
        <motion.div
          className="fixed inset-0 bg-black/95 z-[999] flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          {/* CLOSE */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          {/* IMAGE */}
          <div
            className="flex-1 flex items-center justify-center w-full"
            onWheel={handleWheel}
          >
            <motion.img
              key={images[selectedIndex].id}
              src={images[selectedIndex].url}
              drag
              dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
              style={{ scale, x: position.x, y: position.y }}
              onDragEnd={(e, info) =>
                setPosition({
                  x: position.x + info.offset.x,
                  y: position.y + info.offset.y,
                })
              }
              className="max-h-[80vh] max-w-[90vw] object-contain cursor-grab"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale }}
              exit={{ opacity: 0 }}
            />
          </div>

          {/* NAV */}
          <button
            onClick={handlePrev}
            className="absolute left-6 text-white text-4xl"
          >
            ‹
          </button>

          <button
            onClick={handleNext}
            className="absolute right-6 text-white text-4xl"
          >
            ›
          </button>

          {/* 🔥 THUMBNAILS */}
          <div className="w-full overflow-x-auto px-6 py-4 flex gap-3 bg-black/60 backdrop-blur-md">
            {images.map((img, i) => (
              <img
                key={img.id}
                src={img.url}
                onClick={() => {
                  setSelectedIndex(i);
                  resetZoom();
                }}
                className={`h-16 w-24 object-cover rounded-md cursor-pointer border-2 ${
                  i === selectedIndex
                    ? "border-white"
                    : "border-transparent opacity-60"
                }`}
              />
            ))}
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GalleryViewer;