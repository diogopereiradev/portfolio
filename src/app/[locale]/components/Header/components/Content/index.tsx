import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { IoMdDocument } from 'react-icons/io';
import { useSSRTranslation } from '../../../../../../shared/hooks/useSSRTranslation';

import { LinkButton } from './components/LinkButton';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
async function Title(): JSX.Element {
  const { t } = await useSSRTranslation();
  return (
    <>
      <p className='text-[18px] font-[500] text-secondary-200 leading-[1] pl-[4px]'>{t('header.title.span')}</p>
      <div>
        <h2 className='base:text-[calc(25px+5.5vw)] xl:text-[80px] text-white-300 leading-[1]'>Diogo Pereira</h2>
        <h2 className='base:text-[calc(25px+5.5vw)] xl:text-[75px] text-primary-100 leading-[1]'>{t('header.title.description')}</h2>
      </div>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
async function Description(): JSX.Element {
  const { t } = await useSSRTranslation();
  return <p className='font-[400] base:text-[15px] xl:text-[16px] text-primary-100 max-w-[600px] pl-[4px] mt-[-10px]'>{t('header.description')}</p>;
}

function Buttons(): JSX.Element {
  return (
    <>
      <div className='relative top-[10px] hidden mmd:flex flex-wrap gap-[20px]'>
        <LinkButton w={180} h={50} to='https://github.com/FhillSlinger'>Github</LinkButton>
        <LinkButton w={180} h={50} to='/diogopereira-cv.pdf'>CV</LinkButton>
      </div>
      <div className='relative base:flex mmd:hidden gap-[15px]'>
        <LinkButton w={55} h={55} to='https://github.com/FhillSlinger'><FiGithub size={20}/></LinkButton>
        <LinkButton w={55} h={55} to='/diogopereira-cv.pdf'><IoMdDocument size={20}/></LinkButton>
      </div>
    </>
  );
}

export function Content(): JSX.Element {
  return (
    <div className='flex items-center relative w-full h-full base:pl-[30px] md:pl-[10%] 2xl:pl-[14%] 3xl:pl-[23%] pr-[30px]'>
      <div className='flex flex-col gap-[35px] base:mt-[0px] xl:mt-[-50px] base:pt-[150px] mmd:pt-[0px]'>
        <Title />
        <Description />
        <Buttons />
      </div>
    </div>
  );
}