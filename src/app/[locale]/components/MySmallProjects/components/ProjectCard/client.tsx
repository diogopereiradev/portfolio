'use client';
import React, { useRef, useState } from 'react';
import { useIsInViewport } from '../../../../../../shared/hooks/useIsInViewport';

export function Client({ children, projectUrl }: { children: JSX.Element[] | JSX.Element, projectUrl: string }): JSX.Element {
  const [alreadyAnimated, setAlreadyAnimated] = useState(false);
  const containerRef = useRef(null);
  const isVisible = useIsInViewport(containerRef, isInViewportCallback);
  const animation = isVisible? 'opacity-1' : alreadyAnimated? 'opacity-1' : 'opacity-0';

  function isInViewportCallback(isIntersecting: boolean) {
    if(isIntersecting) {
      setAlreadyAnimated(true);
    }
  }

  return(
    <div 
      ref={containerRef}
      onClick={() => window.open(projectUrl, '_blank', 'noreferrer')} 
      className={`base:grow [@media_screen_and_(min-width:1300px)]:grow-0 w-[300px] h-[300px] bg-secondary-200 rounded-[5px] duration-300 hover:translate-y-[-8px] p-[30px] duration-700 cursor-pointer ${animation}`}
    >
      {children}
    </div>
  );
}