import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Benefits.css';

const benefits = [
  {
    title: 'Código limpio y mantenible',
    desc: 'Buenas prácticas, documentación y tests donde importan. Tu equipo va a poder mantener este software en cinco años sin querer reescribirlo.',
  },
  {
    title: 'Plazos honestos',
    desc: 'Si algo no se puede entregar a tiempo, te aviso antes — no después. Trabajamos con sprints cortos para que veas avances reales cada semana.',
  },
  {
    title: 'Comunicación directa',
    desc: 'Sin intermediarios ni gerentes de cuenta. La persona que escribe el código es la misma con la que conversas el alcance y los cambios.',
  },
  {
    title: 'Stack moderno y maduro',
    desc: 'Tecnologías con soporte de comunidad amplio: React, TypeScript, FastAPI, PostgreSQL. Nada experimental sin que lo conversemos antes.',
  },
  {
    title: 'Seguridad por defecto',
    desc: 'Cifrado de datos sensibles, autenticación robusta, dependencias auditadas y backups automatizados. No es un extra — está incluido.',
  },
  {
    title: 'Soporte después del lanzamiento',
    desc: 'Garantía de 30 días incluida. Después, planes de mantenimiento mensuales o por hora según lo que tu proyecto realmente necesite.',
  },
];

export default function Benefits() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="beneficios" className="benefits section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">05 — Por qué Nexo</span>
          <h2 className="section-title">
            Diferencias <em>concretas</em>.
          </h2>
          <p className="section-subtitle">
            No promesas vagas — seis cosas que efectivamente hacemos diferente.
          </p>
        </div>

        <ul className={`benefits__grid ${visible ? 'visible' : ''}`} ref={ref}>
          {benefits.map((benefit, i) => (
            <li
              key={benefit.title}
              className="benefits__item"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <span className="benefits__plus" aria-hidden="true">+</span>
              <div className="benefits__text">
                <h3 className="benefits__item-title">{benefit.title}</h3>
                <p className="benefits__item-desc">{benefit.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
