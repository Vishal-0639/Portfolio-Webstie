import React, { useRef } from 'react';
import { Github, ExternalLink, Sparkles } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const { title, description, technologies, image, github, demo } = project;
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((centerY - y) / centerY) * 8; // Max 8 degrees tilt
    const rotateY = ((x - centerX) / centerX) * 8;
    
    card.style.setProperty('--rx', `${rotateX}deg`);
    card.style.setProperty('--ry', `${rotateY}deg`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  };

  return (
    <div 
      ref={cardRef}
      className="project-card-3d"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-card">
        <div className="project-image-wrapper">
          <img
            src={image}
            alt={title}
            className="project-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop';
            }}
          />
          <div className="project-image-overlay">
            <span className="project-category-badge">
              <Sparkles size={11} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle', color: '#ef4444' }} />
              FEATURED
            </span>
          </div>
        </div>

        <div className="project-content">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          
          <div className="project-tech-list">
            {technologies.map((tech, index) => (
              <span key={index} className="project-tech-tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="project-actions">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary project-btn"
                title="View Source Code on GitHub"
              >
                <Github size={16} />
                GitHub
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary project-btn"
                title="View Live Demo"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
