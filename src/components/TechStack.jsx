import reactLogo from 'devicon/icons/react/react-original.svg';
import nextjsLogo from 'devicon/icons/nextjs/nextjs-original.svg';
import typescriptLogo from 'devicon/icons/typescript/typescript-original.svg';
import nodejsLogo from 'devicon/icons/nodejs/nodejs-original.svg';
import pythonLogo from 'devicon/icons/python/python-original.svg';
import reactNativeLogo from 'devicon/icons/reactnative/reactnative-original.svg';
import flutterLogo from 'devicon/icons/flutter/flutter-original.svg';
import postgresqlLogo from 'devicon/icons/postgresql/postgresql-original.svg';
import mongodbLogo from 'devicon/icons/mongodb/mongodb-original.svg';
import awsLogo from 'devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg';
import dockerLogo from 'devicon/icons/docker/docker-original.svg';
import gitLogo from 'devicon/icons/git/git-original.svg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './TechStack.css';

const technologies = [
  { name: 'React', category: 'Frontend', logo: reactLogo, color: '#61DAFB' },
  { name: 'Next.js', category: 'Frontend', logo: nextjsLogo, color: '#FFFFFF' },
  { name: 'TypeScript', category: 'Lenguaje', logo: typescriptLogo, color: '#3178C6' },
  { name: 'Node.js', category: 'Backend', logo: nodejsLogo, color: '#539E43' },
  { name: 'Python', category: 'Backend', logo: pythonLogo, color: '#3776AB' },
  { name: 'React Native', category: 'Movil', logo: reactNativeLogo, color: '#61DAFB' },
  { name: 'Flutter', category: 'Movil', logo: flutterLogo, color: '#54C5F8' },
  { name: 'PostgreSQL', category: 'Base de datos', logo: postgresqlLogo, color: '#336791' },
  { name: 'MongoDB', category: 'Base de datos', logo: mongodbLogo, color: '#47A248' },
  {
    name: 'AWS',
    category: 'Infraestructura',
    logo: awsLogo,
    color: '#FF9900',
    iconType: 'wordmark',
  },
  { name: 'Docker', category: 'DevOps', logo: dockerLogo, color: '#2496ED' },
  { name: 'Git', category: 'DevOps', logo: gitLogo, color: '#F05032' },
];

const categories = [...new Set(technologies.map((tech) => tech.category))];

const isPointerFine = () =>
  typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

function handleTilt(event) {
  if (!isPointerFine()) return;
  const element = event.currentTarget;
  element.style.transition =
    'border-color 0.2s, box-shadow 0.2s, background 0.2s, opacity 0.5s';
  const rect = element.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
  const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  element.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
}

function resetTilt(event) {
  const element = event.currentTarget;
  element.style.transition = '';
  element.style.transform = '';
}

export default function TechStack() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="tecnologias" className="techstack section">
      <div className="pattern-overlay" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">Stack tecnologico</span>
          <h2 className="section-title">Tecnologias que usamos</h2>
          <p className="section-subtitle">
            Trabajamos con tecnologias modernas, maduras y con amplio soporte de la comunidad
            para garantizar el mejor resultado en cada proyecto.
          </p>
        </div>

        <div className="techstack__wrapper" ref={ref}>
          <div className={`techstack__tags ${visible ? 'visible' : ''}`}>
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className={`techstack__tag ${tech.iconType === 'wordmark' ? 'techstack__tag--wordmark' : ''}`}
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
                style={{ transitionDelay: `${index * 0.05}s`, '--tech-color': tech.color }}
              >
                <div
                  className={`techstack__tag-icon ${tech.iconType === 'wordmark' ? 'techstack__tag-icon--wordmark' : ''}`}
                >
                  <img
                    src={tech.logo}
                    alt=""
                    aria-hidden="true"
                    className="tech-icon"
                    loading="lazy"
                  />
                </div>
                <span className="techstack__tag-name">{tech.name}</span>
                <span className="techstack__tag-cat">{tech.category}</span>
              </div>
            ))}
          </div>

          <div className={`techstack__categories ${visible ? 'visible' : ''}`}>
            {categories.map((category, index) => (
              <div
                key={category}
                className="techstack__category"
                style={{ transitionDelay: `${index * 0.07 + 0.3}s` }}
              >
                <div className="techstack__category-dot" />
                <span>{category}</span>
                <span className="techstack__category-count">
                  {technologies.filter((tech) => tech.category === category).length}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
