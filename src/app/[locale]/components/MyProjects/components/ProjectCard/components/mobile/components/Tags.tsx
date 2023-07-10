import React from 'react';
import { ProjectCardTecnhology } from '../../../../../../../../../@types/project';

function Tag({ tag }: { tag: ProjectCardTecnhology }): JSX.Element {
  return (
    <div className='flex h-[30px] w-[100px] items-center gap-[10px] rounded-[5px] bg-secondary-200 px-[10px]'>
      <div className='mt-[1px] h-[8px] w-[8px] rounded-full' style={{ backgroundColor: tag.color }} />
      <p className='text-[13px] font-[500] text-secondary-100'>{tag.label}</p>
    </div>
  );
}

export function Tags({ tags }: { tags: ProjectCardTecnhology[] }): JSX.Element {
  return (
    <div className='mt-[20px] flex flex-wrap gap-[10px]'>
      {tags.map(tag => <Tag key={tag.label} tag={tag}/>)}
    </div>
  );
}