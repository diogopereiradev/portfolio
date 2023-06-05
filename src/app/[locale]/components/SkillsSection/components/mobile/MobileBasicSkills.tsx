import React from 'react';
import {
  SiCplusplus,
  SiMonogames,
  SiRust,
  SiTauri,
  SiNodedotjs,
  SiExpress,
  SiSqlite,
  SiMysql,
  SiPostgresql
} from 'react-icons/si';
import { BsFiletypeSql } from 'react-icons/bs';
import { TbBrandCSharp } from 'react-icons/tb';
import { MobileSkill } from './MobileSkill';
import { useSSRTranslation } from '../../../../../../shared/hooks/useSSRTranslation';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function MobileBasicSkills(): JSX.Element {
  const { t } = await useSSRTranslation();

  return (
    <div className='flex flex-col gap-[15px]'>
      <p className='text-[19px]'>{t('skills.section.basictechs.title')}</p>
      <div className='flex flex-wrap gap-[8px]'>
        <MobileSkill 
          data={{
            icon: <TbBrandCSharp size={21} color='#549ec8' />,
            title: 'C#',
            description: t('skills.section.skill.menu.description.csharp'),
            techExperience: {
              studyStarted: new Date('6/1/2022'),
              studyPaused: new Date('10/1/2022')
            },
          }}
        >
          C#
        </MobileSkill>
        <MobileSkill 
          data={{
            icon: <SiCplusplus size={22} color='#4b8de3' />,
            title: 'C++',
            description: t('skills.section.skill.menu.description.cplus'),
            techExperience: {
              studyStarted: new Date('1/28/2023'),
              studyPaused: new Date('3/1/2023')
            },
          }}
        >
          C++
        </MobileSkill>
        <MobileSkill 
          data={{
            icon: <SiMonogames size={22} color='#c88c38' />,
            title: 'MonoGame',
            description: t('skills.section.skill.menu.description.monogame'),
            techExperience: {
              studyStarted: new Date('7/1/2022'),
              studyPaused: new Date('10/1/2022')
            },
          }}
        >
          MonoGame
        </MobileSkill>
        <MobileSkill 
          data={{
            icon: <SiRust size={21} color='#c88c38' />,
            title: 'Rust',
            description: t('skills.section.skill.menu.description.rust'),
            techExperience: {
              studyStarted: new Date('1/1/2023'),
              studyPaused: new Date('2/1/2023')
            },
          }}
        >
          Rust
        </MobileSkill>
        <MobileSkill 
          data={{
            icon: <SiTauri size={20} color='#e2ec75' />,
            title: 'Tauri',
            description: t('skills.section.skill.menu.description.tauri'),
            techExperience: {
              studyStarted: new Date('1/1/2023'),
              studyPaused: new Date('2/1/2023')
            },
          }}
        >
          Tauri
        </MobileSkill>
        <MobileSkill 
          data={{
            icon: <SiNodedotjs size={20} color='#33e16f' />,
            title: 'Node.js',
            description: t('skills.section.skill.menu.description.nodejs'),
            techExperience: {
              studyStarted: new Date('1/1/2021'),
              studyPaused: new Date('3/1/2023')
            },
          }}
        >
          Node.js
        </MobileSkill>
        <MobileSkill 
          data={{
            icon: <SiExpress size={20} color='#ffffff' />,
            title: 'Express',
            description: t('skills.section.skill.menu.description.express'),
            techExperience: {
              studyStarted: new Date('1/1/2021'),
              studyPaused: new Date('3/1/2023')
            },
          }}
        >
          Express
        </MobileSkill>
        <MobileSkill 
          data={{
            icon: <BsFiletypeSql size={20} color='#5795eb' />,
            title: 'SQL',
            description: t('skills.section.skill.menu.description.sql'),
            techExperience: {
              studyStarted: new Date('8/1/2021'),
              studyPaused: new Date('10/1/2021')
            },
          }}
        >
          SQL
        </MobileSkill>
        <MobileSkill 
          data={{
            icon: <SiSqlite size={20} color='#7c6eea' />,
            title: 'SQLite',
            description: t('skills.section.skill.menu.description.sqlite'),
            techExperience: {
              studyStarted: new Date('1/1/2022'),
              studyPaused: new Date('3/1/2022')
            },
          }}
        >
          SQLite
        </MobileSkill>
        <MobileSkill 
          data={{
            icon: <SiMysql size={20} color='#64a1ec' />,
            title: 'MySQL',
            description: t('skills.section.skill.menu.description.mysql'),
            techExperience: {
              studyStarted: new Date('4/1/2022'),
              studyPaused: new Date('6/1/2022')
            },
          }}
        >
          MySQL
        </MobileSkill>
        <MobileSkill 
          data={{
            icon: <SiPostgresql size={20} color='#62e18e' />,
            title: 'PostgreSQL',
            description: t('skills.section.skill.menu.description.postgresql'),
            techExperience: {
              studyStarted: new Date('7/1/2022'),
              studyPaused: new Date('9/1/2022')
            },
          }}
        >
          PostgreSQL
        </MobileSkill>
      </div>
    </div>
  );
}