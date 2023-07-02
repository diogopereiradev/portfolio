import localFont from 'next/font/local';

export const roboto = localFont({
  src: [
    {
      path: './fonts/Roboto-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/Roboto-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/Roboto-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/Roboto-Black.ttf',
      weight: '900',
      style: 'normal'
    }
  ],
  preload: true,
  variable: '--font-roboto'
});

export const inter = localFont({
  src: [
    {
      path: './fonts/Inter-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/Inter-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/Inter-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/Inter-Black.ttf',
      weight: '900',
      style: 'normal'
    }
  ],
  preload: true,
  variable: '--font-inter'
});