import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { ProjectData } from '../../../../../../../../../@types/project';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function Article({ name, description }: { name: string } & Pick<ProjectData, 'description'>): JSX.Element {
  const t = useTranslations();
  const locale = useLocale();
  const tDescription = description[locale] as string;

  return (
    <>
      <p className='text-[14px] text-secondary-100'>{t('projects-project-card-project-name-text')}</p>
      <h2 className='text-[28px] text-white-200'>{name}</h2>
      <div className='mt-[20px] min-h-[120px] max-w-[450px] rounded-[5px] bg-secondary-200 p-[20px]'>
        <p className='text-[15px] font-[400] text-white-300' title={tDescription}>{tDescription.length > 230? `${tDescription.slice(0, 230)}...` : tDescription}</p>
      </div>
    </>
  );
}