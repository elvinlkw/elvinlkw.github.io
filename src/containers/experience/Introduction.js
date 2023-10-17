import React from 'react';
import { experienceParagraphs } from './constants';

const Introduction = () => {
  return (
    <div className='mb-4'>
      {experienceParagraphs.map((expText) => (
        <p key={expText} className='text-lg mb-4 section-text'>
          {expText}
        </p>
      ))}
    </div>
  );
};

export default Introduction;
