import React from 'react';
import { BiDownArrowAlt } from 'react-icons/bi';

export function ScrollButton(): JSX.Element {
  return (
    <button className='flex justify-center items-center w-[50px] h-[70px] text-primary-100 p-0'>
      <BiDownArrowAlt size={36} />
    </button>
  );
}