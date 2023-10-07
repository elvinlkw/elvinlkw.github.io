import React from 'react';
import Bubble from 'src/components/bubble';

const Landing = () => {
  return (
    <>
      <div className='container mx-auto'>
        <div className='container mx-auto p-8 m-10'>
          <Bubble text="hello, I'm" />
          <p className='text-6xl text-black font-bold mb-5'>Elvin Li</p>
          <p className='text-2xl text-black font-bold mb-2'>
            Software Engineer
          </p>
          <p className='text-black text-lg'>
            Let me tell you more about myself!
          </p>
        </div>
      </div>
    </>
  );
};

export default Landing;
