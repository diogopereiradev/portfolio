import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';

export const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  preload: false,
  variable: '--font-roboto'
});

export const calibre = localFont({
  src: [
    {
      path: './fonts/CalibreRegular.otf',
      weight: '400'
    },
    {
      path: './fonts/CalibreMedium.otf',
      weight: '500'
    },
    {
      path: './fonts/CalibreSemibold.otf',
      weight: '600'
    },
    {
      path: './fonts/CalibreBold.otf',
      weight: '700'
    },
    {
      path: './fonts/CalibreBlack.otf',
      weight: '900'
    }
  ],
  preload: false,
  variable: '--font-calibre'
});