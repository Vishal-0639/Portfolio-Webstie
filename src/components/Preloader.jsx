import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }
        const step = Math.max(1, Math.floor((100 - prev) / 7) + 2);
        return Math.min(100, prev + step);
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="preloader-overlay"
      initial={{ y: 0 }}
      exit={{ 
        y: '-100%', 
        transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="preloader-content">
        {/* Animated VD Logo in Center */}
        <motion.div
          className="preloader-logo-wrapper"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src="/logo.png" alt="VD Logo" className="preloader-logo-img" />
          <div className="preloader-logo-glow"></div>
        </motion.div>

        {/* Welcome Tag */}
        <motion.span
          className="preloader-welcome-tag"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          WELCOME TO MY PORTFOLIO
        </motion.span>

        {/* Large Editorial Name */}
        <motion.h1
          className="preloader-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
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
          <span className="preloader-status">ENGINEERING SYSTEM EXPERIENCE</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
