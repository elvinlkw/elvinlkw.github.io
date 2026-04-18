interface IconProps {
  size?: number;
  color?: string;
  background?: string;
}

const Ellipsis = (props: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={props.background}
      viewBox='0 0 24 24'
      className='inline-block'
      width={props.size}
      height={props.size}
    >
      <path
        stroke={props.color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
      ></path>
    </svg>
  );
};

export default Ellipsis;
