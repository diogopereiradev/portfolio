import React from 'react';
import { useSSRTranslation } from '../../../../../../shared/hooks/useSSRTranslation';
import { FaReact } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiStyledcomponents
} from 'react-icons/si';
import { MobileSkill } from './MobileSkill';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function MobileFrontEndSkills(): JSX.Element {
  const { t } = await useSSRTranslation();

  return (
    <div className='flex flex-col gap-[15px]'>
      <p className='text-[19px]'>Front-end:</p>
      <div className='flex flex-wrap gap-[8px]'>
        <MobileSkill 
          data={{
            icon: <FaReact className='text-[#549ec8]' size={22}/>,
            title: 'React.js',
            description: t('skills.section.skill.menu.description.reactjs'),
            techExperience: {
              studyStarted: new Date('11/7/2021')
            }
          }}
        >
          React.js
        </MobileSkill>
        <MobileSkill 
          data={{
            icon: <SiRedux size={22} color='#ae56d0' />,
            title: 'Redux',
            description: t('skills.section.skill.menu.description.redux'),
            techExperience: {
              studyStarted: new Date('1/1/2023'),
              studyPaused: new Date('3/1/2023')
            }
          }}
        >
          Redux
        </MobileSkill>
        <MobileSkill 
          data={{
            icon: <SiNextdotjs size={22} color='#54c5b8' />,
            title: 'Next.js',
            description: t('skills.section.skill.menu.description.nextjs'),
            techExperience: {
              studyStarted: new Date('6/1/2022')
            }
          }}
        >
          Next.js
        </MobileSkill>
        <MobileSkill 
          data={{
            icon: <SiTailwindcss size={23} color='#549ec8' />,
            title: 'Tailwind',
            description: t('skills.section.skill.menu.description.tailwind'),
            techExperience: {
              studyStarted: new Date('2/1/2023')
            }
          }}
        >
          Tailwind
        </MobileSkill>
        <MobileSkill 
          data={{
            icon: <SiStyledcomponents size={50} color='#ca6bba' />,
            title: 'SC',
            description: t('skills.section.skill.menu.description.styledcomponents'),
            techExperience: {
              studyStarted: new Date('4/1/2022')
            }
          }}
        >
          Styled-components
        </MobileSkill>
        <MobileSkill 
          data={{
            icon: <SiMui size={22} color='#549ec8' />,
            title: 'MUI',
            description: t('skills.section.skill.menu.description.mui'),
            techExperience: {
              studyStarted: new Date('4/1/2023'),
              studyPaused: new Date('6/1/2023')
            }
          }}
        >
          MUI
        </MobileSkill>
      </div>
    </div>
  );
}