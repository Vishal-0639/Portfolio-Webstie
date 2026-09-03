import React from 'react';
import ProjectCard from './ProjectCard';
import { portfolioData } from '../portfolioData';

const Projects = () => {
  const projectList = portfolioData.projects;

  return (
    <section id="projects">
      <div className="section-title-container">
        <span className="section-subtitle">PROJECTS</span>
        <h2>RECAP PROJECTS</h2>
      </div>

      <div className="projects-grid">
        {projectList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
