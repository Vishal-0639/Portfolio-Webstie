import React from 'react';
import * as Icons from 'lucide-react';
import { portfolioData } from '../portfolioData';

const DynamicIcon = ({ name, size = 18, className = '' }) => {
  const IconComponent = Icons[name];
  if (!IconComponent) {
    return <Icons.HelpCircle size={size} className={className} />;
  }
  return <IconComponent size={size} className={className} />;
};

const Skills = () => {
  const skillCategories = portfolioData.skills;

  return (
    <section id="skills">
      <div className="section-title-container">
        <span className="section-subtitle">SKILLS SUMMARY</span>
        <h2>TECHNOLOGIES</h2>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="skills-category">
            <h3 className="skills-category-title">{category.category}</h3>
            <div className="skills-list">
              {category.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <span className="skill-icon-wrapper">
                    <DynamicIcon name={skill.icon} />
                  </span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
