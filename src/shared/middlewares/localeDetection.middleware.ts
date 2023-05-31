import acceptLanguage from 'accept-language';
import { supportedLanguages, fallbackLanguage } from '../i18n/settings';
import { NextRequest, NextResponse } from 'next/server';

const localeCookieName = 'i18next';
acceptLanguage.languages(supportedLanguages);

function autoDetectLocale(req: NextRequest): string {
  if(req.cookies.has(localeCookieName)) {
    return acceptLanguage.get(req.cookies.get(localeCookieName)?.value) as string;
  } else if(req.headers.get('Accept-Language')) {
    return acceptLanguage.get(req.headers.get('Accept-Language')) as string;
  } else {
    return fallbackLanguage;
  }
}

function isLocaleParamValid(req: NextRequest) {
  const pathnameLocaleParam = req.nextUrl.pathname.split('/')[1];
  const validity = !supportedLanguages.includes(pathnameLocaleParam) && pathnameLocaleParam !== '_next'? false : true;
  return validity;
}

function trySetRefererLocaleCookie(req: NextRequest) {
  if (req.headers.has('referer')) {
    const refererHeader = req.headers.get('referer') as string;
    const refererUrl = new URL(refererHeader);
    const refererPathnameLocaleParam = refererUrl.pathname.split('/')[1];
    const response = NextResponse.next();

    if(supportedLanguages.includes(refererPathnameLocaleParam)) {
      refererPathnameLocaleParam && response.cookies.set(localeCookieName, refererPathnameLocaleParam);
    }
    return response;
  }
}

export function localeDetectionMiddlewareHandle(req: NextRequest) {
  const lng: string = autoDetectLocale(req);

  if(isLocaleParamValid(req)) {
    trySetRefererLocaleCookie(req);
  } else {
    const pathnameLocaleParam = req.nextUrl.pathname.split('/')[1];
    const pathnameWithoutLocaleParam = req.nextUrl.pathname.replace(`/${pathnameLocaleParam}`, '');
    return NextResponse.redirect(new URL(`/${lng}${pathnameWithoutLocaleParam}`, req.url), { status: 301 });
  }
  return NextResponse.next();
}