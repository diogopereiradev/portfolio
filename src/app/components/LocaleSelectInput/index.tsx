import React from 'react';
import { Client } from './client';

export type LocaleSelectInputProps = {
  width: number | 'full',
  height: number | 'default';
};

export function LocaleSelectInput(props: LocaleSelectInputProps): JSX.Element {
  return <Client data={props}/>;
}