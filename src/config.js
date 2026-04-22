/* ============================================
   CONFIGURACION DEL SITIO - NEXO SOFTWARE SPA
   Edita estos valores para personalizar la web
   ============================================ */

export const SITE_CONFIG = {
  companyName: 'Nexo Software',
  tagline: 'Desarrollo de Software a Medida',
  slogan: 'Conectamos tu negocio con la tecnología que necesita',
  logoPath: '/nexo-logo.png',
};

export const SEO_CONFIG = {
  language: 'es-CL',
  locale: 'es_CL',
  countryCode: 'CL',
  siteUrl: '',
  defaultTitle: 'Nexo Software SPA | Desarrollo de Software a Medida',
  defaultDescription:
    'Empresa chilena de desarrollo de software a medida. Creamos aplicaciones web, móviles y sistemas empresariales que impulsan tu negocio.',
  ogImagePath: '/nexo-logo.png',
  themeColor: '#0A0A0A',
};

export const CONTACT_INFO = {
  phone: '+56 9 8196 4119',
  phoneClean: '56981964119',
  whatsapp: '56981964119',
  whatsappMessage: 'Hola, me gustaría consultar sobre el desarrollo de un proyecto de software.',
  email: 'contacto@nexosoftware.cl',
  address: 'Quillota, Chile',
  city: 'Quillota',
  region: 'Región de Valparaíso',
  schedule: 'Siempre disponible',
};

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/nexo-software-spa/',
  github: 'https://github.com/tomasvergaraj',
  instagram: 'https://www.instagram.com/tomasvergar4/',
};

export const getWhatsAppLink = (message) => {
  const msg = encodeURIComponent(message || CONTACT_INFO.whatsappMessage);
  return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${msg}`;
};

export const getPhoneLink = () => `tel:${CONTACT_INFO.phoneClean}`;

export const getEmailLink = (subject, body) => {
  const params = [];

  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);

  const query = params.join('&');
  return `mailto:${CONTACT_INFO.email}${query ? `?${query}` : ''}`;
};

export const PRODUCT_ACTIONS = {
  'nexo-fitness': [
    {
      label: 'Acceder a Nexo Fitness',
      url: 'https://nexofitness.cl',
      kind: 'external',
      newTab: true,
    },
  ],
  'nexo-pos': [
    {
      label: 'Contactar por WhatsApp',
      url: getWhatsAppLink('Hola, me interesa conocer Nexo POS.'),
      kind: 'whatsapp',
      newTab: true,
    },
    {
      label: 'Contactar por correo',
      url: getEmailLink(
        'Consulta sobre Nexo POS',
        'Hola, me interesa conocer Nexo POS.',
      ),
      kind: 'email',
      newTab: false,
    },
  ],
  'bugueno-hormigones': [
    {
      label: 'Visitar sitio',
      url: 'https://buguenohormigones.cl/',
      kind: 'external',
      newTab: true,
    },
  ],
};
