import { MapPin, Mail, Clock, Linkedin, Github, Instagram } from 'lucide-react';
import {
  SITE_CONFIG,
  CONTACT_INFO,
  SOCIAL_LINKS,
  getWhatsAppLink,
  getEmailLink,
} from '../config';
import './Footer.css';

const quickLinks = [
  { label: 'Ir al inicio', href: '#hero' },
  { label: 'Conoce la empresa', href: '#nosotros' },
  { label: 'Explorar servicios', href: '#servicios' },
  { label: 'Nuestros proyectos', href: '#proyectos' },
  { label: 'Cómo trabajamos', href: '#proceso' },
  { label: 'Tecnologías', href: '#tecnologias' },
];

const serviceLinks = [
  'Desarrollo Web',
  'Apps Móviles',
  'Software a Medida',
  'Consultoría Tecnológica',
  'Diseño UI/UX',
  'Soporte y Mantenimiento',
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
                <span className="footer__logo-name">
                  <span className="footer__logo-brand">Nexo</span>
                  {' '}Software
                </span>
              </div>
              <p className="footer__brand-text">
                Empresa chilena especializada en el desarrollo de software a medida.
                Conectamos tu negocio con la tecnología que necesita para crecer.
              </p>
              <div className="footer__social">
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={17} />
                </a>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github size={17} />
                </a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={17} />
                </a>
              </div>
            </div>

            <div className="footer__col">
              <p className="footer__col-title">Enlaces</p>
              <ul className="footer__links">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <p className="footer__col-title">Servicios</p>
              <ul className="footer__links">
                {serviceLinks.map((service) => (
                  <li key={service}>
                    <a href="#servicios">{service}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <p className="footer__col-title">Contacto</p>
              <ul className="footer__contact">
                <li>
                  <MapPin size={15} />
                  <span>{CONTACT_INFO.address}</span>
                </li>
                <li>
                  <Mail size={15} />
                  <a href={getEmailLink()}>{CONTACT_INFO.email}</a>
                </li>
                <li>
                  <Clock size={15} />
                  <span>{CONTACT_INFO.schedule}</span>
                </li>
              </ul>
              <a
                href={getWhatsAppLink()}
                className="btn btn-primary btn-sm footer__cta-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar propuesta
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {currentYear} {SITE_CONFIG.companyName} SPA. Todos los derechos reservados.</p>
          <p className="footer__bottom-right">Hecho con pasión en Chile</p>
        </div>
      </div>
    </footer>
  );
}
