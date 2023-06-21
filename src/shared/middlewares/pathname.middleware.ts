import { NextRequest, NextResponse } from 'next/server';

export function pathnameMiddlewareHandle(req: NextRequest, next?: NextResponse) {
  const headerKeyName = 'x-url';
  const pathname = req.nextUrl.pathname;

  if(next) {
    const response = next;
    response?.headers.set(headerKeyName, pathname);
    return response;
  } else {
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set(headerKeyName, pathname);
    return NextResponse.next({
      request: {
        headers: requestHeaders
      }
    });
  }
}