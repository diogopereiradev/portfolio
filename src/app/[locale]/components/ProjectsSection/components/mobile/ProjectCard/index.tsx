import React from 'react';
import Image from 'next/image';
import { ProjectCardTecnhology, ProjectData } from '../../../@types/projectMenu';
import { Client } from './client';

function Title({ name, createdAt }: { name: string, createdAt: Date }): JSX.Element {
  const releaseDay = createdAt.getDate().toString().length === 1 ? `0${createdAt.getDate()}` : createdAt.getDate();
  const releaseMonth = createdAt.getMonth().toString().length === 1 ? `0${createdAt.getMonth() + 1}` : createdAt.getMonth() + 1;

  return (
    <div className='flex justify-between items-center py-[5px] px-[25px]'>
      <h3 className='font-text font-[700] text-[22px]'>{name}</h3>
      <p className='text-primary-400 text-[13px]'>{`${releaseDay}/${releaseMonth}/${createdAt.getFullYear()}`}</p>
    </div>
  );
}

function Technologies({ technologies }: { technologies: ProjectCardTecnhology[] }): JSX.Element {
  return (
    <div className='flex items-center gap-[5px] px-[25px] mt-[3px]'>
      <p className='text-primary-400 text-[15px]'>Tags:</p>
      {[technologies[0], technologies[1]].map(tech => (
        <div className='flex items-center gap-[5px] rounded-full w-[75px] h-[25px] bg-secondary-200 px-[8px] mt-[2px]' key={tech.label}>
          <div className='w-[10px] h-[10px] rounded-full' style={{ backgroundColor: tech.color }}></div>
          <p className='text-[12px] truncate mt-[-1px]'>{tech.label}</p>
        </div>
      ))}
    </div>
  );
}

export function ProjectCard({ data }: { data: ProjectData }): JSX.Element {
  const { name, projectThumbImageUrl, createdAt, technologies } = data;

  return (
    <Client>
      <div className='relative px-[15px] mb-[15px]'>
        <Image className='relative w-full h-[145px] object-cover rounded-[15px]' loading='lazy' src={projectThumbImageUrl} width={300} height={300} alt={`project-${name}-thumb`} />
      </div>
      <Title name={name} createdAt={createdAt} />
      <Technologies technologies={technologies} />
    </Client>
  );
}