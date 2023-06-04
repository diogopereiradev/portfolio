import React from 'react';

export function MobileSectionSeparator(): JSX.Element {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-[15px] h-[15px] bg-primary-400 mb-[-5px] rounded-full'></div>
      <hr className='w-[3px] h-[150px] bg-primary-400' />
      <div className='w-[15px] h-[15px] bg-primary-400 mt-[-5px] rounded-full'></div>
    </div>
  );
}