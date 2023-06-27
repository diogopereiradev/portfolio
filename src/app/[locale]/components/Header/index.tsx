import React from 'react';

import { Navbar } from './components/Navbar';
import { TitleAndDescription } from './components/mobile/TitleAndDescription';
import { ScrollButton } from './components/mobile/ScrollButton';
import { MobileSectionSeparator } from '../../../components/MobileSectionSeparator';
import { useSSRTranslation } from '../../../../shared/hooks/useSSRTranslation';

function MobileRoot(): JSX.Element {
  return (
    <div className='flex flex-col justify-center items-center gap-[40px] w-full py-28 mmd:hidden'>
      <TitleAndDescription />
      <ScrollButton />
      <MobileSectionSeparator />
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
async function DesktopRoot(): JSX.Element {
  const { t } = await useSSRTranslation();

  return (
    <div className="relative hidden mmd:flex items-center w-full mmd:py-44 3xl:py-64">
      <div className="mmd:hidden 2xl:block absolute right-[-200px] top-[50%] translate-y-[-50%] w-[300px] h-[300px] bg-primary-100 blur-[50px] opacity-[0.05] rounded-full animate-pulse"></div>
      <div className="flex flex-col xl:pl-[100px] mmd:pl-[60px]">
        <h2 className="relative 3xl:text-[160px] xl:text-[120px] mmd:text-[12vw] before:absolute before:xl:left-[-20%] before:mmd:left-[-15%] before:3xl:top-[100%] before:xl:top-[72%] before:mmd:top-[60%] before:xl:w-[110%] before:mmd:w-[100%] before:3xl:h-[140%] before:xl:h-[130%] before:mmd:h-[100%] before:bg-primary-400 before:rounded-r-full before:z-[-1]">Diogo Pereira</h2>
        <p className="mmd:text-[5vw] lg:text-[40px] 3lx:text-[55px] xl:text-[50px] text-primary-400 ml-[40px] 3xl:mt-[65px] xl:mt-[45px] lg:mt-[35px] mmd:mt-[25px]">{t('header.title.description')}</p>
      </div>
    </div>
  );
}

export function Header(): JSX.Element {
  return (
    <header className='relative overflow-hidden'>
      <Navbar />
      <MobileRoot />
      <DesktopRoot />
    </header>
  );
}