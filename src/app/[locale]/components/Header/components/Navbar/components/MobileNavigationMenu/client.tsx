'use client';
import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { ClientMenuFrame } from './components/ClientMenuFrame';

export function MobileNavigationMenuClient({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative'>
      <button onClick={() => setIsOpen(true)} className='p-1.5 bg-transparent'>
        <BiMenu className='text-primary-100' size={35} />
      </button>
      <ClientMenuFrame state={[isOpen, setIsOpen]}>
        {children}
      </ClientMenuFrame>
    </div>
  );
}