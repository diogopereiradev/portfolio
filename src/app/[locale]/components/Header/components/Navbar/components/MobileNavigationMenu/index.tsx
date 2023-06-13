import React from 'react';
import { MobileNavigationMenuClient } from './client';
import { MobileWorkWithMeButton } from './components/MobileWorkWithMeButton';
import { MobileSocialLinks } from './components/MobileSocialLinks';
import { LocaleSelectInput } from '../../../../../../../components/LocaleSelectInput';

export function MobileNavigationMenu(): JSX.Element {
  return (
    <div className='relative'>
      <MobileNavigationMenuClient>
        {/** Server side components to render in navigation mobile menu */}
        <MobileWorkWithMeButton />
        <hr className='w-full' />
        <LocaleSelectInput width='full' height='default' />
        <hr className='w-full' />
        <MobileSocialLinks />
      </MobileNavigationMenuClient>
    </div>
  );
}