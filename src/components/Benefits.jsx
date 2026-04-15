import {
  CheckCircle2,
  Timer,
  HeartHandshake,
  ShieldCheck,
  Zap,
  MessageSquare,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Benefits.css';

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Código limpio y escalable',
    desc: 'Escribimos software con buenas prácticas, documentado y estructurado para que pueda crecer con tu negocio sin convertirse en deuda técnica.',
  },
  {
    icon: Timer,
    title: 'Cumplimiento de plazos',
    desc: 'Planificamos con metodologías ágiles y entregamos en los tiempos acordados. Sabemos que tu negocio depende de los plazos de entrega.',
  },
  {
    icon: HeartHandshake,
    title: 'Comunicación cercana',
    desc: 'Tendrás acceso directo al equipo. Sin intermediarios, sin burocracia. Respondemos rápido y te mantenemos informado en todo momento.',
  },
  {
    icon: MessageSquare,
    title: 'Metodología ágil',
    desc: 'Trabajamos en sprints cortos con entregas incrementales. Ves avances reales desde las primeras semanas y puedes ajustar el rumbo a tiempo.',
  },
  {
    icon: Zap,
    title: 'Stack tecnológico moderno',
    desc: 'Usamos tecnologías actuales y bien soportadas que garantizan rendimiento, seguridad y facilidad de mantenimiento a largo plazo.',
  },
  {
    icon: CheckCircle2,
    title: 'Soporte post-lanzamiento',
    desc: 'No desaparecemos tras la entrega. Ofrecemos garantía y planes de mantenimiento para que tu software siempre esté operativo y actualizado.',
  },
];

export default function Benefits() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="beneficios" className="benefits section">
      <div className="pattern-overlay" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">¿Por qué elegirnos?</span>
          <h2 className="section-title">Tu proyecto en manos confiables</h2>
          <p className="section-subtitle">
            Cada detalle importa cuando se trata de construir el software que moverá tu empresa.
            Con Nexo tienes la certeza de un desarrollo profesional y comprometido.
          </p>
        </div>

        <div className="benefits__grid" ref={ref}>
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className={`benefits__item ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="benefits__icon-wrap">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <div className="benefits__text">
                  <p className="benefits__text-title">{benefit.title}</p>
                  <p>{benefit.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
