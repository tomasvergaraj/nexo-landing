/**
 * Mapa de tecnologías → URL del logo oficial.
 * Fuentes:
 *  - devicon (https://devicon.dev) vía jsDelivr para logos con color de marca.
 *  - simple-icons (https://simpleicons.org) para marcas que no están en devicon.
 *
 * Si una key no está en el mapa, el componente cae al texto plano del tag.
 */
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
const SIMPLE = 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons';

export const techIcons = {
  React: `${DEVICON}/react/react-original.svg`,
  TypeScript: `${DEVICON}/typescript/typescript-original.svg`,
  JavaScript: `${DEVICON}/javascript/javascript-original.svg`,
  Vite: `${DEVICON}/vitejs/vitejs-original.svg`,
  Astro: `${DEVICON}/astro/astro-original.svg`,
  TailwindCSS: `${DEVICON}/tailwindcss/tailwindcss-original.svg`,
  'Node.js': `${DEVICON}/nodejs/nodejs-original.svg`,
  NodeJS: `${DEVICON}/nodejs/nodejs-original.svg`,
  Docker: `${DEVICON}/docker/docker-original.svg`,
  'Docker Compose': `${DEVICON}/docker/docker-original.svg`,
  Python: `${DEVICON}/python/python-original.svg`,
  FastAPI: `${DEVICON}/fastapi/fastapi-original.svg`,
  PostgreSQL: `${DEVICON}/postgresql/postgresql-original.svg`,
  Redis: `${DEVICON}/redis/redis-original.svg`,
  Electron: `${DEVICON}/electron/electron-original.svg`,
  Firebase: `${DEVICON}/firebase/firebase-plain.svg`,
  Firestore: `${DEVICON}/firebase/firebase-plain.svg`,
  Vercel: `${SIMPLE}/vercel.svg`,
  Stripe: `${SIMPLE}/stripe.svg`,
  Expo: `${SIMPLE}/expo.svg`,
  'React Native': `${DEVICON}/react/react-original.svg`,
  Supabase: `${SIMPLE}/supabase.svg`,
  OpenAI: `${SIMPLE}/openai.svg`,
  'OpenAI API': `${SIMPLE}/openai.svg`,
  WhatsApp: `${SIMPLE}/whatsapp.svg`,
  'CSS3': `${DEVICON}/css3/css3-original.svg`,
  'HTML5': `${DEVICON}/html5/html5-original.svg`,
  Zustand: `${SIMPLE}/zedindustries.svg`, // sin logo oficial — fallback discreto
  // Conceptos que no tienen logo de marca → mostrar texto (no agregar aquí)
  // 'SEO Local', 'Schema.org', 'Responsive', 'OCR', 'Canvas API', 'CSS Animations', 'Transbank'
};

/**
 * Devuelve la URL del icono oficial para una tecnología, o null si no existe.
 */
export function getTechIcon(name) {
  return techIcons[name] ?? null;
}
