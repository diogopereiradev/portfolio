import React from 'react';
import { useSSRTranslation } from '../../../../../shared/hooks/useSSRTranslation';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function Description(): JSX.Element {
  const { t } = await useSSRTranslation();
  return (
    <p className='font-[400] text-variant-100'>
      {t('aboutme.section.description.paragraph.1')}
      <br />
      <br />
      {t('aboutme.section.description.paragraph.2')}
      <br />
      <br />
      {t('aboutme.section.description.paragraph.3')}
    </p>
  );
}