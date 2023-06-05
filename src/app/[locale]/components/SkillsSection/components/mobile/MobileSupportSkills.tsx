import React from 'react';
import {
  SiTypescript,
  SiVisualstudiocode,
  SiEslint,
  SiPrettier
} from 'react-icons/si';
import { BsGit } from 'react-icons/bs';
import { MobileSkill } from './MobileSkill';
import { useSSRTranslation } from '../../../../../../shared/hooks/useSSRTranslation';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function MobileSupportSkills(): JSX.Element {
  const { t } = await useSSRTranslation();

  return (
    <div className='flex flex-col gap-[15px]'>
      <p className='text-[19px]'>{t('skills.section.supporttechs.title')}</p>
      <div className='flex flex-wrap gap-[8px]'>
        <MobileSkill 
          data={{
            icon: <SiTypescript size={21} color='#549ec8' />,
            title: 'Typescript',
            description: t('skills.section.skill.menu.description.typescript'),
            techExperience: {
              studyStarted: new Date('2/1/2021'),
            },
          }}
        >
          Typescript
        </MobileSkill>
        <MobileSkill 
          data={{
            icon: <BsGit size={22} color='#c88c38' />,
            title: 'Git',
            description: t('skills.section.skill.menu.description.git'),
            techExperience: {
              studyStarted: new Date('3/1/2022'),
            },
          }}
        >
          Git
        </MobileSkill>
        <MobileSkill 
          data={{
            icon: <SiVisualstudiocode size={22} color='#4b8de3' />,
            title: 'VSCode',
            description: t('skills.section.skill.menu.description.vscode'),
            techExperience: {
              studyStarted: new Date('1/1/2020'),
            },
          }}
        >
          VSCode
        </MobileSkill>
        <MobileSkill 
          data={{
            icon: <SiEslint size={21} color='#9d44d7' />,
            title: 'Eslint',
            description: t('skills.section.skill.menu.description.eslint'),
            techExperience: {
              studyStarted: new Date('11/1/2021'),
            },
          }}
        >
          Eslint
        </MobileSkill>
        <MobileSkill 
          data={{
            icon: <SiPrettier size={20} color='#ca6bba' />,
            title: 'Prettier',
            description: t('skills.section.skill.menu.description.prettier'),
            techExperience: {
              studyStarted: new Date('11/1/2021'),
            },
          }}
        >
          Prettier
        </MobileSkill>
      </div>
    </div>
  );
}