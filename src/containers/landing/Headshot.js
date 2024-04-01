import React from 'react';

const Headshot = () => {
  return (
    <div className='avatar flex justify-end order-0 md:order-1'>
      <div className='w-80 h-80 md:w-96 md:h-96 rounded-full shadow-2xl'>
        <img src={process.env.PUBLIC_URL + '/headshot.png'} alt='headshot' />
      </div>
    </div>
  );
};

export default Headshot;
