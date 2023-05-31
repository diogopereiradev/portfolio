import { useServerI18nTranslation } from '../i18n/server';
import { serverLocale } from '../contexts/localeServerContext';
import { fallbackLanguage } from '../i18n/settings';
import en from '../../locales/en.json';

export async function useSSRTranslation(locale?: string) {
  const { t: i18nT } = await useServerI18nTranslation(locale || serverLocale() || fallbackLanguage);

  const t = (value: keyof typeof en): string => {
    return i18nT(value);
  };

  return {
    t
  };
}