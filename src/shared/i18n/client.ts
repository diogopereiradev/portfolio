'use client';
import { useEffect } from 'react';
import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import languageDetector from 'i18next-browser-languagedetector';
import { getOptions } from './settings';

i18next
  .use(initReactI18next)
  .use(languageDetector)
  .use(resourcesToBackend((lng: string) => import(`../../locales/${lng}.json`)))
  .init({
    ...getOptions(),
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator']
    }
  });

const isRunningInServerSide = typeof window === 'undefined';

export function useClientI18nTranslation(lng: string) {
  if(isRunningInServerSide && i18next.resolvedLanguage !== lng) {
    i18next.changeLanguage(lng);
  }

  useEffect(() => {
    if(i18next.resolvedLanguage === lng) return;
    i18next.changeLanguage(lng);
  }, [lng]);
  
  return useTranslation();
}