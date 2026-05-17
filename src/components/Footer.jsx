import './Footer.css';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__top-divider" aria-hidden="true" />
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo-icon" aria-hidden="true">{'</>'}</span>
          <span className="footer__logo-text">{personalInfo.name}</span>
          <p className="footer__tagline">{personalInfo.title}</p>
        </div>

        <p className="footer__copy">
          © {year} {personalInfo.name}. Conçu et développé avec{' '}
          <span role="img" aria-label="amour"></span>
          {' '}en React & Vite.
        </p>

        <a
          href="#hero"
          className="footer__back-top"
          id="footer-back-top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Retour en haut de la page"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
            <polyline points="18 15 12 9 6 15" />
          </svg>
          Haut de page
        </a>
      </div>
    </footer>
  );
}
