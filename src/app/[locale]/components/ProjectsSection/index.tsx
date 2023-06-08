import React from 'react';
import { useSSRTranslation } from '../../../../shared/hooks/useSSRTranslation';
import { MobileSectionSeparator } from '../../../components/MobileSectionSeparator';
import { MobileMenuProvider } from './components/mobile/MobileProjectMenu/context/mobileProjectMenuContext';
import { ProjectCard } from './components/mobile/ProjectCard';
import { MobileProjectMenu } from './components/mobile/MobileProjectMenu';
import { useRepositories } from '../../../../shared/hooks/useRepositories';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
async function Projects(): JSX.Element {
  const repositoriesData = await useRepositories();

  return(
    <MobileMenuProvider>
      <div className='flex flex-wrap gap-[30px] justify-center mt-[20px]'>
        {repositoriesData.map(data => (
          <ProjectCard key={data.name} data={data}/>
        ))}
      </div>
      <MobileProjectMenu />
    </MobileMenuProvider>
  );
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function ProjectsSection(): JSX.Element {
  const { t } = await useSSRTranslation();

  return (
    <section className='flex flex-col gap-[15px] px-12 py-0 mt-[36px]'>
      <h2>{t('projects.section.title')}</h2>
      <p className='text-[16px] text-primary-400 font-text font-[600]'>
        {t('projects.section.description')}
      </p>
      <hr className='w-full h-[2px] mt-[5px]' />
      <Projects />
      <a href='https://github.com/FhillSlinger' target='_blank' rel='noreferrer' className='px-[40px] py-[10px] mx-[auto] rounded-full mt-[30px] bg-primary-200 hover:bg-primary-300 active:bg-primary-400 hover:text-primary-300'>{t('projects.section.viewmore.button')}</a>
      <div className='mx-[auto] mt-[40px]'>
        <MobileSectionSeparator />
      </div>
    </section>
  );
}