import React from 'react';
import { FaGithub, FaLinkedin, FaCodepen, FaDiscord } from 'react-icons/fa';
import { useSSRTranslation } from '../../../../shared/hooks/useSSRTranslation';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function Footer(): JSX.Element {
  const { t } = await useSSRTranslation();
  
  return(
    <footer className='flex flex-col justify-center items-center w-full h-[120px]'>
      <p>{t('footer.developed.by.message')} Diogo Pereira</p>
      <a className='text-secondary-100' href='mailto:diogopereira.contact@gmail.com'>diogopereira.contact@gmail.com</a>
      <ul className='flex gap-[10px] mt-[-10px]'>
        <li>
          <a href='https://github.com/FhillSlinger' className='text-primary-200 hover:text-secondary-200'>
            <FaGithub size={25}/>
          </a>
        </li>
        <li>
          <a href='https://github.com/FhillSlinger' className='text-primary-200 hover:text-secondary-200'>
            <FaCodepen size={25}/>
          </a>
        </li>
        <li>
          <a href='https://github.com/FhillSlinger' className='text-primary-200 hover:text-secondary-200'>
            <FaLinkedin size={25}/>
          </a>
        </li>
        <li>
          <a href='https://github.com/FhillSlinger' className='text-primary-200 hover:text-secondary-200'>
            <FaDiscord size={25}/>
          </a>
        </li>
      </ul>
    </footer>
  );
}