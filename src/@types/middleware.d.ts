import { NextRequest, NextResponse } from 'next/server';

export type MiddlewareFunction = (req: NextRequest, next?: NextResponse) => NextResponse;