import React from 'react';
import { StyledBubble } from './styles';

const Bubble = ({ children }) => {
  return (
    <StyledBubble className='chat chat-start mb-2 text-xl'>
      <div className='chat-bubble'>{children}</div>
    </StyledBubble>
  );
};

export default Bubble;
