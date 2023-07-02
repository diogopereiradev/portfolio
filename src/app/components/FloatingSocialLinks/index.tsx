import React from 'react';
import { RiGithubLine, RiCodepenFill, RiLinkedinFill } from 'react-icons/ri';
import { FaDiscord } from 'react-icons/fa';
import { SocialLink } from './components/SocialLink';

export function FloatingSocialLinks(): JSX.Element {
  return (
    <div className='fixed bottom-0 left-[60px] flex flex-col items-center gap-[15px]'>
      <div className='flex flex-col gap-[9px] ml-[2px]'>
        <SocialLink.Root to='https://github.com/FhillSlinger'>
          <SocialLink.Icon size={25} color='text-primary-200'>{RiGithubLine}</SocialLink.Icon>
        </SocialLink.Root>
        <SocialLink.Root to='https://codepen.io/fhillslinger/pens/public'>
          <SocialLink.Icon size={25} color='text-primary-200'>{RiCodepenFill}</SocialLink.Icon>
        </SocialLink.Root>
        <SocialLink.Root to='https://www.linkedin.com/in/fhill-slinger/'>
          <SocialLink.Icon size={23} color='text-primary-200'>{RiLinkedinFill}</SocialLink.Icon>
        </SocialLink.Root>
        <SocialLink.Root to='https://discord.com/users/882178309205671956'>
          <SocialLink.Icon size={22} color='text-primary-200'>{FaDiscord}</SocialLink.Icon>
        </SocialLink.Root>
      </div>
      <hr className='h-[70px] w-[1px] bg-[#a1c1dc]' />
    </div>
  );
}