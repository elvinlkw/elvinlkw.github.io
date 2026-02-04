import React from 'react';
import { StyledFilters } from './styles.jsx';
import Checkbox from 'src/components/checkbox';
import { checkboxList } from './constants.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { clearFilters } from 'src/reducers/skills';

const SkillsFilters = ({ onChange }) => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.skills);

  const handleClearFilters = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };

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
      <button
        className='float-right text-blue hover:underline text-md'
        disabled={!filters.length}
        onClick={handleClearFilters}
      >
        Clear Filters
      </button>
    </StyledFilters>
  );
};

export default SkillsFilters;
