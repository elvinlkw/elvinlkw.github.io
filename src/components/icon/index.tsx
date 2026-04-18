import Icons from 'src/svg/icons';

interface IconProps {
  color?: string;
  size?: number | string;
  icon: string;
  background?: string;
}

const Icon = ({ color, size, icon, background }: IconProps) => {
  const IconComponent = Icons[icon as keyof typeof Icons];

  if (!IconComponent) {
    return <></>;
  }

  const numSize = typeof size === 'string' ? parseInt(size, 10) : size;

  return <IconComponent color={color} size={numSize} background={background} />;
};

Icon.defaultProps = {
  background: '',
  size: '20',
};

export default Icon;
