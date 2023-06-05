'use client';
import React, { createContext, useState } from 'react';
import { FaMinus } from 'react-icons/fa';
import { MobileMenuData } from '../../../../@types/mobileMenu';

type MobileMenuContextProps = {
  isOpen: boolean,
  data: MobileMenuData,
  openMenu: () => void,
  closeMenu: () => void,
  updateMenuData: (data: MobileMenuData) => void;
};

export const MobileMenuContext = createContext<MobileMenuContextProps>({} as MobileMenuContextProps);

export function MobileMenuProvider({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element {
  const [menuData, setMenuData] = useState<{ isOpen: boolean, data: MobileMenuData }>({
    isOpen: false,
    data: {
      title: 'Invalid tech',
      description: 'Invalid tech',
      techExperience: {
        studyStarted: new Date()
      },
      icon: <FaMinus className='text-[#fff]' size={0}/>,
    }
  });

  const updateMenuData = (data: MobileMenuData) => {
    setMenuData(oldData => ({ ...oldData, data }));
  };

  const openMenu = () => {
    setMenuData(oldData => ({ ...oldData, isOpen: true }));
  };

  const closeMenu = () => {
    setMenuData(oldData => ({ ...oldData, isOpen: false }));
  };
  
  return(
    <MobileMenuContext.Provider value={{ isOpen: menuData.isOpen, data: menuData.data, openMenu, closeMenu, updateMenuData }}>
      <div>
        {children}
      </div>
    </MobileMenuContext.Provider>
  );
}