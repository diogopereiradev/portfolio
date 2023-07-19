'use client';
import React, { useRef } from 'react';
import { useIsInViewport } from '../../../shared/hooks/useIsInViewport';

export function Client({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsInViewport(containerRef);
  const animation = isVisible? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-[130px]';

  return (
    <div 
      ref={containerRef} 
      className={`fixed bottom-0 left-[43px] flex flex-col items-center gap-[20px] z-[9999] duration-700 ${animation}`}
    >
      {children}
    </div>
  );
}