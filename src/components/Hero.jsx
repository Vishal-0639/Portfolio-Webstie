import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Code2 } from 'lucide-react';
import { portfolioData } from '../portfolioData';

const Hero = () => {
  const { name, profileImg } = portfolioData.personalInfo;

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
    <section id="home" className="hero-split-section">
      <div className="hero-split-container">
        {/* Left Column: Text & CTAs */}
        <motion.div 
          className="hero-left-column"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Index Tracker Badge */}
          <div className="hero-tracker-badge">
            <span className="tracker-line"></span>
            <span className="tracker-text">01 • SOFTWARE DEVELOPER & CSE</span>
          </div>

          {/* Large 2-Line Editorial Name */}
          <h1 className="hero-editorial-title">
            <motion.span 
              className="title-line"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Vishal
            </motion.span>
            <motion.span 
              className="title-line accent-dot"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              Dharsan<span>.</span>
            </motion.span>
          </h1>

          {/* Tech Tagline */}
          <motion.div 
            className="hero-tech-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <span className="tech-badge-pill">
              <Code2 size={13} style={{ display: 'inline', marginRight: '5px', verticalAlign: 'middle', color: '#ef4444' }} />
              JAVA &bull; SPRING BOOT &bull; REACT &bull; DSA
            </span>
          </motion.div>

          {/* Bio Description */}
          <motion.p 
            className="hero-editorial-bio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            I build <strong>scalable backend systems</strong> and high-performance web applications. Pre-final-year CSE student at <strong>SKCET, Coimbatore</strong> with hands-on experience in full-stack development and algorithmic problem solving. Open to internships and impactful software engineering opportunities.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            className="hero-buttons-group"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollToSection('projects')}
              className="btn btn-hero-primary"
              title="Explore Featured Projects"
            >
              VIEW WORK
              <ArrowUpRight size={16} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollToSection('contact')}
              className="btn btn-hero-ghost"
              title="Get in touch"
            >
              CONTACT
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column: Large High-Contrast Portrait */}
        <motion.div 
          className="hero-right-column"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-portrait-container">
            <div className="hero-portrait-vignette"></div>
            <img
              src={profileImg}
              alt={name}
              className="hero-editorial-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop';
              }}
            />
            {/* Subtle floating badge */}
            <motion.div 
              className="hero-floating-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              whileHover={{ scale: 1.06 }}
            >
              <span className="live-pulse-dot"></span>
              <span>Available for Hire &bull; 2026</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
