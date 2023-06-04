import { Inter, Lily_Script_One } from 'next/font/google';

export const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'], 
  variable: '--font-inter',
  display: 'fallback' 
});

export const lily_script_one = Lily_Script_One({ 
  subsets: ['latin'], 
  weight: '400', 
  variable: '--font-lily',
  display: 'swap' 
});