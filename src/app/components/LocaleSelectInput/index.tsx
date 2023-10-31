import React from 'react';
import { Client } from './client';
import { FloatingMenuLanguage } from './components/FloatingMenuLanguage';
import { useLocale } from 'next-intl';
import { locales } from '../../../../i18n';

export type LocaleSelectInputProps = {
  width: number | 'full',
  height: number | 'default';
};

function InputServerComponentsChildren(): JSX.Element {
  const locale = useLocale();

  return(
    <>
      {locales[locale as keyof typeof locales].fullname}
    </>
  );
}

function FloatingMenuServerComponentsChildren(): JSX.Element {
  return (
    <>
      {Object.values(locales).map(language => (
        <FloatingMenuLanguage key={language.name} locale={language.name} />
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