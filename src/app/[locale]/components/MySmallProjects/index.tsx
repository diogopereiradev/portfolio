import React from 'react';
import { useCodepen } from '../../../../shared/hooks/useCodepen';
import { Title } from './components/Title';
import { ProjectCard } from './components/ProjectCard';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
async function Projects(): JSX.Element {
  const codepenProjects = await useCodepen();

  return (
    <div className='flex columns-3 flex-wrap gap-[20px] mt-[50px]'>
      {codepenProjects.map(project =>
        <ProjectCard
          key={project.name}
          name={project.name}
          description={project.description}
          projectUrl={project.projectUrl}
        />
      )}
    </div>
  );
}

export function MySmallProjects(): JSX.Element {
  return (
    <section className='flex justify-center mt-[70px] pb-[120px]'>
      <div className='w-[1300px] xl:px-[180px] lg:px-[100px] mmd:px-[70px] base:px-[30px] flex flex-col gap-[30px]'>
        <Title />
        <Projects />
      </div>
    </section>
  );
}