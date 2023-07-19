import React from 'react';
import { LuScroll } from 'react-icons/lu';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { useSSRLocale } from '../../../../../../shared/hooks/useSSRLocale';
import { CodepenProjectData } from '../../../../../../@types/codepen';
import { Client } from './client';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function ProjectCard({ name, description, projectUrl }: CodepenProjectData): JSX.Element {
  const locale = await useSSRLocale();

  return(
    <Client projectUrl={projectUrl}>
      <div className='flex justify-between items-center'>
        <LuScroll className='text-secondary-100' size={40}/>
        <a href={projectUrl} className='text-primary-100 hover:text-secondary-100 duration-150' target='_blank' rel='noreferrer'>
          <MdOutlineOpenInNew size={25}/>
        </a>
      </div>
      <div className='flex flex-col gap-[10px] mt-[40px]'>
        <h3 className='text-[21px] text-white-200'>{name}</h3>
        <p className='text-[15px]'>{description[locale]}</p>
      </div>
    </Client>
  );
}