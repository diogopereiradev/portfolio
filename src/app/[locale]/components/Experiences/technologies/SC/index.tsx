import React from 'react';
import { SiStyledcomponents } from 'react-icons/si';
import { useSSRTranslation } from '../../../../../../shared/hooks/useSSRTranslation';
import { TechnologySelectButton } from '../../components/TechnologySelectButton';

import { knowledges } from './knowledges';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function SC(): JSX.Element {
  const { t } = await useSSRTranslation();

  return (
    <TechnologySelectButton
      data={{
        icon: <SiStyledcomponents size={40} color='#ca6bba' />,
        name: 'SC',
        description: t('experiences.section.skill.menu.description.styledcomponents'),
        knowledges,
        techExperience: {
          started: new Date('4/1/2022')
        }
      }}
    />
  );
}