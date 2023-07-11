import { SupportedLanguages } from '../../../../../shared/i18n/settings';

export type TechnologyData = {
  name: string,
  description: string,
  knowledges: {
    text: {
      [key in SupportedLanguages]: string
    }
  }[],
  icon: JSX.Element,
  techExperience: {
    started: Date,
    paused?: Date
  }
};