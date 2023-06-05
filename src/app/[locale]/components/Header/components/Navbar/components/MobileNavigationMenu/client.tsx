'use client';
import React, { useState } from 'react';
import { setDocumentScroll } from '../../../../../../../../shared/utils/setDocumentScroll';
import { BiMenu } from 'react-icons/bi';
import { ClientMenuFrame } from './components/ClientMenuFrame';

export function MobileNavigationMenuClient({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
    setDocumentScroll(false);
  };

  return (
    <div className='relative'>
      <button onClick={handleOpenMenu} className='p-1.5 bg-transparent'>
        <BiMenu className='text-primary-100' size={35} />
      </button>
      <ClientMenuFrame state={[isOpen, setIsOpen]}>
        {children}
      </ClientMenuFrame>
    </div>
  );
}