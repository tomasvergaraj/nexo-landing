import { Mail, ArrowRight, Sparkles } from 'lucide-react';
import { getWhatsAppLink, getEmailLink } from '../config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './CTA.css';

export default function CTA() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="contacto" className="cta section">
      <div className="cta__bg">
        <div className="cta__gradient" />
        <div className="cta__grid-pattern" />
      </div>
      <div className="cta__orb cta__orb--1" />
      <div className="cta__orb cta__orb--2" />
      <div className="cta__orb cta__orb--3" />
      <div className="container" ref={ref}>
        <div className={`cta__content ${visible ? 'visible' : ''}`}>
          <span className="section-label">¿Listo para comenzar?</span>
          <h2 className="cta__title">Hagamos realidad tu proyecto</h2>
          <p className="cta__subtitle">
            Cuéntanos tu idea y te respondemos en menos de 24 horas con una
            propuesta sin compromiso. La primera reunión es completamente gratis.
          </p>
          <div className="cta__buttons">
            <a
              href={getWhatsAppLink()}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Sparkles size={18} />
              Solicitar propuesta gratis
            </a>
            <a href={getEmailLink()} className="btn btn-ghost">
              <Mail size={18} />
              Enviar un email
            </a>
            <a href="#servicios" className="btn btn-outline">
              Ver servicios
              <ArrowRight size={17} />
            </a>
          </div>
          <p className="cta__note">
            Sin contratos largos · Sin letra chica · 100% satisfacción garantizada
          </p>
        </div>
      </div>
    </section>
  );
}
