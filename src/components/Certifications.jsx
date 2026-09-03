import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { portfolioData } from '../portfolioData';

const Certifications = () => {
  const certList = portfolioData.certifications;

  return (
    <section id="certifications">
      <div className="section-title-container">
        <span className="section-subtitle">Verified achievements</span>
        <h2>Certifications</h2>
      </div>

      <div className="certs-grid">
        {certList.map((cert, index) => {
          const CardContent = (
            <>
              <div className="cert-icon-wrapper">
                <Award size={24} />
              </div>
              <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <span className="cert-issuer">{cert.issuer} {cert.date && `• ${cert.date}`}</span>
              </div>
              {cert.url && (
                <div style={{ color: 'var(--text-light)' }}>
                  <ExternalLink size={16} />
                </div>
              )}
            </>
          );

          if (cert.url) {
            return (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card"
                title={`View ${cert.title} certificate`}
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

export default Certifications;
