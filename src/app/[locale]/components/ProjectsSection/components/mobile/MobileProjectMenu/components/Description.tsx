import React from 'react';
import { useSSRLocale } from '../../../../../../../../shared/hooks/useSSRLocale';
import { ProjectData } from '../../../../@types/projectMenu';

export function Description({ description }: Pick<ProjectData, 'description'>): JSX.Element {
  const locale = useSSRLocale();

  return (
    <div className='px-[30px] mt-[20px]'>
      <p className='text-[15px] text-primary-300'>{description[locale]}</p>
    </div>
  );
}