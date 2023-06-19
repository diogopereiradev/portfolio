import React from 'react';

type SocialLinkProps = {
  to: string,
  icon: JSX.Element;
};

export function SocialLink({ to, icon }: SocialLinkProps): JSX.Element {
  return(
    <li className='text-primary-100 hover:text-secondary-200 duration-150 cursor-pointer'>
      <a href={to} target='_blank' rel='noreferrer'>
        {icon}
      </a>
    </li>
  );
}