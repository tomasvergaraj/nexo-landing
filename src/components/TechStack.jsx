import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './TechStack.css';

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="tech-icon">
    <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
    <ellipse cx="12" cy="12" rx="10" ry="3.6" stroke="#61DAFB" strokeWidth="1.1" />
    <ellipse cx="12" cy="12" rx="10" ry="3.6" stroke="#61DAFB" strokeWidth="1.1" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="3.6" stroke="#61DAFB" strokeWidth="1.1" transform="rotate(120 12 12)" />
  </svg>
);

const NextJSIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="tech-icon">
    <circle cx="12" cy="12" r="10" fill="currentColor" className="nextjs-bg" />
    <path d="M8 17V7l9.5 11V7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="tech-icon">
    <rect x="2" y="2" width="20" height="20" rx="3.5" fill="#3178C6" />
    <path d="M7 9H11.5M9.25 9V15" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M13 15V11.5C13 11.5 13.1 10 14.5 10C15.9 10 16 11.5 16 11.5V15" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 13H16" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const NodeJSIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="tech-icon">
    <path d="M12 2L20.5 7V17L12 22L3.5 17V7L12 2Z" stroke="#539E43" strokeWidth="1.2" fill="rgba(83,158,67,0.1)" />
    <path d="M8.5 8L8.5 16L15.5 8V16" stroke="#539E43" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="tech-icon">
    <path d="M12 2C9.2 2 8 3.5 8 5.5V8H14V9H6C4.3 9 3 10.1 3 12.5C3 14.9 4.5 16 6 16H8V13C8 11.7 9 11 10 11H14C15.7 11 17 9.7 17 8V5.5C17 3.5 15.5 2 12 2ZM10 5C10.6 5 11 5.4 11 6C11 6.6 10.6 7 10 7C9.4 7 9 6.6 9 6C9 5.4 9.4 5 10 5Z" fill="#3776AB" />
    <path d="M12 22C14.8 22 16 20.5 16 18.5V16H10V15H18C19.7 15 21 13.9 21 11.5C21 9.1 19.5 8 18 8H16V11C16 12.3 15 13 14 13H10C8.3 13 7 14.3 7 16V18.5C7 20.5 8.5 22 12 22ZM14 19C13.4 19 13 18.6 13 18C13 17.4 13.4 17 14 17C14.6 17 15 17.4 15 18C15 18.6 14.6 19 14 19Z" fill="#FFD43B" />
  </svg>
);

const ReactNativeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="tech-icon">
    <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
    <ellipse cx="12" cy="12" rx="10" ry="3.6" stroke="#61DAFB" strokeWidth="1.1" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="3.6" stroke="#61DAFB" strokeWidth="1.1" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="3.6" stroke="#61DAFB" strokeWidth="1.1" transform="rotate(150 12 12)" />
  </svg>
);

const FlutterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="tech-icon">
    <path d="M14.5 2L4 12.5L8 16.5L18.5 6L14.5 2Z" fill="#54C5F8" />
    <path d="M8 16.5L14.5 23L18.5 19L12 12.5L8 16.5Z" fill="#01579B" />
    <path d="M12 12.5L15.5 16L18.5 19L14.5 23L8 16.5L12 12.5Z" fill="#29B6F6" />
  </svg>
);

const PostgreSQLIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="tech-icon">
    <ellipse cx="12" cy="9" rx="7" ry="4" stroke="#336791" strokeWidth="1.3" />
    <path d="M5 9V15C5 17.2 8.1 19 12 19C15.9 19 19 17.2 19 15V9" stroke="#336791" strokeWidth="1.3" />
    <line x1="5" y1="12" x2="19" y2="12" stroke="#336791" strokeWidth="1" strokeDasharray="2 2" />
    <path d="M19 9C20.5 8.5 21 6 19.5 5C18.5 4.3 17 5 17 6.5" stroke="#336791" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const MongoDBIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="tech-icon">
    <path d="M12 2C12 2 7 8 7 13.5C7 17 9.2 20 12 21.5C14.8 20 17 17 17 13.5C17 8 12 2 12 2Z" fill="rgba(0,237,100,0.2)" stroke="#00684A" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M12 2C12 2 9.5 7 9 12" stroke="#00ED64" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="12" y1="20" x2="12" y2="22.5" stroke="#00684A" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const AWSIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="tech-icon">
    <path d="M6.5 15.5C4.5 14.8 3 13 3 11C3 8.5 5 6.5 7.5 6.5C7.8 6.5 8.1 6.5 8.4 6.6C9.1 5 10.7 4 12.5 4C15 4 17 5.8 17.2 8.1C17.5 8 17.7 8 18 8C19.7 8 21 9.3 21 11C21 12.6 19.9 13.9 18.5 14.3" stroke="#FF9900" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M8 20.5L5.5 18M5.5 18L8 15.5M5.5 18H11" stroke="#FF9900" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 20.5L18.5 18M18.5 18L16 15.5M18.5 18H13" stroke="#FF9900" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="tech-icon">
    <rect x="2" y="9.5" width="3" height="3" rx="0.5" fill="#2496ED" />
    <rect x="6.5" y="9.5" width="3" height="3" rx="0.5" fill="#2496ED" />
    <rect x="11" y="9.5" width="3" height="3" rx="0.5" fill="#2496ED" />
    <rect x="11" y="5" width="3" height="3" rx="0.5" fill="#2496ED" />
    <rect x="6.5" y="5" width="3" height="3" rx="0.5" fill="#2496ED" />
    <path d="M2.5 13C2.5 13 2 17 7 17H16C16 17 21 17 22 14.5C23 12 21 11.5 21 11.5C21 11.5 21.5 8 19 7.5C16.5 7 17 10 17 10" stroke="#2496ED" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M17 10H15" stroke="#2496ED" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="tech-icon">
    <circle cx="6" cy="6" r="2.3" stroke="#F05032" strokeWidth="1.4" />
    <circle cx="6" cy="18" r="2.3" stroke="#F05032" strokeWidth="1.4" />
    <circle cx="18" cy="9" r="2.3" stroke="#F05032" strokeWidth="1.4" />
    <line x1="6" y1="8.3" x2="6" y2="15.7" stroke="#F05032" strokeWidth="1.4" />
    <path d="M6 8.5C6 8.5 6 10.5 9.5 11.2C13 11.9 18 11.3 18 11.3" stroke="#F05032" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const technologies = [
  { name: 'React', category: 'Frontend', icon: <ReactIcon />, color: '#61DAFB' },
  { name: 'Next.js', category: 'Frontend', icon: <NextJSIcon />, color: '#ffffff' },
  { name: 'TypeScript', category: 'Lenguaje', icon: <TypeScriptIcon />, color: '#3178C6' },
  { name: 'Node.js', category: 'Backend', icon: <NodeJSIcon />, color: '#539E43' },
  { name: 'Python', category: 'Backend', icon: <PythonIcon />, color: '#3776AB' },
  { name: 'React Native', category: 'Móvil', icon: <ReactNativeIcon />, color: '#61DAFB' },
  { name: 'Flutter', category: 'Móvil', icon: <FlutterIcon />, color: '#54C5F8' },
  { name: 'PostgreSQL', category: 'Base de datos', icon: <PostgreSQLIcon />, color: '#336791' },
  { name: 'MongoDB', category: 'Base de datos', icon: <MongoDBIcon />, color: '#00ED64' },
  { name: 'AWS', category: 'Infraestructura', icon: <AWSIcon />, color: '#FF9900' },
  { name: 'Docker', category: 'DevOps', icon: <DockerIcon />, color: '#2496ED' },
  { name: 'Git', category: 'DevOps', icon: <GitIcon />, color: '#F05032' },
];

const categories = [...new Set(technologies.map((t) => t.category))];

const isPointerFine = () =>
  typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

function handleTilt(e) {
  if (!isPointerFine()) return;
  const el = e.currentTarget;
  el.style.transition = 'border-color 0.2s, box-shadow 0.2s, background 0.2s, opacity 0.5s';
  const rect = el.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
  const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  el.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
}

function resetTilt(e) {
  const el = e.currentTarget;
  el.style.transition = '';
  el.style.transform = '';
}

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
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
                style={{ transitionDelay: `${i * 0.05}s`, '--tech-color': tech.color }}
              >
                <div className="techstack__tag-icon">
                  {tech.icon}
                </div>
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
