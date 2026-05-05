import { ArrowRight } from 'lucide-react';
import { getWhatsAppLink, getEmailLink } from '../config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './CTA.css';

export default function CTA() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="contacto" className="cta section">
      <div className="container" ref={ref}>
        <div className={`cta__content ${visible ? 'visible' : ''}`}>
          <span className="section-label">08 — Conversemos</span>
          <h2 className="cta__title">
            ¿Tienes un proyecto<br />
            en <em>mente</em>?
          </h2>
          <p className="cta__subtitle">
            Cuéntame qué quieres construir. Respondo en menos de 24 horas con
            una propuesta sin compromiso.
          </p>

          <div className="cta__actions">
            <a
              href={getWhatsAppLink()}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conversemos por WhatsApp
              <ArrowRight size={16} />
            </a>
            <a href={getEmailLink()} className="btn-link">
              o escríbeme un correo
              <ArrowRight size={14} />
            </a>
          </div>

          <p className="cta__meta">
            La primera reunión es gratuita y dura 30 min. Sin compromisos.
          </p>
        </div>
      </div>
    </section>
  );
}
