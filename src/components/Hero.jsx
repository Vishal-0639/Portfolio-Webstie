import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../portfolioData';

const Hero = () => {
  const { name, role, bio, profileImg } = portfolioData.personalInfo;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Giant Overlay Container */}
      <motion.div 
        className="hero-giant-word-container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div 
          className="hero-giant-word-bg"
          initial={{ letterSpacing: '8px', opacity: 0 }}
          animate={{ letterSpacing: '4px', opacity: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          PORTFOLIO
        </motion.div>
        
        {/* Layered Portrait Card with Spring Motion */}
        <motion.div 
          className="hero-overlay-portrait-wrapper"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 90, damping: 15 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="hero-badge-red-card">
            <img
              src={profileImg}
              alt={name}
              className="hero-badge-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop';
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Layout Content Row with Staggered Fade In */}
      <div className="hero-content-details">
        {/* Left Side: Name and Role Description */}
        <motion.div 
          className="hero-desc-block"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero-name-label">{name}</span>
          <span className="hero-role-label">{role}</span>
          <p className="hero-paragraph">{bio}</p>
        </motion.div>

        {/* Right Side: START & END Menu panel */}
        <motion.div 
          className="hero-game-menu"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.button 
            whileHover={{ scale: 1.08, x: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('about')} 
            className="menu-item-btn"
            title="START JOURNEY"
          >
            START
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.08, x: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')} 
            className="menu-item-btn"
            title="GO TO END / CONTACT"
          >
            END
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll mouse indicator */}
      <motion.div 
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}
          aria-label="Scroll to About section"
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
