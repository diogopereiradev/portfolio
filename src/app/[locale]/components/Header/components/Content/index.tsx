import React from 'react';
import { useSSRTranslation } from '../../../../../../shared/hooks/useSSRTranslation';
import { LinkButton } from './components/LinkButton';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
async function GrettingsTitle(): JSX.Element {
  const { t } = await useSSRTranslation();
  return <p className='font-title h-[60px] text-secondary-200 font-[500] text-[18px]'>Olá, meu nome é</p>;
}

function Title(): JSX.Element {
  return (
    <div>
      <h3 className='h-[100px] base:text-[calc(17px+4vw)] lg:text-[5.1rem] text-white-100 font-[700]'>Diogo Pereira</h3>
      <h3 className='h-[60px] base:text-[calc(17px+3vw)] lg:text-[4.1rem] text-primary-200 font-[700] base:mt-[-50px] mmd:mt-[-20px] break-all'>Dev Front-End</h3>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
async function Description(): JSX.Element {
  const { t } = await useSSRTranslation();

  return (
    <p className='font-[400] text-[1.1rem] text-primary-100 max-w-[550px] ml-[3px] break-words pr-[20px]'>
      Quarta parte da luta entre PHP e Javascript... Javascript pega o PHP e mete a porrada depois ele bane o PHP eternamente da mão dos Devs já que ele havia se tornado um vicio de muitos desenvolvedores.
    </p>
  );
}

function ControlButtons(): JSX.Element {
  return (
    <div className='relative top-[20px] flex flex-wrap gap-[20px] ml-[3px]'>
      <LinkButton to='https://github.com/FhillSlinger'>Github</LinkButton>
      <LinkButton to='/diogopereira-cv.pdf'>CV</LinkButton>
    </div>
  );
}

export function Content(): JSX.Element {
  return (
    <div className='relative base:p-[50px] xl:p-[0px] xl:left-[200px] 3xl:left-[350px] top-[-50px] flex flex-col gap-[25px]'>
      <GrettingsTitle />
      <Title />
      <Description />
      <ControlButtons />
    </div>
  );
}