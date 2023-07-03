'use client';
import React, { useEffect, useRef } from 'react';

export function MouseShadow(): JSX.Element {
  const mouseShadowRef = useRef(null);

  useEffect(() => {
    if(!mouseShadowRef.current) return;
    const shadow: HTMLDivElement = mouseShadowRef.current;
    const shadowOffset = 310;

    shadow.style.opacity = '1';

    window.addEventListener('mousemove', (e) => {
      const x = e.x - shadowOffset;
      const y = e.y - shadowOffset;
      shadow.style.left = `${x}px`;
      shadow.style.top = `${y}px`;
    });
  }, [mouseShadowRef]);

  return(
    <div ref={mouseShadowRef} style={{ opacity: '0', boxShadow: '250px 250px 250px #3641d1' }} className='fixed left-0 top-0 pointer-events-none w-[150px] h-[150px] rounded-full z-[-9999]' />
  );
}