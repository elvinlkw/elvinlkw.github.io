import React from 'react';
import { StyledFilters } from './styles';
import Checkbox from 'src/components/checkbox';
import { checkboxList } from './constants';
import { useSelector } from 'react-redux';

const SkillsFilters = ({ onChange }) => {
  const { filters } = useSelector((state) => state.skills);
  return (
    <StyledFilters>
      <legend className='text-lg'>Filters</legend>
      <div className='flex flex-wrap'>
        {checkboxList.map(({ name, label }) => (
          <Checkbox
            key={label}
            label={label}
            checked={filters.includes(name)}
            name={name}
            onChange={onChange}
          />
        ))}
      </div>
    </StyledFilters>
  );
};

export default SkillsFilters;
