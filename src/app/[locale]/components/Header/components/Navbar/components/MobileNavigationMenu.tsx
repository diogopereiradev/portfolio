'use client';
import React, { useState } from 'react';
import { useClientTranslation } from '../../../../../../../shared/hooks/useClientTranslation';
import { BiMenu } from 'react-icons/bi';
import { FaGithub, FaCodepen, FaLinkedin, FaDiscord } from 'react-icons/fa';

function Menu({ state }: { state: [boolean, React.Dispatch<React.SetStateAction<boolean>>] }): JSX.Element {
  const { t } = useClientTranslation();
  const [isOpen, setIsOpen] = state;

  const handleCloseMenu = () => setIsOpen(false);

  return (
    <div>
      <div
        onClick={handleCloseMenu}
        className={`
          fixed
          left-0
          top-0
          w-screen
          h-screen
          z-[9]
          ${isOpen ? 'bg-[#00000099]' : 'pointer-events-none'}
          duration-300
        `}
      />
      <div
        className={`
          absolute
          right-[-5px]
          top-0
          flex
          items-center
          flex-col
          gap-[20px]
          w-[200px]
          bg-secondary-500
          rounded-[30px]
          ${isOpen ? 'translate-x-[0px]' : 'pointer-events-none translate-x-[-100vw]'}
          duration-300
          px-[15px]
          py-[18px]
          z-[10]
        `}
      >
        <button className='text-[14px]'>{t('navbar.mobile.menu.workwithme.button')}</button>
        <hr className='w-full' />
        <div className='w-full flex flex-col gap-[10px]'>
          <a className='w-full flex items-center gap-[8px] text-[15px] font-[700] pl-[15px]' href='https://github.com/FhillSlinger' target='_blank' rel='noreferrer'>
            <FaGithub size={27} />
            Github
          </a>
          <a className='w-full flex items-center gap-[8px] text-[15px] font-[700] pl-[15px]' href='https://codepen.io/fhillslinger/pens/public' target='_blank' rel='noreferrer'>
            <FaCodepen size={27} />
            Codepen
          </a>
          <a className='w-full flex items-center gap-[8px] text-[15px] font-[700] pl-[15px]' href='https://www.linkedin.com/in/fhill-slinger/' target='_blank' rel='noreferrer'>
            <FaLinkedin size={27} />
            Linkedin
          </a>
          <a className='w-full flex items-center gap-[8px] text-[15px] font-[700] pl-[15px]' href='https://discord.com/users/882178309205671956' target='_blank' rel='noreferrer'>
            <FaDiscord size={27} />
            Discord
          </a>
        </div>
      </div>
    </div>
  );
}

export function MobileNavigationMenu(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative'>
      <button onClick={() => setIsOpen(true)} className='p-1.5 bg-transparent'>
        <BiMenu className='text-primary-100' size={35} />
      </button>
      <Menu state={[isOpen, setIsOpen]} />
    </div>
  );
}