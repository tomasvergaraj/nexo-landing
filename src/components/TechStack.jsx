import reactLogo from 'devicon/icons/react/react-original.svg';
import nextjsLogo from 'devicon/icons/nextjs/nextjs-original.svg';
import typescriptLogo from 'devicon/icons/typescript/typescript-original.svg';
import nodejsLogo from 'devicon/icons/nodejs/nodejs-original.svg';
import pythonLogo from 'devicon/icons/python/python-original.svg';
import reactNativeLogo from 'devicon/icons/reactnative/reactnative-original.svg';
import flutterLogo from 'devicon/icons/flutter/flutter-original.svg';
import postgresqlLogo from 'devicon/icons/postgresql/postgresql-original.svg';
import mongodbLogo from 'devicon/icons/mongodb/mongodb-original.svg';
import dockerLogo from 'devicon/icons/docker/docker-original.svg';
import gitLogo from 'devicon/icons/git/git-original.svg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './TechStack.css';

const technologies = [
  { name: 'React',         category: 'Frontend',    logo: reactLogo },
  { name: 'Next.js',       category: 'Frontend',    logo: nextjsLogo },
  { name: 'TypeScript',    category: 'Lenguaje',    logo: typescriptLogo },
  { name: 'Node.js',       category: 'Backend',     logo: nodejsLogo },
  { name: 'Python',        category: 'Backend',     logo: pythonLogo },
  { name: 'React Native',  category: 'Móvil',       logo: reactNativeLogo },
  { name: 'Flutter',       category: 'Móvil',       logo: flutterLogo },
  { name: 'PostgreSQL',    category: 'Base de datos', logo: postgresqlLogo },
  { name: 'MongoDB',       category: 'Base de datos', logo: mongodbLogo },
  { name: 'Docker',        category: 'DevOps',      logo: dockerLogo },
  { name: 'Git',           category: 'DevOps',      logo: gitLogo },
];

export default function TechStack() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="tecnologias" className="techstack section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">06 — Stack tecnológico</span>
          <h2 className="section-title">
            Herramientas <em>maduras</em>.
          </h2>
          <p className="section-subtitle">
            Tecnologías con soporte de comunidad amplio. Nada experimental
            sin que lo conversemos antes — tu software tiene que durar.
          </p>
        </div>

        <ul className={`techstack__grid ${visible ? 'visible' : ''}`} ref={ref}>
          {technologies.map((tech, index) => (
            <li
              key={tech.name}
              className="techstack__item"
              style={{ transitionDelay: `${index * 0.04}s` }}
            >
              <img
                src={tech.logo}
                alt=""
                aria-hidden="true"
                className="techstack__logo"
                loading="lazy"
              />
              <div className="techstack__info">
                <span className="techstack__name">{tech.name}</span>
                <span className="techstack__category">{tech.category}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
