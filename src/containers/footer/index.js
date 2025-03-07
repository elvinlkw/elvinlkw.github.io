import React from 'react';
import { StyledFooter } from './styles';

const Footer = () => {
  return <StyledFooter>&copy; {new Date().getFullYear()}</StyledFooter>;
};

export default Footer;
