'use client';
import React from 'react';
import { useMobileProjectMenu } from '../hooks/useMobileProjectMenu';

export function Description(): JSX.Element {
  const { data: { description } } = useMobileProjectMenu();

  return (
    <div className='px-[30px] mt-[20px]'>
      <p className='text-[15px] text-primary-300'>{description}</p>
    </div>
  );
}