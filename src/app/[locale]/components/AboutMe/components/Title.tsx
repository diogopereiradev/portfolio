import React from 'react';
import { useSSRTranslation } from '../../../../../shared/hooks/useSSRTranslation';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function Title(): JSX.Element {
  const { t } = await useSSRTranslation();
  return (
    <div className='flex items-center gap-[20px]'>
      <h2 className='text-[30px] text-white-100 whitespace-nowrap'>{t('aboutme.section.title')}</h2>
      <hr className='relative top-[-2px] h-[2px] w-full max-w-[300px] rounded-full bg-primary-500' />
    </div>
  );
}