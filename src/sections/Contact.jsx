import { useState } from 'react';
import './Contact.css';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // REMPLACEZ 'VOTRE_CLE_D_ACCES_ICI' PAR LA CLÉ OBTENUE SUR WEB3FORMS.COM
          access_key: "65cfd624-1ea3-4bf7-8140-ab40fd78247e",
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setStatus('error');
    }
  };

  const contactItems = [
    {
      // icon: '📧',
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      id: 'contact-email-link',
    },
    {
      // icon: '📱',
      label: 'Téléphone/Whatsapp',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      id: 'contact-phone-link',
    },
    {
      // icon: '📍',
      label: 'Localisation',
      value: personalInfo.location,
      href: null,
      id: 'contact-location',
    },
    {
      // icon: '💼',
      label: 'LinkedIn',
      value: 'Mon profil LinkedIn',
      href: personalInfo.linkedin,
      id: 'contact-linkedin-link',
    },
  ];

  return (
    <section id="contact" className="section contact" aria-label="Prendre contact">
      <div className="contact__bg-glow" aria-hidden="true" />

      <div className="container">
        <div className="contact__header">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Travaillons ensemble</h2>
          <p className="section-subtitle">
            Vous avez un projet en tête ? Je suis disponible pour en discuter. Envoyez-moi un message !
          </p>
        </div>

        <div className="contact__grid">
          {/* Left: info */}
          <div className="contact__info">
            <div className="contact__info-cards">
              {contactItems.map((item) => (
                <div key={item.id} id={item.id} className="contact__info-card">
                  <span className="contact__info-icon" aria-hidden="true">{item.icon}</span>
                  <div>
                    <span className="contact__info-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="contact__info-value contact__info-value--link" target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact__info-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="contact__socials">
              <p className="contact__socials-label">Me suivre sur</p>
              <div className="contact__social-links">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact__social-btn" aria-label="GitHub" id="contact-github-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                  </svg>
                  GitHub
                </a>
                <a href={personalInfo.cvUrl} className="btn btn-primary contact__download-btn" download="cv.pdf" id="contact-cv-btn">
                  Télécharger mon CV
                </a>
                {/* <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="contact__social-btn" aria-label="Twitter" id="contact-twitter-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Twitter
                </a> */}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="contact__form-wrap">
            <form
              id="contact-form"
              className="contact__form"
              onSubmit={handleSubmit}
              aria-label="Formulaire de contact"
            >
              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="contact-name" className="contact__label">Nom complet</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    className="contact__input"
                    placeholder="Jean Dupont"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="contact-email" className="contact__label">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    className="contact__input"
                    placeholder="jean@exemple.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="contact-subject" className="contact__label">Sujet</label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  className="contact__input"
                  placeholder="Proposition de projet..."
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-message" className="contact__label">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="contact__input contact__textarea"
                  placeholder="Décrivez votre projet ou votre question..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                className={`btn btn-primary contact__submit ${status === 'sending' ? 'contact__submit--loading' : ''}`}
                disabled={status === 'sending'}
                aria-busy={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <span className="contact__spinner" aria-hidden="true" /> Envoi en cours...
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    Envoyer le message
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="contact__success" role="alert">
                  <span aria-hidden="true">✅</span>
                  Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                </div>
              )}
              {status === 'error' && (
                <div className="contact__error" role="alert">
                  <span aria-hidden="true">❌</span>
                  Une erreur s'est produite. Veuillez réessayer.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
