import React from 'react';
import { setServerLocale } from '../../shared/contexts/localeServerContext';

import { Header } from './components/Header';
import { AboutMeSection } from './components/AboutMeSection';

export default function Home({ params }: { params: { locale: string } }) {
  // Initialize server components global locale context 
  setServerLocale(params.locale);

  return (
    <main className='flex flex-col relative max-w-[2120px] m-[0_auto]'>
      <Header />
      <AboutMeSection />
    </main>
  );
}