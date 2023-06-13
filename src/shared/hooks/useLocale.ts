'use client';
import { SupportedLanguages, fallbackLanguage } from '../i18n/settings';

export function useLocale(): () => SupportedLanguages {
  if(typeof window === 'undefined') {
    return () => fallbackLanguage as SupportedLanguages;
  } else {
    return () => window.location.pathname.split('/')[1] as SupportedLanguages;
  }
}