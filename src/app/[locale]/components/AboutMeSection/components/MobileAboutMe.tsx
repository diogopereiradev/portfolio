import React from 'react';
import { useSSRTranslation } from '../../../../../shared/hooks/useSSRTranslation';

import { MobileSectionSeparator } from '../../../../components/MobileSectionSeparator';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function MobileAboutMe(): JSX.Element {
  const { t } = await useSSRTranslation();

  return (
    <div className='flex mmd:hidden flex-col gap-[25px] px-12 py-0 mt-[-70px]'>
      <h1>{t('aboutme.section.title')}</h1>
      <div className='flex flex-col gap-[20px]'>
        <p className='text-[15px] text-primary-400 font-text'>{t('aboutme.section.description.paragraph.1')}</p>
        <p className='text-[15px] text-primary-400 font-text'>{t('aboutme.section.description.paragraph.2')}</p>
        <p className='text-[15px] text-primary-400 font-text'>{t('aboutme.section.description.paragraph.3')}</p>
      </div>
      <div className='mx-[auto] mt-[40px]'>
        <MobileSectionSeparator />
      </div>
    </div>
  );
}