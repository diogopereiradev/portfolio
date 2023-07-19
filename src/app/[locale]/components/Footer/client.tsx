'use client';
import React, { useRef, useState } from 'react';
import { useIsInViewport } from '../../../../shared/hooks/useIsInViewport';

export function Client({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element {
  const [alreadyAnimated, setAlreadyAnimated] = useState(false);
  const containerRef = useRef(null);
  const isVisible = useIsInViewport(containerRef, isInViewportCallback);
  const animation = isVisible? 'opacity-1 translate-x-0' : alreadyAnimated? 'opacity-1 translate-x-0' : 'opacity-0 translate-x-[-80px]';

  function isInViewportCallback(isIntersecting: boolean) {
    if(isIntersecting) {
      setAlreadyAnimated(true);
    }
  }
  
  return (
    <footer ref={containerRef} className={`flex justify-center items-center p-[20px] duration-700 ${animation}`}>
      {children}
    </footer>
  );
}