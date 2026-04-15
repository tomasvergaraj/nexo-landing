import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './TechStack.css';

const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Lenguaje' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'React Native', category: 'Móvil' },
  { name: 'Flutter', category: 'Móvil' },
  { name: 'PostgreSQL', category: 'Base de datos' },
  { name: 'MongoDB', category: 'Base de datos' },
  { name: 'AWS', category: 'Infraestructura' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Git', category: 'DevOps' },
];

const categories = [...new Set(technologies.map((t) => t.category))];

export default function TechStack() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="tecnologias" className="techstack section">
      <div className="pattern-overlay" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">Stack tecnológico</span>
          <h2 className="section-title">Tecnologías que usamos</h2>
          <p className="section-subtitle">
            Trabajamos con tecnologías modernas, maduras y con amplio soporte de la comunidad
            para garantizar el mejor resultado en cada proyecto.
          </p>
        </div>

        <div className="techstack__wrapper" ref={ref}>
          <div className={`techstack__tags ${visible ? 'visible' : ''}`}>
            {technologies.map((tech, i) => (
              <div
                key={tech.name}
                className="techstack__tag"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <span className="techstack__tag-name">{tech.name}</span>
                <span className="techstack__tag-cat">{tech.category}</span>
              </div>
            ))}
          </div>

          <div className={`techstack__categories ${visible ? 'visible' : ''}`}>
            {categories.map((cat, i) => (
              <div
                key={cat}
                className="techstack__category"
                style={{ transitionDelay: `${i * 0.07 + 0.3}s` }}
              >
                <div className="techstack__category-dot" />
                <span>{cat}</span>
                <span className="techstack__category-count">
                  {technologies.filter((t) => t.category === cat).length}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
