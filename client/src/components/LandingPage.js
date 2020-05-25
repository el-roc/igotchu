import React from 'react';
import { LandingHeader } from './LandingHeader'
import { LandingHero } from './LandingHero'

import '../css/LandingPage.css';

 const LandingPage = () => {
  return (
    <div>
      <LandingHeader />
      <LandingHero />
    </div>
  );
}

export default LandingPage