import { useEffect, useState } from 'react';
import throttle from 'lodash/throttle';

const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = throttle(() => {
    setScrollPosition(window.scrollY);
  }, 1000);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return scrollPosition;
};

export default useScroll;
