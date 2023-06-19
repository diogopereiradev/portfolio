'use client';
import React from 'react';
import { setDocumentScroll } from '../../../../../../../../../../shared/utils/setDocumentScroll';
import { useMenu } from '../../../hooks/useMenu';

export function CloseButton({ children }: { children: JSX.Element }): JSX.Element {
  const { closeMenu } = useMenu();

  const handleCloseMenu = () => {
    setDocumentScroll(true);
    closeMenu();
  };

  return (
    <button onClick={handleCloseMenu} className='flex justify-center items-center px-0 py-0 absolute right-[20px] top-[50%] translate-y-[-50%] w-[60px] h-[60px] rounded-full bg-secondary-500'>
      {children}
    </button>
  );
}