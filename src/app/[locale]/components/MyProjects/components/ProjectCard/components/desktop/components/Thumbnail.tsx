import React from 'react';
import Image from 'next/image';

export function Thumbnail({ thumbnail }: { thumbnail: string }): JSX.Element {
  return (
    <div 
      className='
        base:hidden
        xl:flex
        relative 
        duration-150 
        before:absolute 
        before:left-0 
        before:top-0 
        2xl:before:h-[370px]
        xl:before:h-[280px]
        before:w-full 
        before:rounded-[5px] 
        before:bg-secondary-100 
        before:opacity-[0.6] 
        before:duration-150 
        hover:before:opacity-[0] 
        before:z-[1]
        group
      '
    >
      <Image 
        className='2xl:h-[370px] xl:h-[280px] 2xl:w-[580px] xl:w-[400px] rounded-[5px] grayscale group-hover:grayscale-0 object-cover' 
        src={thumbnail} 
        width={580} 
        height={370} 
        alt='project-thumbnail'
      />
    </div>
  );
}