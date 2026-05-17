import { useState } from 'react';
import './Projects.css';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [hovered, setHovered] = useState(null);

  const allTags = ['all', ...new Set(projects.flatMap(p => p.tags))];
  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" className="section projects" aria-label="Projets">
      <div className="container">
        <div className="projects__header">
          <p className="section-label">Projets</p>
          <h2 className="section-title">Ce que j'ai créé</h2>
          <p className="section-subtitle">
            Une sélection de mes projets qui illustrent mes compétences et ma passion pour le développement.
          </p>
        </div>

        {/* Filter tags */}
        <div className="projects__filters" role="group" aria-label="Filtres par technologie">
          {allTags.map(tag => (
            <button
              key={tag}
              id={`filter-${tag}`}
              className={`projects__filter-btn ${filter === tag ? 'projects__filter-btn--active' : ''}`}
              onClick={() => setFilter(tag)}
              aria-pressed={filter === tag}
            >
              {tag === 'all' ? '🌟 Tous' : tag}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="projects__grid">
          {filtered.map((project) => (
            <article
              key={project.id}
              id={`project-${project.id}`}
              className={`projects__card ${project.featured ? 'projects__card--featured' : ''} ${hovered === project.id ? 'projects__card--hovered' : ''}`}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Card visual header */}
              <div className={`projects__card-visual bg-gradient-${project.id}`}>
                <div className="projects__card-mockup" aria-hidden="true">
                  <div className="projects__mockup-bar">
                    <span /><span /><span />
                  </div>
                  <div className="projects__mockup-content">
                    <div className="projects__mockup-line projects__mockup-line--1" />
                    <div className="projects__mockup-line projects__mockup-line--2" />
                    <div className="projects__mockup-line projects__mockup-line--3" />
                    <div className="projects__mockup-blocks">
                      <div className="projects__mockup-block" />
                      <div className="projects__mockup-block" />
                    </div>
                  </div>
                </div>
                {project.featured && (
                  <span className="projects__featured-badge" role="img" aria-label="Projet mis en avant">
                    ⭐ Mis en avant
                  </span>
                )}
              </div>

              {/* Card body */}
              <div className="projects__card-body">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.description}</p>

                {/* Tags */}
                <div className="projects__card-tags" aria-label="Technologies utilisées">
                  {project.tags.map(tag => (
                    <span key={tag} className="projects__tag">{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="projects__card-links">
                  <a
                    href={project.github}
                    className="projects__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Code source de ${project.title}`}
                    id={`project-${project.id}-github`}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                    </svg>
                    Code source
                  </a>
                  <a
                    href={project.live}
                    className="projects__link projects__link--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Démo live de ${project.title}`}
                    id={`project-${project.id}-live`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Voir le projet
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
