import React from 'react';
import Image from 'next/image';
import { useSSRTranslation } from '../../../../../shared/hooks/useSSRTranslation';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function DesktopAboutMe(): JSX.Element {
  const { t } = await useSSRTranslation();

  return (
    <div className='relative hidden mmd:flex items-center py-[100px] mmd:px-[50px] xl:px-[120px] overflow-hidden'>
      <div className="absolute left-[-150px] top-[60%] translate-y-[-50%] w-[300px] h-[300px] bg-primary-400 blur-[50px] opacity-[0.05] rounded-full animate-pulse z-[-1]"></div>
      <div className='bg-secondary-0 min-h-[480px] w-full max-w-[1080px] rounded-[50px] px-[80px] py-[100px] backdrop-blur-3xl'>
        <div className='flex items-center gap-[50px]'>
          <h3 className='text-primary-100 lg:text-[72px] mmd:text-[65px]'>{t('aboutme.section.title')}</h3>
          <div className='bg-primary-100 mt-[6px] h-[20px] w-[25%] rounded-full mmd:hidden xl:inline'></div>
        </div>
        <div className='flex gap-[30px]'>
          <div className='flex flex-col gap-[15px] mmd:pr-[0px] 2xl:pr-[50px] pt-[70px] px-[5px]'>
            <p className='text-[#B1B1B1] font-[600]'>{t('aboutme.section.description.paragraph.1')}</p>
            <p className='text-[#B1B1B1] font-[600]'>{t('aboutme.section.description.paragraph.2')}</p>
            <p className='text-[#B1B1B1] font-[600]'>{t('aboutme.section.description.paragraph.3')}</p>
          </div>
          <div className='mmd:hidden 2xl:flex items-center min-w-[300px] mt-[40px]'>
            <Image 
              className='w-[300px] h-[350px] object-cover rounded-[20px] border-solid border-[6px] border-primary-100' 
              src='https://i.ibb.co/zNs5Mv7/perfil-2.jpg'
              width={300}
              height={350}
              alt='diogo-perfil-photo'
            />
          </div>
        </div>
      </div>
    </div>
  );
}