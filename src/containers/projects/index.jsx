import React from 'react';
import { StyledContainer } from './styles.jsx';
import { navLinks } from '../navbar/constants';
import ProjectCard from './ProjectCard.jsx';
import { projects } from './constants.jsx';
import useFeatureFlag from 'src/hooks/useFeatureFlag';
import { FF_PROJECTS } from 'src/features';

const Projects = () => {
  const isEnabled = useFeatureFlag(FF_PROJECTS);

  if (!isEnabled) {
    return;
  }

  return (
    <StyledContainer id={navLinks[2].href} className='py-16'>
      <div className='container mx-auto'>
        <h1 className='text-4xl'>Projects</h1>
        <div className='grid projects-container'>
          {projects.map((project) => (
            <ProjectCard {...project} key={project.name} />
          ))}
        </div>
      </div>
    </StyledContainer>
  );
};

export default Projects;
