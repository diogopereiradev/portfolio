import React from 'react';
import { MobileNavigationMenu } from './components/MobileNavigationMenu';
import { DesktopNavigation } from './components/DesktopNavigation';

export function Navbar(): JSX.Element {
  return(
    <nav className='flex justify-between items-center p-[35px] lg:p-[55px]'>
      <h2 className='text-[32px] lg:text-[40px] mmd:text-[35px] font-[700]'>Diogo</h2>
      <MobileNavigationMenu />
      <DesktopNavigation />
    </nav>
  );
}