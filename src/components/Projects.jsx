import { ArrowUpRight, Check, Mail } from 'lucide-react';
import { PRODUCT_ACTIONS } from '../config';
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
    accentRgb: '26, 171, 240',
    logoSrc: '/nexo-fitness-logo.png',
    logoAlt: 'Logo de Nexo Fitness',
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
    accentRgb: '0, 121, 204',
    logoSrc: '/nexo-pos-logo.png',
    logoAlt: 'Logo de Nexo POS',
  },
  {
    id: 'bugueno-hormigones',
    name: 'Bugueño Hormigones',
    category: 'Landing Page - Construccion',
    description:
      'Landing corporativa orientada a captar cotizaciones para una planta certificada de hormigon en Hijuelas, con foco en SEO local, confianza comercial y conversion desde WhatsApp para toda la Quinta Region.',
    tags: ['React', 'Vite', 'SEO Local', 'Responsive', 'WhatsApp'],
    features: [
      'Landing enfocada en cotizacion rapida',
      'Posicionamiento local para Hijuelas y Quinta Region',
      'Secciones de confianza para planta y hormigones certificados',
      'CTA directos a WhatsApp, telefono y correo',
      'Galeria de faenas, flota y proyectos ejecutados',
      'Cobertura regional y asesoria comercial visible',
    ],
    platform: 'Landing Page Corporativa',
    accentRgb: '245, 158, 11',
    logoSrc: '/bugueno-hormigones-logo.png',
    logoAlt: 'Logo de Bugueño Hormigones',
    logoBackground: '#000000',
    logoPosition: 'left center',
  },
];

function WhatsAppIcon({ size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.8 11.8 0 0 0 12.09 0C5.58 0 .29 5.29.29 11.8c0 2.08.54 4.11 1.57 5.9L0 24l6.47-1.7a11.76 11.76 0 0 0 5.62 1.43h.01c6.51 0 11.8-5.29 11.8-11.8 0-3.15-1.23-6.11-3.38-8.45Zm-8.43 18.26h-.01a9.84 9.84 0 0 1-5.03-1.37l-.36-.21-3.84 1.01 1.03-3.74-.23-.38a9.86 9.86 0 0 1-1.51-5.25c0-5.46 4.44-9.9 9.91-9.9 2.64 0 5.14 1.03 7.01 2.9a9.86 9.86 0 0 1 2.9 7.01c0 5.46-4.44 9.91-9.9 9.91Zm5.43-7.41c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.22 1.35.19 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

const actionIcons = {
  email: Mail,
  external: ArrowUpRight,
  whatsapp: WhatsAppIcon,
};

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
          {projects.map((project, i) => {
            const actions = PRODUCT_ACTIONS[project.id] ?? [];

            return (
              <article
                key={project.id}
                id={project.id}
                className="projects__card"
                style={{
                  transitionDelay: `${i * 0.15}s`,
                  '--accent-rgb': project.accentRgb,
                }}
              >
                <div className="projects__card-header">
                  <div
                    className="projects__card-icon projects__card-icon--image"
                    style={{ backgroundColor: project.logoBackground }}
                  >
                    <img
                      src={project.logoSrc}
                      alt={project.logoAlt}
                      className="projects__card-logo"
                      loading="lazy"
                      style={{ objectPosition: project.logoPosition }}
                    />
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
                  {actions.length ? (
                    <div className="projects__actions">
                      {actions.map((action) => {
                        const Icon = actionIcons[action.kind] || ArrowUpRight;

                        return (
                          <a
                            key={action.label}
                            href={action.url}
                            className="btn btn-ghost btn-sm projects__access-link"
                            target={action.newTab ? '_blank' : undefined}
                            rel={action.newTab ? 'noopener noreferrer' : undefined}
                            aria-label={action.label}
                          >
                            {action.label}
                            <Icon size={16} />
                          </a>
                        );
                      })}
                    </div>
                  ) : null}
                  <span className="projects__platform">{project.platform}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
