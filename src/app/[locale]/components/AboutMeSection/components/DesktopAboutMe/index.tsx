import React from 'react';

import { PerfilPhoto } from './components/PerfilPhoto';
import { AboutDescription } from './components/AboutDescription';
import { FrameTitle } from './components/FrameTitle';

function AboutMeFrame(): JSX.Element {
  return (
    <div className='bg-secondary-0 min-h-[480px] w-full max-w-[1080px] rounded-[50px] px-[80px] py-[100px] backdrop-blur-3xl'>
      <FrameTitle />
      <div className='flex gap-[30px]'>
        <AboutDescription />
        <PerfilPhoto />
      </div>
    </div>
  );
}

export function DesktopAboutMe(): JSX.Element {
  return (
    <div className='relative hidden mmd:flex items-center py-[100px] mmd:px-[50px] xl:px-[120px] overflow-hidden'>
      <AboutMeFrame />
    </div>
  );
}