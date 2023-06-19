'use client';
import React from 'react';
import { setDocumentScroll } from '../../../../../../../shared/utils/setDocumentScroll';
import { useMenu } from '../MobileProjectMenu/hooks/useMenu';

export function Client({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element {
  const { openMenu } = useMenu();

  const handleOpenMenu = () => {
    setDocumentScroll(false);
    openMenu();
  };

  return(
    <button onClick={handleOpenMenu} className='flex flex-col justify-center w-[290px] h-[265px] rounded-[15px] bg-secondary-500 cursor-pointer hover:bg-secondary-400 py-0 px-0'>
      {children}
    </button>
  );
}