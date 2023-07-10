import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

import { LinkButton } from './components/LinkButton';

export function ProjectLinks({ repositoryUrl, projectUrl }: { repositoryUrl: string, projectUrl: string }): JSX.Element {
  return (
    <div className='relative flex gap-[15px]'>
      <LinkButton w={55} h={55} to={repositoryUrl}><FiGithub size={22} /></LinkButton>
      {!projectUrl.startsWith('https://github.com') && projectUrl != '' && <LinkButton w={55} h={55} to={projectUrl}><FiExternalLink className='mt-[-3px]' size={22} /></LinkButton>}
    </div>
  );
}