import React from 'react';
import { useSSRTranslation } from '../../../../shared/hooks/useSSRTranslation';

import { MobileSectionSeparator } from '../../../components/MobileSectionSeparator';
import { MobileFrontEndSkills } from './components/mobile/MobileFrontendSkills';
import { MobileSupportSkills } from './components/mobile/MobileSupportSkills';
import { MobileBasicSkills } from './components/mobile/MobileBasicSkills';
import { MobileMenuProvider } from './components/mobile/MobileSkillMenu/context/mobileMenuContext';
import { MobileSkillMenu } from './components/mobile/MobileSkillMenu';

function Skills(): JSX.Element {
  return (
    <MobileMenuProvider>
      <div className='flex flex-col gap-[30px]'>
        <MobileFrontEndSkills />
        <MobileSupportSkills />
        <MobileBasicSkills />
      </div>
      <MobileSkillMenu />
    </MobileMenuProvider>
  );
}

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
      <Skills />
      <div className='mx-[auto] mt-[40px]'>
        <MobileSectionSeparator />
      </div>
    </section>
  );
}