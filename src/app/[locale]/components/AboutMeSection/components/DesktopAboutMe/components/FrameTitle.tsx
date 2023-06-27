import React from 'react';
import { useSSRTranslation } from '../../../../../../../shared/hooks/useSSRTranslation';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function FrameTitle(): JSX.Element {
  const { t } = await useSSRTranslation();
  
  return (
    <div className='flex items-center gap-[50px]'>
      <h3 className='text-primary-100 lg:text-[72px] mmd:text-[65px]'>{t('aboutme.section.title')}</h3>
      <div className='bg-primary-100 mt-[6px] h-[20px] w-[25%] rounded-full mmd:hidden xl:inline'></div>
    </div>
  );
}