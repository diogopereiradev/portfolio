export type SupportedLanguages = 'en' | 'pt';
export const supportedLanguages = ['en', 'pt'];
export const languagesFullnameDatabase = {
  en: 'English',
  pt: 'Português'
};
export const fallbackLanguage = supportedLanguages[0];

export const getI18nSetupOptions = (language = fallbackLanguage) => ({
  supportedLngs: supportedLanguages,
  lng: language,
  fallbackLng: language
});