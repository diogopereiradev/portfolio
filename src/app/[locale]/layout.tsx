import '../../shared/core/globals.css';
import React from 'react';

export const metadata = {
  title: 'Diogo Pereira | Portfolio'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}