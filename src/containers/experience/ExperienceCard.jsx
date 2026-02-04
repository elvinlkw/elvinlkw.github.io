import React from 'react';
import { experiencesList } from './constants.jsx';
import { formatDate, calculateDifference } from 'src/utils/date';
import { StyledExperienceCardContainer, StyledExperienceCard } from './styles.jsx';

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
      <StyledExperienceCard>
        <div className='experience-card-top-content'>
          <h2 className='text-2xl'>University of Waterloo</h2>
          <p className='text-lg text-role'>
            BSc, Honors Electrical Engineering (Co-op)
          </p>
          <p className='italic text-center'>Waterloo, Canada</p>
          <p className='italic py-1'>
            {formatDate('09/09/2012')} - {formatDate('04/30/2018')}
          </p>
        </div>
        <div className='experience-card-bottom-content'>
          <div className='float-right badge badge-accent p-3 italic'>
            School
          </div>
        </div>
      </StyledExperienceCard>
    </StyledExperienceCardContainer>
  );
};

export default ExperienceCard;
