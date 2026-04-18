import Star from 'src/svg/icons/Star.tsx';

interface StarRatingProps {
  size?: number;
  rating?: number;
  maxRating?: number;
  background?: string;
}

const StarRating = ({
  size = 16,
  rating = 0,
  maxRating = 5,
  background = 'none',
}: StarRatingProps) => {
  return (
    <div
      className='flex justify-center my-2 tooltip tooltip-bottom'
      data-tip={`${rating} / ${maxRating}`}
    >
      {Array(maxRating)
        .fill(null)
        .map((_, idx) => (
          <Star
            key={idx}
            size={size}
            background={rating > idx ? background : 'transparent'}
          />
        ))}
    </div>
  );
};

export default StarRating;
