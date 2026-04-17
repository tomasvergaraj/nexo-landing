import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { getWhatsAppLink, getEmailLink } from '../config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';
import './Hero.css';

function StatCount({ value, suffix }) {
  const [ref, count] = useCountUp(value, 1800);
  return (
    <span className="hero__stat-number" ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Hero() {
  const [ref, visible] = useScrollAnimation(0.1);

  return (
    <section id="hero" className="hero" ref={ref}>
      <div className="hero__bg">
        <div className="hero__gradient" />
        <div className="hero__grid-pattern" />
        <div className="noise-overlay" />
      </div>

      <div className={`hero__content container ${visible ? 'visible' : ''}`}>
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Desarrollo de software hecho en Chile
        </div>

        <h1 className="hero__title">
          Conectamos tu negocio
          <br />
          <span className="hero__title-accent">con la tecnología</span>
          <br />
          que necesita
        </h1>

        <p className="hero__subtitle">
          Creamos aplicaciones web, móviles y sistemas a medida que impulsan
          el crecimiento de tu empresa. Código limpio, entregas a tiempo.
        </p>

        <div className="hero__actions">
          <a
            href={getWhatsAppLink()}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Sparkles size={18} />
            Solicitar propuesta gratis
          </a>
          <a href="#servicios" className="btn btn-outline">
            Ver nuestros servicios
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <StatCount value={50} suffix="+" />
            <span className="hero__stat-label">Proyectos Entregados</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <StatCount value={5} suffix="+" />
            <span className="hero__stat-label">Años de Experiencia</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <StatCount value={100} suffix="%" />
            <span className="hero__stat-label">Satisfacción</span>
          </div>
        </div>
      </div>

      <a href="#nosotros" className="hero__scroll" aria-label="Ir a la sección Nosotros">
        <ChevronDown size={24} />
      </a>

      <div className="hero__deco-orb hero__deco-orb--1" />
      <div className="hero__deco-orb hero__deco-orb--2" />
      <div className="hero__deco-line hero__deco-line--1" />
      <div className="hero__deco-line hero__deco-line--2" />
    </section>
  );
}
