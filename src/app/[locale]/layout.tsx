import '../globals.css';
import React from 'react';
import { useTranslations } from 'next-intl';
import { icons } from './icons';
import { calibre, roboto } from './fonts';

export const metadata = {
  icons
};

type LayoutStaticParams = {
  locale: string
}

export default function RootLayout({ children, params }: { children: React.ReactNode, params: LayoutStaticParams }) {
  const t = useTranslations();

  return (
    <html lang={params.locale} className={`${calibre.variable} ${roboto.variable}`}>
      <head>
        <title>{t('metadata-document-title')}</title>
        <meta name='author' content='Diogo Pereira' />
        <meta name='description' content={t('metadata-page-description')} />
        <meta name='robots' content='index,follow' />
        <meta name='keywords' content='developer,frontend,website,software,portfolio,diogo,pereira,desenvolvedor,site' />
        <meta name='og:title' content={t('metadata-og-title')} />
        <meta name='og:description' content={t('metadata-og-description')} />
        <meta name='og:image' content='https://null.null.com' />
        <meta name='msapplication-TileColor' content='#08101e' />
        <meta name='theme-color' content='#08101e' />
        <meta name='msapplication-config' content='/favicons/browserconfig.xml' />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}