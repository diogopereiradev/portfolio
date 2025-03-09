import React from 'react';
import { RiGithubLine, RiCodepenFill, RiLinkedinFill } from 'react-icons/ri';
import { FaDiscord } from 'react-icons/fa';

import { Client } from './client';
import { SocialLink } from './components/SocialLink';

export function FloatingSocialLinks(): JSX.Element {
  return (
    <Client>
      <div className='flex flex-col gap-[12px] ml-[2px]'>
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
      <hr className='h-[80px] w-[1px] bg-[#a1c1dc]' />
    </Client>
  );
}
