import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Process.css';

const steps = [
  {
    code: '01',
    title: 'Conversación',
    desc: 'Una llamada de 30 min para entender qué necesitas y si soy la persona indicada para construirlo.',
  },
  {
    code: '02',
    title: 'Propuesta',
    desc: 'Documento corto con alcance, stack, plazos y precio. Si algo no cierra, lo ajustamos antes de firmar nada.',
  },
  {
    code: '03',
    title: 'Diseño',
    desc: 'Wireframes y prototipos antes del código. Validamos UX y flujos críticos en pantalla, no en producción.',
  },
  {
    code: '04',
    title: 'Desarrollo',
    desc: 'Sprints semanales con entregas demostrables. Acceso al repo y al staging desde el día uno.',
  },
  {
    code: '05',
    title: 'Lanzamiento',
    desc: 'Deploy en producción con monitoreo, backups y handoff documentado. Garantía de 30 días incluida.',
  },
  {
    code: '06',
    title: 'Soporte',
    desc: 'Mantenimiento, parches de seguridad y nuevas features bajo planes mensuales o por hora.',
  },
];

export default function Process() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="proceso" className="process section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">04 — Cómo trabajamos</span>
          <h2 className="section-title">
            De la primera llamada al <em>deploy</em>.
          </h2>
          <p className="section-subtitle">
            Un proceso transparente, en seis pasos. Sin sorpresas, sin
            burocracia, sin pérdida de tiempo.
          </p>
        </div>

        <ol className={`process__timeline ${visible ? 'visible' : ''}`} ref={ref}>
          {steps.map((step, i) => (
            <li
              key={step.code}
              className="process__step"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="process__marker">
                <span className="process__dot" />
              </div>
              <div className="process__content">
                <span className="process__code">{step.code}</span>
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-desc">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
