import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import theme from 'src/theme';
import { StyledLandingContainer } from './styles';
import Bubble from 'src/components/bubble';
import Headshot from './Headshot';

const Landing = () => {
  return (
    <StyledLandingContainer className='h-screen flex items-center'>
      <div className='container mx-auto grid grid-cols-2 gap-2'>
        <div className='flex flex-col justify-center'>
          <Bubble>Hi there! My name is..</Bubble>
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
        <Headshot />
      </div>
    </StyledLandingContainer>
  );
};

export default Landing;
