import { ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { serviceItems } from '../content/services';
import { getWhatsAppLink } from '../config';
import './Services.css';

export default function Services() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="servicios" className="services section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">02 — Servicios</span>
          <h2 className="section-title">
            Lo que <em>construimos</em>.
          </h2>
          <p className="section-subtitle">
            Cuatro disciplinas en las que tenemos experiencia real, no las que
            quedan bonitas en un brochure.
          </p>
        </div>

        <ul className={`services__list ${visible ? 'visible' : ''}`} ref={ref}>
          {serviceItems.map((service, i) => (
            <li
              key={service.code}
              className="services__item"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="services__link"
              >
                <span className="services__code">{service.code}</span>
                <div className="services__body">
                  <h3 className="services__title">{service.title}</h3>
                  <p className="services__desc">{service.description}</p>
                  <ul className="services__deliverables">
                    {service.deliverables.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
                <ArrowUpRight
                  size={20}
                  strokeWidth={1.4}
                  className="services__arrow"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
