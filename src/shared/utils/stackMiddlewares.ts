import { NextRequest, NextResponse } from 'next/server';
import { MiddlewareFunction } from '../../@types/middleware';

function recursiveMiddlewareExec(req: NextRequest, middlewares: MiddlewareFunction[], currentMiddlewareResponse?: NextResponse, index = 0): NextResponse {
  const response = middlewares[index](req, currentMiddlewareResponse);
  const nextMiddleware = middlewares[index + 1]?.prototype;

  if(nextMiddleware) {
    currentMiddlewareResponse = response;
    recursiveMiddlewareExec(req, middlewares, currentMiddlewareResponse, index + 1);
    return currentMiddlewareResponse;
  } else {
    return response;
  }
}

export function stackMiddlewares(req: NextRequest, middlewares: MiddlewareFunction[]) {
  const middlewareResponse = recursiveMiddlewareExec(req, middlewares);
  return middlewareResponse;
}