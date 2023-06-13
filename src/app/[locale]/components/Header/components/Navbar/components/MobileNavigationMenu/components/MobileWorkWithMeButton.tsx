import React from 'react';
import { useSSRTranslation } from '../../../../../../../../../shared/hooks/useSSRTranslation';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function MobileWorkWithMeButton(): JSX.Element {
  const { t } = await useSSRTranslation();
  return <a href='https://diogopereira-beacons.vercel.app' target='_blank' rel='noreferrer' className='flex justify-center items-center text-[14px] hover:text-primary-200 w-full h-[40px] bg-primary-100 hover:bg-primary-200 rounded-full'>{t('navbar.mobile.menu.workwithme.button')}</a>;
}