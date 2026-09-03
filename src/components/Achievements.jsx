import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { portfolioData } from '../portfolioData';

const Achievements = () => {
  const achievementsList = portfolioData.achievements;

  if (!achievementsList || achievementsList.length === 0) {
    return null; // Keep it completely hidden if there's no data
  }

  return (
    <section id="achievements">
      <div className="section-title-container">
        <span className="section-subtitle">Milestones & Achievements</span>
        <h2>Achievements</h2>
      </div>

      <div className="certs-grid">
        {achievementsList.map((item, index) => {
          const CardContent = (
            <>
              <div className="cert-icon-wrapper">
                <Award size={24} />
              </div>
              <div className="cert-info">
                <h3 className="cert-title">{item.title}</h3>
                <span className="cert-issuer">{item.description}</span>
                {item.date && (
                  <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-light)', marginTop: '0.25rem' }}>
                    {item.date}
                  </span>
                )}
              </div>
              {item.url && (
                <div style={{ color: 'var(--text-light)' }}>
                  <ExternalLink size={16} />
                </div>
              )}
            </>
          );

          if (item.url) {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card"
                title={`View details for ${item.title}`}
              >
                {CardContent}
              </a>
            );
          }

          return (
            <div key={index} className="cert-card" style={{ cursor: 'default' }}>
              {CardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
