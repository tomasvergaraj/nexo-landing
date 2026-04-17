import { useState, useEffect } from 'react';
import { Mail, Menu, X, Sun, Moon } from 'lucide-react';
import { SITE_CONFIG, getEmailLink, getWhatsAppLink } from '../config';
import { useTheme } from '../hooks/useTheme';
import './Navbar.css';

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">

        {/* Logo */}
        <a href="#hero" className="navbar__logo" aria-label="Ir al inicio">
          <img src={SITE_CONFIG.logoPath} alt={SITE_CONFIG.companyName} />
          <span className="navbar__logo-name">
            <span className="navbar__logo-brand">Nexo</span>
            {' '}Software
          </span>
        </a>

        {/* Links */}
        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
          <div className="navbar__mobile-actions">
            <a
              href={getWhatsAppLink()}
              className="btn btn-primary btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar propuesta
            </a>
            <a href={getEmailLink()} className="btn btn-outline btn-sm">
              <Mail size={15} />
              Enviar email
            </a>
          </div>
        </div>

        {/* Desktop actions */}
        <div className="navbar__actions">
          <button
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
            title={theme === 'light' ? 'Modo oscuro' : 'Modo claro'}
          >
            {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <a href={getEmailLink()} className="navbar__email" aria-label="Enviar email">
            <Mail size={17} />
          </a>
          <a
            href={getWhatsAppLink()}
            className="btn btn-primary btn-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar propuesta
          </a>
        </div>

        {/* Mobile theme toggle */}
        <button
          className="navbar__theme-toggle navbar__theme-toggle--mobile"
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
          title={theme === 'light' ? 'Modo oscuro' : 'Modo claro'}
        >
          {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
        </button>

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && <div className="navbar__backdrop" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
}
