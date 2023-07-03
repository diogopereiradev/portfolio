'use client';
import React from 'react';
import { setDocumentScroll } from '../../../../../../../../../shared/utils/setDocumentScroll';

export function MenuFrame({ state, children }: { state: [boolean, React.Dispatch<React.SetStateAction<boolean>>], children: JSX.Element | JSX.Element[] }): JSX.Element {
  const [isOpen, setIsOpen] = state;

  const handleCloseMenu = () => {
    setIsOpen(false);
    setDocumentScroll(true);
  };

  return (
    <>
      {/** Dark background on open menu */}
      <div
        onClick={handleCloseMenu}
        className={`
          fixed
          left-0
          top-0
          w-screen
          h-screen
          z-[9]
          ${isOpen ? 'bg-[#00000099]' : 'pointer-events-none'}
          duration-300
        `}
      />
      {/** Menu Frame */}
      <div
        className={`
          absolute
          right-[-5px]
          top-0
          flex
          items-center
          flex-col
          gap-[20px]
          w-[200px]
          bg-secondary-500
          rounded-[30px]
          ${isOpen ? 'opacity-1 translate-x-[0px]' : 'opacity-0 pointer-events-none translate-x-[-100vw]'}
          duration-300
          px-[15px]
          py-[18px]
          z-[10]
        `}
      >
        {children}
      </div>
    </>
  );
}