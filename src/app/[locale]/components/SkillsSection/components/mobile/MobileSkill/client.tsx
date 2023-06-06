'use client';
import React from 'react';
import { MobileMenuData } from '../../../@types/mobileMenu';
import { useMobileMenu } from '../MobileSkillMenu/hooks/useMobileMenu';
import { setDocumentScroll } from '../../../../../../../shared/utils/setDocumentScroll';

type MobileSkillButtonProps = {
  children: JSX.Element | JSX.Element[],
  data: MobileMenuData
};

export function MobileSkillButton({ children, data }: MobileSkillButtonProps) {
  const { openMenu, updateMenuData } = useMobileMenu();

  const handleMenuOpen = () => {
    updateMenuData(data);
    setDocumentScroll(false);
    openMenu();
  };

  return(
    <button title={data.title} onClick={handleMenuOpen} className='flex items-center gap-[10px] w-[135px] [@media_screen_and_(max-width:368px)]:w-[120px] h-[40px] px-[12px] bg-secondary-400 rounded-full'>
      {children}
    </button>
  );
}