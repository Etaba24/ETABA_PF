import { useState } from 'react';
import './Skills.css';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="section skills" aria-label="Compétences">
      <div className="container">
        <div className="skills__header">
          <p className="section-label">Compétences</p>
          <h2 className="section-title">Mon stack technique</h2>
          <p className="section-subtitle">
            Des technologies que j'utilise quotidiennement pour créer des applications robustes et modernes.
          </p>
        </div>

        {/* Category tabs */}
        <div className="skills__tabs" role="tablist" aria-label="Catégories de compétences">
          {skills.map((category, i) => (
            <button
              key={i}
              id={`skills-tab-${i}`}
              className={`skills__tab ${activeCategory === i ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveCategory(i)}
              role="tab"
              aria-selected={activeCategory === i}
              aria-controls={`skills-panel-${i}`}
            >
              <span aria-hidden="true">{category.icon}</span>
              {category.category}
            </button>
          ))}
        </div>

        {/* Skill panels */}
        {skills.map((category, catIdx) => (
          <div
            key={catIdx}
            id={`skills-panel-${catIdx}`}
            className={`skills__panel ${activeCategory === catIdx ? 'skills__panel--active' : ''}`}
            role="tabpanel"
            aria-labelledby={`skills-tab-${catIdx}`}
            hidden={activeCategory !== catIdx}
          >
            <div className="skills__grid">
              {category.items.map((skill, i) => (
                <div key={i} className="skills__card" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="skills__card-header">
                    <span className="skills__name">{skill.name}</span>
                    <span className="skills__level-text">{skill.level}%</span>
                  </div>
                  <div
                    className="skills__bar-track"
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${skill.name}: ${skill.level}%`}
                  >
                    <div
                      className="skills__bar-fill"
                      style={{ '--target-width': `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Tech cloud */}
        <div className="skills__cloud" aria-label="Technologies maîtrisées">
          {['React', 'Laravel', 'Node.js', 'TypeScript', 'MySQL', 'Docker', 'Git', 'CSS', 'PHP', 'REST API', 'Linux', 'Figma'].map((tech, i) => (
            <span key={i} className="skills__cloud-tag" style={{ animationDelay: `${i * 0.05}s` }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
