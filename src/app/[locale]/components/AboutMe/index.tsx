import React from 'react';

import { Client } from './client';
import { Title } from './components/Title';
import { Description } from './components/Description';
import { PerfilPhoto } from './components/PerfilPhoto';

export function AboutMe(): JSX.Element {
  return (
    <Client>
      <div className='max-w-[1300px] flex flex-col gap-[30px] base:px-[30px] mmd:px-[100px] xl:px-[180px]'>
        <Title />
        <div className='flex base:flex-col 2xl:flex-row base:items-center 2xl:items-start gap-[50px]'>
          <Description />
          <PerfilPhoto />
        </div>
      </div>
    </Client>
  );
}