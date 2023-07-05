import React from 'react';
import Image from 'next/image';
import { useSSRTranslation } from '../../../../shared/hooks/useSSRTranslation';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
async function Title(): JSX.Element {
  const { t } = await useSSRTranslation();
  return (
    <div className='flex items-center gap-[20px]'>
      <h2 className='text-[30px] text-white-100 whitespace-nowrap'>{t('aboutme.section.title')}</h2>
      <hr className='relative top-[2px] h-[1px] w-full max-w-[300px] rounded-full bg-primary-500' />
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
async function Description(): JSX.Element {
  const { t } = await useSSRTranslation();
  return (
    <p className='font-[400] text-variant-100'>
      {t('aboutme.section.description.paragraph.1')}
      <br />
      <br />
      {t('aboutme.section.description.paragraph.2')}
      <br />
      <br />
      {t('aboutme.section.description.paragraph.3')}
    </p>
  );
}

function PerfilPhoto(): JSX.Element {
  return (
    <div className='
        relative 
        base:mt-[20px]
        2xl:mt-[0px]
        base:w-[200px] 
        md:w-[250px] 
        mmd:w-[280px]
        hover:before:bg-primary-200 
        hover:before:shadow-[-29px_-28px_0px_1px] 
        hover:before:shadow-primary-500 
        before:absolute 
        before:left-[15px] 
        before:top-[15px] 
        before:w-full 
        base:before:h-[200px]
        md:before:h-[250px] 
        mmd:before:h-[280px] 
        before:border-[3px] 
        before:border-solid 
        before:border-primary-200 
        before:rounded-[7px]
        before:duration-150 
        duration-150
      '
    >
      <Image 
        className='base:min-w-[200px] md:min-w-[250px] mmd:w-[250px] mmd:min-w-[280px] md:w-[280px] rounded-[7px] grayscale hover:grayscale-0 duration-150' 
        src='https://i.ibb.co/5KnN7xJ/perfil-photo.jpg'
        width={310}
        height={310}
        alt='diogopereira-perfil-photo'
      />
    </div>
  );
}

export function AboutMe(): JSX.Element {
  return (
    <section className='flex justify-center base:pt-[200px] mmd:pt-32 py-32'>
      <div className='max-w-[1300px] flex flex-col gap-[40px] base:px-[30px] mmd:px-[100px] xl:px-[180px]'>
        <Title />
        <div className='flex base:flex-col 2xl:flex-row base:items-center 2xl:items-start gap-[50px]'>
          <Description />
          <PerfilPhoto />
        </div>
      </div>
    </section>
  );
}