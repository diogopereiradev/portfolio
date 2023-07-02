import { Roboto, Inter } from 'next/font/google';

export const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto'
});

export const inter = Inter({
  weight: ['400', '500', '600', '900'],
  subsets: ['latin'],
  variable: '--font-inter'
});