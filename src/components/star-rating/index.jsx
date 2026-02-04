import React from 'react';
import Star from 'src/svg/icons/Star';

const StarRating = ({
  size = 16,
  rating = 0,
  maxRating = 5,
  background = 'none',
}) => {
  return (
    <div
      className='flex justify-center my-2 tooltip tooltip-bottom'
      data-tip={`${rating} / ${maxRating}`}
    >
      {Array(maxRating)
        .fill()
        .map((_, idx) => (
          <Star
            key={idx}
            size={size}
            background={rating > idx ? background : 'transparent'}
            isHalf={rating - idx > 0 && rating - idx < 1}
          />
        ))}
    </div>
  );
};

export default StarRating;
