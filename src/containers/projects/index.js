import React from 'react';
import { StyledContainer } from './styles';
import { navLinks } from '../navbar/constants';
import ProjectCard from './ProjectCard';
import { projects } from './constants';

const Projects = () => {
  return (
    <StyledContainer id={navLinks[2].href} className='py-16'>
      <div className='container mx-auto'>
        <h1 className='text-4xl'>Projects</h1>
        <div className='flex gap-16'>
          {projects.map((project) => (
            <ProjectCard {...project} />
          ))}
        </div>
      </div>
    </StyledContainer>
  );
};

export default Projects;
