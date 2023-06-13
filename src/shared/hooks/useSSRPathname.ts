import { headers } from 'next/headers';

export const useSSRPathname = (): string => {
  const headersList = headers();
  return headersList.get?.('pathname') || '/';
};