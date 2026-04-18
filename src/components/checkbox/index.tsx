import React from 'react';
import { StyledCheckboxContainer } from './styles.js';

type CheckboxProps = {
  label: React.ReactNode;
  checked: boolean;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: 'sm' | 'md' | 'lg';
};

const Checkbox = ({
  size = 'md',
  label,
  checked,
  name,
  onChange,
}: CheckboxProps) => {
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

export default Checkbox;
