import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { portfolioData } from '../portfolioData';

const Hero = () => {
  const { name, heroBgImg } = portfolioData.personalInfo;

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
    <section id="home" className="hero-khaled-section">
      {/* Ambient Large VD Logo Watermark Centered in Background */}
      <div className="hero-ambient-watermark">
        <img src="/logo.png" alt="" className="hero-watermark-img" aria-hidden="true" />
      </div>

      {/* Full Hero Atmospheric Background Image */}
      <div className="hero-full-bg-container">
        <img
          src={heroBgImg || "/hero_portrait.jpg"}
          alt={name}
          className="hero-full-bg-img"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/hero_portrait.jpg';
          }}
        />
        <div className="hero-full-bg-overlay"></div>
      </div>

      <div className="hero-khaled-container">
        {/* Availability Status Badge Centered */}
        <motion.div 
          className="hero-status-pill"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span className="status-indicator-dot"></span>
          <span className="status-text">AVAILABLE FOR FULL-STACK & BACKEND ROLES</span>
        </motion.div>

        {/* Bottom Content Row: Left Big Headline + Right Bio & Action Links */}
        <div className="hero-bottom-grid">
          <motion.div 
            className="hero-headline-col"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="hero-statement-title">
              Building backend systems that work <span className="title-italic-accent">under real-world pressure.</span>
            </h1>
          </motion.div>

          <motion.div 
            className="hero-details-col"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="hero-statement-desc">
              Pre-final-year Computer Science student at <strong>SKCET, Coimbatore</strong>. Specializing in <strong>Java, Spring Boot, React, and MySQL</strong>. I architect resilient microservices, high-concurrency pipelines, and clean transactional APIs.
            </p>

            <div className="hero-action-links">
              <button
                onClick={() => scrollToSection('projects')}
                className="hero-link-primary"
                title="Explore featured projects"
              >
                <span>See selected work</span>
                <ArrowDown size={14} />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="hero-link-secondary"
                title="Get in touch"
              >
                <span>Let's talk</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
