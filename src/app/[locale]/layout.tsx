import '../globals.css';
import React from 'react';
import { dir } from 'i18next';
import { supportedLanguages } from '../../shared/i18n/settings';

export const metadata = {
  title: 'Diogo Pereira | Portfolio'
};

type LayoutParams = {
  locale: string
}

export async function generateStaticParams() {
  return supportedLanguages.map(locale => ({ locale }));
}

export default function RootLayout({ children, params }: { children: React.ReactNode, params: LayoutParams }) {
  return (
    <html lang={params.locale} dir={dir(params.locale)}>
      <body>
        {children}
      </body>
    </html>
  );
}