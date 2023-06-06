'use client';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { useMobileProjectMenu } from '../hooks/useMobileProjectMenu';

export function Links(): JSX.Element {
  const { data: { projectRepositoryUrl } } = useMobileProjectMenu();

  return (
    <div className='flex justify-end px-[30px] mt-[20px]'>
      <a href={projectRepositoryUrl} target='_blank' rel='noreferrer'>
        <FaGithub className='text-primary-200 hover:text-secondary-200 duration-150' size={30} />
      </a>
    </div>
  );
}