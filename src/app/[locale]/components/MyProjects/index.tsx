import React from 'react';
import { useTranslations } from 'next-intl'; 
import { useRepositories } from '../../../../shared/hooks/useRepositories';
import { ProjectCard } from './components/ProjectCard';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
async function Projects(): JSX.Element {
  const repositories = await useRepositories();
  const filteredByPriorityRepos = repositories.sort((a, b) => {
    if(a.priority > b.priority) return 1;
    if(a.priority < b.priority) return -1;
    return 0;
  });
  const isOdd = (value: number) => (value % 2) === 0? true : false;

  return(
    <div className='flex flex-col gap-[70px]'>
      {filteredByPriorityRepos.map((repository, i) => <ProjectCard key={repository.name} data={repository} direction={isOdd(i)? 'right' : 'left'} />)}
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function MyProjects(): JSX.Element {
  const t = useTranslations(); 

  return (
    <section id='projects' className='flex justify-center pt-[50px] pb-[120px]'>
      <div className='w-[1300px] xl:px-[180px] lg:px-[100px] mmd:px-[70px] base:px-[30px] flex flex-col gap-[30px]'>
        <div className="flex items-center gap-[20px]">
          <h2 className="whitespace-nowrap text-[30px] text-white-100">{t('projects-section-title')}</h2>
          <hr className="relative h-[2px] w-full max-w-[300px] rounded-full bg-primary-500" />
        </div>
        <Projects />
      </div>
    </section>
  );
}