import { useServerI18nTranslation } from '../i18n/server';
import { serverLocale } from '../contexts/localeServerContext';
import en from '../../locales/en.json';

export async function useSSRTranslation() {
  const { t: i18nT } = await useServerI18nTranslation(serverLocale());

  const t = (value: keyof typeof en): string => {
    return i18nT(value);
  };

  return {
    t
  };
}