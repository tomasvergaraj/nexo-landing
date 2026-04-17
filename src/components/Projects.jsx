import { Check } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Projects.css';

const projects = [
  {
    id: 'nexo-fitness',
    name: 'Nexo Fitness',
    category: 'SaaS · Salud & Deporte',
    description:
      'Plataforma SaaS multitenant para administración integral de gimnasios. Múltiples tenants operando de forma aislada desde una misma instancia con gestión completa de clases, reservas, pagos y campañas de marketing.',
    tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Stripe', 'MercadoPago'],
    features: [
      'Dashboard con KPIs y alertas operativas',
      'Clases físicas, online e híbridas con reservas',
      'Planes de membresía y control de acceso',
      'Check-in físico y pagos integrados',
      'Campañas de email y WhatsApp marketing',
      'Reportes analíticos exportables',
    ],
    platform: 'Plataforma Web SaaS',
    accentColor: '#1AABF0',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M6.5 6.5H4.5C3.4 6.5 3 6.9 3 8V10C3 11.1 3.4 11.5 4.5 11.5H6.5C7.6 11.5 8 11.1 8 10V8C8 6.9 7.6 6.5 6.5 6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M19.5 6.5H17.5C16.4 6.5 16 6.9 16 8V10C16 11.1 16.4 11.5 17.5 11.5H19.5C20.6 11.5 21 11.1 21 10V8C21 6.9 20.6 6.5 19.5 6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="8" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M5 11.5V16C5 17.1 5.9 18 7 18H17C18.1 18 19 17.1 19 16V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="12" y1="11.5" x2="12" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'nexo-pos',
    name: 'Nexo POS',
    category: 'Sistema de Ventas · Retail',
    description:
      'Sistema completo de punto de venta para minimarkets. Arquitectura multi-componente con app desktop Electron, app móvil PWA, panel de administración web, API backend y sincronización cloud opcional con Supabase.',
    tags: ['Electron', 'React', 'Expo', 'React Native', 'FastAPI', 'PostgreSQL', 'Transbank'],
    features: [
      'Caja POS desktop (Electron, Windows/Linux)',
      'App móvil PWA para tablet y celular',
      'Panel de administración web con reportes',
      'Integración Transbank POS SDK',
      'Licencias offline con activación segura',
      'Backup cloud automático vía Supabase',
    ],
    platform: 'Desktop + Mobile + Web',
    accentColor: '#0079CC',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="8" y1="17" x2="8" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="16" y1="17" x2="16" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="5" y1="21" x2="19" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="7" cy="13" r="1" fill="currentColor"/>
        <circle cx="12" cy="13" r="1" fill="currentColor"/>
        <circle cx="17" cy="13" r="1" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function Projects() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="proyectos" className="projects section">
      <div className="pattern-overlay" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">Proyectos Reales</span>
          <h2 className="section-title">Lo que hemos construido</h2>
          <p className="section-subtitle">
            Soluciones completas desarrolladas desde cero — desde la arquitectura hasta el deploy —
            para clientes reales con necesidades reales.
          </p>
        </div>

        <div className={`projects__grid ${visible ? 'visible' : ''}`} ref={ref}>
          {projects.map((project, i) => (
            <article
              key={project.id}
              className="projects__card"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="projects__card-header" style={{ '--accent': project.accentColor }}>
                <div className="projects__card-icon" style={{ color: project.accentColor }}>
                  {project.icon}
                </div>
                <span className="projects__card-badge">{project.category}</span>
              </div>

              <div className="projects__card-body">
                <h3 className="projects__card-title">{project.name}</h3>
                <p className="projects__card-desc">{project.description}</p>

                <div className="projects__card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="projects__tag">{tag}</span>
                  ))}
                </div>

                <ul className="projects__features">
                  {project.features.map((feature) => (
                    <li key={feature}>
                      <Check size={14} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="projects__card-footer">
                <span className="projects__platform">{project.platform}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
