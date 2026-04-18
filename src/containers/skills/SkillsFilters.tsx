import { StyledFilters } from './styles';
import Checkbox from 'src/components/checkbox';
import { checkboxList } from './constants.js';
import { useSelector, useDispatch } from 'react-redux';
import { clearFilters } from 'src/reducers/skills';
import { ChangeEvent } from 'react';
import type { RootState } from 'src/types/redux';

interface SkillsFiltersProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SkillsFilters = ({ onChange }: SkillsFiltersProps) => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state: RootState) => state.skills);

  const handleClearFilters = (e: React.MouseEvent<HTMLButtonElement>) => {
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
