import React from 'react';
import { setServerLocale } from '../../shared/contexts/localeServerContext';

import { Header } from './components/Header';
import { AboutMeSection } from './components/AboutMeSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';
import { useSSRTranslation } from '../../shared/hooks/useSSRTranslation';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
async function UnderDevelopmentMessage(): JSX.Element {
  const { t } = await useSSRTranslation();

  return (
    <div className='hidden mmd:flex justify-center items-center h-screen'>
      <h1 className='font-text font-[700]'>{t('under.development.message')}</h1>
    </div>
  );
}

export default function Home({ params }: { params: { locale: string } }) {
  // Initialize server components global locale context 
  setServerLocale(params.locale);

  return (
    <main className='flex flex-col relative max-w-[2120px] m-[0_auto]'>
      <div className='mmd:hidden'>
        <Header />
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
        <Footer />
      </div>
      <UnderDevelopmentMessage />
    </main>
  );
}