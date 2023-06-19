'use client';
import React, { createContext, useState } from 'react';

type ContextProps = {
  isOpen: boolean,
  openMenu: () => void,
  closeMenu: () => void
};

export const MobileProjectMenuContext = createContext<ContextProps>({} as ContextProps);

export function MobileProjectMenuProvider({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);

  const closeMenu = () => setIsOpen(false);

  return(
    <MobileProjectMenuContext.Provider value={{ isOpen, openMenu, closeMenu }}>
      {children}
    </MobileProjectMenuContext.Provider>
  );
}