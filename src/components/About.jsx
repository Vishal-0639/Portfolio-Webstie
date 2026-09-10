import React from 'react';
import { motion } from 'framer-motion';
import { Download, BookOpen, GraduationCap, Calendar, Award } from 'lucide-react';
import { portfolioData } from '../portfolioData';

const About = () => {
  const { description, stats } = portfolioData.aboutMe;
  const { name, resumeUrl, aboutImg, profileImg } = portfolioData.personalInfo;

  return (
    <section id="about">
      <motion.div 
        className="section-title-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-subtitle">CREATIVE PORTFOLIO</span>
        <h2>ABOUT ME</h2>
      </motion.div>

      <div className="about-grid">
        {/* Left Column: Big uppercase title and bio text */}
        <motion.div 
          className="about-title-block"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="about-huge-header">
            HELLO, I'M <br />
            {name}
          </h1>
          <div className="about-text">
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Portrait image with clean editorial frame */}
        <motion.div 
          className="about-image-badge-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={aboutImg || profileImg || "/about_portrait.jpg"}
            alt={`${name} portrait`}
            className="about-portrait-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/about_portrait.jpg';
            }}
          />
        </motion.div>

        {/* Bottom Row: Stats Cards with Staggered Entrance */}
        <div className="about-stats">
          {[
            { icon: BookOpen, label: 'UNIVERSITY', value: stats.university },
            { icon: GraduationCap, label: 'DEGREE', value: stats.degree },
            { icon: Calendar, label: 'YEAR', value: stats.year },
            { icon: Award, label: 'CGPA', value: stats.cgpa },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={stat.label}
                className="stat-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="stat-label">
                  <Icon size={14} style={{ marginRight: '6px' }} />
                  {stat.label}
                </div>
                <div className="stat-value">{stat.value}</div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div 
        className="about-cta" 
        style={{ marginTop: '2.5rem', textAlign: 'left' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          href={resumeUrl}
          download="Vishal_Dharsan_Resume.pdf"
          className="btn btn-primary"
          title="Download latest PDF CV"
        >
          <Download size={16} />
          DOWNLOAD RESUME
        </motion.a>
      </motion.div>
    </section>
  );
};

export default About;
