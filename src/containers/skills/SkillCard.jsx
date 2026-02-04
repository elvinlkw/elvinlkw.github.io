import React from 'react';
import { motion } from 'framer-motion';
import { StyledCard } from './styles.jsx';
import Icon from 'src/components/icon';
import StarRating from 'src/components/star-rating';
import theme from 'src/theme';
import useFeatureFlag from 'src/hooks/useFeatureFlag';
import { FF_SKILLS_EXPERTISE } from 'src/features';

const SkillCard = ({ name, icon, rating }) => {
  const isEnabled = useFeatureFlag(FF_SKILLS_EXPERTISE);

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.2 }}
      key={icon}
    >
      <StyledCard>
        <div className='card-image flex justify-center'>
          <Icon icon={icon} size={100} />
        </div>
        <div>
          <h3 className='text-md text-center'>{name.toLowerCase()}</h3>
        </div>
        {isEnabled && (
          <StarRating background={theme.colors.iBlue} rating={rating} />
        )}
      </StyledCard>
    </motion.div>
  );
};

export default SkillCard;
