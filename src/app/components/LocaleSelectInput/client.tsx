'use client';
import React, { useState } from 'react';
import { LocaleSelectInputProps } from './index';

import { Input } from './components/Input';
import { FloatingMenu } from './components/FloatingMenu';

export function Client(props: { data: LocaleSelectInputProps, inputChildren: JSX.Element, floatingMenuChildren: JSX.Element | JSX.Element[] }): JSX.Element {
  const inputIsOpenState = useState(false);

  return(
    <div className='relative w-full'>
      <Input data={props.data} state={inputIsOpenState}>
        {props.inputChildren}
      </Input>
      <FloatingMenu state={inputIsOpenState}>
        {props.floatingMenuChildren}
      </FloatingMenu>
    </div>
  );
}