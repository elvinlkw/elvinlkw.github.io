import React from 'react';
import { StyledFooter } from './styles.jsx';

const Footer = () => {
  return <StyledFooter>&copy; {new Date().getFullYear()}</StyledFooter>;
};

export default Footer;
