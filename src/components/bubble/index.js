import React from 'react';
import { StyledBubble } from './styles';
import PropTypes from 'prop-types';

const Bubble = ({ children }) => {
  return <StyledBubble>{children}</StyledBubble>;
};

Bubble.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Bubble;
