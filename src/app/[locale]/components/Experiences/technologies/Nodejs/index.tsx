import React from 'react';
import { FaNodeJs } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { TechnologySelectButton } from '../../components/TechnologySelectButton';

import { knowledges } from './knowledges';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function NodeJS(): JSX.Element {
  const t = useTranslations();

  return (
    <TechnologySelectButton
      data={{
        icon: <FaNodeJs size={22} color='#468a41' />,
        name: 'Node.js',
        description: t('experiences-section-skill-menu-description-nodejs'),
        knowledges,
        techExperience: {
          started: new Date('4/2/2020')
        }
      }}
    />
  );
}