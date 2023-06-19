import { pathname } from '../../shared/contexts/pathnameContext';

export const useSSRPathname = (): string => pathname();