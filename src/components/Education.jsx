import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { portfolioData } from '../portfolioData';

const Education = () => {
  const { education } = portfolioData;
  const { aboutImg, profileImg } = portfolioData.personalInfo;

  return (
    <section id="education">
      <motion.div 
        className="section-title-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-subtitle">ACADEMIC BACKGROUND</span>
        <h2>EDUCATION</h2>
      </motion.div>

      <div className="qual-scene-grid">
        {/* Left Column: Portrait image in clean editorial frame */}
        <motion.div 
          className="qual-image-badge-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={aboutImg || profileImg || "/about_portrait.jpg"}
            alt="Education portrait"
            className="qual-portrait-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/about_portrait.jpg';
            }}
          />
        </motion.div>

        {/* Right Column: Direct Studies Timeline */}
        <div>
          <div className="education-timeline">
            {education.map((item, index) => (
              <motion.div 
                key={index} 
                className="timeline-item"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="timeline-dot"></div>
                <motion.div 
                  className="timeline-content"
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                    <h3 className="timeline-degree">{item.degree}</h3>
                    <span className="timeline-period">
                      <Calendar size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      {item.period}
                    </span>
                  </div>
                  <div className="timeline-institution">{item.institution}</div>
                  <div className="timeline-status">{item.status}</div>
                  {item.details && <p className="timeline-details">{item.details}</p>}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
