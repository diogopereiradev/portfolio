import React from 'react';
import { FaReact } from 'react-icons/fa';
import { useSSRTranslation } from '../../../../../../shared/hooks/useSSRTranslation';
import { TechnologySelectButton } from '../../components/TechnologySelectButton';

import { knowledges } from './knowledges';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function ReactJs(): JSX.Element {
  const { t } = await useSSRTranslation();

  return (
    <TechnologySelectButton
      data={{
        icon: <FaReact size={22} color='#549ec8' />,
        name: 'React.js',
        description: t('experiences.section.skill.menu.description.reactjs'),
        knowledges,
        techExperience: {
          started: new Date('11/7/2021'),
        }
      }}
      selected
    />
  );
}