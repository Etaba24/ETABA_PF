import './Experience.css';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section experience" aria-label="Expérience professionnelle">
      <div className="container">
        <div className="experience__header">
          <p className="section-label">Parcours</p>
          <h2 className="section-title">Mon expérience</h2>
          <p className="section-subtitle">
            Mon parcours professionnel et les entreprises avec lesquelles j'ai eu la chance de collaborer.
          </p>
        </div>

        <div className="experience__timeline" role="list" aria-label="Expériences professionnelles">
          {experience.map((item, i) => (
            <article
              key={item.id}
              id={`exp-${item.id}`}
              className={`experience__item ${item.current ? 'experience__item--current' : ''}`}
              role="listitem"
            >
              {/* Timeline dot */}
              <div className="experience__dot" aria-hidden="true">
                {item.current && <div className="experience__dot-pulse" />}
              </div>

              {/* Line */}
              {i < experience.length - 1 && (
                <div className="experience__line" aria-hidden="true" />
              )}

              {/* Content */}
              <div className="experience__card">
                <div className="experience__card-header">
                  <div>
                    <h3 className="experience__role">{item.role}</h3>
                    <p className="experience__company">
                      <span className="experience__company-icon" aria-hidden="true">🏢</span>
                      {item.company}
                    </p>
                  </div>
                  <div className="experience__period-wrap">
                    <span className={`experience__period ${item.current ? 'experience__period--current' : ''}`}>
                      {item.current && <span className="experience__period-dot" aria-hidden="true" />}
                      {item.period}
                    </span>
                  </div>
                </div>

                <p className="experience__desc">{item.description}</p>

                <div className="experience__tags" aria-label="Technologies">
                  {item.tags.map(tag => (
                    <span key={tag} className="experience__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
