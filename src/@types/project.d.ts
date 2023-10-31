import { SupportedLanguages } from '../shared/i18n/settings';

export type ProjectCardTecnhology = {
  label: string,
  color: string
};

export type ProjectData = {
  projectIconUrl?: string,
  projectThumbImageUrl: string,
  priority: number,
  name: string,
  description: {
    [key in SupportedLanguages]?: string
  },
  technologies: ProjectCardTecnhology[],
  projectLiveUrl: string,
  projectRepositoryUrl: string,
  createdAt: Date
};