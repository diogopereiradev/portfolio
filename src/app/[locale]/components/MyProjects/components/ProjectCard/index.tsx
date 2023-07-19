import React from 'react';
import { ProjectData } from '../../../../../../@types/project';

import { Mobile } from './components/mobile';
import { Desktop } from './components/desktop';
import { Client } from './client';

export function ProjectCard({ data, direction }: { data: ProjectData, direction: 'left' | 'right' }): JSX.Element {
  return (
    <Client>
      <Desktop data={data} direction={direction} />
      <Mobile data={data} />
    </Client>
  );
}