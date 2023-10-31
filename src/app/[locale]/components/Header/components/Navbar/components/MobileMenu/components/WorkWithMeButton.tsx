import React from 'react';
import { useTranslations } from 'next-intl';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function WorkWithMeButton(): JSX.Element {
  const t = useTranslations();
  return <a href='https://diogopereira-beacons.vercel.app' target='_blank' rel='noreferrer' className='flex justify-center items-center text-[14px] text-primary-500 hover:text-primary-400 active:text-primary-400 w-full h-[40px] bg-primary-100 hover:bg-primary-500 rounded-full'>{t('navbar-mobile-menu-workwithme-button')}</a>;
}