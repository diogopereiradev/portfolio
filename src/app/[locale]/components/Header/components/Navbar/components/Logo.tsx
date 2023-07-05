import React from 'react';

export function Logo(): JSX.Element {
  return(
    <div className='relative h-[55px]'>
      <div className='logo-border-cut absolute left-0 top-0 min-h-[55px] min-w-[55px] rounded-full border-[5px] border-solid border-primary-100'></div>
      <h3 className='relative left-[76%] top-[34%] text-[35px] font-[600] text-secondary-100'>D</h3>
    </div>
  );
}