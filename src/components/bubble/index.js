import React from 'react';
import { StyledBubble } from './styles';

const Bubble = ({ children }) => {
  return (
    <StyledBubble className='chat chat-start mb-2 text-xl w-full'>
      <div className='chat-bubble mx-auto md:m-0'>{children}</div>
    </StyledBubble>
  );
};

export default Bubble;
