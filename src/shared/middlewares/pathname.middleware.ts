import { NextRequest, NextResponse } from 'next/server';

export function pathnameMiddlewareHandle(req: NextRequest) {
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('pathname', req.nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
}