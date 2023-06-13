import { NextRequest, NextResponse } from 'next/server';
import { localeDetectionMiddlewareHandle } from './shared/middlewares/localeDetection.middleware';
import { pathnameMiddlewareHandle } from './shared/middlewares/pathname.middleware';

export function middleware(req: NextRequest) {
  const localeDetectionResponse = localeDetectionMiddlewareHandle(req);
  const xUrlResponse = pathnameMiddlewareHandle(req);
  return localeDetectionResponse && xUrlResponse || NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
};