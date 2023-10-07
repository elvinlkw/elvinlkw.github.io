import React from 'react';
import Icon from 'src/components/icon';
import { navIcons } from './constants';

const NavIcons = ({ color }) => {
  return navIcons.map(({ icon, href }) => (
    <li key={icon}>
      <a className='nav-link' href={href} target='_blank' rel='noreferrer'>
        <Icon icon={icon} size='30' background={color} />
      </a>
    </li>
  ));
};

export default NavIcons;
