import React from 'react';
import { Download, BookOpen, GraduationCap, Calendar, Award } from 'lucide-react';
import { portfolioData } from '../portfolioData';

const About = () => {
  const { description, stats } = portfolioData.aboutMe;
  const { name, resumeUrl, profileImg } = portfolioData.personalInfo;

  return (
    <section id="about">
      <div className="section-title-container">
        <span className="section-subtitle">CREATIVE PORTFOLIO</span>
        <h2>ABOUT ME</h2>
      </div>

      <div className="about-grid">
        {/* Left Column: Big uppercase title and bio text */}
        <div className="about-title-block">
          <h1 className="about-huge-header">
            HELLO, I'M <br />
            {name}
          </h1>
          <div className="about-text">
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Right Column: Portrait image overlaid on red circular backdrop */}
        <div className="about-image-badge-wrapper">
          <div className="about-circle-red-bg"></div>
          <img
            src={profileImg}
            alt={`${name} portrait`}
            className="about-portrait-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop';
            }}
          />
        </div>

        {/* Bottom Row: Stats Cards */}
        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-label">
              <BookOpen size={14} style={{ marginRight: '6px' }} />
              UNIVERSITY
            </div>
            <div className="stat-value">{stats.university}</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">
              <GraduationCap size={14} style={{ marginRight: '6px' }} />
              DEGREE
            </div>
            <div className="stat-value">{stats.degree}</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">
              <Calendar size={14} style={{ marginRight: '6px' }} />
              YEAR
            </div>
            <div className="stat-value">{stats.year}</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">
              <Award size={14} style={{ marginRight: '6px' }} />
              CGPA
            </div>
            <div className="stat-value">{stats.cgpa}</div>
          </div>
        </div>
      </div>

      <div className="about-cta" style={{ marginTop: '2.5rem', textAlign: 'left' }}>
        <a
          href={resumeUrl}
          download="Vishal_Dharsan_Resume.pdf"
          className="btn btn-primary"
          title="Download latest PDF CV"
        >
          <Download size={16} />
          DOWNLOAD RESUME
        </a>
      </div>
    </section>
  );
};

export default About;
