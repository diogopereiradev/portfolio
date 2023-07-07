import React from 'react';
import { FaReact } from 'react-icons/fa';
import { BsGit } from 'react-icons/bs';
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiStyledcomponents,
  SiTypescript
} from 'react-icons/si';
import { useSSRTranslation } from '../../../../../shared/hooks/useSSRTranslation';
import { TechnologySelectButton } from './TechnologySelectButton';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function Technologies(): JSX.Element {
  const { t } = await useSSRTranslation();

  return (
    <ul className='flex base:flex-row lg:flex-col base:overflow-x-scroll lg:overflow-x-visible'>
      <TechnologySelectButton
        data={{
          icon: <FaReact size={22} color='#549ec8' />,
          name: 'React.js',
          description: t('experiences.section.skill.menu.description.reactjs'),
          techExperience: {
            started: new Date('11/7/2021'),
          }
        }}
        selected
      />
      <TechnologySelectButton
        data={{
          icon: <SiRedux size={22} color='#ae56d0' />,
          name: 'Redux',
          description: t('experiences.section.skill.menu.description.redux'),
          techExperience: {
            started: new Date('1/1/2023'),
            paused: new Date('3/1/2023')
          }
        }}
      />
      <TechnologySelectButton
        data={{
          icon: <SiNextdotjs size={22} color='#54c5b8' />,
          name: 'Next.js',
          description: t('experiences.section.skill.menu.description.nextjs'),
          techExperience: {
            started: new Date('6/1/2022')
          }
        }}
      />
      <TechnologySelectButton
        data={{
          icon: <SiTailwindcss size={23} color='#549ec8' />,
          name: 'Tailwind',
          description: t('experiences.section.skill.menu.description.tailwind'),
          techExperience: {
            started: new Date('2/1/2023')
          }
        }}
      />
      <TechnologySelectButton
        data={{
          icon: <SiStyledcomponents size={40} color='#ca6bba' />,
          name: 'SC',
          description: t('experiences.section.skill.menu.description.styledcomponents'),
          techExperience: {
            started: new Date('4/1/2022')
          }
        }}
      />
      <TechnologySelectButton
        data={{
          icon: <SiMui size={22} color='#549ec8' />,
          name: 'MUI',
          description: t('experiences.section.skill.menu.description.mui'),
          techExperience: {
            started: new Date('4/1/2023'),
            paused: new Date('6/1/2023')
          }
        }}
      />
      <TechnologySelectButton
        data={{
          icon: <SiTypescript  size={22} color='#549ec8' />,
          name: 'Typescript',
          description: t('experiences.section.skill.menu.description.typescript'),
          techExperience: {
            started: new Date('2/1/2021'),
          }
        }}
      />
      <TechnologySelectButton
        data={{
          icon: <BsGit size={22} color='#c88c38' />,
          name: 'Git',
          description: t('experiences.section.skill.menu.description.git'),
          techExperience: {
            started: new Date('3/1/2022')
          }
        }}
      />
    </ul>
  );
}