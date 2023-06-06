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
  preload: false,
  variable: '--font-roboto'
});


export const lily_script_one = localFont({
  src: './fonts/LilyScriptOne.ttf',
  preload: false,
  variable: '--font-lily'
});