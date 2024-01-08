import React from 'react';
import { FaReact } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { TechnologySelectButton } from '../../components/TechnologySelectButton';

import { knowledges } from './knowledges';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function ReactJs(): JSX.Element {
  const t = useTranslations();

  return (
    <TechnologySelectButton
      data={{
        icon: <FaReact size={22} color='#549ec8' />,
        name: 'React.js',
        description: t('experiences-section-skill-menu-description-reactjs'),
        knowledges,
        techExperience: {
          started: new Date('6/1/2021'),
        }
      }}
      selected
    />
  );
}
