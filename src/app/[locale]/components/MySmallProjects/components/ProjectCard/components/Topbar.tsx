import React from 'react';
import { LuScroll } from 'react-icons/lu';
import { MdOutlineOpenInNew } from 'react-icons/md';

export function Topbar({ projectUrl }: { projectUrl: string }): JSX.Element {
  return (
    <div className='flex justify-between items-center'>
      <LuScroll className='text-secondary-100' size={40} />
      <a href={projectUrl} className='text-primary-100 hover:text-secondary-100 duration-150' target='_blank' rel='noreferrer'>
        <MdOutlineOpenInNew size={25} />
      </a>
    </div>
  );
}