import React from 'react';
import { setServerLocale } from '../../shared/contexts/localeServerContext';
import { Header } from './components/Header';

export default function Home({ params }: { params: { locale: string } }) {
  // Initialize server components global locale context 
  setServerLocale(params.locale);

  return (
    <main className='relative max-w-[2120px] m-[0_auto]'>
      <Header />
    </main>
  );
}