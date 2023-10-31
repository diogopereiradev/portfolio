import { getRequestConfig } from 'next-intl/server';

export const locales = {
  en: {
    name: 'en',
    fullname: 'English'
  },
  pt: {
    name: 'pt',
    fullname: 'Português'
  }
};

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./src/locales/${locale}.json`)).default
}));