import React from 'react';
import { navLinks } from './constants.jsx';
import { useSelector } from 'react-redux';

const NavLinks = ({ hasScroll }) => {
  const features = useSelector((state) => state.features);

  return navLinks.map(({ title, href, featureFlag }) => {
    if (!features?.[featureFlag] || features?.[featureFlag] === null) {
      return null;
    }

    return (
      <li key={title}>
        <a className={hasScroll ? 'nav-link' : ''} href={`#${href}`}>
          {title}
        </a>
      </li>
    );
  });
};

export default NavLinks;
