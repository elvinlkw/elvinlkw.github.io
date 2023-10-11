import React from 'react';
import { StyledContainer, StyledFilters } from './styles';
import Icon from 'src/components/icon';
import Checkbox from 'src/components/checkbox';
import { useDispatch, useSelector } from 'react-redux';
import sortBy from 'lodash/sortBy';
import { checkboxList } from './constants';
import { addFilter, removeFilter } from 'src/reducers/skills';

const Skills = () => {
  const dispatch = useDispatch();
  const { skillsets, filters } = useSelector((state) => state.skills);

  const handleChange = (e) => {
    dispatch(
      e.target.checked ? addFilter(e.target.name) : removeFilter(e.target.name)
    );
  };

  return (
    <StyledContainer className='py-12 h-screen'>
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
              {checkboxList.map(({ name, label }) => (
                <Checkbox
                  label={label}
                  checked={filters.includes(name)}
                  name={name}
                  onChange={handleChange}
                />
              ))}
            </div>
          </StyledFilters>
        </div>
        <div className='col-span-2 icon-container'>
          {sortBy(skillsets, (sk) => sk.name).map(({ name, icon }) => (
            <li key={icon} className='tooltip tooltip-bottom' data-tip={name}>
              <Icon icon={icon} size={100} />
            </li>
          ))}
        </div>
      </div>
    </StyledContainer>
  );
};

export default Skills;
