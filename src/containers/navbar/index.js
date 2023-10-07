import React from 'react';
import NavLinks from './NavLinks';
import NavIcons from './NavIcons';

const Navbar = () => {
  const hasScroll = false;

  const getColor = (defaultColor) => {
    if (!hasScroll) {
      return defaultColor;
    }

    return defaultColor === 'black' ? 'white' : 'black';
  };

  return (
    <div
      className={`navbar bg-base-100 bg-${getColor('white')} text-${getColor(
        'black'
      )}`}
    >
      <div className={`container mx-auto ${hasScroll ? '' : 'border-b-2'}`}>
        <div className='flex-1'>
          <a className='btn btn-ghost normal-case text-xl' href='!#'>
            Portfolio
          </a>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal items-center px-1'>
            <NavIcons color={getColor('black')} />
            <NavLinks hasScroll={hasScroll} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
