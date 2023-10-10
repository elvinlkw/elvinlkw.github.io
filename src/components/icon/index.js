import React from 'react';
import Icons from 'src/svg/icons';

const Icon = ({ color, size, icon, background }) => {
  const IconComponent = Icons[icon];

  if (!IconComponent) {
    return <></>;
  }

  return <IconComponent color={color} size={size} background={background} />;
};

Icon.defaultProps = {
  background: '',
  size: '20',
};

export default Icon;
