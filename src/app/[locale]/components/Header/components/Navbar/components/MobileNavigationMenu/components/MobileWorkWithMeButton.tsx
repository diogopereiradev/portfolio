import React from 'react';
import { useSSRTranslation } from '../../../../../../../../../shared/hooks/useSSRTranslation';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function MobileWorkWithMeButton(): JSX.Element {
  const { t } = await useSSRTranslation();
  return <button className='text-[14px] w-full h-[40px]'>{t('navbar.mobile.menu.workwithme.button')}</button>;
}