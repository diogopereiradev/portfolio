import React from 'react';

import { ReactJs } from '../technologies/ReactJs';
import { Redux } from '../technologies/Redux';
import { NextJs } from '../technologies/NextJs';
import { Tailwind } from '../technologies/Tailwind';
import { SC } from '../technologies/SC';
import { MUI } from '../technologies/MUI';
import { Typescript } from '../technologies/Typescript';
import { Git } from '../technologies/Git';

export function TechnologiesLoader(): JSX.Element {
  return (
    <ul className='flex base:flex-row lg:flex-col base:overflow-x-scroll lg:overflow-x-visible'>
      <ReactJs />
      <Redux />
      <NextJs />
      <Tailwind />
      <SC />
      <MUI />
      <Typescript />
      <Git />
    </ul>
  );
}