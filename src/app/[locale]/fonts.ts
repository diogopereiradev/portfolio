import { Roboto, Lily_Script_One } from 'next/font/google';

export const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'], 
  variable: '--font-roboto',
  display: 'fallback' 
});


export const lily_script_one = Lily_Script_One({ 
  subsets: ['latin'], 
  weight: '400', 
  variable: '--font-lily',
  display: 'swap' 
});