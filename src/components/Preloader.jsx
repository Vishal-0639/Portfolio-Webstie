import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Smoothly increment counter from 0 to 100 over ~1.6 seconds
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }
        // Accelerating curve
        const step = Math.max(1, Math.floor((100 - prev) / 8) + 2);
        return Math.min(100, prev + step);
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="preloader-overlay"
      initial={{ y: 0 }}
      exit={{ 
        y: '-100%', 
        transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="preloader-content">
        {/* Welcome Tag */}
        <motion.span
          className="preloader-welcome-tag"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          WELCOME TO MY PORTFOLIO
        </motion.span>

        {/* Large Editorial Name */}
        <motion.h1
          className="preloader-title"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Vishal Dharsan
        </motion.h1>

        {/* Elegant Expanding Divider Line */}
        <div className="preloader-line-track">
          <motion.div
            className="preloader-line-fill"
            style={{ width: `${count}%` }}
          />
        </div>

        {/* Live Percentage Counter & Status */}
        <div className="preloader-footer">
          <span className="preloader-counter">{count}%</span>
          <span className="preloader-status">INITIALIZING EXPERIENCE</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
