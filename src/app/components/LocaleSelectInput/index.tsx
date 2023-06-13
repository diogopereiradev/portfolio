import React from 'react';
import { Client } from './client';
import { languagesFullnameDatabase, supportedLanguages } from '../../../shared/i18n/settings';
import { FloatingMenuLanguage } from './components/FloatingMenuLanguage';
import { useSSRLocale } from '../../../shared/hooks/useSSRLocale';

export type LocaleSelectInputProps = {
  width: number | 'full',
  height: number | 'default';
};

function InputServerComponentsChildren(): JSX.Element {
  const locale = useSSRLocale();

  return(
    <>
      {languagesFullnameDatabase[locale]}
    </>
  );
}

function FloatingMenuServerComponentsChildren(): JSX.Element {
  return (
    <>
      {supportedLanguages.map(language => (
        <FloatingMenuLanguage key={language} locale={language} />
      ))}
    </>
  );
}

export function LocaleSelectInput(props: LocaleSelectInputProps): JSX.Element {
  return (
    <Client
      data={props}
      inputChildren={<InputServerComponentsChildren />}
      floatingMenuChildren={<FloatingMenuServerComponentsChildren />}
    />
  );
}