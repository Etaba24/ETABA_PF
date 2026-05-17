import './About.css';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section about" aria-label="À propos de moi">
      <div className="container">
        <div className="about__grid">
          {/* Left: visual */}
          <div className="about__visual">
            <div className="about__avatar-wrap">
              <div className="about__avatar" aria-label="Photo de profil">
                <span className="about__avatar-initials">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </span>
                <div className="about__avatar-ring about__avatar-ring--1" aria-hidden="true" />
                <div className="about__avatar-ring about__avatar-ring--2" aria-hidden="true" />
              </div>
              {/* Floating badges */}
              <div className="about__float-badge about__float-badge--1" aria-hidden="true">
                <span></span> React
              </div>
              <div className="about__float-badge about__float-badge--2" aria-hidden="true">
                <span></span> Laravel
              </div>
              <div className="about__float-badge about__float-badge--3" aria-hidden="true">
                <span></span> Node.js
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="about__content">
            <p className="section-label">À propos</p>
            <h2 className="section-title about__title">
              Passionné par le code &<br />
              <span className="gradient-text">l'innovation</span>
            </h2>
            <p className="about__bio">{personalInfo.bio}</p>

            <div className="about__details">
              <div className="about__detail">
                <span className="about__detail-icon" aria-hidden="true">📍</span>
                <div>
                  <span className="about__detail-label">Localisation</span>
                  <span className="about__detail-value">{personalInfo.location}</span>
                </div>
              </div>
              <div className="about__detail">
                <span className="about__detail-icon" aria-hidden="true"></span>
                <div>
                  <span className="about__detail-label">Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="about__detail-value about__detail-link">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="about__detail">
                <span className="about__detail-icon" aria-hidden="true"></span>
                <div>
                  <span className="about__detail-label">Téléphone</span>
                  <a href={`tel:${personalInfo.phone}`} className="about__detail-value about__detail-link">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <div className="about__detail">
                <span className="about__detail-icon" aria-hidden="true"></span>
                <div>
                  <span className="about__detail-label">Statut</span>
                  <span className={`about__detail-value ${personalInfo.availableForWork ? 'about__status--available' : ''}`}>
                    {personalInfo.availableForWork ? 'Disponible' : 'Non disponible'}
                  </span>
                </div>
              </div>
            </div>

            <div className="about__actions">
              <a
                href={personalInfo.cvUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                id="about-cv-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Télécharger CV
              </a>
              <a
                href={personalInfo.github}
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                id="about-github-btn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
