import React from 'react';
import { Briefcase, Calendar, Building2, ChevronRight } from 'lucide-react';
import { portfolioData } from '../portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="experience-section">
      <div className="section-title-container">
        <span className="section-subtitle">WORK EXPERIENCE</span>
        <h2>INTERNSHIPS</h2>
      </div>

      <div className="experience-container">
        <div className="experience-cards-grid">
          {experience.map((item, index) => (
            <div key={index} className="experience-card">
              <div className="experience-card-header">
                <div className="experience-role-group">
                  <div className="experience-icon-badge">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="experience-role-title">{item.role}</h3>
                    <div className="experience-company-name">
                      <Building2 size={15} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                      {item.company}
                    </div>
                  </div>
                </div>

                <div className="experience-period-badge">
                  <Calendar size={13} style={{ display: 'inline', marginRight: '5px', verticalAlign: 'middle' }} />
                  {item.period}
                </div>
              </div>

              <div className="experience-card-body">
                <p className="experience-details-text">{item.details}</p>
              </div>

              <div className="experience-card-footer">
                <span className="experience-tag">Full-Stack Development</span>
                <span className="experience-tag">REST APIs</span>
                <span className="experience-tag">Git & Collaboration</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
