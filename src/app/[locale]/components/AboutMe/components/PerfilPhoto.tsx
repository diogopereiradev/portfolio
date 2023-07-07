import React from 'react';
import Image from 'next/image';

export function PerfilPhoto(): JSX.Element {
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