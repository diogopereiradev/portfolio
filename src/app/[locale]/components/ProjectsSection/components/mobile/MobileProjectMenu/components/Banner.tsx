'use client';
import React from 'react';
import Image from 'next/image';
import { setDocumentScroll } from '../../../../../../../../shared/utils/setDocumentScroll';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useMobileProjectMenu } from '../hooks/useMobileProjectMenu';

export function Banner(): JSX.Element {
  const {
    data: { projectThumbImageUrl },
    closeMenu
  } = useMobileProjectMenu();

  const handleCloseMenu = () => {
    setDocumentScroll(true);
    closeMenu();
  };

  return (
    <div className='relative before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#0000006b] border-b-[2px] border-primary-200 border-solid'>
      <Image className='w-full h-[110px] object-cover' loader={({ src }) => src} src={projectThumbImageUrl || ''} width={512} height={130} alt='thumbnail' />
      <button onClick={handleCloseMenu} className='flex justify-center items-center px-0 py-0 absolute right-[40px] top-[50%] translate-y-[-50%] w-[60px] h-[60px] rounded-full bg-secondary-500'>
        <AiOutlineCloseCircle className='text-primary-200' size={40} />
      </button>
    </div>
  );
}