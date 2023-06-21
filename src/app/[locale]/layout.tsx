import '../globals.css';
import React from 'react';
import { dir } from 'i18next';
import { roboto, lily_script_one } from './fonts';
import { setPathname } from '../../shared/contexts/pathnameContext';
import { setServerLocale } from '../../shared/contexts/localeServerContext';
import { useSSRTranslation } from '../../shared/hooks/useSSRTranslation';
import { supportedLanguages } from '../../shared/i18n/settings';
import { headers } from 'next/headers';

export async function generateStaticParams() {
  return supportedLanguages.map(locale => ({ locale }));
}

type LayoutStaticParams = {
  locale: string
}

function initializeGlobalServerContexts(params: LayoutStaticParams) {
  // Set current URL Pathname to global server context
  const headersList = headers();
  setPathname(headersList.get('x-url') || '');
  // Initialize server components global locale context 
  setServerLocale(params.locale);
}

export default async function RootLayout({ children, params }: { children: React.ReactNode, params: LayoutStaticParams }) {
  const { t } = await useSSRTranslation(params.locale);
  initializeGlobalServerContexts(params);

  return (
    <html lang={params.locale} dir={dir(params.locale)} className={`${roboto.variable} ${lily_script_one.variable}`}>
      <head>
        <title>{t('metadata.document.title')}</title>
        <meta name="author" content="Diogo Pereira" />
        <meta name="description" content={t('metadata.page.description')} />
        <meta name="robots" content="index,follow" />
        <meta name="keywords" content="developer,frontend,website,software,portfolio,diogo,pereira,desenvolvedor,site" />
        <meta name="og:title" content={t('metadata.og.title')} />
        <meta name="og:description" content={t('metadata.og.description')} />
        <meta name="og:image" content="https://null.null.com" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}