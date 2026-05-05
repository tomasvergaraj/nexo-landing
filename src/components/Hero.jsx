import { ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Hero.css';

export default function Hero() {
  const [ref, visible] = useScrollAnimation(0.1);

  return (
    <section id="hero" className="hero" ref={ref}>
      <div className="hero__wordmark" aria-hidden="true">Nexo</div>

      <div className={`hero__content container ${visible ? 'visible' : ''}`}>
        <p className="hero__eyebrow">
          <span className="hero__eyebrow-dot" />
          Estudio de software · Quillota, Chile
        </p>

        <h1 className="hero__title">
          Software a medida,<br />
          construido <em>en serio</em>,<br />
          para negocios reales.
        </h1>

        <p className="hero__subtitle">
          Diseñamos y desarrollamos plataformas SaaS, sistemas POS y aplicaciones
          móviles. Sin templates, sin atajos, sin teatro.
        </p>

        <div className="hero__actions">
          <a
            href={getWhatsAppLink()}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conversemos tu proyecto
            <ArrowRight size={16} />
          </a>
          <a href="#proyectos" className="btn-link">
            Ver proyectos en producción
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="hero__meta">
          <span>03 productos en producción</span>
          <span className="hero__meta-sep">·</span>
          <span>Disponible para proyectos 2026</span>
        </div>
      </div>
    </section>
  );
}
