import {
  Globe,
  Smartphone,
  Code2,
  BrainCircuit,
  Palette,
  Wrench,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { serviceItems } from '../content/services';
import './Services.css';

const serviceIcons = [Globe, Smartphone, Code2, BrainCircuit, Palette, Wrench];

const services = serviceItems.map((service, index) => ({
  ...service,
  icon: serviceIcons[index],
}));

export default function Services() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="servicios" className="services section">
      <div className="noise-overlay" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">Nuestros Servicios</span>
          <h2 className="section-title">Soluciones digitales para tu empresa</h2>
          <p className="section-subtitle">
            Desde la idea hasta el deploy. Desarrollamos software que se adapta
            perfectamente a los procesos y objetivos de tu negocio.
          </p>
        </div>

        <div className="services__grid" ref={ref}>
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`services__card ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="services__card-icon">
                  <Icon size={26} strokeWidth={1.7} />
                </div>
                <p className="services__card-title">{service.title}</p>
                <p className="services__card-desc">{service.description}</p>
                <div className="services__card-line" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
