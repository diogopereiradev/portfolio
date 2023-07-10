import React from 'react';
import { ProjectData } from '../../../../../../../../@types/project';

import { Article } from './components/Article';
import { Tags } from './components/Tags';
import { Thumbnail } from './components/Thumbnail';
import { ProjectLinks } from './components/ProjectLinks';

export function Desktop({ data, direction }: { data: ProjectData, direction: 'left' | 'right' }): JSX.Element {
  const {
    name,
    description,
    projectLiveUrl,
    projectRepositoryUrl,
    projectThumbImageUrl,
    technologies
  } = data;

  const directionMap = {
    left: {
      left: 0,
      alignItems: 'flex-start'
    },
    right: {
      right: 0,
      alignItems: 'flex-end'
    },
  };

  return (
    <div className='hidden xl:flex items-center relative w-full py-[30px] pt-[50px]' style={{ flexDirection: direction === 'left' ? 'row-reverse' : 'row' }}>
      <Thumbnail thumbnail={projectThumbImageUrl} />
      <div className='absolute flex flex-col z-[2]' style={directionMap[direction]}>
        <Article name={name} description={description} />
        <Tags tags={technologies} />
        <div className='mt-[30px]'>
          <ProjectLinks repositoryUrl={projectRepositoryUrl} projectUrl={projectLiveUrl} />
        </div>
      </div>
    </div>
  );
}