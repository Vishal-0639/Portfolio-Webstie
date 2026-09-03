import React from 'react';
import { Github, Linkedin, Instagram, Code } from 'lucide-react';
import { portfolioData } from '../portfolioData';

const ThankYou = () => {
  const { name } = portfolioData.personalInfo;
  const { github, linkedin, leetcode, instagram } = portfolioData.socialLinks;

  return (
    <section id="thankyou" className="thankyou-section">
      <div className="thankyou-title-block">
        <h1 className="thankyou-title">THANK YOU</h1>
        <span className="thankyou-year">2026</span>
      </div>

      <p className="thankyou-subtitle">
        I appreciate you taking the time to review my portfolio. Feel free to explore my source repositories or connect with me via social handles.
      </p>
      
      <div className="thankyou-socials">
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="thankyou-social-btn"
            aria-label="Instagram Profile"
            title="Instagram"
          >
            <Instagram size={20} />
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="thankyou-social-btn"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <Github size={20} />
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="thankyou-social-btn"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        )}
        {leetcode && (
          <a
            href={leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="thankyou-social-btn"
            aria-label="LeetCode Profile"
            title="LeetCode"
          >
            <Code size={20} />
          </a>
        )}
      </div>

      <div className="thankyou-footer">
        <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
      </div>
    </section>
  );
};

export default ThankYou;
