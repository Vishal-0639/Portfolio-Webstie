import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Safety fallback timer if video fails to autoplay
    const fallbackTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3200);

    return () => clearTimeout(fallbackTimer);
  }, [onComplete]);

  const handleVideoEnded = () => {
    if (onComplete) onComplete();
  };

  return (
    <motion.div
      className="preloader-overlay"
      initial={{ y: 0 }}
      exit={{ 
        y: '-100%', 
        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="preloader-fullscreen-container">
        <video
          ref={videoRef}
          src="/logo_intro.mp4"
          className="preloader-fullscreen-video"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnded}
        />
      </div>

      {/* Discreet Skip Button */}
      <button 
        onClick={() => onComplete && onComplete()} 
        className="preloader-skip-btn"
        title="Skip intro animation"
      >
        SKIP &rarr;
      </button>
    </motion.div>
  );
};

export default Preloader;
