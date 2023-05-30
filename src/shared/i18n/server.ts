import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { fallbackLanguage, getOptions } from './settings';

const initI18next = async (language = fallbackLanguage) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((lng: string) => import(`../../locales/${lng}.json`)))
    .init(getOptions(language));
  return i18nInstance;
};

export async function useServerI18nTranslation(language: string) {
  const i18nextInstance = await initI18next(language);
  return {
    t: i18nextInstance.getFixedT(language, undefined, undefined),
    i18n: i18nextInstance
  };
}