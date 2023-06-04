import React from 'react';

import { Navbar } from './components/Navbar';
import { TitleAndDescription } from './components/TitleAndDescription';
import { ScrollButton } from './components/ScrollButton';
import { MobileSectionSeparator } from '../../../components/MobileSectionSeparator';

export function Header(): JSX.Element {
  return (
    <header>
      <Navbar />
      <div className='flex flex-col justify-center items-center gap-[40px] w-full py-28'>
        <TitleAndDescription />
        <ScrollButton />
        <MobileSectionSeparator />
      </div>
    </header>
  );
}