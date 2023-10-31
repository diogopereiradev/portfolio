import React from 'react';
import { BsGit } from 'react-icons/bs';
import { useTranslations } from 'next-intl';
import { TechnologySelectButton } from '../../components/TechnologySelectButton';

import { knowledges } from './knowledges';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function Git(): JSX.Element {
  const t = useTranslations();

  return (
    <TechnologySelectButton
      data={{
        icon: <BsGit size={22} color='#c88c38' />,
        name: 'Git',
        description: t('experiences-section-skill-menu-description-git'),
        knowledges,
        techExperience: {
          started: new Date('3/1/2022')
        }
      }}
    />
  );
}