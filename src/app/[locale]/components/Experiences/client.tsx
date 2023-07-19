'use client';
import React, { useRef, useState } from 'react';
import { useIsInViewport } from '../../../../shared/hooks/useIsInViewport';

export function Client({ children }: { children: JSX.Element[] | JSX.Element }): JSX.Element {
  const [alreadyAnimated, setAlreadyAnimated] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIsInViewport(sectionRef, isVisibleCallback);
  const animation = `${isVisible? 'opacity-1 translate-x-0' : alreadyAnimated? 'opacity-1 translate-x-0' : 'opacity-0 translate-x-[-300px]'}`;

  function isVisibleCallback(isIntersecting: boolean) {
    if(isIntersecting) {
      setAlreadyAnimated(true);
    }
  }

  return (
    <section ref={sectionRef} id='skills' className={`flex justify-center pt-[90px] pb-[140px] duration-700 ${animation}`}>
      {children}
    </section>
  );
}