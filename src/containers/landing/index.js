import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import theme from 'src/theme';

const Landing = () => {
  return (
    <div
      className='h-screen flex items-center'
      style={{
        backgroundImage: 'url("https://wallpaper.dog/large/20361808.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className='container mx-auto grid grid-cols-2 gap-2'>
        <div className='flex flex-col justify-center'>
          <div className='chat chat-start mb-2 text-xl'>
            <div
              className='chat-bubble'
              style={{
                background: theme.colors.iBlue,
                color: theme.colors.white,
              }}
            >
              Hi there! I am..
            </div>
          </div>
          <p className='text-7xl text-black font-bold mb-2'>Elvin Li</p>
          <p className='text-3xl mb-3'>
            I am a{' '}
            <TypeAnimation
              sequence={[
                'frontend developer',
                5000,
                'backend developer',
                5000,
                'full stack developer',
                5000,
                'software developer',
                5000,
              ]}
              wrapper='span'
              speed={50}
              style={{
                display: 'inline-block',
                color: theme.colors.iBlue,
              }}
              repeat={Infinity}
            />
          </p>
          <p className='text-lg'>
            I am a Toronto-based software developer with 3 years of experience
            providing high-impact web solutions.
          </p>
        </div>
        <div className='avatar flex justify-end'>
          <div
            className='w-96 h-96 rounded-full shadow-2xl'
            style={{ background: theme.colors.iBlue }}
          >
            <img src='/headshot.png' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
