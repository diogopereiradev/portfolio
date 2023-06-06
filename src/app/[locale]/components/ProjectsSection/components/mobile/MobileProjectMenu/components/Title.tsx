'use client';
import React from 'react';
import Image from 'next/image';
import { useMobileProjectMenu } from '../hooks/useMobileProjectMenu';

export function Title(): JSX.Element {
  const { data: { name, projectIconUrl, createdAt } } = useMobileProjectMenu();
  const releaseDay = createdAt.getDate().toString().length === 1 ? `0${createdAt.getDate()}` : createdAt.getDate();
  const releaseMonth = createdAt.getMonth().toString().length === 1 ? `0${createdAt.getMonth() + 1}` : createdAt.getMonth() + 1;

  return (
    <div className='flex justify-between items-center px-[30px] mt-[10px]'>
      <div className='flex items-center gap-[10px]'>
        {projectIconUrl && <Image loader={({ src }) => src} src={projectIconUrl || ''} width={50} height={50} alt='project-icon' />}
        <h2 className='font-text text-[25px]'>{name}</h2>
      </div>
      <p className='text-[13px] text-primary-400'>{`${releaseDay}/${releaseMonth}/${createdAt.getFullYear()}`}</p>
    </div>
  );
}