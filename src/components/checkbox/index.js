import React from 'react';
import { StyledCheckboxContainer } from './styles';

const Checkbox = ({ label, checked, name, size, onChange }) => {
  return (
    <StyledCheckboxContainer className='form-control'>
      <label className='label cursor-pointer'>
        <input
          onChange={onChange}
          type='checkbox'
          name={name}
          checked={checked}
          className={`checkbox checkbox-${size}`}
        />
        <span className='label-text text-md'>{label}</span>
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
