import React from 'react';
import { IconType } from 'react-icons';

type SocialLinkRootProps = {
  children: JSX.Element | JSX.Element[],
  to: string
};

function SocialLinkRoot({ children, to }: SocialLinkRootProps): JSX.Element {
  return(
    <a href={to} target='_blank' rel='noreferrer'>
      {children}
    </a>
  );
}

type SocialLinkIconProps = {
  children: IconType,
  size: number,
  color: string
};

function SocialLinkIcon({ children: Icon, size, color }: SocialLinkIconProps): JSX.Element {
  return(
    <Icon size={size} style={{ color: color.startsWith('#')? color : '' }} className={`hover:text-secondary-200 duration-150 ${color.startsWith('#')? '' : color}`}/>
  );
}

export const SocialLink = {
  Root: SocialLinkRoot,
  Icon: SocialLinkIcon
};