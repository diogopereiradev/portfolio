'use client';
import React, { useRef, useState } from 'react';
import { useIsInViewport } from '../../../../../../shared/hooks/useIsInViewport';

export function Client({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element {
  const [alreadyAnimated, setAlreadyAnimated] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsInViewport(containerRef, isVisibleCallback);
  const animation = isVisible? 'opacity-1 translate-x-0' : alreadyAnimated? 'opacity-1 translate-x-0' : 'opacity-0 translate-x-[-300px]';

  function isVisibleCallback(isIntersecting: boolean) {
    if(isIntersecting) {
      setAlreadyAnimated(true);
    }
  }

  return (
    <div 
      ref={containerRef} 
      className={`flex items-center relative w-full h-full base:pl-[30px] md:pl-[10%] 2xl:pl-[14%] 3xl:pl-[23%] pr-[30px] duration-700 ${animation}`}
    >
      {children}
    </div>
  );
}