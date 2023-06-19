import React from 'react';

import { Navbar } from './components/Navbar';
import { TitleAndDescription } from './components/mobile/TitleAndDescription';
import { ScrollButton } from './components/mobile/ScrollButton';
import { MobileSectionSeparator } from '../../../components/MobileSectionSeparator';

function MobileTitleAndDescription(): JSX.Element {
  return (
    <div className='flex flex-col justify-center items-center gap-[40px] w-full py-28 mmd:hidden'>
      <TitleAndDescription />
      <ScrollButton />
      <MobileSectionSeparator />
    </div>
  );
}

export function Header(): JSX.Element {
  return (
    <header>
      <Navbar />
      <MobileTitleAndDescription />
    </header>
  );
}