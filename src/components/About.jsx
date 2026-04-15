import { Shield, Lightbulb, Users, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

const highlights = [
  { icon: Shield, label: 'Código de calidad' },
  { icon: Lightbulb, label: 'Soluciones innovadoras' },
  { icon: Users, label: 'Equipo comprometido' },
  { icon: Clock, label: 'Entregas a tiempo' },
];

export default function About() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="nosotros" className="about section">
      <div className="pattern-overlay" />
      <div className="container" ref={ref}>
        <div className={`about__grid ${visible ? 'visible' : ''}`}>
          <div className="about__image-col">
            <div className="about__image-wrapper">
              <div className="about__image-placeholder">
                <div className="about__image-icon">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  <span>Nexo Software SPA</span>
                </div>
              </div>
            </div>
            <div className="about__highlights">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="about__highlight">
                  <Icon size={17} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about__text-col">
            <span className="section-label">Quiénes Somos</span>
            <h2 className="about__title">
              Tecnología que impulsa <span>tu negocio</span>
            </h2>
            <div className="blue-line" style={{ margin: '20px 0' }} />
            <p className="about__text">
              <strong>Nexo Software SPA</strong> es una empresa chilena especializada en el desarrollo
              de software a medida. Nacimos con la convicción de que la tecnología debe ser una
              herramienta accesible y efectiva para toda organización, sin importar su tamaño.
            </p>
            <p className="about__text">
              Somos un equipo de ingenieros y diseñadores apasionados que trabajamos de cerca con
              nuestros clientes para entender sus procesos, identificar oportunidades de mejora y
              construir soluciones que realmente marquen la diferencia en su operación diaria.
            </p>
            <p className="about__text">
              Creemos en la transparencia, la comunicación constante y el código limpio. Cada
              proyecto que desarrollamos lleva el respaldo de buenas prácticas de ingeniería y
              un compromiso real con los resultados de nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
