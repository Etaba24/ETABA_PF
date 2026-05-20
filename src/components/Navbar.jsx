import { useState, useEffect } from 'react';
import './Navbar.css';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { href: '#hero', label: 'Accueil' },
  { href: '#about', label: 'À propos' },
  { href: '#skills', label: 'Compétences' },
  { href: '#projects', label: 'Projets' },
  // { href: '#testimonials', label: 'Avis' },
  { href: '#experience', label: 'Expérience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Navigation principale">
      <div className="container navbar__inner">
        {/* Logo */}
        <a
          href="#hero"
          className="navbar__logo"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          aria-label="Retour à l'accueil"
        >
          <span className="navbar__logo-icon">{'</>'}</span>
          <span className="navbar__logo-text">{personalInfo.name.split(' ')[0]}</span>
        </a>

        {/* Desktop links */}
        <ul className="navbar__links" role="list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`navbar__link ${activeSection === href.slice(1) ? 'navbar__link--active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                aria-current={activeSection === href.slice(1) ? 'page' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={personalInfo.cvUrl}
          className="btn btn-primary navbar__cta"
          target="_blank"
          rel="noopener noreferrer"
          download="cv.pdf"
          id="navbar-cv-btn"
        >
          Télécharger CV
        </a>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          id="hamburger-btn"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`} aria-hidden={!menuOpen}>
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`navbar__mobile-link ${activeSection === href.slice(1) ? 'navbar__mobile-link--active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
          >
            {label}
          </a>
        ))}
        <a href={personalInfo.cvUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer" download="cv.pdf">
          Télécharger CV
        </a>
      </div>
    </nav>
  );
}
