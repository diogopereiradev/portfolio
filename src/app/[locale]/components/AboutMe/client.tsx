'use client';
import React, { useRef, useState } from 'react';
import { useIsInViewport } from '../../../../shared/hooks/useIsInViewport';

export function Client({ children }: { children: JSX.Element[] | JSX.Element }): JSX.Element {
  const [alreadyAnimated, setAlreadyAnimated] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIsInViewport(sectionRef, isVisibleCallback);
  const animation = `${isVisible? 'opacity-1 translate-y-0' : alreadyAnimated? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-[500px]'}`;

  function isVisibleCallback(isIntersecting: boolean) {
    if(isIntersecting) {
      setAlreadyAnimated(true);
    }
  }

  return (
    <section ref={sectionRef} id='aboutme' className={`flex justify-center base:pt-[200px] mmd:pt-32 py-32 duration-700 ${animation}`}>
      {children}
    </section>
  );
}