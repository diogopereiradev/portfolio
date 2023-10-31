import React from 'react';
import { NextIntlClientProvider, useLocale, useMessages, useTranslations } from 'next-intl';
import { ExperiencesContextProvider } from './context/experiencesContext';
import { TechnologiesContent } from './components/TechnologiesContent';
import { TechnologiesLoader } from './components/TechnologiesLoader';
import { Client } from './client';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
async function Title(): JSX.Element {
  const t  = useTranslations();
  
  return (
    <div className='flex items-center gap-[20px]'>
      <h2 className='text-[30px] text-white-100 whitespace-nowrap'>{t('experiences-section-title')}</h2>
      <hr className='relative top-[-2px] h-[2px] w-full max-w-[300px] rounded-full bg-primary-500' />
    </div>
  );
}

export function Experiences(): JSX.Element {
  const locale = useLocale();
  const messages = useMessages();

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
    >
      <Client>
        <div className='flex base:max-w-full lg:max-w-[850px] flex-col gap-[60px] px-[30px]'>
          <Title />
          <ExperiencesContextProvider>
            <div className='flex base:flex-col lg:flex-row gap-[50px]'>
              <TechnologiesLoader />
              <TechnologiesContent />
            </div>
          </ExperiencesContextProvider>
        </div>
      </Client>
    </NextIntlClientProvider>
  );
}