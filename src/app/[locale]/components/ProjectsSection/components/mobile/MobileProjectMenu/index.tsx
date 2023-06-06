'use client';
import React from 'react';
import { useMobileProjectMenu } from './hooks/useMobileProjectMenu';

import { Banner } from './components/Banner';
import { Links } from './components/Links';
import { Title } from './components/Title';
import { Description } from './components/Description';
import { Tags } from './components/Tags';

export function MobileProjectMenu(): JSX.Element {
  const { isOpen, data: { projectUrl } } = useMobileProjectMenu();

  return (
    <div className={`fixed left-0 top-0 flex flex-col w-screen h-screen bg-secondary-500 duration-300 ${isOpen ? 'top-0' : 'top-[100vh] opacity-0'} z-[9999]`}>
      <Banner />
      <Links />
      <Title />
      <Description />
      <Tags />
      <div className='absolute bottom-[40px] right-[40px]'>
        <a href={projectUrl} target='_blank' rel='noreferrer' className='px-[25px] py-[15px] text-primary-200 hover:text-primary-300 bg-primary-200 hover:bg-primary-300 active:bg-primary-400 rounded-full'>Acessar projeto</a>
      </div>
    </div>
  );
}