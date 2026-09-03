import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../portfolioData';

const Footer = () => {
  const { name, role } = portfolioData.personalInfo;
  const { github, linkedin, email } = portfolioData.socialLinks;

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 70;
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
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">{name}</div>
          <div className="footer-subtitle">{role}</div>
        </div>

        <div className="footer-socials">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub"
              title="GitHub Profile"
            >
              <Github size={18} />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
              title="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="footer-social-link"
              aria-label="Email"
              title="Email Contact"
            >
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="footer-bottom-link">
            Home
          </a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="footer-bottom-link">
            About
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="footer-bottom-link">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
