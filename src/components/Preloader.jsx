import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log("Autoplay check:", err);
        });
      }
    }

    // Safety fallback timer so user never gets stuck
    const fallbackTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 4500);

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
          onError={() => onComplete && onComplete()}
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
