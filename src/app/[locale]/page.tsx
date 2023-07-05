import React from 'react';
import { useSSRTranslation } from '../../shared/hooks/useSSRTranslation';

import { MouseShadow } from '../components/MouseShadow';
import { FloatingSocialLinks } from '../components/FloatingSocialLinks';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
async function UnderDevelopmentMessage(): JSX.Element {
  const { t } = await useSSRTranslation();

  return (
    <div className='hidden mmd:flex justify-center items-center h-screen'>
      <h1 className='font-text font-[700]'>{t('under.development.message')}</h1>
    </div>
  );
}

export default function Home() {
  return (
    <main className='flex flex-col relative max-w-[2120px] m-[0_auto]'>
      <div className='hidden'>
        <div className='hidden lg:block'>
          <MouseShadow />
        </div>
        <div className='hidden 2xl:block'>
          <FloatingSocialLinks />
        </div>
        <Header />
        <AboutMe />
      </div>
      <UnderDevelopmentMessage />
    </main>
  );
}