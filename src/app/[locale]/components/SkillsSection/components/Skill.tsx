import React from 'react';
import { IconType } from 'react-icons';

type SkillProps = {
  children: string,
  icon: {
    Icon: IconType,
    size: number,
    color: string
  }
};

export function Skill(props: SkillProps): JSX.Element {
  return (
    <button className='flex items-center gap-[10px] w-[135px] [@media_screen_and_(max-width:368px)]:w-[120px] h-[40px] px-[12px] bg-secondary-400 rounded-full'>
      <props.icon.Icon style={{ color: props.icon.color }} size={props.icon.size} />
      <p className='text-[15px] font-[700] truncate'>{props.children}</p>
    </button>
  );
}
