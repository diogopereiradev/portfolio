'use client';
import React from 'react';

export function Client({ children, projectUrl }: { children: JSX.Element[] | JSX.Element, projectUrl: string }): JSX.Element {
  return(
    <div 
      onClick={() => window.open(projectUrl, '_blank', 'noreferrer')} 
      className='base:grow [@media_screen_and_(min-width:1300px)]:grow-0 w-[300px] h-[300px] bg-secondary-200 rounded-[5px] duration-300 hover:translate-y-[-8px] p-[30px] cursor-pointer'
    >
      {children}
    </div>
  );
}