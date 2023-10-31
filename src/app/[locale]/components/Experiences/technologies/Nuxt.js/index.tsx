import React from 'react';
import { FaCaretUp } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { TechnologySelectButton } from '../../components/TechnologySelectButton';

import { knowledges } from './knowledges';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function NuxtJs(): JSX.Element {
  const t = useTranslations();

  return (
    <TechnologySelectButton
      data={{
        icon: <FaCaretUp size={22} color='#70c947' />,
        name: 'Nuxt.js',
        description: t('experiences-section-skill-menu-description-nuxtjs'),
        knowledges,
        techExperience: {
          started: new Date('4/16/2023'),
        }
      }}
    />
  );
}
