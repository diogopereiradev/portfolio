import React from 'react';
import Image from 'next/image';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CloseButton } from './components/CloseButton';

export function Banner({ thumbUrl }: { thumbUrl: string }): JSX.Element {
  return (
    <div className='relative before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#0000006b] border-b-[2px] border-primary-200 border-solid'>
      <Image className='w-full h-[110px] object-cover' src={thumbUrl} width={512} height={130} alt='thumbnail'/>
      <CloseButton>
        <AiOutlineCloseCircle className='text-primary-200' size={40} />
      </CloseButton>
    </div>
  );
}