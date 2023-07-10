import React from 'react';
import { ProjectData } from '../../../../../../@types/project';

import { Mobile } from './components/mobile';
import { Desktop } from './components/desktop';

export function ProjectCard({ data, direction }: { data: ProjectData, direction: 'left' | 'right' }): JSX.Element {
  return (
    <>
      <Desktop data={data} direction={direction} />
      <Mobile data={data} />
    </>
  );
}