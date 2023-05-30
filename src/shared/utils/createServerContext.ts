import 'server-only';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { cache } from 'react';

export function createServerContext<T>(initialValue: T): [() => T, (v: T) => void] {
  const getCacheRef = cache(() => ({ current: initialValue }));

  const getValue = () => getCacheRef().current;
  const setValue = (value: T) => {
    getCacheRef().current = value;
  };
  return [getValue, setValue];
}