import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { portfolioData } from '../portfolioData';

const Certifications = () => {
  const certList = portfolioData.certifications;

  return (
    <section id="certifications">
      <motion.div 
        className="section-title-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-subtitle">Verified achievements</span>
        <h2>Certifications</h2>
      </motion.div>

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
              <motion.a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card"
                title={`View ${cert.title} certificate`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {CardContent}
              </motion.a>
            );
          }

          return (
            <motion.div 
              key={index} 
              className="cert-card" 
              style={{ cursor: 'default' }}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              {CardContent}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;
