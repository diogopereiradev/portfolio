export interface MobileMenuData {
  icon: JSX.Element,
  techExperience: {
    studyStarted: Date,
    studyPaused?: Date
  },
  title: string,
  description: string
}