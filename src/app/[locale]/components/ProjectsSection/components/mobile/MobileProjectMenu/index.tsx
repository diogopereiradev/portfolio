import React from 'react';
import { ProjectData } from '../../../@types/projectMenu';
import { Client } from './client';

import { Banner } from './components/Banner';
import { Links } from './components/Links';
import { Title } from './components/Title';
import { Description } from './components/Description';
import { Tags } from './components/Tags';
import { ViewProjectButton } from './components/ViewProjectButton';

export function MobileProjectMenu({ data }: { data: ProjectData }): JSX.Element {
  return (
    <Client>
      <Banner thumbUrl={data.projectThumbImageUrl}/>
      <Links repositoryUrl={data.projectRepositoryUrl}/>
      <Title 
        name={data.name} 
        projectIconUrl={data.projectIconUrl || ''} 
        createdAt={data.createdAt}
      />
      <Description description={data.description}/>
      <Tags technologies={data.technologies}/>
      <ViewProjectButton projectLiveUrl={data.projectLiveUrl}/>
    </Client>
  );
}