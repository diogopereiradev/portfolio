export type ProjectCardTecnhology = {
  label: string,
  color: string
};

export type ProjectData = {
  projectIconUrl?: string,
  projectThumbImageUrl: string,
  name: string,
  description: string,
  technologies: ProjectCardTecnhology[],
  projectUrl: string,
  projectRepositoryUrl: string,
  createdAt: Date
};