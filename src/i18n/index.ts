import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import tr from './locales/tr.json';
import en from './locales/en.json';
import de from './locales/de.json';

export const languages = {
  tr: {
    name: 'Türkçe',
    flag: 'https://flagcdn.com/w80/tr.png'
  },
  en: {
    name: 'English',
    flag: 'https://flagcdn.com/w80/gb.png'
  },
  de: {
    name: 'Deutsch',
    flag: 'https://flagcdn.com/w80/de.png'
  },
};

// URL'den dile, dilden URL'e çeviri mapping'i
export const routeTranslations: Record<string, Record<string, string>> = {
  home: {
    tr: '',
    en: '',
    de: '',
  },
  about: {
    tr: 'hakkimizda',
    en: 'about',
    de: 'uber-uns',
  },
  services: {
    tr: 'hizmetler',
    en: 'services',
    de: 'dienstleistungen',
  },
  help: {
    tr: 'yardim',
    en: 'help',
    de: 'hilfe',
  },
  contact: {
    tr: 'iletisim',
    en: 'contact',
    de: 'kontakt',
  },
  carrier: {
    tr: 'surucu-basvuru',
    en: 'driver-application',
    de: 'fahrer-bewerbung',
  },
  dealer: {
    tr: 'bayi-basvuru',
    en: 'dealer-application',
    de: 'handler-bewerbung',
  },
  corporate: {
    tr: 'kurumsal-uyelik',
    en: 'corporate-membership',
    de: 'firmenmitgliedschaft',
  },
  vehiclese: {
    tr: 'arac-siniflarimiz',
    en: 'vehicle-classes',
    de: 'fahrzeugklassen',
  },
};

// HashRouter için URL'den path kısmını al
function getPathFromHash(): string {
  if (typeof window === 'undefined') return '/';
  const hash = window.location.hash;
  if (!hash || hash === '#') return '/';
  // Remove the # and get the path
  return hash.replace('#', '') || '/';
}

// URL path'inden hangi dil olduğunu bul
export function getLanguageFromPath(path: string): string | null {
  // HashRouter için hash'i kontrol et
  const actualPath = typeof window !== 'undefined' ? getPathFromHash() : path;
  const segment = actualPath.split('/').filter(Boolean)[0];

  // Ana sayfa için null döndür, böylece mevcut dil korunur
  if (!segment) {
    return null;
  }

  for (const [, translations] of Object.entries(routeTranslations)) {
    for (const [lang, translatedPath] of Object.entries(translations)) {
      if (translatedPath === segment) {
        return lang;
      }
    }
  }

  return null; // Bilinmeyen bir yol için mevcut dili koru
}

// URL path'inden route adını bul
export function getRouteFromPath(path: string): string | null {
  // HashRouter için hash'i kontrol et
  const actualPath = typeof window !== 'undefined' ? getPathFromHash() : path;
  const segment = actualPath.split('/').filter(Boolean)[0];

  if (!segment) {
    return 'home';
  }

  for (const [route, translations] of Object.entries(routeTranslations)) {
    for (const translatedPath of Object.values(translations)) {
      if (translatedPath === segment) {
        return route;
      }
    }
  }

  return null;
}

// Belirli bir route için belirli bir dildeki path'i al
export function getLocalizedPath(route: string, lang: string): string {
  const translation = routeTranslations[route];
  if (translation && translation[lang] !== undefined) {
    return translation[lang] ? `/${translation[lang]}` : '/';
  }
  return `/${route}`;
}

// Tüm dillerdeki alternatif URL'leri al (hreflang için)
export function getAlternateUrls(route: string): Array<{ lang: string; href: string }> {
  const translation = routeTranslations[route];
  if (!translation) return [];

  return Object.entries(translation).map(([lang, path]) => ({
    lang,
    href: path ? `/${path}` : '/',
  }));
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      tr: { translation: tr },
      en: { translation: en },
      de: { translation: de },
    },
    fallbackLng: 'tr',
    supportedLngs: ['tr', 'en', 'de'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
