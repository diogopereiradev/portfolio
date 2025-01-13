import React from 'react';

import { ReactJs } from '../technologies/ReactJs';
import { Redux } from '../technologies/Redux';
import { NextJs } from '../technologies/NextJs';
import { Tailwind } from '../technologies/Tailwind';
import { Typescript } from '../technologies/Typescript';
import { Git } from '../technologies/Git';
import { VueJs } from '../technologies/VueJs';
import { NuxtJs } from '../technologies/Nuxt.js';
import { NodeJS } from '../technologies/Nodejs';

export function TechnologiesLoader(): JSX.Element {
  return (
    <ul className='flex base:flex-row lg:flex-col base:overflow-x-scroll lg:overflow-x-visible'>
      <ReactJs />
      <Redux />
      <NextJs />
      <VueJs />
      <NuxtJs />
      <Tailwind />
      <NodeJS />
      <Typescript />
      <Git />
    </ul>
  );
}