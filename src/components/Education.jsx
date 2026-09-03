import React from 'react';
import { Calendar, GraduationCap } from 'lucide-react';
import { portfolioData } from '../portfolioData';

const Education = () => {
  const { education } = portfolioData;
  const { profileImg } = portfolioData.personalInfo;

  return (
    <section id="education">
      <div className="section-title-container">
        <span className="section-subtitle">ACADEMIC BACKGROUND</span>
        <h2>EDUCATION</h2>
      </div>

      <div className="qual-scene-grid">
        {/* Left Column: Portrait image overlaid on red circular backdrop */}
        <div className="qual-image-badge-wrapper">
          <div className="qual-circle-red-bg"></div>
          <img
            src={profileImg}
            alt="Education portrait"
            className="qual-portrait-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop';
            }}
          />
        </div>

        {/* Right Column: Direct Studies Timeline */}
        <div>
          <div className="education-timeline">
            {education.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
