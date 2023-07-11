import React from 'react';
import Image from 'next/image';

export function Thumbnail({ thumbnail }: { thumbnail: string }): JSX.Element {
  return (
    <>
      <div
        className='
          absolute 
          left-0
          top-0 
          w-full
          h-full
          duration-150 
          before:absolute 
          before:left-0 
          before:top-0 
          before:w-full
          before:h-full 
          before:rounded-[5px] 
          before:bg-secondary-100 
          before:opacity-[0.8] 
          before:duration-150 
          before:z-[1]
          z-[1]
        '
      />
      <Image
        className='absolute left-0 top-0 w-full h-full object-cover rounded-[5px] grayscale z-[-1]'
        src={thumbnail}
        width={400}
        height={300}
        alt='project-thumbnail'
      />
    </>
  );
}