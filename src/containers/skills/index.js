import React from 'react';
import { StyledContainer, StyledFilters } from './styles';
import Icon from 'src/components/icon';
import Checkbox from 'src/components/checkbox';

const Skills = () => {
  return (
    <StyledContainer className='py-12'>
      <div className='container mx-auto grid grid-cols-3 gap-8'>
        <div>
          <h1 className='text-4xl'>Skills & Tooling</h1>
          <div className='text-lg mb-8'>
            In this fast-paced world of software engineering, staying ahead and
            updated means having a versatile and robust set of technical skills
            ranging from programming languages, web frameworks, testing and
            quality assurance, problem solving and much more.
          </div>
          <StyledFilters>
            <legend className='text-lg'>Filters</legend>

            <div className='flex flex-wrap'>
              <Checkbox label='Front-End Development' />
              <Checkbox label='Back-End Development' />
              <Checkbox label='DevOps and Tools' />
              <Checkbox label='Version Control' />
              <Checkbox label='Operating Systems' />
              <Checkbox label='Agile and Project Management' />
            </div>
          </StyledFilters>
        </div>
        <div className='col-span-2 icon-container'>
          <Icon icon='AWS' size={100} />
          <Icon icon='Bash' size={100} />
          <Icon icon='Bitbucket' size={100} />
          <Icon icon='Bootstrap' size={100} />
          <Icon icon='Confluence' size={100} />
          <Icon icon='CSS' size={100} />
          <Icon icon='Docker' size={100} />
          <Icon icon='Figma' size={100} />
          <Icon icon='Git' size={100} />
          <Icon icon='GithubIcon' size={100} />
          <Icon icon='Gitlab' size={100} />
          <Icon icon='Go' size={100} />
          <Icon icon='Graphql' size={100} />
          <Icon icon='HTML' size={100} />
          <Icon icon='Java' size={100} />
          <Icon icon='Javascript' size={100} />
          <Icon icon='Jest' size={100} />
          <Icon icon='Jira' size={100} />
          <Icon icon='Jquery' size={100} />
          <Icon icon='Linux' size={100} />
          <Icon icon='Mongodb' size={100} />
          <Icon icon='Mysql' size={100} />
          <Icon icon='Nextjs' size={100} />
          <Icon icon='Postgressql' size={100} />
          <Icon icon='Python' size={100} />
          <Icon icon='React' size={100} />
          <Icon icon='Redux' size={100} />
          <Icon icon='Spring' size={100} />
          <Icon icon='Storybook' size={100} />
          <Icon icon='Tailwindcss' size={100} />
          <Icon icon='Terraform' size={100} />
          <Icon icon='Typescript' size={100} />
        </div>
      </div>
    </StyledContainer>
  );
};

export default Skills;
