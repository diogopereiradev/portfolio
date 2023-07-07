'use client';
import React from 'react';
import { useClientTranslation } from '../../../../../../shared/hooks/useClientTranslation';
import { getExperienceTime } from '../../scripts/getExperienceTime';
import { useExperiences } from '../../hooks/useExperiences';

function TechnologiesContentTitle(): JSX.Element {
  const { t } = useClientTranslation();
  const { data } = useExperiences();
  const { months, years } = getExperienceTime(data);
  const experience = `
    ${years === 0 ? '' : years === 1 ? `${years} ${t('experiences.section.skill.menu.experience.year.text')}` : `${years} ${t('experiences.section.skill.menu.experience.years.text')}`}
    ${months === 0 ? '' : months === 1 ? `${months} ${t('experiences.section.skill.menu.experience.month.text')}` : `${months} ${t('experiences.section.skill.menu.experience.months.text')}`}
  `;

  return (
    <div className='flex base:flex-col md:flex-row justify-between items-center'>
      <div className='flex items-center gap-[15px]'>
        {data.icon}
        <h3 className='text-[22px] font-[500] text-white-100'>{data.name}</h3>
      </div>
      <p className='text-[15px] font-[500] text-primary-200'>{t('experiences.section.skill.menu.experience.text')} - {experience}</p>
    </div>
  );
}

function TechnologiesDescription(): JSX.Element {
  const { data } = useExperiences();
  return <p className='px-[0px] text-[16px] font-[400] text-primary-100'>{data.description}</p>;
}

export function TechnologiesContent(): JSX.Element {
  return (
    <div className='flex flex-col gap-[40px] base:pr-[0px] mmd:pr-[50px]'>
      <TechnologiesContentTitle />
      <TechnologiesDescription />
    </div>
  );
}