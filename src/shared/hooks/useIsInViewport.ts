'use client';
import { useMemo, useEffect, useState, RefObject } from 'react';

export function useIsInViewport(ref: RefObject<HTMLElement>, callback?: (isIntersecting: boolean) => void) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(() => {
    if(typeof window === 'undefined') return;
    const obs = new window.IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
      callback?.(entry.isIntersecting);
    });
    return obs;
  }, [ref]);

  useEffect(() => {
    if(!ref.current) return;
    observer?.observe(ref.current);
    return () => observer?.disconnect();
  }, []);

  return isIntersecting;
}