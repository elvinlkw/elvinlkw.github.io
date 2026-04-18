import React from 'react';
import { StyledBubble } from './styles';

type BubbleProps = {
  children: React.ReactNode;
};

const Bubble = ({ children }: BubbleProps) => {
  return (
    <StyledBubble className='chat chat-start mb-2 text-xl w-full'>
      <div className='chat-bubble mx-auto md:m-0'>{children}</div>
    </StyledBubble>
  );
};

export default Bubble;
