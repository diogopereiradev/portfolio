import React from 'react';
import { serverLocale } from '../../../../shared/contexts/localeServerContext';

export function ServerCurrentLocale(): JSX.Element {
  return(
    <>
      {serverLocale()}
    </>
  );
}