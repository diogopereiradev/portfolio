'use client';
import React, { useState } from 'react';
import { setDocumentScroll } from '../../../../../../../../shared/utils/setDocumentScroll';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MenuFrame } from './components/MenuFrame';

export function MobileNavigationMenuClient({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
    setDocumentScroll(false);
  };

  return (
    <div className='relative'>
      <button onClick={handleOpenMenu} className='p-1.5 hover:bg-transparent bg-transparent'>
        <HiMenuAlt3 className='text-secondary-100' size={35} />
      </button>
      <MenuFrame state={[isOpen, setIsOpen]}>
        {children}
      </MenuFrame>
    </div>
  );
}