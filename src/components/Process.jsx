import { MessageSquare, FileSearch, PenTool, Code2, Rocket, HeartHandshake } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Process.css';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Descubrimiento',
    desc: 'Agendamos una reunión gratuita para entender a fondo tu negocio, necesidades y objetivos. Sin compromisos.',
  },
  {
    icon: FileSearch,
    number: '02',
    title: 'Propuesta y Alcance',
    desc: 'Analizamos los requerimientos y te entregamos una propuesta detallada con alcance, tecnología, plazos y presupuesto.',
  },
  {
    icon: PenTool,
    number: '03',
    title: 'Diseño UI/UX',
    desc: 'Diseñamos prototipos e interfaces antes de programar. Aseguramos que la experiencia del usuario sea excelente desde el inicio.',
  },
  {
    icon: Code2,
    number: '04',
    title: 'Desarrollo',
    desc: 'Construimos el software en sprints iterativos. Tendrás acceso a demos frecuentes para validar el avance en tiempo real.',
  },
  {
    icon: Rocket,
    number: '05',
    title: 'Deploy y Lanzamiento',
    desc: 'Desplegamos en producción con pruebas exhaustivas. Garantizamos una transición fluida sin interrupciones.',
  },
  {
    icon: HeartHandshake,
    number: '06',
    title: 'Soporte Continuo',
    desc: 'Ofrecemos mantenimiento, actualizaciones y soporte post-lanzamiento para que tu software crezca contigo.',
  },
];

export default function Process() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="proceso" className="process section">
      <div className="noise-overlay" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">Cómo trabajamos</span>
          <h2 className="section-title">De la idea al producto en producción</h2>
          <p className="section-subtitle">
            Un proceso probado y transparente diseñado para minimizar riesgos
            y maximizar el éxito de tu proyecto desde el primer día.
          </p>
        </div>

        <div className="process__grid" ref={ref}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`process__card ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.13}s` }}
              >
                <div className="process__card-header">
                  <span className="process__card-number">{step.number}</span>
                  <div className="process__card-icon">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                </div>
                <p className="process__card-title">{step.title}</p>
                <p className="process__card-desc">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
