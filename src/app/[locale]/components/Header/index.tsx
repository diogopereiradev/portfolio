import React from 'react';
import { Navbar } from './components/Navbar';
import { Content } from './components/Content';

export function Header(): JSX.Element {
  return(
    <header>
      <Navbar />
      <div className='h-[calc(100vh-145px)] min-h-[512px]'>
        <Content />
      </div>
    </header>
  );
}