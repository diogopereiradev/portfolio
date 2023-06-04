import React from 'react';
import { FaReact } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiStyledcomponents
} from 'react-icons/si';
import { Skill } from './Skill';

export function FrontEndSkills(): JSX.Element {
  return (
    <div className='flex flex-col gap-[15px]'>
      <p className='text-[19px]'>Front-end:</p>
      <div className='flex flex-wrap gap-[8px]'>
        <Skill icon={{ Icon: FaReact, size: 22, color: '#549ec8' }}>React.js</Skill>
        <Skill icon={{ Icon: SiRedux, size: 22, color: '#ae56d0' }}>Redux</Skill>
        <Skill icon={{ Icon: SiNextdotjs, size: 22, color: '#54c5b8' }}>Next.js</Skill>
        <Skill icon={{ Icon: SiTailwindcss, size: 23, color: '#549ec8' }}>Tailwind</Skill>
        <Skill icon={{ Icon: SiStyledcomponents, size: 50, color: '#ca6bba' }}>Styled-Componentes</Skill>
        <Skill icon={{ Icon: SiMui, size: 22, color: '#549ec8' }}>Material-UI</Skill>
      </div>
    </div>
  );
}