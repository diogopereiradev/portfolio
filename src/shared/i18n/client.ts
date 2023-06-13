'use client';
import { useEffect } from 'react';
import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import languageDetector from 'i18next-browser-languagedetector';
import { getI18nSetupOptions } from './settings';

i18next
  .use(initReactI18next)
  .use(languageDetector)
  .use(resourcesToBackend((lng: string) => import(`../../locales/${lng}.json`)))
  .init({
    ...getI18nSetupOptions(),
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator']
    }
  });

export function useClientI18nTranslation(lng: string) {
  useEffect(() => {
    if(i18next.resolvedLanguage === lng) return;
    i18next.changeLanguage(lng);
  }, [lng]);
  
  return useTranslation();
}