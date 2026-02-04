import React from 'react';
import NavLinks from './NavLinks.jsx';
import NavIcons from './NavIcons.jsx';
import useScroll from 'src/hooks/useScroll';
import cn from 'classnames';
import { StyledContainer, StyledCaret } from './styles.jsx';
import Icon from 'src/components/icon';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const scrollPosition = useScroll();
  const hasScroll = !!scrollPosition;

  return (
    <>
      <StyledContainer
        className={`transition transition-colors ease-in duration-500 z-50 navbar ${cn(
          { 'bg-blue shadow-xl': hasScroll }
        )}`}
      >
        <div
          className={`container mx-auto ${cn({ 'border-b-2': !hasScroll })}`}
        >
          <div className='flex-1'>
            <div
              className={`btn btn-ghost normal-case text-xl ${cn({
                'text-white': hasScroll,
              })}`}
              href='!#'
            >
              Elvin Li
            </div>
          </div>
          <div className='flex-none'>
            <ul className='menu menu-horizontal items-center px-1'>
              <NavIcons color={hasScroll ? 'white' : null} />
              <NavLinks hasScroll={hasScroll} />
            </ul>
          </div>
        </div>
      </StyledContainer>
      <AnimatePresence>
        {hasScroll && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <StyledCaret onClick={() => window.scrollTo(0, 0)}>
              <Icon icon='CaretDown' size={30} background='#fff' />
            </StyledCaret>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
