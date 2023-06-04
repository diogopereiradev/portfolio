import React from 'react';
import { MobileNavigationMenu } from './components/MobileNavigationMenu';

export function Navbar(): JSX.Element {
  return(
    <nav className='flex justify-between items-center p-[35px]'>
      <h2 className='text-[32px] font-[700]'>Diogo</h2>
      <MobileNavigationMenu />
    </nav>
  );
}