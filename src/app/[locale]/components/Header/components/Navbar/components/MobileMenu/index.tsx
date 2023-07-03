import React from 'react';
import { MobileNavigationMenuClient } from './client';
import { WorkWithMeButton } from './components/WorkWithMeButton';
import { SocialLinks } from './components/SocialLinks';
import { LocaleSelectInput } from '../../../../../../../components/LocaleSelectInput';

export function MobileMenu(): JSX.Element {
  return (
    <div className='relative lg:hidden'>
      <MobileNavigationMenuClient>
        {/** Server side components to render in navigation mobile menu */}
        <WorkWithMeButton />
        <hr className='w-full' />
        <LocaleSelectInput width='full' height='default' />
        <hr className='w-full' />
        <SocialLinks />
      </MobileNavigationMenuClient>
    </div>
  );
}