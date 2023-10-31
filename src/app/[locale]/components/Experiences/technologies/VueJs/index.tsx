import React from 'react';
import { FaVuejs } from 'react-icons/fa';
import { useSSRTranslation } from '../../../../../../shared/hooks/useSSRTranslation';
import { TechnologySelectButton } from '../../components/TechnologySelectButton';

import { knowledges } from './knowledges';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function VueJs(): JSX.Element {
  const { t } = await useSSRTranslation();

  return (
    <TechnologySelectButton
      data={{
        icon: <FaVuejs size={22} color='#70c947' />,
        name: 'Vue.js',
        description: t('experiences.section.skill.menu.description.vuejs'),
        knowledges,
        techExperience: {
          started: new Date('3/8/2023'),
        }
      }}
      selected
    />
  );
}