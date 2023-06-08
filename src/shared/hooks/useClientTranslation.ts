'use client';
import { useClientI18nTranslation } from '../i18n/client';
import en from '../../locales/en.json';
import { SupportedLanguages, fallbackLanguage } from '../i18n/settings';

export function useClientTranslation() {
  let pageParamLocale: SupportedLanguages;

  if(typeof window === 'undefined') {
    pageParamLocale = fallbackLanguage as SupportedLanguages;
  } else {
    pageParamLocale = window.location.pathname.split('/')[1] as SupportedLanguages;
  }

  const { t: i18nT } = useClientI18nTranslation(pageParamLocale);

  const t = (value: keyof typeof en): string => {
    return i18nT(value);
  };

  return {
    t
  };
}