import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { IoMdDocument } from 'react-icons/io';
import { useTranslations } from 'next-intl';

import { LinkButton } from './components/LinkButton';
import { Client } from './client';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
async function Title(): JSX.Element {
  const t  = useTranslations();

  return (
    <>
      <p className='text-[18px] font-[500] text-secondary-200 leading-[1] pl-[4px]'>{t('header-title-span')}</p>
      <div>
        <h2 className='base:text-[calc(25px+5.5vw)] xl:text-[80px] text-white-300 leading-[1]'>Diogo Pereira</h2>
        <h2 className='base:text-[calc(25px+5.5vw)] xl:text-[75px] text-primary-100 leading-[1]'>{t('header-title-description')}</h2>
      </div>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
async function Description(): JSX.Element {
  const t  = useTranslations();
  return <p className='font-[400] base:text-[16px] xl:text-[17px] text-primary-100 max-w-[600px] pl-[4px] mt-[-10px]'>{t('header-description')}</p>;
}

function Buttons(): JSX.Element {
  return (
    <>
      <div className='relative top-[10px] hidden mmd:flex flex-wrap gap-[20px]'>
        <LinkButton w={180} h={50} to='https://github.com/diogopereiradev'>Github</LinkButton>
      </div>
      <div className='relative base:flex mmd:hidden gap-[15px]'>
        <LinkButton w={55} h={55} to='https://github.com/diogopereiradev'><FiGithub size={20}/></LinkButton>
      </div>
    </>
  );
}

export function Content(): JSX.Element {
  return (
    <Client>
      <div className='flex flex-col gap-[35px] base:mt-[0px] xl:mt-[-50px] base:pt-[150px] mmd:pt-[0px]'>
        <Title />
        <Description />
        <Buttons />
      </div>
    </Client>
  );
}
