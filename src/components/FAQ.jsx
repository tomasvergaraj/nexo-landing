import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { faqs } from '../content/faqs';
import './FAQ.css';

function FAQItem({ code, question, answer, isOpen, toggle }) {
  return (
    <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
      <button className="faq__question" onClick={toggle} aria-expanded={isOpen}>
        <span className="faq__code">{code}</span>
        <span className="faq__q-text">{question}</span>
        <span className="faq__toggle" aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div className="faq__answer-wrap">
        <p className="faq__answer">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="faq" className="faq section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">07 — Preguntas frecuentes</span>
          <h2 className="section-title">
            Lo que <em>preguntan</em> antes de empezar.
          </h2>
          <p className="section-subtitle">
            Si tienes otra duda, escríbenos y respondemos en menos de 24 horas.
          </p>
        </div>

        <div className={`faq__list ${visible ? 'visible' : ''}`} ref={ref}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.q}
              code={String(i + 1).padStart(2, '0')}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
