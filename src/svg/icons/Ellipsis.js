import React from 'react';

const Ellipsis = ({ size, color, background }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={background}
      viewBox='0 0 24 24'
      className='inline-block'
      width={size}
      height={size}
    >
      <path
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
      ></path>
    </svg>
  );
};

export default Ellipsis;
