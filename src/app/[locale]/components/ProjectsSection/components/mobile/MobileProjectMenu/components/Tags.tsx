'use client';
import React from 'react';
import { useMobileProjectMenu } from '../hooks/useMobileProjectMenu';

export function Tags(): JSX.Element {
  const { data: { technologies } } = useMobileProjectMenu();

  return (
    <div className='flex flex-wrap items-center gap-[5px] px-[30px] mt-[20px]'>
      <p className='text-primary-400 text-[15px]'>Tags:</p>
      {technologies.map(tech => (
        <div className='flex items-center gap-[5px] rounded-full w-[75px] h-[25px] bg-secondary-200 px-[8px] mt-[2px]' key={tech.label}>
          <div className='w-[10px] h-[10px] rounded-full' style={{ backgroundColor: tech.color }}></div>
          <p className='text-[12px] truncate mt-[-1px]'>{tech.label}</p>
        </div>
      ))}
    </div>
  );
}