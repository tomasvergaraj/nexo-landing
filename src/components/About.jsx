import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

export default function About() {
  const [ref, visible] = useScrollAnimation();
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section id="nosotros" className="about section">
      <div className="container" ref={ref}>
        <div className={`about__grid ${visible ? 'visible' : ''}`}>
          <div className="about__head">
            <span className="section-label">01 — Quién está detrás</span>
          </div>

          <figure className="about__quote">
            <blockquote>
              <span className="about__quote-mark" aria-hidden="true">“</span>
              La experiencia del usuario y la seguridad de sus datos no son
              extras — son la base. Todo lo demás se construye encima.
            </blockquote>
            <figcaption>
              <div className="about__author">
                {photoFailed ? (
                  <div className="about__avatar about__avatar--placeholder" aria-hidden="true">
                    TV
                  </div>
                ) : (
                  <img
                    src="/founder.jpg"
                    alt="Tomás Vergara, fundador de Nexo Software"
                    className="about__avatar"
                    onError={() => setPhotoFailed(true)}
                    loading="lazy"
                  />
                )}
                <div className="about__author-info">
                  <p className="about__author-name">Tomás Vergara</p>
                  <p className="about__author-role">Fundador · Nexo Software SPA</p>
                </div>
              </div>
            </figcaption>
          </figure>

          <div className="about__text">
            <p>
              <strong>Nexo Software</strong> es un estudio independiente con base en
              Quillota. Construyo software a medida para empresas que necesitan
              algo más serio que un template — plataformas SaaS, sistemas POS,
              aplicaciones móviles y landings que efectivamente convierten.
            </p>
            <p>
              Trabajo de cerca con cada cliente, sin intermediarios. Eso significa
              que la persona con la que conversas el alcance es la misma que
              escribe el código y la que va a estar disponible cuando algo falle
              en producción.
            </p>
            <p>
              Si tu proyecto necesita rigor técnico, transparencia en los plazos
              y código que vas a poder mantener en cinco años,{' '}
              <a href="#contacto" className="link-inline">conversemos</a>.
            </p>
          </div>

          <ul className="about__principles">
            <li>
              <span className="about__principles-num">·01</span>
              <span>UX como punto de partida, no como capa final.</span>
            </li>
            <li>
              <span className="about__principles-num">·02</span>
              <span>Seguridad por defecto: cifrado, auditoría y backups.</span>
            </li>
            <li>
              <span className="about__principles-num">·03</span>
              <span>Código mantenible, documentado y testeado.</span>
            </li>
            <li>
              <span className="about__principles-num">·04</span>
              <span>Plazos honestos. Si algo no se puede, se dice antes.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
