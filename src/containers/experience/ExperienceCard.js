import React from 'react';
import { experiencesList } from './constants';
import { formatDate, calculateDifference } from 'src/utils/date';
import { StyledExperienceCardContainer, StyledExperienceCard } from './styles';

const ExperienceCard = () => {
  return (
    <StyledExperienceCardContainer className='mb-8'>
      {experiencesList.map((experience, idx) => (
        <StyledExperienceCard key={idx}>
          <div className='experience-card-top-content'>
            <h2 className='text-2xl'>{experience.company}</h2>
            <p className='text-lg text-role'>{experience.role}</p>

            <p className='italic text-center'>{experience.location}</p>
            <p className='italic py-1'>
              {formatDate(experience.startDate)} -{' '}
              {experience.isCurrent
                ? 'Present'
                : formatDate(experience.endDate)}{' '}
              <span className='dot'></span>{' '}
              {calculateDifference(
                experience.startDate,
                experience.endDate,
                experience.isCurrent
              )}
            </p>
          </div>
          <div className='experience-card-bottom-content'>
            {experience.isCoop && (
              <div className='float-right badge badge-neutral p-3 italic'>
                Co-op
              </div>
            )}
          </div>
        </StyledExperienceCard>
      ))}
    </StyledExperienceCardContainer>
  );
};

export default ExperienceCard;
