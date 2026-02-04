import React from 'react';
import { StyledContainer } from './styles.jsx';
import { navLinks } from '../navbar/constants';
import Introduction from './Introduction.jsx';
import ExperienceCard from './ExperienceCard.jsx';
import useFeatureFlag from 'src/hooks/useFeatureFlag';
import { FF_EXPERIENCE } from 'src/features';

const Experience = () => {
  const isEnabled = useFeatureFlag(FF_EXPERIENCE);

  if (!isEnabled) {
    return;
  }

  return (
    <StyledContainer id={navLinks[1].href} className='pt-16 px-6 md:py-16'>
      <div className='container mx-auto'>
        <h1 className='text-4xl text-center md:text-left'>
          Professional Experience and Education
        </h1>
        <ExperienceCard />
        <Introduction />
      </div>
    </StyledContainer>
  );
};

export default Experience;
