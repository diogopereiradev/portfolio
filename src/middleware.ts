import { NextRequest } from 'next/server';
import { localeDetectionMiddlewareHandle } from './shared/middlewares/localeDetection.middleware';
import { pathnameMiddlewareHandle } from './shared/middlewares/pathname.middleware';

export function middleware(req: NextRequest) {
  localeDetectionMiddlewareHandle(req);
  return pathnameMiddlewareHandle(req);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
};