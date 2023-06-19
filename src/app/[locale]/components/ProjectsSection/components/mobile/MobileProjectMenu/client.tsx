'use client';
import React from 'react';
import  { useMenu } from './hooks/useMenu';

export function Client({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element {
  const { isOpen } = useMenu();

  return (
    <div className={`fixed left-0 top-0 flex flex-col w-screen h-full bg-secondary-500 duration-300 ${isOpen? 'top-0' : 'top-[100vh] opacity-0'} z-[9999]`}>
      {children}
    </div>
  );
}