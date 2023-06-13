import React from 'react';
import { useSSRTranslation } from '../../../../../shared/hooks/useSSRTranslation';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function TitleAndDescription(): JSX.Element {
  const { t } = await useSSRTranslation();

  return (
    <div className='flex flex-col justify-center'>
      <h1
        className='
          relative
          text-[12vw]
          font-[400]
          before:absolute
          before:left-[-6%]
          before:top-[55%]
          before:w-[95%]
          before:h-[51%]
          before:bg-primary-200
          before:rounded-full
          before:z-[-1]
        '
      >
        Diogo Pereira
      </h1>
      <h3 className='font-text text-[6vw] text-primary-200 font-[700] ml-[5px] mt-[2vw] md:mt-[5vw] 3xl:text-[70px]'>{t('header.title.description')}</h3>
    </div>
  );
}