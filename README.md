# Nexo Software SPA — Landing Page

Landing page institucional para **Nexo Software SPA**, empresa chilena de desarrollo de software a medida. Construida con React + Vite, CSS puro y una paleta de colores basada en la identidad de marca.

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| React | 18.3 | UI component framework |
| Vite | 5.4 | Build tool y dev server |
| lucide-react | 0.383 | Iconografía |
| CSS puro | — | Estilos por componente |

Sin Tailwind, sin librerías de UI. Todo el diseño está implementado con CSS nativo y variables CSS.

---

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

---

## Estructura del proyecto

```
nexo-landing/
├── public/
│   └── nexo-logo.png          # Logo de la empresa
├── src/
│   ├── components/            # Componentes por sección
│   │   ├── Navbar.jsx + .css
│   │   ├── Hero.jsx + .css
│   │   ├── About.jsx + .css
│   │   ├── Services.jsx + .css
│   │   ├── Benefits.jsx + .css
│   │   ├── Process.jsx + .css
│   │   ├── TechStack.jsx + .css
│   │   ├── FAQ.jsx + .css
│   │   ├── CTA.jsx + .css
│   │   ├── Footer.jsx + .css
│   │   └── SEO.jsx
│   ├── content/
│   │   ├── services.js        # Textos de servicios
│   │   └── faqs.js            # Preguntas frecuentes
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── styles/
│   │   └── global.css         # Variables CSS, reset, utilidades
│   ├── App.jsx
│   ├── config.js              # Configuración del sitio
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## Configuración del sitio

Toda la información de contacto, redes sociales y textos de la empresa se centraliza en [`src/config.js`](src/config.js). Edita este archivo antes de publicar.

```js
// src/config.js

export const SITE_CONFIG = {
  companyName: 'Nexo Software',
  logoPath: '/nexo-logo.png',
};

export const CONTACT_INFO = {
  phone: '+56 9 XXXX XXXX',        // <-- completar
  whatsapp: '569XXXXXXXX',          // <-- completar (sin + ni espacios)
  email: 'contacto@nexosoftware.cl', // <-- completar
  address: 'Santiago, Chile',
  schedule: 'Lunes a Viernes: 09:00 - 18:00',
};

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/nexo-software', // <-- completar
  github: 'https://github.com/nexo-software',                 // <-- completar
  instagram: 'https://www.instagram.com/nexosoftware',        // <-- completar
};

export const PRODUCT_ACTIONS = {
  'nexo-fitness': [
    {
      label: 'Acceder a Nexo Fitness',
      url: 'https://nexofitness.cl', // <-- ajustar si cambia
      kind: 'external',
    },
  ],
  'nexo-pos': [
    {
      label: 'Contactar por WhatsApp',
      url: 'https://wa.me/...', // <-- generado desde getWhatsAppLink(...)
      kind: 'whatsapp',
    },
    {
      label: 'Contactar por correo',
      url: 'mailto:contacto@nexosoftware.cl', // <-- generado desde getEmailLink(...)
      kind: 'email',
    },
  ],
};
```

---

## Paleta de colores

Basada en el gradiente azul del logo de Nexo Software.

| Variable CSS | Valor | Uso |
|---|---|---|
| `--blue` | `#1AABF0` | Color primario de marca |
| `--blue-light` | `#8FD8FA` | Gradientes, textos accent |
| `--blue-dark` | `#0079CC` | Hover states, gradientes |
| `--blue-glow` | `rgba(26,171,240,0.15)` | Sombras y glow effects |
| `--black` | `#0A0A0F` | Fondo principal |
| `--black-soft` | `#10101A` | Fondo de secciones alternas |
| `--black-card` | `#14141F` | Fondo de tarjetas |

Todas las variables están definidas en [`src/styles/global.css`](src/styles/global.css).

---

## Secciones

| Sección | ID | Descripción |
|---|---|---|
| Navbar | — | Navegación fija con scroll effect y menú mobile |
| Hero | `#hero` | Headline principal, CTA y stats |
| Nosotros | `#nosotros` | Historia y valores de la empresa |
| Servicios | `#servicios` | 6 tarjetas de servicios con hover effects |
| Beneficios | `#beneficios` | 6 razones para elegir Nexo |
| Proceso | `#proceso` | 6 pasos del flujo de trabajo |
| Tecnologías | `#tecnologias` | Stack tecnológico con tags animados |
| FAQ | `#faq` | Accordion de preguntas frecuentes |
| Contacto | `#contacto` | CTA final con botones de acción |
| Footer | — | Links, contacto y redes sociales |

---

## Personalización de contenidos

Los textos editables por sección están separados del código:

- **Servicios** → [`src/content/services.js`](src/content/services.js)
- **Preguntas frecuentes** → [`src/content/faqs.js`](src/content/faqs.js)
- **Textos de About, Hero, Process, etc.** → directamente en el `.jsx` del componente correspondiente

Para cambiar las tecnologías del stack, edita el array `technologies` en [`src/components/TechStack.jsx`](src/components/TechStack.jsx).

---

## Animaciones

Las animaciones de entrada al hacer scroll están implementadas mediante un hook personalizado que utiliza `IntersectionObserver`:

```js
// src/hooks/useScrollAnimation.js
const [ref, visible] = useScrollAnimation(threshold);
```

Cada componente aplica las clases `visible` cuando el elemento entra en el viewport, activando las transiciones CSS definidas por componente. No se usa ninguna librería de animaciones externa.

---

## SEO

El componente `SEO.jsx` inyecta dinámicamente las meta tags esenciales:

- `<title>`, `<meta name="description">`
- Open Graph (`og:title`, `og:description`, `og:image`, `og:type`)
- Twitter Card
- `theme-color`

Para actualizar los valores SEO, edita `SEO_CONFIG` en [`src/config.js`](src/config.js).

---

## Tipografía

| Variable | Fuente | Uso |
|---|---|---|
| `--font-display` | Plus Jakarta Sans 800 | Títulos principales, hero |
| `--font-heading` | Plus Jakarta Sans 600–700 | Subtítulos, labels |
| `--font-body` | Inter 400–600 | Texto de cuerpo, descripciones |

Cargadas desde Google Fonts en [`index.html`](index.html).

---

## Checklist antes de publicar

- [ ] Completar datos de contacto en `src/config.js`
- [ ] Reemplazar links de redes sociales en `src/config.js`
- [ ] Agregar número de WhatsApp real
- [ ] Revisar y ajustar los textos de cada sección según la propuesta de valor actual
- [ ] Reemplazar imagen placeholder en la sección "Nosotros" con foto real
- [ ] Configurar dominio y `siteUrl` en `SEO_CONFIG`
- [ ] Verificar `og:image` apunta a una imagen adecuada para redes sociales
- [ ] Ejecutar `npm run build` y revisar que no haya warnings

---

## Licencia

Proyecto privado — Nexo Software SPA. Todos los derechos reservados.
