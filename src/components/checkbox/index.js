import React from 'react';
import { StyledCheckboxContainer } from './styles';
import { useDispatch } from 'react-redux';
import { updateFilters } from 'src/reducers/skills';

const Checkbox = ({ label, checked, name, size }) => {
  const dispatch = useDispatch();
  return (
    <StyledCheckboxContainer
      className='form-control'
      onChange={(e) => dispatch(updateFilters())}
    >
      <label className='label cursor-pointer'>
        <input
          type='checkbox'
          name={name}
          checked={checked}
          className={`checkbox checkbox-${size}`}
        />
        <span className='label-text'>{label}</span>
      </label>
    </StyledCheckboxContainer>
  );
};

Checkbox.defaultProps = {
  size: 'sm',
  checked: false,
  label: '',
};

export default Checkbox;
