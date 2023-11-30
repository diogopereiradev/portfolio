'use client';
import React, { useEffect, useRef } from 'react';

export function MouseShadow(): JSX.Element {
  const mouseShadowRef = useRef(null);

  useEffect(() => {
    if(!mouseShadowRef.current) return;
    const shadow: HTMLDivElement = mouseShadowRef.current;

    shadow.style.opacity = '1';

    window.addEventListener('mousemove', (e) => {
      shadow.style.left = `${e.x - 100}px`;
      shadow.style.top = `${e.y - 100}px`;
    });
  }, [mouseShadowRef]);

  return(
    <div 
      ref={mouseShadowRef} 
      style={{ opacity: '0' }} 
      className='fixed left-0 top-0 pointer-events-none w-[200px] h-[200px] rounded-full bg-[#3641d1]/30 blur-[300px] z-[-9999]'
    ></div>
  );
}