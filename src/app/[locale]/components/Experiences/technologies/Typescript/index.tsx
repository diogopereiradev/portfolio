import React from 'react';
import { SiTypescript } from 'react-icons/si';
import { useSSRTranslation } from '../../../../../../shared/hooks/useSSRTranslation';
import { TechnologySelectButton } from '../../components/TechnologySelectButton';

import { knowledges } from './knowledges';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function Typescript(): JSX.Element {
  const { t } = await useSSRTranslation();

  return (
    <TechnologySelectButton
      data={{
        icon: <SiTypescript size={22} color='#549ec8' />,
        name: 'Typescript',
        description: t('experiences.section.skill.menu.description.typescript'),
        knowledges,
        techExperience: {
          started: new Date('2/1/2021'),
        }
      }}
    />
  );
}