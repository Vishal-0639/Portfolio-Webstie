import React from 'react';
import { motion } from 'framer-motion';
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
      <motion.div 
        className="section-title-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-subtitle">SKILLS SUMMARY</span>
        <h2>TECHNOLOGIES</h2>
      </motion.div>

      <div className="skills-grid">
        {skillCategories.map((category, catIndex) => (
          <motion.div 
            key={catIndex} 
            className="skills-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 * catIndex, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <h3 className="skills-category-title">{category.category}</h3>
            <div className="skills-list">
              {category.items.map((skill, skillIndex) => (
                <motion.div 
                  key={skillIndex} 
                  className="skill-item"
                  whileHover={{ scale: 1.05, borderColor: '#ef4444' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="skill-icon-wrapper">
                    <DynamicIcon name={skill.icon} />
                  </span>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
