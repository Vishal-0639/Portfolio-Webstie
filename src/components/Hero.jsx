import React from 'react';
import { portfolioData } from '../portfolioData';

const Hero = () => {
  const { name, role, bio, profileImg } = portfolioData.personalInfo;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Sticky navbar height
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
      <div className="hero-giant-word-container">
        <div className="hero-giant-word-bg">PORTFOLIO</div>
        
        {/* Layered Portrait Card */}
        <div className="hero-overlay-portrait-wrapper">
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
        </div>
      </div>

      {/* Layout Content Row */}
      <div className="hero-content-details">
        {/* Left Side: Name and Role Description */}
        <div className="hero-desc-block">
          <span className="hero-name-label">{name}</span>
          <span className="hero-role-label">{role}</span>
          <p className="hero-paragraph">{bio}</p>
        </div>

        {/* Right Side: START & END Menu panel */}
        <div className="hero-game-menu">
          <button 
            onClick={() => scrollToSection('about')} 
            className="menu-item-btn"
            title="START JOURNEY"
          >
            START
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="menu-item-btn"
            title="GO TO END / CONTACT"
          >
            END
          </button>
        </div>
      </div>

      {/* Scroll mouse indicator */}
      <div className="hero-scroll">
        <a 
          href="#about" 
          className="scroll-down" 
          onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
        >
          <span>SCROLL</span>
          <div className="mouse-icon">
            <div className="mouse-wheel"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
