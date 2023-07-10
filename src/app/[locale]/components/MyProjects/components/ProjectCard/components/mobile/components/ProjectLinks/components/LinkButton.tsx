import React from 'react';

type LinkButtonProps = {
  children: JSX.Element | JSX.Element[] | string,
  to: string,
  w: number,
  h: number
};

export function LinkButton({ children, to, w, h }: LinkButtonProps): JSX.Element {
  return(
    <a 
      href={to}
      className='
        flex 
        justify-center
        items-center
        rounded-[7px] 
        text-primary-400
        hover:text-primary-500 
        bg-primary-100 
        hover:shadow-[5px_5px_0px_#22ecce,10px_10px_0px_#23c7af] 
        duration-300 
        p-0
      '
      target='_blank'
      rel='noreferrer'
      style={{
        width: `${w}px`,
        height: `${h}px`
      }}
    >
      {children}
    </a>
  );
}