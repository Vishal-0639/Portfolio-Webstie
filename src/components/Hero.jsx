import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';
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
    <section id="home" className="hero-immersive-section">
      {/* Ambient Large VD Logo Watermark in Background */}
      <div className="hero-ambient-watermark">
        <img src="/logo.png" alt="" className="hero-watermark-img" aria-hidden="true" />
      </div>

      <div className="hero-immersive-container">
        {/* Left/Main Column: Impactful Statement & Bio */}
        <motion.div 
          className="hero-main-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Availability Status Badge */}
          <motion.div 
            className="hero-status-pill"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="status-indicator-dot"></span>
            <span className="status-text">AVAILABLE FOR FULL-STACK & BACKEND ROLES</span>
          </motion.div>

          {/* Large Hero Headline */}
          <motion.h1 
            className="hero-statement-title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            Building backend systems that scale <span className="title-italic-accent">under real-world pressure.</span>
          </motion.h1>

          {/* Subtitle Bio */}
          <motion.p 
            className="hero-statement-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Pre-final-year Computer Science student at <strong>SKCET, Coimbatore</strong>. Specializing in <strong>Java, Spring Boot, React, and MySQL</strong>. I focus on clean API design, high-concurrency architecture, and algorithmic problem-solving.
          </motion.p>

          {/* Action Links */}
          <motion.div 
            className="hero-action-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="hero-link-primary"
              title="Explore featured projects"
            >
              <span>See selected work</span>
              <ArrowDown size={15} />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="hero-link-secondary"
              title="Get in touch"
            >
              <span>Let's talk</span>
              <ArrowRight size={15} />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column: Large High-Resolution Portrait with Floating Badge */}
        <motion.div 
          className="hero-image-column"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-portrait-frame">
            <div className="hero-portrait-gradient-overlay"></div>
            <img
              src={profileImg}
              alt={name}
              className="hero-main-photo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop';
              }}
            />
            {/* Floating Live Metric Card */}
            <motion.div 
              className="hero-live-metric-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="metric-icon-badge">
                <Sparkles size={16} />
              </div>
              <div className="metric-details">
                <span className="metric-number">150+ Solved</span>
                <span className="metric-label">LeetCode &bull; DSA Mastery</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
