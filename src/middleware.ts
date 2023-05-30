import { NextRequest, NextResponse } from 'next/server';
import { localeDetectionMiddlewareHandle } from './shared/middlewares/localeDetection.middleware';

export function middleware(req: NextRequest) {
  const localeDetectionResponse = localeDetectionMiddlewareHandle(req);
  return localeDetectionResponse || NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
};