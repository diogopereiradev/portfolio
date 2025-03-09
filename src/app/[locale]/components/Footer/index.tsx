import React from 'react';
import { RiGithubLine, RiCodepenFill, RiLinkedinFill } from 'react-icons/ri';
import { FaDiscord } from 'react-icons/fa';
import { useTranslations } from 'next-intl'; 

import { SocialLink } from './components/SocialLink';
import { Client } from './client';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function Footer(): JSX.Element {
  const t = useTranslations();

  return (
    <Client>
      <div className='flex flex-col items-center'>
        <h3 className='text-[18px] text-primary-100'>{t('footer-developed-by-message')} Diogo Pereira</h3>
        <div className='flex gap-[8px] items-center ml-[-6px]'>
          <SocialLink.Root to='https://github.com/diogopereiradev'>
            <SocialLink.Icon size={25} color='text-primary-100'>{RiGithubLine}</SocialLink.Icon>
          </SocialLink.Root>
          <SocialLink.Root to='https://codepen.io/fhillslinger/pens/public'>
            <SocialLink.Icon size={25} color='text-primary-100'>{RiCodepenFill}</SocialLink.Icon>
          </SocialLink.Root>
          <SocialLink.Root to='https://www.linkedin.com/in/diogopereiradev/'>
            <SocialLink.Icon size={23} color='text-primary-100'>{RiLinkedinFill}</SocialLink.Icon>
          </SocialLink.Root>
          <SocialLink.Root to='https://discord.com/users/882178309205671956'>
            <SocialLink.Icon size={22} color='text-primary-100'>{FaDiscord}</SocialLink.Icon>
          </SocialLink.Root>
        </div>
      </div>
    </Client>
  );
}
