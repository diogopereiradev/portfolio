'use client';
import React from 'react';

type NavigationLinkProps = {
  children: JSX.Element | string | JSX.Element[],
  to: string;
};

export function NavigationLink({ to, children }: NavigationLinkProps): JSX.Element {
  return(
    <a 
      href={to}
      className='
        relative
        font-[500]
        text-[15px]
        text-primary-100
        whitespace-nowrap
        before:absolute 
        before:left-[5px] 
        before:top-[32px] 
        before:h-[4px] 
        before:w-[0px] 
        before:rounded-full
        before:bg-primary-100 
        before:duration-150 
        hover:before:w-[50px]
      '
    >
      {children}
    </a>
  );
}