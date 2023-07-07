import { TechnologyData } from '../@types/experiences.type';
import { getDateDiff } from '../../../../../shared/utils/getDateDiff';

export function getExperienceTime(data: TechnologyData) {
  const studyInitialDate = data.techExperience.started;

  if (data.techExperience.paused) {
    const studyPausedDate = data.techExperience.paused;
    const initialAndPausedDateDiff = getDateDiff(studyInitialDate, studyPausedDate);
    return initialAndPausedDateDiff;
  } else {
    const dateDiff = getDateDiff(studyInitialDate);
    return dateDiff;
  }
}