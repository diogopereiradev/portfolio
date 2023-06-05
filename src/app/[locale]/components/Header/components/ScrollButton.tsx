import React from 'react';
import { BiDownArrowAlt } from 'react-icons/bi';

export function ScrollButton(): JSX.Element {
  return (
    <a href='#aboutme' className='flex justify-center items-center w-[50px] h-[70px] bg-primary-100 hover:bg-primary-300 rounded-full text-primary-100 hover:text-primary-200 p-0 cursor-pointer'>
      <BiDownArrowAlt size={36} />
    </a>
  );
}