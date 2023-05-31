import { useClientI18nTranslation } from '../i18n/client';
import en from '../../locales/en.json';

export function useClientTranslation() {
  // Mock of window created to pass in next.js lint, because next.js doesn't get useEffect in useClientI18nTranslation which guarantees window availability
  const window = { location: { pathname: '' } };
  const pageParamLocale = window.location.pathname.split('/')[1];
  const { t: i18nT } = useClientI18nTranslation(pageParamLocale);

  const t = (value: keyof typeof en): string => {
    return i18nT(value);
  };

  return {
    t
  };
}