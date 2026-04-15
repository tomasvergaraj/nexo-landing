import { useEffect } from 'react';
import { SEO_CONFIG, CONTACT_INFO, SITE_CONFIG } from '../config';

export default function SEO() {
  useEffect(() => {
    document.title = SEO_CONFIG.defaultTitle;

    const setMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', SEO_CONFIG.defaultDescription);
    setMeta('theme-color', SEO_CONFIG.themeColor);
    setMeta('og:title', SEO_CONFIG.defaultTitle, true);
    setMeta('og:description', SEO_CONFIG.defaultDescription, true);
    setMeta('og:type', 'website', true);
    setMeta('og:locale', SEO_CONFIG.locale, true);
    setMeta('og:image', SEO_CONFIG.ogImagePath, true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', SEO_CONFIG.defaultTitle);
    setMeta('twitter:description', SEO_CONFIG.defaultDescription);

    document.documentElement.lang = SEO_CONFIG.language;
  }, []);

  return null;
}
