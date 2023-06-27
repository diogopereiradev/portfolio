import React from 'react';
import Image from 'next/image';

export function PerfilPhoto(): JSX.Element {
  return (
    <div className='mmd:hidden 2xl:flex items-center min-w-[300px] mt-[40px]'>
      <Image
        className='w-[300px] h-[350px] object-cover rounded-[20px] border-solid border-[6px] border-primary-100'
        src='https://i.ibb.co/zNs5Mv7/perfil-2.jpg'
        width={300}
        height={350}
        alt='diogo-perfil-photo'
      />
    </div>
  );
}