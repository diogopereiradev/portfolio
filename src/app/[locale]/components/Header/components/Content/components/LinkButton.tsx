import React from 'react';

type LinkButtonProps = {
  children: JSX.Element | JSX.Element[] | string,
  to: string,
  w: number,
  h: number,
  download?: boolean
};

export function LinkButton({ children, to, w, h, download = false }: LinkButtonProps): JSX.Element {
  return(
    <a 
      href={to}
      className='
        flex 
        justify-center
        items-center
        rounded-[7px] 
        border-[3px] 
        border-solid 
        border-primary-100 
        bg-transparent 
        text-secondary-100 
        hover:bg-transparent 
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
      download={download}
    >
      {children}
    </a>
  );
}