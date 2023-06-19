import React from 'react';
import { useSSRTranslation } from '../../../../../../../../shared/hooks/useSSRTranslation';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function ViewProjectButton({ projectLiveUrl }: { projectLiveUrl: string }): JSX.Element {
  const { t } = await useSSRTranslation();

  return (
    <div className='absolute bottom-[40px] right-[40px]'>
      <a href={projectLiveUrl} target='_blank' rel='noreferrer' className='px-[25px] py-[15px] text-primary-200 hover:text-primary-300 bg-primary-200 hover:bg-primary-300 active:bg-primary-400 rounded-full'>{t('projects.section.project.mobile.menu.viewproject.button')}</a>
    </div>
  );
}