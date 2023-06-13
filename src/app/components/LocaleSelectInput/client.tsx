'use client';
import React, { useState } from 'react';
import { LocaleSelectInputProps } from './index';
import { FloatingMenu } from './components/FloatingMenu';
import { Input } from './components/Input';

export function Client(props: { data: LocaleSelectInputProps }): JSX.Element {
  const inputIsOpenState = useState(false);

  return(
    <div className='relative w-full'>
      <Input data={props.data} state={inputIsOpenState}/>
      <FloatingMenu state={inputIsOpenState}/>
    </div>
  );
}