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
import { Skill } from './Skill';
import { useSSRTranslation } from '../../../../../shared/hooks/useSSRTranslation';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function BasicSkills(): JSX.Element {
  const { t } = await useSSRTranslation();

  return (
    <div className='flex flex-col gap-[15px]'>
      <p className='text-[19px]'>{t('skills.section.basictechs.title')}</p>
      <div className='flex flex-wrap gap-[8px]'>
        <Skill icon={{ Icon: TbBrandCSharp, size: 21, color: '#549ec8' }}>C#</Skill>
        <Skill icon={{ Icon: SiCplusplus, size: 22, color: '#4b8de3' }}>C++</Skill>
        <Skill icon={{ Icon: SiMonogames, size: 22, color: '#c88c38' }}>MonoGame</Skill>
        <Skill icon={{ Icon: SiRust, size: 21, color: '#c88c38' }}>Rust</Skill>
        <Skill icon={{ Icon: SiTauri, size: 20, color: '#e2ec75' }}>Tauri</Skill>
        <Skill icon={{ Icon: SiNodedotjs, size: 20, color: '#33e16f' }}>Node.js</Skill>
        <Skill icon={{ Icon: SiExpress, size: 20, color: '#ffffff' }}>Express</Skill>
        <Skill icon={{ Icon: BsFiletypeSql, size: 20, color: '#5795eb' }}>SQL</Skill>
        <Skill icon={{ Icon: SiSqlite, size: 20, color: '#7c6eea' }}>SQLite</Skill>
        <Skill icon={{ Icon: SiMysql, size: 20, color: '#64a1ec' }}>MySQL</Skill>
        <Skill icon={{ Icon: SiPostgresql, size: 20, color: '#62e18e' }}>PostgreSQL</Skill>
      </div>
    </div>
  );
}