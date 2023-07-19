import React from 'react';

import { MouseShadow } from '../components/MouseShadow';
import { FloatingSocialLinks } from '../components/FloatingSocialLinks';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Experiences } from './components/Experiences';
import { MyProjects } from './components/MyProjects';
import { MySmallProjects } from './components/MySmallProjects';

function Widgets(): JSX.Element {
  return (
    <>
      <div className='hidden lg:block'>
        <MouseShadow />
      </div>
      <div className='hidden 2xl:block'>
        <FloatingSocialLinks />
      </div>
    </>
  );
}

export default function Home() {
  return (
    <main className='flex flex-col relative max-w-[2120px] m-[0_auto]'>
      <Widgets />
      <Header />
      <AboutMe />
      <Experiences />
      <MyProjects />
      <MySmallProjects />
    </main>
  );
}