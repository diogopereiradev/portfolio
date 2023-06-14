import { NextRequest } from 'next/server';
import { stackMiddlewares } from './shared/utils/stackMiddlewares';
import { localeDetectionMiddlewareHandle } from './shared/middlewares/localeDetection.middleware';
import { pathnameMiddlewareHandle } from './shared/middlewares/pathname.middleware';

const middlewares = [
  localeDetectionMiddlewareHandle,
  pathnameMiddlewareHandle
];

export function middleware(req: NextRequest) {
  return stackMiddlewares(req, middlewares);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
};