'use client';
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { getExperienceTime } from '../../scripts/getExperienceTime';
import { useExperiences } from '../../hooks/useExperiences';

function TechnologiesContentTitle(): JSX.Element {
  const t = useTranslations();
  const { data } = useExperiences();
  const { months, years } = getExperienceTime(data);
  const experience = `
    ${years === 0 ? '' : years === 1 ? `${years} ${t('experiences-section-skill-menu-experience-year-text')}` : `${years} ${t('experiences-section-skill-menu-experience-years-text')}`}
    ${months === 0 ? '' : months === 1 ? `${months} ${t('experiences-section-skill-menu-experience-month-text')}` : `${months} ${t('experiences-section-skill-menu-experience-months-text')}`}
  `;

  return (
    <div className='flex base:flex-col md:flex-row justify-between items-center'>
      <div className='flex items-center gap-[15px]'>
        {data.icon}
        <h3 className='text-[22px] font-[500] text-white-100'>{data.name}</h3>
      </div>
      <p className='text-[15px] font-[500] text-primary-200'>{t('experiences-section-skill-menu-experience-text')} - {experience}</p>
    </div>
  );
}

function TechnologiesDescription(): JSX.Element {
  const t = useTranslations();
  const { data } = useExperiences();
  const locale = useLocale();

  return (
    <>
      <p className='px-[0px] text-[16px] font-[400] text-primary-100'>{data.description}</p>
      <div className='flex flex-col gap-[10px]'>
        <h3 className='px-[0px] text-[18px] font-[700] text-primary-100'>{t('experiences-skill-knowledges-message')}:</h3>
        <div className='flex base:gap-[18px] md:gap-[30px]'>
          <ul className='flex flex-col gap-x-[25px] gap-y-[15px] list-disc marker:text-secondary-100 ml-[13px]'>
            {data.knowledges.slice(0, 3).map(knowledge => (
              <li key={Math.random()}>
                <p className='px-[0px] text-[16px] font-[400] text-primary-100'>{knowledge.text[locale]}</p>
              </li>
            ))}
          </ul>
          <ul className='flex flex-col gap-x-[25px] gap-y-[15px] list-disc marker:text-secondary-100 ml-[13px]'>
            {data.knowledges.slice(3, 6).map(knowledge => (
              <li key={Math.random()}>
                <p className='px-[0px] text-[16px] font-[400] text-primary-100'>{knowledge.text[locale]}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export function TechnologiesContent(): JSX.Element {
  return (
    <div className='flex flex-col gap-[30px] base:pr-[0px] mmd:pr-[50px]'>
      <TechnologiesContentTitle />
      <TechnologiesDescription />
    </div>
  );
}