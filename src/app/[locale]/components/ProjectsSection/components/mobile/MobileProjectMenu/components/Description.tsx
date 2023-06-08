'use client';
import React from 'react';
import { useMobileProjectMenu } from '../hooks/useMobileProjectMenu';
import { useLocale } from '../../../../../../../../shared/hooks/useLocale';

export function Description(): JSX.Element {
  const getLocale = useLocale();
  const { data: { description } } = useMobileProjectMenu();
  const locale = getLocale();

  return (
    <div className='px-[30px] mt-[20px]'>
      <p className='text-[15px] text-primary-300'>{description[locale]}</p>
    </div>
  );
}