import React from 'react';
import { SiTailwindcss } from 'react-icons/si';
import { useTranslations } from 'next-intl';
import { TechnologySelectButton } from '../../components/TechnologySelectButton';

import { knowledges } from './knowledges';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function Tailwind(): JSX.Element {
  const t = useTranslations();

  return (
    <TechnologySelectButton
      data={{
        icon: <SiTailwindcss size={23} color='#549ec8' />,
        name: 'Tailwind',
        description: t('experiences-section-skill-menu-description-tailwind'),
        knowledges,
        techExperience: {
          started: new Date('2/1/2023')
        }
      }}
    />
  );
}