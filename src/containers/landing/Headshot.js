import React from 'react';

const Headshot = () => {
  return (
    <div className='avatar flex justify-end'>
      <div className='w-96 h-96 rounded-full shadow-2xl'>
        <img src='/headshot.png' alt='headshot' />
      </div>
    </div>
  );
};

export default Headshot;
