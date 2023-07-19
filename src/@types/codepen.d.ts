import { SupportedLanguages } from '../shared/i18n/settings';

export type CodepenProjectData = {
  name: string,
  description: {
    [key in SupportedLanguages]?: string
  },
  projectUrl: string
};