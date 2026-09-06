import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Instagram, Sun, Moon } from 'lucide-react';
import { portfolioData } from '../portfolioData';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);
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

  const menuItems = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Projects', target: 'projects' },
    { label: 'Experience', target: 'experience' },
    { label: 'Education', target: 'education' },
    { label: 'Contact', target: 'contact' }
  ];

  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo" onClick={(e) => handleNavClick(e, 'home')} aria-label="Home">
        <img src="/logo.png" alt="VD Logo" className="nav-logo-img" />
      </a>

      {/* Navigation Links */}
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        {menuItems.map((item) => (
          <li key={item.target}>
            <a
              href={`#${item.target}`}
              className="nav-link"
              onClick={(e) => handleNavClick(e, item.target)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Social Links & Controls */}
      <div className="nav-actions">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
          aria-label="Toggle Light/Dark Mode"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-main)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '4px'
          }}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {portfolioData.socialLinks.instagram && (
          <a
            href={portfolioData.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="social-nav-link"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
        )}
        <a
          href={portfolioData.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="social-nav-link"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
        <a
          href={portfolioData.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="social-nav-link"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>

        {/* Mobile Menu Icon */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
