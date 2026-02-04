import React from 'react';

const Kebab = ({ size, color, background = '#000' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      fill={background}
    >
      <path
        stroke={color}
        d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z'
      />
    </svg>
  );
};

export default Kebab;
