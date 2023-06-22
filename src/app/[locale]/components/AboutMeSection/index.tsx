import React from 'react';

import { MobileAboutMe } from './components/MobileAboutMe';
import { DesktopAboutMe } from './components/DesktopAboutMe';

export function AboutMeSection(): JSX.Element {
  return (
    <section id='aboutme'>
      <MobileAboutMe />
      <DesktopAboutMe />
    </section>
  );
}