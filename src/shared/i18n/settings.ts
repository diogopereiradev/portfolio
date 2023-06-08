export const supportedLanguages = ['en', 'pt'];
export type SupportedLanguages = 'en' | 'pt';
export const fallbackLanguage = supportedLanguages[0];

export const getOptions = (language = fallbackLanguage,) => ({
  supportedLngs: supportedLanguages,
  lng: language,
  fallbackLng: language
});