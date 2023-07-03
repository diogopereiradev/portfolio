'use client';
import React from 'react';

export function FloatingMenu({ state, children }: { state: [boolean, React.Dispatch<React.SetStateAction<boolean>>], children: JSX.Element | JSX.Element[] }): JSX.Element {
  const [isOpen] = state;

  return (
    <div className={`absolute mt-[10px] w-full bg-secondary-200 rounded-[7px] border-solid border-secondary-100 border-[2px] duration-150 ${isOpen? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-[40px] pointer-events-none'} z-[9999]`}>
      <ul className='w-full flex flex-col items-center justify-center'>
        {children}
      </ul>
    </div>
  );
}