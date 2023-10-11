import React from 'react';
import NavLinks from './NavLinks';
import NavIcons from './NavIcons';
import useScroll from 'src/hooks/useScroll';
import cn from 'classnames';
import { StyledContainer } from './styles';

const Navbar = () => {
  const scrollPosition = useScroll();
  const hasScroll = !!scrollPosition;

  return (
    <StyledContainer
      className={`transition transition-colors ease-in duration-500 z-50 navbar ${cn(
        { 'bg-blue shadow-xl': hasScroll }
      )}`}
    >
      <div className={`container mx-auto ${cn({ 'border-b-2': !hasScroll })}`}>
        <div className='flex-1'>
          <a
            className={`btn btn-ghost normal-case text-xl ${cn({
              'text-white': hasScroll,
            })}`}
            href='!#'
          >
            Elvin
          </a>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal items-center px-1'>
            <NavIcons color={hasScroll ? 'white' : null} />
            <NavLinks hasScroll={hasScroll} />
          </ul>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Navbar;
