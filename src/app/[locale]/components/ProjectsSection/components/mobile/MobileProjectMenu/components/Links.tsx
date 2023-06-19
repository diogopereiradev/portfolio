import React from 'react';
import { FaGithub } from 'react-icons/fa';

export function Links({ repositoryUrl }: { repositoryUrl: string }): JSX.Element {
  return (
    <div className='flex justify-end px-[30px] mt-[20px]'>
      <a href={repositoryUrl} target='_blank' rel='noreferrer'>
        <FaGithub className='text-primary-200 hover:text-secondary-200 duration-150' size={30} />
      </a>
    </div>
  );
}