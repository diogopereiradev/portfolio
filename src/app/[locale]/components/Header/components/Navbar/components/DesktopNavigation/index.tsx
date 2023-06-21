import React from 'react';
import { LocaleSelectInput } from '../../../../../../../components/LocaleSelectInput';
import { SocialLink } from './components/SocialLink';
import { FaGithub, FaCodepen, FaLinkedin, FaDiscord } from 'react-icons/fa';

function SocialLinks(): JSX.Element {
  return(
    <ul className='flex items-center lg:gap-[15px] mmd:gap-[10px]'>
      <SocialLink to='https://github.com/FhillSlinger' icon={<FaGithub size={28}/>}/>
      <SocialLink to='https://codepen.io/fhillslinger/pens/public' icon={<FaCodepen size={29}/>}/>
      <SocialLink to='https://www.linkedin.com/in/fhill-slinger/' icon={<FaLinkedin size={29}/>}/>
      <SocialLink to='https://discord.com/users/882178309205671956' icon={<FaDiscord size={31}/>}/>
    </ul>
  );
}

export function DesktopNavigation(): JSX.Element {
  return(
    <div className='hidden mmd:flex items-center gap-[20px]'>
      <SocialLinks />
      <div className='p-[4px] bg-primary-200 rounded-full mmd:hidden lg:inline' />
      <LocaleSelectInput
        width={180}
        height={47}
      />
    </div>
  );
}