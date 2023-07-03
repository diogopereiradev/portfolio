import React from 'react';
import { FaGithub, FaCodepen, FaLinkedin, FaDiscord } from 'react-icons/fa';

export function SocialLinks(): JSX.Element {
  return (
    <div className='w-full flex flex-col gap-[10px]'>
      <a className='w-full flex items-center gap-[8px] text-[15px] font-[700] pl-[15px]' href='https://github.com/FhillSlinger' target='_blank' rel='noreferrer'>
        <FaGithub size={25} />
        Github
      </a>
      <a className='w-full flex items-center gap-[8px] text-[15px] font-[700] pl-[15px]' href='https://codepen.io/fhillslinger/pens/public' target='_blank' rel='noreferrer'>
        <FaCodepen size={25} />
        Codepen
      </a>
      <a className='w-full flex items-center gap-[8px] text-[15px] font-[700] pl-[15px]' href='https://www.linkedin.com/in/fhill-slinger/' target='_blank' rel='noreferrer'>
        <FaLinkedin size={25} />
        Linkedin
      </a>
      <a className='w-full flex items-center gap-[8px] text-[15px] font-[700] pl-[15px]' href='https://discord.com/users/882178309205671956' target='_blank' rel='noreferrer'>
        <FaDiscord size={25} />
        Discord
      </a>
    </div>
  );
}