import './styles.css';
import React from 'react';

import { Logo } from './components/Logo';
import { DesktopMenu } from './components/DesktopMenu';
import { MobileMenu } from './components/MobileMenu';

export function Navbar(): JSX.Element {
  return (
    <nav className='flex items-center justify-between px-[65px] py-[45px]'>
      <Logo />
      <DesktopMenu />
      <MobileMenu />
    </nav>
  );
}