import React from 'react';
import { SiRedux } from 'react-icons/si';
import { useTranslations } from 'next-intl';
import { TechnologySelectButton } from '../../components/TechnologySelectButton';

import { knowledges } from './knowledges';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function Redux(): JSX.Element {
  const t = useTranslations();

  return (
    <TechnologySelectButton
      data={{
        icon: <SiRedux size={22} color='#ae56d0' />,
        name: 'Redux',
        description: t('experiences-section-skill-menu-description-redux'),
        knowledges,
        techExperience: {
          started: new Date('1/1/2023'),
          paused: new Date('3/1/2023')
        }
      }}
    />
  );
}