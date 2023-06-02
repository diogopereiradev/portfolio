import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';

export const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-text'
});

export const tt_tsars_b_trial = localFont({
  src: [
    {
      path: '../fonts/TT_Tsars_B_Trial_Light.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/TT_Tsars_B_Trial_Regular.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../fonts/TT_Tsars_B_Trial_Bold.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../fonts/TT_Tsars_B_Trial_Black.otf',
      weight: '900',
      style: 'normal'
    }
  ],
  variable: '--font-tttsars-title'
});