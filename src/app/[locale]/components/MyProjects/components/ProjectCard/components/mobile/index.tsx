import React from 'react';
import { ProjectData } from '../../../../../../../../@types/project';

import { Article } from './components/Article';
import { Tags } from './components/Tags';
import { Thumbnail } from './components/Thumbnail';
import { ProjectLinks } from './components/ProjectLinks';

export function Mobile({ data }: { data: ProjectData }): JSX.Element {
  const {
    name,
    description,
    projectLiveUrl,
    projectRepositoryUrl,
    projectThumbImageUrl,
    technologies
  } = data;

  return (
    <div className='flex xl:hidden flex-col relative w-full min-h-[400px] mt-[20px]'>
      <Thumbnail thumbnail={projectThumbImageUrl} />
      <div className='flex flex-col base:p-[20px] md:p-[50px] z-[10]'>
        <Article name={name} description={description} />
        <Tags tags={technologies} />
        <div className='flex gap-[20px] mt-[30px]'>
          <ProjectLinks repositoryUrl={projectRepositoryUrl} projectUrl={projectLiveUrl} />
        </div>
      </div>
    </div>
  );
}