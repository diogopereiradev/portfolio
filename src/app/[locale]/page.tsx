import React from 'react';
import { setServerLocale } from '../../shared/contexts/localeServerContext';

export default function Home({ params }: { params: { locale: string } }) {
  // Initialize server components global locale context 
  setServerLocale(params.locale);

  return (
    <main>
      
    </main>
  );
}