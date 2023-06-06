'use client';
import React from 'react';
import { useClientTranslation } from '../../../../../../../shared/hooks/useClientTranslation';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { setDocumentScroll } from '../../../../../../../shared/utils/setDocumentScroll';
import { getDateDiff } from '../../../../../../../shared/utils/getDateDiff';
import { useMobileMenu } from './hooks/useMobileMenu';

function TopBar(): JSX.Element {
  const { data, closeMenu } = useMobileMenu();

  const handleCloseMenu = () => {
    setDocumentScroll(true);
    closeMenu();
  };

  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-[12px]'>
        <i className='[&>svg]:w-[50px] [&>svg]:h-[50px]'>
          {data.icon}
        </i>
        <h2 className='font-text text-[18px]'>{data.title}</h2>
      </div>
      <button onClick={handleCloseMenu} className='px-[5px] py-[5px] bg-transparent'>
        <AiOutlineCloseCircle className='text-[#fff]' size={30} />
      </button>
    </div>
  );
}

function Experience(): JSX.Element {
  const { data } = useMobileMenu();
  const { t } = useClientTranslation();
  const experienceTime = getExperienceTime();

  function getExperienceTime() {
    const studyInitialDate = data.techExperience.studyStarted;

    if (data.techExperience.studyPaused) {
      const studyPausedDate = data.techExperience.studyPaused;
      const initialAndPausedDateDiff = getDateDiff(studyInitialDate, studyPausedDate);
      return initialAndPausedDateDiff;
    } else {
      const dateDiff = getDateDiff(studyInitialDate);
      return dateDiff;
    }
  }

  return (
    <div className='flex flex-col gap-[10px] w-full'>
      <p className='text-[16px] text-primary-200'>{t('skills.section.skill.menu.experience.text')}:</p>
      <div className='flex items-center w-full h-[45px] bg-secondary-200 rounded-full border-[2px] border-solid border-secondary-300 pl-[15px]'>
        <p className='text-[16px]'>
          {`
            ${experienceTime.years === 0 ? '' : experienceTime.years === 1 ? `${experienceTime.years} ${t('skills.section.skill.menu.experience.year.text')}` : `${experienceTime.years} ${t('skills.section.skill.menu.experience.years.text')}`}
            ${experienceTime.months === 0 ? '' : experienceTime.months === 1 ? `${experienceTime.months} ${t('skills.section.skill.menu.experience.month.text')}` : `${experienceTime.months} ${t('skills.section.skill.menu.experience.months.text')}`}
          `}
        </p>
      </div>
    </div>
  );
}

function Description(): JSX.Element {
  const { data } = useMobileMenu();
  const { t } = useClientTranslation();

  return (
    <div className='flex flex-col gap-[10px] w-full'>
      <p className='text-[16px] text-primary-200'>{t('skills.section.skill.menu.description.text')}:</p>
      <div className='flex w-full h-[180px] overflow-scroll bg-secondary-200 rounded-[8px] border-[2px] border-solid border-secondary-300 px-[25px] py-[16px]'>
        <div>
          <p className='text-[14.5px] leading-6 text-primary-300'>{data.description}</p>
          <div className='h-[20px]'></div>
        </div>
      </div>
    </div>
  );
}

export function MobileSkillMenu(): JSX.Element {
  const { isOpen } = useMobileMenu();

  return (
    <div className={`fixed top-0 flex flex-col gap-[30px] w-screen h-screen bg-secondary-500 duration-300 p-12 ${isOpen ? 'left-0' : 'left-[-100vw]'}`}>
      <TopBar />
      <hr className='w-full h-[3px]' />
      <Experience />
      <Description />
    </div>
  );
}