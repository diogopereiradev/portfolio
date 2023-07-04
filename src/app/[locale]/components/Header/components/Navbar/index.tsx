import './styles.css';
import React from 'react';

import { Logo } from './components/Logo';
import { DesktopMenu } from './components/DesktopMenu';
import { MobileMenu } from './components/MobileMenu';

export function Navbar(): JSX.Element {
  return (
    <nav className='flex items-center justify-between base:px-[25px] base:py-[16px] mmd:px-[65px] mmd:py-[40px]'>
      <Logo />
      <DesktopMenu />
      <MobileMenu />
    </nav>
  );
}