import React from 'react';
import { SiMui } from 'react-icons/si';
import { useSSRTranslation } from '../../../../../../shared/hooks/useSSRTranslation';
import { TechnologySelectButton } from '../../components/TechnologySelectButton';

import { knowledges } from './knowledges';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function MUI(): JSX.Element {
  const { t } = await useSSRTranslation();

  return (
    <TechnologySelectButton
      data={{
        icon: <SiMui size={22} color='#549ec8' />,
        name: 'MUI',
        description: t('experiences.section.skill.menu.description.mui'),
        knowledges,
        techExperience: {
          started: new Date('4/1/2023'),
          paused: new Date('6/1/2023')
        }
      }}
    />
  );
}