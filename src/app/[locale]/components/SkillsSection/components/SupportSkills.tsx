import React from 'react';
import {
  SiTypescript,
  SiVisualstudiocode,
  SiEslint,
  SiPrettier
} from 'react-icons/si';
import { BsGit } from 'react-icons/bs';
import { Skill } from './Skill';
import { useSSRTranslation } from '../../../../../shared/hooks/useSSRTranslation';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function SupportSkills(): JSX.Element {
  const { t } = await useSSRTranslation();

  return (
    <div className='flex flex-col gap-[15px]'>
      <p className='text-[19px]'>{t('skills.section.supporttechs.title')}</p>
      <div className='flex flex-wrap gap-[8px]'>
        <Skill icon={{ Icon: SiTypescript, size: 21, color: '#549ec8' }}>Typescript</Skill>
        <Skill icon={{ Icon: BsGit, size: 22, color: '#c88c38' }}>Git</Skill>
        <Skill icon={{ Icon: SiVisualstudiocode, size: 22, color: '#4b8de3' }}>VSCode</Skill>
        <Skill icon={{ Icon: SiEslint, size: 21, color: '#9d44d7' }}>Eslint</Skill>
        <Skill icon={{ Icon: SiPrettier, size: 20, color: '#ca6bba' }}>Prettier</Skill>
      </div>
    </div>
  );
}