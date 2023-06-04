import React from 'react';
import { useSSRTranslation } from '../../../../shared/hooks/useSSRTranslation';

import { MobileSectionSeparator } from '../../../components/MobileSectionSeparator';
import { FrontEndSkills } from './components/FrontEndSkills';
import { SupportSkills } from './components/SupportSkills';
import { BasicSkills } from './components/BasicSkills';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function SkillsSection(): JSX.Element {
  const { t } = await useSSRTranslation();

  return (
    <section className='flex flex-col gap-[15px] px-12 py-0 mt-[36px]'>
      <h2>{t('skills.section.title')}</h2>
      <p className='text-[16px] text-primary-400 font-text font-[600]'>
        {t('skills.section.description')}
      </p>
      <hr className='w-full h-[2px] mt-[5px]' />
      <div className='flex flex-col gap-[30px]'>
        <FrontEndSkills />
        <SupportSkills />
        <BasicSkills />
      </div>
      <div className='mx-[auto] mt-[40px]'>
        <MobileSectionSeparator />
      </div>
    </section>
  );
}