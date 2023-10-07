import React from 'react';
import { navLinks } from './constants';

const NavLinks = ({ hasScroll }) => {
  return navLinks.map(({ title, href }) => (
    <li key={title}>
      <a className={hasScroll ? 'nav-link' : ''} href={href}>
        {title}
      </a>
    </li>
  ));
};

export default NavLinks;
