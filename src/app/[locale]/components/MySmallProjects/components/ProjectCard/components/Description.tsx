import React from 'react';
import { SupportedLanguages } from '../../../../../../../shared/i18n/settings';
import { useSSRLocale } from '../../../../../../../shared/hooks/useSSRLocale';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function Description({ name, description }: { name: string, description: { [key in SupportedLanguages]?: string } }): JSX.Element {
  const locale = await useSSRLocale();

  return (
    <div className='flex flex-col gap-[10px] mt-[40px]'>
      <h3 className='text-[21px] text-white-200'>{name}</h3>
      <p className='text-[15px]'>{description[locale]}</p>
    </div>
  );
}