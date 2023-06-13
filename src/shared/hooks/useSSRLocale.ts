import { useSSRPathname } from './useSSRPathname';
import { SupportedLanguages } from '../i18n/settings';

export function useSSRLocale(): SupportedLanguages {
  const pathname = useSSRPathname();
  const locale = pathname.split('/')[1];
  return locale as SupportedLanguages;
}