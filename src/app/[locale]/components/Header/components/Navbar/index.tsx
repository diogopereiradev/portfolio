import React, { AnchorHTMLAttributes } from 'react';
import { FaGithub, FaLinkedin, FaCodepen, FaDiscord } from 'react-icons/fa';
import { useSSRTranslation } from '../../../../../../shared/hooks/useSSRTranslation';

interface NavigationLinkProps {
  children: JSX.Element | string, 
  className?: string,
  to: string
  anchorAttributes?: AnchorHTMLAttributes<HTMLAnchorElement>
}

function NavigationLink({ children, className, to, anchorAttributes }: NavigationLinkProps): JSX.Element {
  return(
    <li className={className}>
      <a href={to} {...anchorAttributes}>{children}</a>
    </li>
  );
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function Navbar(): JSX.Element {
  const { t } = await useSSRTranslation();

  return(
    <nav className='w-full flex justify-around items-center px-8 py-24'>
      <ul className='flex gap-[20px]'>
        <NavigationLink to='https://github.com/FhillSlinger' anchorAttributes={{ target: '_blank', rel: 'noreferrer' }}>
          <FaGithub size={30}/>
        </NavigationLink>
        <NavigationLink to='https://github.com/FhillSlinger' anchorAttributes={{ target: '_blank', rel: 'noreferrer' }}>
          <FaLinkedin size={30}/>
        </NavigationLink>
        <NavigationLink to='https://github.com/FhillSlinger' anchorAttributes={{ target: '_blank', rel: 'noreferrer' }}>
          <FaCodepen size={30}/>
        </NavigationLink>
        <NavigationLink to='https://discord.com/users/882178309205671956' anchorAttributes={{ target: '_blank', rel: 'noreferrer' }}>
          <FaDiscord size={30}/>
        </NavigationLink>
      </ul>
      <div className='flex flex-col items-center gap-[36px] relative top-[20px]'>
        <h1 className='text-[110px] mx-[auto] text-primary-200'>DIOGO</h1>
        <h3 className='text-[23px] text-primary-300'>Desenvolvedor Front-end</h3>
      </div>
      <button className='bg-transparent rounded-full border-solid border-[2px] border-primary-200'>{t('navbar.workwithme.button')}</button>
    </nav>
  );
}