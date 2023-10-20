import React from 'react';
import CardOptions from './CardOptions';
import { StyledProjectcard } from './styles';

const ProjectCard = ({ name, options, src }) => {
  return (
    <StyledProjectcard className='card card-compact w-96 bg-base-100 shadow-xl'>
      <figure>
        <img src={process.env.PUBLIC_URL + src} alt={name} />
      </figure>
      <div className='card-body'>
        <div className='flex justify-between'>
          <h2 className='card-title'>{name}</h2>
          <CardOptions options={options} />
        </div>
      </div>
    </StyledProjectcard>
  );
};

export default ProjectCard;
