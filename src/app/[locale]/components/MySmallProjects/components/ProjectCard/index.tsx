import React from 'react';
import { CodepenProjectData } from '../../../../../../@types/codepen';

import { Client } from './client';
import { Topbar } from './components/Topbar';
import { Description } from './components/Description';

export function ProjectCard({ name, description, projectUrl }: CodepenProjectData): JSX.Element {
  return(
    <Client projectUrl={projectUrl}>
      <Topbar projectUrl={projectUrl}/>
      <Description name={name} description={description}/>
    </Client>
  );
}