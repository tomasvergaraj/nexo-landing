import { Linkedin, Github, Instagram, ArrowUpRight } from 'lucide-react';
import {
  SITE_CONFIG,
  CONTACT_INFO,
  SOCIAL_LINKS,
  getWhatsAppLink,
  getEmailLink,
} from '../config';
import './Footer.css';

const navLinks = [
  { label: 'Quién está detrás', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'Preguntas frecuentes', href: '#faq' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <div className="footer__logo-wrap">
                <img
                  src={SITE_CONFIG.logoPath}
                  alt={SITE_CONFIG.companyName}
                  className="footer__logo"
                />
                <span className="footer__logo-name">Nexo Software</span>
              </div>
              <p className="footer__brand-text">
                Estudio independiente de desarrollo de software a medida.
                Plataformas SaaS, sistemas POS y aplicaciones móviles, hechas
                en Quillota, Chile.
              </p>
              <a
                href={getWhatsAppLink()}
                className="footer__cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Conversemos tu proyecto
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="footer__col">
              <p className="footer__col-title">Navegar</p>
              <ul className="footer__links">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <p className="footer__col-title">Contacto</p>
              <ul className="footer__contact">
                <li>
                  <span className="footer__label">Correo</span>
                  <a href={getEmailLink()}>{CONTACT_INFO.email}</a>
                </li>
                <li>
                  <span className="footer__label">WhatsApp</span>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </li>
                <li>
                  <span className="footer__label">Ubicación</span>
                  <span>{CONTACT_INFO.address}</span>
                </li>
              </ul>
              <div className="footer__social">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {currentYear} {SITE_CONFIG.companyName} SPA</p>
          <p className="footer__bottom-right">
            <span>Hecho en Chile</span>
            <span className="footer__sep">·</span>
            <span>v1.0</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
