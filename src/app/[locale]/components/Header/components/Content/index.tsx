import React from 'react';
import { useSSRTranslation } from '../../../../../../shared/hooks/useSSRTranslation';

import { LinkButton } from './components/LinkButton';

export function Content(): JSX.Element {
  return (
    <div className='flex items-center relative w-full h-full base:pl-[10%] 2xl:pl-[20%] pr-[50px]'>
      <div className='flex flex-col gap-[35px] base:mt-[0px] xl:mt-[-50px] base:pt-[100px] mmd:pt-[0px]'>
        <p className='text-[18px] font-[500] text-secondary-200 leading-[1] pl-[4px]'>Hi, my name is</p>
        <div>
          <h2 className='base:text-[calc(25px+5.5vw)] xl:text-[80px] text-white-300 leading-[1]'>Diogo Pereira</h2>
          <h2 className='base:text-[calc(25px+5.5vw)] xl:text-[75px] text-primary-100 leading-[1]'>Desenvolvedor Front-End</h2>
        </div>
        <p className='font-[400] base:text-[15px] xl:text-[16px] text-primary-100 max-w-[600px] pl-[4px] mt-[-10px]'>
          Testando, blablabla, aasds este é um teste e isso é apenas um texto de mock
          pois preciso de informações informativas para mostras em tela e informar quem está
          criando essa página, é apenas um teste aaaa teste aaa teste.
        </p>
        <div className='relative top-[10px] flex flex-wrap gap-[20px]'>
          <LinkButton to='https://github.com/FhillSlinger'>Github</LinkButton>
          <LinkButton to='/diogopereira-cv.pdf'>CV</LinkButton>
        </div>
      </div>
    </div>
  );
}