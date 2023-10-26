import React from 'react';
import { StyledContainer } from './styles';
import { navLinks } from '../navbar/constants';
import Introduction from './Introduction';
import ExperienceCard from './ExperienceCard';
import useFeatureFlag from 'src/hooks/useFeatureFlag';
import { FF_EXPERIENCE } from 'src/features';

const Experience = () => {
  const isEnabled = useFeatureFlag(FF_EXPERIENCE);

  if (!isEnabled) {
    return;
  }

  return (
    <StyledContainer id={navLinks[1].href} className='py-16'>
      <div className='container mx-auto'>
        <h1 className='text-4xl'>Professional Experience</h1>
        <ExperienceCard />
        <Introduction />
      </div>
    </StyledContainer>
  );
};

export default Experience;
