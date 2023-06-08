'use client';
import React, { createContext, useState } from 'react';
import { ProjectData } from '../../../../@types/projectMenu';

type MobileMenuContextProps = {
  isOpen: boolean,
  data: ProjectData,
  openMenu: () => void,
  closeMenu: () => void,
  updateMenuData: (data: ProjectData) => void;
};

export const MobileProjectMenuContext = createContext<MobileMenuContextProps>({} as MobileMenuContextProps);

type ProviderStateData = {
  isOpen: boolean, 
  data: ProjectData
};

export function MobileMenuProvider({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element {
  const [menuData, setMenuData] = useState<ProviderStateData>({
    isOpen: false,
    data: {
      name: '',
      description: {},
      projectLiveUrl: '',
      projectRepositoryUrl: '',
      projectIconUrl: '',
      technologies: [],
      projectThumbImageUrl: '',
      createdAt: new Date()
    }
  });

  const updateMenuData = (data: ProjectData) => {
    setMenuData(oldData => ({ ...oldData, data }));
  };

  const openMenu = () => {
    setMenuData(oldData => ({ ...oldData, isOpen: true }));
  };

  const closeMenu = () => {
    setMenuData(oldData => ({ ...oldData, isOpen: false }));
  };
  
  return(
    <MobileProjectMenuContext.Provider value={{ isOpen: menuData.isOpen, data: menuData.data, openMenu, closeMenu, updateMenuData }}>
      <div>
        {children}
      </div>
    </MobileProjectMenuContext.Provider>
  );
}