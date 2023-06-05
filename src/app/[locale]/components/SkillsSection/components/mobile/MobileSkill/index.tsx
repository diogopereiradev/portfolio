import React from 'react';
import { MobileSkillButton } from './client';
import { MobileMenuData } from '../../../@types/mobileMenu';

type SkillProps = {
  children: string,
  data: MobileMenuData
};

export function MobileSkill({ children, data }: SkillProps): JSX.Element {
  return (
    <MobileSkillButton data={data}>
      {data.icon}
      <p className='text-[15px] font-[700] truncate'>{children}</p>
    </MobileSkillButton>
  );
}