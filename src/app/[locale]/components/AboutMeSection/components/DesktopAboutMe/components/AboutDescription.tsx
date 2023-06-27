import React from 'react';
import { useSSRTranslation } from '../../../../../../../shared/hooks/useSSRTranslation';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function AboutDescription(): JSX.Element {
  const { t } = await useSSRTranslation();

  return (
    <div className='flex flex-col gap-[15px] mmd:pr-[0px] 2xl:pr-[50px] pt-[70px] px-[5px]'>
      <p className='text-[#B1B1B1] font-[600]'>{t('aboutme.section.description.paragraph.1')}</p>
      <p className='text-[#B1B1B1] font-[600]'>{t('aboutme.section.description.paragraph.2')}</p>
      <p className='text-[#B1B1B1] font-[600]'>{t('aboutme.section.description.paragraph.3')}</p>
    </div>
  );
}