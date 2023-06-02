import '../globals.css';
import React from 'react';
import { dir } from 'i18next';
import { roboto, libre_baskerville } from './fonts';
import { useSSRTranslation } from '../../shared/hooks/useSSRTranslation';
import { supportedLanguages } from '../../shared/i18n/settings';

export async function generateStaticParams() {
  return supportedLanguages.map(locale => ({ locale }));
}

type LayoutStaticParams = {
  locale: string
}

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode, params: LayoutStaticParams }) {
  const { t } = await useSSRTranslation(locale);

  return (
    <html lang={locale} dir={dir(locale)} className={`${roboto.variable} ${libre_baskerville.variable}`}>
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