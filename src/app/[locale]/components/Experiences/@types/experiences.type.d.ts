export type TechnologyData = {
  name: string,
  description: string,
  icon: JSX.Element,
  techExperience: {
    started: Date,
    paused?: Date
  }
};